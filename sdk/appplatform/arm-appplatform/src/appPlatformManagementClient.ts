/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ServicesImpl,
  ApmsImpl,
  EurekaServersImpl,
  ConfigServersImpl,
  ConfigurationServicesImpl,
  ServiceRegistriesImpl,
  ApplicationLiveViewsImpl,
  DevToolPortalsImpl,
  ContainerRegistriesImpl,
  BuildServiceOperationsImpl,
  BuildpackBindingImpl,
  BuildServiceBuilderImpl,
  BuildServiceAgentPoolImpl,
  MonitoringSettingsImpl,
  AppsImpl,
  BindingsImpl,
  StoragesImpl,
  CertificatesImpl,
  CustomDomainsImpl,
  DeploymentsImpl,
  OperationsImpl,
  RuntimeVersionsImpl,
  SkusImpl,
  GatewaysImpl,
  GatewayRouteConfigsImpl,
  GatewayCustomDomainsImpl,
  ApiPortalsImpl,
  ApiPortalCustomDomainsImpl,
  ApplicationAcceleratorsImpl,
  CustomizedAcceleratorsImpl,
  PredefinedAcceleratorsImpl,
  JobsImpl,
  JobImpl,
  JobExecutionOperationsImpl,
  JobExecutionsImpl,
} from "./operations";
import {
  Services,
  Apms,
  EurekaServers,
  ConfigServers,
  ConfigurationServices,
  ServiceRegistries,
  ApplicationLiveViews,
  DevToolPortals,
  ContainerRegistries,
  BuildServiceOperations,
  BuildpackBinding,
  BuildServiceBuilder,
  BuildServiceAgentPool,
  MonitoringSettings,
  Apps,
  Bindings,
  Storages,
  Certificates,
  CustomDomains,
  Deployments,
  Operations,
  RuntimeVersions,
  Skus,
  Gateways,
  GatewayRouteConfigs,
  GatewayCustomDomains,
  ApiPortals,
  ApiPortalCustomDomains,
  ApplicationAccelerators,
  CustomizedAccelerators,
  PredefinedAccelerators,
  Jobs,
  Job,
  JobExecutionOperations,
  JobExecutions,
} from "./operationsInterfaces";
import { AppPlatformManagementClientOptionalParams } from "./models";

export class AppPlatformManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId?: string;

  /**
   * Initializes a new instance of the AppPlatformManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AppPlatformManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: AppPlatformManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?:
      | AppPlatformManagementClientOptionalParams
      | string,
    options?: AppPlatformManagementClientOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AppPlatformManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-appplatform/3.1.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2024-05-01-preview";
    this.services = new ServicesImpl(this);
    this.apms = new ApmsImpl(this);
    this.eurekaServers = new EurekaServersImpl(this);
    this.configServers = new ConfigServersImpl(this);
    this.configurationServices = new ConfigurationServicesImpl(this);
    this.serviceRegistries = new ServiceRegistriesImpl(this);
    this.applicationLiveViews = new ApplicationLiveViewsImpl(this);
    this.devToolPortals = new DevToolPortalsImpl(this);
    this.containerRegistries = new ContainerRegistriesImpl(this);
    this.buildServiceOperations = new BuildServiceOperationsImpl(this);
    this.buildpackBinding = new BuildpackBindingImpl(this);
    this.buildServiceBuilder = new BuildServiceBuilderImpl(this);
    this.buildServiceAgentPool = new BuildServiceAgentPoolImpl(this);
    this.monitoringSettings = new MonitoringSettingsImpl(this);
    this.apps = new AppsImpl(this);
    this.bindings = new BindingsImpl(this);
    this.storages = new StoragesImpl(this);
    this.certificates = new CertificatesImpl(this);
    this.customDomains = new CustomDomainsImpl(this);
    this.deployments = new DeploymentsImpl(this);
    this.operations = new OperationsImpl(this);
    this.runtimeVersions = new RuntimeVersionsImpl(this);
    this.skus = new SkusImpl(this);
    this.gateways = new GatewaysImpl(this);
    this.gatewayRouteConfigs = new GatewayRouteConfigsImpl(this);
    this.gatewayCustomDomains = new GatewayCustomDomainsImpl(this);
    this.apiPortals = new ApiPortalsImpl(this);
    this.apiPortalCustomDomains = new ApiPortalCustomDomainsImpl(this);
    this.applicationAccelerators = new ApplicationAcceleratorsImpl(this);
    this.customizedAccelerators = new CustomizedAcceleratorsImpl(this);
    this.predefinedAccelerators = new PredefinedAcceleratorsImpl(this);
    this.jobs = new JobsImpl(this);
    this.job = new JobImpl(this);
    this.jobExecutionOperations = new JobExecutionOperationsImpl(this);
    this.jobExecutions = new JobExecutionsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  services: Services;
  apms: Apms;
  eurekaServers: EurekaServers;
  configServers: ConfigServers;
  configurationServices: ConfigurationServices;
  serviceRegistries: ServiceRegistries;
  applicationLiveViews: ApplicationLiveViews;
  devToolPortals: DevToolPortals;
  containerRegistries: ContainerRegistries;
  buildServiceOperations: BuildServiceOperations;
  buildpackBinding: BuildpackBinding;
  buildServiceBuilder: BuildServiceBuilder;
  buildServiceAgentPool: BuildServiceAgentPool;
  monitoringSettings: MonitoringSettings;
  apps: Apps;
  bindings: Bindings;
  storages: Storages;
  certificates: Certificates;
  customDomains: CustomDomains;
  deployments: Deployments;
  operations: Operations;
  runtimeVersions: RuntimeVersions;
  skus: Skus;
  gateways: Gateways;
  gatewayRouteConfigs: GatewayRouteConfigs;
  gatewayCustomDomains: GatewayCustomDomains;
  apiPortals: ApiPortals;
  apiPortalCustomDomains: ApiPortalCustomDomains;
  applicationAccelerators: ApplicationAccelerators;
  customizedAccelerators: CustomizedAccelerators;
  predefinedAccelerators: PredefinedAccelerators;
  jobs: Jobs;
  job: Job;
  jobExecutionOperations: JobExecutionOperations;
  jobExecutions: JobExecutions;
}
