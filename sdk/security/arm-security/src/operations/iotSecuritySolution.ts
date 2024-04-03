/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IotSecuritySolution } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  IoTSecuritySolutionModel,
  IotSecuritySolutionListBySubscriptionNextOptionalParams,
  IotSecuritySolutionListBySubscriptionOptionalParams,
  IotSecuritySolutionListBySubscriptionResponse,
  IotSecuritySolutionListByResourceGroupNextOptionalParams,
  IotSecuritySolutionListByResourceGroupOptionalParams,
  IotSecuritySolutionListByResourceGroupResponse,
  IotSecuritySolutionGetOptionalParams,
  IotSecuritySolutionGetResponse,
  IotSecuritySolutionCreateOrUpdateOptionalParams,
  IotSecuritySolutionCreateOrUpdateResponse,
  UpdateIotSecuritySolutionData,
  IotSecuritySolutionUpdateOptionalParams,
  IotSecuritySolutionUpdateResponse,
  IotSecuritySolutionDeleteOptionalParams,
  IotSecuritySolutionListBySubscriptionNextResponse,
  IotSecuritySolutionListByResourceGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IotSecuritySolution operations. */
export class IotSecuritySolutionImpl implements IotSecuritySolution {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class IotSecuritySolution class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Use this method to get the list of IoT Security solutions by subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: IotSecuritySolutionListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<IoTSecuritySolutionModel> {
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
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: IotSecuritySolutionListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IoTSecuritySolutionModel[]> {
    let result: IotSecuritySolutionListBySubscriptionResponse;
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
    options?: IotSecuritySolutionListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<IoTSecuritySolutionModel> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Use this method to get the list IoT Security solutions organized by resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: IotSecuritySolutionListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<IoTSecuritySolutionModel> {
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
    options?: IotSecuritySolutionListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IoTSecuritySolutionModel[]> {
    let result: IotSecuritySolutionListByResourceGroupResponse;
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
    options?: IotSecuritySolutionListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<IoTSecuritySolutionModel> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Use this method to get the list of IoT Security solutions by subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: IotSecuritySolutionListBySubscriptionOptionalParams,
  ): Promise<IotSecuritySolutionListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Use this method to get the list IoT Security solutions organized by resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: IotSecuritySolutionListByResourceGroupOptionalParams,
  ): Promise<IotSecuritySolutionListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * User this method to get details of a specific IoT Security solution based on solution name
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionGetOptionalParams,
  ): Promise<IotSecuritySolutionGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, options },
      getOperationSpec,
    );
  }

  /**
   * Use this method to create or update yours IoT Security solution
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotSecuritySolutionData The security solution data
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    solutionName: string,
    iotSecuritySolutionData: IoTSecuritySolutionModel,
    options?: IotSecuritySolutionCreateOrUpdateOptionalParams,
  ): Promise<IotSecuritySolutionCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, iotSecuritySolutionData, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Use this method to update existing IoT Security solution tags or user defined resources. To update
   * other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param updateIotSecuritySolutionData The security solution data
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    solutionName: string,
    updateIotSecuritySolutionData: UpdateIotSecuritySolutionData,
    options?: IotSecuritySolutionUpdateOptionalParams,
  ): Promise<IotSecuritySolutionUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        solutionName,
        updateIotSecuritySolutionData,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Use this method to delete yours IoT Security solution
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: IotSecuritySolutionListBySubscriptionNextOptionalParams,
  ): Promise<IotSecuritySolutionListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
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
    options?: IotSecuritySolutionListByResourceGroupNextOptionalParams,
  ): Promise<IotSecuritySolutionListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/iotSecuritySolutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion20],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionModel,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionModel,
    },
    201: {
      bodyMapper: Mappers.IoTSecuritySolutionModel,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.iotSecuritySolutionData,
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionModel,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.updateIotSecuritySolutionData,
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionsList,
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
      bodyMapper: Mappers.IoTSecuritySolutionsList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
