<?php

declare(strict_types=1);

namespace OC\Core\Migrations;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version24000Date20211230140012 extends SimpleMigrationStep {
	/** @var IDBConnection */
	protected $connection;

	public function __construct(IDBConnection $connection) {
		$this->connection = $connection;
	}

	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable('jobs');
		if (!$table->hasColumn('argument_hash')) {
			$table->addColumn('argument_hash', Types::STRING, [
				'notnull' => false,
				'length' => 64,
			]);
			$table->addIndex(['class', 'argument_hash'], 'job_argument_hash');
			return $schema;
		}
		return null;
	}

	public function postSchemaChange(IOutput $output, \Closure $schemaClosure, array $options) {
		$update = $this->connection->getQueryBuilder();

		$update->update('jobs')
			->set('argument_hash', $update->func()->md5('argument'));

		$update->executeStatement();
	}

}
