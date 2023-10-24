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
  OperationsImpl,
  AdminKeysImpl,
  QueryKeysImpl,
  ServicesImpl,
  PrivateLinkResourcesImpl,
  PrivateEndpointConnectionsImpl,
  SharedPrivateLinkResourcesImpl,
  UsagesImpl
} from "./operations";
import {
  Operations,
  AdminKeys,
  QueryKeys,
  Services,
  PrivateLinkResources,
  PrivateEndpointConnections,
  SharedPrivateLinkResources,
  Usages
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  SearchManagementClientOptionalParams,
  UsageBySubscriptionSkuOptionalParams,
  UsageBySubscriptionSkuResponse
} from "./models";

export class SearchManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the SearchManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The unique identifier for a Microsoft Azure subscription. You can obtain this
   *                       value from the Azure Resource Manager API, command line tools, or the portal.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: SearchManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SearchManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-search/3.2.0`;
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
    this.apiVersion = options.apiVersion || "2023-11-01";
    this.operations = new OperationsImpl(this);
    this.adminKeys = new AdminKeysImpl(this);
    this.queryKeys = new QueryKeysImpl(this);
    this.services = new ServicesImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.sharedPrivateLinkResources = new SharedPrivateLinkResourcesImpl(this);
    this.usages = new UsagesImpl(this);
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

  /**
   * Gets the quota usage for a search SKU in the given subscription.
   * @param location The unique location name for a Microsoft Azure geographic region.
   * @param skuName The unique SKU name that identifies a billable tier.
   * @param options The options parameters.
   */
  usageBySubscriptionSku(
    location: string,
    skuName: string,
    options?: UsageBySubscriptionSkuOptionalParams
  ): Promise<UsageBySubscriptionSkuResponse> {
    return this.sendOperationRequest(
      { location, skuName, options },
      usageBySubscriptionSkuOperationSpec
    );
  }

  operations: Operations;
  adminKeys: AdminKeys;
  queryKeys: QueryKeys;
  services: Services;
  privateLinkResources: PrivateLinkResources;
  privateEndpointConnections: PrivateEndpointConnections;
  sharedPrivateLinkResources: SharedPrivateLinkResources;
  usages: Usages;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const usageBySubscriptionSkuOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Search/locations/{location}/usages/{skuName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaUsageResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.skuName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
