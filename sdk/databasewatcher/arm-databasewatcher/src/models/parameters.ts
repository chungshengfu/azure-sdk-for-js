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
  Watcher as WatcherMapper,
  WatcherUpdate as WatcherUpdateMapper,
  SharedPrivateLinkResource as SharedPrivateLinkResourceMapper,
  Target as TargetMapper,
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
    defaultValue: "2023-09-01-preview",
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

export const watcherName: OperationURLParameter = {
  parameterPath: "watcherName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{3,60}$"),
    },
    serializedName: "watcherName",
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
  mapper: WatcherMapper,
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: WatcherUpdateMapper,
};

export const sharedPrivateLinkResourceName: OperationURLParameter = {
  parameterPath: "sharedPrivateLinkResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]{1}[a-zA-Z0-9-_.]{0,62}[a-zA-Z0-9_]{1}$",
      ),
    },
    serializedName: "sharedPrivateLinkResourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: SharedPrivateLinkResourceMapper,
};

export const targetName: OperationURLParameter = {
  parameterPath: "targetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]{1}[a-zA-Z0-9-_]{3,60}$"),
    },
    serializedName: "targetName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: TargetMapper,
};
