/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ActiveDirectoryConnectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureArcDataManagementClient } from "../azureArcDataManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ActiveDirectoryConnectorResource,
  ActiveDirectoryConnectorsListNextOptionalParams,
  ActiveDirectoryConnectorsListOptionalParams,
  ActiveDirectoryConnectorsListResponse,
  ActiveDirectoryConnectorsCreateOptionalParams,
  ActiveDirectoryConnectorsCreateResponse,
  ActiveDirectoryConnectorsDeleteOptionalParams,
  ActiveDirectoryConnectorsGetOptionalParams,
  ActiveDirectoryConnectorsGetResponse,
  ActiveDirectoryConnectorsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ActiveDirectoryConnectors operations. */
export class ActiveDirectoryConnectorsImpl
  implements ActiveDirectoryConnectors {
  private readonly client: AzureArcDataManagementClient;

  /**
   * Initialize a new instance of the class ActiveDirectoryConnectors class.
   * @param client Reference to the service client
   */
  constructor(client: AzureArcDataManagementClient) {
    this.client = client;
  }

  /**
   * List the active directory connectors associated with the given data controller.
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    dataControllerName: string,
    options?: ActiveDirectoryConnectorsListOptionalParams
  ): PagedAsyncIterableIterator<ActiveDirectoryConnectorResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      dataControllerName,
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
          dataControllerName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    dataControllerName: string,
    options?: ActiveDirectoryConnectorsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ActiveDirectoryConnectorResource[]> {
    let result: ActiveDirectoryConnectorsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, dataControllerName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        dataControllerName,
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
    dataControllerName: string,
    options?: ActiveDirectoryConnectorsListOptionalParams
  ): AsyncIterableIterator<ActiveDirectoryConnectorResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      dataControllerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the active directory connectors associated with the given data controller.
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    dataControllerName: string,
    options?: ActiveDirectoryConnectorsListOptionalParams
  ): Promise<ActiveDirectoryConnectorsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataControllerName, options },
      listOperationSpec
    );
  }

  /**
   * Creates or replaces an Active Directory connector resource.
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param activeDirectoryConnectorName The name of the Active Directory connector instance
   * @param activeDirectoryConnectorResource desc
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    dataControllerName: string,
    activeDirectoryConnectorName: string,
    activeDirectoryConnectorResource: ActiveDirectoryConnectorResource,
    options?: ActiveDirectoryConnectorsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ActiveDirectoryConnectorsCreateResponse>,
      ActiveDirectoryConnectorsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ActiveDirectoryConnectorsCreateResponse> => {
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
        dataControllerName,
        activeDirectoryConnectorName,
        activeDirectoryConnectorResource,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or replaces an Active Directory connector resource.
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param activeDirectoryConnectorName The name of the Active Directory connector instance
   * @param activeDirectoryConnectorResource desc
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    dataControllerName: string,
    activeDirectoryConnectorName: string,
    activeDirectoryConnectorResource: ActiveDirectoryConnectorResource,
    options?: ActiveDirectoryConnectorsCreateOptionalParams
  ): Promise<ActiveDirectoryConnectorsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      dataControllerName,
      activeDirectoryConnectorName,
      activeDirectoryConnectorResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an Active Directory connector resource
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param activeDirectoryConnectorName The name of the Active Directory connector instance
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dataControllerName: string,
    activeDirectoryConnectorName: string,
    options?: ActiveDirectoryConnectorsDeleteOptionalParams
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
        dataControllerName,
        activeDirectoryConnectorName,
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
   * Deletes an Active Directory connector resource
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param activeDirectoryConnectorName The name of the Active Directory connector instance
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dataControllerName: string,
    activeDirectoryConnectorName: string,
    options?: ActiveDirectoryConnectorsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dataControllerName,
      activeDirectoryConnectorName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves an Active Directory connector resource
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param activeDirectoryConnectorName The name of the Active Directory connector instance
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dataControllerName: string,
    activeDirectoryConnectorName: string,
    options?: ActiveDirectoryConnectorsGetOptionalParams
  ): Promise<ActiveDirectoryConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataControllerName,
        activeDirectoryConnectorName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the Azure resource group
   * @param dataControllerName The name of the data controller
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    dataControllerName: string,
    nextLink: string,
    options?: ActiveDirectoryConnectorsListNextOptionalParams
  ): Promise<ActiveDirectoryConnectorsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataControllerName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActiveDirectoryConnectorListResult
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
    Parameters.dataControllerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ActiveDirectoryConnectorResource
    },
    201: {
      bodyMapper: Mappers.ActiveDirectoryConnectorResource
    },
    202: {
      bodyMapper: Mappers.ActiveDirectoryConnectorResource
    },
    204: {
      bodyMapper: Mappers.ActiveDirectoryConnectorResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.activeDirectoryConnectorResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataControllerName,
    Parameters.activeDirectoryConnectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}",
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
    Parameters.dataControllerName,
    Parameters.activeDirectoryConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/dataControllers/{dataControllerName}/activeDirectoryConnectors/{activeDirectoryConnectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActiveDirectoryConnectorResource
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
    Parameters.dataControllerName,
    Parameters.activeDirectoryConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActiveDirectoryConnectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataControllerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
