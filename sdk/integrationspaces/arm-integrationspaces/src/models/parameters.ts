/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  Space as SpaceMapper,
  SpaceUpdate as SpaceUpdateMapper,
  Application as ApplicationMapper,
  ApplicationUpdate as ApplicationUpdateMapper,
  GetOrDeleteBusinessProcessDevelopmentArtifactRequest as GetOrDeleteBusinessProcessDevelopmentArtifactRequestMapper,
  SaveOrValidateBusinessProcessDevelopmentArtifactRequest as SaveOrValidateBusinessProcessDevelopmentArtifactRequestMapper,
  BusinessProcess as BusinessProcessMapper,
  BusinessProcessUpdate as BusinessProcessUpdateMapper,
  ApplicationResource as ApplicationResourceMapper,
  ApplicationResourceUpdate as ApplicationResourceUpdateMapper,
  InfrastructureResource as InfrastructureResourceMapper,
  InfrastructureResourceUpdate as InfrastructureResourceUpdateMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-11-14-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "top",
    type: {
      name: "Number",
    },
  },
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    defaultValue: 0,
    serializedName: "skip",
    type: {
      name: "Number",
    },
  },
};

export const maxpagesize: OperationQueryParameter = {
  parameterPath: ["options", "maxpagesize"],
  mapper: {
    serializedName: "maxpagesize",
    type: {
      name: "Number",
    },
  },
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "filter",
    type: {
      name: "String",
    },
  },
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "expand",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
};

export const orderby: OperationQueryParameter = {
  parameterPath: ["options", "orderby"],
  mapper: {
    serializedName: "orderby",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
};

export const spaceName: OperationURLParameter = {
  parameterPath: "spaceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9_.()-]{0,79}$"),
    },
    serializedName: "spaceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const resource: OperationParameter = {
  parameterPath: "resource",
  mapper: SpaceMapper,
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: SpaceUpdateMapper,
};

export const applicationName: OperationURLParameter = {
  parameterPath: "applicationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9_.()-]{0,79}$"),
    },
    serializedName: "applicationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: ApplicationMapper,
};

export const properties1: OperationParameter = {
  parameterPath: "properties",
  mapper: ApplicationUpdateMapper,
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: GetOrDeleteBusinessProcessDevelopmentArtifactRequestMapper,
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: SaveOrValidateBusinessProcessDevelopmentArtifactRequestMapper,
};

export const businessProcessName: OperationURLParameter = {
  parameterPath: "businessProcessName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9_.()-]{0,79}$"),
    },
    serializedName: "businessProcessName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: BusinessProcessMapper,
};

export const properties2: OperationParameter = {
  parameterPath: "properties",
  mapper: BusinessProcessUpdateMapper,
};

export const businessProcessVersion: OperationURLParameter = {
  parameterPath: "businessProcessVersion",
  mapper: {
    serializedName: "businessProcessVersion",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9_.()-]{0,79}$"),
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource3: OperationParameter = {
  parameterPath: "resource",
  mapper: ApplicationResourceMapper,
};

export const properties3: OperationParameter = {
  parameterPath: "properties",
  mapper: ApplicationResourceUpdateMapper,
};

export const infrastructureResourceName: OperationURLParameter = {
  parameterPath: "infrastructureResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9_.()-]{0,79}$"),
    },
    serializedName: "infrastructureResourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource4: OperationParameter = {
  parameterPath: "resource",
  mapper: InfrastructureResourceMapper,
};

export const properties4: OperationParameter = {
  parameterPath: "properties",
  mapper: InfrastructureResourceUpdateMapper,
};
