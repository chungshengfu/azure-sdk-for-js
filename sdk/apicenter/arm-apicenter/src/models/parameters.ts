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
  OperationQueryParameter
} from "@azure/core-client";
import {
  Service as ServiceMapper,
  ServiceUpdate as ServiceUpdateMapper,
  MetadataSchemaExportRequest as MetadataSchemaExportRequestMapper,
  MetadataSchema as MetadataSchemaMapper,
  Workspace as WorkspaceMapper,
  Api as ApiMapper,
  ApiVersion as ApiVersionMapper,
  ApiDefinition as ApiDefinitionMapper,
  ApiSpecImportRequest as ApiSpecImportRequestMapper,
  Deployment as DeploymentMapper,
  Environment as EnvironmentMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const serviceName: OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "serviceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const payload: OperationParameter = {
  parameterPath: ["options", "payload"],
  mapper: ServiceMapper
};

export const payload1: OperationParameter = {
  parameterPath: ["options", "payload"],
  mapper: ServiceUpdateMapper
};

export const payload2: OperationParameter = {
  parameterPath: "payload",
  mapper: MetadataSchemaExportRequestMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const metadataSchemaName: OperationURLParameter = {
  parameterPath: "metadataSchemaName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "metadataSchemaName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const payload3: OperationParameter = {
  parameterPath: "payload",
  mapper: MetadataSchemaMapper
};

export const workspaceName: OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "workspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const payload4: OperationParameter = {
  parameterPath: "payload",
  mapper: WorkspaceMapper
};

export const apiName: OperationURLParameter = {
  parameterPath: "apiName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "apiName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const payload5: OperationParameter = {
  parameterPath: "payload",
  mapper: ApiMapper
};

export const versionName: OperationURLParameter = {
  parameterPath: "versionName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "versionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const payload6: OperationParameter = {
  parameterPath: "payload",
  mapper: ApiVersionMapper
};

export const definitionName: OperationURLParameter = {
  parameterPath: "definitionName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "definitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const payload7: OperationParameter = {
  parameterPath: "payload",
  mapper: ApiDefinitionMapper
};

export const payload8: OperationParameter = {
  parameterPath: "payload",
  mapper: ApiSpecImportRequestMapper
};

export const deploymentName: OperationURLParameter = {
  parameterPath: "deploymentName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "deploymentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const payload9: OperationParameter = {
  parameterPath: "payload",
  mapper: DeploymentMapper
};

export const payload10: OperationParameter = {
  parameterPath: "payload",
  mapper: EnvironmentMapper
};

export const environmentName: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "environmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};
