/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeviceGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSphereManagementClient } from "../azureSphereManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DeviceGroup,
  DeviceGroupsListByProductNextOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsListByProductResponse,
  DeviceGroupsGetOptionalParams,
  DeviceGroupsGetResponse,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsCreateOrUpdateResponse,
  DeviceGroupUpdate,
  DeviceGroupsUpdateOptionalParams,
  DeviceGroupsUpdateResponse,
  DeviceGroupsDeleteOptionalParams,
  ClaimDevicesRequest,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsClaimDevicesResponse,
  DeviceGroupsCountDevicesOptionalParams,
  DeviceGroupsCountDevicesResponse,
  DeviceGroupsListByProductNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeviceGroups operations. */
export class DeviceGroupsImpl implements DeviceGroups {
  private readonly client: AzureSphereManagementClient;

  /**
   * Initialize a new instance of the class DeviceGroups class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSphereManagementClient) {
    this.client = client;
  }

  /**
   * List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and
   * cannot be used for product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param options The options parameters.
   */
  public listByProduct(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: DeviceGroupsListByProductOptionalParams
  ): PagedAsyncIterableIterator<DeviceGroup> {
    const iter = this.listByProductPagingAll(
      resourceGroupName,
      catalogName,
      productName,
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
        return this.listByProductPagingPage(
          resourceGroupName,
          catalogName,
          productName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProductPagingPage(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: DeviceGroupsListByProductOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeviceGroup[]> {
    let result: DeviceGroupsListByProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProduct(
        resourceGroupName,
        catalogName,
        productName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProductNext(
        resourceGroupName,
        catalogName,
        productName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProductPagingAll(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: DeviceGroupsListByProductOptionalParams
  ): AsyncIterableIterator<DeviceGroup> {
    for await (const page of this.listByProductPagingPage(
      resourceGroupName,
      catalogName,
      productName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and
   * cannot be used for product name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param options The options parameters.
   */
  private _listByProduct(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: DeviceGroupsListByProductOptionalParams
  ): Promise<DeviceGroupsListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, productName, options },
      listByProductOperationSpec
    );
  }

  /**
   * Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for
   * product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsGetOptionalParams
  ): Promise<DeviceGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, productName, deviceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for
   * product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    resource: DeviceGroup,
    options?: DeviceGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DeviceGroupsCreateOrUpdateResponse>,
      DeviceGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeviceGroupsCreateOrUpdateResponse> => {
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
        catalogName,
        productName,
        deviceGroupName,
        resource,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      DeviceGroupsCreateOrUpdateResponse,
      OperationState<DeviceGroupsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for
   * product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    resource: DeviceGroup,
    options?: DeviceGroupsCreateOrUpdateOptionalParams
  ): Promise<DeviceGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for
   * product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    properties: DeviceGroupUpdate,
    options?: DeviceGroupsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DeviceGroupsUpdateResponse>,
      DeviceGroupsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeviceGroupsUpdateResponse> => {
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
        catalogName,
        productName,
        deviceGroupName,
        properties,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      DeviceGroupsUpdateResponse,
      OperationState<DeviceGroupsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for
   * product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    properties: DeviceGroupUpdate,
    options?: DeviceGroupsUpdateOptionalParams
  ): Promise<DeviceGroupsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      properties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for
   * product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsDeleteOptionalParams
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
      args: {
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options
      },
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
   * Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for
   * product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when
   * bulk claiming devices to a catalog only.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginClaimDevices(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    body: ClaimDevicesRequest,
    options?: DeviceGroupsClaimDevicesOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DeviceGroupsClaimDevicesResponse>,
      DeviceGroupsClaimDevicesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeviceGroupsClaimDevicesResponse> => {
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
        catalogName,
        productName,
        deviceGroupName,
        body,
        options
      },
      spec: claimDevicesOperationSpec
    });
    const poller = await createHttpPoller<
      DeviceGroupsClaimDevicesResponse,
      OperationState<DeviceGroupsClaimDevicesResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when
   * bulk claiming devices to a catalog only.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginClaimDevicesAndWait(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    body: ClaimDevicesRequest,
    options?: DeviceGroupsClaimDevicesOptionalParams
  ): Promise<DeviceGroupsClaimDevicesResponse> {
    const poller = await this.beginClaimDevices(
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be
   * used for product or device group name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param deviceGroupName Name of device group.
   * @param options The options parameters.
   */
  countDevices(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsCountDevicesOptionalParams
  ): Promise<DeviceGroupsCountDevicesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, productName, deviceGroupName, options },
      countDevicesOperationSpec
    );
  }

  /**
   * ListByProductNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param productName Name of product.
   * @param nextLink The nextLink from the previous successful call to the ListByProduct method.
   * @param options The options parameters.
   */
  private _listByProductNext(
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    nextLink: string,
    options?: DeviceGroupsListByProductNextOptionalParams
  ): Promise<DeviceGroupsListByProductNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, productName, nextLink, options },
      listByProductNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.maxpagesize
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
    Parameters.productName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceGroup
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
    Parameters.catalogName,
    Parameters.productName,
    Parameters.deviceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceGroup
    },
    201: {
      bodyMapper: Mappers.DeviceGroup
    },
    202: {
      bodyMapper: Mappers.DeviceGroup
    },
    204: {
      bodyMapper: Mappers.DeviceGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
    Parameters.productName,
    Parameters.deviceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceGroup
    },
    201: {
      bodyMapper: Mappers.DeviceGroup
    },
    202: {
      bodyMapper: Mappers.DeviceGroup
    },
    204: {
      bodyMapper: Mappers.DeviceGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.properties2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
    Parameters.productName,
    Parameters.deviceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
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
    Parameters.catalogName,
    Parameters.productName,
    Parameters.deviceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const claimDevicesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.DeviceGroupsClaimDevicesHeaders
    },
    201: {
      headersMapper: Mappers.DeviceGroupsClaimDevicesHeaders
    },
    202: {
      headersMapper: Mappers.DeviceGroupsClaimDevicesHeaders
    },
    204: {
      headersMapper: Mappers.DeviceGroupsClaimDevicesHeaders
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
    Parameters.catalogName,
    Parameters.productName,
    Parameters.deviceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const countDevicesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CountDeviceResponse
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
    Parameters.catalogName,
    Parameters.productName,
    Parameters.deviceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProductNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceGroupListResult
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
    Parameters.catalogName,
    Parameters.productName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
