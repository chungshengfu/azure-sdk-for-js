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
  BareMetalMachine as BareMetalMachineMapper,
  BareMetalMachinePatchParameters as BareMetalMachinePatchParametersMapper,
  BareMetalMachineCordonParameters as BareMetalMachineCordonParametersMapper,
  BareMetalMachinePowerOffParameters as BareMetalMachinePowerOffParametersMapper,
  BareMetalMachineReplaceParameters as BareMetalMachineReplaceParametersMapper,
  BareMetalMachineRunCommandParameters as BareMetalMachineRunCommandParametersMapper,
  BareMetalMachineRunDataExtractsParameters as BareMetalMachineRunDataExtractsParametersMapper,
  BareMetalMachineRunReadCommandsParameters as BareMetalMachineRunReadCommandsParametersMapper,
  BareMetalMachineValidateHardwareParameters as BareMetalMachineValidateHardwareParametersMapper,
  CloudServicesNetwork as CloudServicesNetworkMapper,
  CloudServicesNetworkPatchParameters as CloudServicesNetworkPatchParametersMapper,
  ClusterManager as ClusterManagerMapper,
  ClusterManagerPatchParameters as ClusterManagerPatchParametersMapper,
  Cluster as ClusterMapper,
  ClusterPatchParameters as ClusterPatchParametersMapper,
  ClusterDeployParameters as ClusterDeployParametersMapper,
  ClusterUpdateVersionParameters as ClusterUpdateVersionParametersMapper,
  BareMetalMachineKeySet as BareMetalMachineKeySetMapper,
  BareMetalMachineKeySetPatchParameters as BareMetalMachineKeySetPatchParametersMapper,
  BmcKeySet as BmcKeySetMapper,
  BmcKeySetPatchParameters as BmcKeySetPatchParametersMapper,
  ClusterMetricsConfiguration as ClusterMetricsConfigurationMapper,
  ClusterMetricsConfigurationPatchParameters as ClusterMetricsConfigurationPatchParametersMapper,
  DefaultCniNetwork as DefaultCniNetworkMapper,
  DefaultCniNetworkPatchParameters as DefaultCniNetworkPatchParametersMapper,
  HybridAksCluster as HybridAksClusterMapper,
  HybridAksClusterPatchParameters as HybridAksClusterPatchParametersMapper,
  HybridAksClusterRestartNodeParameters as HybridAksClusterRestartNodeParametersMapper,
  L2Network as L2NetworkMapper,
  L2NetworkPatchParameters as L2NetworkPatchParametersMapper,
  L3Network as L3NetworkMapper,
  L3NetworkPatchParameters as L3NetworkPatchParametersMapper,
  Rack as RackMapper,
  RackPatchParameters as RackPatchParametersMapper,
  StorageAppliance as StorageApplianceMapper,
  StorageAppliancePatchParameters as StorageAppliancePatchParametersMapper,
  StorageApplianceEnableRemoteVendorManagementParameters as StorageApplianceEnableRemoteVendorManagementParametersMapper,
  StorageApplianceRunReadCommandsParameters as StorageApplianceRunReadCommandsParametersMapper,
  StorageApplianceValidateHardwareParameters as StorageApplianceValidateHardwareParametersMapper,
  TrunkedNetwork as TrunkedNetworkMapper,
  TrunkedNetworkPatchParameters as TrunkedNetworkPatchParametersMapper,
  VirtualMachine as VirtualMachineMapper,
  VirtualMachinePatchParameters as VirtualMachinePatchParametersMapper,
  VirtualMachineVolumeParameters as VirtualMachineVolumeParametersMapper,
  VirtualMachinePowerOffParameters as VirtualMachinePowerOffParametersMapper,
  Console as ConsoleMapper,
  ConsolePatchParameters as ConsolePatchParametersMapper,
  Volume as VolumeMapper,
  VolumePatchParameters as VolumePatchParametersMapper
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
    defaultValue: "2022-12-12-preview",
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

export const bareMetalMachineName: OperationURLParameter = {
  parameterPath: "bareMetalMachineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9]{0,62}[a-zA-Z0-9])$")
    },
    serializedName: "bareMetalMachineName",
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

export const bareMetalMachineParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineParameters"],
  mapper: BareMetalMachineMapper
};

export const bareMetalMachineUpdateParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineUpdateParameters"],
  mapper: BareMetalMachinePatchParametersMapper
};

export const bareMetalMachineCordonParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineCordonParameters"],
  mapper: BareMetalMachineCordonParametersMapper
};

export const bareMetalMachinePowerOffParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachinePowerOffParameters"],
  mapper: BareMetalMachinePowerOffParametersMapper
};

export const bareMetalMachineReplaceParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineReplaceParameters"],
  mapper: BareMetalMachineReplaceParametersMapper
};

export const bareMetalMachineRunCommandParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineRunCommandParameters"],
  mapper: BareMetalMachineRunCommandParametersMapper
};

export const bareMetalMachineRunDataExtractsParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineRunDataExtractsParameters"],
  mapper: BareMetalMachineRunDataExtractsParametersMapper
};

export const bareMetalMachineRunReadCommandsParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineRunReadCommandsParameters"],
  mapper: BareMetalMachineRunReadCommandsParametersMapper
};

export const bareMetalMachineValidateHardwareParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineValidateHardwareParameters"],
  mapper: BareMetalMachineValidateHardwareParametersMapper
};

export const cloudServicesNetworkName: OperationURLParameter = {
  parameterPath: "cloudServicesNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "cloudServicesNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cloudServicesNetworkParameters: OperationParameter = {
  parameterPath: ["options", "cloudServicesNetworkParameters"],
  mapper: CloudServicesNetworkMapper
};

export const cloudServicesNetworkUpdateParameters: OperationParameter = {
  parameterPath: ["options", "cloudServicesNetworkUpdateParameters"],
  mapper: CloudServicesNetworkPatchParametersMapper
};

export const clusterManagerName: OperationURLParameter = {
  parameterPath: "clusterManagerName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "clusterManagerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const clusterManagerParameters: OperationParameter = {
  parameterPath: ["options", "clusterManagerParameters"],
  mapper: ClusterManagerMapper
};

export const clusterManagerUpdateParameters: OperationParameter = {
  parameterPath: ["options", "clusterManagerUpdateParameters"],
  mapper: ClusterManagerPatchParametersMapper
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const clusterParameters: OperationParameter = {
  parameterPath: ["options", "clusterParameters"],
  mapper: ClusterMapper
};

export const clusterUpdateParameters: OperationParameter = {
  parameterPath: ["options", "clusterUpdateParameters"],
  mapper: ClusterPatchParametersMapper
};

export const clusterDeployParameters: OperationParameter = {
  parameterPath: ["options", "clusterDeployParameters"],
  mapper: ClusterDeployParametersMapper
};

export const clusterUpdateVersionParameters: OperationParameter = {
  parameterPath: ["options", "clusterUpdateVersionParameters"],
  mapper: ClusterUpdateVersionParametersMapper
};

export const bareMetalMachineKeySetName: OperationURLParameter = {
  parameterPath: "bareMetalMachineKeySetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "bareMetalMachineKeySetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const bareMetalMachineKeySetParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineKeySetParameters"],
  mapper: BareMetalMachineKeySetMapper
};

export const bareMetalMachineKeySetUpdateParameters: OperationParameter = {
  parameterPath: ["options", "bareMetalMachineKeySetUpdateParameters"],
  mapper: BareMetalMachineKeySetPatchParametersMapper
};

export const bmcKeySetName: OperationURLParameter = {
  parameterPath: "bmcKeySetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "bmcKeySetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const bmcKeySetParameters: OperationParameter = {
  parameterPath: ["options", "bmcKeySetParameters"],
  mapper: BmcKeySetMapper
};

export const bmcKeySetUpdateParameters: OperationParameter = {
  parameterPath: ["options", "bmcKeySetUpdateParameters"],
  mapper: BmcKeySetPatchParametersMapper
};

export const metricsConfigurationName: OperationURLParameter = {
  parameterPath: "metricsConfigurationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^default$")
    },
    serializedName: "metricsConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const metricsConfigurationParameters: OperationParameter = {
  parameterPath: ["options", "metricsConfigurationParameters"],
  mapper: ClusterMetricsConfigurationMapper
};

export const metricsConfigurationUpdateParameters: OperationParameter = {
  parameterPath: ["options", "metricsConfigurationUpdateParameters"],
  mapper: ClusterMetricsConfigurationPatchParametersMapper
};

export const defaultCniNetworkName: OperationURLParameter = {
  parameterPath: "defaultCniNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "defaultCniNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const defaultCniNetworkParameters: OperationParameter = {
  parameterPath: ["options", "defaultCniNetworkParameters"],
  mapper: DefaultCniNetworkMapper
};

export const defaultCniNetworkUpdateParameters: OperationParameter = {
  parameterPath: ["options", "defaultCniNetworkUpdateParameters"],
  mapper: DefaultCniNetworkPatchParametersMapper
};

export const hybridAksClusterName: OperationURLParameter = {
  parameterPath: "hybridAksClusterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9])$")
    },
    serializedName: "hybridAksClusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const hybridAksClusterParameters: OperationParameter = {
  parameterPath: ["options", "hybridAksClusterParameters"],
  mapper: HybridAksClusterMapper
};

export const hybridAksClusterUpdateParameters: OperationParameter = {
  parameterPath: ["options", "hybridAksClusterUpdateParameters"],
  mapper: HybridAksClusterPatchParametersMapper
};

export const hybridAksClusterRestartNodeParameters: OperationParameter = {
  parameterPath: ["options", "hybridAksClusterRestartNodeParameters"],
  mapper: HybridAksClusterRestartNodeParametersMapper
};

export const l2NetworkName: OperationURLParameter = {
  parameterPath: "l2NetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "l2NetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const l2NetworkParameters: OperationParameter = {
  parameterPath: ["options", "l2NetworkParameters"],
  mapper: L2NetworkMapper
};

export const l2NetworkUpdateParameters: OperationParameter = {
  parameterPath: ["options", "l2NetworkUpdateParameters"],
  mapper: L2NetworkPatchParametersMapper
};

export const l3NetworkName: OperationURLParameter = {
  parameterPath: "l3NetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "l3NetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const l3NetworkParameters: OperationParameter = {
  parameterPath: ["options", "l3NetworkParameters"],
  mapper: L3NetworkMapper
};

export const l3NetworkUpdateParameters: OperationParameter = {
  parameterPath: ["options", "l3NetworkUpdateParameters"],
  mapper: L3NetworkPatchParametersMapper
};

export const rackSkuName: OperationURLParameter = {
  parameterPath: "rackSkuName",
  mapper: {
    serializedName: "rackSkuName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const rackName: OperationURLParameter = {
  parameterPath: "rackName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "rackName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const rackParameters: OperationParameter = {
  parameterPath: ["options", "rackParameters"],
  mapper: RackMapper
};

export const rackUpdateParameters: OperationParameter = {
  parameterPath: ["options", "rackUpdateParameters"],
  mapper: RackPatchParametersMapper
};

export const storageApplianceName: OperationURLParameter = {
  parameterPath: "storageApplianceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "storageApplianceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const storageApplianceParameters: OperationParameter = {
  parameterPath: ["options", "storageApplianceParameters"],
  mapper: StorageApplianceMapper
};

export const storageApplianceUpdateParameters: OperationParameter = {
  parameterPath: ["options", "storageApplianceUpdateParameters"],
  mapper: StorageAppliancePatchParametersMapper
};

export const storageApplianceEnableRemoteVendorManagementParameters: OperationParameter = {
  parameterPath: [
    "options",
    "storageApplianceEnableRemoteVendorManagementParameters"
  ],
  mapper: StorageApplianceEnableRemoteVendorManagementParametersMapper
};

export const storageApplianceRunReadCommandsParameters: OperationParameter = {
  parameterPath: ["options", "storageApplianceRunReadCommandsParameters"],
  mapper: StorageApplianceRunReadCommandsParametersMapper
};

export const storageApplianceValidateHardwareParameters: OperationParameter = {
  parameterPath: ["options", "storageApplianceValidateHardwareParameters"],
  mapper: StorageApplianceValidateHardwareParametersMapper
};

export const trunkedNetworkName: OperationURLParameter = {
  parameterPath: "trunkedNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-_]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "trunkedNetworkName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const trunkedNetworkParameters: OperationParameter = {
  parameterPath: ["options", "trunkedNetworkParameters"],
  mapper: TrunkedNetworkMapper
};

export const trunkedNetworkUpdateParameters: OperationParameter = {
  parameterPath: ["options", "trunkedNetworkUpdateParameters"],
  mapper: TrunkedNetworkPatchParametersMapper
};

export const virtualMachineName: OperationURLParameter = {
  parameterPath: "virtualMachineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9]{0,62}[a-zA-Z0-9])$")
    },
    serializedName: "virtualMachineName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const virtualMachineParameters: OperationParameter = {
  parameterPath: ["options", "virtualMachineParameters"],
  mapper: VirtualMachineMapper
};

export const virtualMachineUpdateParameters: OperationParameter = {
  parameterPath: ["options", "virtualMachineUpdateParameters"],
  mapper: VirtualMachinePatchParametersMapper
};

export const virtualMachineAttachVolumeParameters: OperationParameter = {
  parameterPath: ["options", "virtualMachineAttachVolumeParameters"],
  mapper: VirtualMachineVolumeParametersMapper
};

export const virtualMachineDetachVolumeParameters: OperationParameter = {
  parameterPath: ["options", "virtualMachineDetachVolumeParameters"],
  mapper: VirtualMachineVolumeParametersMapper
};

export const virtualMachinePowerOffParameters: OperationParameter = {
  parameterPath: ["options", "virtualMachinePowerOffParameters"],
  mapper: VirtualMachinePowerOffParametersMapper
};

export const consoleName: OperationURLParameter = {
  parameterPath: "consoleName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^default$")
    },
    serializedName: "consoleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const consoleParameters: OperationParameter = {
  parameterPath: ["options", "consoleParameters"],
  mapper: ConsoleMapper
};

export const consoleUpdateParameters: OperationParameter = {
  parameterPath: ["options", "consoleUpdateParameters"],
  mapper: ConsolePatchParametersMapper
};

export const volumeName: OperationURLParameter = {
  parameterPath: "volumeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^([a-zA-Z0-9][a-zA-Z0-9]{0,28}[a-zA-Z0-9])$")
    },
    serializedName: "volumeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const volumeParameters: OperationParameter = {
  parameterPath: ["options", "volumeParameters"],
  mapper: VolumeMapper
};

export const volumeUpdateParameters: OperationParameter = {
  parameterPath: ["options", "volumeUpdateParameters"],
  mapper: VolumePatchParametersMapper
};
