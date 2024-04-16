# Release History
    
## 2.0.0 (2024-04-16)
    
**Features**

  - Added operation ApiDefinitions.exportSpecification
  - Added operation ApiDefinitions.importSpecification
  - Added operation Services.exportMetadataSchema
  - Added Interface ApiCollection
  - Added Interface ApiDefinitionCollection
  - Added Interface ApiVersionCollection
  - Added Interface DeploymentCollection
  - Added Interface EnvironmentCollection
  - Added Interface MetadataSchemaCollection
  - Added Interface ServiceCollection
  - Added Interface WorkspaceCollection
  - Interface Api has a new optional parameter contacts
  - Interface Api has a new optional parameter customProperties
  - Interface Api has a new optional parameter description
  - Interface Api has a new optional parameter externalDocumentation
  - Interface Api has a new optional parameter kind
  - Interface Api has a new optional parameter license
  - Interface Api has a new optional parameter lifecycleStage
  - Interface Api has a new optional parameter summary
  - Interface Api has a new optional parameter termsOfService
  - Interface Api has a new optional parameter title
  - Interface ApiDefinition has a new optional parameter description
  - Interface ApiDefinition has a new optional parameter specification
  - Interface ApiDefinition has a new optional parameter title
  - Interface ApiVersion has a new optional parameter lifecycleStage
  - Interface ApiVersion has a new optional parameter title
  - Interface AzureAPICenterOptionalParams has a new optional parameter filter
  - Interface Deployment has a new optional parameter customProperties
  - Interface Deployment has a new optional parameter definitionId
  - Interface Deployment has a new optional parameter description
  - Interface Deployment has a new optional parameter environmentId
  - Interface Deployment has a new optional parameter server
  - Interface Deployment has a new optional parameter state
  - Interface Deployment has a new optional parameter title
  - Interface Environment has a new optional parameter customProperties
  - Interface Environment has a new optional parameter description
  - Interface Environment has a new optional parameter kind
  - Interface Environment has a new optional parameter onboarding
  - Interface Environment has a new optional parameter server
  - Interface Environment has a new optional parameter title
  - Interface MetadataSchema has a new optional parameter assignedTo
  - Interface MetadataSchema has a new optional parameter schema
  - Interface Service has a new optional parameter provisioningState
  - Interface ServicesCreateOrUpdateOptionalParams has a new optional parameter payload
  - Interface ServicesUpdateOptionalParams has a new optional parameter payload
  - Interface ServiceUpdate has a new optional parameter provisioningState
  - Interface Workspace has a new optional parameter description
  - Interface Workspace has a new optional parameter title

**Breaking Changes**

  - Removed operation ApiDefinitions.beginExportSpecification
  - Removed operation ApiDefinitions.beginExportSpecificationAndWait
  - Removed operation ApiDefinitions.beginImportSpecification
  - Removed operation ApiDefinitions.beginImportSpecificationAndWait
  - Removed operation Services.beginExportMetadataSchema
  - Removed operation Services.beginExportMetadataSchemaAndWait
  - Operation ApiDefinitions.createOrUpdate has a new signature
  - Operation ApiDefinitions.delete has a new signature
  - Operation ApiDefinitions.get has a new signature
  - Operation ApiDefinitions.head has a new signature
  - Operation ApiDefinitions.list has a new signature
  - Operation Apis.createOrUpdate has a new signature
  - Operation Apis.delete has a new signature
  - Operation Apis.get has a new signature
  - Operation Apis.head has a new signature
  - Operation Apis.list has a new signature
  - Operation ApiVersions.createOrUpdate has a new signature
  - Operation ApiVersions.delete has a new signature
  - Operation ApiVersions.get has a new signature
  - Operation ApiVersions.head has a new signature
  - Operation ApiVersions.list has a new signature
  - Operation Deployments.createOrUpdate has a new signature
  - Operation Deployments.delete has a new signature
  - Operation Deployments.get has a new signature
  - Operation Deployments.head has a new signature
  - Operation Deployments.list has a new signature
  - Operation Environments.createOrUpdate has a new signature
  - Operation Environments.delete has a new signature
  - Operation Environments.get has a new signature
  - Operation Environments.head has a new signature
  - Operation Environments.list has a new signature
  - Operation MetadataSchemas.createOrUpdate has a new signature
  - Operation MetadataSchemas.delete has a new signature
  - Operation MetadataSchemas.get has a new signature
  - Operation MetadataSchemas.head has a new signature
  - Operation Services.createOrUpdate has a new signature
  - Operation Services.update has a new signature
  - Operation Workspaces.createOrUpdate has a new signature
  - Operation Workspaces.delete has a new signature
  - Operation Workspaces.get has a new signature
  - Operation Workspaces.head has a new signature
  - Class AzureAPICenter has a new signature
  - Interface Api no longer has parameter properties
  - Interface ApiDefinition no longer has parameter properties
  - Interface ApiDefinitionsExportSpecificationOptionalParams no longer has parameter resumeFrom
  - Interface ApiDefinitionsExportSpecificationOptionalParams no longer has parameter updateIntervalInMs
  - Interface ApiDefinitionsImportSpecificationOptionalParams no longer has parameter resumeFrom
  - Interface ApiDefinitionsImportSpecificationOptionalParams no longer has parameter updateIntervalInMs
  - Interface ApiDefinitionsListOptionalParams no longer has parameter filter
  - Interface ApisListOptionalParams no longer has parameter filter
  - Interface ApiVersion no longer has parameter properties
  - Interface ApiVersionsListOptionalParams no longer has parameter filter
  - Interface Deployment no longer has parameter properties
  - Interface DeploymentsListOptionalParams no longer has parameter filter
  - Interface Environment no longer has parameter properties
  - Interface EnvironmentsListOptionalParams no longer has parameter filter
  - Interface MetadataSchema no longer has parameter properties
  - Interface MetadataSchemasListOptionalParams no longer has parameter filter
  - Interface Service no longer has parameter properties
  - Interface ServicesExportMetadataSchemaOptionalParams no longer has parameter resumeFrom
  - Interface ServicesExportMetadataSchemaOptionalParams no longer has parameter updateIntervalInMs
  - Interface ServiceUpdate no longer has parameter identity
  - Interface ServiceUpdate no longer has parameter tags
  - Interface Workspace no longer has parameter properties
  - Interface WorkspacesListOptionalParams no longer has parameter filter
  - Removed Enum KnownVersions
    
    
## 1.0.0 (2024-02-21)

The package of @azure/arm-apicenter is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
