# Release History
    
## 7.0.0-beta.1 (2023-10-24)
    
**Features**

  - Added operation group NetworkSecurityPerimeterConfigurations
  - Added Interface EncryptionPropertiesDescription
  - Added Interface IotHubPropertiesDeviceStreams
  - Added Interface IotHubResourceCreateOrUpdateHeaders
  - Added Interface IotHubResourceUpdateHeaders
  - Added Interface KeyVaultKeyProperties
  - Added Interface NetworkSecurityPerimeterConfiguration
  - Added Interface NetworkSecurityPerimeterConfigurationListResult
  - Added Interface NetworkSecurityPerimeterConfigurationsGetOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsListByIotHubOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsReconcileOptionalParams
  - Added Interface NSPConfigAccessRule
  - Added Interface NSPConfigAccessRuleProperties
  - Added Interface NSPConfigAssociation
  - Added Interface NSPConfigNetworkSecurityPerimeterRule
  - Added Interface NSPConfigPerimeter
  - Added Interface NSPConfigProfile
  - Added Interface NSPProvisioningIssue
  - Added Interface NSPProvisioningIssueProperties
  - Added Interface PrivateEndpointConnectionsUpdateHeaders
  - Added Interface ProxyResource
  - Added Interface RootCertificateProperties
  - Added Type Alias IpVersion
  - Added Type Alias NetworkSecurityPerimeterConfigurationsGetResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsListByIotHubResponse
  - Added Type Alias NetworkSecurityPerimeterConfigurationsReconcileResponse
  - Interface IotHubProperties has a new optional parameter deviceStreams
  - Interface IotHubProperties has a new optional parameter encryption
  - Interface IotHubProperties has a new optional parameter ipVersion
  - Interface IotHubProperties has a new optional parameter rootCertificate
  - Add parameters of IotHubResourceUpdateHeaders to TypeAlias IotHubResourceUpdateResponse
  - Added Enum KnownIpVersion
  - Enum KnownPublicNetworkAccess has a new value SecuredByPerimeter
  - Enum KnownRoutingSource has a new value DigitalTwinChangeEvents
  - Enum KnownRoutingSource has a new value MqttBrokerMessages

**Breaking Changes**

  - Interface IotHubResourceDeleteHeaders no longer has parameter location
  - Interface PrivateEndpointConnectionsDeleteHeaders no longer has parameter location
    
    
## 6.3.0 (2023-09-15)
    
**Features**

  - Added Interface IotHubManualFailoverHeaders
  - Added Interface IotHubResourceDeleteHeaders
  - Added Interface PrivateEndpointConnectionsDeleteHeaders
  - Added Interface RoutingCosmosDBSqlApiProperties
  - Interface RoutingEndpoints has a new optional parameter cosmosDBSqlContainers
  - Added function getContinuationToken
    
    
## 6.2.0 (2022-08-18)
    
**Features**

  - Added Interface IotHubDescription
    
## 6.1.2 (2022-06-14)

**Features**

  - Bug fix
    
## 6.1.1 (2022-04-14)
    
**Features**

  - Bug fix
    
## 6.1.0 (2022-02-15)
    
**Features**

  - Added Interface SystemData
  - Added Type Alias CreatedByType
  - Interface IotHubProperties has a new optional parameter enableDataResidency
  - Type Alias IotHubDescription has a new parameter systemData
  - Added Enum KnownCreatedByType
    
    
## 6.0.0 (2021-12-17)

The package of @azure/arm-iothub is using our next generation design principles since version 6.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
