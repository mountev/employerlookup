<?php
use CRM_Employerlookup_ExtensionUtil as E;

/**
 * Employerlookup.Get API
 *
 * @param array $params
 *
 * @return array
 *   API result descriptor
 *
 * @see civicrm_api3_create_success
 *
 * @throws API_Exception
 */
function civicrm_api3_employerlookup_Get($params) {
  $result = ['values' => []];
  if (!empty($params['params']['contact_type']) && $params['params']['contact_type'] == 'Organization') {
    $params['check_permissions'] = false;
    $result = civicrm_api3('Contact', 'getlist', $params);
  }
  return $result['values'] ?? [];
}
