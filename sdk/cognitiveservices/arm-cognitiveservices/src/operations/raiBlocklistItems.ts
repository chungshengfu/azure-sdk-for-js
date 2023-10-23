/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RaiBlocklistItems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CognitiveServicesManagementClient } from "../cognitiveServicesManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  RaiBlocklistItem,
  RaiBlocklistItemsListNextOptionalParams,
  RaiBlocklistItemsListOptionalParams,
  RaiBlocklistItemsListResponse,
  RaiBlocklistItemsGetOptionalParams,
  RaiBlocklistItemsGetResponse,
  RaiBlocklistItemsCreateOrUpdateOptionalParams,
  RaiBlocklistItemsCreateOrUpdateResponse,
  RaiBlocklistItemsDeleteOptionalParams,
  RaiBlocklistItemsDeleteResponse,
  RaiBlocklistItemsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RaiBlocklistItems operations. */
export class RaiBlocklistItemsImpl implements RaiBlocklistItems {
  private readonly client: CognitiveServicesManagementClient;

  /**
   * Initialize a new instance of the class RaiBlocklistItems class.
   * @param client Reference to the service client
   */
  constructor(client: CognitiveServicesManagementClient) {
    this.client = client;
  }

  /**
   * Gets the blocklist items associated with the custom blocklist.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    options?: RaiBlocklistItemsListOptionalParams
  ): PagedAsyncIterableIterator<RaiBlocklistItem> {
    const iter = this.listPagingAll(
      resourceGroupName,
      accountName,
      raiBlocklistName,
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
          raiBlocklistName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    options?: RaiBlocklistItemsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<RaiBlocklistItem[]> {
    let result: RaiBlocklistItemsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        accountName,
        raiBlocklistName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        raiBlocklistName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    options?: RaiBlocklistItemsListOptionalParams
  ): AsyncIterableIterator<RaiBlocklistItem> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      raiBlocklistName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the blocklist items associated with the custom blocklist.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    options?: RaiBlocklistItemsListOptionalParams
  ): Promise<RaiBlocklistItemsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, raiBlocklistName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the specified custom blocklist Item associated with the custom blocklist.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param raiBlocklistItemName The name of the RaiBlocklist Item associated with the custom blocklist
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    options?: RaiBlocklistItemsGetOptionalParams
  ): Promise<RaiBlocklistItemsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        raiBlocklistName,
        raiBlocklistItemName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Update the state of specified blocklist item associated with the Azure OpenAI account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param raiBlocklistItemName The name of the RaiBlocklist Item associated with the custom blocklist
   * @param raiBlocklistItem Properties describing the custom blocklist.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    raiBlocklistItem: RaiBlocklistItem,
    options?: RaiBlocklistItemsCreateOrUpdateOptionalParams
  ): Promise<RaiBlocklistItemsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        raiBlocklistName,
        raiBlocklistItemName,
        raiBlocklistItem,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the specified blocklist Item associated with the custom blocklist.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param raiBlocklistItemName The name of the RaiBlocklist Item associated with the custom blocklist
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    options?: RaiBlocklistItemsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<RaiBlocklistItemsDeleteResponse>,
      RaiBlocklistItemsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RaiBlocklistItemsDeleteResponse> => {
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
      args: {
        resourceGroupName,
        accountName,
        raiBlocklistName,
        raiBlocklistItemName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      RaiBlocklistItemsDeleteResponse,
      OperationState<RaiBlocklistItemsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified blocklist Item associated with the custom blocklist.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param raiBlocklistItemName The name of the RaiBlocklist Item associated with the custom blocklist
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    options?: RaiBlocklistItemsDeleteOptionalParams
  ): Promise<RaiBlocklistItemsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      raiBlocklistName,
      raiBlocklistItemName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    nextLink: string,
    options?: RaiBlocklistItemsListNextOptionalParams
  ): Promise<RaiBlocklistItemsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, raiBlocklistName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RaiBlockListItemsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.raiBlocklistName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RaiBlocklistItem
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.raiBlocklistName,
    Parameters.raiBlocklistItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RaiBlocklistItem
    },
    201: {
      bodyMapper: Mappers.RaiBlocklistItem
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.raiBlocklistItem,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.raiBlocklistName,
    Parameters.raiBlocklistItemName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.RaiBlocklistItemsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.RaiBlocklistItemsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.RaiBlocklistItemsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.RaiBlocklistItemsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.raiBlocklistName,
    Parameters.raiBlocklistItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RaiBlockListItemsResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.raiBlocklistName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
