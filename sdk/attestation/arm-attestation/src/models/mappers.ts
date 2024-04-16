/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationsDefinition",
            },
          },
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

export const OperationsDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationsDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationsDisplayDefinition",
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OperationProperties",
        },
      },
    },
  },
};

export const OperationsDisplayDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationsDisplayDefinition",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
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

export const OperationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationProperties",
    modelProperties: {
      serviceSpecification: {
        serializedName: "serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification",
        },
      },
    },
  },
};

export const ServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LogSpecification",
            },
          },
        },
      },
    },
  },
};

export const LogSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
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
    },
  },
};

export const AttestationServiceCreationParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AttestationServiceCreationParams",
    modelProperties: {
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String",
        },
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AttestationServiceCreationSpecificParams",
        },
      },
    },
  },
};

export const AttestationServiceCreationSpecificParams: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "AttestationServiceCreationSpecificParams",
      modelProperties: {
        publicNetworkAccess: {
          defaultValue: "Enabled",
          serializedName: "publicNetworkAccess",
          type: {
            name: "String",
          },
        },
        policySigningCertificates: {
          serializedName: "policySigningCertificates",
          type: {
            name: "Composite",
            className: "JsonWebKeySet",
          },
        },
        tpmAttestationAuthentication: {
          defaultValue: "Enabled",
          serializedName: "tpmAttestationAuthentication",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const JsonWebKeySet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JsonWebKeySet",
    modelProperties: {
      keys: {
        serializedName: "keys",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JsonWebKey",
            },
          },
        },
      },
    },
  },
};

export const JsonWebKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JsonWebKey",
    modelProperties: {
      alg: {
        serializedName: "alg",
        type: {
          name: "String",
        },
      },
      crv: {
        serializedName: "crv",
        type: {
          name: "String",
        },
      },
      d: {
        serializedName: "d",
        type: {
          name: "String",
        },
      },
      dp: {
        serializedName: "dp",
        type: {
          name: "String",
        },
      },
      dq: {
        serializedName: "dq",
        type: {
          name: "String",
        },
      },
      e: {
        serializedName: "e",
        type: {
          name: "String",
        },
      },
      k: {
        serializedName: "k",
        type: {
          name: "String",
        },
      },
      kid: {
        serializedName: "kid",
        type: {
          name: "String",
        },
      },
      kty: {
        serializedName: "kty",
        required: true,
        type: {
          name: "String",
        },
      },
      n: {
        serializedName: "n",
        type: {
          name: "String",
        },
      },
      p: {
        serializedName: "p",
        type: {
          name: "String",
        },
      },
      q: {
        serializedName: "q",
        type: {
          name: "String",
        },
      },
      qi: {
        serializedName: "qi",
        type: {
          name: "String",
        },
      },
      use: {
        serializedName: "use",
        type: {
          name: "String",
        },
      },
      x: {
        serializedName: "x",
        type: {
          name: "String",
        },
      },
      x5C: {
        serializedName: "x5c",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String",
            },
          },
        },
      },
      y: {
        serializedName: "y",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AttestationServicePatchParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AttestationServicePatchParams",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AttestationServicePatchSpecificParams",
        },
      },
    },
  },
};

export const AttestationServicePatchSpecificParams: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "AttestationServicePatchSpecificParams",
      modelProperties: {
        publicNetworkAccess: {
          defaultValue: "Enabled",
          serializedName: "publicNetworkAccess",
          type: {
            name: "String",
          },
        },
        tpmAttestationAuthentication: {
          defaultValue: "Enabled",
          serializedName: "tpmAttestationAuthentication",
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const PrivateEndpointConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection",
            },
          },
        },
      },
    },
  },
};

export const PrivateLinkResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource",
            },
          },
        },
      },
    },
  },
};

export const AttestationProviderListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AttestationProviderListResult",
    modelProperties: {
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AttestationProvider",
            },
          },
        },
      },
    },
  },
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...Resource.type.modelProperties,
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint",
        },
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState",
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

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      groupId: {
        serializedName: "properties.groupId",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
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
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
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

export const AttestationProvider: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AttestationProvider",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
      trustModel: {
        serializedName: "properties.trustModel",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "String",
        },
      },
      attestUri: {
        serializedName: "properties.attestUri",
        type: {
          name: "String",
        },
      },
      publicNetworkAccess: {
        defaultValue: "Enabled",
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String",
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
              className: "PrivateEndpointConnection",
            },
          },
        },
      },
      tpmAttestationAuthentication: {
        defaultValue: "Enabled",
        serializedName: "properties.tpmAttestationAuthentication",
        type: {
          name: "String",
        },
      },
    },
  },
};
