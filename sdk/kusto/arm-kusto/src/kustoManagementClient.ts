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
  ClustersImpl,
  ClusterPrincipalAssignmentsImpl,
  SkusImpl,
  DatabasesImpl,
  AttachedDatabaseConfigurationsImpl,
  ManagedPrivateEndpointsImpl,
  DatabasePrincipalAssignmentsImpl,
  ScriptsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  DataConnectionsImpl,
  OperationsImpl,
  OperationsResultsImpl,
  OperationsResultsLocationImpl
} from "./operations";
import {
  Clusters,
  ClusterPrincipalAssignments,
  Skus,
  Databases,
  AttachedDatabaseConfigurations,
  ManagedPrivateEndpoints,
  DatabasePrincipalAssignments,
  Scripts,
  PrivateEndpointConnections,
  PrivateLinkResources,
  DataConnections,
  Operations,
  OperationsResults,
  OperationsResultsLocation
} from "./operationsInterfaces";
import { KustoManagementClientOptionalParams } from "./models";

export class KustoManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the KustoManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: KustoManagementClientOptionalParams
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
    const defaults: KustoManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-kusto/7.3.0`;
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
    this.apiVersion = options.apiVersion || "2022-11-11";
    this.clusters = new ClustersImpl(this);
    this.clusterPrincipalAssignments = new ClusterPrincipalAssignmentsImpl(
      this
    );
    this.skus = new SkusImpl(this);
    this.databases = new DatabasesImpl(this);
    this.attachedDatabaseConfigurations = new AttachedDatabaseConfigurationsImpl(
      this
    );
    this.managedPrivateEndpoints = new ManagedPrivateEndpointsImpl(this);
    this.databasePrincipalAssignments = new DatabasePrincipalAssignmentsImpl(
      this
    );
    this.scripts = new ScriptsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.dataConnections = new DataConnectionsImpl(this);
    this.operations = new OperationsImpl(this);
    this.operationsResults = new OperationsResultsImpl(this);
    this.operationsResultsLocation = new OperationsResultsLocationImpl(this);
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

  clusters: Clusters;
  clusterPrincipalAssignments: ClusterPrincipalAssignments;
  skus: Skus;
  databases: Databases;
  attachedDatabaseConfigurations: AttachedDatabaseConfigurations;
  managedPrivateEndpoints: ManagedPrivateEndpoints;
  databasePrincipalAssignments: DatabasePrincipalAssignments;
  scripts: Scripts;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  dataConnections: DataConnections;
  operations: Operations;
  operationsResults: OperationsResults;
  operationsResultsLocation: OperationsResultsLocation;
}
