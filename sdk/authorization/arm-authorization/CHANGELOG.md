# Release History
    
## 10.0.0-beta.2 (2024-02-03)
    
**Features**

  - Added Interface PIMOnlyModeSettings
  - Added Interface RoleManagementPolicyPimOnlyModeRule
  - Added Type Alias PIMOnlyMode
  - Interface AuthorizationManagementClientOptionalParams has a new optional parameter apiVersion
  - Type of parameter ruleType of interface RoleManagementPolicyRule is changed from "RoleManagementPolicyApprovalRule" | "RoleManagementPolicyAuthenticationContextRule" | "RoleManagementPolicyEnablementRule" | "RoleManagementPolicyExpirationRule" | "RoleManagementPolicyNotificationRule" to "RoleManagementPolicyApprovalRule" | "RoleManagementPolicyAuthenticationContextRule" | "RoleManagementPolicyEnablementRule" | "RoleManagementPolicyExpirationRule" | "RoleManagementPolicyNotificationRule" | "RoleManagementPolicyPimOnlyModeRule"
  - Added Enum KnownPIMOnlyMode
  - Enum KnownRoleManagementPolicyRuleType has a new value RoleManagementPolicyPimOnlyModeRule

**Breaking Changes**

  - Removed operation group ClassicAdministrators
  - Removed operation group DenyAssignments
  - Removed operation group EligibleChildResources
  - Removed operation group GlobalAdministrator
  - Removed operation group Permissions_2
  - Removed operation group ProviderOperationsMetadataOperations
  - Removed operation group RoleAssignments
  - Removed operation group RoleAssignmentScheduleInstances
  - Removed operation group RoleAssignmentScheduleRequests
  - Removed operation group RoleAssignmentSchedules
  - Removed operation group RoleDefinitions
  - Removed operation group RoleEligibilityScheduleInstances
  - Removed operation group RoleEligibilityScheduleRequests
  - Removed operation group RoleEligibilitySchedules
  - Class AuthorizationManagementClient has a new signature
  - Class AuthorizationManagementClient no longer has parameter classicAdministrators
  - Class AuthorizationManagementClient no longer has parameter denyAssignments
  - Class AuthorizationManagementClient no longer has parameter eligibleChildResources
  - Class AuthorizationManagementClient no longer has parameter globalAdministrator
  - Class AuthorizationManagementClient no longer has parameter permissions
  - Class AuthorizationManagementClient no longer has parameter providerOperationsMetadataOperations
  - Class AuthorizationManagementClient no longer has parameter roleAssignments
  - Class AuthorizationManagementClient no longer has parameter roleAssignmentScheduleInstances
  - Class AuthorizationManagementClient no longer has parameter roleAssignmentScheduleRequests
  - Class AuthorizationManagementClient no longer has parameter roleAssignmentSchedules
  - Class AuthorizationManagementClient no longer has parameter roleDefinitions
  - Class AuthorizationManagementClient no longer has parameter roleEligibilityScheduleInstances
  - Class AuthorizationManagementClient no longer has parameter roleEligibilityScheduleRequests
  - Class AuthorizationManagementClient no longer has parameter roleEligibilitySchedules
  - Class AuthorizationManagementClient no longer has parameter subscriptionId
  - Removed Enum KnownAssignmentType
  - Removed Enum KnownMemberType
  - Removed Enum KnownPrincipalType
  - Removed Enum KnownRequestType
  - Removed Enum KnownStatus
  - Removed Enum KnownType
    
    
## 9.0.0 (2023-04-21)

The package of @azure/arm-authorization is using our next generation design principles since version 9.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
