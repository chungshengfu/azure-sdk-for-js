// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";
import { ErrorResponse } from "@azure-rest/core-client";

/** The items in the current page of results. */
export interface AssetResourceOutputParent {
  /** The system generated unique id for the resource. */
  readonly id: string;
  /** The caller provided unique name for the resource. */
  name?: string;
  /** The name that can be used for display purposes. */
  displayName?: string;
  /** Global UUID for the asset. */
  uuid?: string;
  /** The date this asset was first added to this workspace. */
  createdDate?: string;
  /** The date this asset was last updated for this workspace. */
  updatedDate?: string;
  state?: AssetStateOutput;
  /** An optional customer provided identifier for this asset. */
  externalId?: string;
  /** Customer labels assigned to this asset. */
  labels?: string[];
  /** An indicator of whether this asset represents a wildcard rollup of assets on this domain. */
  wildcard?: boolean;
  /** The name of the DiscoGroup that brought added this asset to the workspace. */
  discoGroupName?: string;
  /** The history of how this asset was pulled into the workspace through the discovery process. */
  auditTrail?: Array<AuditTrailItemOutput>;
  reason?: string;
  kind: string;
}

/** The history of how this asset was pulled into the workspace through the discovery process. */
export interface AuditTrailItemOutput {
  /** The system generated unique id for the resource. */
  id?: string;
  /** The caller provided unique name for the resource. */
  name?: string;
  /** The name that can be used for display purposes. */
  displayName?: string;
  /** The kind of asset. */
  kind?: AuditTrailItemKindOutput;
  /** An explanation of why this audit trail node was discovered from the previous node. */
  reason?: string;
}

export interface AsAssetResourceOutput extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "as";
  /** asset */
  asset: AsAssetOutput;
}

export interface AsAssetOutput extends InventoryAssetOutput {
  asn?: number;
  asNames?: Array<ObservedStringOutput>;
  orgNames?: Array<ObservedStringOutput>;
  orgIds?: Array<ObservedStringOutput>;
  countries?: Array<ObservedStringOutput>;
  registries?: Array<ObservedStringOutput>;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  registrarCreatedAt?: Array<ObservedLongOutput>;
  registrarUpdatedAt?: Array<ObservedLongOutput>;
  registrantContacts?: Array<ObservedStringOutput>;
  adminContacts?: Array<ObservedStringOutput>;
  technicalContacts?: Array<ObservedStringOutput>;
  registrarNames?: Array<ObservedStringOutput>;
  registrantNames?: Array<ObservedStringOutput>;
  adminNames?: Array<ObservedStringOutput>;
  technicalNames?: Array<ObservedStringOutput>;
  adminOrgs?: Array<ObservedStringOutput>;
  technicalOrgs?: Array<ObservedStringOutput>;
  registrantPhones?: Array<ObservedStringOutput>;
  adminPhones?: Array<ObservedStringOutput>;
  technicalPhones?: Array<ObservedStringOutput>;
  detailedFromWhoisAt?: string;
}

export interface ObservedStringOutput extends ObservedValueOutput {
  value?: string;
  sources?: Array<SourceOutput>;
}

export interface SourceOutput {
  source?: string;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  reason?: string;
}

/** Template model for observed values */
export interface ObservedValueOutput {
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
}

export interface ObservedLongOutput extends ObservedValueOutput {
  value?: number;
  sources?: Array<SourceOutput>;
}

export interface ObservedIntegerOutput extends ObservedValueOutput {
  value?: number;
  sources?: Array<SourceOutput>;
}

export interface ObservedBooleanOutput extends ObservedValueOutput {
  value?: boolean;
  sources?: Array<SourceOutput>;
}

export interface ObservedHeaderOutput extends ObservedValueOutput {
  headerName?: string;
  headerValue?: string;
}

export interface ObservedPortStateOutput extends ObservedValueOutput {
  value?: ObservedPortStateValueOutput;
  port?: number;
}

export interface ObservedLocationOutput extends ObservedValueOutput {
  value?: LocationOutput;
  sources?: Array<SourceOutput>;
}

export interface LocationOutput {
  countryCode?: string;
  countryName?: string;
  region?: string;
  regionName?: string;
  city?: string;
  areaCode?: number;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  dmaCode?: number;
  metroCodeId?: number;
}

export interface ObservedIntegersOutput extends ObservedValueOutput {
  values?: number[];
  sources?: Array<SourceOutput>;
}

/** A inventory base model created for swagger documentation purpose */
export interface InventoryAssetOutput {}

export interface ContactAssetOutput extends InventoryAssetOutput {
  email?: string;
  names?: Array<ObservedStringOutput>;
  organizations?: Array<ObservedStringOutput>;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
}

export interface HostAssetOutput extends InventoryAssetOutput {
  host?: string;
  domain?: string;
  ipAddresses?: Array<ObservedStringOutput>;
  webComponents?: Array<WebComponentOutput>;
  headers?: Array<ObservedHeaderOutput>;
  attributes?: Array<AttributeOutput>;
  cookies?: Array<CookieOutput>;
  sslCerts?: Array<SslCertAssetOutput>;
  parentHosts?: Array<ObservedStringOutput>;
  childHosts?: Array<ObservedStringOutput>;
  hostCore?: HostCoreOutput;
  services?: Array<ServiceOutput>;
  cnames?: Array<ObservedStringOutput>;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  resourceUrls?: Array<ResourceUrlOutput>;
  scanMetadata?: Array<ScanMetadataOutput>;
  asns?: Array<ObservedLongOutput>;
  ipBlocks?: Array<IpBlockOutput>;
  responseBodies?: Array<ObservedStringOutput>;
  domainAsset?: DomainAssetOutput;
  nsRecord?: Array<ObservedBooleanOutput>;
  mxRecord?: Array<ObservedBooleanOutput>;
  webserver?: Array<ObservedBooleanOutput>;
  location?: Array<ObservedLocationOutput>;
  nxdomain?: Array<ObservedBooleanOutput>;
  sslServerConfig?: Array<SslServerConfigOutput>;
  isWildcard?: Array<ObservedBooleanOutput>;
  banners?: Array<BannerOutput>;
  ipv4?: Array<ObservedBooleanOutput>;
  ipv6?: Array<ObservedBooleanOutput>;
}

export interface WebComponentOutput {
  name?: string;
  type?: string;
  version?: string;
  ruleId?: string[];
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  cve?: Array<CveOutput>;
  endOfLife?: number;
  recent?: boolean;
  ports?: Array<PortOutput>;
  sources?: Array<SourceOutput>;
  service?: string;
}

export interface CveOutput {
  name?: string;
  cweId?: string;
  cvssScore?: number;
  cvss3Summary?: Cvss3SummaryOutput;
}

export interface Cvss3SummaryOutput {
  version?: string;
  vectorString?: string;
  attackVector?: string;
  attackComplexity?: string;
  privilegesRequired?: string;
  userInteraction?: string;
  scope?: string;
  confidentialityImpact?: string;
  integrityImpact?: string;
  availabilityImpact?: string;
  baseScore?: number;
  baseSeverity?: string;
  exploitCodeMaturity?: string;
  remediationLevel?: string;
  reportConfidence?: string;
  exploitabilityScore?: number;
  impactScore?: number;
}

export interface PortOutput {
  port?: number;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
}

export interface AttributeOutput {
  attributeType?: string;
  attributeValue?: string;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
}

export interface CookieOutput {
  cookieName?: string;
  cookieDomain?: string;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
  cookieExpiryDate?: string;
}

export interface SslCertAssetOutput extends InventoryAssetOutput {
  sha1?: string;
  subjectCommonNames?: string[];
  organizations?: string[];
  organizationalUnits?: string[];
  issuerCommonNames?: string[];
  sigAlgName?: string;
  invalidAfter?: string;
  serialNumber?: string;
  subjectAlternativeNames?: string[];
  issuerAlternativeNames?: string[];
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  invalidBefore?: string;
  keySize?: number;
  keyAlgorithm?: string;
  subjectLocality?: string[];
  subjectState?: string[];
  subjectCountry?: string[];
  issuerLocality?: string[];
  issuerState?: string[];
  issuerCountry?: string[];
  subjectOrganizations?: string[];
  subjectOrganizationalUnits?: string[];
  issuerOrganizations?: string[];
  issuerOrganizationalUnits?: string[];
  version?: number;
  certificateAuthority?: boolean;
  selfSigned?: boolean;
  sigAlgOid?: string;
  recent?: boolean;
  validationType?: SslCertAssetValidationTypeOutput;
}

export interface HostCoreOutput {
  host?: string;
  domain?: string;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  blacklistCauseFirstSeen?: string;
  blacklistCauseLastSeen?: string;
  blacklistCauseCount?: number;
  blacklistResourceFirstSeen?: string;
  blacklistResourceLastSeen?: string;
  blacklistResourceCount?: number;
  blacklistSequenceFirstSeen?: string;
  blacklistSequenceLastSeen?: string;
  blacklistSequenceCount?: number;
  phishCauseCount?: number;
  malwareCauseCount?: number;
  spamCauseCount?: number;
  scamCauseCount?: number;
  phishResourceCount?: number;
  malwareResourceCount?: number;
  spamResourceCount?: number;
  scamResourceCount?: number;
  phishSequenceCount?: number;
  malwareSequenceCount?: number;
  spamSequenceCount?: number;
  scamSequenceCount?: number;
  alexaRank?: number;
  hostReputationScore?: number;
  hostPhishReputationScore?: number;
  hostMalwareReputationScore?: number;
  hostSpamReputationScore?: number;
  hostScamReputationScore?: number;
  domainReputationScore?: number;
  domainPhishReputationScore?: number;
  domainMalwareReputationScore?: number;
  domainSpamReputationScore?: number;
  domainScamReputationScore?: number;
  uuid?: string;
}

export interface ServiceOutput {
  scheme?: string;
  port?: number;
  webComponents?: Array<WebComponentOutput>;
  sslCerts?: Array<SslCertAssetOutput>;
  exceptions?: Array<ObservedStringOutput>;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
  portStates?: Array<ObservedPortStateOutput>;
}

export interface ResourceUrlOutput {
  url?: string;
  resources?: Array<DependentResourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
}

export interface DependentResourceOutput {
  md5?: string;
  responseBodySize?: number;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  firstSeenCrawlGuid?: string;
  firstSeenPageGuid?: string;
  firstSeenResourceGuid?: string;
  lastSeenCrawlGuid?: string;
  lastSeenPageGuid?: string;
  lastSeenResourceGuid?: string;
  responseBodyMinhash?: number[];
  contentType?: string;
  sha256?: string;
  sha384?: string;
  sha512?: string;
  url?: string;
  cached?: boolean;
  sriChecks?: Array<SubResourceIntegrityCheckOutput>;
  host?: string;
  lastObservedViolation?: string;
  lastObservedValidation?: string;
  lastObservedActualSriHash?: string;
  lastObservedExpectedSriHash?: string;
}

export interface SubResourceIntegrityCheckOutput {
  violation?: boolean;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  causePageUrl?: string;
  crawlGuid?: string;
  pageGuid?: string;
  resourceGuid?: string;
  expectedHash?: string;
}

export interface ScanMetadataOutput {
  port?: number;
  bannerMetadata?: string;
  startScan?: string;
  endScan?: string;
}

export interface IpBlockOutput {
  ipBlock?: string;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
}

export interface DomainAssetOutput {
  domain?: string;
  whoisId?: number;
  registrarIanaIds?: Array<ObservedIntegerOutput>;
  registrantContacts?: Array<ObservedStringOutput>;
  registrantOrgs?: Array<ObservedStringOutput>;
  adminContacts?: Array<ObservedStringOutput>;
  technicalContacts?: Array<ObservedStringOutput>;
  alexaInfos?: Array<AlexaInfoOutput>;
  nameServers?: Array<ObservedStringOutput>;
  mailServers?: Array<ObservedStringOutput>;
  whoisServers?: Array<ObservedStringOutput>;
  domainStatuses?: Array<ObservedStringOutput>;
  registrarCreatedAt?: Array<ObservedLongOutput>;
  registrarUpdatedAt?: Array<ObservedLongOutput>;
  registrarExpiresAt?: Array<ObservedLongOutput>;
  soaRecords?: Array<SoaRecordOutput>;
  detailedFromWhoisAt?: string;
  registrarNames?: Array<ObservedStringOutput>;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  parkedDomain?: Array<ObservedBooleanOutput>;
  registrantNames?: Array<ObservedStringOutput>;
  adminNames?: Array<ObservedStringOutput>;
  technicalNames?: Array<ObservedStringOutput>;
  adminOrgs?: Array<ObservedStringOutput>;
  technicalOrgs?: Array<ObservedStringOutput>;
  registrantPhones?: Array<ObservedStringOutput>;
  adminPhones?: Array<ObservedStringOutput>;
  technicalPhones?: Array<ObservedStringOutput>;
}

export interface AlexaInfoOutput {
  alexaRank?: number;
  category?: string;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
}

export interface SoaRecordOutput {
  nameServer?: string;
  email?: string;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  serialNumber?: number;
  recent?: boolean;
}

export interface SslServerConfigOutput {
  tlsVersions?: string[];
  cipherSuites?: string[];
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  sources?: Array<SourceOutput>;
}

export interface BannerOutput {
  port?: number;
  banner?: string;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  scanType?: string;
  bannerMetadata?: string;
  recent?: boolean;
  sha256?: string;
  sources?: Array<SourceOutput>;
}

export interface IpAddressAssetOutput extends InventoryAssetOutput {
  ipAddress?: string;
  asns?: Array<ObservedLongOutput>;
  reputations?: Array<ReputationOutput>;
  webComponents?: Array<WebComponentOutput>;
  netRanges?: Array<ObservedStringOutput>;
  headers?: Array<ObservedHeaderOutput>;
  attributes?: Array<AttributeOutput>;
  cookies?: Array<CookieOutput>;
  sslCerts?: Array<SslCertAssetOutput>;
  services?: Array<ServiceOutput>;
  ipBlocks?: Array<IpBlockOutput>;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  banners?: Array<BannerOutput>;
  scanMetadata?: Array<ScanMetadataOutput>;
  nsRecord?: Array<ObservedBooleanOutput>;
  mxRecord?: Array<ObservedBooleanOutput>;
  location?: Array<ObservedLocationOutput>;
  hosts?: Array<ObservedStringOutput>;
  nxdomain?: Array<ObservedBooleanOutput>;
  sslServerConfig?: Array<SslServerConfigOutput>;
  ipv4?: boolean;
  ipv6?: boolean;
}

export interface ReputationOutput {
  listName?: string;
  threatType?: string;
  trusted?: boolean;
  cidr?: string;
  firstSeen?: string;
  lastSeen?: string;
  listUpdatedAt?: string;
  recent?: boolean;
}

export interface IpBlockAssetOutput extends InventoryAssetOutput {
  ipBlock?: string;
  asns?: Array<ObservedLongOutput>;
  bgpPrefixes?: Array<ObservedStringOutput>;
  netNames?: Array<ObservedStringOutput>;
  registrantContacts?: Array<ObservedStringOutput>;
  registrantOrgs?: Array<ObservedStringOutput>;
  adminContacts?: Array<ObservedStringOutput>;
  technicalContacts?: Array<ObservedStringOutput>;
  registrarCreatedAt?: Array<ObservedLongOutput>;
  registrarUpdatedAt?: Array<ObservedLongOutput>;
  netRanges?: Array<ObservedStringOutput>;
  startIp?: string;
  endIp?: string;
  reputations?: Array<ReputationOutput>;
  detailedFromWhoisAt?: string;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  location?: Array<ObservedLocationOutput>;
  registrarExpiresAt?: Array<ObservedLongOutput>;
  registrantNames?: Array<ObservedStringOutput>;
  adminNames?: Array<ObservedStringOutput>;
  technicalNames?: Array<ObservedStringOutput>;
  adminOrgs?: Array<ObservedStringOutput>;
  technicalOrgs?: Array<ObservedStringOutput>;
  registrantPhones?: Array<ObservedStringOutput>;
  adminPhones?: Array<ObservedStringOutput>;
  technicalPhones?: Array<ObservedStringOutput>;
  ipv4?: boolean;
  ipv6?: boolean;
}

export interface PageAssetOutput extends InventoryAssetOutput {
  url?: string;
  httpMethod?: string;
  service?: string;
  ipAddresses?: Array<ObservedStringOutput>;
  successful?: Array<ObservedBooleanOutput>;
  httpResponseCodes?: Array<ObservedIntegerOutput>;
  httpResponseMessages?: Array<ObservedStringOutput>;
  responseTimes?: Array<ObservedLongOutput>;
  frames?: Array<ObservedBooleanOutput>;
  windows?: Array<ObservedBooleanOutput>;
  nonHtmlFrames?: Array<ObservedBooleanOutput>;
  undirectedContent?: Array<ObservedBooleanOutput>;
  contentTypes?: Array<ObservedStringOutput>;
  contentLengths?: Array<ObservedLongOutput>;
  windowNames?: Array<ObservedStringOutput>;
  charsets?: Array<ObservedStringOutput>;
  titles?: Array<ObservedStringOutput>;
  languages?: Array<ObservedStringOutput>;
  responseHeaders?: Array<ObservedHeaderOutput>;
  cookies?: Array<CookieOutput>;
  webComponents?: Array<WebComponentOutput>;
  attributes?: Array<AttributeOutput>;
  assetSecurityPolicies?: Array<AssetSecurityPolicyOutput>;
  responseBodyMinhashSignatures?: Array<ObservedIntegersOutput>;
  fullDomMinhashSignatures?: Array<ObservedIntegersOutput>;
  responseBodyHashSignatures?: Array<ObservedStringOutput>;
  errors?: Array<ObservedStringOutput>;
  sslCerts?: Array<SslCertAssetOutput>;
  sources?: Array<SourceOutput>;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  cause?: PageCauseOutput;
  referrer?: string;
  redirectUrls?: Array<ObservedStringOutput>;
  redirectType?: PageAssetRedirectTypeOutput;
  finalUrls?: Array<ObservedStringOutput>;
  finalResponseCodes?: Array<ObservedIntegerOutput>;
  parkedPage?: Array<ObservedBooleanOutput>;
  resourceUrls?: Array<ResourceUrlOutput>;
  guids?: Array<GuidPairOutput>;
  finalIpAddresses?: Array<ObservedStringOutput>;
  asns?: Array<ObservedLongOutput>;
  ipBlocks?: Array<IpBlockOutput>;
  finalAsns?: Array<ObservedLongOutput>;
  finalIpBlocks?: Array<IpBlockOutput>;
  responseBodies?: Array<ObservedStringOutput>;
  domainAsset?: DomainAssetOutput;
  rootUrl?: ObservedBooleanOutput;
  isRootUrl?: boolean;
  location?: Array<ObservedLocationOutput>;
  services?: Array<ServiceOutput>;
  siteStatus?: string;
  cnames?: Array<ObservedStringOutput>;
  cdns?: Array<ObservedStringOutput>;
  host?: string;
  domain?: string;
  sslServerConfig?: Array<SslServerConfigOutput>;
  gdprAssetSecurityPolicies?: Array<AssetSecurityPolicyOutput>;
  ipv4?: Array<ObservedBooleanOutput>;
  ipv6?: Array<ObservedBooleanOutput>;
}

export interface AssetSecurityPolicyOutput {
  policyName?: string;
  isAffected?: boolean;
  description?: string;
  firstSeen?: string;
  lastSeen?: string;
  count?: number;
  recent?: boolean;
  sources?: Array<SourceOutput>;
}

export interface PageCauseOutput {
  cause?: string;
  causeElementXPath?: string;
  location?: string;
  possibleMatches?: number;
  loopDetected?: boolean;
  version?: number;
  domChangeIndex?: number;
}

export interface GuidPairOutput {
  pageGuid?: string;
  crawlStateGuid?: string;
  loadDate?: string;
  recent?: boolean;
}

export interface ContactAssetResourceOutput extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "contact";
  /** asset */
  asset: ContactAssetOutput;
}

export interface DomainAssetResourceOutput extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "domain";
  /** asset */
  asset: DomainAssetOutput;
}

export interface HostAssetResourceOutput extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "host";
  /** asset */
  asset: HostAssetOutput;
}

export interface IpAddressAssetResourceOutput
  extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "ipAddress";
  /** asset */
  asset: IpAddressAssetOutput;
}

export interface IpBlockAssetResourceOutput extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "ipBlock";
  /** asset */
  asset: IpBlockAssetOutput;
}

export interface PageAssetResourceOutput extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "page";
  /** asset */
  asset: PageAssetOutput;
}

export interface SslCertAssetResourceOutput extends AssetResourceOutputParent {
  /** The kind of AssetResource */
  kind: "sslCert";
  /** asset */
  asset: SslCertAssetOutput;
}

export interface TaskOutput {
  /** The unique identifier of the task. */
  readonly id: string;
  /** The time the task started. */
  startedAt?: string;
  /** The time the task completed. */
  completedAt?: string;
  /** The last time the status of the task was updated. */
  lastPolledAt?: string;
  /** The state the task is in. */
  state?: TaskStateOutput;
  /** The phase the task is in. */
  phase?: TaskPhaseOutput;
  /** The reason the task was moved into its current state, if the task wasn't completed. */
  reason?: string;
  /** Attributes unique to the task.  This differs by task type. */
  metadata?: TypeSpecRecordOutput;
}

export interface TypeSpecRecordOutput extends Record<string, any> {}

export interface AzureCoreTraitsOutput {}

export interface ObservationPageResultOutput {
  totalElements: number;
  prioritySummary: TypeSpecRecordOutput;
  value: Array<ObservationResultOutput>;
}

export interface TypeSpecRecordOutput extends Record<string, number> {}

export interface ObservationResultOutput {
  name: string;
  type: ObservationTypeOutput[];
  priority: ObservationPriorityOutput;
  cvssScoreV2: number;
  cvssScoreV3: number;
}

export interface DeltaPageResultOutput {
  /** The total number of items available in the full result set. */
  totalElements?: number;
  /** The link to access the next page of results.  Not set if at the end of the result set. */
  nextLink?: string;
  /** The items in the current page of results. */
  value?: Array<DeltaResultOutput>;
}

export interface DeltaResultOutput {
  /** Shows the asset kind */
  kind: GlobalAssetTypeOutput;
  /** Shows the asset name */
  name: string;
  /** Shows the date when the asset was originally created */
  createdAt: string;
  /** Shows the date when the asset was last updated, usually the date the we trying to pull up the results for */
  updatedAt: string;
  /** Shows the inventory state */
  state: GlobalInventoryStateOutput;
}

export interface DeltaSummaryResultOutput {
  /** Contains added, removed, and difference values for the whole range either 7 or 30 days */
  summary: DeltaRangeResultOutput;
  /** Contains added, removed, count, and difference values for each day */
  daily: Array<DeltaDateResultOutput>;
}

export interface DeltaRangeResultOutput {
  /** The range of dates requested */
  range: number;
  /** The total amount of assets removed over a date range */
  removed: number;
  /** The total amount of assets added over a date range */
  added: number;
  /** The total amount of assets changed removed over a date range */
  difference: number;
  /** A list of summary changes per asset kind */
  kindSummaries: Array<DeltaTypeResponseOutput>;
}

export interface DeltaTypeResponseOutput {
  /** The kind of asset */
  kind: GlobalAssetTypeOutput;
  /** The amount of assets removed for one asset kind */
  removed: number;
  /** The amount of assets added for one asset kind */
  added: number;
  /** The amount of assets changed for one asset kind */
  difference: number;
}

export interface DailyDeltaTypeResponseOutput extends DeltaTypeResponseOutput {
  /** The current number of assets for one asset kind */
  count: number;
}

export interface DeltaDateResultOutput {
  /** The date that is being requested */
  date: string;
  /** A list of summary counts per day */
  deltas: Array<DailyDeltaTypeResponseOutput>;
}

export interface DataConnectionOutputParent {
  /** The system generated unique id for the resource. */
  id?: string;
  /** The caller provided unique name for the resource. */
  readonly name: string;
  /** The name that can be used for display purposes. */
  displayName?: string;
  /** The type of data the data connection will transfer */
  content?: DataConnectionContentOutput;
  /** The date the data connection was created. */
  readonly createdDate?: string;
  /** The rate at which the data connection will receive updates. */
  frequency?: DataConnectionFrequencyOutput;
  /** The day to update the data connection on. */
  frequencyOffset?: number;
  /** The date the data connection was last updated. */
  readonly updatedDate?: string;
  /** The date the data connection was last updated by user. */
  readonly userUpdatedAt?: string;
  /** An indicator of whether the data connection is active. */
  active?: boolean;
  /** A message that specifies details about data connection if inactive. */
  readonly inactiveMessage?: string;
  kind: string;
}

export interface LogAnalyticsDataConnectionOutput
  extends DataConnectionOutputParent {
  /** The kind of DataConnection */
  kind: "logAnalytics";
  /** properties */
  properties: LogAnalyticsDataConnectionPropertiesOutput;
}

export interface LogAnalyticsDataConnectionPropertiesOutput
  extends DataConnectionPropertiesOutput {
  /** log analytics api key */
  apiKey?: string;
  /** log analytics workspace id */
  workspaceId?: string;
}

/** The properties required to establish connection to a particular service */
export interface DataConnectionPropertiesOutput {}

export interface AzureDataExplorerDataConnectionPropertiesOutput
  extends DataConnectionPropertiesOutput {
  /** The azure data explorer cluster name */
  clusterName?: string;
  /** The azure data explorer region */
  region?: string;
  /** The azure data explorer database name */
  databaseName?: string;
}

export interface AzureDataExplorerDataConnectionOutput
  extends DataConnectionOutputParent {
  /** The kind of DataConnection */
  kind: "azureDataExplorer";
  /** properties */
  properties: AzureDataExplorerDataConnectionPropertiesOutput;
}

/** Validate result for validate action endpoints */
export interface ValidateResultOutput {
  /** This is the top-level error object whose code matches the x-ms-error-code response header. */
  error?: ErrorDetailOutput;
}

/** This is the top-level error object whose code matches the x-ms-error-code response header. */
export interface ErrorDetailOutput {
  /** This is one of a server-defined set of error codes. */
  code: string;
  /** This is a human-readable representation of the error. */
  message: string;
  /** This is the error target. */
  target?: string;
  /** This is an array of details about specific errors that led to this reported error. */
  details?: Array<ErrorDetailOutput>;
  /** This is an object containing more specific information than the current object about the error. */
  innererror?: InnerErrorOutput;
}

/** This is an object containing more specific information than the current object about the error. */
export interface InnerErrorOutput {
  /** This is a more specific error code than was provided by the containing error. */
  code?: string;
  /** This is an additional field representing the value that caused the error to help with debugging. */
  value?: any;
}

export interface DiscoGroupOutput {
  /** The system generated unique id for the resource. */
  id?: string;
  /** The caller provided unique name for the resource. */
  readonly name: string;
  /** The name that can be used for display purposes. */
  displayName?: string;
  /** The description for a disco group. */
  description?: string;
  /** The tier for the disco group which will affect the algorithm used for the disco runs in this group. */
  tier?: string;
  /** The frequency at which the disco group is supposed to be rerun in milliseconds. */
  frequencyMilliseconds?: number;
  /** The list of seeds used for the disco group runs. */
  seeds?: Array<DiscoSourceOutput>;
  /** The list of names used for the disco group runs. */
  names?: string[];
  /** The list of excludes used for the disco group runs, aka assets to exclude from the discovery algorithm. */
  excludes?: Array<DiscoSourceOutput>;
  /** The latest run of this disco group with some limited information, null if the group has never been run. */
  latestRun?: DiscoRunResultOutput;
  /** The date for the disco group was created. */
  createdDate?: string;
  /** The unique identifier for the disco template used for the disco group creation. */
  templateId?: string;
}

/** Source entity used to drive discovery. */
export interface DiscoSourceOutput {
  /** The kind of disco source. */
  kind?: DiscoSourceKindOutput;
  /** The name for the disco source. */
  name?: string;
}

/** The latest run of this disco group with some limited information, null if the group has never been run. */
export interface DiscoRunResultOutput {
  /** The date for when the disco run was created in the system. */
  submittedDate?: string;
  /** The date for when the disco run was actually started by the system. */
  startedDate?: string;
  /** The date for when the disco run was completed by the system. */
  completedDate?: string;
  /** The tier which will affect the algorithm used for the disco run. */
  tier?: string;
  /** The State of the disco run. */
  state?: DiscoRunStateOutput;
  /** The total count of assets that were found this disco run. */
  totalAssetsFoundCount?: number;
  /** The list of seeds used for the disco run. */
  seeds?: Array<DiscoSourceOutput>;
  /** The list of excludes used for the disco run, aka assets to exclude from the discovery algorithm. */
  excludes?: Array<DiscoSourceOutput>;
  /** The list of names used for the disco run. */
  names?: string[];
}

export interface DiscoRunPageResultOutput {
  /** The total number of items available in the full result set. */
  totalElements?: number;
  /** The link to access the next page of results.  Not set if at the end of the result set. */
  nextLink?: string;
  /** The items in the current page of results. */
  value?: Array<DiscoRunResultOutput>;
}

/** Response for the asset chain summary. */
export interface AssetChainSummaryResultOutput {
  /** A list of asset chain summaries per asset kind */
  affectedAssetsSummary: Array<AssetChainKindSummaryResultOutput>;
  /** A list of disco group summaries */
  affectedGroupsSummary: Array<DiscoGroupSummaryResultOutput>;
  /** The list of exceptions */
  errors?: Array<ErrorResponse>;
}

/** A list of asset chain summaries per asset kind */
export interface AssetChainKindSummaryResultOutput {
  /** The kind of asset */
  kind: AssetKindOutput;
  /** The amount of assets affected for a given asset kind */
  affectedCount: number;
}

/** A list of disco group summaries */
export interface DiscoGroupSummaryResultOutput {
  /** The system generated unique id for the resource. */
  id: string;
  /** The caller provided unique name for the resource. */
  name: string;
  /** The name that can be used for display purposes. */
  displayName: string;
}

/** The items in the current page of results. */
export interface DiscoTemplateOutput {
  /** The system generated unique id for the resource. */
  readonly id: string;
  /** The caller provided unique name for the resource. */
  name?: string;
  /** The name that can be used for display purposes. */
  displayName?: string;
  /** The name of the industry. */
  industry?: string;
  /** The name of the region. */
  region?: string;
  /** The country code. */
  countryCode?: string;
  /** The state code. */
  stateCode?: string;
  /** The name of the city. */
  city?: string;
  /** The list of disco template seeds. */
  seeds?: Array<DiscoSourceOutput>;
  /** The list of disco template names. */
  names?: string[];
}

export interface ReportBillableAssetSummaryResultOutput {
  assetSummaries?: Array<ReportBillableAssetSnapshotResultOutput>;
}

export interface ReportBillableAssetSnapshotResultOutput {
  /** The date these assets were billed on. */
  date?: string;
  /** The total number of billable assets for this date. */
  total?: number;
  /** The breakdown of billable asset counts for each asset type. */
  assetBreakdown?: Array<ReportBillableAssetBreakdownOutput>;
}

/** The breakdown of billable asset counts for each asset type. */
export interface ReportBillableAssetBreakdownOutput {
  /** The kind of billable asset. */
  kind?: ReportBillableAssetBreakdownKindOutput;
  /** The number of assets of this type. */
  count?: number;
}

/** A snapshot of assets captured daily for the provided metric.  Asset details only contain primary properties.  Detailed asset data can be retrieved from the asset endpoints. */
export interface ReportAssetSnapshotResultOutput {
  /** The name of the metric. */
  displayName?: string;
  /** The unique metric name. */
  metric?: string;
  /** The customer label that was filtered on, if one was provided. */
  labelName?: string;
  /** The last time this asset data was updated on this metric. */
  updatedAt?: string;
  /** A description of what the metric represents. */
  description?: string;
  /** The page of assets that match the provided metric. */
  assets?: AssetPageResultOutput;
}

/** The page of assets that match the provided metric. */
export interface AssetPageResultOutput {
  /** The total number of items available in the full result set. */
  totalElements?: number;
  /** The cursor mark to be used on the next request.  Not set if using paging. */
  mark?: string;
  /** The link to access the next page of results.  Not set if at the end of the result set. */
  nextLink?: string;
  /** The items in the current page of results. */
  value?: Array<AssetResourceOutput>;
}

export interface ReportAssetSummaryResultOutput {
  /** The collection of asset summaries. */
  assetSummaries?: Array<AssetSummaryResultOutput>;
}

/** The collection of asset summaries. */
export interface AssetSummaryResultOutput {
  /** The name of the summary response.  Depending on the request time this will either be the asset filter, risk category, or risk metric. */
  displayName?: string;
  /** The description of the summary response.  Filters don't have a description. */
  description?: string;
  /** The last time risk categories or risk metrics were captured. Set to the current time for asset filter requests, which always pull the live asset data. */
  updatedAt?: string;
  /** If the request is for a metric category, this will contain the requested unique category name. */
  metricCategory?: string;
  /** If the request is for a metric, this will contain the requested unique metric name. */
  metric?: string;
  /** If the request is for an asset filter, this will contain the corresponding filter. */
  filter?: string;
  /** An optional label used to filter requests results. */
  labelName?: string;
  /** The count of assets matching the request parameters. */
  count?: number;
  /** The link to the corresponding asset details. */
  link?: string;
  /** The corresponding child entities.  For metric categories this will contain metrics.  For filters with groupBy and segmentBy this will contain facets. */
  children?: Array<AssetSummaryResultOutput>;
}

export interface SavedFilterOutput {
  /** The system generated unique id for the resource. */
  id?: string;
  /** The caller provided unique name for the resource. */
  readonly name: string;
  /** The name that can be used for display purposes. */
  displayName?: string;
  filter?: string;
  description?: string;
}

/** cisa cve in a given workspace. */
export interface CisaCveResultOutput {
  /** The CVE ID of the vulnerability in the format CVE-YYYY-NNNN, note that the number portion can have more than 4 digits. */
  readonly cveId: string;
  /** The vendor or project name for the vulnerability. */
  vendorProject: string;
  /** The vulnerability product */
  product: string;
  /** The name of the vulnerability */
  vulnerabilityName: string;
  /** A short description of the vulnerability */
  shortDescription: string;
  /** The required action to address the vulnerability */
  requiredAction: string;
  /** Any additional notes about the vulnerability */
  notes: string;
  /** The date the vulnerability was added to the catalog in the format YYYY-MM-DD */
  dateAdded: string;
  /** The date the required action is due in the format YYYY-MM-DD */
  dueDate: string;
  /** The date the vulnerability was updated */
  updatedAt: string;
  /** The number of assets affected by the vulnerability */
  count: number;
}

/** The items in the current page of results. */
export type AssetResourceOutput =
  | AssetResourceOutputParent
  | AsAssetResourceOutput
  | ContactAssetResourceOutput
  | DomainAssetResourceOutput
  | HostAssetResourceOutput
  | IpAddressAssetResourceOutput
  | IpBlockAssetResourceOutput
  | PageAssetResourceOutput
  | SslCertAssetResourceOutput;
export type DataConnectionOutput =
  | DataConnectionOutputParent
  | LogAnalyticsDataConnectionOutput
  | AzureDataExplorerDataConnectionOutput;
/** Alias for AssetUpdateStateOutput */
export type AssetUpdateStateOutput =
  | string
  | "candidate"
  | "confirmed"
  | "dismissed"
  | "candidateInvestigate"
  | "associatedPartner"
  | "associatedThirdparty";
/** Alias for AssetStateOutput */
export type AssetStateOutput = string | AssetUpdateStateOutput | "archived";
/** Alias for AuditTrailItemKindOutput */
export type AuditTrailItemKindOutput =
  | string
  | "as"
  | "contact"
  | "domain"
  | "host"
  | "ipAddress"
  | "ipBlock"
  | "page"
  | "sslCert";
/** Alias for ObservedPortStateValueOutput */
export type ObservedPortStateValueOutput =
  | string
  | "open"
  | "closed"
  | "filtered";
/** Alias for SslCertAssetValidationTypeOutput */
export type SslCertAssetValidationTypeOutput =
  | string
  | "domainValidation"
  | "organizationValidation"
  | "extendedValidation";
/** Alias for PageAssetRedirectTypeOutput */
export type PageAssetRedirectTypeOutput =
  | string
  | "httpHeader"
  | "metaRefresh"
  | "javascript"
  | "final";
/** Paged collection of AssetResource items */
export type PagedAssetResourceOutput = Paged<AssetResourceOutput>;
/** Alias for TaskStateOutput */
export type TaskStateOutput =
  | string
  | "pending"
  | "running"
  | "paused"
  | "complete"
  | "incomplete"
  | "failed"
  | "warning";
/** Alias for TaskPhaseOutput */
export type TaskPhaseOutput = string | "running" | "polling" | "complete";
/** Alias for ObservationTypeOutput */
export type ObservationTypeOutput = string | "cve" | "insight";
/** Alias for ObservationPriorityOutput */
export type ObservationPriorityOutput =
  | string
  | "high"
  | "medium"
  | "low"
  | "none";
/** Alias for GlobalAssetTypeOutput */
export type GlobalAssetTypeOutput =
  | string
  | "page"
  | "resource"
  | "mailServer"
  | "nameServer"
  | "host"
  | "domain"
  | "ipAddress"
  | "ipBlock"
  | "as"
  | "contact"
  | "sslCert";
/** Alias for GlobalInventoryStateOutput */
export type GlobalInventoryStateOutput =
  | string
  | "candidate"
  | "candidateInvestigate"
  | "confirmed"
  | "associated"
  | "associatedPartner"
  | "associatedThirdParty"
  | "archived"
  | "dismissed"
  | "autoconfirmed";
/** Alias for DataConnectionContentOutput */
export type DataConnectionContentOutput =
  | string
  | "assets"
  | "attackSurfaceInsights";
/** Alias for DataConnectionFrequencyOutput */
export type DataConnectionFrequencyOutput =
  | string
  | "daily"
  | "weekly"
  | "monthly";
/** Paged collection of DataConnection items */
export type PagedDataConnectionOutput = Paged<DataConnectionOutput>;
/** Alias for DiscoSourceKindOutput */
export type DiscoSourceKindOutput =
  | string
  | "as"
  | "attribute"
  | "contact"
  | "domain"
  | "host"
  | "ipBlock";
/** Alias for DiscoRunStateOutput */
export type DiscoRunStateOutput =
  | string
  | "pending"
  | "running"
  | "completed"
  | "failed";
/** Paged collection of DiscoGroup items */
export type PagedDiscoGroupOutput = Paged<DiscoGroupOutput>;
/** Alias for AssetKindOutput */
export type AssetKindOutput =
  | string
  | "as"
  | "contact"
  | "domain"
  | "host"
  | "ipAddress"
  | "ipBlock"
  | "page"
  | "sslCert";
/** Paged collection of DiscoTemplate items */
export type PagedDiscoTemplateOutput = Paged<DiscoTemplateOutput>;
/** Alias for ReportBillableAssetBreakdownKindOutput */
export type ReportBillableAssetBreakdownKindOutput =
  | string
  | "domain"
  | "host"
  | "ipAddress";
/** Paged collection of SavedFilter items */
export type PagedSavedFilterOutput = Paged<SavedFilterOutput>;
/** Paged collection of Task items */
export type PagedTaskOutput = Paged<TaskOutput>;
/** Paged collection of CisaCveResult items */
export type PagedCisaCveResultOutput = Paged<CisaCveResultOutput>;
