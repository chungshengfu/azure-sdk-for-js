/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { LiveOutputs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServices } from "../azureMediaServices";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LiveOutput,
  LiveOutputsListNextOptionalParams,
  LiveOutputsListOptionalParams,
  LiveOutputsListResponse,
  LiveOutputsGetOptionalParams,
  LiveOutputsGetResponse,
  LiveOutputsCreateOptionalParams,
  LiveOutputsCreateResponse,
  LiveOutputsDeleteOptionalParams,
  LiveOutputsAsyncOperationOptionalParams,
  LiveOutputsAsyncOperationResponse,
  LiveOutputsOperationLocationOptionalParams,
  LiveOutputsOperationLocationResponse,
  LiveOutputsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LiveOutputs operations. */
export class LiveOutputsImpl implements LiveOutputs {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class LiveOutputs class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * Lists the live outputs of a live event.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    options?: LiveOutputsListOptionalParams
  ): PagedAsyncIterableIterator<LiveOutput> {
    const iter = this.listPagingAll(
      resourceGroupName,
      accountName,
      liveEventName,
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
        return this.listPagingPage(
          resourceGroupName,
          accountName,
          liveEventName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    options?: LiveOutputsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LiveOutput[]> {
    let result: LiveOutputsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        accountName,
        liveEventName,
        options
      );
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        liveEventName,
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    options?: LiveOutputsListOptionalParams
  ): AsyncIterableIterator<LiveOutput> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      liveEventName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the live outputs of a live event.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    options?: LiveOutputsListOptionalParams
  ): Promise<LiveOutputsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, liveEventName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a live output.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    options?: LiveOutputsGetOptionalParams
  ): Promise<LiveOutputsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        liveOutputName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates a new live output.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param parameters Live Output properties needed for creation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    parameters: LiveOutput,
    options?: LiveOutputsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LiveOutputsCreateResponse>,
      LiveOutputsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LiveOutputsCreateResponse> => {
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
      {
        resourceGroupName,
        accountName,
        liveEventName,
        liveOutputName,
        parameters,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new live output.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param parameters Live Output properties needed for creation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    parameters: LiveOutput,
    options?: LiveOutputsCreateOptionalParams
  ): Promise<LiveOutputsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      accountName,
      liveEventName,
      liveOutputName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a live output. Deleting a live output does not delete the asset the live output is writing
   * to.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    options?: LiveOutputsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      {
        resourceGroupName,
        accountName,
        liveEventName,
        liveOutputName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a live output. Deleting a live output does not delete the asset the live output is writing
   * to.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    options?: LiveOutputsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      liveEventName,
      liveOutputName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a Live Output operation status.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  asyncOperation(
    resourceGroupName: string,
    accountName: string,
    operationId: string,
    options?: LiveOutputsAsyncOperationOptionalParams
  ): Promise<LiveOutputsAsyncOperationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, operationId, options },
      asyncOperationOperationSpec
    );
  }

  /**
   * Get a Live Output operation status.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param liveOutputName The name of the live output.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  operationLocation(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    liveOutputName: string,
    operationId: string,
    options?: LiveOutputsOperationLocationOptionalParams
  ): Promise<LiveOutputsOperationLocationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        liveEventName,
        liveOutputName,
        operationId,
        options
      },
      operationLocationOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param liveEventName The name of the live event, maximum length is 32.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    liveEventName: string,
    nextLink: string,
    options?: LiveOutputsListNextOptionalParams
  ): Promise<LiveOutputsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, liveEventName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LiveOutputListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs/{liveOutputName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LiveOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName,
    Parameters.liveOutputName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs/{liveOutputName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LiveOutput
    },
    201: {
      bodyMapper: Mappers.LiveOutput
    },
    202: {
      bodyMapper: Mappers.LiveOutput
    },
    204: {
      bodyMapper: Mappers.LiveOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName,
    Parameters.liveOutputName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs/{liveOutputName}",
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
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName,
    Parameters.liveOutputName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const asyncOperationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveOutputOperations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.operationId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const operationLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs/{liveOutputName}/operationLocations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LiveOutput
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.liveEventName,
    Parameters.operationId1,
    Parameters.liveOutputName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LiveOutputListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink,
    Parameters.liveEventName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
