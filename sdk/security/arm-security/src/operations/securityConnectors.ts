/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SecurityConnectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SecurityConnector,
  SecurityConnectorsListNextOptionalParams,
  SecurityConnectorsListOptionalParams,
  SecurityConnectorsListResponse,
  SecurityConnectorsListByResourceGroupNextOptionalParams,
  SecurityConnectorsListByResourceGroupOptionalParams,
  SecurityConnectorsListByResourceGroupResponse,
  SecurityConnectorsGetOptionalParams,
  SecurityConnectorsGetResponse,
  SecurityConnectorsCreateOrUpdateOptionalParams,
  SecurityConnectorsCreateOrUpdateResponse,
  SecurityConnectorsUpdateOptionalParams,
  SecurityConnectorsUpdateResponse,
  SecurityConnectorsDeleteOptionalParams,
  SecurityConnectorsListNextResponse,
  SecurityConnectorsListByResourceGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SecurityConnectors operations. */
export class SecurityConnectorsImpl implements SecurityConnectors {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class SecurityConnectors class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Lists all the security connectors in the specified subscription. Use the 'nextLink' property in the
   * response to get the next page of security connectors for the specified subscription.
   * @param options The options parameters.
   */
  public list(
    options?: SecurityConnectorsListOptionalParams,
  ): PagedAsyncIterableIterator<SecurityConnector> {
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
    options?: SecurityConnectorsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SecurityConnector[]> {
    let result: SecurityConnectorsListResponse;
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
    options?: SecurityConnectorsListOptionalParams,
  ): AsyncIterableIterator<SecurityConnector> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the security connectors in the specified resource group. Use the 'nextLink' property in
   * the response to get the next page of security connectors for the specified resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SecurityConnectorsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<SecurityConnector> {
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
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: SecurityConnectorsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SecurityConnector[]> {
    let result: SecurityConnectorsListByResourceGroupResponse;
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
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: SecurityConnectorsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<SecurityConnector> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the security connectors in the specified subscription. Use the 'nextLink' property in the
   * response to get the next page of security connectors for the specified subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: SecurityConnectorsListOptionalParams,
  ): Promise<SecurityConnectorsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists all the security connectors in the specified resource group. Use the 'nextLink' property in
   * the response to get the next page of security connectors for the specified resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SecurityConnectorsListByResourceGroupOptionalParams,
  ): Promise<SecurityConnectorsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Retrieves details of a specific security connector
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorsGetOptionalParams,
  ): Promise<SecurityConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a security connector. If a security connector is already created and a subsequent
   * request is issued for the same security connector id, then it will be updated.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param securityConnector The security connector resource
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    securityConnectorName: string,
    securityConnector: SecurityConnector,
    options?: SecurityConnectorsCreateOrUpdateOptionalParams,
  ): Promise<SecurityConnectorsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, securityConnector, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates a security connector
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param securityConnector The security connector resource
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    securityConnectorName: string,
    securityConnector: SecurityConnector,
    options?: SecurityConnectorsUpdateOptionalParams,
  ): Promise<SecurityConnectorsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, securityConnector, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes a security connector.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SecurityConnectorsListNextOptionalParams,
  ): Promise<SecurityConnectorsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SecurityConnectorsListByResourceGroupNextOptionalParams,
  ): Promise<SecurityConnectorsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/securityConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityConnectorsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityConnectorsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityConnector,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.securityConnectorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityConnector,
    },
    201: {
      bodyMapper: Mappers.SecurityConnector,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.securityConnector,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.securityConnectorName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityConnector,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.securityConnector,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.securityConnectorName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.securityConnectorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityConnectorsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityConnectorsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
