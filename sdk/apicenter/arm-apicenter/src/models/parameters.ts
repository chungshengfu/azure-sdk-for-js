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
  Service as ServiceMapper,
  ServiceUpdate as ServiceUpdateMapper,
  MetadataSchemaExportRequest as MetadataSchemaExportRequestMapper,
  MetadataSchema as MetadataSchemaMapper,
  Workspace as WorkspaceMapper,
  Api as ApiMapper,
  Deployment as DeploymentMapper,
  ApiVersion as ApiVersionMapper,
  ApiDefinition as ApiDefinitionMapper,
  ApiSpecImportRequest as ApiSpecImportRequestMapper,
  Environment as EnvironmentMapper,
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
    defaultValue: "2024-03-15-preview",
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
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid",
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

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const deletedServiceName: OperationURLParameter = {
  parameterPath: "deletedServiceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "deletedServiceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const serviceName: OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "serviceName",
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
  mapper: ServiceMapper,
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: ServiceUpdateMapper,
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: MetadataSchemaExportRequestMapper,
};

export const metadataSchemaName: OperationURLParameter = {
  parameterPath: "metadataSchemaName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "metadataSchemaName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: MetadataSchemaMapper,
};

export const workspaceName: OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "workspaceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: WorkspaceMapper,
};

export const apiName: OperationURLParameter = {
  parameterPath: "apiName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "apiName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource3: OperationParameter = {
  parameterPath: "resource",
  mapper: ApiMapper,
};

export const deploymentName: OperationURLParameter = {
  parameterPath: "deploymentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "deploymentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource4: OperationParameter = {
  parameterPath: "resource",
  mapper: DeploymentMapper,
};

export const versionName: OperationURLParameter = {
  parameterPath: "versionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "versionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource5: OperationParameter = {
  parameterPath: "resource",
  mapper: ApiVersionMapper,
};

export const definitionName: OperationURLParameter = {
  parameterPath: "definitionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "definitionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource6: OperationParameter = {
  parameterPath: "resource",
  mapper: ApiDefinitionMapper,
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: ApiSpecImportRequestMapper,
};

export const environmentName: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,90}$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "environmentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource7: OperationParameter = {
  parameterPath: "resource",
  mapper: EnvironmentMapper,
};
