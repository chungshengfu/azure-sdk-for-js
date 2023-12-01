/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PrivateClouds } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PrivateCloud,
  PrivateCloudsListInSubscriptionNextOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsListInSubscriptionResponse,
  PrivateCloudsListByResourceGroupNextOptionalParams,
  PrivateCloudsListByResourceGroupOptionalParams,
  PrivateCloudsListByResourceGroupResponse,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsGetResponse,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsCreateOrUpdateResponse,
  PrivateCloudUpdate,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsUpdateResponse,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
  PrivateCloudsListAdminCredentialsResponse,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsRotateNsxtPasswordResponse,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsRotateVcenterPasswordResponse,
  PrivateCloudsListInSubscriptionNextResponse,
  PrivateCloudsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateClouds operations. */
export class PrivateCloudsImpl implements PrivateClouds {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class PrivateClouds class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List private clouds in a subscription
   * @param options The options parameters.
   */
  public listInSubscription(
    options?: PrivateCloudsListInSubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PrivateCloud> {
    const iter = this.listInSubscriptionPagingAll(options);
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
        return this.listInSubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listInSubscriptionPagingPage(
    options?: PrivateCloudsListInSubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PrivateCloud[]> {
    let result: PrivateCloudsListInSubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listInSubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listInSubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listInSubscriptionPagingAll(
    options?: PrivateCloudsListInSubscriptionOptionalParams
  ): AsyncIterableIterator<PrivateCloud> {
    for await (const page of this.listInSubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List private clouds in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateCloudsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PrivateCloud> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: PrivateCloudsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PrivateCloud[]> {
    let result: PrivateCloudsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
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

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: PrivateCloudsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<PrivateCloud> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List private clouds in a subscription
   * @param options The options parameters.
   */
  private _listInSubscription(
    options?: PrivateCloudsListInSubscriptionOptionalParams
  ): Promise<PrivateCloudsListInSubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listInSubscriptionOperationSpec
    );
  }

  /**
   * List private clouds in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateCloudsListByResourceGroupOptionalParams
  ): Promise<PrivateCloudsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsGetOptionalParams
  ): Promise<PrivateCloudsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    resource: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsCreateOrUpdateResponse>,
      PrivateCloudsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateCloudsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateCloudName, resource, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      PrivateCloudsCreateOrUpdateResponse,
      OperationState<PrivateCloudsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    resource: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams
  ): Promise<PrivateCloudsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateCloudName,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    properties: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsUpdateResponse>,
      PrivateCloudsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateCloudsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateCloudName, properties, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      PrivateCloudsUpdateResponse,
      OperationState<PrivateCloudsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    properties: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams
  ): Promise<PrivateCloudsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      privateCloudName,
      properties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateCloudName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateCloudName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List the admin credentials for the private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param body The content of the action request
   * @param options The options parameters.
   */
  listAdminCredentials(
    resourceGroupName: string,
    privateCloudName: string,
    body: Record<string, unknown>,
    options?: PrivateCloudsListAdminCredentialsOptionalParams
  ): Promise<PrivateCloudsListAdminCredentialsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, body, options },
      listAdminCredentialsOperationSpec
    );
  }

  /**
   * Rotate the NSX-T Manager password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginRotateNsxtPassword(
    resourceGroupName: string,
    privateCloudName: string,
    body: Record<string, unknown>,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsRotateNsxtPasswordResponse>,
      PrivateCloudsRotateNsxtPasswordResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateCloudsRotateNsxtPasswordResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateCloudName, body, options },
      spec: rotateNsxtPasswordOperationSpec
    });
    const poller = await createHttpPoller<
      PrivateCloudsRotateNsxtPasswordResponse,
      OperationState<PrivateCloudsRotateNsxtPasswordResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Rotate the NSX-T Manager password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginRotateNsxtPasswordAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    body: Record<string, unknown>,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams
  ): Promise<PrivateCloudsRotateNsxtPasswordResponse> {
    const poller = await this.beginRotateNsxtPassword(
      resourceGroupName,
      privateCloudName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Rotate the vCenter password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginRotateVcenterPassword(
    resourceGroupName: string,
    privateCloudName: string,
    body: Record<string, unknown>,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsRotateVcenterPasswordResponse>,
      PrivateCloudsRotateVcenterPasswordResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateCloudsRotateVcenterPasswordResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, privateCloudName, body, options },
      spec: rotateVcenterPasswordOperationSpec
    });
    const poller = await createHttpPoller<
      PrivateCloudsRotateVcenterPasswordResponse,
      OperationState<PrivateCloudsRotateVcenterPasswordResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Rotate the vCenter password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginRotateVcenterPasswordAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    body: Record<string, unknown>,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams
  ): Promise<PrivateCloudsRotateVcenterPasswordResponse> {
    const poller = await this.beginRotateVcenterPassword(
      resourceGroupName,
      privateCloudName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListInSubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListInSubscription method.
   * @param options The options parameters.
   */
  private _listInSubscriptionNext(
    nextLink: string,
    options?: PrivateCloudsListInSubscriptionNextOptionalParams
  ): Promise<PrivateCloudsListInSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listInSubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PrivateCloudsListByResourceGroupNextOptionalParams
  ): Promise<PrivateCloudsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listInSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId1],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloud
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloud
    },
    201: {
      bodyMapper: Mappers.PrivateCloud
    },
    202: {
      bodyMapper: Mappers.PrivateCloud
    },
    204: {
      bodyMapper: Mappers.PrivateCloud
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloud
    },
    201: {
      bodyMapper: Mappers.PrivateCloud
    },
    202: {
      bodyMapper: Mappers.PrivateCloud
    },
    204: {
      bodyMapper: Mappers.PrivateCloud
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAdminCredentialsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AdminCredentials
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const rotateNsxtPasswordOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.PrivateCloudsRotateNsxtPasswordHeaders
    },
    201: {
      headersMapper: Mappers.PrivateCloudsRotateNsxtPasswordHeaders
    },
    202: {
      headersMapper: Mappers.PrivateCloudsRotateNsxtPasswordHeaders
    },
    204: {
      headersMapper: Mappers.PrivateCloudsRotateNsxtPasswordHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const rotateVcenterPasswordOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.PrivateCloudsRotateVcenterPasswordHeaders
    },
    201: {
      headersMapper: Mappers.PrivateCloudsRotateVcenterPasswordHeaders
    },
    202: {
      headersMapper: Mappers.PrivateCloudsRotateVcenterPasswordHeaders
    },
    204: {
      headersMapper: Mappers.PrivateCloudsRotateVcenterPasswordHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listInSubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
