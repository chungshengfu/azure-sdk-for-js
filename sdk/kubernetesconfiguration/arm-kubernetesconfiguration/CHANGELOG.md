# Release History
    
## 7.0.0-beta.1 (2024-04-11)
    
**Features**

  - Added operation Extensions.listByResourceGroup
  - Added operation Extensions.operationStatus
  - Added operation Extensions.update
  - Added operation FluxConfigurations.beginCreate
  - Added operation FluxConfigurations.beginCreateAndWait
  - Added operation FluxConfigurations.listByResourceGroup
  - Added operation FluxConfigurations.operationStatus
  - Added operation FluxConfigurations.update
  - Added operation OperationStatus.listByResourceGroup
  - Added operation SourceControlConfigurations.listByResourceGroup
  - Added Interface ExtensionListResult
  - Added Interface ExtensionsCreateHeaders
  - Added Interface ExtensionsDeleteHeaders
  - Added Interface ExtensionsListByResourceGroupNextOptionalParams
  - Added Interface ExtensionsListByResourceGroupOptionalParams
  - Added Interface ExtensionsOperationStatusOptionalParams
  - Added Interface ExtensionUpdate
  - Added Interface FluxConfigurationListResult
  - Added Interface FluxConfigurationPatchProperties
  - Added Interface FluxConfigurationsCreateHeaders
  - Added Interface FluxConfigurationsCreateOptionalParams
  - Added Interface FluxConfigurationsDeleteHeaders
  - Added Interface FluxConfigurationsListByResourceGroupNextOptionalParams
  - Added Interface FluxConfigurationsListByResourceGroupOptionalParams
  - Added Interface FluxConfigurationsOperationStatusOptionalParams
  - Added Interface FluxConfigurationUpdate
  - Added Interface ManagedServiceIdentity
  - Added Interface Operation
  - Added Interface OperationDisplay
  - Added Interface OperationListResult
  - Added Interface OperationModel
  - Added Interface OperationModelListResult
  - Added Interface OperationStatusListByResourceGroupNextOptionalParams
  - Added Interface OperationStatusListByResourceGroupOptionalParams
  - Added Interface PatchExtensionProperties
  - Added Interface Paths1B0Hq6PSubscriptionsSubscriptionidResourcegroupsResourcegroupnameProviderClusterrpClusterresourcenameClusternameProvidersMicrosoftKubernetesconfigurationExtensionsExtensionnameOperationsOperationidGetResponses200ContentApplicationJsonSchema
  - Added Interface PathsT3WamfSubscriptionsSubscriptionidResourcegroupsResourcegroupnameProviderClusterrpClusterresourcenameClusternameProvidersMicrosoftKubernetesconfigurationFluxconfigurationsFluxconfigurationnameOperationsOperationidGetResponses200ContentApplicationJsonSchema
  - Added Interface SourceControlConfigurationListResult
  - Added Interface SourceControlConfigurationsDeleteHeaders
  - Added Interface SourceControlConfigurationsListByResourceGroupNextOptionalParams
  - Added Interface SourceControlConfigurationsListByResourceGroupOptionalParams
  - Added Interface UserAssignedIdentity
  - Added Type Alias ActionType
  - Added Type Alias ExtensionsDeleteResponse
  - Added Type Alias ExtensionsListByResourceGroupNextResponse
  - Added Type Alias ExtensionsListByResourceGroupResponse
  - Added Type Alias ExtensionsOperationStatusResponse
  - Added Type Alias FluxConfigurationsCreateResponse
  - Added Type Alias FluxConfigurationsDeleteResponse
  - Added Type Alias FluxConfigurationsListByResourceGroupNextResponse
  - Added Type Alias FluxConfigurationsListByResourceGroupResponse
  - Added Type Alias FluxConfigurationsOperationStatusResponse
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias OperationStatusListByResourceGroupNextResponse
  - Added Type Alias OperationStatusListByResourceGroupResponse
  - Added Type Alias Origin
  - Added Type Alias ResourceProvisioningState
  - Added Type Alias SourceControlConfigurationsDeleteResponse
  - Added Type Alias SourceControlConfigurationsListByResourceGroupNextResponse
  - Added Type Alias SourceControlConfigurationsListByResourceGroupResponse
  - Added Type Alias Versions
  - Interface Extension has a new optional parameter autoUpgradeChannel
  - Interface FluxConfiguration has a new optional parameter reconciliationWait
  - Interface FluxConfigurationPatch has a new optional parameter properties
  - Interface PatchExtension has a new optional parameter properties
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownActionType
  - Added Enum KnownAKSIdentityType
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownOrigin
  - Added Enum KnownResourceProvisioningState
  - Added Enum KnownVersions
  - Enum KnownOperatorScopeType has a new value NameSpace
  - Enum KnownProvisioningStateType has a new value Canceled
  - Enum KnownScopeType has a new value NameSpace

**Breaking Changes**

  - Removed operation group FluxConfigOperationStatus
  - Removed operation Extensions.beginUpdate
  - Removed operation Extensions.beginUpdateAndWait
  - Removed operation Extensions.list
  - Removed operation FluxConfigurations.beginCreateOrUpdate
  - Removed operation FluxConfigurations.beginCreateOrUpdateAndWait
  - Removed operation FluxConfigurations.beginUpdate
  - Removed operation FluxConfigurations.beginUpdateAndWait
  - Removed operation FluxConfigurations.list
  - Removed operation OperationStatus.get
  - Removed operation OperationStatus.list
  - Removed operation SourceControlConfigurations.list
  - Operation SourceControlConfigurations.beginDelete has a new signature
  - Operation SourceControlConfigurations.beginDeleteAndWait has a new signature
  - Operation SourceControlConfigurations.createOrUpdate has a new signature
  - Operation SourceControlConfigurations.get has a new signature
  - Interface Extension no longer has parameter systemData
  - Interface ExtensionsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface ExtensionsUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Interface FluxConfiguration no longer has parameter reconciliationWaitDuration
  - Interface FluxConfiguration no longer has parameter systemData
  - Interface FluxConfigurationPatch no longer has parameter azureBlob
  - Interface FluxConfigurationPatch no longer has parameter bucket
  - Interface FluxConfigurationPatch no longer has parameter configurationProtectedSettings
  - Interface FluxConfigurationPatch no longer has parameter gitRepository
  - Interface FluxConfigurationPatch no longer has parameter kustomizations
  - Interface FluxConfigurationPatch no longer has parameter sourceKind
  - Interface FluxConfigurationPatch no longer has parameter suspend
  - Interface FluxConfigurationsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface FluxConfigurationsUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Interface PatchExtension no longer has parameter autoUpgradeMinorVersion
  - Interface PatchExtension no longer has parameter configurationProtectedSettings
  - Interface PatchExtension no longer has parameter configurationSettings
  - Interface PatchExtension no longer has parameter releaseTrain
  - Interface PatchExtension no longer has parameter version
  - Interface SourceControlConfiguration no longer has parameter systemData
  - Type of parameter identity of interface Extension is changed from Identity to ManagedServiceIdentity
  - Type of parameter kustomizations of interface FluxConfiguration is changed from {
        [propertyName: string]: KustomizationDefinition | null;
    } to {
        [propertyName: string]: KustomizationDefinition;
    }
  - Type of parameter statuses of interface FluxConfiguration is changed from (ObjectStatusDefinition | null)[] to ObjectStatusDefinition[]
  - Type of parameter substituteFrom of interface PostBuildDefinition is changed from (SubstituteFromDefinition | null)[] to SubstituteFromDefinition[]
  - Class SourceControlConfigurationClient no longer has parameter fluxConfigOperationStatus
  - Enum KnownOperatorScopeType no longer has value Namespace
  - Enum KnownScopeType no longer has value Namespace
    
    
## 6.1.0 (2023-09-06)
    
**Features**

  - Added Interface PostBuildDefinition
  - Added Interface SubstituteFromDefinition
  - Interface FluxConfiguration has a new optional parameter reconciliationWaitDuration
  - Interface FluxConfiguration has a new optional parameter waitForReconciliation
  - Interface KustomizationDefinition has a new optional parameter postBuild
  - Interface KustomizationDefinition has a new optional parameter wait
  - Interface KustomizationPatchDefinition has a new optional parameter postBuild
  - Interface KustomizationPatchDefinition has a new optional parameter wait
    
    
## 6.0.0 (2023-05-11)
    
**Features**

  - Added Interface AzureBlobDefinition
  - Added Interface AzureBlobPatchDefinition
  - Added Interface ManagedIdentityDefinition
  - Added Interface ManagedIdentityPatchDefinition
  - Added Interface Plan
  - Added Interface ServicePrincipalDefinition
  - Added Interface ServicePrincipalPatchDefinition
  - Interface Extension has a new optional parameter currentVersion
  - Interface Extension has a new optional parameter isSystemExtension
  - Interface Extension has a new optional parameter plan
  - Interface FluxConfiguration has a new optional parameter azureBlob
  - Interface FluxConfigurationPatch has a new optional parameter azureBlob
  - Enum KnownSourceKindType has a new value AzureBlob

**Breaking Changes**

  - Interface Extension no longer has parameter installedVersion
    
    
## 5.1.0 (2022-11-28)
    
**Features**

  - Added Interface Extension
  - Added Interface FluxConfiguration
  - Added Interface ProxyResource
  - Added Interface SourceControlConfiguration
    
    
## 5.0.0 (2022-04-06)

The package of @azure/arm-kubernetesconfiguration is using our next generation design principles since version 5.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
