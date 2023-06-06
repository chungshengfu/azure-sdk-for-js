/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PolicyExemptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PolicyClient } from "../policyClient";
import {
  PolicyExemption,
  PolicyExemptionsListNextOptionalParams,
  PolicyExemptionsListOptionalParams,
  PolicyExemptionsListResponse,
  PolicyExemptionsListForResourceGroupNextOptionalParams,
  PolicyExemptionsListForResourceGroupOptionalParams,
  PolicyExemptionsListForResourceGroupResponse,
  PolicyExemptionsListForResourceNextOptionalParams,
  PolicyExemptionsListForResourceOptionalParams,
  PolicyExemptionsListForResourceResponse,
  PolicyExemptionsListForManagementGroupNextOptionalParams,
  PolicyExemptionsListForManagementGroupOptionalParams,
  PolicyExemptionsListForManagementGroupResponse,
  PolicyExemptionsDeleteOptionalParams,
  PolicyExemptionsCreateOrUpdateOptionalParams,
  PolicyExemptionsCreateOrUpdateResponse,
  PolicyExemptionsGetOptionalParams,
  PolicyExemptionsGetResponse,
  PolicyExemptionUpdate,
  PolicyExemptionsUpdateOptionalParams,
  PolicyExemptionsUpdateResponse,
  PolicyExemptionsListNextResponse,
  PolicyExemptionsListForResourceGroupNextResponse,
  PolicyExemptionsListForResourceNextResponse,
  PolicyExemptionsListForManagementGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PolicyExemptions operations. */
export class PolicyExemptionsImpl implements PolicyExemptions {
  private readonly client: PolicyClient;

  /**
   * Initialize a new instance of the class PolicyExemptions class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyClient) {
    this.client = client;
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given subscription
   * that match the optional given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()',
   * 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter is not provided, the unfiltered
   * list includes all policy exemptions associated with the subscription, including those that apply
   * directly or from management groups that contain the given subscription, as well as any applied to
   * objects contained within the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: PolicyExemptionsListOptionalParams
  ): PagedAsyncIterableIterator<PolicyExemption> {
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
      }
    };
  }

  private async *listPagingPage(
    options?: PolicyExemptionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PolicyExemption[]> {
    let result: PolicyExemptionsListResponse;
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
    options?: PolicyExemptionsListOptionalParams
  ): AsyncIterableIterator<PolicyExemption> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given resource group
   * in the given subscription that match the optional given $filter. Valid values for $filter are:
   * 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter
   * is not provided, the unfiltered list includes all policy exemptions associated with the resource
   * group, including those that apply directly or apply from containing scopes, as well as any applied
   * to resources contained within the resource group.
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param options The options parameters.
   */
  public listForResourceGroup(
    resourceGroupName: string,
    options?: PolicyExemptionsListForResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicyExemption> {
    const iter = this.listForResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listForResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listForResourceGroupPagingPage(
    resourceGroupName: string,
    options?: PolicyExemptionsListForResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PolicyExemption[]> {
    let result: PolicyExemptionsListForResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForResourceGroupPagingAll(
    resourceGroupName: string,
    options?: PolicyExemptionsListForResourceGroupOptionalParams
  ): AsyncIterableIterator<PolicyExemption> {
    for await (const page of this.listForResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the specified resource in
   * the given resource group and subscription that match the optional given $filter. Valid values for
   * $filter are: 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''.
   * If $filter is not provided, the unfiltered list includes all policy exemptions associated with the
   * resource, including those that apply directly or from all containing scopes, as well as any applied
   * to resources contained within the resource. Three parameters plus the resource name are used to
   * identify a specific resource. If the resource is not part of a parent resource (the more common
   * case), the parent resource path should not be provided (or provided as ''). For example a web app
   * could be specified as ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '',
   * {resourceType} == 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent
   * resource, then all parameters should be provided. For example a virtual machine DNS name could be
   * specified as ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} ==
   * 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} ==
   * 'MyComputerName'). A convenient alternative to providing the namespace and type name separately is
   * to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '',
   * {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} == 'MyWebApp').
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param resourceProviderNamespace The namespace of the resource provider. For example, the namespace
   *                                  of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
   * @param parentResourcePath The parent resource path. Use empty string if there is none.
   * @param resourceType The resource type name. For example the type name of a web app is 'sites' (from
   *                     Microsoft.Web/sites).
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  public listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: PolicyExemptionsListForResourceOptionalParams
  ): PagedAsyncIterableIterator<PolicyExemption> {
    const iter = this.listForResourcePagingAll(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      options
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
        return this.listForResourcePagingPage(
          resourceGroupName,
          resourceProviderNamespace,
          parentResourcePath,
          resourceType,
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listForResourcePagingPage(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: PolicyExemptionsListForResourceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PolicyExemption[]> {
    let result: PolicyExemptionsListForResourceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForResource(
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForResourceNext(
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForResourcePagingAll(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: PolicyExemptionsListForResourceOptionalParams
  ): AsyncIterableIterator<PolicyExemption> {
    for await (const page of this.listForResourcePagingPage(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This operation retrieves the list of all policy exemptions applicable to the management group that
   * match the given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()',
   * 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter=atScope() is provided, the
   * returned list includes all policy exemptions that are assigned to the management group or the
   * management group's ancestors.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  public listForManagementGroup(
    managementGroupId: string,
    options?: PolicyExemptionsListForManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicyExemption> {
    const iter = this.listForManagementGroupPagingAll(
      managementGroupId,
      options
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
        return this.listForManagementGroupPagingPage(
          managementGroupId,
          options,
          settings
        );
      }
    };
  }

  private async *listForManagementGroupPagingPage(
    managementGroupId: string,
    options?: PolicyExemptionsListForManagementGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PolicyExemption[]> {
    let result: PolicyExemptionsListForManagementGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForManagementGroup(managementGroupId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForManagementGroupNext(
        managementGroupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForManagementGroupPagingAll(
    managementGroupId: string,
    options?: PolicyExemptionsListForManagementGroupOptionalParams
  ): AsyncIterableIterator<PolicyExemption> {
    for await (const page of this.listForManagementGroupPagingPage(
      managementGroupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This operation deletes a policy exemption, given its name and the scope it was created in. The scope
   * of a policy exemption is the part of its ID preceding
   * '/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}'.
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   *              '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param options The options parameters.
   */
  delete(
    scope: string,
    policyExemptionName: string,
    options?: PolicyExemptionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, policyExemptionName, options },
      deleteOperationSpec
    );
  }

  /**
   *  This operation creates or updates a policy exemption with the given scope and name. Policy
   * exemptions apply to all resources contained within their scope. For example, when you create a
   * policy exemption at resource group scope for a policy assignment at the same or above level, the
   * exemption exempts to all applicable resources in the resource group.
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   *              '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param parameters Parameters for the policy exemption.
   * @param options The options parameters.
   */
  createOrUpdate(
    scope: string,
    policyExemptionName: string,
    parameters: PolicyExemption,
    options?: PolicyExemptionsCreateOrUpdateOptionalParams
  ): Promise<PolicyExemptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { scope, policyExemptionName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * This operation retrieves a single policy exemption, given its name and the scope it was created at.
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   *              '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param options The options parameters.
   */
  get(
    scope: string,
    policyExemptionName: string,
    options?: PolicyExemptionsGetOptionalParams
  ): Promise<PolicyExemptionsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, policyExemptionName, options },
      getOperationSpec
    );
  }

  /**
   *  This operation updates a policy exemption with the given scope and name.
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   *              '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param parameters Parameters for policy exemption patch request.
   * @param options The options parameters.
   */
  update(
    scope: string,
    policyExemptionName: string,
    parameters: PolicyExemptionUpdate,
    options?: PolicyExemptionsUpdateOptionalParams
  ): Promise<PolicyExemptionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { scope, policyExemptionName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given subscription
   * that match the optional given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()',
   * 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter is not provided, the unfiltered
   * list includes all policy exemptions associated with the subscription, including those that apply
   * directly or from management groups that contain the given subscription, as well as any applied to
   * objects contained within the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: PolicyExemptionsListOptionalParams
  ): Promise<PolicyExemptionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given resource group
   * in the given subscription that match the optional given $filter. Valid values for $filter are:
   * 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter
   * is not provided, the unfiltered list includes all policy exemptions associated with the resource
   * group, including those that apply directly or apply from containing scopes, as well as any applied
   * to resources contained within the resource group.
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param options The options parameters.
   */
  private _listForResourceGroup(
    resourceGroupName: string,
    options?: PolicyExemptionsListForResourceGroupOptionalParams
  ): Promise<PolicyExemptionsListForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listForResourceGroupOperationSpec
    );
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the specified resource in
   * the given resource group and subscription that match the optional given $filter. Valid values for
   * $filter are: 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''.
   * If $filter is not provided, the unfiltered list includes all policy exemptions associated with the
   * resource, including those that apply directly or from all containing scopes, as well as any applied
   * to resources contained within the resource. Three parameters plus the resource name are used to
   * identify a specific resource. If the resource is not part of a parent resource (the more common
   * case), the parent resource path should not be provided (or provided as ''). For example a web app
   * could be specified as ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '',
   * {resourceType} == 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent
   * resource, then all parameters should be provided. For example a virtual machine DNS name could be
   * specified as ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} ==
   * 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} ==
   * 'MyComputerName'). A convenient alternative to providing the namespace and type name separately is
   * to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '',
   * {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} == 'MyWebApp').
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param resourceProviderNamespace The namespace of the resource provider. For example, the namespace
   *                                  of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
   * @param parentResourcePath The parent resource path. Use empty string if there is none.
   * @param resourceType The resource type name. For example the type name of a web app is 'sites' (from
   *                     Microsoft.Web/sites).
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  private _listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: PolicyExemptionsListForResourceOptionalParams
  ): Promise<PolicyExemptionsListForResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options
      },
      listForResourceOperationSpec
    );
  }

  /**
   * This operation retrieves the list of all policy exemptions applicable to the management group that
   * match the given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()',
   * 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter=atScope() is provided, the
   * returned list includes all policy exemptions that are assigned to the management group or the
   * management group's ancestors.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  private _listForManagementGroup(
    managementGroupId: string,
    options?: PolicyExemptionsListForManagementGroupOptionalParams
  ): Promise<PolicyExemptionsListForManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, options },
      listForManagementGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PolicyExemptionsListNextOptionalParams
  ): Promise<PolicyExemptionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListForResourceGroupNext
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param nextLink The nextLink from the previous successful call to the ListForResourceGroup method.
   * @param options The options parameters.
   */
  private _listForResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PolicyExemptionsListForResourceGroupNextOptionalParams
  ): Promise<PolicyExemptionsListForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listForResourceGroupNextOperationSpec
    );
  }

  /**
   * ListForResourceNext
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param resourceProviderNamespace The namespace of the resource provider. For example, the namespace
   *                                  of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
   * @param parentResourcePath The parent resource path. Use empty string if there is none.
   * @param resourceType The resource type name. For example the type name of a web app is 'sites' (from
   *                     Microsoft.Web/sites).
   * @param resourceName The name of the resource.
   * @param nextLink The nextLink from the previous successful call to the ListForResource method.
   * @param options The options parameters.
   */
  private _listForResourceNext(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    nextLink: string,
    options?: PolicyExemptionsListForResourceNextOptionalParams
  ): Promise<PolicyExemptionsListForResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        nextLink,
        options
      },
      listForResourceNextOperationSpec
    );
  }

  /**
   * ListForManagementGroupNext
   * @param managementGroupId The ID of the management group.
   * @param nextLink The nextLink from the previous successful call to the ListForManagementGroup method.
   * @param options The options parameters.
   */
  private _listForManagementGroupNext(
    managementGroupId: string,
    nextLink: string,
    options?: PolicyExemptionsListForManagementGroupNextOptionalParams
  ): Promise<PolicyExemptionsListForManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, nextLink, options },
      listForManagementGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.policyExemptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemption
    },
    201: {
      bodyMapper: Mappers.PolicyExemption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.policyExemptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.policyExemptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.policyExemptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyExemptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/policyExemptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/policyExemptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/policyExemptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.managementGroupId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForManagementGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.managementGroupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
