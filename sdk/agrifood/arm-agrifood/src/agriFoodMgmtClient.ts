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
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  DataManagerForAgricultureExtensionsImpl,
  DataManagerForAgricultureSolutionsImpl,
  OperationsImpl,
  CheckNameAvailabilityOperationsImpl,
  DataManagerForAgriculturesImpl,
  OperationResultsOperationsImpl,
  DataConnectorsImpl,
  ExtensionsImpl,
  AzureAgFoodPlatformRpServicePrivateEndpointConnectionsImpl,
  AzureAgFoodPlatformRpServicePrivateLinkResourcesImpl,
  SolutionsImpl
} from "./operations";
import {
  DataManagerForAgricultureExtensions,
  DataManagerForAgricultureSolutions,
  Operations,
  CheckNameAvailabilityOperations,
  DataManagerForAgricultures,
  OperationResultsOperations,
  DataConnectors,
  Extensions,
  AzureAgFoodPlatformRpServicePrivateEndpointConnections,
  AzureAgFoodPlatformRpServicePrivateLinkResources,
  Solutions
} from "./operationsInterfaces";
import { AgriFoodMgmtClientOptionalParams } from "./models";

export class AgriFoodMgmtClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId?: string;

  /**
   * Initializes a new instance of the AgriFoodMgmtClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AgriFoodMgmtClientOptionalParams
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: AgriFoodMgmtClientOptionalParams
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?: AgriFoodMgmtClientOptionalParams | string,
    options?: AgriFoodMgmtClientOptionalParams
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
    const defaults: AgriFoodMgmtClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-agrifood/1.0.0-beta.5`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2023-06-01-preview";
    this.dataManagerForAgricultureExtensions = new DataManagerForAgricultureExtensionsImpl(
      this
    );
    this.dataManagerForAgricultureSolutions = new DataManagerForAgricultureSolutionsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.checkNameAvailabilityOperations = new CheckNameAvailabilityOperationsImpl(
      this
    );
    this.dataManagerForAgricultures = new DataManagerForAgriculturesImpl(this);
    this.operationResultsOperations = new OperationResultsOperationsImpl(this);
    this.dataConnectors = new DataConnectorsImpl(this);
    this.extensions = new ExtensionsImpl(this);
    this.azureAgFoodPlatformRpServicePrivateEndpointConnections = new AzureAgFoodPlatformRpServicePrivateEndpointConnectionsImpl(
      this
    );
    this.azureAgFoodPlatformRpServicePrivateLinkResources = new AzureAgFoodPlatformRpServicePrivateLinkResourcesImpl(
      this
    );
    this.solutions = new SolutionsImpl(this);
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
        next: SendRequest
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
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  dataManagerForAgricultureExtensions: DataManagerForAgricultureExtensions;
  dataManagerForAgricultureSolutions: DataManagerForAgricultureSolutions;
  operations: Operations;
  checkNameAvailabilityOperations: CheckNameAvailabilityOperations;
  dataManagerForAgricultures: DataManagerForAgricultures;
  operationResultsOperations: OperationResultsOperations;
  dataConnectors: DataConnectors;
  extensions: Extensions;
  azureAgFoodPlatformRpServicePrivateEndpointConnections: AzureAgFoodPlatformRpServicePrivateEndpointConnections;
  azureAgFoodPlatformRpServicePrivateLinkResources: AzureAgFoodPlatformRpServicePrivateLinkResources;
  solutions: Solutions;
}
