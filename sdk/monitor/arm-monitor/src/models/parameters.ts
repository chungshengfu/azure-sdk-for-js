/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  AutoscaleSettingResource as AutoscaleSettingResourceMapper,
  AutoscaleSettingResourcePatch as AutoscaleSettingResourcePatchMapper,
  AlertRuleResource as AlertRuleResourceMapper,
  AlertRuleResourcePatch as AlertRuleResourcePatchMapper,
  LogProfileResource as LogProfileResourceMapper,
  LogProfileResourcePatch as LogProfileResourcePatchMapper,
  DiagnosticSettingsResource as DiagnosticSettingsResourceMapper,
  ActionGroupResource as ActionGroupResourceMapper,
  ActionGroupPatchBody as ActionGroupPatchBodyMapper,
  NotificationRequestBody as NotificationRequestBodyMapper,
  EnableRequest as EnableRequestMapper,
  TenantActionGroupResource as TenantActionGroupResourceMapper,
  ActionGroupPatchBodyAutoGenerated as ActionGroupPatchBodyAutoGeneratedMapper,
  MetricAlertResource as MetricAlertResourceMapper,
  MetricAlertResourcePatch as MetricAlertResourcePatchMapper,
  ScheduledQueryRuleResource as ScheduledQueryRuleResourceMapper,
  ScheduledQueryRuleResourcePatch as ScheduledQueryRuleResourcePatchMapper,
  AzureMonitorPrivateLinkScope as AzureMonitorPrivateLinkScopeMapper,
  TagsResource as TagsResourceMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  ScopedResource as ScopedResourceMapper,
  ActivityLogAlertResource as ActivityLogAlertResourceMapper,
  AlertRulePatchObject as AlertRulePatchObjectMapper,
  DataCollectionEndpointResource as DataCollectionEndpointResourceMapper,
  ResourceForUpdate as ResourceForUpdateMapper,
  DataCollectionRuleAssociationProxyOnlyResource as DataCollectionRuleAssociationProxyOnlyResourceMapper,
  DataCollectionRuleResource as DataCollectionRuleResourceMapper,
  AzureMonitorWorkspaceResource as AzureMonitorWorkspaceResourceMapper,
  AzureMonitorWorkspaceResourceForUpdate as AzureMonitorWorkspaceResourceForUpdateMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: AutoscaleSettingResourceMapper
};

export const autoscaleSettingName: OperationURLParameter = {
  parameterPath: "autoscaleSettingName",
  mapper: {
    serializedName: "autoscaleSettingName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const autoscaleSettingResource: OperationParameter = {
  parameterPath: "autoscaleSettingResource",
  mapper: AutoscaleSettingResourcePatchMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const timespan: OperationQueryParameter = {
  parameterPath: "timespan",
  mapper: {
    serializedName: "timespan",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const interval: OperationQueryParameter = {
  parameterPath: "interval",
  mapper: {
    serializedName: "interval",
    required: true,
    type: {
      name: "TimeSpan"
    }
  }
};

export const metricNamespace: OperationQueryParameter = {
  parameterPath: "metricNamespace",
  mapper: {
    serializedName: "metricNamespace",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const metricName: OperationQueryParameter = {
  parameterPath: "metricName",
  mapper: {
    serializedName: "metricName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const aggregation: OperationQueryParameter = {
  parameterPath: "aggregation",
  mapper: {
    serializedName: "aggregation",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2015-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const ruleName: OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    serializedName: "ruleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const incidentName: OperationURLParameter = {
  parameterPath: "incidentName",
  mapper: {
    serializedName: "incidentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2016-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: AlertRuleResourceMapper
};

export const alertRulesResource: OperationParameter = {
  parameterPath: "alertRulesResource",
  mapper: AlertRuleResourcePatchMapper
};

export const logProfileName: OperationURLParameter = {
  parameterPath: "logProfileName",
  mapper: {
    serializedName: "logProfileName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: LogProfileResourceMapper
};

export const logProfilesResource: OperationParameter = {
  parameterPath: "logProfilesResource",
  mapper: LogProfileResourcePatchMapper
};

export const resourceUri: OperationURLParameter = {
  parameterPath: "resourceUri",
  mapper: {
    serializedName: "resourceUri",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-05-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: DiagnosticSettingsResourceMapper
};

export const actionGroup: OperationParameter = {
  parameterPath: "actionGroup",
  mapper: ActionGroupResourceMapper
};

export const actionGroupName: OperationURLParameter = {
  parameterPath: "actionGroupName",
  mapper: {
    serializedName: "actionGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion4: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const actionGroupPatch: OperationParameter = {
  parameterPath: "actionGroupPatch",
  mapper: ActionGroupPatchBodyMapper
};

export const notificationRequest: OperationParameter = {
  parameterPath: "notificationRequest",
  mapper: NotificationRequestBodyMapper
};

export const notificationId: OperationURLParameter = {
  parameterPath: "notificationId",
  mapper: {
    serializedName: "notificationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const enableRequest: OperationParameter = {
  parameterPath: "enableRequest",
  mapper: EnableRequestMapper
};

export const actionGroup1: OperationParameter = {
  parameterPath: "actionGroup",
  mapper: TenantActionGroupResourceMapper
};

export const managementGroupId: OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    serializedName: "managementGroupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tenantActionGroupName: OperationURLParameter = {
  parameterPath: "tenantActionGroupName",
  mapper: {
    serializedName: "tenantActionGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const xMsClientTenantId: OperationParameter = {
  parameterPath: "xMsClientTenantId",
  mapper: {
    serializedName: "x-ms-client-tenant-id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion5: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-03-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const tenantActionGroupPatch: OperationParameter = {
  parameterPath: "tenantActionGroupPatch",
  mapper: ActionGroupPatchBodyAutoGeneratedMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const filter1: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const apiVersion6: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const metricnamespace: OperationQueryParameter = {
  parameterPath: ["options", "metricnamespace"],
  mapper: {
    serializedName: "metricnamespace",
    type: {
      name: "String"
    }
  }
};

export const timespan1: OperationQueryParameter = {
  parameterPath: ["options", "timespan"],
  mapper: {
    serializedName: "timespan",
    type: {
      name: "String"
    }
  }
};

export const interval1: OperationQueryParameter = {
  parameterPath: ["options", "interval"],
  mapper: {
    serializedName: "interval",
    type: {
      name: "TimeSpan"
    }
  }
};

export const metricnames: OperationQueryParameter = {
  parameterPath: ["options", "metricnames"],
  mapper: {
    serializedName: "metricnames",
    type: {
      name: "String"
    }
  }
};

export const aggregation1: OperationQueryParameter = {
  parameterPath: ["options", "aggregation"],
  mapper: {
    serializedName: "aggregation",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "top",
    type: {
      name: "Number"
    }
  }
};

export const orderby: OperationQueryParameter = {
  parameterPath: ["options", "orderby"],
  mapper: {
    serializedName: "orderby",
    type: {
      name: "String"
    }
  }
};

export const resultType: OperationQueryParameter = {
  parameterPath: ["options", "resultType"],
  mapper: {
    serializedName: "resultType",
    type: {
      name: "Enum",
      allowedValues: ["Data", "Metadata"]
    }
  }
};

export const sensitivities: OperationQueryParameter = {
  parameterPath: ["options", "sensitivities"],
  mapper: {
    serializedName: "sensitivities",
    type: {
      name: "String"
    }
  }
};

export const apiVersion7: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const apiVersion8: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: MetricAlertResourceMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: MetricAlertResourcePatchMapper
};

export const statusName: OperationURLParameter = {
  parameterPath: "statusName",
  mapper: {
    serializedName: "statusName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion9: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-08-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ScheduledQueryRuleResourceMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ScheduledQueryRuleResourcePatchMapper
};

export const apiVersion10: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2017-12-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const startTime: OperationQueryParameter = {
  parameterPath: ["options", "startTime"],
  mapper: {
    serializedName: "startTime",
    type: {
      name: "String"
    }
  }
};

export const apiVersion11: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-11-27-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const apiVersion12: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const scopeName: OperationURLParameter = {
  parameterPath: "scopeName",
  mapper: {
    serializedName: "scopeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const azureMonitorPrivateLinkScopePayload: OperationParameter = {
  parameterPath: "azureMonitorPrivateLinkScopePayload",
  mapper: AzureMonitorPrivateLinkScopeMapper
};

export const privateLinkScopeTags: OperationParameter = {
  parameterPath: "privateLinkScopeTags",
  mapper: TagsResourceMapper
};

export const asyncOperationId: OperationURLParameter = {
  parameterPath: "asyncOperationId",
  mapper: {
    serializedName: "asyncOperationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: ScopedResourceMapper
};

export const activityLogAlertRule: OperationParameter = {
  parameterPath: "activityLogAlertRule",
  mapper: ActivityLogAlertResourceMapper
};

export const activityLogAlertName: OperationURLParameter = {
  parameterPath: "activityLogAlertName",
  mapper: {
    serializedName: "activityLogAlertName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion13: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const activityLogAlertRulePatch: OperationParameter = {
  parameterPath: "activityLogAlertRulePatch",
  mapper: AlertRulePatchObjectMapper
};

export const apiVersion14: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-06-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const dataCollectionEndpointName: OperationURLParameter = {
  parameterPath: "dataCollectionEndpointName",
  mapper: {
    serializedName: "dataCollectionEndpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataCollectionEndpointResourceMapper
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: ResourceForUpdateMapper
};

export const resourceUri1: OperationURLParameter = {
  parameterPath: "resourceUri",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "resourceUri",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const dataCollectionRuleName: OperationURLParameter = {
  parameterPath: "dataCollectionRuleName",
  mapper: {
    serializedName: "dataCollectionRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const associationName: OperationURLParameter = {
  parameterPath: "associationName",
  mapper: {
    serializedName: "associationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataCollectionRuleAssociationProxyOnlyResourceMapper
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: DataCollectionRuleResourceMapper
};

export const apiVersion15: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-06-03-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const azureMonitorWorkspaceName: OperationURLParameter = {
  parameterPath: "azureMonitorWorkspaceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^(?!-)[a-zA-Z0-9-]+[^-]$")
    },
    serializedName: "azureMonitorWorkspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const azureMonitorWorkspaceProperties: OperationParameter = {
  parameterPath: "azureMonitorWorkspaceProperties",
  mapper: AzureMonitorWorkspaceResourceMapper
};

export const azureMonitorWorkspaceProperties1: OperationParameter = {
  parameterPath: ["options", "azureMonitorWorkspaceProperties"],
  mapper: AzureMonitorWorkspaceResourceForUpdateMapper
};
