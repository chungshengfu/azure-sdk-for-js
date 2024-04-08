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

export const CheckNameAvailability: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailability",
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

export const CheckNameAvailabilityResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      reason: {
        serializedName: "reason",
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
    },
  },
};

export const CodeSigningAccountListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CodeSigningAccountListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CodeSigningAccount",
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

export const AccountSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountSku",
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

export const CodeSigningAccountPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CodeSigningAccountPatch",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } },
        },
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "Composite",
          className: "AccountSku",
        },
      },
    },
  },
};

export const CertificateProfileListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateProfileListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CertificateProfile",
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

export const Certificate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Certificate",
    modelProperties: {
      serialNumber: {
        serializedName: "serialNumber",
        type: {
          name: "String",
        },
      },
      subjectName: {
        serializedName: "subjectName",
        type: {
          name: "String",
        },
      },
      thumbprint: {
        serializedName: "thumbprint",
        type: {
          name: "String",
        },
      },
      createdDate: {
        serializedName: "createdDate",
        type: {
          name: "String",
        },
      },
      expiryDate: {
        serializedName: "expiryDate",
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        type: {
          name: "String",
        },
      },
      requestedAt: {
        serializedName: "revocation.requestedAt",
        type: {
          name: "DateTime",
        },
      },
      effectiveAt: {
        serializedName: "revocation.effectiveAt",
        type: {
          name: "DateTime",
        },
      },
      reason: {
        serializedName: "revocation.reason",
        type: {
          name: "String",
        },
      },
      remarks: {
        serializedName: "revocation.remarks",
        type: {
          name: "String",
        },
      },
      statusRevocationStatus: {
        serializedName: "revocation.status",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      failureReason: {
        serializedName: "revocation.failureReason",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RevokeCertificate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RevokeCertificate",
    modelProperties: {
      serialNumber: {
        serializedName: "serialNumber",
        required: true,
        type: {
          name: "String",
        },
      },
      thumbprint: {
        serializedName: "thumbprint",
        required: true,
        type: {
          name: "String",
        },
      },
      effectiveAt: {
        serializedName: "effectiveAt",
        required: true,
        type: {
          name: "DateTime",
        },
      },
      reason: {
        serializedName: "reason",
        required: true,
        type: {
          name: "String",
        },
      },
      remarks: {
        serializedName: "remarks",
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

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties,
    },
  },
};

export const CodeSigningAccount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CodeSigningAccount",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      accountUri: {
        serializedName: "properties.accountUri",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "Composite",
          className: "AccountSku",
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

export const CertificateProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateProfile",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      profileType: {
        serializedName: "properties.profileType",
        type: {
          name: "String",
        },
      },
      commonName: {
        serializedName: "properties.commonName",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      organization: {
        serializedName: "properties.organization",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      organizationUnit: {
        serializedName: "properties.organizationUnit",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      streetAddress: {
        serializedName: "properties.streetAddress",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      includeStreetAddress: {
        defaultValue: false,
        serializedName: "properties.includeStreetAddress",
        type: {
          name: "Boolean",
        },
      },
      city: {
        serializedName: "properties.city",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      includeCity: {
        defaultValue: false,
        serializedName: "properties.includeCity",
        type: {
          name: "Boolean",
        },
      },
      state: {
        serializedName: "properties.state",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      includeState: {
        defaultValue: false,
        serializedName: "properties.includeState",
        type: {
          name: "Boolean",
        },
      },
      country: {
        serializedName: "properties.country",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      includeCountry: {
        defaultValue: false,
        serializedName: "properties.includeCountry",
        type: {
          name: "Boolean",
        },
      },
      postalCode: {
        serializedName: "properties.postalCode",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      includePostalCode: {
        defaultValue: false,
        serializedName: "properties.includePostalCode",
        type: {
          name: "Boolean",
        },
      },
      enhancedKeyUsage: {
        serializedName: "properties.enhancedKeyUsage",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      identityValidationId: {
        serializedName: "properties.identityValidationId",
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
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      certificates: {
        serializedName: "properties.certificates",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Certificate",
            },
          },
        },
      },
    },
  },
};

export const CodeSigningAccountsCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CodeSigningAccountsCreateHeaders",
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

export const CodeSigningAccountsUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CodeSigningAccountsUpdateHeaders",
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

export const CodeSigningAccountsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CodeSigningAccountsDeleteHeaders",
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

export const CertificateProfilesCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateProfilesCreateHeaders",
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

export const CertificateProfilesDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CertificateProfilesDeleteHeaders",
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
