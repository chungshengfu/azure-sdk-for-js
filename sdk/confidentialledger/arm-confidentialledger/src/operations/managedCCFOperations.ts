/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedCCFOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConfidentialLedgerClient } from "../confidentialLedgerClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ManagedCCF,
  ManagedCCFListByResourceGroupNextOptionalParams,
  ManagedCCFListByResourceGroupOptionalParams,
  ManagedCCFListByResourceGroupResponse,
  ManagedCCFListBySubscriptionNextOptionalParams,
  ManagedCCFListBySubscriptionOptionalParams,
  ManagedCCFListBySubscriptionResponse,
  ManagedCCFGetOptionalParams,
  ManagedCCFGetResponse,
  ManagedCCFDeleteOptionalParams,
  ManagedCCFCreateOptionalParams,
  ManagedCCFCreateResponse,
  ManagedCCFUpdateOptionalParams,
  ManagedCCFUpdateResponse,
  ManagedCCFBackup,
  ManagedCCFBackupOptionalParams,
  ManagedCCFBackupOperationResponse,
  ManagedCCFRestore,
  ManagedCCFRestoreOptionalParams,
  ManagedCCFRestoreOperationResponse,
  ManagedCCFListByResourceGroupNextResponse,
  ManagedCCFListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedCCFOperations operations. */
export class ManagedCCFOperationsImpl implements ManagedCCFOperations {
  private readonly client: ConfidentialLedgerClient;

  /**
   * Initialize a new instance of the class ManagedCCFOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ConfidentialLedgerClient) {
    this.client = client;
  }

  /**
   * Retrieves the properties of all Managed CCF apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedCCFListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ManagedCCF> {
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
    options?: ManagedCCFListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedCCF[]> {
    let result: ManagedCCFListByResourceGroupResponse;
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
    options?: ManagedCCFListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ManagedCCF> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the properties of all Managed CCF.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ManagedCCFListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ManagedCCF> {
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
    options?: ManagedCCFListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedCCF[]> {
    let result: ManagedCCFListBySubscriptionResponse;
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
    options?: ManagedCCFListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ManagedCCF> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves the properties of a Managed CCF app.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    appName: string,
    options?: ManagedCCFGetOptionalParams
  ): Promise<ManagedCCFGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, appName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes an existing Managed CCF.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    appName: string,
    options?: ManagedCCFDeleteOptionalParams
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
      args: { resourceGroupName, appName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing Managed CCF.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    appName: string,
    options?: ManagedCCFDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, appName, options);
    return poller.pollUntilDone();
  }

  /**
   * Creates a Managed CCF with the specified Managed CCF parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Managed CCF Create Request Body
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCF,
    options?: ManagedCCFCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedCCFCreateResponse>,
      ManagedCCFCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedCCFCreateResponse> => {
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
      args: { resourceGroupName, appName, managedCCF, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedCCFCreateResponse,
      OperationState<ManagedCCFCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a Managed CCF with the specified Managed CCF parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Managed CCF Create Request Body
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCF,
    options?: ManagedCCFCreateOptionalParams
  ): Promise<ManagedCCFCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      appName,
      managedCCF,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates properties of Managed CCF
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Request body for Updating Managed CCF App
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCF,
    options?: ManagedCCFUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedCCFUpdateResponse>,
      ManagedCCFUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedCCFUpdateResponse> => {
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
      args: { resourceGroupName, appName, managedCCF, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedCCFUpdateResponse,
      OperationState<ManagedCCFUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates properties of Managed CCF
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Request body for Updating Managed CCF App
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCF,
    options?: ManagedCCFUpdateOptionalParams
  ): Promise<ManagedCCFUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      appName,
      managedCCF,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the properties of all Managed CCF apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedCCFListByResourceGroupOptionalParams
  ): Promise<ManagedCCFListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieves the properties of all Managed CCF.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ManagedCCFListBySubscriptionOptionalParams
  ): Promise<ManagedCCFListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Backs up a Managed CCF Resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Managed CCF Backup Request Body
   * @param options The options parameters.
   */
  async beginBackup(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCFBackup,
    options?: ManagedCCFBackupOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedCCFBackupOperationResponse>,
      ManagedCCFBackupOperationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedCCFBackupOperationResponse> => {
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
      args: { resourceGroupName, appName, managedCCF, options },
      spec: backupOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedCCFBackupOperationResponse,
      OperationState<ManagedCCFBackupOperationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Backs up a Managed CCF Resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Managed CCF Backup Request Body
   * @param options The options parameters.
   */
  async beginBackupAndWait(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCFBackup,
    options?: ManagedCCFBackupOptionalParams
  ): Promise<ManagedCCFBackupOperationResponse> {
    const poller = await this.beginBackup(
      resourceGroupName,
      appName,
      managedCCF,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Restores a Managed CCF Resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Managed CCF Restore Request Body
   * @param options The options parameters.
   */
  async beginRestore(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCFRestore,
    options?: ManagedCCFRestoreOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedCCFRestoreOperationResponse>,
      ManagedCCFRestoreOperationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedCCFRestoreOperationResponse> => {
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
      args: { resourceGroupName, appName, managedCCF, options },
      spec: restoreOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedCCFRestoreOperationResponse,
      OperationState<ManagedCCFRestoreOperationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Restores a Managed CCF Resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Managed CCF
   * @param managedCCF Managed CCF Restore Request Body
   * @param options The options parameters.
   */
  async beginRestoreAndWait(
    resourceGroupName: string,
    appName: string,
    managedCCF: ManagedCCFRestore,
    options?: ManagedCCFRestoreOptionalParams
  ): Promise<ManagedCCFRestoreOperationResponse> {
    const poller = await this.beginRestore(
      resourceGroupName,
      appName,
      managedCCF,
      options
    );
    return poller.pollUntilDone();
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
    options?: ManagedCCFListByResourceGroupNextOptionalParams
  ): Promise<ManagedCCFListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ManagedCCFListBySubscriptionNextOptionalParams
  ): Promise<ManagedCCFListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/managedCCFs/{appName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCF
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
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/managedCCFs/{appName}",
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
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/managedCCFs/{appName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCF
    },
    201: {
      bodyMapper: Mappers.ManagedCCF
    },
    202: {
      bodyMapper: Mappers.ManagedCCF
    },
    204: {
      bodyMapper: Mappers.ManagedCCF
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.managedCCF,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/managedCCFs/{appName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCF
    },
    201: {
      bodyMapper: Mappers.ManagedCCF
    },
    202: {
      bodyMapper: Mappers.ManagedCCF
    },
    204: {
      bodyMapper: Mappers.ManagedCCF
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.managedCCF,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/managedCCFs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCFList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ConfidentialLedger/managedCCFs/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCFList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const backupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/managedCCFs/{appName}/backup",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCFBackupResponse
    },
    201: {
      bodyMapper: Mappers.ManagedCCFBackupResponse
    },
    202: {
      bodyMapper: Mappers.ManagedCCFBackupResponse
    },
    204: {
      bodyMapper: Mappers.ManagedCCFBackupResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.managedCCF1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const restoreOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConfidentialLedger/managedCCFs/{appName}/restore",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCFRestoreResponse
    },
    201: {
      bodyMapper: Mappers.ManagedCCFRestoreResponse
    },
    202: {
      bodyMapper: Mappers.ManagedCCFRestoreResponse
    },
    204: {
      bodyMapper: Mappers.ManagedCCFRestoreResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.managedCCF2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCFList
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
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCCFList
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
