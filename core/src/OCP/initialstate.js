/*
 * @copyright Copyright (c) 2019 Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * @namespace OCP
 * @class InitialState
 */
export default {
	loadState: function(app) {
		const elem = document.querySelector('#initial-state-' + app);
		if (elem === null) {
			console.error('Could not find initial state of ' + app);
			throw new Error('Could not find initial state of ' + app);
		}

		try {
			return JSON.parse(atob(elem.value));
		} catch (e) {
			console.error('Could not parse initial state of ' + app);
			throw new Error('Could not parse initial state of ' + app);
		}
	},
}
