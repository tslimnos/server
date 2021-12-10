<!--
	- @copyright 2021 Christopher Ng <chrng8@gmail.com>
	-
	- @author Christopher Ng <chrng8@gmail.com>
	-
	- @license GNU AGPL version 3 or any later version
	-
	- This program is free software: you can redistribute it and/or modify
	- it under the terms of the GNU Affero General Public License as
	- published by the Free Software Foundation, either version 3 of the
	- License, or (at your option) any later version.
	-
	- This program is distributed in the hope that it will be useful,
	- but WITHOUT ANY WARRANTY; without even the implied warranty of
	- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	- GNU Affero General Public License for more details.
	-
	- You should have received a copy of the GNU Affero General Public License
	- along with this program. If not, see <http://www.gnu.org/licenses/>.
	-
-->

<template>
	<div
		id="profile-settings"
		class="section"
		:class="{ disabled }">
		<h2 class="inlineblock">
			{{ t('settings', 'Profile') }}
		</h2>

		<p class="settings-hint">
			{{ t('settings', 'Configure whether profile is enabled by default for new users. Users may enable or disable their own profiles individually.') }}
		</p>

		<div class="profile-settings__option-group">
			<CheckboxRadioSwitch
				type="switch"
				:checked.sync="forceChangeExistingUsers"
				@update:checked="onDefaultEnableProfileChange">
				{{ t('settings', 'Apply to existing users as well (by default only applies to newly created users)') }}
			</CheckboxRadioSwitch>
		</div>

		<div class="profile-settings__option-group">
			<div class="profile-settings__option-group__option">
				<input
					id="default-enabled"
					name="profile-default"
					class="radio"
					type="radio"
					:checked="initialProfileDefaultEnabled"
					@change="onDefaultEnableProfileChange">
				<label for="default-enabled">
					{{ t('settings', 'Enabled by default') }}
				</label>
			</div>

			<div class="profile-settings__option-group__option">
				<input
					id="default-disabled"
					name="profile-default"
					class="radio"
					type="radio"
					:checked="!initialProfileDefaultEnabled"
					@change="onDefaultEnableProfileChange">
				<label for="default-disabled">
					{{ t('settings', 'Disabled by default') }}
				</label>
			</div>
		</div>
	</div>
</template>

<script>
import { emit } from '@nextcloud/event-bus'
import { loadState } from '@nextcloud/initial-state'
import { showError } from '@nextcloud/dialogs'

import CheckboxRadioSwitch from '@nextcloud/vue/dist/Components/CheckboxRadioSwitch'

import { saveDefaultEnableProfile } from '../../service/ProfileService'
import { validateBoolean } from '../../utils/validate'

const { profileDefaultEnabled } = loadState('settings', 'profileSettings', {})

export default {
	name: 'ProfileSettings',

	components: {
		CheckboxRadioSwitch,
	},

	data() {
		return {
			forceChangeExistingUsers: false,
			initialProfileDefaultEnabled: profileDefaultEnabled,
		}
	},

	methods: {
		async onDefaultEnableProfileChange(e) {
			const isEnabled = e.target.id === 'default-enabled' && e.target.checked
			this.$emit('update:profile-default-enabled', isEnabled)

			if (validateBoolean(isEnabled)) {
				await this.updateDefaultEnableProfile(isEnabled, this.forceChangeExistingUsers)
			}
		},

		async updateDefaultEnableProfile(isEnabled, forceChangeExistingUsers) {
			try {
				const responseData = await saveDefaultEnableProfile(isEnabled, forceChangeExistingUsers)
				this.handleResponse({
					isEnabled,
					status: responseData.ocs?.meta?.status,
				})
			} catch (e) {
				this.handleResponse({
					errorMessage: t('settings', 'Unable to update default profile enabled state'),
					error: e,
				})
			}
		},

		handleResponse({ isEnabled, status, errorMessage, error }) {
			if (status === 'ok') {
				// Ensure that local state reflects server state
				this.initialDProfileDefaultEnabled = isEnabled
				emit('settings:profile-default-enabled:updated', isEnabled)
			} else {
				showError(errorMessage)
				this.logger.error(errorMessage, error)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.profile-settings {
	&__option-group {
		&__option {
			margin-bottom: 8px;
		}
	}
}
</style>
