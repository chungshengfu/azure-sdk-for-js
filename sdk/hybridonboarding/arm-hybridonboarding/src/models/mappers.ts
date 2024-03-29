/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail",
        },
      },
    },
  },
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail",
            },
          },
        },
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo",
            },
          },
        },
      },
    },
  },
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const ExtensionManagerListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionManagerListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExtensionManager",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ScenarioProfileObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScenarioProfileObject",
    modelProperties: {
      infrastructure: {
        serializedName: "infrastructure",
        required: true,
        type: {
          name: "String",
        },
      },
      scenario: {
        serializedName: "scenario",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ExtensionObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionObject",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      customLocations: {
        serializedName: "customLocations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      state: {
        serializedName: "state",
        required: true,
        type: {
          name: "String",
        },
      },
      configurationSettings: {
        serializedName: "configurationSettings",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      configurationProtectedSettings: {
        serializedName: "configurationProtectedSettings",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
    },
  },
};

export const ManagedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
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
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
    },
  },
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String",
        },
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String",
        },
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String",
        },
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
};

export const ExtensionManagerPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionManagerPatch",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedIdentityUpdate",
        },
      },
    },
  },
};

export const ManagedIdentityUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIdentityUpdate",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AddCustomLocationDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddCustomLocationDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DisableExtensionsRequestDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DisableExtensionsRequestDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const EnableExtensionsRequestDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EnableExtensionsRequestDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      configurationSettings: {
        serializedName: "configurationSettings",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      configurationProtectedSettings: {
        serializedName: "configurationProtectedSettings",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
    },
  },
};

export const RemoveCustomLocationDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoveCustomLocationDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      customLocationId: {
        serializedName: "customLocationId",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ExtensionManager: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionManager",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedIdentity",
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      extendedLocation: {
        serializedName: "properties.extendedLocation",
        type: {
          name: "String",
        },
      },
      hostResourceId: {
        serializedName: "properties.hostResourceId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      scenarioProfile: {
        serializedName: "properties.scenarioProfile",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ScenarioProfileObject",
            },
          },
        },
      },
      extensionProfile: {
        serializedName: "properties.extensionProfile",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExtensionObject",
            },
          },
        },
      },
    },
  },
};

export const ExtensionManagersCreateOrUpdateHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExtensionManagersCreateOrUpdateHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const ExtensionManagersUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionManagersUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ExtensionManagersDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionManagersDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ExtensionManagersAddCustomLocationHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExtensionManagersAddCustomLocationHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const ExtensionManagersDisableExtensionsHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExtensionManagersDisableExtensionsHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const ExtensionManagersEnableExtensionsHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExtensionManagersEnableExtensionsHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const ExtensionManagersRemoveCustomLocationHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ExtensionManagersRemoveCustomLocationHeaders",
      modelProperties: {
        retryAfter: {
          serializedName: "retry-after",
          type: {
            name: "Number",
          },
        },
        location: {
          serializedName: "location",
          type: {
            name: "String",
          },
        },
      },
    },
  };
