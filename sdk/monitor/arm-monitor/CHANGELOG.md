# Release History
    
## 8.0.0 (2023-11-28)
    
**Features**

  - Added operation MetricDefinitions.listAtSubscriptionScope
  - Added operation Metrics.listAtSubscriptionScope
  - Added operation Metrics.listAtSubscriptionScopePost
  - Added Interface DimensionProperties
  - Added Interface LogSpecification
  - Added Interface MetricDefinitionsListAtSubscriptionScopeOptionalParams
  - Added Interface MetricsListAtSubscriptionScopeOptionalParams
  - Added Interface MetricsListAtSubscriptionScopePostOptionalParams
  - Added Interface MetricSpecification
  - Added Interface ServiceSpecification
  - Added Interface SubscriptionScopeMetric
  - Added Interface SubscriptionScopeMetricDefinition
  - Added Interface SubscriptionScopeMetricDefinitionCollection
  - Added Interface SubscriptionScopeMetricResponse
  - Added Interface SubscriptionScopeMetricsRequestBodyParameters
  - Added Type Alias MetricAggregationType
  - Added Type Alias MetricDefinitionsListAtSubscriptionScopeResponse
  - Added Type Alias MetricResultType
  - Added Type Alias MetricsListAtSubscriptionScopePostResponse
  - Added Type Alias MetricsListAtSubscriptionScopeResponse
  - Added Type Alias Unit
  - Interface MetricsListOptionalParams has a new optional parameter autoAdjustTimegrain
  - Interface MetricsListOptionalParams has a new optional parameter validateDimensions
  - Interface MonitorClientOptionalParams has a new optional parameter apiVersion
  - Interface Operation has a new optional parameter isDataAction
  - Interface Operation has a new optional parameter serviceSpecification
  - Interface OperationDisplay has a new optional parameter description
  - Interface OperationDisplay has a new optional parameter publisher
  - Added Enum KnownMetricAggregationType
  - Added Enum KnownMetricResultType
  - Added function getContinuationToken

**Breaking Changes**

  - Removed operation group ActionGroups
  - Removed operation group ActivityLogAlerts
  - Removed operation group ActivityLogs
  - Removed operation group AlertRuleIncidents
  - Removed operation group AlertRules
  - Removed operation group AutoscaleSettings
  - Removed operation group Baselines
  - Removed operation group DataCollectionEndpoints
  - Removed operation group DataCollectionRuleAssociations
  - Removed operation group DataCollectionRules
  - Removed operation group DiagnosticSettings
  - Removed operation group DiagnosticSettingsCategory
  - Removed operation group EventCategories
  - Removed operation group LogProfiles
  - Removed operation group MetricAlerts
  - Removed operation group MetricAlertsStatus
  - Removed operation group MetricNamespaces
  - Removed operation group PrivateEndpointConnections
  - Removed operation group PrivateLinkResources
  - Removed operation group PrivateLinkScopedResources
  - Removed operation group PrivateLinkScopeOperationStatus
  - Removed operation group PrivateLinkScopes
  - Removed operation group ScheduledQueryRules
  - Removed operation group TenantActivityLogs
  - Removed operation group VMInsights
  - Class MonitorClient has a new signature
  - Type of parameter unit of interface Metric is changed from MetricUnit to Unit
  - Class MonitorClient no longer has parameter actionGroups
  - Class MonitorClient no longer has parameter activityLogAlerts
  - Class MonitorClient no longer has parameter activityLogs
  - Class MonitorClient no longer has parameter alertRuleIncidents
  - Class MonitorClient no longer has parameter alertRules
  - Class MonitorClient no longer has parameter autoscaleSettings
  - Class MonitorClient no longer has parameter baselines
  - Class MonitorClient no longer has parameter dataCollectionEndpoints
  - Class MonitorClient no longer has parameter dataCollectionRuleAssociations
  - Class MonitorClient no longer has parameter dataCollectionRules
  - Class MonitorClient no longer has parameter diagnosticSettings
  - Class MonitorClient no longer has parameter diagnosticSettingsCategory
  - Class MonitorClient no longer has parameter eventCategories
  - Class MonitorClient no longer has parameter logProfiles
  - Class MonitorClient no longer has parameter metricAlerts
  - Class MonitorClient no longer has parameter metricAlertsStatus
  - Class MonitorClient no longer has parameter metricNamespaces
  - Class MonitorClient no longer has parameter privateEndpointConnections
  - Class MonitorClient no longer has parameter privateLinkResources
  - Class MonitorClient no longer has parameter privateLinkScopedResources
  - Class MonitorClient no longer has parameter privateLinkScopeOperationStatus
  - Class MonitorClient no longer has parameter privateLinkScopes
  - Class MonitorClient no longer has parameter scheduledQueryRules
  - Class MonitorClient no longer has parameter tenantActivityLogs
  - Class MonitorClient no longer has parameter vMInsights
  - Removed Enum KnownAggregationTypeEnum
  - Removed Enum KnownAlertSeverity
  - Removed Enum KnownBaselineSensitivity
  - Removed Enum KnownConditionalOperator
  - Removed Enum KnownCreatedByType
  - Removed Enum KnownCriterionType
  - Removed Enum KnownDataStatus
  - Removed Enum KnownDynamicThresholdOperator
  - Removed Enum KnownDynamicThresholdSensitivity
  - Removed Enum KnownEnabled
  - Removed Enum KnownKnownDataCollectionEndpointProvisioningState
  - Removed Enum KnownKnownDataCollectionEndpointResourceKind
  - Removed Enum KnownKnownDataCollectionRuleAssociationProvisioningState
  - Removed Enum KnownKnownDataCollectionRuleProvisioningState
  - Removed Enum KnownKnownDataCollectionRuleResourceKind
  - Removed Enum KnownKnownDataFlowStreams
  - Removed Enum KnownKnownExtensionDataSourceStreams
  - Removed Enum KnownKnownPerfCounterDataSourceStreams
  - Removed Enum KnownKnownPublicNetworkAccessOptions
  - Removed Enum KnownKnownSyslogDataSourceFacilityNames
  - Removed Enum KnownKnownSyslogDataSourceLogLevels
  - Removed Enum KnownKnownSyslogDataSourceStreams
  - Removed Enum KnownKnownWindowsEventLogDataSourceStreams
  - Removed Enum KnownMetricTriggerType
  - Removed Enum KnownNamespaceClassification
  - Removed Enum KnownOdatatype
  - Removed Enum KnownOnboardingStatus
  - Removed Enum KnownOperator
  - Removed Enum KnownProvisioningState
  - Removed Enum KnownQueryType
  - Removed Enum KnownScaleRuleMetricDimensionOperationType
    
    
## 7.0.0 (2021-12-20)

The package of @azure/arm-monitor is using our next generation design principles since version 7.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
