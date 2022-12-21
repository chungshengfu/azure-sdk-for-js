/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ManagementGroupGovernanceRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ManagementGroupGovernanceRulesGetOptionalParams,
  ManagementGroupGovernanceRulesGetResponse,
  GovernanceRule,
  ManagementGroupGovernanceRulesCreateOrUpdateOptionalParams,
  ManagementGroupGovernanceRulesCreateOrUpdateResponse,
  ManagementGroupGovernanceRulesDeleteOptionalParams,
  ManagementGroupGovernanceRulesDeleteResponse
} from "../models";

/** Class containing ManagementGroupGovernanceRules operations. */
export class ManagementGroupGovernanceRulesImpl
  implements ManagementGroupGovernanceRules {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class ManagementGroupGovernanceRules class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Get a specific governance rule for the requested scope by ruleId
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  get(
    ruleId: string,
    options?: ManagementGroupGovernanceRulesGetOptionalParams
  ): Promise<ManagementGroupGovernanceRulesGetResponse> {
    return this.client.sendOperationRequest(
      { ruleId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates governance rule on the given management group
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param governanceRule Governance rule over a given scope
   * @param options The options parameters.
   */
  createOrUpdate(
    ruleId: string,
    governanceRule: GovernanceRule,
    options?: ManagementGroupGovernanceRulesCreateOrUpdateOptionalParams
  ): Promise<ManagementGroupGovernanceRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { ruleId, governanceRule, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete a Governance rule over a given scope
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  async beginDelete(
    ruleId: string,
    options?: ManagementGroupGovernanceRulesDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagementGroupGovernanceRulesDeleteResponse>,
      ManagementGroupGovernanceRulesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagementGroupGovernanceRulesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { ruleId, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Governance rule over a given scope
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    ruleId: string,
    options?: ManagementGroupGovernanceRulesDeleteOptionalParams
  ): Promise<ManagementGroupGovernanceRulesDeleteResponse> {
    const poller = await this.beginDelete(ruleId, options);
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Security/governanceRules/{ruleId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion18],
  urlParameters: [
    Parameters.$host,
    Parameters.ruleId,
    Parameters.managementGroupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Security/governanceRules/{ruleId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRule
    },
    201: {
      bodyMapper: Mappers.GovernanceRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.governanceRule,
  queryParameters: [Parameters.apiVersion18],
  urlParameters: [
    Parameters.$host,
    Parameters.ruleId,
    Parameters.managementGroupId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Security/governanceRules/{ruleId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ManagementGroupGovernanceRulesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.ManagementGroupGovernanceRulesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.ManagementGroupGovernanceRulesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.ManagementGroupGovernanceRulesDeleteHeaders
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion18],
  urlParameters: [
    Parameters.$host,
    Parameters.ruleId,
    Parameters.managementGroupId
  ],
  serializer
};
