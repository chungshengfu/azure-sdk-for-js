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
  AzureADOnlyAuthenticationsImpl,
  OperationsImpl,
  IpFirewallRulesImpl,
  KeysImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesOperationsImpl,
  PrivateLinkHubPrivateLinkResourcesImpl,
  PrivateLinkHubsImpl,
  PrivateEndpointConnectionsPrivateLinkHubImpl,
  SqlPoolsImpl,
  SqlPoolMetadataSyncConfigsImpl,
  SqlPoolOperationResultsImpl,
  SqlPoolGeoBackupPoliciesImpl,
  SqlPoolDataWarehouseUserActivitiesImpl,
  SqlPoolRestorePointsImpl,
  SqlPoolReplicationLinksImpl,
  SqlPoolMaintenanceWindowsImpl,
  SqlPoolMaintenanceWindowOptionsImpl,
  SqlPoolTransparentDataEncryptionsImpl,
  SqlPoolBlobAuditingPoliciesImpl,
  SqlPoolOperationsImpl,
  SqlPoolUsagesImpl,
  SqlPoolSensitivityLabelsImpl,
  SqlPoolRecommendedSensitivityLabelsImpl,
  SqlPoolSchemasImpl,
  SqlPoolTablesImpl,
  SqlPoolTableColumnsImpl,
  SqlPoolConnectionPoliciesImpl,
  SqlPoolVulnerabilityAssessmentsImpl,
  SqlPoolVulnerabilityAssessmentScansImpl,
  SqlPoolSecurityAlertPoliciesImpl,
  SqlPoolVulnerabilityAssessmentRuleBaselinesImpl,
  ExtendedSqlPoolBlobAuditingPoliciesImpl,
  DataMaskingPoliciesImpl,
  DataMaskingRulesImpl,
  SqlPoolColumnsImpl,
  SqlPoolWorkloadGroupImpl,
  SqlPoolWorkloadClassifierImpl,
  WorkspaceManagedSqlServerBlobAuditingPoliciesImpl,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesImpl,
  WorkspaceManagedSqlServerSecurityAlertPolicyImpl,
  WorkspaceManagedSqlServerVulnerabilityAssessmentsImpl,
  WorkspaceManagedSqlServerEncryptionProtectorImpl,
  WorkspaceManagedSqlServerUsagesImpl,
  WorkspaceManagedSqlServerRecoverableSqlPoolsImpl,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsImpl,
  WorkspacesImpl,
  WorkspaceAadAdminsImpl,
  WorkspaceSqlAadAdminsImpl,
  WorkspaceManagedIdentitySqlControlSettingsImpl,
  RestorableDroppedSqlPoolsImpl,
  BigDataPoolsImpl,
  LibraryImpl,
  LibrariesImpl,
  IntegrationRuntimesImpl,
  IntegrationRuntimeNodeIpAddressOperationsImpl,
  IntegrationRuntimeObjectMetadataImpl,
  IntegrationRuntimeNodesImpl,
  IntegrationRuntimeCredentialsImpl,
  IntegrationRuntimeConnectionInfosImpl,
  IntegrationRuntimeAuthKeysOperationsImpl,
  IntegrationRuntimeMonitoringDataOperationsImpl,
  IntegrationRuntimeStatusOperationsImpl,
  GetImpl,
  SparkConfigurationImpl,
  SparkConfigurationsImpl,
  KustoOperationsImpl,
  KustoPoolsImpl,
  KustoPoolChildResourceImpl,
  KustoPoolAttachedDatabaseConfigurationsImpl,
  KustoPoolDatabasesImpl,
  KustoPoolDataConnectionsImpl,
  KustoPoolPrincipalAssignmentsImpl,
  KustoPoolDatabasePrincipalAssignmentsImpl,
  KustoPoolPrivateLinkResourcesOperationsImpl
} from "./operations";
import {
  AzureADOnlyAuthentications,
  Operations,
  IpFirewallRules,
  Keys,
  PrivateEndpointConnections,
  PrivateLinkResourcesOperations,
  PrivateLinkHubPrivateLinkResources,
  PrivateLinkHubs,
  PrivateEndpointConnectionsPrivateLinkHub,
  SqlPools,
  SqlPoolMetadataSyncConfigs,
  SqlPoolOperationResults,
  SqlPoolGeoBackupPolicies,
  SqlPoolDataWarehouseUserActivities,
  SqlPoolRestorePoints,
  SqlPoolReplicationLinks,
  SqlPoolMaintenanceWindows,
  SqlPoolMaintenanceWindowOptions,
  SqlPoolTransparentDataEncryptions,
  SqlPoolBlobAuditingPolicies,
  SqlPoolOperations,
  SqlPoolUsages,
  SqlPoolSensitivityLabels,
  SqlPoolRecommendedSensitivityLabels,
  SqlPoolSchemas,
  SqlPoolTables,
  SqlPoolTableColumns,
  SqlPoolConnectionPolicies,
  SqlPoolVulnerabilityAssessments,
  SqlPoolVulnerabilityAssessmentScans,
  SqlPoolSecurityAlertPolicies,
  SqlPoolVulnerabilityAssessmentRuleBaselines,
  ExtendedSqlPoolBlobAuditingPolicies,
  DataMaskingPolicies,
  DataMaskingRules,
  SqlPoolColumns,
  SqlPoolWorkloadGroup,
  SqlPoolWorkloadClassifier,
  WorkspaceManagedSqlServerBlobAuditingPolicies,
  WorkspaceManagedSqlServerExtendedBlobAuditingPolicies,
  WorkspaceManagedSqlServerSecurityAlertPolicy,
  WorkspaceManagedSqlServerVulnerabilityAssessments,
  WorkspaceManagedSqlServerEncryptionProtector,
  WorkspaceManagedSqlServerUsages,
  WorkspaceManagedSqlServerRecoverableSqlPools,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings,
  Workspaces,
  WorkspaceAadAdmins,
  WorkspaceSqlAadAdmins,
  WorkspaceManagedIdentitySqlControlSettings,
  RestorableDroppedSqlPools,
  BigDataPools,
  Library,
  Libraries,
  IntegrationRuntimes,
  IntegrationRuntimeNodeIpAddressOperations,
  IntegrationRuntimeObjectMetadata,
  IntegrationRuntimeNodes,
  IntegrationRuntimeCredentials,
  IntegrationRuntimeConnectionInfos,
  IntegrationRuntimeAuthKeysOperations,
  IntegrationRuntimeMonitoringDataOperations,
  IntegrationRuntimeStatusOperations,
  Get,
  SparkConfiguration,
  SparkConfigurations,
  KustoOperations,
  KustoPools,
  KustoPoolChildResource,
  KustoPoolAttachedDatabaseConfigurations,
  KustoPoolDatabases,
  KustoPoolDataConnections,
  KustoPoolPrincipalAssignments,
  KustoPoolDatabasePrincipalAssignments,
  KustoPoolPrivateLinkResourcesOperations
} from "./operationsInterfaces";
import { SynapseManagementClientOptionalParams } from "./models";

export class SynapseManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId?: string;

  /**
   * Initializes a new instance of the SynapseManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: SynapseManagementClientOptionalParams
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: SynapseManagementClientOptionalParams
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?: SynapseManagementClientOptionalParams | string,
    options?: SynapseManagementClientOptionalParams
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
    const defaults: SynapseManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-synapse/9.0.0-beta.2`;
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
    this.azureADOnlyAuthentications = new AzureADOnlyAuthenticationsImpl(this);
    this.operations = new OperationsImpl(this);
    this.ipFirewallRules = new IpFirewallRulesImpl(this);
    this.keys = new KeysImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResourcesOperations = new PrivateLinkResourcesOperationsImpl(
      this
    );
    this.privateLinkHubPrivateLinkResources = new PrivateLinkHubPrivateLinkResourcesImpl(
      this
    );
    this.privateLinkHubs = new PrivateLinkHubsImpl(this);
    this.privateEndpointConnectionsPrivateLinkHub = new PrivateEndpointConnectionsPrivateLinkHubImpl(
      this
    );
    this.sqlPools = new SqlPoolsImpl(this);
    this.sqlPoolMetadataSyncConfigs = new SqlPoolMetadataSyncConfigsImpl(this);
    this.sqlPoolOperationResults = new SqlPoolOperationResultsImpl(this);
    this.sqlPoolGeoBackupPolicies = new SqlPoolGeoBackupPoliciesImpl(this);
    this.sqlPoolDataWarehouseUserActivities = new SqlPoolDataWarehouseUserActivitiesImpl(
      this
    );
    this.sqlPoolRestorePoints = new SqlPoolRestorePointsImpl(this);
    this.sqlPoolReplicationLinks = new SqlPoolReplicationLinksImpl(this);
    this.sqlPoolMaintenanceWindows = new SqlPoolMaintenanceWindowsImpl(this);
    this.sqlPoolMaintenanceWindowOptions = new SqlPoolMaintenanceWindowOptionsImpl(
      this
    );
    this.sqlPoolTransparentDataEncryptions = new SqlPoolTransparentDataEncryptionsImpl(
      this
    );
    this.sqlPoolBlobAuditingPolicies = new SqlPoolBlobAuditingPoliciesImpl(
      this
    );
    this.sqlPoolOperations = new SqlPoolOperationsImpl(this);
    this.sqlPoolUsages = new SqlPoolUsagesImpl(this);
    this.sqlPoolSensitivityLabels = new SqlPoolSensitivityLabelsImpl(this);
    this.sqlPoolRecommendedSensitivityLabels = new SqlPoolRecommendedSensitivityLabelsImpl(
      this
    );
    this.sqlPoolSchemas = new SqlPoolSchemasImpl(this);
    this.sqlPoolTables = new SqlPoolTablesImpl(this);
    this.sqlPoolTableColumns = new SqlPoolTableColumnsImpl(this);
    this.sqlPoolConnectionPolicies = new SqlPoolConnectionPoliciesImpl(this);
    this.sqlPoolVulnerabilityAssessments = new SqlPoolVulnerabilityAssessmentsImpl(
      this
    );
    this.sqlPoolVulnerabilityAssessmentScans = new SqlPoolVulnerabilityAssessmentScansImpl(
      this
    );
    this.sqlPoolSecurityAlertPolicies = new SqlPoolSecurityAlertPoliciesImpl(
      this
    );
    this.sqlPoolVulnerabilityAssessmentRuleBaselines = new SqlPoolVulnerabilityAssessmentRuleBaselinesImpl(
      this
    );
    this.extendedSqlPoolBlobAuditingPolicies = new ExtendedSqlPoolBlobAuditingPoliciesImpl(
      this
    );
    this.dataMaskingPolicies = new DataMaskingPoliciesImpl(this);
    this.dataMaskingRules = new DataMaskingRulesImpl(this);
    this.sqlPoolColumns = new SqlPoolColumnsImpl(this);
    this.sqlPoolWorkloadGroup = new SqlPoolWorkloadGroupImpl(this);
    this.sqlPoolWorkloadClassifier = new SqlPoolWorkloadClassifierImpl(this);
    this.workspaceManagedSqlServerBlobAuditingPolicies = new WorkspaceManagedSqlServerBlobAuditingPoliciesImpl(
      this
    );
    this.workspaceManagedSqlServerExtendedBlobAuditingPolicies = new WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesImpl(
      this
    );
    this.workspaceManagedSqlServerSecurityAlertPolicy = new WorkspaceManagedSqlServerSecurityAlertPolicyImpl(
      this
    );
    this.workspaceManagedSqlServerVulnerabilityAssessments = new WorkspaceManagedSqlServerVulnerabilityAssessmentsImpl(
      this
    );
    this.workspaceManagedSqlServerEncryptionProtector = new WorkspaceManagedSqlServerEncryptionProtectorImpl(
      this
    );
    this.workspaceManagedSqlServerUsages = new WorkspaceManagedSqlServerUsagesImpl(
      this
    );
    this.workspaceManagedSqlServerRecoverableSqlPools = new WorkspaceManagedSqlServerRecoverableSqlPoolsImpl(
      this
    );
    this.workspaceManagedSqlServerDedicatedSQLMinimalTlsSettings = new WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsImpl(
      this
    );
    this.workspaces = new WorkspacesImpl(this);
    this.workspaceAadAdmins = new WorkspaceAadAdminsImpl(this);
    this.workspaceSqlAadAdmins = new WorkspaceSqlAadAdminsImpl(this);
    this.workspaceManagedIdentitySqlControlSettings = new WorkspaceManagedIdentitySqlControlSettingsImpl(
      this
    );
    this.restorableDroppedSqlPools = new RestorableDroppedSqlPoolsImpl(this);
    this.bigDataPools = new BigDataPoolsImpl(this);
    this.library = new LibraryImpl(this);
    this.libraries = new LibrariesImpl(this);
    this.integrationRuntimes = new IntegrationRuntimesImpl(this);
    this.integrationRuntimeNodeIpAddressOperations = new IntegrationRuntimeNodeIpAddressOperationsImpl(
      this
    );
    this.integrationRuntimeObjectMetadata = new IntegrationRuntimeObjectMetadataImpl(
      this
    );
    this.integrationRuntimeNodes = new IntegrationRuntimeNodesImpl(this);
    this.integrationRuntimeCredentials = new IntegrationRuntimeCredentialsImpl(
      this
    );
    this.integrationRuntimeConnectionInfos = new IntegrationRuntimeConnectionInfosImpl(
      this
    );
    this.integrationRuntimeAuthKeysOperations = new IntegrationRuntimeAuthKeysOperationsImpl(
      this
    );
    this.integrationRuntimeMonitoringDataOperations = new IntegrationRuntimeMonitoringDataOperationsImpl(
      this
    );
    this.integrationRuntimeStatusOperations = new IntegrationRuntimeStatusOperationsImpl(
      this
    );
    this.get = new GetImpl(this);
    this.sparkConfiguration = new SparkConfigurationImpl(this);
    this.sparkConfigurations = new SparkConfigurationsImpl(this);
    this.kustoOperations = new KustoOperationsImpl(this);
    this.kustoPools = new KustoPoolsImpl(this);
    this.kustoPoolChildResource = new KustoPoolChildResourceImpl(this);
    this.kustoPoolAttachedDatabaseConfigurations = new KustoPoolAttachedDatabaseConfigurationsImpl(
      this
    );
    this.kustoPoolDatabases = new KustoPoolDatabasesImpl(this);
    this.kustoPoolDataConnections = new KustoPoolDataConnectionsImpl(this);
    this.kustoPoolPrincipalAssignments = new KustoPoolPrincipalAssignmentsImpl(
      this
    );
    this.kustoPoolDatabasePrincipalAssignments = new KustoPoolDatabasePrincipalAssignmentsImpl(
      this
    );
    this.kustoPoolPrivateLinkResourcesOperations = new KustoPoolPrivateLinkResourcesOperationsImpl(
      this
    );
  }

  azureADOnlyAuthentications: AzureADOnlyAuthentications;
  operations: Operations;
  ipFirewallRules: IpFirewallRules;
  keys: Keys;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResourcesOperations: PrivateLinkResourcesOperations;
  privateLinkHubPrivateLinkResources: PrivateLinkHubPrivateLinkResources;
  privateLinkHubs: PrivateLinkHubs;
  privateEndpointConnectionsPrivateLinkHub: PrivateEndpointConnectionsPrivateLinkHub;
  sqlPools: SqlPools;
  sqlPoolMetadataSyncConfigs: SqlPoolMetadataSyncConfigs;
  sqlPoolOperationResults: SqlPoolOperationResults;
  sqlPoolGeoBackupPolicies: SqlPoolGeoBackupPolicies;
  sqlPoolDataWarehouseUserActivities: SqlPoolDataWarehouseUserActivities;
  sqlPoolRestorePoints: SqlPoolRestorePoints;
  sqlPoolReplicationLinks: SqlPoolReplicationLinks;
  sqlPoolMaintenanceWindows: SqlPoolMaintenanceWindows;
  sqlPoolMaintenanceWindowOptions: SqlPoolMaintenanceWindowOptions;
  sqlPoolTransparentDataEncryptions: SqlPoolTransparentDataEncryptions;
  sqlPoolBlobAuditingPolicies: SqlPoolBlobAuditingPolicies;
  sqlPoolOperations: SqlPoolOperations;
  sqlPoolUsages: SqlPoolUsages;
  sqlPoolSensitivityLabels: SqlPoolSensitivityLabels;
  sqlPoolRecommendedSensitivityLabels: SqlPoolRecommendedSensitivityLabels;
  sqlPoolSchemas: SqlPoolSchemas;
  sqlPoolTables: SqlPoolTables;
  sqlPoolTableColumns: SqlPoolTableColumns;
  sqlPoolConnectionPolicies: SqlPoolConnectionPolicies;
  sqlPoolVulnerabilityAssessments: SqlPoolVulnerabilityAssessments;
  sqlPoolVulnerabilityAssessmentScans: SqlPoolVulnerabilityAssessmentScans;
  sqlPoolSecurityAlertPolicies: SqlPoolSecurityAlertPolicies;
  sqlPoolVulnerabilityAssessmentRuleBaselines: SqlPoolVulnerabilityAssessmentRuleBaselines;
  extendedSqlPoolBlobAuditingPolicies: ExtendedSqlPoolBlobAuditingPolicies;
  dataMaskingPolicies: DataMaskingPolicies;
  dataMaskingRules: DataMaskingRules;
  sqlPoolColumns: SqlPoolColumns;
  sqlPoolWorkloadGroup: SqlPoolWorkloadGroup;
  sqlPoolWorkloadClassifier: SqlPoolWorkloadClassifier;
  workspaceManagedSqlServerBlobAuditingPolicies: WorkspaceManagedSqlServerBlobAuditingPolicies;
  workspaceManagedSqlServerExtendedBlobAuditingPolicies: WorkspaceManagedSqlServerExtendedBlobAuditingPolicies;
  workspaceManagedSqlServerSecurityAlertPolicy: WorkspaceManagedSqlServerSecurityAlertPolicy;
  workspaceManagedSqlServerVulnerabilityAssessments: WorkspaceManagedSqlServerVulnerabilityAssessments;
  workspaceManagedSqlServerEncryptionProtector: WorkspaceManagedSqlServerEncryptionProtector;
  workspaceManagedSqlServerUsages: WorkspaceManagedSqlServerUsages;
  workspaceManagedSqlServerRecoverableSqlPools: WorkspaceManagedSqlServerRecoverableSqlPools;
  workspaceManagedSqlServerDedicatedSQLMinimalTlsSettings: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings;
  workspaces: Workspaces;
  workspaceAadAdmins: WorkspaceAadAdmins;
  workspaceSqlAadAdmins: WorkspaceSqlAadAdmins;
  workspaceManagedIdentitySqlControlSettings: WorkspaceManagedIdentitySqlControlSettings;
  restorableDroppedSqlPools: RestorableDroppedSqlPools;
  bigDataPools: BigDataPools;
  library: Library;
  libraries: Libraries;
  integrationRuntimes: IntegrationRuntimes;
  integrationRuntimeNodeIpAddressOperations: IntegrationRuntimeNodeIpAddressOperations;
  integrationRuntimeObjectMetadata: IntegrationRuntimeObjectMetadata;
  integrationRuntimeNodes: IntegrationRuntimeNodes;
  integrationRuntimeCredentials: IntegrationRuntimeCredentials;
  integrationRuntimeConnectionInfos: IntegrationRuntimeConnectionInfos;
  integrationRuntimeAuthKeysOperations: IntegrationRuntimeAuthKeysOperations;
  integrationRuntimeMonitoringDataOperations: IntegrationRuntimeMonitoringDataOperations;
  integrationRuntimeStatusOperations: IntegrationRuntimeStatusOperations;
  get: Get;
  sparkConfiguration: SparkConfiguration;
  sparkConfigurations: SparkConfigurations;
  kustoOperations: KustoOperations;
  kustoPools: KustoPools;
  kustoPoolChildResource: KustoPoolChildResource;
  kustoPoolAttachedDatabaseConfigurations: KustoPoolAttachedDatabaseConfigurations;
  kustoPoolDatabases: KustoPoolDatabases;
  kustoPoolDataConnections: KustoPoolDataConnections;
  kustoPoolPrincipalAssignments: KustoPoolPrincipalAssignments;
  kustoPoolDatabasePrincipalAssignments: KustoPoolDatabasePrincipalAssignments;
  kustoPoolPrivateLinkResourcesOperations: KustoPoolPrivateLinkResourcesOperations;
}
