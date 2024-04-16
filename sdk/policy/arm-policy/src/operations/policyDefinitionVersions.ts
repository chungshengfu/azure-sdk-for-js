/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PolicyDefinitionVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PolicyClient } from "../policyClient";
import {
  PolicyDefinitionVersion,
  PolicyDefinitionVersionsListNextOptionalParams,
  PolicyDefinitionVersionsListOptionalParams,
  PolicyDefinitionVersionsListResponse,
  PolicyDefinitionVersionsListBuiltInNextOptionalParams,
  PolicyDefinitionVersionsListBuiltInOptionalParams,
  PolicyDefinitionVersionsListBuiltInResponse,
  PolicyDefinitionVersionsListByManagementGroupNextOptionalParams,
  PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  PolicyDefinitionVersionsListByManagementGroupResponse,
  PolicyDefinitionVersionsListAllBuiltinsOptionalParams,
  PolicyDefinitionVersionsListAllBuiltinsResponse,
  PolicyDefinitionVersionsListAllAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsListAllAtManagementGroupResponse,
  PolicyDefinitionVersionsListAllOptionalParams,
  PolicyDefinitionVersionsListAllResponse,
  PolicyDefinitionVersionsCreateOrUpdateOptionalParams,
  PolicyDefinitionVersionsCreateOrUpdateResponse,
  PolicyDefinitionVersionsDeleteOptionalParams,
  PolicyDefinitionVersionsGetOptionalParams,
  PolicyDefinitionVersionsGetResponse,
  PolicyDefinitionVersionsGetBuiltInOptionalParams,
  PolicyDefinitionVersionsGetBuiltInResponse,
  PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupResponse,
  PolicyDefinitionVersionsDeleteAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsGetAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsGetAtManagementGroupResponse,
  PolicyDefinitionVersionsListNextResponse,
  PolicyDefinitionVersionsListBuiltInNextResponse,
  PolicyDefinitionVersionsListByManagementGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PolicyDefinitionVersions operations. */
export class PolicyDefinitionVersionsImpl implements PolicyDefinitionVersions {
  private readonly client: PolicyClient;

  /**
   * Initialize a new instance of the class PolicyDefinitionVersions class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyClient) {
    this.client = client;
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition.
   * @param options The options parameters.
   */
  public list(
    options?: PolicyDefinitionVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinitionVersion> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: PolicyDefinitionVersionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyDefinitionVersion[]> {
    let result: PolicyDefinitionVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: PolicyDefinitionVersionsListOptionalParams,
  ): AsyncIterableIterator<PolicyDefinitionVersion> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the built-in policy definition versions for the given policy
   * definition.
   * @param options The options parameters.
   */
  public listBuiltIn(
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinitionVersion> {
    const iter = this.listBuiltInPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBuiltInPagingPage(options, settings);
      },
    };
  }

  private async *listBuiltInPagingPage(
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyDefinitionVersion[]> {
    let result: PolicyDefinitionVersionsListBuiltInResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBuiltIn(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBuiltInNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBuiltInPagingAll(
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
  ): AsyncIterableIterator<PolicyDefinitionVersion> {
    for await (const page of this.listBuiltInPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition in the given management group.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByManagementGroup(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinitionVersion> {
    const iter = this.listByManagementGroupPagingAll(
      managementGroupName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByManagementGroupPagingPage(
          managementGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByManagementGroupPagingPage(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyDefinitionVersion[]> {
    let result: PolicyDefinitionVersionsListByManagementGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByManagementGroup(managementGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByManagementGroupNext(
        managementGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByManagementGroupPagingAll(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  ): AsyncIterableIterator<PolicyDefinitionVersion> {
    for await (const page of this.listByManagementGroupPagingPage(
      managementGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * This operation lists all the built-in policy definition versions for all built-in policy
   * definitions.
   * @param options The options parameters.
   */
  listAllBuiltins(
    options?: PolicyDefinitionVersionsListAllBuiltinsOptionalParams,
  ): Promise<PolicyDefinitionVersionsListAllBuiltinsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAllBuiltinsOperationSpec,
    );
  }

  /**
   * This operation lists all the policy definition versions for all policy definitions at the management
   * group scope.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param options The options parameters.
   */
  listAllAtManagementGroup(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsListAllAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsListAllAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, options },
      listAllAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation lists all the policy definition versions for all policy definitions within a
   * subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: PolicyDefinitionVersionsListAllOptionalParams,
  ): Promise<PolicyDefinitionVersionsListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * This operation creates or updates a policy definition in the given subscription with the given name.
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    parameters: PolicyDefinitionVersion,
    options?: PolicyDefinitionVersionsCreateOrUpdateOptionalParams,
  ): Promise<PolicyDefinitionVersionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * This operation deletes the policy definition version in the given subscription with the given name.
   * @param options The options parameters.
   */
  delete(
    options?: PolicyDefinitionVersionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest({ options }, deleteOperationSpec);
  }

  /**
   * This operation retrieves the policy definition version in the given subscription with the given
   * name.
   * @param options The options parameters.
   */
  get(
    options?: PolicyDefinitionVersionsGetOptionalParams,
  ): Promise<PolicyDefinitionVersionsGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }

  /**
   * This operation retrieves the built-in policy definition version with the given name.
   * @param options The options parameters.
   */
  getBuiltIn(
    options?: PolicyDefinitionVersionsGetBuiltInOptionalParams,
  ): Promise<PolicyDefinitionVersionsGetBuiltInResponse> {
    return this.client.sendOperationRequest(
      { options },
      getBuiltInOperationSpec,
    );
  }

  /**
   * This operation creates or updates a policy definition version in the given management group with the
   * given name.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    managementGroupName: string,
    parameters: PolicyDefinitionVersion,
    options?: PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, parameters, options },
      createOrUpdateAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation deletes the policy definition in the given management group with the given name.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsDeleteAtManagementGroupOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { managementGroupName, options },
      deleteAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation retrieves the policy definition version in the given management group with the given
   * name.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsGetAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsGetAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, options },
      getAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition.
   * @param options The options parameters.
   */
  private _list(
    options?: PolicyDefinitionVersionsListOptionalParams,
  ): Promise<PolicyDefinitionVersionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * This operation retrieves a list of all the built-in policy definition versions for the given policy
   * definition.
   * @param options The options parameters.
   */
  private _listBuiltIn(
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
  ): Promise<PolicyDefinitionVersionsListBuiltInResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBuiltInOperationSpec,
    );
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition in the given management group.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByManagementGroup(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsListByManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, options },
      listByManagementGroupOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PolicyDefinitionVersionsListNextOptionalParams,
  ): Promise<PolicyDefinitionVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListBuiltInNext
   * @param nextLink The nextLink from the previous successful call to the ListBuiltIn method.
   * @param options The options parameters.
   */
  private _listBuiltInNext(
    nextLink: string,
    options?: PolicyDefinitionVersionsListBuiltInNextOptionalParams,
  ): Promise<PolicyDefinitionVersionsListBuiltInNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBuiltInNextOperationSpec,
    );
  }

  /**
   * ListByManagementGroupNext
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByManagementGroup method.
   * @param options The options parameters.
   */
  private _listByManagementGroupNext(
    managementGroupName: string,
    nextLink: string,
    options?: PolicyDefinitionVersionsListByManagementGroupNextOptionalParams,
  ): Promise<PolicyDefinitionVersionsListByManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, nextLink, options },
      listByManagementGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAllBuiltinsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/listPolicyDefinitionVersions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/listPolicyDefinitionVersions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.managementGroupName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/listPolicyDefinitionVersions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    201: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName1,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName1,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName1,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getBuiltInOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.policyDefinitionName1,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    201: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupName,
    Parameters.policyDefinitionName1,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupName,
    Parameters.policyDefinitionName1,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupName,
    Parameters.policyDefinitionName1,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBuiltInOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.policyDefinitionName1],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupName,
    Parameters.policyDefinitionName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBuiltInNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.policyDefinitionName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByManagementGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.managementGroupName,
    Parameters.policyDefinitionName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
