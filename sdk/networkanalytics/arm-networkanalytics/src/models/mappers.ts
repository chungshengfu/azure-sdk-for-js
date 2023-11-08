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
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
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
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
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
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
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
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
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

export const DataProductListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataProduct"
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

export const EncryptionKeyDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionKeyDetails",
    modelProperties: {
      keyVaultUri: {
        serializedName: "keyVaultUri",
        required: true,
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "keyName",
        required: true,
        type: {
          name: "String"
        }
      },
      keyVersion: {
        serializedName: "keyVersion",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataProductNetworkAcls: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductNetworkAcls",
    modelProperties: {
      virtualNetworkRule: {
        serializedName: "virtualNetworkRule",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
            }
          }
        }
      },
      ipRules: {
        serializedName: "ipRules",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IPRules"
            }
          }
        }
      },
      allowedQueryIpRangeList: {
        serializedName: "allowedQueryIpRangeList",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      defaultAction: {
        serializedName: "defaultAction",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkRule",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IPRules: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IPRules",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      action: {
        serializedName: "action",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedResourceGroupConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedResourceGroupConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
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

export const ConsumptionEndpointsProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConsumptionEndpointsProperties",
    modelProperties: {
      ingestionUrl: {
        serializedName: "ingestionUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      ingestionResourceId: {
        serializedName: "ingestionResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      fileAccessUrl: {
        serializedName: "fileAccessUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      fileAccessResourceId: {
        serializedName: "fileAccessResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      queryUrl: {
        serializedName: "queryUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      queryResourceId: {
        serializedName: "queryResourceId",
        readOnly: true,
        type: {
          name: "String"
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

export const DataProductsCatalogListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductsCatalogListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataProductsCatalog"
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

export const PublisherInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PublisherInformation",
    modelProperties: {
      publisherName: {
        serializedName: "publisherName",
        required: true,
        type: {
          name: "String"
        }
      },
      dataProducts: {
        serializedName: "dataProducts",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataProductInformation"
            }
          }
        }
      }
    }
  }
};

export const DataProductInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductInformation",
    modelProperties: {
      dataProductName: {
        serializedName: "dataProductName",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      },
      dataProductVersions: {
        serializedName: "dataProductVersions",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataProductVersion"
            }
          }
        }
      }
    }
  }
};

export const DataProductVersion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductVersion",
    modelProperties: {
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataProductUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductUpdate",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      owners: {
        serializedName: "properties.owners",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      purviewAccount: {
        serializedName: "properties.purviewAccount",
        type: {
          name: "String"
        }
      },
      purviewCollection: {
        serializedName: "properties.purviewCollection",
        type: {
          name: "String"
        }
      },
      privateLinksEnabled: {
        serializedName: "properties.privateLinksEnabled",
        type: {
          name: "String"
        }
      },
      currentMinorVersion: {
        serializedName: "properties.currentMinorVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleAssignmentCommonProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleAssignmentCommonProperties",
    modelProperties: {
      roleId: {
        serializedName: "roleId",
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
      userName: {
        serializedName: "userName",
        required: true,
        type: {
          name: "String"
        }
      },
      dataTypeScope: {
        serializedName: "dataTypeScope",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      principalType: {
        serializedName: "principalType",
        required: true,
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleAssignmentDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleAssignmentDetail",
    modelProperties: {
      roleId: {
        serializedName: "roleId",
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
      userName: {
        serializedName: "userName",
        required: true,
        type: {
          name: "String"
        }
      },
      dataTypeScope: {
        serializedName: "dataTypeScope",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      principalType: {
        serializedName: "principalType",
        required: true,
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        required: true,
        type: {
          name: "String"
        }
      },
      roleAssignmentId: {
        serializedName: "roleAssignmentId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataTypeListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTypeListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataType"
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

export const DataTypeUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTypeUpdate",
    modelProperties: {
      state: {
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      },
      storageOutputRetention: {
        serializedName: "properties.storageOutputRetention",
        type: {
          name: "Number"
        }
      },
      databaseCacheRetention: {
        serializedName: "properties.databaseCacheRetention",
        type: {
          name: "Number"
        }
      },
      databaseRetention: {
        serializedName: "properties.databaseRetention",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ContainerSaS: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerSaS",
    modelProperties: {
      startTimeStamp: {
        serializedName: "startTimeStamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      expiryTimeStamp: {
        serializedName: "expiryTimeStamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      ipAddress: {
        serializedName: "ipAddress",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerSasToken: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerSasToken",
    modelProperties: {
      storageContainerSasToken: {
        serializedName: "storageContainerSasToken",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountSas: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountSas",
    modelProperties: {
      startTimeStamp: {
        serializedName: "startTimeStamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      expiryTimeStamp: {
        serializedName: "expiryTimeStamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      ipAddress: {
        serializedName: "ipAddress",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountSasToken: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountSasToken",
    modelProperties: {
      storageAccountSasToken: {
        serializedName: "storageAccountSasToken",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ListRoleAssignments: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ListRoleAssignments",
    modelProperties: {
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      },
      roleAssignmentResponse: {
        serializedName: "roleAssignmentResponse",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleAssignmentDetail"
            }
          }
        }
      }
    }
  }
};

export const KeyVaultInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultInfo",
    modelProperties: {
      keyVaultUrl: {
        serializedName: "keyVaultUrl",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceAccessRules: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceAccessRules",
    modelProperties: {
      tenantId: {
        serializedName: "tenantId",
        required: true,
        type: {
          name: "String"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
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

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const DataProduct: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProduct",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity"
        }
      },
      resourceGuid: {
        serializedName: "properties.resourceGuid",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "properties.publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "properties.product",
        type: {
          name: "String"
        }
      },
      majorVersion: {
        serializedName: "properties.majorVersion",
        type: {
          name: "String"
        }
      },
      owners: {
        serializedName: "properties.owners",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      redundancy: {
        serializedName: "properties.redundancy",
        type: {
          name: "String"
        }
      },
      purviewAccount: {
        serializedName: "properties.purviewAccount",
        type: {
          name: "String"
        }
      },
      purviewCollection: {
        serializedName: "properties.purviewCollection",
        type: {
          name: "String"
        }
      },
      privateLinksEnabled: {
        serializedName: "properties.privateLinksEnabled",
        type: {
          name: "String"
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      customerManagedKeyEncryptionEnabled: {
        serializedName: "properties.customerManagedKeyEncryptionEnabled",
        type: {
          name: "String"
        }
      },
      customerEncryptionKey: {
        serializedName: "properties.customerEncryptionKey",
        type: {
          name: "Composite",
          className: "EncryptionKeyDetails"
        }
      },
      networkacls: {
        serializedName: "properties.networkacls",
        type: {
          name: "Composite",
          className: "DataProductNetworkAcls"
        }
      },
      managedResourceGroupConfiguration: {
        serializedName: "properties.managedResourceGroupConfiguration",
        type: {
          name: "Composite",
          className: "ManagedResourceGroupConfiguration"
        }
      },
      availableMinorVersions: {
        serializedName: "properties.availableMinorVersions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      currentMinorVersion: {
        serializedName: "properties.currentMinorVersion",
        type: {
          name: "String"
        }
      },
      documentation: {
        serializedName: "properties.documentation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      consumptionEndpoints: {
        serializedName: "properties.consumptionEndpoints",
        type: {
          name: "Composite",
          className: "ConsumptionEndpointsProperties"
        }
      },
      keyVaultUrl: {
        serializedName: "properties.keyVaultUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataProductsCatalog: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductsCatalog",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publishers: {
        serializedName: "properties.publishers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PublisherInformation"
            }
          }
        }
      }
    }
  }
};

export const DataType: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataType",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      },
      stateReason: {
        serializedName: "properties.stateReason",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageOutputRetention: {
        serializedName: "properties.storageOutputRetention",
        type: {
          name: "Number"
        }
      },
      databaseCacheRetention: {
        serializedName: "properties.databaseCacheRetention",
        type: {
          name: "Number"
        }
      },
      databaseRetention: {
        serializedName: "properties.databaseRetention",
        type: {
          name: "Number"
        }
      },
      visualizationUrl: {
        serializedName: "properties.visualizationUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataProductsCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductsCreateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DataProductsUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductsUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataProductsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataProductsDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataTypesCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTypesCreateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DataTypesUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTypesUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataTypesDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTypesDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataTypesDeleteDataHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTypesDeleteDataHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
