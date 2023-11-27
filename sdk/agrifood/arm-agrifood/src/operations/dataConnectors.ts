/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DataConnectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AgriFoodMgmtClient } from "../agriFoodMgmtClient";
import {
  DataConnector,
  DataConnectorsListByDataManagerForAgricultureNextOptionalParams,
  DataConnectorsListByDataManagerForAgricultureOptionalParams,
  DataConnectorsListByDataManagerForAgricultureResponse,
  DataConnectorsGetOptionalParams,
  DataConnectorsGetResponse,
  DataConnectorsCreateOrUpdateOptionalParams,
  DataConnectorsCreateOrUpdateResponse,
  DataConnectorsDeleteOptionalParams,
  DataConnectorsListByDataManagerForAgricultureNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataConnectors operations. */
export class DataConnectorsImpl implements DataConnectors {
  private readonly client: AgriFoodMgmtClient;

  /**
   * Initialize a new instance of the class DataConnectors class.
   * @param client Reference to the service client
   */
  constructor(client: AgriFoodMgmtClient) {
    this.client = client;
  }

  /**
   * Lists the Data Connector Credentials for MADMA instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param options The options parameters.
   */
  public listByDataManagerForAgriculture(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: DataConnectorsListByDataManagerForAgricultureOptionalParams
  ): PagedAsyncIterableIterator<DataConnector> {
    const iter = this.listByDataManagerForAgriculturePagingAll(
      resourceGroupName,
      dataManagerForAgricultureResourceName,
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
        return this.listByDataManagerForAgriculturePagingPage(
          resourceGroupName,
          dataManagerForAgricultureResourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDataManagerForAgriculturePagingPage(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: DataConnectorsListByDataManagerForAgricultureOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DataConnector[]> {
    let result: DataConnectorsListByDataManagerForAgricultureResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDataManagerForAgriculture(
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDataManagerForAgricultureNext(
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDataManagerForAgriculturePagingAll(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: DataConnectorsListByDataManagerForAgricultureOptionalParams
  ): AsyncIterableIterator<DataConnector> {
    for await (const page of this.listByDataManagerForAgriculturePagingPage(
      resourceGroupName,
      dataManagerForAgricultureResourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Data Connector Credentials for MADMA instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param options The options parameters.
   */
  private _listByDataManagerForAgriculture(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: DataConnectorsListByDataManagerForAgricultureOptionalParams
  ): Promise<DataConnectorsListByDataManagerForAgricultureResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataManagerForAgricultureResourceName, options },
      listByDataManagerForAgricultureOperationSpec
    );
  }

  /**
   * Get specific Data Connector resource by DataConnectorName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param dataConnectorName Connector name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    dataConnectorName: string,
    options?: DataConnectorsGetOptionalParams
  ): Promise<DataConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        dataConnectorName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or update Data Connector For MADMA resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param dataConnectorName Connector name.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    dataConnectorName: string,
    resource: DataConnector,
    options?: DataConnectorsCreateOrUpdateOptionalParams
  ): Promise<DataConnectorsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        dataConnectorName,
        resource,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete a Data Connectors with given dataConnector name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param dataConnectorName Connector name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    dataConnectorName: string,
    options?: DataConnectorsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        dataConnectorName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * ListByDataManagerForAgricultureNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByDataManagerForAgriculture method.
   * @param options The options parameters.
   */
  private _listByDataManagerForAgricultureNext(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    nextLink: string,
    options?: DataConnectorsListByDataManagerForAgricultureNextOptionalParams
  ): Promise<DataConnectorsListByDataManagerForAgricultureNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        nextLink,
        options
      },
      listByDataManagerForAgricultureNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDataManagerForAgricultureOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/dataConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxPageSize,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.dataManagerForAgricultureResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/dataConnectors/{dataConnectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnector
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
    Parameters.dataManagerForAgricultureResourceName,
    Parameters.dataConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/dataConnectors/{dataConnectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnector
    },
    201: {
      bodyMapper: Mappers.DataConnector
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.dataManagerForAgricultureResourceName,
    Parameters.dataConnectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/dataConnectors/{dataConnectorName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.dataManagerForAgricultureResourceName,
    Parameters.dataConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDataManagerForAgricultureNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.dataManagerForAgricultureResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
