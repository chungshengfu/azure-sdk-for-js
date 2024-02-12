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

export const CheckNameAvailabilityRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequest",
    modelProperties: {
      name: {
        serializedName: "name",
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

export const CheckNameAvailabilityResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResponse",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean",
        },
      },
      reason: {
        serializedName: "reason",
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

export const MongoClusterListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoClusterListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MongoCluster",
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

export const MongoClusterRestoreParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoClusterRestoreParameters",
    modelProperties: {
      pointInTimeUTC: {
        serializedName: "pointInTimeUTC",
        type: {
          name: "DateTime",
        },
      },
      sourceResourceId: {
        serializedName: "sourceResourceId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const NodeGroupSpec: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NodeGroupSpec",
    modelProperties: {
      sku: {
        serializedName: "sku",
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
      enableHa: {
        serializedName: "enableHa",
        type: {
          name: "Boolean",
        },
      },
      kind: {
        serializedName: "kind",
        type: {
          name: "String",
        },
      },
      nodeCount: {
        serializedName: "nodeCount",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const PrivateEndpointConnectionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionProperties",
    modelProperties: {
      groupIds: {
        serializedName: "groupIds",
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
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint",
        },
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState",
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

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
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
      actionsRequired: {
        serializedName: "actionsRequired",
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

export const MongoClusterUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoClusterUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      administratorLogin: {
        serializedName: "properties.administratorLogin",
        type: {
          name: "String",
        },
      },
      administratorLoginPassword: {
        serializedName: "properties.administratorLoginPassword",
        type: {
          name: "String",
        },
      },
      serverVersion: {
        serializedName: "properties.serverVersion",
        type: {
          name: "String",
        },
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String",
        },
      },
      nodeGroupSpecs: {
        serializedName: "properties.nodeGroupSpecs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NodeGroupSpec",
            },
          },
        },
      },
    },
  },
};

export const FirewallRuleListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FirewallRuleListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FirewallRule",
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

export const ListConnectionStringsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListConnectionStringsResult",
    modelProperties: {
      connectionStrings: {
        serializedName: "connectionStrings",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConnectionString",
            },
          },
        },
      },
    },
  },
};

export const ConnectionString: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectionString",
    modelProperties: {
      connectionString: {
        serializedName: "connectionString",
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

export const NodeGroupProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NodeGroupProperties",
    modelProperties: {
      sku: {
        serializedName: "sku",
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
      enableHa: {
        serializedName: "enableHa",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties,
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

export const AzureResourceManagerPrivateEndpointConnection: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "AzureResourceManagerPrivateEndpointConnection",
      modelProperties: {
        ...ProxyResource.type.modelProperties,
        properties: {
          serializedName: "properties",
          type: {
            name: "Composite",
            className: "PrivateEndpointConnectionProperties",
          },
        },
      },
    },
  };

export const FirewallRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FirewallRule",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      startIpAddress: {
        constraints: {
          Pattern: new RegExp(
            "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$",
          ),
        },
        serializedName: "properties.startIpAddress",
        type: {
          name: "String",
        },
      },
      endIpAddress: {
        constraints: {
          Pattern: new RegExp(
            "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$",
          ),
        },
        serializedName: "properties.endIpAddress",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const MongoCluster: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoCluster",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      createMode: {
        serializedName: "properties.createMode",
        type: {
          name: "String",
        },
      },
      restoreParameters: {
        serializedName: "properties.restoreParameters",
        type: {
          name: "Composite",
          className: "MongoClusterRestoreParameters",
        },
      },
      administratorLogin: {
        serializedName: "properties.administratorLogin",
        type: {
          name: "String",
        },
      },
      administratorLoginPassword: {
        serializedName: "properties.administratorLoginPassword",
        type: {
          name: "String",
        },
      },
      serverVersion: {
        serializedName: "properties.serverVersion",
        type: {
          name: "String",
        },
      },
      connectionString: {
        serializedName: "properties.connectionString",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      earliestRestoreTime: {
        serializedName: "properties.earliestRestoreTime",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      clusterStatus: {
        serializedName: "properties.clusterStatus",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String",
        },
      },
      nodeGroupSpecs: {
        serializedName: "properties.nodeGroupSpecs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NodeGroupSpec",
            },
          },
        },
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AzureResourceManagerPrivateEndpointConnection",
            },
          },
        },
      },
    },
  },
};

export const MongoClustersCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoClustersCreateOrUpdateHeaders",
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

export const MongoClustersUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoClustersUpdateHeaders",
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

export const MongoClustersDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoClustersDeleteHeaders",
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

export const FirewallRulesCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FirewallRulesCreateOrUpdateHeaders",
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

export const FirewallRulesDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FirewallRulesDeleteHeaders",
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
