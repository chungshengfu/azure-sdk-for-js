/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CommunicationsGateways } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftVoiceServices } from "../microsoftVoiceServices";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  CommunicationsGateway,
  CommunicationsGatewaysListBySubscriptionNextOptionalParams,
  CommunicationsGatewaysListBySubscriptionOptionalParams,
  CommunicationsGatewaysListBySubscriptionResponse,
  CommunicationsGatewaysListByResourceGroupNextOptionalParams,
  CommunicationsGatewaysListByResourceGroupOptionalParams,
  CommunicationsGatewaysListByResourceGroupResponse,
  CommunicationsGatewaysGetOptionalParams,
  CommunicationsGatewaysGetResponse,
  CommunicationsGatewaysCreateOrUpdateOptionalParams,
  CommunicationsGatewaysCreateOrUpdateResponse,
  CommunicationsGatewayUpdate,
  CommunicationsGatewaysUpdateOptionalParams,
  CommunicationsGatewaysUpdateResponse,
  CommunicationsGatewaysDeleteOptionalParams,
  CommunicationsGatewaysListBySubscriptionNextResponse,
  CommunicationsGatewaysListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CommunicationsGateways operations. */
export class CommunicationsGatewaysImpl implements CommunicationsGateways {
  private readonly client: MicrosoftVoiceServices;

  /**
   * Initialize a new instance of the class CommunicationsGateways class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftVoiceServices) {
    this.client = client;
  }

  /**
   * List CommunicationsGateway resources by subscription ID
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: CommunicationsGatewaysListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<CommunicationsGateway> {
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
    options?: CommunicationsGatewaysListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CommunicationsGateway[]> {
    let result: CommunicationsGatewaysListBySubscriptionResponse;
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
    options?: CommunicationsGatewaysListBySubscriptionOptionalParams
  ): AsyncIterableIterator<CommunicationsGateway> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List CommunicationsGateway resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: CommunicationsGatewaysListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<CommunicationsGateway> {
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
    options?: CommunicationsGatewaysListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CommunicationsGateway[]> {
    let result: CommunicationsGatewaysListByResourceGroupResponse;
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
    options?: CommunicationsGatewaysListByResourceGroupOptionalParams
  ): AsyncIterableIterator<CommunicationsGateway> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List CommunicationsGateway resources by subscription ID
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: CommunicationsGatewaysListBySubscriptionOptionalParams
  ): Promise<CommunicationsGatewaysListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * List CommunicationsGateway resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: CommunicationsGatewaysListByResourceGroupOptionalParams
  ): Promise<CommunicationsGatewaysListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get a CommunicationsGateway
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param communicationsGatewayName Unique identifier for this deployment
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    communicationsGatewayName: string,
    options?: CommunicationsGatewaysGetOptionalParams
  ): Promise<CommunicationsGatewaysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, communicationsGatewayName, options },
      getOperationSpec
    );
  }

  /**
   * Create a CommunicationsGateway
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param communicationsGatewayName Unique identifier for this deployment
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    communicationsGatewayName: string,
    resource: CommunicationsGateway,
    options?: CommunicationsGatewaysCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CommunicationsGatewaysCreateOrUpdateResponse>,
      CommunicationsGatewaysCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CommunicationsGatewaysCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, communicationsGatewayName, resource, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      CommunicationsGatewaysCreateOrUpdateResponse,
      OperationState<CommunicationsGatewaysCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a CommunicationsGateway
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param communicationsGatewayName Unique identifier for this deployment
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    communicationsGatewayName: string,
    resource: CommunicationsGateway,
    options?: CommunicationsGatewaysCreateOrUpdateOptionalParams
  ): Promise<CommunicationsGatewaysCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      communicationsGatewayName,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a CommunicationsGateway
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param communicationsGatewayName Unique identifier for this deployment
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    communicationsGatewayName: string,
    properties: CommunicationsGatewayUpdate,
    options?: CommunicationsGatewaysUpdateOptionalParams
  ): Promise<CommunicationsGatewaysUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, communicationsGatewayName, properties, options },
      updateOperationSpec
    );
  }

  /**
   * Delete a CommunicationsGateway
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param communicationsGatewayName Unique identifier for this deployment
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    communicationsGatewayName: string,
    options?: CommunicationsGatewaysDeleteOptionalParams
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
      args: { resourceGroupName, communicationsGatewayName, options },
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
   * Delete a CommunicationsGateway
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param communicationsGatewayName Unique identifier for this deployment
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    communicationsGatewayName: string,
    options?: CommunicationsGatewaysDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      communicationsGatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: CommunicationsGatewaysListBySubscriptionNextOptionalParams
  ): Promise<CommunicationsGatewaysListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
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
    options?: CommunicationsGatewaysListByResourceGroupNextOptionalParams
  ): Promise<CommunicationsGatewaysListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.VoiceServices/communicationsGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsGatewayListResult
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
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VoiceServices/communicationsGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsGatewayListResult
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VoiceServices/communicationsGateways/{communicationsGatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsGateway
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
    Parameters.communicationsGatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VoiceServices/communicationsGateways/{communicationsGatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsGateway
    },
    201: {
      bodyMapper: Mappers.CommunicationsGateway
    },
    202: {
      bodyMapper: Mappers.CommunicationsGateway
    },
    204: {
      bodyMapper: Mappers.CommunicationsGateway
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.communicationsGatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VoiceServices/communicationsGateways/{communicationsGatewayName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsGateway
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.communicationsGatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VoiceServices/communicationsGateways/{communicationsGatewayName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.communicationsGatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsGatewayListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsGatewayListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
