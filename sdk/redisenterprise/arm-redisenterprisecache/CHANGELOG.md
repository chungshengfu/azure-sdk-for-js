# Release History
    
## 3.0.0-beta.1 (2023-03-29)
    
**Features**

  - Added operation group Skus
  - Added operation Databases.beginExportRdb
  - Added operation Databases.beginExportRdbAndWait
  - Added operation Databases.beginFush
  - Added operation Databases.beginFushAndWait
  - Added operation Databases.beginImportRdb
  - Added operation Databases.beginImportRdbAndWait
  - Added operation PrivateEndpointConnections.beginCreate
  - Added operation PrivateEndpointConnections.beginCreateAndWait
  - Added operation PrivateEndpointConnections.beginDelete
  - Added operation PrivateEndpointConnections.beginDeleteAndWait
  - Added operation PrivateEndpointConnections.beginUpdate
  - Added operation PrivateEndpointConnections.beginUpdateAndWait
  - Added operation PrivateEndpointConnections.listByCluster
  - Added operation RedisEnterprise.listBySubscription
  - Added Interface ClusterListResult
  - Added Interface ClusterNameParameter
  - Added Interface DatabaseCreateOrUpdate
  - Added Interface DatabaseListResult
  - Added Interface DatabasesCreateHeaders
  - Added Interface DatabasesDeleteHeaders
  - Added Interface DatabasesExportRdbHeaders
  - Added Interface DatabasesExportRdbOptionalParams
  - Added Interface DatabasesForceUnlinkHeaders
  - Added Interface DatabasesFushHeaders
  - Added Interface DatabasesFushOptionalParams
  - Added Interface DatabasesImportRdbHeaders
  - Added Interface DatabasesImportRdbOptionalParams
  - Added Interface DatabasesRegenerateKeyHeaders
  - Added Interface DatabasesUpdateHeaders
  - Added Interface ExportParameters
  - Added Interface FlushParameters
  - Added Interface ImportParameters
  - Added Interface OperationStatusResult
  - Added Interface PrivateEndpointConnectionsCreateHeaders
  - Added Interface PrivateEndpointConnectionsCreateOptionalParams
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Added Interface PrivateEndpointConnectionsListByClusterNextOptionalParams
  - Added Interface PrivateEndpointConnectionsListByClusterOptionalParams
  - Added Interface PrivateEndpointConnectionsUpdateHeaders
  - Added Interface PrivateEndpointConnectionsUpdateOptionalParams
  - Added Interface PrivateLink
  - Added Interface PrivateLinkListResult
  - Added Interface PrivateLinkResourcesListByClusterNextOptionalParams
  - Added Interface RedisEnterpriseCreateHeaders
  - Added Interface RedisEnterpriseDeleteHeaders
  - Added Interface RedisEnterpriseListBySubscriptionNextOptionalParams
  - Added Interface RedisEnterpriseListBySubscriptionOptionalParams
  - Added Interface RedisEnterpriseUpdateHeaders
  - Added Interface SkuDetails
  - Added Interface SkuDetailsListResult
  - Added Interface SkusListBySubscriptionNextOptionalParams
  - Added Interface SkusListBySubscriptionOptionalParams
  - Added Interface SkuUpdate
  - Added Interface SystemData
  - Added Type Alias ClientProtocol
  - Added Type Alias CreatedByType
  - Added Type Alias KeyType_2
  - Added Type Alias PrivateEndpointConnectionsCreateResponse
  - Added Type Alias PrivateEndpointConnectionsListByClusterNextResponse
  - Added Type Alias PrivateEndpointConnectionsListByClusterResponse
  - Added Type Alias PrivateEndpointConnectionsUpdateResponse
  - Added Type Alias PrivateLinkResourcesListByClusterNextResponse
  - Added Type Alias RedisEnterpriseListBySubscriptionNextResponse
  - Added Type Alias RedisEnterpriseListBySubscriptionResponse
  - Added Type Alias SkusListBySubscriptionNextResponse
  - Added Type Alias SkusListBySubscriptionResponse
  - Interface Cluster has a new optional parameter minTlsVersion
  - Interface ClusterUpdate has a new optional parameter skuPropertiesSku
  - Interface ClusterUpdate has a new optional parameter tagsPropertiesTags
  - Interface PrivateEndpointConnectionListResult has a new optional parameter nextLink
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface PrivateEndpointConnectionsDeleteOptionalParams has a new optional parameter updateIntervalInMs
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownClientProtocol
  - Added Enum KnownCreatedByType
  - Added Enum KnownKeyType
  - Enum KnownAofFrequency has a new value PerSecond
  - Enum KnownPrivateEndpointConnectionProvisioningState has a new value Canceled
  - Enum KnownProvisioningState has a new value Accepted
  - Enum KnownProvisioningState has a new value Provisioning
  - Enum KnownRdbFrequency has a new value Per12Hours
  - Enum KnownRdbFrequency has a new value Per6Hours
  - Enum KnownRdbFrequency has a new value PerHour
  - Enum KnownTlsVersion has a new value OnePointOne
  - Enum KnownTlsVersion has a new value OnePointTwo
  - Enum KnownTlsVersion has a new value OnePointZero

**Breaking Changes**

  - Removed operation Databases.beginExport
  - Removed operation Databases.beginExportAndWait
  - Removed operation Databases.beginImport
  - Removed operation Databases.beginImportAndWait
  - Removed operation PrivateEndpointConnections.beginPut
  - Removed operation PrivateEndpointConnections.beginPutAndWait
  - Removed operation PrivateEndpointConnections.delete
  - Removed operation PrivateEndpointConnections.list
  - Removed operation RedisEnterprise.list
  - Operation Databases.beginCreate has a new signature
  - Operation Databases.beginCreateAndWait has a new signature
  - Operation Databases.beginUpdate has a new signature
  - Operation Databases.beginUpdateAndWait has a new signature
  - Operation OperationsStatus.get has a new signature
  - Interface Cluster no longer has parameter minimumTlsVersion
  - Interface Cluster no longer has parameter privateEndpointConnections
  - Interface Cluster no longer has parameter zones
  - Interface ClusterUpdate no longer has parameter hostName
  - Interface ClusterUpdate no longer has parameter minimumTlsVersion
  - Interface ClusterUpdate no longer has parameter privateEndpointConnections
  - Interface ClusterUpdate no longer has parameter provisioningState
  - Interface ClusterUpdate no longer has parameter redisVersion
  - Interface ClusterUpdate no longer has parameter resourceState
  - Interface Database no longer has parameter clusteringPolicy
  - Interface Database no longer has parameter evictionPolicy
  - Interface Database no longer has parameter geoReplication
  - Interface Database no longer has parameter modules
  - Interface Database no longer has parameter resourceState
  - Parameter primaryKey of interface AccessKeys is now required
  - Parameter secondaryKey of interface AccessKeys is now required
  - Parameter aofEnabled of interface Persistence is now required
  - Parameter rdbEnabled of interface Persistence is now required
  - Parameter value of interface PrivateEndpointConnectionListResult is now required
  - Parameter actionsRequired of interface PrivateLinkServiceConnectionState is now required
  - Parameter description of interface PrivateLinkServiceConnectionState is now required
  - Parameter status of interface PrivateLinkServiceConnectionState is now required
  - Parameter capacity of interface Sku is now required
  - Type of parameter sku of interface ClusterUpdate is changed from Sku to SkuUpdate
  - Type of parameter clientProtocol of interface Database is changed from Protocol to ClientProtocol
  - Type of parameter keyType of interface RegenerateKeyParameters is changed from AccessKeyType to KeyType_2
  - Removed Enum KnownClusteringPolicy
  - Removed Enum KnownLinkState
  - Removed Enum KnownProtocol
  - Enum KnownAofFrequency no longer has value OneS
  - Enum KnownProvisioningState no longer has value Creating
  - Enum KnownRdbFrequency no longer has value OneH
  - Enum KnownRdbFrequency no longer has value SixH
  - Enum KnownRdbFrequency no longer has value TwelveH
  - Enum KnownTlsVersion no longer has value One0
  - Enum KnownTlsVersion no longer has value One1
  - Enum KnownTlsVersion no longer has value One2
    
    
## 2.2.0 (2022-12-07)
    
**Features**

  - Added Interface Cluster
  - Added Interface Database
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface TrackedResource
    
    
## 2.1.0 (2022-04-11)
    
**Features**

  - Added operation Databases.beginForceUnlink
  - Added operation Databases.beginForceUnlinkAndWait
  - Added Interface DatabasePropertiesGeoReplication
  - Added Interface DatabasesForceUnlinkOptionalParams
  - Added Interface ForceUnlinkParameters
  - Added Interface LinkedDatabase
  - Added Type Alias LinkState
  - Interface DatabaseUpdate has a new optional parameter geoReplication
  - Type Alias Database has a new parameter geoReplication
  - Added Enum KnownLinkState
    
    
## 2.0.0 (2022-01-20)

The package of @azure/arm-redisenterprisecache is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
