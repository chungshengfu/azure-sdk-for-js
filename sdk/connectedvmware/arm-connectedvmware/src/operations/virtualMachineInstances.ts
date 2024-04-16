/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VirtualMachineInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureArcVMwareManagementServiceAPI } from "../azureArcVMwareManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  VirtualMachineInstance,
  VirtualMachineInstancesListNextOptionalParams,
  VirtualMachineInstancesListOptionalParams,
  VirtualMachineInstancesListResponse,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  VirtualMachineInstancesCreateOrUpdateResponse,
  VirtualMachineInstancesGetOptionalParams,
  VirtualMachineInstancesGetResponse,
  VirtualMachineInstancesUpdateOptionalParams,
  VirtualMachineInstancesUpdateResponse,
  VirtualMachineInstancesDeleteOptionalParams,
  VirtualMachineInstancesDeleteResponse,
  VirtualMachineInstancesStopOptionalParams,
  VirtualMachineInstancesStopResponse,
  VirtualMachineInstancesStartOptionalParams,
  VirtualMachineInstancesStartResponse,
  VirtualMachineInstancesRestartOptionalParams,
  VirtualMachineInstancesRestartResponse,
  VirtualMachineInstancesListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualMachineInstances operations. */
export class VirtualMachineInstancesImpl implements VirtualMachineInstances {
  private readonly client: AzureArcVMwareManagementServiceAPI;

  /**
   * Initialize a new instance of the class VirtualMachineInstances class.
   * @param client Reference to the service client
   */
  constructor(client: AzureArcVMwareManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Lists all of the virtual machine instances within the specified parent resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: VirtualMachineInstancesListOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachineInstance> {
    const iter = this.listPagingAll(resourceUri, options);
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
        return this.listPagingPage(resourceUri, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: VirtualMachineInstancesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VirtualMachineInstance[]> {
    let result: VirtualMachineInstancesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: VirtualMachineInstancesListOptionalParams,
  ): AsyncIterableIterator<VirtualMachineInstance> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * The operation to create or update a virtual machine instance. Please note some properties can be set
   * only during virtual machine instance creation.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceUri: string,
    options?: VirtualMachineInstancesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachineInstancesCreateOrUpdateResponse>,
      VirtualMachineInstancesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualMachineInstancesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualMachineInstancesCreateOrUpdateResponse,
      OperationState<VirtualMachineInstancesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to create or update a virtual machine instance. Please note some properties can be set
   * only during virtual machine instance creation.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceUri: string,
    options?: VirtualMachineInstancesCreateOrUpdateOptionalParams,
  ): Promise<VirtualMachineInstancesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * Retrieves information about a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    options?: VirtualMachineInstancesGetOptionalParams,
  ): Promise<VirtualMachineInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      getOperationSpec,
    );
  }

  /**
   * The operation to update a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceUri: string,
    options?: VirtualMachineInstancesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachineInstancesUpdateResponse>,
      VirtualMachineInstancesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualMachineInstancesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualMachineInstancesUpdateResponse,
      OperationState<VirtualMachineInstancesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to update a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceUri: string,
    options?: VirtualMachineInstancesUpdateOptionalParams,
  ): Promise<VirtualMachineInstancesUpdateResponse> {
    const poller = await this.beginUpdate(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceUri: string,
    options?: VirtualMachineInstancesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachineInstancesDeleteResponse>,
      VirtualMachineInstancesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualMachineInstancesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualMachineInstancesDeleteResponse,
      OperationState<VirtualMachineInstancesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to delete a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceUri: string,
    options?: VirtualMachineInstancesDeleteOptionalParams,
  ): Promise<VirtualMachineInstancesDeleteResponse> {
    const poller = await this.beginDelete(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * Lists all of the virtual machine instances within the specified parent resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: VirtualMachineInstancesListOptionalParams,
  ): Promise<VirtualMachineInstancesListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec,
    );
  }

  /**
   * The operation to power off (stop) a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginStop(
    resourceUri: string,
    options?: VirtualMachineInstancesStopOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachineInstancesStopResponse>,
      VirtualMachineInstancesStopResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualMachineInstancesStopResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: stopOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualMachineInstancesStopResponse,
      OperationState<VirtualMachineInstancesStopResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to power off (stop) a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginStopAndWait(
    resourceUri: string,
    options?: VirtualMachineInstancesStopOptionalParams,
  ): Promise<VirtualMachineInstancesStopResponse> {
    const poller = await this.beginStop(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to start a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginStart(
    resourceUri: string,
    options?: VirtualMachineInstancesStartOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachineInstancesStartResponse>,
      VirtualMachineInstancesStartResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualMachineInstancesStartResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: startOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualMachineInstancesStartResponse,
      OperationState<VirtualMachineInstancesStartResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to start a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceUri: string,
    options?: VirtualMachineInstancesStartOptionalParams,
  ): Promise<VirtualMachineInstancesStartResponse> {
    const poller = await this.beginStart(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * The operation to restart a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceUri: string,
    options?: VirtualMachineInstancesRestartOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachineInstancesRestartResponse>,
      VirtualMachineInstancesRestartResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualMachineInstancesRestartResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceUri, options },
      spec: restartOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualMachineInstancesRestartResponse,
      OperationState<VirtualMachineInstancesRestartResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to restart a virtual machine instance.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceUri: string,
    options?: VirtualMachineInstancesRestartOptionalParams,
  ): Promise<VirtualMachineInstancesRestartResponse> {
    const poller = await this.beginRestart(resourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: VirtualMachineInstancesListNextOptionalParams,
  ): Promise<VirtualMachineInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    201: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    202: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    204: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    201: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    202: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    204: {
      bodyMapper: Mappers.VirtualMachineInstance,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.VirtualMachineInstancesDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.VirtualMachineInstancesDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.VirtualMachineInstancesDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.VirtualMachineInstancesDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.force,
    Parameters.deleteFromHost,
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineInstancesList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const stopOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/stop",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.VirtualMachineInstancesStopHeaders,
    },
    201: {
      headersMapper: Mappers.VirtualMachineInstancesStopHeaders,
    },
    202: {
      headersMapper: Mappers.VirtualMachineInstancesStopHeaders,
    },
    204: {
      headersMapper: Mappers.VirtualMachineInstancesStopHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const startOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/start",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.VirtualMachineInstancesStartHeaders,
    },
    201: {
      headersMapper: Mappers.VirtualMachineInstancesStartHeaders,
    },
    202: {
      headersMapper: Mappers.VirtualMachineInstancesStartHeaders,
    },
    204: {
      headersMapper: Mappers.VirtualMachineInstancesStartHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const restartOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/restart",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.VirtualMachineInstancesRestartHeaders,
    },
    201: {
      headersMapper: Mappers.VirtualMachineInstancesRestartHeaders,
    },
    202: {
      headersMapper: Mappers.VirtualMachineInstancesRestartHeaders,
    },
    204: {
      headersMapper: Mappers.VirtualMachineInstancesRestartHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineInstancesList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceUri,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
