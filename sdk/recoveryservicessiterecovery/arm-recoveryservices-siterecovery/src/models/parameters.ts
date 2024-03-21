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
  ConfigureAlertRequest as ConfigureAlertRequestMapper,
  FabricCreationInput as FabricCreationInputMapper,
  FailoverProcessServerRequest as FailoverProcessServerRequestMapper,
  RenewCertificateInput as RenewCertificateInputMapper,
  CreateNetworkMappingInput as CreateNetworkMappingInputMapper,
  UpdateNetworkMappingInput as UpdateNetworkMappingInputMapper,
  CreateProtectionContainerInput as CreateProtectionContainerInputMapper,
  DiscoverProtectableItemRequest as DiscoverProtectableItemRequestMapper,
  SwitchClusterProtectionInput as SwitchClusterProtectionInputMapper,
  SwitchProtectionInput as SwitchProtectionInputMapper,
  EnableMigrationInput as EnableMigrationInputMapper,
  UpdateMigrationItemInput as UpdateMigrationItemInputMapper,
  MigrateInput as MigrateInputMapper,
  PauseReplicationInput as PauseReplicationInputMapper,
  ResumeReplicationInput as ResumeReplicationInputMapper,
  ResyncInput as ResyncInputMapper,
  TestMigrateInput as TestMigrateInputMapper,
  TestMigrateCleanupInput as TestMigrateCleanupInputMapper,
  EnableProtectionInput as EnableProtectionInputMapper,
  UpdateReplicationProtectedItemInput as UpdateReplicationProtectedItemInputMapper,
  AddDisksInput as AddDisksInputMapper,
  ApplyRecoveryPointInput as ApplyRecoveryPointInputMapper,
  PlannedFailoverInput as PlannedFailoverInputMapper,
  DisableProtectionInput as DisableProtectionInputMapper,
  RemoveDisksInput as RemoveDisksInputMapper,
  ReverseReplicationInput as ReverseReplicationInputMapper,
  ResolveHealthInput as ResolveHealthInputMapper,
  SwitchProviderInput as SwitchProviderInputMapper,
  TestFailoverInput as TestFailoverInputMapper,
  TestFailoverCleanupInput as TestFailoverCleanupInputMapper,
  UnplannedFailoverInput as UnplannedFailoverInputMapper,
  UpdateApplianceForReplicationProtectedItemInput as UpdateApplianceForReplicationProtectedItemInputMapper,
  UpdateMobilityServiceRequest as UpdateMobilityServiceRequestMapper,
  ReplicationProtectionCluster as ReplicationProtectionClusterMapper,
  ApplyClusterRecoveryPointInput as ApplyClusterRecoveryPointInputMapper,
  ClusterTestFailoverInput as ClusterTestFailoverInputMapper,
  ClusterTestFailoverCleanupInput as ClusterTestFailoverCleanupInputMapper,
  ClusterUnplannedFailoverInput as ClusterUnplannedFailoverInputMapper,
  CreateProtectionContainerMappingInput as CreateProtectionContainerMappingInputMapper,
  UpdateProtectionContainerMappingInput as UpdateProtectionContainerMappingInputMapper,
  RemoveProtectionContainerMappingInput as RemoveProtectionContainerMappingInputMapper,
  AddRecoveryServicesProviderInput as AddRecoveryServicesProviderInputMapper,
  StorageClassificationMappingInput as StorageClassificationMappingInputMapper,
  AddVCenterRequest as AddVCenterRequestMapper,
  UpdateVCenterRequest as UpdateVCenterRequestMapper,
  ResumeJobParams as ResumeJobParamsMapper,
  JobQueryParameter as JobQueryParameterMapper,
  CreatePolicyInput as CreatePolicyInputMapper,
  UpdatePolicyInput as UpdatePolicyInputMapper,
  CreateProtectionIntentInput as CreateProtectionIntentInputMapper,
  CreateRecoveryPlanInput as CreateRecoveryPlanInputMapper,
  UpdateRecoveryPlanInput as UpdateRecoveryPlanInputMapper,
  RecoveryPlanPlannedFailoverInput as RecoveryPlanPlannedFailoverInputMapper,
  RecoveryPlanTestFailoverInput as RecoveryPlanTestFailoverInputMapper,
  RecoveryPlanTestFailoverCleanupInput as RecoveryPlanTestFailoverCleanupInputMapper,
  RecoveryPlanUnplannedFailoverInput as RecoveryPlanUnplannedFailoverInputMapper,
  VaultSettingCreationInput as VaultSettingCreationInputMapper,
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
    defaultValue: "2024-02-01",
    isConstant: true,
    serializedName: "api-version",
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

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const alertSettingName: OperationURLParameter = {
  parameterPath: "alertSettingName",
  mapper: {
    serializedName: "alertSettingName",
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

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: ConfigureAlertRequestMapper,
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

export const virtualMachineName: OperationURLParameter = {
  parameterPath: "virtualMachineName",
  mapper: {
    serializedName: "virtualMachineName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const eventName: OperationURLParameter = {
  parameterPath: "eventName",
  mapper: {
    serializedName: "eventName",
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

export const input: OperationParameter = {
  parameterPath: "input",
  mapper: FabricCreationInputMapper,
};

export const failoverProcessServerRequest: OperationParameter = {
  parameterPath: "failoverProcessServerRequest",
  mapper: FailoverProcessServerRequestMapper,
};

export const renewCertificate: OperationParameter = {
  parameterPath: "renewCertificate",
  mapper: RenewCertificateInputMapper,
};

export const resourceName1: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const fabricName1: OperationURLParameter = {
  parameterPath: "fabricName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "fabricName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const logicalNetworkName: OperationURLParameter = {
  parameterPath: "logicalNetworkName",
  mapper: {
    serializedName: "logicalNetworkName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const networkName: OperationURLParameter = {
  parameterPath: "networkName",
  mapper: {
    serializedName: "networkName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const networkMappingName: OperationURLParameter = {
  parameterPath: "networkMappingName",
  mapper: {
    serializedName: "networkMappingName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const input1: OperationParameter = {
  parameterPath: "input",
  mapper: CreateNetworkMappingInputMapper,
};

export const input2: OperationParameter = {
  parameterPath: "input",
  mapper: UpdateNetworkMappingInputMapper,
};

export const protectionContainerName: OperationURLParameter = {
  parameterPath: "protectionContainerName",
  mapper: {
    serializedName: "protectionContainerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const creationInput: OperationParameter = {
  parameterPath: "creationInput",
  mapper: CreateProtectionContainerInputMapper,
};

export const discoverProtectableItemRequest: OperationParameter = {
  parameterPath: "discoverProtectableItemRequest",
  mapper: DiscoverProtectableItemRequestMapper,
};

export const switchInput: OperationParameter = {
  parameterPath: "switchInput",
  mapper: SwitchClusterProtectionInputMapper,
};

export const resourceName2: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const fabricName2: OperationURLParameter = {
  parameterPath: "fabricName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "fabricName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const protectionContainerName1: OperationURLParameter = {
  parameterPath: "protectionContainerName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "protectionContainerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const switchInput1: OperationParameter = {
  parameterPath: "switchInput",
  mapper: SwitchProtectionInputMapper,
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "skipToken",
    type: {
      name: "String",
    },
  },
};

export const takeToken: OperationQueryParameter = {
  parameterPath: ["options", "takeToken"],
  mapper: {
    serializedName: "takeToken",
    type: {
      name: "String",
    },
  },
};

export const migrationItemName: OperationURLParameter = {
  parameterPath: "migrationItemName",
  mapper: {
    serializedName: "migrationItemName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const input3: OperationParameter = {
  parameterPath: "input",
  mapper: EnableMigrationInputMapper,
};

export const deleteOption: OperationQueryParameter = {
  parameterPath: ["options", "deleteOption"],
  mapper: {
    serializedName: "deleteOption",
    type: {
      name: "String",
    },
  },
};

export const input4: OperationParameter = {
  parameterPath: "input",
  mapper: UpdateMigrationItemInputMapper,
};

export const migrateInput: OperationParameter = {
  parameterPath: "migrateInput",
  mapper: MigrateInputMapper,
};

export const pauseReplicationInput: OperationParameter = {
  parameterPath: "pauseReplicationInput",
  mapper: PauseReplicationInputMapper,
};

export const resumeReplicationInput: OperationParameter = {
  parameterPath: "resumeReplicationInput",
  mapper: ResumeReplicationInputMapper,
};

export const input5: OperationParameter = {
  parameterPath: "input",
  mapper: ResyncInputMapper,
};

export const testMigrateInput: OperationParameter = {
  parameterPath: "testMigrateInput",
  mapper: TestMigrateInputMapper,
};

export const testMigrateCleanupInput: OperationParameter = {
  parameterPath: "testMigrateCleanupInput",
  mapper: TestMigrateCleanupInputMapper,
};

export const migrationRecoveryPointName: OperationURLParameter = {
  parameterPath: "migrationRecoveryPointName",
  mapper: {
    serializedName: "migrationRecoveryPointName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const take: OperationQueryParameter = {
  parameterPath: ["options", "take"],
  mapper: {
    serializedName: "$take",
    type: {
      name: "String",
    },
  },
};

export const skipToken1: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
    type: {
      name: "String",
    },
  },
};

export const protectableItemName: OperationURLParameter = {
  parameterPath: "protectableItemName",
  mapper: {
    serializedName: "protectableItemName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const replicatedProtectedItemName: OperationURLParameter = {
  parameterPath: "replicatedProtectedItemName",
  mapper: {
    serializedName: "replicatedProtectedItemName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const input6: OperationParameter = {
  parameterPath: "input",
  mapper: EnableProtectionInputMapper,
};

export const updateProtectionInput: OperationParameter = {
  parameterPath: "updateProtectionInput",
  mapper: UpdateReplicationProtectedItemInputMapper,
};

export const addDisksInput: OperationParameter = {
  parameterPath: "addDisksInput",
  mapper: AddDisksInputMapper,
};

export const applyRecoveryPointInput: OperationParameter = {
  parameterPath: "applyRecoveryPointInput",
  mapper: ApplyRecoveryPointInputMapper,
};

export const failoverInput: OperationParameter = {
  parameterPath: "failoverInput",
  mapper: PlannedFailoverInputMapper,
};

export const disableProtectionInput: OperationParameter = {
  parameterPath: "disableProtectionInput",
  mapper: DisableProtectionInputMapper,
};

export const removeDisksInput: OperationParameter = {
  parameterPath: "removeDisksInput",
  mapper: RemoveDisksInputMapper,
};

export const reprotectInput: OperationParameter = {
  parameterPath: "reprotectInput",
  mapper: ReverseReplicationInputMapper,
};

export const resolveHealthInput: OperationParameter = {
  parameterPath: "resolveHealthInput",
  mapper: ResolveHealthInputMapper,
};

export const switchProviderInput: OperationParameter = {
  parameterPath: "switchProviderInput",
  mapper: SwitchProviderInputMapper,
};

export const testfailoverInput: OperationParameter = {
  parameterPath: "testfailoverInput",
  mapper: TestFailoverInputMapper,
};

export const cleanupInput: OperationParameter = {
  parameterPath: "cleanupInput",
  mapper: TestFailoverCleanupInputMapper,
};

export const failoverInput1: OperationParameter = {
  parameterPath: "failoverInput",
  mapper: UnplannedFailoverInputMapper,
};

export const applianceUpdateInput: OperationParameter = {
  parameterPath: "applianceUpdateInput",
  mapper: UpdateApplianceForReplicationProtectedItemInputMapper,
};

export const updateMobilityServiceRequest: OperationParameter = {
  parameterPath: "updateMobilityServiceRequest",
  mapper: UpdateMobilityServiceRequestMapper,
};

export const recoveryPointName: OperationURLParameter = {
  parameterPath: "recoveryPointName",
  mapper: {
    serializedName: "recoveryPointName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const replicationProtectionClusterName: OperationURLParameter = {
  parameterPath: "replicationProtectionClusterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "replicationProtectionClusterName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const replicationProtectionCluster: OperationParameter = {
  parameterPath: "replicationProtectionCluster",
  mapper: ReplicationProtectionClusterMapper,
};

export const applyClusterRecoveryPointInput: OperationParameter = {
  parameterPath: "applyClusterRecoveryPointInput",
  mapper: ApplyClusterRecoveryPointInputMapper,
};

export const jobId: OperationURLParameter = {
  parameterPath: "jobId",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "jobId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const failoverInput2: OperationParameter = {
  parameterPath: "failoverInput",
  mapper: ClusterTestFailoverInputMapper,
};

export const cleanupInput1: OperationParameter = {
  parameterPath: "cleanupInput",
  mapper: ClusterTestFailoverCleanupInputMapper,
};

export const failoverInput3: OperationParameter = {
  parameterPath: "failoverInput",
  mapper: ClusterUnplannedFailoverInputMapper,
};

export const recoveryPointName1: OperationURLParameter = {
  parameterPath: "recoveryPointName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"),
    },
    serializedName: "recoveryPointName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const mappingName: OperationURLParameter = {
  parameterPath: "mappingName",
  mapper: {
    serializedName: "mappingName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const creationInput1: OperationParameter = {
  parameterPath: "creationInput",
  mapper: CreateProtectionContainerMappingInputMapper,
};

export const updateInput: OperationParameter = {
  parameterPath: "updateInput",
  mapper: UpdateProtectionContainerMappingInputMapper,
};

export const removalInput: OperationParameter = {
  parameterPath: "removalInput",
  mapper: RemoveProtectionContainerMappingInputMapper,
};

export const providerName: OperationURLParameter = {
  parameterPath: "providerName",
  mapper: {
    serializedName: "providerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const addProviderInput: OperationParameter = {
  parameterPath: "addProviderInput",
  mapper: AddRecoveryServicesProviderInputMapper,
};

export const storageClassificationName: OperationURLParameter = {
  parameterPath: "storageClassificationName",
  mapper: {
    serializedName: "storageClassificationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const storageClassificationMappingName: OperationURLParameter = {
  parameterPath: "storageClassificationMappingName",
  mapper: {
    serializedName: "storageClassificationMappingName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const pairingInput: OperationParameter = {
  parameterPath: "pairingInput",
  mapper: StorageClassificationMappingInputMapper,
};

export const vcenterName: OperationURLParameter = {
  parameterPath: "vcenterName",
  mapper: {
    serializedName: "vcenterName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const addVCenterRequest: OperationParameter = {
  parameterPath: "addVCenterRequest",
  mapper: AddVCenterRequestMapper,
};

export const updateVCenterRequest: OperationParameter = {
  parameterPath: "updateVCenterRequest",
  mapper: UpdateVCenterRequestMapper,
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

export const resumeJobParams: OperationParameter = {
  parameterPath: "resumeJobParams",
  mapper: ResumeJobParamsMapper,
};

export const jobQueryParameter: OperationParameter = {
  parameterPath: "jobQueryParameter",
  mapper: JobQueryParameterMapper,
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

export const input7: OperationParameter = {
  parameterPath: "input",
  mapper: CreatePolicyInputMapper,
};

export const input8: OperationParameter = {
  parameterPath: "input",
  mapper: UpdatePolicyInputMapper,
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

export const input9: OperationParameter = {
  parameterPath: "input",
  mapper: CreateProtectionIntentInputMapper,
};

export const recoveryPlanName: OperationURLParameter = {
  parameterPath: "recoveryPlanName",
  mapper: {
    serializedName: "recoveryPlanName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const input10: OperationParameter = {
  parameterPath: "input",
  mapper: CreateRecoveryPlanInputMapper,
};

export const input11: OperationParameter = {
  parameterPath: "input",
  mapper: UpdateRecoveryPlanInputMapper,
};

export const input12: OperationParameter = {
  parameterPath: "input",
  mapper: RecoveryPlanPlannedFailoverInputMapper,
};

export const input13: OperationParameter = {
  parameterPath: "input",
  mapper: RecoveryPlanTestFailoverInputMapper,
};

export const input14: OperationParameter = {
  parameterPath: "input",
  mapper: RecoveryPlanTestFailoverCleanupInputMapper,
};

export const input15: OperationParameter = {
  parameterPath: "input",
  mapper: RecoveryPlanUnplannedFailoverInputMapper,
};

export const instanceType: OperationQueryParameter = {
  parameterPath: ["options", "instanceType"],
  mapper: {
    serializedName: "instanceType",
    type: {
      name: "String",
    },
  },
};

export const vaultSettingName: OperationURLParameter = {
  parameterPath: "vaultSettingName",
  mapper: {
    serializedName: "vaultSettingName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const input16: OperationParameter = {
  parameterPath: "input",
  mapper: VaultSettingCreationInputMapper,
};
