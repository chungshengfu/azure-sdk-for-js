/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DataProducts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftNetworkAnalytics } from "../microsoftNetworkAnalytics";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DataProduct,
  DataProductsListBySubscriptionNextOptionalParams,
  DataProductsListBySubscriptionOptionalParams,
  DataProductsListBySubscriptionResponse,
  DataProductsListByResourceGroupNextOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListByResourceGroupResponse,
  DataProductsGetOptionalParams,
  DataProductsGetResponse,
  DataProductsCreateOptionalParams,
  DataProductsCreateResponse,
  DataProductUpdate,
  DataProductsUpdateOptionalParams,
  DataProductsUpdateResponse,
  DataProductsDeleteOptionalParams,
  DataProductsDeleteResponse,
  RoleAssignmentCommonProperties,
  DataProductsAddUserRoleOptionalParams,
  DataProductsAddUserRoleResponse,
  AccountSas,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsGenerateStorageAccountSasTokenResponse,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsListRolesAssignmentsResponse,
  RoleAssignmentDetail,
  DataProductsRemoveUserRoleOptionalParams,
  KeyVaultInfo,
  DataProductsRotateKeyOptionalParams,
  DataProductsListBySubscriptionNextResponse,
  DataProductsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataProducts operations. */
export class DataProductsImpl implements DataProducts {
  private readonly client: MicrosoftNetworkAnalytics;

  /**
   * Initialize a new instance of the class DataProducts class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftNetworkAnalytics) {
    this.client = client;
  }

  /**
   * List data products by subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: DataProductsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<DataProduct> {
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
    options?: DataProductsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DataProduct[]> {
    let result: DataProductsListBySubscriptionResponse;
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
    options?: DataProductsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DataProduct> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List data products by resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DataProductsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DataProduct> {
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
    options?: DataProductsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DataProduct[]> {
    let result: DataProductsListByResourceGroupResponse;
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
    options?: DataProductsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DataProduct> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List data products by subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: DataProductsListBySubscriptionOptionalParams
  ): Promise<DataProductsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * List data products by resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DataProductsListByResourceGroupOptionalParams
  ): Promise<DataProductsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieve data product resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dataProductName: string,
    options?: DataProductsGetOptionalParams
  ): Promise<DataProductsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, options },
      getOperationSpec
    );
  }

  /**
   * Create data product resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options?: DataProductsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataProductsCreateResponse>,
      DataProductsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataProductsCreateResponse> => {
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
      args: { resourceGroupName, dataProductName, resource, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      DataProductsCreateResponse,
      OperationState<DataProductsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create data product resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    resource: DataProduct,
    options?: DataProductsCreateOptionalParams
  ): Promise<DataProductsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      dataProductName,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update data product resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options?: DataProductsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataProductsUpdateResponse>,
      DataProductsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataProductsUpdateResponse> => {
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
      args: { resourceGroupName, dataProductName, properties, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      DataProductsUpdateResponse,
      OperationState<DataProductsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update data product resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dataProductName: string,
    properties: DataProductUpdate,
    options?: DataProductsUpdateOptionalParams
  ): Promise<DataProductsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      dataProductName,
      properties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete data product resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dataProductName: string,
    options?: DataProductsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DataProductsDeleteResponse>,
      DataProductsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataProductsDeleteResponse> => {
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
      args: { resourceGroupName, dataProductName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      DataProductsDeleteResponse,
      OperationState<DataProductsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete data product resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dataProductName: string,
    options?: DataProductsDeleteOptionalParams
  ): Promise<DataProductsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dataProductName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Assign role to the data product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param body The content of the action request
   * @param options The options parameters.
   */
  addUserRole(
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentCommonProperties,
    options?: DataProductsAddUserRoleOptionalParams
  ): Promise<DataProductsAddUserRoleResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, body, options },
      addUserRoleOperationSpec
    );
  }

  /**
   * Generate sas token for storage account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param body The content of the action request
   * @param options The options parameters.
   */
  generateStorageAccountSasToken(
    resourceGroupName: string,
    dataProductName: string,
    body: AccountSas,
    options?: DataProductsGenerateStorageAccountSasTokenOptionalParams
  ): Promise<DataProductsGenerateStorageAccountSasTokenResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, body, options },
      generateStorageAccountSasTokenOperationSpec
    );
  }

  /**
   * List user roles associated with the data product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param body The content of the action request
   * @param options The options parameters.
   */
  listRolesAssignments(
    resourceGroupName: string,
    dataProductName: string,
    body: Record<string, unknown>,
    options?: DataProductsListRolesAssignmentsOptionalParams
  ): Promise<DataProductsListRolesAssignmentsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, body, options },
      listRolesAssignmentsOperationSpec
    );
  }

  /**
   * Remove role from the data product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param body The content of the action request
   * @param options The options parameters.
   */
  removeUserRole(
    resourceGroupName: string,
    dataProductName: string,
    body: RoleAssignmentDetail,
    options?: DataProductsRemoveUserRoleOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, body, options },
      removeUserRoleOperationSpec
    );
  }

  /**
   * Initiate key rotation on Data Product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataProductName The data product resource name
   * @param body The content of the action request
   * @param options The options parameters.
   */
  rotateKey(
    resourceGroupName: string,
    dataProductName: string,
    body: KeyVaultInfo,
    options?: DataProductsRotateKeyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataProductName, body, options },
      rotateKeyOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: DataProductsListBySubscriptionNextOptionalParams
  ): Promise<DataProductsListBySubscriptionNextResponse> {
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
    options?: DataProductsListByResourceGroupNextOptionalParams
  ): Promise<DataProductsListByResourceGroupNextResponse> {
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
    "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkAnalytics/dataProducts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataProductListResult
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataProductListResult
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataProduct
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
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataProduct
    },
    201: {
      bodyMapper: Mappers.DataProduct
    },
    202: {
      bodyMapper: Mappers.DataProduct
    },
    204: {
      bodyMapper: Mappers.DataProduct
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
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataProduct
    },
    201: {
      bodyMapper: Mappers.DataProduct
    },
    202: {
      bodyMapper: Mappers.DataProduct
    },
    204: {
      bodyMapper: Mappers.DataProduct
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
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.DataProductsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.DataProductsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.DataProductsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.DataProductsDeleteHeaders
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
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addUserRoleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/addUserRole",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentDetail
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const generateStorageAccountSasTokenOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/generateStorageAccountSasToken",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccountSasToken
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
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listRolesAssignmentsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/listRolesAssignments",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ListRoleAssignments
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
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const removeUserRoleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/removeUserRole",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const rotateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/rotateKey",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataProductName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataProductListResult
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
      bodyMapper: Mappers.DataProductListResult
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
