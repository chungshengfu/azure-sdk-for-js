/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** List of Operations */
export interface OperationList {
  /** Array of operations */
  value?: Operation[];
  /** URI to the next page of operations. */
  nextLink?: string;
}

/** Describes the supported REST operation. */
export interface Operation {
  /** The name of the operation being performed on this particular object. */
  name?: string;
  /** Contains the localized display information for this particular operation or action. */
  display?: Display;
  /** The intended executor of the operation. */
  origin?: string;
}

/** Contains the localized display information for this particular operation or action. */
export interface Display {
  /** The localized, friendly version of the resource provider name. */
  provider?: string;
  /** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
  resource?: string;
  /** The localized, friendly name for the operation. Use the name as it will displayed to the user. */
  operation?: string;
  /** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
  description?: string;
}

/** Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
export interface ErrorResponse {
  /** The details of the error. */
  error?: ErrorDetails;
}

/** The details of the error. */
export interface ErrorDetails {
  /**
   * Error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Error message indicating why the operation failed.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
}

/** Cloud specific manifest JSON properties. */
export interface CloudManifestFileProperties {
  /** Cloud specific manifest data. */
  deploymentData?: CloudManifestFileDeploymentData;
  /** Signature of the cloud specific manifest data. */
  signature?: string;
}

/** Cloud specific manifest data for AzureStack deployment. */
export interface CloudManifestFileDeploymentData {
  /** Dsms external certificates. */
  externalDsmsCertificates?: string;
  /** Signing verification public key. */
  customCloudVerificationKey?: string;
  /** ARM endpoint. */
  customCloudArmEndpoint?: string;
  /** Dsms endpoint. */
  externalDsmsEndpoint?: string;
}

/** Base resource object. */
export interface Resource {
  /**
   * ID of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Type of Resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The entity tag used for optimistic concurrency when modifying the resource. */
  etag?: string;
}

/** Request details for generating a deployment license. */
export interface DeploymentLicenseRequest {
  /** Signing verification public key version. */
  verificationVersion?: string;
}

/** A license that can be used to deploy an Azure Stack device. */
export interface DeploymentLicenseResponse {
  /** A license chain that can be used to temporarily activate an Azure Stack device. */
  temporaryLicenseChain?: string[];
  /** Signature of the license chain. */
  signature?: string;
}

/** Pageable list of customer subscriptions. */
export interface CustomerSubscriptionList {
  /** URI to the next page. */
  nextLink?: string;
  /** List of customer subscriptions. */
  value?: CustomerSubscription[];
}

/** Pageable list of products. */
export interface ProductList {
  /** URI to the next page. */
  nextLink?: string;
  /** List of products. */
  value?: Product[];
}

/** Links to product icons. */
export interface IconUris {
  /** URI to large icon. */
  large?: string;
  /** URI to wide icon. */
  wide?: string;
  /** URI to medium icon. */
  medium?: string;
  /** URI to small icon. */
  small?: string;
  /** URI to hero icon. */
  hero?: string;
}

/** Link with additional information about a product. */
export interface ProductLink {
  /** The description of the link. */
  displayName?: string;
  /** The URI corresponding to the link. */
  uri?: string;
}

/** Additional properties of the product */
export interface ProductProperties {
  /** The version. */
  version?: string;
}

/** Product compatibility */
export interface Compatibility {
  /** Tells if product is compatible with current device */
  isCompatible?: boolean;
  /** Short error message if any compatibility issues are found */
  message?: string;
  /** Full error message if any compatibility issues are found */
  description?: string;
  /** List of all issues found */
  issues?: CompatibilityIssue[];
}

/** Extended description about the product required for installing it into Azure Stack. */
export interface ExtendedProduct {
  /**
   * The URI to the .azpkg file that provides information required for showing product in the gallery.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly galleryPackageBlobSasUri?: string;
  /**
   * Specifies the kind of the product (virtualMachine or virtualMachineExtension).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly productKind?: string;
  /**
   * Specifies kind of compute role included in the package.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly computeRole?: ComputeRole;
  /**
   * Specifies if product is a Virtual Machine Extension.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isSystemExtension?: boolean;
  /**
   * Indicates if specified product supports multiple extensions.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * Specifies product version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly versionPropertiesVersion?: string;
  /**
   * Specifies operating system used by the product.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vmOsType?: OperatingSystem;
  /**
   * Indicates if virtual machine Scale Set is enabled in the specified product.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vmScaleSetEnabled?: boolean;
  /**
   * The URI.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly uri?: string;
  /**
   * Specifies product version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * OS disk image used by product.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * List of attached data disks.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/** Product information. */
export interface VirtualMachineExtensionProductProperties {
  /**
   * Specifies kind of compute role included in the package.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly computeRole?: ComputeRole;
  /**
   * Specifies if product is a Virtual Machine Extension.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isSystemExtension?: boolean;
  /**
   * Indicates if specified product supports multiple extensions.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * Specifies product version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * Specifies operating system used by the product.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vmOsType?: OperatingSystem;
  /**
   * Indicates if virtual machine Scale Set is enabled in the specified product.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vmScaleSetEnabled?: boolean;
  /**
   * The URI.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly uri?: string;
}

/** Product information. */
export interface VirtualMachineProductProperties {
  /**
   * Specifies product version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * OS disk image used by product.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * List of attached data disks.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/** OS disk image. */
export interface OsDiskImage {
  /**
   * OS operating system type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operatingSystem?: OperatingSystem;
  /**
   * SAS key for source blob.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sourceBlobSasUri?: string;
}

/** Data disk image. */
export interface DataDiskImage {
  /**
   * The LUN.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lun?: number;
  /**
   * SAS key for source blob.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sourceBlobSasUri?: string;
}

/** Device Configuration. */
export interface DeviceConfiguration {
  /**
   * Version of the device.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly deviceVersion?: string;
  /**
   * Identity system of the device.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly identitySystem?: Category;
}

/** Update details for product log. */
export interface MarketplaceProductLogUpdate {
  /**
   * Operation to log.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * Operation status to log.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * Error related to the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: string;
  /**
   * Error details related to operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: string;
}

/** Product action log. */
export interface ProductLog {
  /**
   * Log ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Logged product ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly productId?: string;
  /**
   * Logged subscription ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subscriptionId?: string;
  /**
   * Logged registration name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registrationName?: string;
  /**
   * Logged resource group name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGroupName?: string;
  /**
   * Logged operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * Operation start datetime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startDate?: string;
  /**
   * Operation end datetime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endDate?: string;
  /**
   * Operation status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * Operation error data.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: string;
  /**
   * Operation error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: string;
}

/** Pageable list of registrations. */
export interface RegistrationList {
  /** URI to the next page. */
  nextLink?: string;
  /** List of Registrations */
  value?: Registration[];
}

/** Base resource object. */
export interface TrackedResource {
  /**
   * ID of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Type of Resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Location of the resource. */
  location: Location;
  /** Custom tags for the resource. */
  tags?: { [propertyName: string]: string };
  /** The entity tag used for optimistic concurrency when modifying the resource. */
  etag?: string;
}

/** Registration resource */
export interface RegistrationParameter {
  /** Location of the resource. */
  location: Location;
  /** The token identifying registered Azure Stack */
  registrationToken: string;
}

/** The resource containing the Azure Stack activation key. */
export interface ActivationKeyResult {
  /** Azure Stack activation key. */
  activationKey?: string;
}

/** Cloud specific manifest GET response. */
export interface CloudManifestFileResponse extends Resource {
  /** Cloud specific manifest data. */
  properties?: CloudManifestFileProperties;
}

/** Customer subscription. */
export interface CustomerSubscription extends Resource {
  /** Tenant Id. */
  tenantId?: string;
}

/** Product information. */
export interface Product extends Resource {
  /** The display name of the product. */
  displayName?: string;
  /** The description of the product. */
  description?: string;
  /** The user-friendly name of the product publisher. */
  publisherDisplayName?: string;
  /** Publisher identifier. */
  publisherIdentifier?: string;
  /** The offer representing the product. */
  offer?: string;
  /** The version of the product offer. */
  offerVersion?: string;
  /** The product SKU. */
  sku?: string;
  /** The part number used for billing purposes. */
  billingPartNumber?: string;
  /** The type of the Virtual Machine Extension. */
  vmExtensionType?: string;
  /** The identifier of the gallery item corresponding to the product. */
  galleryItemIdentity?: string;
  /** Additional links available for this product. */
  iconUris?: IconUris;
  /** Additional links available for this product. */
  links?: ProductLink[];
  /** The legal terms. */
  legalTerms?: string;
  /** The privacy policy. */
  privacyPolicy?: string;
  /** The length of product content. */
  payloadLength?: number;
  /** The kind of the product (virtualMachine or virtualMachineExtension) */
  productKind?: string;
  /** Additional properties for the product. */
  productProperties?: ProductProperties;
  /** Product compatibility with current device. */
  compatibility?: Compatibility;
}

/** Product information. */
export interface ExtendedProductProperties
  extends VirtualMachineExtensionProductProperties,
    VirtualMachineProductProperties {}

/** Registration information. */
export interface Registration extends TrackedResource {
  /** The object identifier associated with the Azure Stack connecting to Azure. */
  objectId?: string;
  /** The identifier of the registered Azure Stack. */
  cloudId?: string;
  /** Specifies the billing mode for the Azure Stack registration. */
  billingModel?: string;
}

/** Known values of {@link CompatibilityIssue} that the service accepts. */
export enum KnownCompatibilityIssue {
  /** HigherDeviceVersionRequired */
  HigherDeviceVersionRequired = "HigherDeviceVersionRequired",
  /** LowerDeviceVersionRequired */
  LowerDeviceVersionRequired = "LowerDeviceVersionRequired",
  /** CapacityBillingModelRequired */
  CapacityBillingModelRequired = "CapacityBillingModelRequired",
  /** PayAsYouGoBillingModelRequired */
  PayAsYouGoBillingModelRequired = "PayAsYouGoBillingModelRequired",
  /** DevelopmentBillingModelRequired */
  DevelopmentBillingModelRequired = "DevelopmentBillingModelRequired",
  /** AzureADIdentitySystemRequired */
  AzureADIdentitySystemRequired = "AzureADIdentitySystemRequired",
  /** AdfsIdentitySystemRequired */
  AdfsIdentitySystemRequired = "ADFSIdentitySystemRequired",
  /** ConnectionToInternetRequired */
  ConnectionToInternetRequired = "ConnectionToInternetRequired",
  /** ConnectionToAzureRequired */
  ConnectionToAzureRequired = "ConnectionToAzureRequired",
  /** DisconnectedEnvironmentRequired */
  DisconnectedEnvironmentRequired = "DisconnectedEnvironmentRequired",
}

/**
 * Defines values for CompatibilityIssue. \
 * {@link KnownCompatibilityIssue} can be used interchangeably with CompatibilityIssue,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **HigherDeviceVersionRequired** \
 * **LowerDeviceVersionRequired** \
 * **CapacityBillingModelRequired** \
 * **PayAsYouGoBillingModelRequired** \
 * **DevelopmentBillingModelRequired** \
 * **AzureADIdentitySystemRequired** \
 * **ADFSIdentitySystemRequired** \
 * **ConnectionToInternetRequired** \
 * **ConnectionToAzureRequired** \
 * **DisconnectedEnvironmentRequired**
 */
export type CompatibilityIssue = string;

/** Known values of {@link ComputeRole} that the service accepts. */
export enum KnownComputeRole {
  /** None */
  None = "None",
  /** IaaS */
  IaaS = "IaaS",
  /** PaaS */
  PaaS = "PaaS",
}

/**
 * Defines values for ComputeRole. \
 * {@link KnownComputeRole} can be used interchangeably with ComputeRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **IaaS** \
 * **PaaS**
 */
export type ComputeRole = string;

/** Known values of {@link OperatingSystem} that the service accepts. */
export enum KnownOperatingSystem {
  /** None */
  None = "None",
  /** Windows */
  Windows = "Windows",
  /** Linux */
  Linux = "Linux",
}

/**
 * Defines values for OperatingSystem. \
 * {@link KnownOperatingSystem} can be used interchangeably with OperatingSystem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Windows** \
 * **Linux**
 */
export type OperatingSystem = string;

/** Known values of {@link Category} that the service accepts. */
export enum KnownCategory {
  /** AzureAD */
  AzureAD = "AzureAD",
  /** Adfs */
  Adfs = "ADFS",
}

/**
 * Defines values for Category. \
 * {@link KnownCategory} can be used interchangeably with Category,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzureAD** \
 * **ADFS**
 */
export type Category = string;

/** Known values of {@link Location} that the service accepts. */
export enum KnownLocation {
  /** Global */
  Global = "global",
}

/**
 * Defines values for Location. \
 * {@link KnownLocation} can be used interchangeably with Location,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **global**
 */
export type Location = string;
/** Defines values for ProvisioningState. */
export type ProvisioningState =
  | "Creating"
  | "Failed"
  | "Succeeded"
  | "Canceled";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationList;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationList;

/** Optional parameters. */
export interface CloudManifestFileListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type CloudManifestFileListResponse = CloudManifestFileResponse;

/** Optional parameters. */
export interface CloudManifestFileGetOptionalParams
  extends coreClient.OperationOptions {
  /** Signing verification key version creation date. */
  versionCreationDate?: string;
}

/** Contains response data for the get operation. */
export type CloudManifestFileGetResponse = CloudManifestFileResponse;

/** Optional parameters. */
export interface DeploymentLicenseCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type DeploymentLicenseCreateResponse = DeploymentLicenseResponse;

/** Optional parameters. */
export interface CustomerSubscriptionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type CustomerSubscriptionsListResponse = CustomerSubscriptionList;

/** Optional parameters. */
export interface CustomerSubscriptionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type CustomerSubscriptionsGetResponse = CustomerSubscription;

/** Optional parameters. */
export interface CustomerSubscriptionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CustomerSubscriptionsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type CustomerSubscriptionsCreateResponse = CustomerSubscription;

/** Optional parameters. */
export interface CustomerSubscriptionsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type CustomerSubscriptionsListNextResponse = CustomerSubscriptionList;

/** Optional parameters. */
export interface ProductsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ProductsListResponse = ProductList;

/** Optional parameters. */
export interface ProductsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ProductsGetResponse = Product;

/** Optional parameters. */
export interface ProductsListDetailsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listDetails operation. */
export type ProductsListDetailsResponse = ExtendedProduct;

/** Optional parameters. */
export interface ProductsListProductsOptionalParams
  extends coreClient.OperationOptions {
  /** Device configuration. */
  deviceConfiguration?: DeviceConfiguration;
}

/** Contains response data for the listProducts operation. */
export type ProductsListProductsResponse = ProductList;

/** Optional parameters. */
export interface ProductsGetProductsOptionalParams
  extends coreClient.OperationOptions {
  /** Device configuration. */
  deviceConfiguration?: DeviceConfiguration;
}

/** Contains response data for the getProducts operation. */
export type ProductsGetProductsResponse = ProductList;

/** Optional parameters. */
export interface ProductsGetProductOptionalParams
  extends coreClient.OperationOptions {
  /** Device configuration. */
  deviceConfiguration?: DeviceConfiguration;
}

/** Contains response data for the getProduct operation. */
export type ProductsGetProductResponse = Product;

/** Optional parameters. */
export interface ProductsUploadLogOptionalParams
  extends coreClient.OperationOptions {
  /** Update details for product log. */
  marketplaceProductLogUpdate?: MarketplaceProductLogUpdate;
}

/** Contains response data for the uploadLog operation. */
export type ProductsUploadLogResponse = ProductLog;

/** Optional parameters. */
export interface ProductsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ProductsListNextResponse = ProductList;

/** Optional parameters. */
export interface RegistrationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type RegistrationsListResponse = RegistrationList;

/** Optional parameters. */
export interface RegistrationsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type RegistrationsListBySubscriptionResponse = RegistrationList;

/** Optional parameters. */
export interface RegistrationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type RegistrationsGetResponse = Registration;

/** Optional parameters. */
export interface RegistrationsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface RegistrationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type RegistrationsCreateOrUpdateResponse = Registration;

/** Optional parameters. */
export interface RegistrationsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type RegistrationsUpdateResponse = Registration;

/** Optional parameters. */
export interface RegistrationsGetActivationKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getActivationKey operation. */
export type RegistrationsGetActivationKeyResponse = ActivationKeyResult;

/** Optional parameters. */
export interface RegistrationsEnableRemoteManagementOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface RegistrationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type RegistrationsListNextResponse = RegistrationList;

/** Optional parameters. */
export interface RegistrationsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type RegistrationsListBySubscriptionNextResponse = RegistrationList;

/** Optional parameters. */
export interface AzureStackManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
