# Release History
    
## 2.0.0 (2024-01-12)
    
**Features**

  - Interface QuotaRequestDetails has a new optional parameter error
  - Interface QuotaRequestDetails has a new optional parameter message
  - Interface QuotaRequestDetails has a new optional parameter provisioningState
  - Interface QuotaRequestDetails has a new optional parameter requestSubmitTime
  - Interface QuotaRequestDetails has a new optional parameter value
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter currentValue
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter error
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter isQuotaApplicable
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter limit
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter message
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter namePropertiesName
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter provisioningState
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter quotaPeriod
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter requestSubmitTime
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter resourceType
  - Interface QuotaRequestOneResourceSubmitResponse has a new optional parameter unit
  - Interface QuotaRequestSubmitResponse202 has a new optional parameter limit
  - Interface QuotaRequestSubmitResponse202 has a new optional parameter message
  - Interface QuotaRequestSubmitResponse202 has a new optional parameter namePropertiesName
  - Interface QuotaRequestSubmitResponse202 has a new optional parameter provisioningState
  - Interface QuotaRequestSubmitResponse202 has a new optional parameter quotaPeriod
  - Interface QuotaRequestSubmitResponse202 has a new optional parameter resourceType
  - Interface QuotaRequestSubmitResponse202 has a new optional parameter unit

**Breaking Changes**

  - Interface QuotaRequestDetails no longer has parameter properties
  - Type of parameter properties of interface QuotaRequestOneResourceSubmitResponse is changed from QuotaRequestOneResourceProperties to Record<string, unknown>
  - Type of parameter properties of interface QuotaRequestSubmitResponse202 is changed from QuotaRequestStatusDetails to Record<string, unknown>
    
    
## 1.0.0 (2023-11-23)

The package of @azure/arm-quota is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
