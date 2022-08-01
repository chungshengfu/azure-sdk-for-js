# Release History
    
## 4.0.0 (2022-08-01)
    
**Features**

  - Added operation group EventsOperations
  - Added operation group ImpactedResources
  - Added operation group Metadata
  - Added Interface AvailabilityStatusPropertiesRecentlyResolved
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface Event_2
  - Added Interface EventPropertiesAdditionalInformation
  - Added Interface EventPropertiesArticle
  - Added Interface EventPropertiesRecommendedActions
  - Added Interface EventPropertiesRecommendedActionsItem
  - Added Interface Events
  - Added Interface EventsListBySingleResourceNextOptionalParams
  - Added Interface EventsListBySingleResourceOptionalParams
  - Added Interface EventsListBySubscriptionIdNextOptionalParams
  - Added Interface EventsListBySubscriptionIdOptionalParams
  - Added Interface Faq
  - Added Interface Impact
  - Added Interface ImpactedResourceListResult
  - Added Interface ImpactedResourcesListBySubscriptionIdNextOptionalParams
  - Added Interface ImpactedResourcesListBySubscriptionIdOptionalParams
  - Added Interface ImpactedResourceStatus
  - Added Interface ImpactedServiceRegion
  - Added Interface Link
  - Added Interface LinkDisplayText
  - Added Interface MetadataEntity
  - Added Interface MetadataEntityListResult
  - Added Interface MetadataGetEntityOptionalParams
  - Added Interface MetadataListNextOptionalParams
  - Added Interface MetadataListOptionalParams
  - Added Interface MetadataSupportedValueDetail
  - Added Interface Update
  - Added Type Alias ActionType
  - Added Type Alias EventLevelValues
  - Added Type Alias EventsListBySingleResourceNextResponse
  - Added Type Alias EventsListBySingleResourceResponse
  - Added Type Alias EventsListBySubscriptionIdNextResponse
  - Added Type Alias EventsListBySubscriptionIdResponse
  - Added Type Alias EventSourceValues
  - Added Type Alias EventStatusValues
  - Added Type Alias EventTypeValues
  - Added Type Alias ImpactedResourcesListBySubscriptionIdNextResponse
  - Added Type Alias ImpactedResourcesListBySubscriptionIdResponse
  - Added Type Alias IssueNameParameter
  - Added Type Alias LevelValues
  - Added Type Alias LinkTypeValues
  - Added Type Alias MetadataGetEntityResponse
  - Added Type Alias MetadataListNextResponse
  - Added Type Alias MetadataListResponse
  - Added Type Alias Origin
  - Added Type Alias ReasonTypeValues
  - Added Type Alias Scenario
  - Interface AvailabilityStatusProperties has a new optional parameter recentlyResolved
  - Interface AvailabilityStatusProperties has a new optional parameter title
  - Interface ErrorResponse has a new optional parameter error
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter isDataAction
  - Interface Operation has a new optional parameter origin
  - Interface OperationListResult has a new optional parameter nextLink
  - Class MicrosoftResourceHealth has a new parameter eventsOperations
  - Class MicrosoftResourceHealth has a new parameter impactedResources
  - Class MicrosoftResourceHealth has a new parameter metadata
  - Added Enum KnownActionType
  - Added Enum KnownAvailabilityStateValues
  - Added Enum KnownEventLevelValues
  - Added Enum KnownEventSourceValues
  - Added Enum KnownEventStatusValues
  - Added Enum KnownEventTypeValues
  - Added Enum KnownIssueNameParameter
  - Added Enum KnownLevelValues
  - Added Enum KnownLinkTypeValues
  - Added Enum KnownOrigin
  - Added Enum KnownReasonChronicityTypes
  - Added Enum KnownReasonTypeValues
  - Added Enum KnownScenario

**Breaking Changes**

  - Operation EmergingIssues.get has a new signature
  - Interface AvailabilityStatusProperties no longer has parameter recentlyResolvedState
  - Interface ErrorResponse no longer has parameter code
  - Interface ErrorResponse no longer has parameter details
  - Interface ErrorResponse no longer has parameter message
    
    
## 3.1.0 (2022-07-14)
    
**Features**

  - Added Interface EmergingIssuesGetResult
    
## 3.0.1 (2022-04-29)

**Features**

  - Bug fix

## 3.0.0 (2021-12-22)

The package of @azure/arm-resourcehealth is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
