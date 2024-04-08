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
  ArcSetting as ArcSettingMapper,
  ArcSettingsPatch as ArcSettingsPatchMapper,
  Cluster as ClusterMapper,
  ClusterPatch as ClusterPatchMapper,
  UploadCertificateRequest as UploadCertificateRequestMapper,
  SoftwareAssuranceChangeRequest as SoftwareAssuranceChangeRequestMapper,
  DeploymentSetting as DeploymentSettingMapper,
  EdgeDevice as EdgeDeviceMapper,
  ValidateRequest as ValidateRequestMapper,
  Extension as ExtensionMapper,
  ExtensionPatch as ExtensionPatchMapper,
  ExtensionUpgradeParameters as ExtensionUpgradeParametersMapper,
  GalleryImages as GalleryImagesMapper,
  GalleryImagesUpdateRequest as GalleryImagesUpdateRequestMapper,
  LogicalNetworks as LogicalNetworksMapper,
  LogicalNetworksUpdateRequest as LogicalNetworksUpdateRequestMapper,
  MarketplaceGalleryImages as MarketplaceGalleryImagesMapper,
  MarketplaceGalleryImagesUpdateRequest as MarketplaceGalleryImagesUpdateRequestMapper,
  NetworkInterfaces as NetworkInterfacesMapper,
  NetworkInterfacesUpdateRequest as NetworkInterfacesUpdateRequestMapper,
  SecuritySetting as SecuritySettingMapper,
  StorageContainers as StorageContainersMapper,
  StorageContainersUpdateRequest as StorageContainersUpdateRequestMapper,
  UpdateRun as UpdateRunMapper,
  UpdateSummaries as UpdateSummariesMapper,
  Update as UpdateMapper,
  VirtualHardDisks as VirtualHardDisksMapper,
  VirtualHardDisksUpdateRequest as VirtualHardDisksUpdateRequestMapper,
  VirtualMachineInstance as VirtualMachineInstanceMapper,
  VirtualMachineInstanceUpdateRequest as VirtualMachineInstanceUpdateRequestMapper,
  GuestAgent as GuestAgentMapper,
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const arcSettingName: OperationURLParameter = {
  parameterPath: "arcSettingName",
  mapper: {
    serializedName: "arcSettingName",
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

export const arcSetting: OperationParameter = {
  parameterPath: "arcSetting",
  mapper: ArcSettingMapper,
};

export const arcSetting1: OperationParameter = {
  parameterPath: "arcSetting",
  mapper: ArcSettingsPatchMapper,
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

export const cluster: OperationParameter = {
  parameterPath: "cluster",
  mapper: ClusterMapper,
};

export const cluster1: OperationParameter = {
  parameterPath: "cluster",
  mapper: ClusterPatchMapper,
};

export const uploadCertificateRequest: OperationParameter = {
  parameterPath: "uploadCertificateRequest",
  mapper: UploadCertificateRequestMapper,
};

export const softwareAssuranceChangeRequest: OperationParameter = {
  parameterPath: "softwareAssuranceChangeRequest",
  mapper: SoftwareAssuranceChangeRequestMapper,
};

export const deploymentSettingsName: OperationURLParameter = {
  parameterPath: "deploymentSettingsName",
  mapper: {
    defaultValue: "default",
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,24}$"),
    },
    serializedName: "deploymentSettingsName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource: OperationParameter = {
  parameterPath: "resource",
  mapper: DeploymentSettingMapper,
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

export const edgeDeviceName: OperationURLParameter = {
  parameterPath: "edgeDeviceName",
  mapper: {
    defaultValue: "default",
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,24}$"),
    },
    serializedName: "edgeDeviceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: EdgeDeviceMapper,
};

export const validateRequest: OperationParameter = {
  parameterPath: "validateRequest",
  mapper: ValidateRequestMapper,
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

export const extension: OperationParameter = {
  parameterPath: "extension",
  mapper: ExtensionMapper,
};

export const extension1: OperationParameter = {
  parameterPath: "extension",
  mapper: ExtensionPatchMapper,
};

export const extensionUpgradeParameters: OperationParameter = {
  parameterPath: "extensionUpgradeParameters",
  mapper: ExtensionUpgradeParametersMapper,
};

export const galleryImageName: OperationURLParameter = {
  parameterPath: "galleryImageName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[a-zA-Z0-9]$",
      ),
      MaxLength: 80,
      MinLength: 1,
    },
    serializedName: "galleryImageName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const galleryImages: OperationParameter = {
  parameterPath: "galleryImages",
  mapper: GalleryImagesMapper,
};

export const galleryImages1: OperationParameter = {
  parameterPath: "galleryImages",
  mapper: GalleryImagesUpdateRequestMapper,
};

export const logicalNetworkName: OperationURLParameter = {
  parameterPath: "logicalNetworkName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,62}[_a-zA-Z0-9]$",
      ),
      MaxLength: 64,
      MinLength: 2,
    },
    serializedName: "logicalNetworkName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const logicalNetworks: OperationParameter = {
  parameterPath: "logicalNetworks",
  mapper: LogicalNetworksMapper,
};

export const logicalNetworks1: OperationParameter = {
  parameterPath: "logicalNetworks",
  mapper: LogicalNetworksUpdateRequestMapper,
};

export const marketplaceGalleryImageName: OperationURLParameter = {
  parameterPath: "marketplaceGalleryImageName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[a-zA-Z0-9]$",
      ),
      MaxLength: 80,
      MinLength: 1,
    },
    serializedName: "marketplaceGalleryImageName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const marketplaceGalleryImages: OperationParameter = {
  parameterPath: "marketplaceGalleryImages",
  mapper: MarketplaceGalleryImagesMapper,
};

export const marketplaceGalleryImages1: OperationParameter = {
  parameterPath: "marketplaceGalleryImages",
  mapper: MarketplaceGalleryImagesUpdateRequestMapper,
};

export const networkInterfaceName: OperationURLParameter = {
  parameterPath: "networkInterfaceName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$",
      ),
      MaxLength: 80,
      MinLength: 1,
    },
    serializedName: "networkInterfaceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const networkInterfaces: OperationParameter = {
  parameterPath: "networkInterfaces",
  mapper: NetworkInterfacesMapper,
};

export const networkInterfaces1: OperationParameter = {
  parameterPath: "networkInterfaces",
  mapper: NetworkInterfacesUpdateRequestMapper,
};

export const publisherName: OperationURLParameter = {
  parameterPath: "publisherName",
  mapper: {
    serializedName: "publisherName",
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

export const offerName: OperationURLParameter = {
  parameterPath: "offerName",
  mapper: {
    serializedName: "offerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const securitySettingsName: OperationURLParameter = {
  parameterPath: "securitySettingsName",
  mapper: {
    defaultValue: "default",
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9-]{3,24}$"),
    },
    serializedName: "securitySettingsName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: SecuritySettingMapper,
};

export const skuName: OperationURLParameter = {
  parameterPath: "skuName",
  mapper: {
    serializedName: "skuName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const storageContainerName: OperationURLParameter = {
  parameterPath: "storageContainerName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,78}[_a-zA-Z0-9]$",
      ),
      MaxLength: 80,
      MinLength: 1,
    },
    serializedName: "storageContainerName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const storageContainers: OperationParameter = {
  parameterPath: "storageContainers",
  mapper: StorageContainersMapper,
};

export const storageContainers1: OperationParameter = {
  parameterPath: "storageContainers",
  mapper: StorageContainersUpdateRequestMapper,
};

export const updateName: OperationURLParameter = {
  parameterPath: "updateName",
  mapper: {
    serializedName: "updateName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const updateRunName: OperationURLParameter = {
  parameterPath: "updateRunName",
  mapper: {
    serializedName: "updateRunName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const updateRunsProperties: OperationParameter = {
  parameterPath: "updateRunsProperties",
  mapper: UpdateRunMapper,
};

export const updateLocationProperties: OperationParameter = {
  parameterPath: "updateLocationProperties",
  mapper: UpdateSummariesMapper,
};

export const updateProperties: OperationParameter = {
  parameterPath: "updateProperties",
  mapper: UpdateMapper,
};

export const virtualHardDiskName: OperationURLParameter = {
  parameterPath: "virtualHardDiskName",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-zA-Z0-9]$|^[a-zA-Z0-9][-._a-zA-Z0-9]{0,62}[a-zA-Z0-9]$",
      ),
      MaxLength: 80,
      MinLength: 1,
    },
    serializedName: "virtualHardDiskName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const virtualHardDisks: OperationParameter = {
  parameterPath: "virtualHardDisks",
  mapper: VirtualHardDisksMapper,
};

export const virtualHardDisks1: OperationParameter = {
  parameterPath: "virtualHardDisks",
  mapper: VirtualHardDisksUpdateRequestMapper,
};

export const virtualMachineInstance: OperationParameter = {
  parameterPath: "virtualMachineInstance",
  mapper: VirtualMachineInstanceMapper,
};

export const virtualMachineInstance1: OperationParameter = {
  parameterPath: "virtualMachineInstance",
  mapper: VirtualMachineInstanceUpdateRequestMapper,
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: GuestAgentMapper,
};
