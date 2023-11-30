# Release History
    
## 1.0.0-beta.2 (2023-11-30)
    
**Features**

  - Added operation group ReportResources
  - Added operation group SnapshotResources
  - Added Interface ReportResourceListResult
  - Added Interface ReportResourcesCreateOrUpdateHeaders
  - Added Interface ReportResourcesCreateOrUpdateOptionalParams
  - Added Interface ReportResourcesDeleteHeaders
  - Added Interface ReportResourcesDeleteOptionalParams
  - Added Interface ReportResourcesGetOptionalParams
  - Added Interface ReportResourcesListByTenantNextOptionalParams
  - Added Interface ReportResourcesListByTenantOptionalParams
  - Added Interface ReportResourcesUpdateHeaders
  - Added Interface ReportResourcesUpdateOptionalParams
  - Added Interface ReportResourceUpdate
  - Added Interface SnapshotResourceListResult
  - Added Interface SnapshotResourcesDownloadHeaders
  - Added Interface SnapshotResourcesDownloadOptionalParams
  - Added Interface SnapshotResourcesGetOptionalParams
  - Added Interface SnapshotResourcesListByReportResourceNextOptionalParams
  - Added Interface SnapshotResourcesListByReportResourceOptionalParams
  - Added Type Alias ReportResourcesCreateOrUpdateResponse
  - Added Type Alias ReportResourcesGetResponse
  - Added Type Alias ReportResourcesListByTenantNextResponse
  - Added Type Alias ReportResourcesListByTenantResponse
  - Added Type Alias ReportResourcesUpdateResponse
  - Added Type Alias SnapshotResourcesDownloadResponse
  - Added Type Alias SnapshotResourcesGetResponse
  - Added Type Alias SnapshotResourcesListByReportResourceNextResponse
  - Added Type Alias SnapshotResourcesListByReportResourceResponse
  - Added Type Alias Versions
  - Interface ReportResource has a new optional parameter complianceStatus
  - Interface ReportResource has a new optional parameter idPropertiesId
  - Interface ReportResource has a new optional parameter lastTriggerTime
  - Interface ReportResource has a new optional parameter nextTriggerTime
  - Interface ReportResource has a new optional parameter offerGuid
  - Interface ReportResource has a new optional parameter provisioningState
  - Interface ReportResource has a new optional parameter reportName
  - Interface ReportResource has a new optional parameter resources
  - Interface ReportResource has a new optional parameter status
  - Interface ReportResource has a new optional parameter subscriptions
  - Interface ReportResource has a new optional parameter tenantId
  - Interface ReportResource has a new optional parameter timeZone
  - Interface ReportResource has a new optional parameter triggerTime
  - Interface SnapshotResource has a new optional parameter complianceResults
  - Interface SnapshotResource has a new optional parameter createdAt
  - Interface SnapshotResource has a new optional parameter idPropertiesId
  - Interface SnapshotResource has a new optional parameter provisioningState
  - Interface SnapshotResource has a new optional parameter reportProperties
  - Interface SnapshotResource has a new optional parameter snapshotName
  - Added Enum KnownVersions

**Breaking Changes**

  - Removed operation group Report
  - Removed operation group Reports
  - Removed operation group Snapshot
  - Removed operation group Snapshots
  - Interface ReportResource no longer has parameter properties
  - Interface SnapshotResource no longer has parameter properties
  - Class AppComplianceAutomationToolForMicrosoft365 no longer has parameter report
  - Class AppComplianceAutomationToolForMicrosoft365 no longer has parameter reports
  - Class AppComplianceAutomationToolForMicrosoft365 no longer has parameter snapshot
  - Class AppComplianceAutomationToolForMicrosoft365 no longer has parameter snapshots
    
    
## 1.0.0-beta.1 (2022-10-31)

The package of @azure/arm-appcomplianceautomation is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
