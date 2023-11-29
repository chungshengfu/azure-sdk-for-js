# Release History
    
## 5.0.0 (2023-11-29)
    
**Features**

  - Added operation group AnalysisServicesServers
  - Added Interface AnalysisServicesServerListResult
  - Added Interface AnalysisServicesServersCreateHeaders
  - Added Interface AnalysisServicesServersCreateOptionalParams
  - Added Interface AnalysisServicesServersDeleteHeaders
  - Added Interface AnalysisServicesServersDeleteOptionalParams
  - Added Interface AnalysisServicesServersDissociateGatewayOptionalParams
  - Added Interface AnalysisServicesServersGetDetailsOptionalParams
  - Added Interface AnalysisServicesServersListByResourceGroupNextOptionalParams
  - Added Interface AnalysisServicesServersListByResourceGroupOptionalParams
  - Added Interface AnalysisServicesServersListGatewayStatusOptionalParams
  - Added Interface AnalysisServicesServersListSkusForExistingExceptionHeaders
  - Added Interface AnalysisServicesServersListSkusForExistingOptionalParams
  - Added Interface AnalysisServicesServersResumeHeaders
  - Added Interface AnalysisServicesServersResumeOptionalParams
  - Added Interface AnalysisServicesServersSuspendHeaders
  - Added Interface AnalysisServicesServersSuspendOptionalParams
  - Added Interface AnalysisServicesServersUpdateHeaders
  - Added Interface AnalysisServicesServersUpdateOptionalParams
  - Added Interface AnalysisServicesServerUpdate
  - Added Interface AzureCoreFoundationsError
  - Added Interface AzureCoreFoundationsErrorResponse
  - Added Interface AzureCoreFoundationsInnerError
  - Added Interface AzureResourceManagerResourceSku
  - Added Interface AzureResourceManagerResourceSkuUpdate
  - Added Interface Sku
  - Added Interface SystemData
  - Added Interface TrackedResource
  - Added Type Alias ActionType
  - Added Type Alias AnalysisServicesServersCreateResponse
  - Added Type Alias AnalysisServicesServersDissociateGatewayResponse
  - Added Type Alias AnalysisServicesServersGetDetailsResponse
  - Added Type Alias AnalysisServicesServersListByResourceGroupNextResponse
  - Added Type Alias AnalysisServicesServersListByResourceGroupResponse
  - Added Type Alias AnalysisServicesServersListGatewayStatusResponse
  - Added Type Alias AnalysisServicesServersListSkusForExistingResponse
  - Added Type Alias AnalysisServicesServersResumeResponse
  - Added Type Alias AnalysisServicesServersSuspendResponse
  - Added Type Alias AnalysisServicesServersUpdateResponse
  - Added Type Alias CreatedByType
  - Added Type Alias Origin
  - Added Type Alias Versions
  - Interface AnalysisServicesServer has a new optional parameter sku
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter isDataAction
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownActionType
  - Added Enum KnownCreatedByType
  - Added Enum KnownOrigin
  - Added Enum KnownVersions

**Breaking Changes**

  - Removed operation group Servers
  - Class AzureAnalysisServices has a new signature
  - Interface AnalysisServicesServer no longer has parameter asAdministrators
  - Interface AnalysisServicesServer no longer has parameter backupBlobContainerUri
  - Interface AnalysisServicesServer no longer has parameter gatewayDetails
  - Interface AnalysisServicesServer no longer has parameter ipV4FirewallSettings
  - Interface AnalysisServicesServer no longer has parameter managedMode
  - Interface AnalysisServicesServer no longer has parameter querypoolConnectionMode
  - Interface AnalysisServicesServer no longer has parameter serverMonitorMode
  - Interface AnalysisServicesServer no longer has parameter skuPropertiesSku
  - Interface ErrorDetail no longer has parameter httpStatusCode
  - Interface ErrorDetail no longer has parameter subCode
  - Interface ErrorDetail no longer has parameter timeStamp
  - Interface Operation no longer has parameter properties
  - Interface OperationStatus no longer has parameter error
  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter sku
  - Interface Resource no longer has parameter tags
  - Type of parameter origin of interface Operation is changed from string to Origin
  - Type of parameter sku of interface SkuDetailsForExistingResource is changed from ResourceSku to AzureResourceManagerResourceSku
  - Class AzureAnalysisServices no longer has parameter servers
  - Removed Enum KnownSkuTier
    
## 4.1.3 (2022-11-14)

-  Bugs Fixed

## 4.1.2 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 4.1.1 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 4.1.0 (2022-06-29)
    
**Features**

  - Added Interface AnalysisServicesServer
  - Added Interface AnalysisServicesServerProperties
    
    
## 4.0.0 (2021-12-27)

The package of @azure/arm-analysisservices is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
