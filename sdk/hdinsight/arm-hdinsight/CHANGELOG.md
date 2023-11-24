# Release History
    
## 2.0.0-beta.1 (2023-11-24)
    
**Features**

  - Added Type Alias ClusterKind
  - Added Type Alias OutboundDependenciesManagedType
  - Interface NetworkProperties has a new optional parameter outboundDependenciesManagedType
  - Interface StorageAccount has a new optional parameter enableSecureChannel
  - Added Enum KnownClusterKind
  - Added Enum KnownOutboundDependenciesManagedType

**Breaking Changes**

  - Type of parameter kind of interface ClusterDefinition is changed from string to ClusterKind
    
## 1.2.1 (2023-01-10)

**Features**

  - Exposes `getContinuationToken` helper function to extract continuation token

**Bugs Fixed**

  - A series of small bug fixs relevant to authentication and apiVersion policy

## 1.2.0 (2022-08-01)

**Features**

  - Added Interface Application
  - Added Interface Cluster
  - Added Interface ClusterCreateRequestValidationParameters
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface RuntimeScriptActionDetail
  - Added Interface TrackedResource
    
## 1.1.1 (2022-04-26)

**Features**

  - Bug fix

## 1.1.0 (2021-12-29)

The package of @azure/arm-hdinsight is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
