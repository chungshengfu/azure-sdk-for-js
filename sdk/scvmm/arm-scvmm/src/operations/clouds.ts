/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Clouds } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { Scvmm } from "../scvmm";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Cloud,
  CloudsListByResourceGroupNextOptionalParams,
  CloudsListByResourceGroupOptionalParams,
  CloudsListByResourceGroupResponse,
  CloudsListBySubscriptionNextOptionalParams,
  CloudsListBySubscriptionOptionalParams,
  CloudsListBySubscriptionResponse,
  CloudsGetOptionalParams,
  CloudsGetResponse,
  CloudsCreateOrUpdateOptionalParams,
  CloudsCreateOrUpdateResponse,
  CloudsDeleteOptionalParams,
  CloudsDeleteResponse,
  ResourcePatch,
  CloudsUpdateOptionalParams,
  CloudsUpdateResponse,
  CloudsListByResourceGroupNextResponse,
  CloudsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Clouds operations. */
export class CloudsImpl implements Clouds {
  private readonly client: Scvmm;

  /**
   * Initialize a new instance of the class Clouds class.
   * @param client Reference to the service client
   */
  constructor(client: Scvmm) {
    this.client = client;
  }

  /**
   * List of Clouds in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: CloudsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Cloud> {
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
    options?: CloudsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Cloud[]> {
    let result: CloudsListByResourceGroupResponse;
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
    options?: CloudsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Cloud> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List of Clouds in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: CloudsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Cloud> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: CloudsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Cloud[]> {
    let result: CloudsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: CloudsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Cloud> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Implements Cloud GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudResourceName Name of the Cloud.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsGetOptionalParams
  ): Promise<CloudsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudResourceName, options },
      getOperationSpec
    );
  }

  /**
   * Onboards the ScVmm fabric cloud as an Azure cloud resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudResourceName Name of the Cloud.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    cloudResourceName: string,
    body: Cloud,
    options?: CloudsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CloudsCreateOrUpdateResponse>,
      CloudsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CloudsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, cloudResourceName, body, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      CloudsCreateOrUpdateResponse,
      OperationState<CloudsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Onboards the ScVmm fabric cloud as an Azure cloud resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudResourceName Name of the Cloud.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cloudResourceName: string,
    body: Cloud,
    options?: CloudsCreateOrUpdateOptionalParams
  ): Promise<CloudsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      cloudResourceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deregisters the ScVmm fabric cloud from Azure.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudResourceName Name of the Cloud.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<CloudsDeleteResponse>, CloudsDeleteResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CloudsDeleteResponse> => {
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
      args: { resourceGroupName, cloudResourceName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      CloudsDeleteResponse,
      OperationState<CloudsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deregisters the ScVmm fabric cloud from Azure.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudResourceName Name of the Cloud.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    cloudResourceName: string,
    options?: CloudsDeleteOptionalParams
  ): Promise<CloudsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      cloudResourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the Clouds resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudResourceName Name of the Cloud.
   * @param body Clouds patch payload.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    cloudResourceName: string,
    body: ResourcePatch,
    options?: CloudsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<CloudsUpdateResponse>, CloudsUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CloudsUpdateResponse> => {
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
      args: { resourceGroupName, cloudResourceName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      CloudsUpdateResponse,
      OperationState<CloudsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the Clouds resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudResourceName Name of the Cloud.
   * @param body Clouds patch payload.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    cloudResourceName: string,
    body: ResourcePatch,
    options?: CloudsUpdateOptionalParams
  ): Promise<CloudsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      cloudResourceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List of Clouds in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: CloudsListByResourceGroupOptionalParams
  ): Promise<CloudsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List of Clouds in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: CloudsListBySubscriptionOptionalParams
  ): Promise<CloudsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
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
    options?: CloudsListByResourceGroupNextOptionalParams
  ): Promise<CloudsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: CloudsListBySubscriptionNextOptionalParams
  ): Promise<CloudsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Cloud
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Cloud
    },
    201: {
      bodyMapper: Mappers.Cloud
    },
    202: {
      bodyMapper: Mappers.Cloud
    },
    204: {
      bodyMapper: Mappers.Cloud
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.CloudsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.CloudsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.CloudsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.CloudsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds/{cloudResourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Cloud
    },
    201: {
      bodyMapper: Mappers.Cloud
    },
    202: {
      bodyMapper: Mappers.Cloud
    },
    204: {
      bodyMapper: Mappers.Cloud
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/clouds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/clouds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
