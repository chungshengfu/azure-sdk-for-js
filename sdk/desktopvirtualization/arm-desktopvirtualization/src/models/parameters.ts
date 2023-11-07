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
  Workspace as WorkspaceMapper,
  WorkspacePatch as WorkspacePatchMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  ScalingPlan as ScalingPlanMapper,
  ScalingPlanPatch as ScalingPlanPatchMapper,
  ScalingPlanPooledSchedule as ScalingPlanPooledScheduleMapper,
  ScalingPlanPooledSchedulePatch as ScalingPlanPooledSchedulePatchMapper,
  ScalingPlanPersonalSchedule as ScalingPlanPersonalScheduleMapper,
  ScalingPlanPersonalSchedulePatch as ScalingPlanPersonalSchedulePatchMapper,
  ApplicationGroup as ApplicationGroupMapper,
  ApplicationGroupPatch as ApplicationGroupPatchMapper,
  Application as ApplicationMapper,
  ApplicationPatch as ApplicationPatchMapper,
  DesktopPatch as DesktopPatchMapper,
  HostPool as HostPoolMapper,
  HostPoolPatch as HostPoolPatchMapper,
  SendMessage as SendMessageMapper,
  SessionHostPatch as SessionHostPatchMapper,
  MsixPackage as MsixPackageMapper,
  MsixPackagePatch as MsixPackagePatchMapper,
  ImportPackageInfoRequest as ImportPackageInfoRequestMapper,
  MsixImageURI as MsixImageURIMapper,
  AppAttachPackage as AppAttachPackageMapper,
  AppAttachPackagePatch as AppAttachPackagePatchMapper
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
    defaultValue: "2023-10-04-preview",
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
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
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

export const workspaceName: OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "workspaceName",
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

export const workspace: OperationParameter = {
  parameterPath: "workspace",
  mapper: WorkspaceMapper
};

export const workspace1: OperationParameter = {
  parameterPath: ["options", "workspace"],
  mapper: WorkspacePatchMapper
};

export const pageSize: OperationQueryParameter = {
  parameterPath: ["options", "pageSize"],
  mapper: {
    serializedName: "pageSize",
    type: {
      name: "Number"
    }
  }
};

export const isDescending: OperationQueryParameter = {
  parameterPath: ["options", "isDescending"],
  mapper: {
    serializedName: "isDescending",
    type: {
      name: "Boolean"
    }
  }
};

export const initialSkip: OperationQueryParameter = {
  parameterPath: ["options", "initialSkip"],
  mapper: {
    serializedName: "initialSkip",
    type: {
      name: "Number"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const connection: OperationParameter = {
  parameterPath: "connection",
  mapper: PrivateEndpointConnectionMapper
};

export const hostPoolName: OperationURLParameter = {
  parameterPath: "hostPoolName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "hostPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scalingPlanName: OperationURLParameter = {
  parameterPath: "scalingPlanName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "scalingPlanName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scalingPlan: OperationParameter = {
  parameterPath: "scalingPlan",
  mapper: ScalingPlanMapper
};

export const scalingPlan1: OperationParameter = {
  parameterPath: ["options", "scalingPlan"],
  mapper: ScalingPlanPatchMapper
};

export const scalingPlanScheduleName: OperationURLParameter = {
  parameterPath: "scalingPlanScheduleName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "scalingPlanScheduleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scalingPlanSchedule: OperationParameter = {
  parameterPath: "scalingPlanSchedule",
  mapper: ScalingPlanPooledScheduleMapper
};

export const scalingPlanSchedule1: OperationParameter = {
  parameterPath: ["options", "scalingPlanSchedule"],
  mapper: ScalingPlanPooledSchedulePatchMapper
};

export const scalingPlanSchedule2: OperationParameter = {
  parameterPath: "scalingPlanSchedule",
  mapper: ScalingPlanPersonalScheduleMapper
};

export const scalingPlanSchedule3: OperationParameter = {
  parameterPath: ["options", "scalingPlanSchedule"],
  mapper: ScalingPlanPersonalSchedulePatchMapper
};

export const applicationGroupName: OperationURLParameter = {
  parameterPath: "applicationGroupName",
  mapper: {
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    serializedName: "applicationGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const applicationGroup: OperationParameter = {
  parameterPath: "applicationGroup",
  mapper: ApplicationGroupMapper
};

export const applicationGroup1: OperationParameter = {
  parameterPath: ["options", "applicationGroup"],
  mapper: ApplicationGroupPatchMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const applicationName: OperationURLParameter = {
  parameterPath: "applicationName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3
    },
    serializedName: "applicationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const application: OperationParameter = {
  parameterPath: "application",
  mapper: ApplicationMapper
};

export const application1: OperationParameter = {
  parameterPath: ["options", "application"],
  mapper: ApplicationPatchMapper
};

export const desktopName: OperationURLParameter = {
  parameterPath: "desktopName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3
    },
    serializedName: "desktopName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const desktop: OperationParameter = {
  parameterPath: ["options", "desktop"],
  mapper: DesktopPatchMapper
};

export const hostPool: OperationParameter = {
  parameterPath: "hostPool",
  mapper: HostPoolMapper
};

export const force: OperationQueryParameter = {
  parameterPath: ["options", "force"],
  mapper: {
    serializedName: "force",
    type: {
      name: "Boolean"
    }
  }
};

export const hostPool1: OperationParameter = {
  parameterPath: ["options", "hostPool"],
  mapper: HostPoolPatchMapper
};

export const sessionHostName: OperationURLParameter = {
  parameterPath: "sessionHostName",
  mapper: {
    constraints: {
      MaxLength: 48,
      MinLength: 3
    },
    serializedName: "sessionHostName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const userSessionId: OperationURLParameter = {
  parameterPath: "userSessionId",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 1
    },
    serializedName: "userSessionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sendMessage: OperationParameter = {
  parameterPath: ["options", "sendMessage"],
  mapper: SendMessageMapper
};

export const sessionHost: OperationParameter = {
  parameterPath: ["options", "sessionHost"],
  mapper: SessionHostPatchMapper
};

export const msixPackageFullName: OperationURLParameter = {
  parameterPath: "msixPackageFullName",
  mapper: {
    constraints: {
      MaxLength: 100,
      MinLength: 3
    },
    serializedName: "msixPackageFullName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const msixPackage: OperationParameter = {
  parameterPath: "msixPackage",
  mapper: MsixPackageMapper
};

export const msixPackage1: OperationParameter = {
  parameterPath: ["options", "msixPackage"],
  mapper: MsixPackagePatchMapper
};

export const importPackageInfoRequest: OperationParameter = {
  parameterPath: "importPackageInfoRequest",
  mapper: ImportPackageInfoRequestMapper
};

export const msixImageURI: OperationParameter = {
  parameterPath: "msixImageURI",
  mapper: MsixImageURIMapper
};

export const appAttachPackageName: OperationURLParameter = {
  parameterPath: "appAttachPackageName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$"),
      MaxLength: 100,
      MinLength: 3
    },
    serializedName: "appAttachPackageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const appAttachPackage: OperationParameter = {
  parameterPath: "appAttachPackage",
  mapper: AppAttachPackageMapper
};

export const appAttachPackagePatch: OperationParameter = {
  parameterPath: ["options", "appAttachPackagePatch"],
  mapper: AppAttachPackagePatchMapper
};
