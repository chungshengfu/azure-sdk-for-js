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
  AssessmentProjectsOperationsImpl,
  AssessmentOptionsOperationsImpl,
  AvsAssessmentOptionsOperationsImpl,
  GroupsOperationsImpl,
  AssessmentsOperationsImpl,
  AssessedMachinesOperationsImpl,
  AvsAssessmentsOperationsImpl,
  AvsAssessedMachinesOperationsImpl,
  SqlAssessmentV2OperationsImpl,
  AssessedSqlDatabaseV2OperationsImpl,
  AssessedSqlInstanceV2OperationsImpl,
  AssessedSqlMachinesOperationsImpl,
  AssessedSqlRecommendedEntityOperationsImpl,
  SqlAssessmentV2SummaryOperationsImpl,
  HypervCollectorsOperationsImpl,
  ImportCollectorsOperationsImpl,
  MachinesOperationsImpl,
  PrivateEndpointConnectionOperationsImpl,
  PrivateLinkResourceOperationsImpl,
  AssessmentProjectSummaryOperationsImpl,
  ServerCollectorsOperationsImpl,
  SqlAssessmentOptionsOperationsImpl,
  SqlCollectorOperationsImpl,
  VmwareCollectorsOperationsImpl
} from "./operations";
import {
  Operations,
  AssessmentProjectsOperations,
  AssessmentOptionsOperations,
  AvsAssessmentOptionsOperations,
  GroupsOperations,
  AssessmentsOperations,
  AssessedMachinesOperations,
  AvsAssessmentsOperations,
  AvsAssessedMachinesOperations,
  SqlAssessmentV2Operations,
  AssessedSqlDatabaseV2Operations,
  AssessedSqlInstanceV2Operations,
  AssessedSqlMachinesOperations,
  AssessedSqlRecommendedEntityOperations,
  SqlAssessmentV2SummaryOperations,
  HypervCollectorsOperations,
  ImportCollectorsOperations,
  MachinesOperations,
  PrivateEndpointConnectionOperations,
  PrivateLinkResourceOperations,
  AssessmentProjectSummaryOperations,
  ServerCollectorsOperations,
  SqlAssessmentOptionsOperations,
  SqlCollectorOperations,
  VmwareCollectorsOperations
} from "./operationsInterfaces";
import { AzureMigrateAssessmentServiceOptionalParams } from "./models";

export class AzureMigrateAssessmentService extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the AzureMigrateAssessmentService class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureMigrateAssessmentServiceOptionalParams
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
    const defaults: AzureMigrateAssessmentServiceOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-migrate/3.0.0`;
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
    this.apiVersion = options.apiVersion || "2023-03-15";
    this.operations = new OperationsImpl(this);
    this.assessmentProjectsOperations = new AssessmentProjectsOperationsImpl(
      this
    );
    this.assessmentOptionsOperations = new AssessmentOptionsOperationsImpl(
      this
    );
    this.avsAssessmentOptionsOperations = new AvsAssessmentOptionsOperationsImpl(
      this
    );
    this.groupsOperations = new GroupsOperationsImpl(this);
    this.assessmentsOperations = new AssessmentsOperationsImpl(this);
    this.assessedMachinesOperations = new AssessedMachinesOperationsImpl(this);
    this.avsAssessmentsOperations = new AvsAssessmentsOperationsImpl(this);
    this.avsAssessedMachinesOperations = new AvsAssessedMachinesOperationsImpl(
      this
    );
    this.sqlAssessmentV2Operations = new SqlAssessmentV2OperationsImpl(this);
    this.assessedSqlDatabaseV2Operations = new AssessedSqlDatabaseV2OperationsImpl(
      this
    );
    this.assessedSqlInstanceV2Operations = new AssessedSqlInstanceV2OperationsImpl(
      this
    );
    this.assessedSqlMachinesOperations = new AssessedSqlMachinesOperationsImpl(
      this
    );
    this.assessedSqlRecommendedEntityOperations = new AssessedSqlRecommendedEntityOperationsImpl(
      this
    );
    this.sqlAssessmentV2SummaryOperations = new SqlAssessmentV2SummaryOperationsImpl(
      this
    );
    this.hypervCollectorsOperations = new HypervCollectorsOperationsImpl(this);
    this.importCollectorsOperations = new ImportCollectorsOperationsImpl(this);
    this.machinesOperations = new MachinesOperationsImpl(this);
    this.privateEndpointConnectionOperations = new PrivateEndpointConnectionOperationsImpl(
      this
    );
    this.privateLinkResourceOperations = new PrivateLinkResourceOperationsImpl(
      this
    );
    this.assessmentProjectSummaryOperations = new AssessmentProjectSummaryOperationsImpl(
      this
    );
    this.serverCollectorsOperations = new ServerCollectorsOperationsImpl(this);
    this.sqlAssessmentOptionsOperations = new SqlAssessmentOptionsOperationsImpl(
      this
    );
    this.sqlCollectorOperations = new SqlCollectorOperationsImpl(this);
    this.vmwareCollectorsOperations = new VmwareCollectorsOperationsImpl(this);
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

  operations: Operations;
  assessmentProjectsOperations: AssessmentProjectsOperations;
  assessmentOptionsOperations: AssessmentOptionsOperations;
  avsAssessmentOptionsOperations: AvsAssessmentOptionsOperations;
  groupsOperations: GroupsOperations;
  assessmentsOperations: AssessmentsOperations;
  assessedMachinesOperations: AssessedMachinesOperations;
  avsAssessmentsOperations: AvsAssessmentsOperations;
  avsAssessedMachinesOperations: AvsAssessedMachinesOperations;
  sqlAssessmentV2Operations: SqlAssessmentV2Operations;
  assessedSqlDatabaseV2Operations: AssessedSqlDatabaseV2Operations;
  assessedSqlInstanceV2Operations: AssessedSqlInstanceV2Operations;
  assessedSqlMachinesOperations: AssessedSqlMachinesOperations;
  assessedSqlRecommendedEntityOperations: AssessedSqlRecommendedEntityOperations;
  sqlAssessmentV2SummaryOperations: SqlAssessmentV2SummaryOperations;
  hypervCollectorsOperations: HypervCollectorsOperations;
  importCollectorsOperations: ImportCollectorsOperations;
  machinesOperations: MachinesOperations;
  privateEndpointConnectionOperations: PrivateEndpointConnectionOperations;
  privateLinkResourceOperations: PrivateLinkResourceOperations;
  assessmentProjectSummaryOperations: AssessmentProjectSummaryOperations;
  serverCollectorsOperations: ServerCollectorsOperations;
  sqlAssessmentOptionsOperations: SqlAssessmentOptionsOperations;
  sqlCollectorOperations: SqlCollectorOperations;
  vmwareCollectorsOperations: VmwareCollectorsOperations;
}
