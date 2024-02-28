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
  Extension as ExtensionMapper,
  PatchExtension as PatchExtensionMapper,
  FluxConfiguration as FluxConfigurationMapper,
  FluxConfigurationPatch as FluxConfigurationPatchMapper,
  SourceControlConfiguration as SourceControlConfigurationMapper,
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

export const extension: OperationParameter = {
  parameterPath: "extension",
  mapper: ExtensionMapper,
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

export const clusterRp: OperationURLParameter = {
  parameterPath: "clusterRp",
  mapper: {
    serializedName: "clusterRp",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const clusterResourceName: OperationURLParameter = {
  parameterPath: "clusterResourceName",
  mapper: {
    serializedName: "clusterResourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const extensionName: OperationURLParameter = {
  parameterPath: "extensionName",
  mapper: {
    serializedName: "extensionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const forceDelete: OperationQueryParameter = {
  parameterPath: ["options", "forceDelete"],
  mapper: {
    serializedName: "forceDelete",
    type: {
      name: "Boolean",
    },
  },
};

export const patchExtension: OperationParameter = {
  parameterPath: "patchExtension",
  mapper: PatchExtensionMapper,
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

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const fluxConfigurationName: OperationURLParameter = {
  parameterPath: "fluxConfigurationName",
  mapper: {
    serializedName: "fluxConfigurationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const fluxConfiguration: OperationParameter = {
  parameterPath: "fluxConfiguration",
  mapper: FluxConfigurationMapper,
};

export const fluxConfigurationPatch: OperationParameter = {
  parameterPath: "fluxConfigurationPatch",
  mapper: FluxConfigurationPatchMapper,
};

export const sourceControlConfigurationName: OperationURLParameter = {
  parameterPath: "sourceControlConfigurationName",
  mapper: {
    serializedName: "sourceControlConfigurationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const sourceControlConfiguration: OperationParameter = {
  parameterPath: "sourceControlConfiguration",
  mapper: SourceControlConfigurationMapper,
};
