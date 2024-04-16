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
  Application as ApplicationMapper,
  ApplicationPatchable as ApplicationPatchableMapper,
  ApplicationDefinition as ApplicationDefinitionMapper,
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
    defaultValue: "2018-06-01",
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

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
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

export const applicationName: OperationURLParameter = {
  parameterPath: "applicationName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3,
    },
    serializedName: "applicationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ApplicationMapper,
};

export const parameters1: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: ApplicationPatchableMapper,
};

export const applicationId: OperationURLParameter = {
  parameterPath: "applicationId",
  mapper: {
    serializedName: "applicationId",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const parameters2: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: ApplicationMapper,
};

export const applicationDefinitionName: OperationURLParameter = {
  parameterPath: "applicationDefinitionName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3,
    },
    serializedName: "applicationDefinitionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ApplicationDefinitionMapper,
};
