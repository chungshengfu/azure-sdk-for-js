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

export const ConnectorInstanceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectorInstanceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConnectorInstance",
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

export const ConnectorProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectorProperties",
    uberParent: "ConnectorProperties",
    polymorphicDiscriminator: {
      serializedName: "connectorType",
      clientName: "connectorType",
    },
    modelProperties: {
      maxTasks: {
        serializedName: "maxTasks",
        required: true,
        type: {
          name: "Number",
        },
      },
      valueConverter: {
        serializedName: "valueConverter",
        required: true,
        type: {
          name: "String",
        },
      },
      connectorDirection: {
        serializedName: "connectorDirection",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      connectorType: {
        serializedName: "connectorType",
        required: true,
        readOnly: true,
        type: {
          name: "String",
        },
      },
      eventHubConfig: {
        serializedName: "eventHubConfig",
        type: {
          name: "Composite",
          className: "EventHubConfig",
        },
      },
      connectorState: {
        serializedName: "connectorState",
        required: true,
        readOnly: true,
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

export const EventHubConfig: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventHubConfig",
    modelProperties: {
      namespaceHostName: {
        serializedName: "namespaceHostName",
        required: true,
        type: {
          name: "String",
        },
      },
      eventHubName: {
        serializedName: "eventHubName",
        required: true,
        type: {
          name: "String",
        },
      },
      connectionString: {
        serializedName: "connectionString",
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

export const ConnectorInstanceTagsUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectorInstanceTagsUpdate",
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

export const BitCoinSourceConnectorProperties: coreClient.CompositeMapper = {
  serializedName: "BitCoinSource",
  type: {
    name: "Composite",
    className: "BitCoinSourceConnectorProperties",
    uberParent: "ConnectorProperties",
    polymorphicDiscriminator: ConnectorProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...ConnectorProperties.type.modelProperties,
    },
  },
};

export const ConfluentSourceConnectorProperties: coreClient.CompositeMapper = {
  serializedName: "ConfluentSource",
  type: {
    name: "Composite",
    className: "ConfluentSourceConnectorProperties",
    uberParent: "ConnectorProperties",
    polymorphicDiscriminator: ConnectorProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...ConnectorProperties.type.modelProperties,
      bootstrapServers: {
        serializedName: "bootstrapServers",
        required: true,
        type: {
          name: "String",
        },
      },
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String",
        },
      },
      consumerGroup: {
        serializedName: "consumerGroup",
        required: true,
        type: {
          name: "String",
        },
      },
      autoOffsetReset: {
        serializedName: "autoOffsetReset",
        required: true,
        type: {
          name: "String",
        },
      },
      user: {
        serializedName: "user",
        required: true,
        type: {
          name: "String",
        },
      },
      password: {
        serializedName: "password",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const CosmosDbSourceConnectorProperties: coreClient.CompositeMapper = {
  serializedName: "CosmosDbSource",
  type: {
    name: "Composite",
    className: "CosmosDbSourceConnectorProperties",
    uberParent: "ConnectorProperties",
    polymorphicDiscriminator: ConnectorProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...ConnectorProperties.type.modelProperties,
      pollIntervalInMs: {
        serializedName: "pollIntervalInMs",
        required: true,
        type: {
          name: "Number",
        },
      },
      cosmosEndpoint: {
        serializedName: "cosmosEndpoint",
        required: true,
        type: {
          name: "String",
        },
      },
      databaseName: {
        serializedName: "databaseName",
        required: true,
        type: {
          name: "String",
        },
      },
      container: {
        serializedName: "container",
        required: true,
        type: {
          name: "String",
        },
      },
      masterKey: {
        serializedName: "masterKey",
        required: true,
        type: {
          name: "String",
        },
      },
      offsetPolicy: {
        serializedName: "offsetPolicy",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const GooglePubSubSourceConnectorProperties: coreClient.CompositeMapper =
  {
    serializedName: "GooglePubSubSource",
    type: {
      name: "Composite",
      className: "GooglePubSubSourceConnectorProperties",
      uberParent: "ConnectorProperties",
      polymorphicDiscriminator:
        ConnectorProperties.type.polymorphicDiscriminator,
      modelProperties: {
        ...ConnectorProperties.type.modelProperties,
        projectId: {
          serializedName: "projectId",
          required: true,
          type: {
            name: "String",
          },
        },
        subscriptionName: {
          serializedName: "subscriptionName",
          required: true,
          type: {
            name: "String",
          },
        },
        accountKey: {
          serializedName: "accountKey",
          required: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const KinesisSourceConnectorProperties: coreClient.CompositeMapper = {
  serializedName: "KinesisSource",
  type: {
    name: "Composite",
    className: "KinesisSourceConnectorProperties",
    uberParent: "ConnectorProperties",
    polymorphicDiscriminator: ConnectorProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...ConnectorProperties.type.modelProperties,
      awsAccessKeyId: {
        serializedName: "awsAccessKeyId",
        required: true,
        type: {
          name: "String",
        },
      },
      awsSecretAccessKey: {
        serializedName: "awsSecretAccessKey",
        required: true,
        type: {
          name: "String",
        },
      },
      awsKinesisRegion: {
        serializedName: "awsKinesisRegion",
        required: true,
        type: {
          name: "String",
        },
      },
      awsKinesisStreamName: {
        serializedName: "awsKinesisStreamName",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PostgreSqlSourceConnectorProperties: coreClient.CompositeMapper = {
  serializedName: "PostgreSqlSource",
  type: {
    name: "Composite",
    className: "PostgreSqlSourceConnectorProperties",
    uberParent: "ConnectorProperties",
    polymorphicDiscriminator: ConnectorProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...ConnectorProperties.type.modelProperties,
      hostName: {
        serializedName: "hostName",
        required: true,
        type: {
          name: "String",
        },
      },
      port: {
        serializedName: "port",
        required: true,
        type: {
          name: "Number",
        },
      },
      databaseName: {
        serializedName: "databaseName",
        required: true,
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String",
        },
      },
      password: {
        serializedName: "password",
        required: true,
        type: {
          name: "String",
        },
      },
      replicationSlotName: {
        serializedName: "replicationSlotName",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SqlServerSourceConnectorProperties: coreClient.CompositeMapper = {
  serializedName: "SqlServerSource",
  type: {
    name: "Composite",
    className: "SqlServerSourceConnectorProperties",
    uberParent: "ConnectorProperties",
    polymorphicDiscriminator: ConnectorProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...ConnectorProperties.type.modelProperties,
      hostName: {
        serializedName: "hostName",
        required: true,
        type: {
          name: "String",
        },
      },
      port: {
        serializedName: "port",
        required: true,
        type: {
          name: "Number",
        },
      },
      databaseName: {
        serializedName: "databaseName",
        required: true,
        type: {
          name: "String",
        },
      },
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "String",
        },
      },
      password: {
        serializedName: "password",
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

export const ConnectorInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectorInstance",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      maxTasks: {
        serializedName: "properties.maxTasks",
        type: {
          name: "Number",
        },
      },
      valueConverter: {
        serializedName: "properties.valueConverter",
        type: {
          name: "String",
        },
      },
      connectorDirection: {
        serializedName: "properties.connectorDirection",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      connectorType: {
        serializedName: "properties.connectorType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      eventHubConfig: {
        serializedName: "properties.eventHubConfig",
        type: {
          name: "Composite",
          className: "EventHubConfig",
        },
      },
      connectorState: {
        serializedName: "properties.connectorState",
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
    },
  },
};

export let discriminators = {
  ConnectorProperties: ConnectorProperties,
  "ConnectorProperties.BitCoinSource": BitCoinSourceConnectorProperties,
  "ConnectorProperties.ConfluentSource": ConfluentSourceConnectorProperties,
  "ConnectorProperties.CosmosDbSource": CosmosDbSourceConnectorProperties,
  "ConnectorProperties.GooglePubSubSource":
    GooglePubSubSourceConnectorProperties,
  "ConnectorProperties.KinesisSource": KinesisSourceConnectorProperties,
  "ConnectorProperties.PostgreSqlSource": PostgreSqlSourceConnectorProperties,
  "ConnectorProperties.SqlServerSource": SqlServerSourceConnectorProperties,
};
