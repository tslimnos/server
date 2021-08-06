/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
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
const path = require('path')

module.exports = {
	accessibility: {
		accessibility: path.join(__dirname, 'apps/accessibility/src', 'main.js'),
		accessibilityoca: path.join(__dirname, 'apps/accessibility/src', 'accessibilityoca.js'),
	},
	comments: {
		comments: path.join(__dirname, 'apps/comments/src', 'comments.js'),
		'comments-app': path.join(__dirname, 'apps/comments/src', 'comments-app.js'),
		'comments-tab': path.join(__dirname, 'apps/comments/src', 'comments-tab.js'),
	},
	core: {
		files_client: path.join(__dirname, 'core/src', 'files/client.js'),
		files_fileinfo: path.join(__dirname, 'core/src', 'files/fileinfo.js'),
		files_iedavclient: path.join(__dirname, 'core/src', 'files/iedavclient.js'),
		install: path.join(__dirname, 'core/src', 'install.js'),
		login: path.join(__dirname, 'core/src', 'login.js'),
		main: path.join(__dirname, 'core/src', 'main.js'),
		maintenance: path.join(__dirname, 'core/src', 'maintenance.js'),
		recommendedapps: path.join(__dirname, 'core/src', 'recommendedapps.js'),
		'unified-search': path.join(__dirname, 'core/src', 'unified-search.js'),
		systemtags: path.resolve(__dirname, 'core/src', 'systemtags/merged-systemtags.js'),
	},
	dashboard: {
		'dashboard-main': path.join(__dirname, 'apps/dashboard/src', 'main.js'),
	},
	dav: {
		'settings-admin-caldav': path.join(__dirname, 'apps/dav/src', 'settings.js'),
	},
	files: {
		sidebar: path.join(__dirname, 'apps/files/src', 'sidebar.js'),
		templates: path.join(__dirname, 'apps/files/src', 'templates.js'),
		'files-app-settings': path.join(__dirname, 'apps/files/src', 'files-app-settings.js'),
		'personal-settings': path.join(__dirname, 'apps/files/src', 'main-personal-settings.js'),
	},
	files_sharing: {
		additionalScripts: path.join(__dirname, 'apps/files_sharing/src', 'additionalScripts.js'),
		collaboration: path.join(__dirname, 'apps/files_sharing/src', 'collaborationresourceshandler.js'),
		files_sharing_tab: path.join(__dirname, 'apps/files_sharing/src', 'files_sharing_tab.js'),
		files_sharing: path.join(__dirname, 'apps/files_sharing/src', 'files_sharing.js'),
		main: path.join(__dirname, 'apps/files_sharing/src', 'index.js'),
		'personal-settings': path.join(__dirname, 'apps/files_sharing/src', 'personal-settings.js'),
	},
	files_trashbin: {
		files_trashbin: path.join(__dirname, 'apps/files_trashbin/src', 'files_trashbin.js'),
	},
	files_versions: {
		files_versions: path.join(__dirname, 'apps/files_versions/src', 'files_versions.js'),
	},
	oauth2: {
		oauth2: path.join(__dirname, 'apps/oauth2/src', 'main.js'),
	},
	settings: {
		'settings-apps-users-management': path.join(__dirname, 'apps/settings/src', 'main-apps-users-management.js'),
		'settings-admin-security': path.join(__dirname, 'apps/settings/src', 'main-admin-security.js'),
		'settings-personal-security': path.join(__dirname, 'apps/settings/src', 'main-personal-security.js'),
		'settings-personal-webauthn': path.join(__dirname, 'apps/settings/src', 'main-personal-webauth.js'),
		'settings-nextcloud-pdf': path.join(__dirname, 'apps/settings/src', 'main-nextcloud-pdf.js'),
		'settings-personal-info': path.join(__dirname, 'apps/settings/src', 'main-personal-info.js'),
	},
	systemtags: {
		systemtags: path.join(__dirname, 'apps/systemtags/src', 'systemtags.js'),
	},
	user_status: {
		'user_status-dashboard': path.join(__dirname, 'apps/user_status/src', 'dashboard.js'),
		'user_status-menu': path.join(__dirname, 'apps/user_status/src', 'main-user-status-menu.js'),
	},
	weather_status: {
		'weather-status': path.join(__dirname, 'apps/weather_status/src', 'weather-status.js'),
	},
	twofactor_backupscodes: {
		settings: path.join(__dirname, 'apps/twofactor_backupcodes/src', 'settings.js'),
	},
	updatenotification: {
		updatenotification: path.join(__dirname, 'apps/updatenotification/src', 'init.js'),
	},
	workflowengine: {
		workflowengine: path.join(__dirname, 'apps/workflowengine/src', 'workflowengine.js'),
	},
}
