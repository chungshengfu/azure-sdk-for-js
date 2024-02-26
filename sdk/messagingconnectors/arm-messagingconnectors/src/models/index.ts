/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type ConnectorPropertiesUnion =
  | ConnectorProperties
  | BitCoinSourceConnectorProperties
  | ConfluentSourceConnectorProperties
  | CosmosDbSourceConnectorProperties
  | GooglePubSubSourceConnectorProperties
  | KinesisSourceConnectorProperties
  | PostgreSqlSourceConnectorProperties
  | SqlServerSourceConnectorProperties;

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The response of a ConnectorInstance list operation. */
export interface ConnectorInstanceListResult {
  /** The ConnectorInstance items on this page */
  value: ConnectorInstance[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Basic info for Connector */
export interface ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType:
    | "BitCoinSource"
    | "ConfluentSource"
    | "CosmosDbSource"
    | "GooglePubSubSource"
    | "KinesisSource"
    | "PostgreSqlSource"
    | "SqlServerSource";
  /** Max Tasks count of the Connector. */
  maxTasks: number;
  /** Type of the Connector. */
  valueConverter: ConverterType;
  /**
   * Direction of the Connector.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly connectorDirection?: Direction;
  /** connectionString of the EventHub. */
  eventHubConfig: EventHubConfig;
  /**
   * State of the MessagingConnector
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly connectorState: ConnectorState;
  /**
   * State of provisioning of the MessagingConnector ARM Resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ConnectorProvisioningState;
}

/** Basic info for EventHub */
export interface EventHubConfig {
  /** namespace of the EventHub. */
  namespaceHostName: string;
  /** name of the EventHub. */
  eventHubName: string;
  /**
   * connectionString of the EventHub.
   * This value contains a credential. Consider obscuring before showing to users
   */
  connectionString: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The type used for updating tags in ConnectorInstance resources. */
export interface ConnectorInstanceTagsUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
}

/** Configuration for BitCoinSourceConnector */
export interface BitCoinSourceConnectorProperties extends ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType: "BitCoinSource";
}

/** Configuration for ConfluentSourceConnector */
export interface ConfluentSourceConnectorProperties
  extends ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType: "ConfluentSource";
  /** bootstrapServers of the Confluent server. */
  bootstrapServers: string;
  /** Topic of the Confluent. */
  topic: string;
  /** ConsumerGroup of the Confluent. */
  consumerGroup: string;
  /** AutoOffsetReset policy of the Confluent consume. */
  autoOffsetReset: string;
  /** User of the Confluent. */
  user: string;
  /**
   * Password of the Confluent.
   * This value contains a credential. Consider obscuring before showing to users
   */
  password: string;
}

/** Configuration for CosmosDbSourceConnector */
export interface CosmosDbSourceConnectorProperties extends ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType: "CosmosDbSource";
  /** PollIntervalInMs policy. */
  pollIntervalInMs: number;
  /** Endpoint of CosmosDB. */
  cosmosEndpoint: string;
  /** DatabaseName for CosmosDB server. */
  databaseName: string;
  /** Container for CosmosDB server. */
  container: string;
  /**
   * masterKey for CosmosDB server.
   * This value contains a credential. Consider obscuring before showing to users
   */
  masterKey: string;
  /** useLatestOffset policy */
  offsetPolicy: OffsetPolicyForCosmosDB;
}

/** Configuration for GooglePubSubSourceConnector */
export interface GooglePubSubSourceConnectorProperties
  extends ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType: "GooglePubSubSource";
  /** ProjectId for pubsub server. */
  projectId: string;
  /** SubscriptionName for pubsub server. */
  subscriptionName: string;
  /**
   * AccountKey for pubsub server.
   * This value contains a credential. Consider obscuring before showing to users
   */
  accountKey: string;
}

/** Configuration for KinesisSourceConnector */
export interface KinesisSourceConnectorProperties extends ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType: "KinesisSource";
  /** AccessKeyId for AWS Kinesis Server. */
  awsAccessKeyId: string;
  /**
   * SecretAccessKey for AWS Kinesis Server.
   * This value contains a credential. Consider obscuring before showing to users
   */
  awsSecretAccessKey: string;
  /** Region of AWS Kinesis Server. */
  awsKinesisRegion: string;
  /** StreamName in AWS Kinesis Server. */
  awsKinesisStreamName: string;
}

/** Configuration for PostgreSqlSourceConnector */
export interface PostgreSqlSourceConnectorProperties
  extends ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType: "PostgreSqlSource";
  /** HostName for PostgreSql Server. */
  hostName: string;
  /** Port for PostgreSql Server. */
  port: number;
  /** DatabaseName for PostgreSql Server. */
  databaseName: string;
  /** Username for PostgreSql Server. */
  username: string;
  /**
   * Password for PostgreSql Server.
   * This value contains a credential. Consider obscuring before showing to users
   */
  password: string;
  /** ReplicationSlotName for PostgreSql Server. */
  replicationSlotName: string;
}

/** Configuration for SqlServerSqlSourceConnector */
export interface SqlServerSourceConnectorProperties
  extends ConnectorProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  connectorType: "SqlServerSource";
  /** HostName for SqlServer. */
  hostName: string;
  /** Port for SqlServer. */
  port: number;
  /** DatabaseName for SqlServer. */
  databaseName: string;
  /** Username for SqlServer. */
  username: string;
  /**
   * Password for SqlServer.
   * This value contains a credential. Consider obscuring before showing to users
   */
  password: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** A Connector resource Azure */
export interface ConnectorInstance extends TrackedResource {
  /** Max Tasks count of the Connector. */
  maxTasks?: number;
  /** Type of the Connector. */
  valueConverter?: ConverterType;
  /**
   * Direction of the Connector.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly connectorDirection?: Direction;
  /**
   * Type of the Connector.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly connectorType?: ConnectorType;
  /** connectionString of the EventHub. */
  eventHubConfig?: EventHubConfig;
  /**
   * State of the MessagingConnector
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly connectorState?: ConnectorState;
  /**
   * State of provisioning of the MessagingConnector ARM Resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ConnectorProvisioningState;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system",
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal",
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link ConverterType} that the service accepts. */
export enum KnownConverterType {
  /** Unknown converter. */
  Unknown = "Unknown",
  /** This represents a converter for byte arrays format. */
  ByteArrayConverter = "ByteArrayConverter",
  /** This represents a converter for string format. */
  StringConverter = "StringConverter",
  /** This represents a converter for json format. */
  JsonConverter = "JsonConverter",
  /** This represents a converter for Avro format. */
  AvroConverter = "AvroConverter",
  /** This represents a converter for csv format. */
  CsvConverter = "CsvConverter",
}

/**
 * Defines values for ConverterType. \
 * {@link KnownConverterType} can be used interchangeably with ConverterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown converter. \
 * **ByteArrayConverter**: This represents a converter for byte arrays format. \
 * **StringConverter**: This represents a converter for string format. \
 * **JsonConverter**: This represents a converter for json format. \
 * **AvroConverter**: This represents a converter for Avro format. \
 * **CsvConverter**: This represents a converter for csv format.
 */
export type ConverterType = string;

/** Known values of {@link Direction} that the service accepts. */
export enum KnownDirection {
  /** Unknown direction */
  Unknown = "Unknown",
  /** Source Connector */
  Source = "Source",
  /** Sink Connector */
  Sink = "Sink",
}

/**
 * Defines values for Direction. \
 * {@link KnownDirection} can be used interchangeably with Direction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown direction \
 * **Source**: Source Connector \
 * **Sink**: Sink Connector
 */
export type Direction = string;

/** Known values of {@link ConnectorType} that the service accepts. */
export enum KnownConnectorType {
  /** Unknown source connector. */
  Unknown = "Unknown",
  /** Google pub sub source connector. */
  GooglePubSubSource = "GooglePubSubSource",
  /** Amazon kinesis source connector. */
  KinesisSource = "KinesisSource",
  /** Postgre sql source connector. */
  PostgreSqlSource = "PostgreSqlSource",
  /** Sql server source connector. */
  SqlServerSource = "SqlServerSource",
  /** Cosmos db source connector. */
  CosmosDbSource = "CosmosDbSource",
  /** BitCoin source connector. */
  BitCoinSource = "BitCoinSource",
  /** Kafka source connector. */
  KafkaSource = "KafkaSource",
  /** confluent source connector. */
  ConfluentSource = "ConfluentSource",
}

/**
 * Defines values for ConnectorType. \
 * {@link KnownConnectorType} can be used interchangeably with ConnectorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown source connector. \
 * **GooglePubSubSource**: Google pub sub source connector. \
 * **KinesisSource**: Amazon kinesis source connector. \
 * **PostgreSqlSource**: Postgre sql source connector. \
 * **SqlServerSource**: Sql server source connector. \
 * **CosmosDbSource**: Cosmos db source connector. \
 * **BitCoinSource**: BitCoin source connector. \
 * **KafkaSource**: Kafka source connector. \
 * **ConfluentSource**: confluent source connector.
 */
export type ConnectorType = string;

/** Known values of {@link ConnectorState} that the service accepts. */
export enum KnownConnectorState {
  /** Unknown State */
  Unknown = "Unknown",
  /** Creating State */
  Creating = "Creating",
  /** Initializing State */
  Initializing = "Initializing",
  /** Running State */
  Running = "Running",
  /** Updating State */
  Updating = "Updating",
  /** Degraded State */
  Degraded = "Degraded",
  /** Stopped State */
  Stopped = "Stopped",
  /** Paused State */
  Paused = "Paused",
  /** Deleting State */
  Deleting = "Deleting",
  /** Failed State */
  Failed = "Failed",
}

/**
 * Defines values for ConnectorState. \
 * {@link KnownConnectorState} can be used interchangeably with ConnectorState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown State \
 * **Creating**: Creating State \
 * **Initializing**: Initializing State \
 * **Running**: Running State \
 * **Updating**: Updating State \
 * **Degraded**: Degraded State \
 * **Stopped**: Stopped State \
 * **Paused**: Paused State \
 * **Deleting**: Deleting State \
 * **Failed**: Failed State
 */
export type ConnectorState = string;

/** Known values of {@link ConnectorProvisioningState} that the service accepts. */
export enum KnownConnectorProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** Accepted State */
  Accepted = "Accepted",
  /** Creating State */
  Creating = "Creating",
  /** Updating State */
  Updating = "Updating",
}

/**
 * Defines values for ConnectorProvisioningState. \
 * {@link KnownConnectorProvisioningState} can be used interchangeably with ConnectorProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Accepted**: Accepted State \
 * **Creating**: Creating State \
 * **Updating**: Updating State
 */
export type ConnectorProvisioningState = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link OffsetPolicyForCosmosDB} that the service accepts. */
export enum KnownOffsetPolicyForCosmosDB {
  /** use the latest (most recent) source offset, */
  UseLatestSourceOffset = "UseLatestSourceOffset",
  /** use the earliest recorded offset */
  UseEarliestRecordedOffset = "UseEarliestRecordedOffset",
}

/**
 * Defines values for OffsetPolicyForCosmosDB. \
 * {@link KnownOffsetPolicyForCosmosDB} can be used interchangeably with OffsetPolicyForCosmosDB,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **UseLatestSourceOffset**: use the latest (most recent) source offset, \
 * **UseEarliestRecordedOffset**: use the earliest recorded offset
 */
export type OffsetPolicyForCosmosDB = string;

/** Known values of {@link Versions} that the service accepts. */
export enum KnownVersions {
  /** 2024-01-20-preview version */
  V20240120Preview = "2024-01-20-preview",
}

/**
 * Defines values for Versions. \
 * {@link KnownVersions} can be used interchangeably with Versions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **2024-01-20-preview**: 2024-01-20-preview version
 */
export type Versions = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface ConnectorOperationsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ConnectorOperationsListBySubscriptionResponse =
  ConnectorInstanceListResult;

/** Optional parameters. */
export interface ConnectorOperationsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ConnectorOperationsListByResourceGroupResponse =
  ConnectorInstanceListResult;

/** Optional parameters. */
export interface ConnectorOperationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConnectorOperationsGetResponse = ConnectorInstance;

/** Optional parameters. */
export interface ConnectorOperationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConnectorOperationsCreateOrUpdateResponse = ConnectorInstance;

/** Optional parameters. */
export interface ConnectorOperationsUpdateTagsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateTags operation. */
export type ConnectorOperationsUpdateTagsResponse = ConnectorInstance;

/** Optional parameters. */
export interface ConnectorOperationsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ConnectorOperationsPauseOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ConnectorOperationsResumeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ConnectorOperationsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type ConnectorOperationsListBySubscriptionNextResponse =
  ConnectorInstanceListResult;

/** Optional parameters. */
export interface ConnectorOperationsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type ConnectorOperationsListByResourceGroupNextResponse =
  ConnectorInstanceListResult;

/** Optional parameters. */
export interface MicrosoftMessagingConnectorsManagementServiceOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
