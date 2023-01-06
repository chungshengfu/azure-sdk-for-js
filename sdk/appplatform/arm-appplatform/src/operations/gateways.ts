/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Gateways } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  GatewayResource,
  GatewaysListNextOptionalParams,
  GatewaysListOptionalParams,
  GatewaysListResponse,
  GatewaysGetOptionalParams,
  GatewaysGetResponse,
  GatewaysCreateOrUpdateOptionalParams,
  GatewaysCreateOrUpdateResponse,
  GatewaysDeleteOptionalParams,
  CustomDomainValidatePayload,
  GatewaysValidateDomainOptionalParams,
  GatewaysValidateDomainResponse,
  GatewaysListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Gateways operations. */
export class GatewaysImpl implements Gateways {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class Gateways class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    options?: GatewaysListOptionalParams
  ): PagedAsyncIterableIterator<GatewayResource> {
    const iter = this.listPagingAll(resourceGroupName, serviceName, options);
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
          serviceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: GatewaysListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GatewayResource[]> {
    let result: GatewaysListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, serviceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
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
    serviceName: string,
    options?: GatewaysListOptionalParams
  ): AsyncIterableIterator<GatewayResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Spring Cloud Gateway and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    options?: GatewaysGetOptionalParams
  ): Promise<GatewaysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayName, options },
      getOperationSpec
    );
  }

  /**
   * Create the default Spring Cloud Gateway or update the existing Spring Cloud Gateway.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param gatewayResource The gateway for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    gatewayResource: GatewayResource,
    options?: GatewaysCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GatewaysCreateOrUpdateResponse>,
      GatewaysCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GatewaysCreateOrUpdateResponse> => {
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
      { resourceGroupName, serviceName, gatewayName, gatewayResource, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create the default Spring Cloud Gateway or update the existing Spring Cloud Gateway.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param gatewayResource The gateway for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    gatewayResource: GatewayResource,
    options?: GatewaysCreateOrUpdateOptionalParams
  ): Promise<GatewaysCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      gatewayName,
      gatewayResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Disable the default Spring Cloud Gateway.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    options?: GatewaysDeleteOptionalParams
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
      { resourceGroupName, serviceName, gatewayName, options },
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
   * Disable the default Spring Cloud Gateway.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    options?: GatewaysDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      gatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    options?: GatewaysListOptionalParams
  ): Promise<GatewaysListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listOperationSpec
    );
  }

  /**
   * Check the domains are valid as well as not in use.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param gatewayName The name of Spring Cloud Gateway.
   * @param validatePayload Custom domain payload to be validated
   * @param options The options parameters.
   */
  validateDomain(
    resourceGroupName: string,
    serviceName: string,
    gatewayName: string,
    validatePayload: CustomDomainValidatePayload,
    options?: GatewaysValidateDomainOptionalParams
  ): Promise<GatewaysValidateDomainResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayName, validatePayload, options },
      validateDomainOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: GatewaysListNextOptionalParams
  ): Promise<GatewaysListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayResource
    },
    201: {
      bodyMapper: Mappers.GatewayResource
    },
    202: {
      bodyMapper: Mappers.GatewayResource
    },
    204: {
      bodyMapper: Mappers.GatewayResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.gatewayResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateDomainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/gateways/{gatewayName}/validateDomain",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.validatePayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
