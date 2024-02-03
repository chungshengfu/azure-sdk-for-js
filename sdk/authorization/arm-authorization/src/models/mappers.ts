/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const RoleManagementPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleManagementPolicy",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      scope: {
        serializedName: "properties.scope",
        type: {
          name: "String",
        },
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String",
        },
      },
      isOrganizationDefault: {
        serializedName: "properties.isOrganizationDefault",
        type: {
          name: "Boolean",
        },
      },
      lastModifiedBy: {
        serializedName: "properties.lastModifiedBy",
        type: {
          name: "Composite",
          className: "Principal",
        },
      },
      lastModifiedDateTime: {
        serializedName: "properties.lastModifiedDateTime",
        readOnly: true,
        type: {
          name: "DateTime",
        },
      },
      rules: {
        serializedName: "properties.rules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleManagementPolicyRule",
            },
          },
        },
      },
      effectiveRules: {
        serializedName: "properties.effectiveRules",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleManagementPolicyRule",
            },
          },
        },
      },
      policyProperties: {
        serializedName: "properties.policyProperties",
        type: {
          name: "Composite",
          className: "PolicyProperties",
        },
      },
    },
  },
};

export const Principal: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Principal",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
      email: {
        serializedName: "email",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoleManagementPolicyRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleManagementPolicyRule",
    uberParent: "RoleManagementPolicyRule",
    polymorphicDiscriminator: {
      serializedName: "ruleType",
      clientName: "ruleType",
    },
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      ruleType: {
        serializedName: "ruleType",
        required: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        type: {
          name: "Composite",
          className: "RoleManagementPolicyRuleTarget",
        },
      },
    },
  },
};

export const RoleManagementPolicyRuleTarget: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleManagementPolicyRuleTarget",
    modelProperties: {
      caller: {
        serializedName: "caller",
        type: {
          name: "String",
        },
      },
      operations: {
        serializedName: "operations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      level: {
        serializedName: "level",
        type: {
          name: "String",
        },
      },
      targetObjects: {
        serializedName: "targetObjects",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      inheritableSettings: {
        serializedName: "inheritableSettings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      enforcedSettings: {
        serializedName: "enforcedSettings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const PolicyProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyProperties",
    modelProperties: {
      scope: {
        serializedName: "scope",
        type: {
          name: "Composite",
          className: "PolicyPropertiesScope",
        },
      },
    },
  },
};

export const PolicyPropertiesScope: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyPropertiesScope",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CloudErrorBody",
        },
      },
    },
  },
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoleManagementPolicyListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleManagementPolicyListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleManagementPolicy",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoleManagementPolicyAssignment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleManagementPolicyAssignment",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      scope: {
        serializedName: "properties.scope",
        type: {
          name: "String",
        },
      },
      roleDefinitionId: {
        serializedName: "properties.roleDefinitionId",
        type: {
          name: "String",
        },
      },
      policyId: {
        serializedName: "properties.policyId",
        type: {
          name: "String",
        },
      },
      effectiveRules: {
        serializedName: "properties.effectiveRules",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleManagementPolicyRule",
            },
          },
        },
      },
      policyAssignmentProperties: {
        serializedName: "properties.policyAssignmentProperties",
        type: {
          name: "Composite",
          className: "PolicyAssignmentProperties",
        },
      },
    },
  },
};

export const PolicyAssignmentProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyAssignmentProperties",
    modelProperties: {
      scope: {
        serializedName: "scope",
        type: {
          name: "Composite",
          className: "PolicyAssignmentPropertiesScope",
        },
      },
      roleDefinition: {
        serializedName: "roleDefinition",
        type: {
          name: "Composite",
          className: "PolicyAssignmentPropertiesRoleDefinition",
        },
      },
      policy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "PolicyAssignmentPropertiesPolicy",
        },
      },
    },
  },
};

export const PolicyAssignmentPropertiesScope: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyAssignmentPropertiesScope",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PolicyAssignmentPropertiesRoleDefinition: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "PolicyAssignmentPropertiesRoleDefinition",
      modelProperties: {
        id: {
          serializedName: "id",
          type: {
            name: "String",
          },
        },
        displayName: {
          serializedName: "displayName",
          type: {
            name: "String",
          },
        },
        type: {
          serializedName: "type",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const PolicyAssignmentPropertiesPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolicyAssignmentPropertiesPolicy",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "Composite",
          className: "Principal",
        },
      },
      lastModifiedDateTime: {
        serializedName: "lastModifiedDateTime",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const RoleManagementPolicyAssignmentListResult: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "RoleManagementPolicyAssignmentListResult",
      modelProperties: {
        value: {
          serializedName: "value",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "RoleManagementPolicyAssignment",
              },
            },
          },
        },
        nextLink: {
          serializedName: "nextLink",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const Permission: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Permission",
    modelProperties: {
      actions: {
        serializedName: "actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      notActions: {
        serializedName: "notActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      dataActions: {
        serializedName: "dataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      notDataActions: {
        serializedName: "notDataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const ApprovalSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApprovalSettings",
    modelProperties: {
      isApprovalRequired: {
        serializedName: "isApprovalRequired",
        type: {
          name: "Boolean",
        },
      },
      isApprovalRequiredForExtension: {
        serializedName: "isApprovalRequiredForExtension",
        type: {
          name: "Boolean",
        },
      },
      isRequestorJustificationRequired: {
        serializedName: "isRequestorJustificationRequired",
        type: {
          name: "Boolean",
        },
      },
      approvalMode: {
        serializedName: "approvalMode",
        type: {
          name: "String",
        },
      },
      approvalStages: {
        serializedName: "approvalStages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApprovalStage",
            },
          },
        },
      },
    },
  },
};

export const ApprovalStage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApprovalStage",
    modelProperties: {
      approvalStageTimeOutInDays: {
        serializedName: "approvalStageTimeOutInDays",
        type: {
          name: "Number",
        },
      },
      isApproverJustificationRequired: {
        serializedName: "isApproverJustificationRequired",
        type: {
          name: "Boolean",
        },
      },
      escalationTimeInMinutes: {
        serializedName: "escalationTimeInMinutes",
        type: {
          name: "Number",
        },
      },
      primaryApprovers: {
        serializedName: "primaryApprovers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserSet",
            },
          },
        },
      },
      isEscalationEnabled: {
        serializedName: "isEscalationEnabled",
        type: {
          name: "Boolean",
        },
      },
      escalationApprovers: {
        serializedName: "escalationApprovers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserSet",
            },
          },
        },
      },
    },
  },
};

export const UserSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserSet",
    modelProperties: {
      userType: {
        serializedName: "userType",
        type: {
          name: "String",
        },
      },
      isBackup: {
        serializedName: "isBackup",
        type: {
          name: "Boolean",
        },
      },
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PIMOnlyModeSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PIMOnlyModeSettings",
    modelProperties: {
      mode: {
        serializedName: "mode",
        type: {
          name: "String",
        },
      },
      excludes: {
        serializedName: "excludes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      excludeAllServicePrincipals: {
        serializedName: "excludeAllServicePrincipals",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const RoleManagementPolicyApprovalRule: coreClient.CompositeMapper = {
  serializedName: "RoleManagementPolicyApprovalRule",
  type: {
    name: "Composite",
    className: "RoleManagementPolicyApprovalRule",
    uberParent: "RoleManagementPolicyRule",
    polymorphicDiscriminator:
      RoleManagementPolicyRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...RoleManagementPolicyRule.type.modelProperties,
      setting: {
        serializedName: "setting",
        type: {
          name: "Composite",
          className: "ApprovalSettings",
        },
      },
    },
  },
};

export const RoleManagementPolicyAuthenticationContextRule: coreClient.CompositeMapper =
  {
    serializedName: "RoleManagementPolicyAuthenticationContextRule",
    type: {
      name: "Composite",
      className: "RoleManagementPolicyAuthenticationContextRule",
      uberParent: "RoleManagementPolicyRule",
      polymorphicDiscriminator:
        RoleManagementPolicyRule.type.polymorphicDiscriminator,
      modelProperties: {
        ...RoleManagementPolicyRule.type.modelProperties,
        isEnabled: {
          serializedName: "isEnabled",
          type: {
            name: "Boolean",
          },
        },
        claimValue: {
          serializedName: "claimValue",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const RoleManagementPolicyEnablementRule: coreClient.CompositeMapper = {
  serializedName: "RoleManagementPolicyEnablementRule",
  type: {
    name: "Composite",
    className: "RoleManagementPolicyEnablementRule",
    uberParent: "RoleManagementPolicyRule",
    polymorphicDiscriminator:
      RoleManagementPolicyRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...RoleManagementPolicyRule.type.modelProperties,
      enabledRules: {
        serializedName: "enabledRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
    },
  },
};

export const RoleManagementPolicyExpirationRule: coreClient.CompositeMapper = {
  serializedName: "RoleManagementPolicyExpirationRule",
  type: {
    name: "Composite",
    className: "RoleManagementPolicyExpirationRule",
    uberParent: "RoleManagementPolicyRule",
    polymorphicDiscriminator:
      RoleManagementPolicyRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...RoleManagementPolicyRule.type.modelProperties,
      isExpirationRequired: {
        serializedName: "isExpirationRequired",
        type: {
          name: "Boolean",
        },
      },
      maximumDuration: {
        serializedName: "maximumDuration",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoleManagementPolicyNotificationRule: coreClient.CompositeMapper =
  {
    serializedName: "RoleManagementPolicyNotificationRule",
    type: {
      name: "Composite",
      className: "RoleManagementPolicyNotificationRule",
      uberParent: "RoleManagementPolicyRule",
      polymorphicDiscriminator:
        RoleManagementPolicyRule.type.polymorphicDiscriminator,
      modelProperties: {
        ...RoleManagementPolicyRule.type.modelProperties,
        notificationType: {
          serializedName: "notificationType",
          type: {
            name: "String",
          },
        },
        notificationLevel: {
          serializedName: "notificationLevel",
          type: {
            name: "String",
          },
        },
        recipientType: {
          serializedName: "recipientType",
          type: {
            name: "String",
          },
        },
        notificationRecipients: {
          serializedName: "notificationRecipients",
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "String",
              },
            },
          },
        },
        isDefaultRecipientsEnabled: {
          serializedName: "isDefaultRecipientsEnabled",
          type: {
            name: "Boolean",
          },
        },
      },
    },
  };

export const RoleManagementPolicyPimOnlyModeRule: coreClient.CompositeMapper = {
  serializedName: "RoleManagementPolicyPimOnlyModeRule",
  type: {
    name: "Composite",
    className: "RoleManagementPolicyPimOnlyModeRule",
    uberParent: "RoleManagementPolicyRule",
    polymorphicDiscriminator:
      RoleManagementPolicyRule.type.polymorphicDiscriminator,
    modelProperties: {
      ...RoleManagementPolicyRule.type.modelProperties,
      pimOnlyModeSettings: {
        serializedName: "pimOnlyModeSettings",
        type: {
          name: "Composite",
          className: "PIMOnlyModeSettings",
        },
      },
    },
  },
};

export let discriminators = {
  RoleManagementPolicyRule: RoleManagementPolicyRule,
  "RoleManagementPolicyRule.RoleManagementPolicyApprovalRule":
    RoleManagementPolicyApprovalRule,
  "RoleManagementPolicyRule.RoleManagementPolicyAuthenticationContextRule":
    RoleManagementPolicyAuthenticationContextRule,
  "RoleManagementPolicyRule.RoleManagementPolicyEnablementRule":
    RoleManagementPolicyEnablementRule,
  "RoleManagementPolicyRule.RoleManagementPolicyExpirationRule":
    RoleManagementPolicyExpirationRule,
  "RoleManagementPolicyRule.RoleManagementPolicyNotificationRule":
    RoleManagementPolicyNotificationRule,
  "RoleManagementPolicyRule.RoleManagementPolicyPimOnlyModeRule":
    RoleManagementPolicyPimOnlyModeRule,
};
