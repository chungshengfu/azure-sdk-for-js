/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ManagedServiceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedServiceIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserAssignedIdentity" }
          }
        }
      }
    }
  }
};

export const UserAssignedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const MapsAccountProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsAccountProperties",
    modelProperties: {
      uniqueId: {
        serializedName: "uniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      disableLocalAuth: {
        defaultValue: false,
        serializedName: "disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      linkedResources: {
        constraints: {
          MaxItems: 10
        },
        serializedName: "linkedResources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedResource"
            }
          }
        }
      },
      cors: {
        serializedName: "cors",
        type: {
          name: "Composite",
          className: "CorsRules"
        }
      },
      encryption: {
        serializedName: "encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      }
    }
  }
};

export const LinkedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedResource",
    modelProperties: {
      uniqueName: {
        serializedName: "uniqueName",
        required: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CorsRules: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CorsRules",
    modelProperties: {
      corsRules: {
        constraints: {
          MaxItems: 5
        },
        serializedName: "corsRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CorsRule"
            }
          }
        }
      }
    }
  }
};

export const CorsRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        serializedName: "allowedOrigins",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Encryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Encryption",
    modelProperties: {
      infrastructureEncryption: {
        serializedName: "infrastructureEncryption",
        type: {
          name: "String"
        }
      },
      customerManagedKeyEncryption: {
        serializedName: "customerManagedKeyEncryption",
        type: {
          name: "Composite",
          className: "CustomerManagedKeyEncryption"
        }
      }
    }
  }
};

export const CustomerManagedKeyEncryption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomerManagedKeyEncryption",
    modelProperties: {
      keyEncryptionKeyIdentity: {
        serializedName: "keyEncryptionKeyIdentity",
        type: {
          name: "Composite",
          className: "CustomerManagedKeyEncryptionKeyIdentity"
        }
      },
      keyEncryptionKeyUrl: {
        serializedName: "keyEncryptionKeyUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CustomerManagedKeyEncryptionKeyIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomerManagedKeyEncryptionKeyIdentity",
    modelProperties: {
      identityType: {
        serializedName: "identityType",
        type: {
          name: "String"
        }
      },
      userAssignedIdentityResourceId: {
        serializedName: "userAssignedIdentityResourceId",
        type: {
          name: "String"
        }
      },
      delegatedIdentityClientId: {
        serializedName: "delegatedIdentityClientId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
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
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
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
          className: "ErrorDetail"
        }
      }
    }
  }
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
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
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
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MapsAccountUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsAccountUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      kind: {
        defaultValue: "Gen1",
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity"
        }
      },
      uniqueId: {
        serializedName: "properties.uniqueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      disableLocalAuth: {
        defaultValue: false,
        serializedName: "properties.disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      linkedResources: {
        constraints: {
          MaxItems: 10
        },
        serializedName: "properties.linkedResources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedResource"
            }
          }
        }
      },
      cors: {
        serializedName: "properties.cors",
        type: {
          name: "Composite",
          className: "CorsRules"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "Encryption"
        }
      }
    }
  }
};

export const MapsAccounts: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsAccounts",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MapsAccount"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountSasParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountSasParameters",
    modelProperties: {
      signingKey: {
        serializedName: "signingKey",
        required: true,
        type: {
          name: "String"
        }
      },
      principalId: {
        serializedName: "principalId",
        required: true,
        type: {
          name: "String"
        }
      },
      regions: {
        serializedName: "regions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      maxRatePerSecond: {
        defaultValue: 500,
        constraints: {
          InclusiveMaximum: 500,
          ExclusiveMinimum: 0
        },
        serializedName: "maxRatePerSecond",
        required: true,
        type: {
          name: "Number"
        }
      },
      start: {
        serializedName: "start",
        required: true,
        type: {
          name: "String"
        }
      },
      expiry: {
        serializedName: "expiry",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MapsAccountSasToken: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsAccountSasToken",
    modelProperties: {
      accountSasToken: {
        serializedName: "accountSasToken",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MapsAccountKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsAccountKeys",
    modelProperties: {
      primaryKeyLastUpdated: {
        serializedName: "primaryKeyLastUpdated",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "primaryKey",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      secondaryKeyLastUpdated: {
        serializedName: "secondaryKeyLastUpdated",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MapsKeySpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsKeySpecification",
    modelProperties: {
      keyType: {
        serializedName: "keyType",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MapsOperations: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsOperations",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationDetail"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDetail",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const MetricSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dimension"
            }
          }
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      fillGapWithZero: {
        serializedName: "fillGapWithZero",
        type: {
          name: "Boolean"
        }
      },
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      resourceIdDimensionNameOverride: {
        serializedName: "resourceIdDimensionNameOverride",
        type: {
          name: "String"
        }
      },
      sourceMdmAccount: {
        serializedName: "sourceMdmAccount",
        type: {
          name: "String"
        }
      },
      internalMetricName: {
        serializedName: "internalMetricName",
        type: {
          name: "String"
        }
      },
      lockAggregationType: {
        serializedName: "lockAggregationType",
        type: {
          name: "String"
        }
      },
      sourceMdmNamespace: {
        serializedName: "sourceMdmNamespace",
        type: {
          name: "String"
        }
      },
      supportedAggregationTypes: {
        serializedName: "supportedAggregationTypes",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dimension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Dimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      internalName: {
        serializedName: "internalName",
        type: {
          name: "String"
        }
      },
      internalMetricName: {
        serializedName: "internalMetricName",
        type: {
          name: "String"
        }
      },
      sourceMdmNamespace: {
        serializedName: "sourceMdmNamespace",
        type: {
          name: "String"
        }
      },
      toBeExportedToShoebox: {
        serializedName: "toBeExportedToShoebox",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CreatorList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatorList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Creator"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreatorProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatorProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageUnits: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 1
        },
        serializedName: "storageUnits",
        required: true,
        type: {
          name: "Number"
        }
      },
      totalStorageUnitSizeInBytes: {
        serializedName: "totalStorageUnitSizeInBytes",
        type: {
          name: "Number"
        }
      },
      consumedStorageUnitSizeInBytes: {
        serializedName: "consumedStorageUnitSizeInBytes",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CreatorUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreatorUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageUnits: {
        constraints: {
          InclusiveMaximum: 100,
          InclusiveMinimum: 1
        },
        serializedName: "properties.storageUnits",
        type: {
          name: "Number"
        }
      },
      totalStorageUnitSizeInBytes: {
        serializedName: "properties.totalStorageUnitSizeInBytes",
        type: {
          name: "Number"
        }
      },
      consumedStorageUnitSizeInBytes: {
        serializedName: "properties.consumedStorageUnitSizeInBytes",
        type: {
          name: "Number"
        }
      }
    }
  }
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
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MapsAccount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapsAccount",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      kind: {
        defaultValue: "Gen1",
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "MapsAccountProperties"
        }
      }
    }
  }
};

export const Creator: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Creator",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "CreatorProperties"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};
