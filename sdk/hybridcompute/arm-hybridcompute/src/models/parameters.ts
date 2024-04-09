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
  License as LicenseMapper,
  LicenseUpdate as LicenseUpdateMapper,
  MachineInstallPatchesParameters as MachineInstallPatchesParametersMapper,
  LicenseProfile as LicenseProfileMapper,
  LicenseProfileUpdate as LicenseProfileUpdateMapper,
  MachineExtension as MachineExtensionMapper,
  MachineExtensionUpdate as MachineExtensionUpdateMapper,
  MachineExtensionUpgrade as MachineExtensionUpgradeMapper,
  MachineRunCommand as MachineRunCommandMapper,
  MachineRunCommandUpdate as MachineRunCommandUpdateMapper,
  HybridComputePrivateLinkScope as HybridComputePrivateLinkScopeMapper,
  TagsResource as TagsResourceMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  NetworkConfiguration as NetworkConfigurationMapper,
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: LicenseMapper,
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-04-09-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
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

export const licenseName: OperationURLParameter = {
  parameterPath: "licenseName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9-_\\.]+"),
    },
    serializedName: "licenseName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: LicenseUpdateMapper,
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

export const machineName: OperationURLParameter = {
  parameterPath: "machineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-_\\.]{1,54}$"),
      MaxLength: 54,
      MinLength: 1,
    },
    serializedName: "machineName",
    required: true,
    type: {
      name: "String",
    },
  },
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

export const resourceGroupName1: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const installPatchesInput: OperationParameter = {
  parameterPath: "installPatchesInput",
  mapper: MachineInstallPatchesParametersMapper,
};

export const expand1: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String",
    },
  },
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: LicenseProfileMapper,
};

export const machineName1: OperationURLParameter = {
  parameterPath: "machineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9-_\\.]+"),
    },
    serializedName: "machineName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const licenseProfileName: OperationURLParameter = {
  parameterPath: "licenseProfileName",
  mapper: {
    defaultValue: "default",
    isConstant: true,
    serializedName: "licenseProfileName",
    type: {
      name: "String",
    },
  },
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: LicenseProfileUpdateMapper,
};

export const extensionParameters: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: MachineExtensionMapper,
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

export const extensionParameters1: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: MachineExtensionUpdateMapper,
};

export const extensionUpgradeParameters: OperationParameter = {
  parameterPath: "extensionUpgradeParameters",
  mapper: MachineExtensionUpgradeMapper,
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const publisher: OperationURLParameter = {
  parameterPath: "publisher",
  mapper: {
    serializedName: "publisher",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const extensionType: OperationURLParameter = {
  parameterPath: "extensionType",
  mapper: {
    serializedName: "extensionType",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const version: OperationURLParameter = {
  parameterPath: "version",
  mapper: {
    serializedName: "version",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const metadataName: OperationURLParameter = {
  parameterPath: "metadataName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-_\\.]{1,54}$"),
    },
    serializedName: "metadataName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const osType: OperationURLParameter = {
  parameterPath: "osType",
  mapper: {
    serializedName: "osType",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const runCommandProperties: OperationParameter = {
  parameterPath: "runCommandProperties",
  mapper: MachineRunCommandMapper,
};

export const runCommandName: OperationURLParameter = {
  parameterPath: "runCommandName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9-_\\.]+"),
    },
    serializedName: "runCommandName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const runCommandProperties1: OperationParameter = {
  parameterPath: "runCommandProperties",
  mapper: MachineRunCommandUpdateMapper,
};

export const scopeName: OperationURLParameter = {
  parameterPath: "scopeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[a-zA-Z0-9-_\\.]+"),
    },
    serializedName: "scopeName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: HybridComputePrivateLinkScopeMapper,
};

export const privateLinkScopeTags: OperationParameter = {
  parameterPath: "privateLinkScopeTags",
  mapper: TagsResourceMapper,
};

export const location1: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const privateLinkScopeId: OperationURLParameter = {
  parameterPath: "privateLinkScopeId",
  mapper: {
    serializedName: "privateLinkScopeId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const machineName2: OperationURLParameter = {
  parameterPath: "machineName",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "machineName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper,
};

export const resourceUri: OperationURLParameter = {
  parameterPath: "resourceUri",
  mapper: {
    serializedName: "resourceUri",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkConfigurationMapper,
};

export const perimeterName: OperationURLParameter = {
  parameterPath: "perimeterName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[.]{1}.+$",
      ),
    },
    serializedName: "perimeterName",
    required: true,
    type: {
      name: "String",
    },
  },
};
