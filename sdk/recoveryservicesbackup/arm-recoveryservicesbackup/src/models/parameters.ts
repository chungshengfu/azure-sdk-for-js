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
  BackupResourceConfigResource as BackupResourceConfigResourceMapper,
  PreValidateEnableBackupRequest as PreValidateEnableBackupRequestMapper,
  ProtectionIntentResource as ProtectionIntentResourceMapper,
  BackupStatusRequest as BackupStatusRequestMapper,
  FeatureSupportRequest as FeatureSupportRequestMapper,
  BackupResourceVaultConfigResource as BackupResourceVaultConfigResourceMapper,
  BackupResourceEncryptionConfigResource as BackupResourceEncryptionConfigResourceMapper,
  PrivateEndpointConnectionResource as PrivateEndpointConnectionResourceMapper,
  PrepareDataMoveRequest as PrepareDataMoveRequestMapper,
  TriggerDataMoveRequest as TriggerDataMoveRequestMapper,
  MoveRPAcrossTiersRequest as MoveRPAcrossTiersRequestMapper,
  ProtectedItemResource as ProtectedItemResourceMapper,
  RestoreRequestResource as RestoreRequestResourceMapper,
  ProtectionPolicyResource as ProtectionPolicyResourceMapper,
  ValidateOperationRequestResource as ValidateOperationRequestResourceMapper,
  ProtectionContainerResource as ProtectionContainerResourceMapper,
  BackupRequestResource as BackupRequestResourceMapper,
  ILRRequestResource as ILRRequestResourceMapper,
  SecurityPinBase as SecurityPinBaseMapper,
  ListRecoveryPointsRecommendedForMoveRequest as ListRecoveryPointsRecommendedForMoveRequestMapper,
  ResourceGuardProxyBaseResource as ResourceGuardProxyBaseResourceMapper,
  UnlockDeleteRequest as UnlockDeleteRequestMapper,
  FetchTieringCostInfoRequest as FetchTieringCostInfoRequestMapper,
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
    defaultValue: "2024-04-30-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const vaultName: OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
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
  mapper: BackupResourceConfigResourceMapper,
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: PreValidateEnableBackupRequestMapper,
};

export const azureRegion: OperationURLParameter = {
  parameterPath: "azureRegion",
  mapper: {
    serializedName: "azureRegion",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const fabricName: OperationURLParameter = {
  parameterPath: "fabricName",
  mapper: {
    serializedName: "fabricName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const intentObjectName: OperationURLParameter = {
  parameterPath: "intentObjectName",
  mapper: {
    serializedName: "intentObjectName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProtectionIntentResourceMapper,
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: BackupStatusRequestMapper,
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: FeatureSupportRequestMapper,
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

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
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

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: BackupResourceVaultConfigResourceMapper,
};

export const xMsAuthorizationAuxiliary: OperationParameter = {
  parameterPath: ["options", "xMsAuthorizationAuxiliary"],
  mapper: {
    serializedName: "x-ms-authorization-auxiliary",
    type: {
      name: "String",
    },
  },
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: BackupResourceEncryptionConfigResourceMapper,
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

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionResourceMapper,
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

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrepareDataMoveRequestMapper,
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: TriggerDataMoveRequestMapper,
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: MoveRPAcrossTiersRequestMapper,
};

export const containerName: OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    serializedName: "containerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const protectedItemName: OperationURLParameter = {
  parameterPath: "protectedItemName",
  mapper: {
    serializedName: "protectedItemName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const recoveryPointId: OperationURLParameter = {
  parameterPath: "recoveryPointId",
  mapper: {
    serializedName: "recoveryPointId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProtectedItemResourceMapper,
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: RestoreRequestResourceMapper,
};

export const policyName: OperationURLParameter = {
  parameterPath: "policyName",
  mapper: {
    serializedName: "policyName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters13: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProtectionPolicyResourceMapper,
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    serializedName: "jobName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters14: OperationParameter = {
  parameterPath: "parameters",
  mapper: ValidateOperationRequestResourceMapper,
};

export const backupEngineName: OperationURLParameter = {
  parameterPath: "backupEngineName",
  mapper: {
    serializedName: "backupEngineName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters15: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProtectionContainerResourceMapper,
};

export const parameters16: OperationParameter = {
  parameterPath: "parameters",
  mapper: BackupRequestResourceMapper,
};

export const parameters17: OperationParameter = {
  parameterPath: "parameters",
  mapper: ILRRequestResourceMapper,
};

export const parameters18: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: SecurityPinBaseMapper,
};

export const parameters19: OperationParameter = {
  parameterPath: "parameters",
  mapper: ListRecoveryPointsRecommendedForMoveRequestMapper,
};

export const resourceGuardProxyName: OperationURLParameter = {
  parameterPath: "resourceGuardProxyName",
  mapper: {
    serializedName: "resourceGuardProxyName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters20: OperationParameter = {
  parameterPath: "parameters",
  mapper: ResourceGuardProxyBaseResourceMapper,
};

export const parameters21: OperationParameter = {
  parameterPath: "parameters",
  mapper: UnlockDeleteRequestMapper,
};

export const parameters22: OperationParameter = {
  parameterPath: "parameters",
  mapper: FetchTieringCostInfoRequestMapper,
};

export const vaultName1: OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z][-A-Za-z0-9]*[A-Za-z0-9]$"),
      MaxLength: 50,
      MinLength: 2,
    },
    serializedName: "vaultName",
    required: true,
    type: {
      name: "String",
    },
  },
};
