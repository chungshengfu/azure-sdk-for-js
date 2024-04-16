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
  TemplateSpec as TemplateSpecMapper,
  TemplateSpecUpdateModel as TemplateSpecUpdateModelMapper,
  TemplateSpecVersion as TemplateSpecVersionMapper,
  TemplateSpecVersionUpdateModel as TemplateSpecVersionUpdateModelMapper,
} from "../models/mappers";

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

export const templateSpec: OperationParameter = {
  parameterPath: "templateSpec",
  mapper: TemplateSpecMapper,
};

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

export const templateSpecName: OperationURLParameter = {
  parameterPath: "templateSpecName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "templateSpecName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-02-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const templateSpec1: OperationParameter = {
  parameterPath: ["options", "templateSpec"],
  mapper: TemplateSpecUpdateModelMapper,
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
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

export const templateSpecVersionModel: OperationParameter = {
  parameterPath: "templateSpecVersionModel",
  mapper: TemplateSpecVersionMapper,
};

export const templateSpecVersion: OperationURLParameter = {
  parameterPath: "templateSpecVersion",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "templateSpecVersion",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const templateSpecVersionUpdateModel: OperationParameter = {
  parameterPath: ["options", "templateSpecVersionUpdateModel"],
  mapper: TemplateSpecVersionUpdateModelMapper,
};
