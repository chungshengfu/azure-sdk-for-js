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

export const AzureLargeInstanceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeInstanceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AzureLargeInstance",
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

export const AzureLargeInstanceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeInstanceProperties",
    modelProperties: {
      hardwareProfile: {
        serializedName: "hardwareProfile",
        type: {
          name: "Composite",
          className: "HardwareProfile",
        },
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile",
        },
      },
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "OsProfile",
        },
      },
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile",
        },
      },
      azureLargeInstanceId: {
        serializedName: "azureLargeInstanceId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      powerState: {
        serializedName: "powerState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      proximityPlacementGroup: {
        serializedName: "proximityPlacementGroup",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      hwRevision: {
        serializedName: "hwRevision",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      partnerNodeId: {
        serializedName: "partnerNodeId",
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const HardwareProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HardwareProfile",
    modelProperties: {
      hardwareType: {
        serializedName: "hardwareType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      azureLargeInstanceSize: {
        serializedName: "azureLargeInstanceSize",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const StorageProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageProfile",
    modelProperties: {
      nfsIpAddress: {
        serializedName: "nfsIpAddress",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      osDisks: {
        serializedName: "osDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Disk",
            },
          },
        },
      },
    },
  },
};

export const Disk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Disk",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      diskSizeGB: {
        serializedName: "diskSizeGB",
        type: {
          name: "Number",
        },
      },
      lun: {
        serializedName: "lun",
        readOnly: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const OsProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OsProfile",
    modelProperties: {
      computerName: {
        serializedName: "computerName",
        type: {
          name: "String",
        },
      },
      osType: {
        serializedName: "osType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      sshPublicKey: {
        serializedName: "sshPublicKey",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const NetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkProfile",
    modelProperties: {
      networkInterfaces: {
        serializedName: "networkInterfaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IpAddress",
            },
          },
        },
      },
      circuitId: {
        serializedName: "circuitId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const IpAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IpAddress",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
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

export const AzureLargeStorageInstanceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeStorageInstanceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AzureLargeStorageInstance",
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

export const AzureLargeStorageInstanceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeStorageInstanceProperties",
    modelProperties: {
      azureLargeStorageInstanceUniqueIdentifier: {
        serializedName: "azureLargeStorageInstanceUniqueIdentifier",
        type: {
          name: "String",
        },
      },
      storageProperties: {
        serializedName: "storageProperties",
        type: {
          name: "Composite",
          className: "StorageProperties",
        },
      },
    },
  },
};

export const StorageProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      offeringType: {
        serializedName: "offeringType",
        type: {
          name: "String",
        },
      },
      storageType: {
        serializedName: "storageType",
        type: {
          name: "String",
        },
      },
      generation: {
        serializedName: "generation",
        type: {
          name: "String",
        },
      },
      hardwareType: {
        serializedName: "hardwareType",
        type: {
          name: "String",
        },
      },
      workloadType: {
        serializedName: "workloadType",
        type: {
          name: "String",
        },
      },
      storageBillingProperties: {
        serializedName: "storageBillingProperties",
        type: {
          name: "Composite",
          className: "StorageBillingProperties",
        },
      },
    },
  },
};

export const StorageBillingProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageBillingProperties",
    modelProperties: {
      billingMode: {
        serializedName: "billingMode",
        type: {
          name: "String",
        },
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AzureLargeInstanceTagsUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeInstanceTagsUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
    },
  },
};

export const ForceState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ForceState",
    modelProperties: {
      forceState: {
        serializedName: "forceState",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const OperationStatusResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationStatusResult",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      resourceId: {
        serializedName: "resourceId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String",
        },
      },
      percentComplete: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 0,
        },
        serializedName: "percentComplete",
        type: {
          name: "Number",
        },
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime",
        },
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime",
        },
      },
      operations: {
        serializedName: "operations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationStatusResult",
            },
          },
        },
      },
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

export const AzureLargeStorageInstanceTagsUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeStorageInstanceTagsUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
    },
  },
};

export const Tags: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Tags",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
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

export const AzureLargeInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeInstance",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AzureLargeInstanceProperties",
        },
      },
    },
  },
};

export const AzureLargeStorageInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeStorageInstance",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AzureLargeStorageInstanceProperties",
        },
      },
    },
  },
};

export const AzureLargeInstanceRestartHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeInstanceRestartHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AzureLargeInstanceShutdownHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeInstanceShutdownHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AzureLargeInstanceStartHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureLargeInstanceStartHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String",
        },
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number",
        },
      },
    },
  },
};
