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
  ServiceResource as ServiceResourceMapper,
  RegenerateTestKeyRequestPayload as RegenerateTestKeyRequestPayloadMapper,
  ApmReference as ApmReferenceMapper,
  NameAvailabilityParameters as NameAvailabilityParametersMapper,
  ApmResource as ApmResourceMapper,
  EurekaServerResource as EurekaServerResourceMapper,
  ConfigServerResource as ConfigServerResourceMapper,
  ConfigServerSettings as ConfigServerSettingsMapper,
  ConfigurationServiceResource as ConfigurationServiceResourceMapper,
  ConfigurationServiceSettings as ConfigurationServiceSettingsMapper,
  ApplicationLiveViewResource as ApplicationLiveViewResourceMapper,
  DevToolPortalResource as DevToolPortalResourceMapper,
  ContainerRegistryResource as ContainerRegistryResourceMapper,
  ContainerRegistryProperties as ContainerRegistryPropertiesMapper,
  BuildService as BuildServiceMapper,
  Build as BuildMapper,
  BuildpackBindingResource as BuildpackBindingResourceMapper,
  BuilderResource as BuilderResourceMapper,
  BuildServiceAgentPoolResource as BuildServiceAgentPoolResourceMapper,
  MonitoringSettingResource as MonitoringSettingResourceMapper,
  AppResource as AppResourceMapper,
  ActiveDeploymentCollection as ActiveDeploymentCollectionMapper,
  CustomDomainValidatePayload as CustomDomainValidatePayloadMapper,
  BindingResource as BindingResourceMapper,
  StorageResource as StorageResourceMapper,
  CertificateResource as CertificateResourceMapper,
  CustomDomainResource as CustomDomainResourceMapper,
  DeploymentResource as DeploymentResourceMapper,
  RemoteDebuggingPayload as RemoteDebuggingPayloadMapper,
  DiagnosticParameters as DiagnosticParametersMapper,
  GatewayResource as GatewayResourceMapper,
  SkuObject as SkuObjectMapper,
  GatewayRouteConfigResource as GatewayRouteConfigResourceMapper,
  GatewayCustomDomainResource as GatewayCustomDomainResourceMapper,
  ApiPortalResource as ApiPortalResourceMapper,
  ApiPortalCustomDomainResource as ApiPortalCustomDomainResourceMapper,
  ApplicationAcceleratorResource as ApplicationAcceleratorResourceMapper,
  CustomizedAcceleratorResource as CustomizedAcceleratorResourceMapper,
  CustomizedAcceleratorProperties as CustomizedAcceleratorPropertiesMapper,
  JobResource as JobResourceMapper,
  JobExecutionProperties as JobExecutionPropertiesMapper,
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
    defaultValue: "2024-01-01-preview",
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
    serializedName: "resourceGroupName",
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
      Pattern: new RegExp("^[a-z][a-z0-9-]*[a-z0-9]$"),
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
  mapper: ServiceResourceMapper,
};

export const regenerateTestKeyRequest: OperationParameter = {
  parameterPath: "regenerateTestKeyRequest",
  mapper: RegenerateTestKeyRequestPayloadMapper,
};

export const apm: OperationParameter = {
  parameterPath: "apm",
  mapper: ApmReferenceMapper,
};

export const availabilityParameters: OperationParameter = {
  parameterPath: "availabilityParameters",
  mapper: NameAvailabilityParametersMapper,
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

export const apmName: OperationURLParameter = {
  parameterPath: "apmName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9-]*[a-z0-9]$"),
    },
    serializedName: "apmName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apmResource: OperationParameter = {
  parameterPath: "apmResource",
  mapper: ApmResourceMapper,
};

export const eurekaServerResource: OperationParameter = {
  parameterPath: "eurekaServerResource",
  mapper: EurekaServerResourceMapper,
};

export const configServerResource: OperationParameter = {
  parameterPath: "configServerResource",
  mapper: ConfigServerResourceMapper,
};

export const configServerSettings: OperationParameter = {
  parameterPath: "configServerSettings",
  mapper: ConfigServerSettingsMapper,
};

export const configurationServiceName: OperationURLParameter = {
  parameterPath: "configurationServiceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9]*$"),
    },
    serializedName: "configurationServiceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const configurationServiceResource: OperationParameter = {
  parameterPath: "configurationServiceResource",
  mapper: ConfigurationServiceResourceMapper,
};

export const settings: OperationParameter = {
  parameterPath: "settings",
  mapper: ConfigurationServiceSettingsMapper,
};

export const serviceRegistryName: OperationURLParameter = {
  parameterPath: "serviceRegistryName",
  mapper: {
    serializedName: "serviceRegistryName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const applicationLiveViewName: OperationURLParameter = {
  parameterPath: "applicationLiveViewName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9]*$"),
    },
    serializedName: "applicationLiveViewName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const applicationLiveViewResource: OperationParameter = {
  parameterPath: "applicationLiveViewResource",
  mapper: ApplicationLiveViewResourceMapper,
};

export const devToolPortalName: OperationURLParameter = {
  parameterPath: "devToolPortalName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9]*$"),
    },
    serializedName: "devToolPortalName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const devToolPortalResource: OperationParameter = {
  parameterPath: "devToolPortalResource",
  mapper: DevToolPortalResourceMapper,
};

export const containerRegistryName: OperationURLParameter = {
  parameterPath: "containerRegistryName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9-]*[a-z0-9]$"),
    },
    serializedName: "containerRegistryName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const containerRegistryResource: OperationParameter = {
  parameterPath: "containerRegistryResource",
  mapper: ContainerRegistryResourceMapper,
};

export const containerRegistryProperties: OperationParameter = {
  parameterPath: "containerRegistryProperties",
  mapper: ContainerRegistryPropertiesMapper,
};

export const buildServiceName: OperationURLParameter = {
  parameterPath: "buildServiceName",
  mapper: {
    serializedName: "buildServiceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const buildService: OperationParameter = {
  parameterPath: "buildService",
  mapper: BuildServiceMapper,
};

export const buildName: OperationURLParameter = {
  parameterPath: "buildName",
  mapper: {
    serializedName: "buildName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const build: OperationParameter = {
  parameterPath: "build",
  mapper: BuildMapper,
};

export const buildResultName: OperationURLParameter = {
  parameterPath: "buildResultName",
  mapper: {
    serializedName: "buildResultName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const buildpackName: OperationURLParameter = {
  parameterPath: "buildpackName",
  mapper: {
    serializedName: "buildpackName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const stackName: OperationURLParameter = {
  parameterPath: "stackName",
  mapper: {
    serializedName: "stackName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const builderName: OperationURLParameter = {
  parameterPath: "builderName",
  mapper: {
    serializedName: "builderName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const buildpackBindingName: OperationURLParameter = {
  parameterPath: "buildpackBindingName",
  mapper: {
    serializedName: "buildpackBindingName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const buildpackBinding: OperationParameter = {
  parameterPath: "buildpackBinding",
  mapper: BuildpackBindingResourceMapper,
};

export const builderResource: OperationParameter = {
  parameterPath: "builderResource",
  mapper: BuilderResourceMapper,
};

export const agentPoolName: OperationURLParameter = {
  parameterPath: "agentPoolName",
  mapper: {
    serializedName: "agentPoolName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const agentPoolResource: OperationParameter = {
  parameterPath: "agentPoolResource",
  mapper: BuildServiceAgentPoolResourceMapper,
};

export const monitoringSettingResource: OperationParameter = {
  parameterPath: "monitoringSettingResource",
  mapper: MonitoringSettingResourceMapper,
};

export const appName: OperationURLParameter = {
  parameterPath: "appName",
  mapper: {
    serializedName: "appName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const syncStatus: OperationQueryParameter = {
  parameterPath: ["options", "syncStatus"],
  mapper: {
    serializedName: "syncStatus",
    type: {
      name: "String",
    },
  },
};

export const appResource: OperationParameter = {
  parameterPath: "appResource",
  mapper: AppResourceMapper,
};

export const activeDeploymentCollection: OperationParameter = {
  parameterPath: "activeDeploymentCollection",
  mapper: ActiveDeploymentCollectionMapper,
};

export const validatePayload: OperationParameter = {
  parameterPath: "validatePayload",
  mapper: CustomDomainValidatePayloadMapper,
};

export const bindingName: OperationURLParameter = {
  parameterPath: "bindingName",
  mapper: {
    serializedName: "bindingName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const bindingResource: OperationParameter = {
  parameterPath: "bindingResource",
  mapper: BindingResourceMapper,
};

export const storageName: OperationURLParameter = {
  parameterPath: "storageName",
  mapper: {
    serializedName: "storageName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const storageResource: OperationParameter = {
  parameterPath: "storageResource",
  mapper: StorageResourceMapper,
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const certificateResource: OperationParameter = {
  parameterPath: "certificateResource",
  mapper: CertificateResourceMapper,
};

export const domainName: OperationURLParameter = {
  parameterPath: "domainName",
  mapper: {
    serializedName: "domainName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const domainResource: OperationParameter = {
  parameterPath: "domainResource",
  mapper: CustomDomainResourceMapper,
};

export const deploymentName: OperationURLParameter = {
  parameterPath: "deploymentName",
  mapper: {
    serializedName: "deploymentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const deploymentResource: OperationParameter = {
  parameterPath: "deploymentResource",
  mapper: DeploymentResourceMapper,
};

export const version: OperationQueryParameter = {
  parameterPath: ["options", "version"],
  mapper: {
    serializedName: "version",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
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

export const remoteDebuggingPayload: OperationParameter = {
  parameterPath: ["options", "remoteDebuggingPayload"],
  mapper: RemoteDebuggingPayloadMapper,
};

export const diagnosticParameters: OperationParameter = {
  parameterPath: "diagnosticParameters",
  mapper: DiagnosticParametersMapper,
};

export const gatewayName: OperationURLParameter = {
  parameterPath: "gatewayName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9]*$"),
    },
    serializedName: "gatewayName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const gatewayResource: OperationParameter = {
  parameterPath: "gatewayResource",
  mapper: GatewayResourceMapper,
};

export const gatewayCapacityResource: OperationParameter = {
  parameterPath: "gatewayCapacityResource",
  mapper: SkuObjectMapper,
};

export const routeConfigName: OperationURLParameter = {
  parameterPath: "routeConfigName",
  mapper: {
    serializedName: "routeConfigName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const gatewayRouteConfigResource: OperationParameter = {
  parameterPath: "gatewayRouteConfigResource",
  mapper: GatewayRouteConfigResourceMapper,
};

export const gatewayCustomDomainResource: OperationParameter = {
  parameterPath: "gatewayCustomDomainResource",
  mapper: GatewayCustomDomainResourceMapper,
};

export const apiPortalName: OperationURLParameter = {
  parameterPath: "apiPortalName",
  mapper: {
    serializedName: "apiPortalName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiPortalResource: OperationParameter = {
  parameterPath: "apiPortalResource",
  mapper: ApiPortalResourceMapper,
};

export const apiPortalCustomDomainResource: OperationParameter = {
  parameterPath: "apiPortalCustomDomainResource",
  mapper: ApiPortalCustomDomainResourceMapper,
};

export const applicationAcceleratorName: OperationURLParameter = {
  parameterPath: "applicationAcceleratorName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9-]*[a-z0-9]$"),
    },
    serializedName: "applicationAcceleratorName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const applicationAcceleratorResource: OperationParameter = {
  parameterPath: "applicationAcceleratorResource",
  mapper: ApplicationAcceleratorResourceMapper,
};

export const customizedAcceleratorName: OperationURLParameter = {
  parameterPath: "customizedAcceleratorName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9]([-a-z0-9]*[a-z0-9])$"),
    },
    serializedName: "customizedAcceleratorName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const customizedAcceleratorResource: OperationParameter = {
  parameterPath: "customizedAcceleratorResource",
  mapper: CustomizedAcceleratorResourceMapper,
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: CustomizedAcceleratorPropertiesMapper,
};

export const predefinedAcceleratorName: OperationURLParameter = {
  parameterPath: "predefinedAcceleratorName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9-]*[a-z0-9]$"),
    },
    serializedName: "predefinedAcceleratorName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9-]*[a-z0-9]$"),
    },
    serializedName: "jobName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const jobResource: OperationParameter = {
  parameterPath: "jobResource",
  mapper: JobResourceMapper,
};

export const properties1: OperationParameter = {
  parameterPath: ["options", "properties"],
  mapper: JobExecutionPropertiesMapper,
};

export const jobExecutionName: OperationURLParameter = {
  parameterPath: "jobExecutionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z][a-z0-9-]*[a-z0-9]$"),
    },
    serializedName: "jobExecutionName",
    required: true,
    type: {
      name: "String",
    },
  },
};
