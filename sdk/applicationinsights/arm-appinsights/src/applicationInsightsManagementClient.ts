/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ComponentsImpl,
  AnnotationsImpl,
  APIKeysImpl,
  ExportConfigurationsImpl,
  ComponentCurrentBillingFeaturesImpl,
  ComponentQuotaStatusImpl,
  ComponentFeatureCapabilitiesImpl,
  ComponentAvailableFeaturesImpl,
  ProactiveDetectionConfigurationsImpl,
  WorkItemConfigurationsImpl,
  FavoritesImpl,
  WebTestLocationsImpl,
  WebTestsImpl,
  AnalyticsItemsImpl,
  OperationsImpl,
  WorkbookTemplatesImpl,
  WorkbooksImpl,
  LiveTokenImpl,
  ComponentLinkedStorageAccountsOperationsImpl,
  DeletedWorkbooksImpl,
} from "./operations";
import {
  Components,
  Annotations,
  APIKeys,
  ExportConfigurations,
  ComponentCurrentBillingFeatures,
  ComponentQuotaStatus,
  ComponentFeatureCapabilities,
  ComponentAvailableFeatures,
  ProactiveDetectionConfigurations,
  WorkItemConfigurations,
  Favorites,
  WebTestLocations,
  WebTests,
  AnalyticsItems,
  Operations,
  WorkbookTemplates,
  Workbooks,
  LiveToken,
  ComponentLinkedStorageAccountsOperations,
  DeletedWorkbooks,
} from "./operationsInterfaces";
import { ApplicationInsightsManagementClientOptionalParams } from "./models";

export class ApplicationInsightsManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId?: string;

  /**
   * Initializes a new instance of the ApplicationInsightsManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ApplicationInsightsManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: ApplicationInsightsManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?:
      | ApplicationInsightsManagementClientOptionalParams
      | string,
    options?: ApplicationInsightsManagementClientOptionalParams,
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
    const defaults: ApplicationInsightsManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-appinsights/5.0.0-beta.8`;
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
    this.components = new ComponentsImpl(this);
    this.annotations = new AnnotationsImpl(this);
    this.aPIKeys = new APIKeysImpl(this);
    this.exportConfigurations = new ExportConfigurationsImpl(this);
    this.componentCurrentBillingFeatures =
      new ComponentCurrentBillingFeaturesImpl(this);
    this.componentQuotaStatus = new ComponentQuotaStatusImpl(this);
    this.componentFeatureCapabilities = new ComponentFeatureCapabilitiesImpl(
      this,
    );
    this.componentAvailableFeatures = new ComponentAvailableFeaturesImpl(this);
    this.proactiveDetectionConfigurations =
      new ProactiveDetectionConfigurationsImpl(this);
    this.workItemConfigurations = new WorkItemConfigurationsImpl(this);
    this.favorites = new FavoritesImpl(this);
    this.webTestLocations = new WebTestLocationsImpl(this);
    this.webTests = new WebTestsImpl(this);
    this.analyticsItems = new AnalyticsItemsImpl(this);
    this.operations = new OperationsImpl(this);
    this.workbookTemplates = new WorkbookTemplatesImpl(this);
    this.workbooks = new WorkbooksImpl(this);
    this.liveToken = new LiveTokenImpl(this);
    this.componentLinkedStorageAccountsOperations =
      new ComponentLinkedStorageAccountsOperationsImpl(this);
    this.deletedWorkbooks = new DeletedWorkbooksImpl(this);
  }

  components: Components;
  annotations: Annotations;
  aPIKeys: APIKeys;
  exportConfigurations: ExportConfigurations;
  componentCurrentBillingFeatures: ComponentCurrentBillingFeatures;
  componentQuotaStatus: ComponentQuotaStatus;
  componentFeatureCapabilities: ComponentFeatureCapabilities;
  componentAvailableFeatures: ComponentAvailableFeatures;
  proactiveDetectionConfigurations: ProactiveDetectionConfigurations;
  workItemConfigurations: WorkItemConfigurations;
  favorites: Favorites;
  webTestLocations: WebTestLocations;
  webTests: WebTests;
  analyticsItems: AnalyticsItems;
  operations: Operations;
  workbookTemplates: WorkbookTemplates;
  workbooks: Workbooks;
  liveToken: LiveToken;
  componentLinkedStorageAccountsOperations: ComponentLinkedStorageAccountsOperations;
  deletedWorkbooks: DeletedWorkbooks;
}
