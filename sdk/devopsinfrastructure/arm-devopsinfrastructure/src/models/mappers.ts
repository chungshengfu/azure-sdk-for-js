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

export const ResourceSkuListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku",
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

export const ResourceSkuLocationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuLocationInfo",
    modelProperties: {
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
      zones: {
        serializedName: "zones",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      zoneDetails: {
        serializedName: "zoneDetails",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuZoneDetails",
            },
          },
        },
      },
    },
  },
};

export const ResourceSkuZoneDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuZoneDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      capabilities: {
        serializedName: "capabilities",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuCapabilities",
            },
          },
        },
      },
    },
  },
};

export const ResourceSkuCapabilities: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuCapabilities",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResourceSkuRestrictions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictions",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String",
        },
      },
      values: {
        serializedName: "values",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      restrictionInfo: {
        serializedName: "restrictionInfo",
        type: {
          name: "Composite",
          className: "ResourceSkuRestrictionInfo",
        },
      },
      reasonCode: {
        serializedName: "reasonCode",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResourceSkuRestrictionInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictionInfo",
    modelProperties: {
      locations: {
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      zones: {
        serializedName: "zones",
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

export const PoolListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PoolListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Pool",
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

export const OrganizationProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OrganizationProfile",
    uberParent: "OrganizationProfile",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind",
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AgentProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AgentProfile",
    uberParent: "AgentProfile",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind",
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String",
        },
      },
      resourcePredictions: {
        serializedName: "resourcePredictions",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const FabricProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FabricProfile",
    uberParent: "FabricProfile",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind",
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserAssignedIdentity" },
          },
        },
      },
    },
  },
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
          name: "Uuid",
        },
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "Uuid",
        },
      },
    },
  },
};

export const PoolUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PoolUpdate",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity",
        },
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String",
        },
      },
      maximumConcurrency: {
        constraints: {
          InclusiveMaximum: 10000,
          InclusiveMinimum: 1,
        },
        serializedName: "properties.maximumConcurrency",
        type: {
          name: "Number",
        },
      },
      organizationProfile: {
        serializedName: "properties.organizationProfile",
        type: {
          name: "Composite",
          className: "OrganizationProfile",
        },
      },
      agentProfile: {
        serializedName: "properties.agentProfile",
        type: {
          name: "Composite",
          className: "AgentProfile",
        },
      },
      fabricProfile: {
        serializedName: "properties.fabricProfile",
        type: {
          name: "Composite",
          className: "FabricProfile",
        },
      },
      devCenterProjectResourceId: {
        serializedName: "properties.devCenterProjectResourceId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ResourceDetailsObjectListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceDetailsObjectListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceDetailsObject",
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

export const Organization: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Organization",
    modelProperties: {
      url: {
        serializedName: "url",
        required: true,
        type: {
          name: "String",
        },
      },
      projects: {
        serializedName: "projects",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      parallelism: {
        serializedName: "parallelism",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const AzureDevOpsPermissionProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureDevOpsPermissionProfile",
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String",
        },
      },
      users: {
        serializedName: "users",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      groups: {
        serializedName: "groups",
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

export const DataDisk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataDisk",
    modelProperties: {
      caching: {
        serializedName: "caching",
        type: {
          name: "String",
        },
      },
      diskSizeGiB: {
        serializedName: "diskSizeGiB",
        type: {
          name: "Number",
        },
      },
      storageAccountType: {
        serializedName: "storageAccountType",
        type: {
          name: "String",
        },
      },
      driveLetter: {
        serializedName: "driveLetter",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const DevOpsAzureSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DevOpsAzureSku",
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

export const GitHubOrganization: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GitHubOrganization",
    modelProperties: {
      url: {
        serializedName: "url",
        required: true,
        type: {
          name: "String",
        },
      },
      repositories: {
        serializedName: "repositories",
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

export const NetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkProfile",
    modelProperties: {
      subnetId: {
        serializedName: "subnetId",
        required: true,
        type: {
          name: "String",
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
      secretsManagementSettings: {
        serializedName: "secretsManagementSettings",
        type: {
          name: "Composite",
          className: "SecretsManagementSettings",
        },
      },
      logonType: {
        serializedName: "logonType",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SecretsManagementSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretsManagementSettings",
    modelProperties: {
      certificateStoreLocation: {
        serializedName: "certificateStoreLocation",
        type: {
          name: "String",
        },
      },
      observedCertificates: {
        serializedName: "observedCertificates",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      keyExportable: {
        serializedName: "keyExportable",
        required: true,
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const PoolImage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PoolImage",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String",
        },
      },
      wellKnownImageName: {
        serializedName: "wellKnownImageName",
        type: {
          name: "String",
        },
      },
      aliases: {
        serializedName: "aliases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      buffer: {
        defaultValue: "*",
        serializedName: "buffer",
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
      osDiskStorageAccountType: {
        serializedName: "osDiskStorageAccountType",
        type: {
          name: "String",
        },
      },
      dataDisks: {
        serializedName: "dataDisks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataDisk",
            },
          },
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

export const AzureDevOpsOrganizationProfile: coreClient.CompositeMapper = {
  serializedName: "AzureDevOps",
  type: {
    name: "Composite",
    className: "AzureDevOpsOrganizationProfile",
    uberParent: "OrganizationProfile",
    polymorphicDiscriminator: OrganizationProfile.type.polymorphicDiscriminator,
    modelProperties: {
      ...OrganizationProfile.type.modelProperties,
      organizations: {
        serializedName: "organizations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Organization",
            },
          },
        },
      },
      permissionProfile: {
        serializedName: "permissionProfile",
        type: {
          name: "Composite",
          className: "AzureDevOpsPermissionProfile",
        },
      },
    },
  },
};

export const GitHubOrganizationProfile: coreClient.CompositeMapper = {
  serializedName: "GitHub",
  type: {
    name: "Composite",
    className: "GitHubOrganizationProfile",
    uberParent: "OrganizationProfile",
    polymorphicDiscriminator: OrganizationProfile.type.polymorphicDiscriminator,
    modelProperties: {
      ...OrganizationProfile.type.modelProperties,
      organizations: {
        serializedName: "organizations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GitHubOrganization",
            },
          },
        },
      },
    },
  },
};

export const Stateful: coreClient.CompositeMapper = {
  serializedName: "Stateful",
  type: {
    name: "Composite",
    className: "Stateful",
    uberParent: "AgentProfile",
    polymorphicDiscriminator: AgentProfile.type.polymorphicDiscriminator,
    modelProperties: {
      ...AgentProfile.type.modelProperties,
      maxAgentLifetime: {
        serializedName: "maxAgentLifetime",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const StatelessAgentProfile: coreClient.CompositeMapper = {
  serializedName: "Stateless",
  type: {
    name: "Composite",
    className: "StatelessAgentProfile",
    uberParent: "AgentProfile",
    polymorphicDiscriminator: AgentProfile.type.polymorphicDiscriminator,
    modelProperties: {
      ...AgentProfile.type.modelProperties,
    },
  },
};

export const VmssFabricProfile: coreClient.CompositeMapper = {
  serializedName: "Vmss",
  type: {
    name: "Composite",
    className: "VmssFabricProfile",
    uberParent: "FabricProfile",
    polymorphicDiscriminator: FabricProfile.type.polymorphicDiscriminator,
    modelProperties: {
      ...FabricProfile.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "DevOpsAzureSku",
        },
      },
      images: {
        serializedName: "images",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PoolImage",
            },
          },
        },
      },
      osProfile: {
        serializedName: "osProfile",
        type: {
          name: "Composite",
          className: "OsProfile",
        },
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile",
        },
      },
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "NetworkProfile",
        },
      },
    },
  },
};

export const ResourceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      resourceType: {
        serializedName: "properties.resourceType",
        type: {
          name: "String",
        },
      },
      tier: {
        serializedName: "properties.tier",
        type: {
          name: "String",
        },
      },
      size: {
        serializedName: "properties.size",
        type: {
          name: "String",
        },
      },
      family: {
        serializedName: "properties.family",
        type: {
          name: "String",
        },
      },
      locations: {
        serializedName: "properties.locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      locationInfo: {
        serializedName: "properties.locationInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuLocationInfo",
            },
          },
        },
      },
      capabilities: {
        serializedName: "properties.capabilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuCapabilities",
            },
          },
        },
      },
      restrictions: {
        serializedName: "properties.restrictions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuRestrictions",
            },
          },
        },
      },
    },
  },
};

export const ResourceDetailsObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceDetailsObject",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      status: {
        serializedName: "properties.status",
        type: {
          name: "String",
        },
      },
      image: {
        serializedName: "properties.image",
        type: {
          name: "String",
        },
      },
      imageVersion: {
        serializedName: "properties.imageVersion",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const Pool: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Pool",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedServiceIdentity",
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String",
        },
      },
      maximumConcurrency: {
        constraints: {
          InclusiveMaximum: 10000,
          InclusiveMinimum: 1,
        },
        serializedName: "properties.maximumConcurrency",
        type: {
          name: "Number",
        },
      },
      organizationProfile: {
        serializedName: "properties.organizationProfile",
        type: {
          name: "Composite",
          className: "OrganizationProfile",
        },
      },
      agentProfile: {
        serializedName: "properties.agentProfile",
        type: {
          name: "Composite",
          className: "AgentProfile",
        },
      },
      fabricProfile: {
        serializedName: "properties.fabricProfile",
        type: {
          name: "Composite",
          className: "FabricProfile",
        },
      },
      devCenterProjectResourceId: {
        serializedName: "properties.devCenterProjectResourceId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const PoolsCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PoolsCreateOrUpdateHeaders",
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

export const PoolsUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PoolsUpdateHeaders",
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

export const PoolsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PoolsDeleteHeaders",
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

export let discriminators = {
  OrganizationProfile: OrganizationProfile,
  AgentProfile: AgentProfile,
  FabricProfile: FabricProfile,
  "OrganizationProfile.AzureDevOps": AzureDevOpsOrganizationProfile,
  "OrganizationProfile.GitHub": GitHubOrganizationProfile,
  "AgentProfile.Stateful": Stateful,
  "AgentProfile.Stateless": StatelessAgentProfile,
  "FabricProfile.Vmss": VmssFabricProfile,
};
