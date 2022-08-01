/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AvailabilityStatusListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatusListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailabilityStatus"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvailabilityStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatus",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AvailabilityStatusProperties"
        }
      }
    }
  }
};

export const AvailabilityStatusProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatusProperties",
    modelProperties: {
      availabilityState: {
        serializedName: "availabilityState",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      summary: {
        serializedName: "summary",
        type: {
          name: "String"
        }
      },
      detailedStatus: {
        serializedName: "detailedStatus",
        type: {
          name: "String"
        }
      },
      reasonType: {
        serializedName: "reasonType",
        type: {
          name: "String"
        }
      },
      rootCauseAttributionTime: {
        serializedName: "rootCauseAttributionTime",
        type: {
          name: "DateTime"
        }
      },
      healthEventType: {
        serializedName: "healthEventType",
        type: {
          name: "String"
        }
      },
      healthEventCause: {
        serializedName: "healthEventCause",
        type: {
          name: "String"
        }
      },
      healthEventCategory: {
        serializedName: "healthEventCategory",
        type: {
          name: "String"
        }
      },
      healthEventId: {
        serializedName: "healthEventId",
        type: {
          name: "String"
        }
      },
      resolutionETA: {
        serializedName: "resolutionETA",
        type: {
          name: "DateTime"
        }
      },
      occuredTime: {
        serializedName: "occuredTime",
        type: {
          name: "DateTime"
        }
      },
      reasonChronicity: {
        serializedName: "reasonChronicity",
        type: {
          name: "String"
        }
      },
      reportedTime: {
        serializedName: "reportedTime",
        type: {
          name: "DateTime"
        }
      },
      recentlyResolved: {
        serializedName: "recentlyResolved",
        type: {
          name: "Composite",
          className: "AvailabilityStatusPropertiesRecentlyResolved"
        }
      },
      recommendedActions: {
        serializedName: "recommendedActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecommendedAction"
            }
          }
        }
      },
      serviceImpactingEvents: {
        serializedName: "serviceImpactingEvents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceImpactingEvent"
            }
          }
        }
      }
    }
  }
};

export const AvailabilityStatusPropertiesRecentlyResolved: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityStatusPropertiesRecentlyResolved",
    modelProperties: {
      unavailableOccuredTime: {
        serializedName: "unavailableOccuredTime",
        type: {
          name: "DateTime"
        }
      },
      resolvedTime: {
        serializedName: "resolvedTime",
        type: {
          name: "DateTime"
        }
      },
      unavailableSummary: {
        serializedName: "unavailableSummary",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecommendedAction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecommendedAction",
    modelProperties: {
      action: {
        serializedName: "action",
        type: {
          name: "String"
        }
      },
      actionUrl: {
        serializedName: "actionUrl",
        type: {
          name: "String"
        }
      },
      actionUrlText: {
        serializedName: "actionUrlText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceImpactingEvent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceImpactingEvent",
    modelProperties: {
      eventStartTime: {
        serializedName: "eventStartTime",
        type: {
          name: "DateTime"
        }
      },
      eventStatusLastModifiedTime: {
        serializedName: "eventStatusLastModifiedTime",
        type: {
          name: "DateTime"
        }
      },
      correlationId: {
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Composite",
          className: "ServiceImpactingEventStatus"
        }
      },
      incidentProperties: {
        serializedName: "incidentProperties",
        type: {
          name: "Composite",
          className: "ServiceImpactingEventIncidentProperties"
        }
      }
    }
  }
};

export const ServiceImpactingEventStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceImpactingEventStatus",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceImpactingEventIncidentProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceImpactingEventIncidentProperties",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      service: {
        serializedName: "service",
        type: {
          name: "String"
        }
      },
      region: {
        serializedName: "region",
        type: {
          name: "String"
        }
      },
      incidentType: {
        serializedName: "incidentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Events: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Events",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Event"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventPropertiesArticle: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventPropertiesArticle",
    modelProperties: {
      articleContent: {
        serializedName: "articleContent",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Link: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Link",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      displayText: {
        serializedName: "displayText",
        type: {
          name: "Composite",
          className: "LinkDisplayText"
        }
      },
      extensionName: {
        serializedName: "extensionName",
        type: {
          name: "String"
        }
      },
      bladeName: {
        serializedName: "bladeName",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const LinkDisplayText: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkDisplayText",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Impact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Impact",
    modelProperties: {
      impactedService: {
        serializedName: "impactedService",
        type: {
          name: "String"
        }
      },
      impactedRegions: {
        serializedName: "impactedRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImpactedServiceRegion"
            }
          }
        }
      }
    }
  }
};

export const ImpactedServiceRegion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImpactedServiceRegion",
    modelProperties: {
      impactedRegion: {
        serializedName: "impactedRegion",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      impactedSubscriptions: {
        serializedName: "impactedSubscriptions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      lastUpdateTime: {
        serializedName: "lastUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      updates: {
        serializedName: "updates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Update"
            }
          }
        }
      }
    }
  }
};

export const Update: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Update",
    modelProperties: {
      summary: {
        serializedName: "summary",
        type: {
          name: "String"
        }
      },
      updateDateTime: {
        serializedName: "updateDateTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const EventPropertiesRecommendedActions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventPropertiesRecommendedActions",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      actions: {
        serializedName: "actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EventPropertiesRecommendedActionsItem"
            }
          }
        }
      },
      localeCode: {
        serializedName: "localeCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventPropertiesRecommendedActionsItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventPropertiesRecommendedActionsItem",
    modelProperties: {
      groupId: {
        serializedName: "groupId",
        type: {
          name: "Number"
        }
      },
      actionText: {
        serializedName: "actionText",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Faq: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Faq",
    modelProperties: {
      question: {
        serializedName: "question",
        type: {
          name: "String"
        }
      },
      answer: {
        serializedName: "answer",
        type: {
          name: "String"
        }
      },
      localeCode: {
        serializedName: "localeCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventPropertiesAdditionalInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventPropertiesAdditionalInformation",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StatusBanner: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StatusBanner",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String"
        }
      },
      lastModifiedTime: {
        serializedName: "lastModifiedTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const StatusActiveEvent: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StatusActiveEvent",
    modelProperties: {
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      trackingId: {
        serializedName: "trackingId",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String"
        }
      },
      severity: {
        serializedName: "severity",
        type: {
          name: "String"
        }
      },
      stage: {
        serializedName: "stage",
        type: {
          name: "String"
        }
      },
      published: {
        serializedName: "published",
        type: {
          name: "Boolean"
        }
      },
      lastModifiedTime: {
        serializedName: "lastModifiedTime",
        type: {
          name: "DateTime"
        }
      },
      impacts: {
        serializedName: "impacts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmergingIssueImpact"
            }
          }
        }
      }
    }
  }
};

export const EmergingIssueImpact: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmergingIssueImpact",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      regions: {
        serializedName: "regions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImpactedRegion"
            }
          }
        }
      }
    }
  }
};

export const ImpactedRegion: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImpactedRegion",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EmergingIssueListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmergingIssueListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EmergingIssuesGetResult"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImpactedResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImpactedResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImpactedResourceStatus"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetadataEntityListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataEntityListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataEntity"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetadataSupportedValueDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataSupportedValueDetail",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Event: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Event",
    modelProperties: {
      ...Resource.type.modelProperties,
      eventType: {
        serializedName: "properties.eventType",
        type: {
          name: "String"
        }
      },
      eventSource: {
        serializedName: "properties.eventSource",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "properties.title",
        type: {
          name: "String"
        }
      },
      summary: {
        serializedName: "properties.summary",
        type: {
          name: "String"
        }
      },
      header: {
        serializedName: "properties.header",
        type: {
          name: "String"
        }
      },
      level: {
        serializedName: "properties.level",
        type: {
          name: "String"
        }
      },
      eventLevel: {
        serializedName: "properties.eventLevel",
        type: {
          name: "String"
        }
      },
      article: {
        serializedName: "properties.article",
        type: {
          name: "Composite",
          className: "EventPropertiesArticle"
        }
      },
      links: {
        serializedName: "properties.links",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Link"
            }
          }
        }
      },
      impactStartTime: {
        serializedName: "properties.impactStartTime",
        type: {
          name: "DateTime"
        }
      },
      impactMitigationTime: {
        serializedName: "properties.impactMitigationTime",
        type: {
          name: "DateTime"
        }
      },
      impact: {
        serializedName: "properties.impact",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Impact"
            }
          }
        }
      },
      recommendedActions: {
        serializedName: "properties.recommendedActions",
        type: {
          name: "Composite",
          className: "EventPropertiesRecommendedActions"
        }
      },
      faqs: {
        serializedName: "properties.faqs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Faq"
            }
          }
        }
      },
      isHIR: {
        serializedName: "properties.isHIR",
        type: {
          name: "Boolean"
        }
      },
      enableMicrosoftSupport: {
        serializedName: "properties.enableMicrosoftSupport",
        type: {
          name: "Boolean"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      platformInitiated: {
        serializedName: "properties.platformInitiated",
        type: {
          name: "Boolean"
        }
      },
      enableChatWithUs: {
        serializedName: "properties.enableChatWithUs",
        type: {
          name: "Boolean"
        }
      },
      priority: {
        serializedName: "properties.priority",
        type: {
          name: "Number"
        }
      },
      lastUpdateTime: {
        serializedName: "properties.lastUpdateTime",
        type: {
          name: "DateTime"
        }
      },
      hirStage: {
        serializedName: "properties.hirStage",
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "properties.duration",
        type: {
          name: "Number"
        }
      },
      impactType: {
        serializedName: "properties.impactType",
        type: {
          name: "String"
        }
      },
      additionalInformation: {
        serializedName: "properties.additionalInformation",
        type: {
          name: "Composite",
          className: "EventPropertiesAdditionalInformation"
        }
      }
    }
  }
};

export const EmergingIssuesGetResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EmergingIssuesGetResult",
    modelProperties: {
      ...Resource.type.modelProperties,
      refreshTimestamp: {
        serializedName: "properties.refreshTimestamp",
        type: {
          name: "DateTime"
        }
      },
      statusBanners: {
        serializedName: "properties.statusBanners",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StatusBanner"
            }
          }
        }
      },
      statusActiveEvents: {
        serializedName: "properties.statusActiveEvents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StatusActiveEvent"
            }
          }
        }
      }
    }
  }
};

export const ImpactedResourceStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImpactedResourceStatus",
    modelProperties: {
      ...Resource.type.modelProperties,
      availabilityState: {
        serializedName: "properties.availabilityState",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "properties.title",
        type: {
          name: "String"
        }
      },
      summary: {
        serializedName: "properties.summary",
        type: {
          name: "String"
        }
      },
      reasonType: {
        serializedName: "properties.reasonType",
        type: {
          name: "String"
        }
      },
      occuredTime: {
        serializedName: "properties.occuredTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const MetadataEntity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataEntity",
    modelProperties: {
      ...Resource.type.modelProperties,
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      dependsOn: {
        serializedName: "properties.dependsOn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      applicableScenarios: {
        serializedName: "properties.applicableScenarios",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      supportedValues: {
        serializedName: "properties.supportedValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataSupportedValueDetail"
            }
          }
        }
      }
    }
  }
};
