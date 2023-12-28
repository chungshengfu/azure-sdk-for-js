/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Machines } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClient } from "../hybridComputeManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Machine,
  MachinesListByResourceGroupNextOptionalParams,
  MachinesListByResourceGroupOptionalParams,
  MachinesListByResourceGroupResponse,
  MachinesListBySubscriptionNextOptionalParams,
  MachinesListBySubscriptionOptionalParams,
  MachinesListBySubscriptionResponse,
  MachinesCreateOrUpdateOptionalParams,
  MachinesCreateOrUpdateResponse,
  MachineUpdate,
  MachinesUpdateOptionalParams,
  MachinesUpdateResponse,
  MachinesDeleteOptionalParams,
  MachinesGetOptionalParams,
  MachinesGetResponse,
  MachinesAssessPatchesOptionalParams,
  MachinesAssessPatchesResponse,
  MachineInstallPatchesParameters,
  MachinesInstallPatchesOptionalParams,
  MachinesInstallPatchesResponse,
  MachinesListByResourceGroupNextResponse,
  MachinesListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Machines operations. */
export class MachinesImpl implements Machines {
  private readonly client: HybridComputeManagementClient;

  /**
   * Initialize a new instance of the class Machines class.
   * @param client Reference to the service client
   */
  constructor(client: HybridComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the hybrid machines in the specified resource group. Use the nextLink property in the
   * response to get the next page of hybrid machines.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: MachinesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Machine> {
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
    options?: MachinesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Machine[]> {
    let result: MachinesListByResourceGroupResponse;
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
    options?: MachinesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Machine> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the hybrid machines in the specified subscription. Use the nextLink property in the
   * response to get the next page of hybrid machines.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: MachinesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Machine> {
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
    options?: MachinesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Machine[]> {
    let result: MachinesListBySubscriptionResponse;
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
    options?: MachinesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Machine> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The operation to create or update a hybrid machine. Please note some properties can be set only
   * during machine creation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param parameters Parameters supplied to the Create hybrid machine operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    machineName: string,
    parameters: Machine,
    options?: MachinesCreateOrUpdateOptionalParams
  ): Promise<MachinesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * The operation to update a hybrid machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param parameters Parameters supplied to the Update hybrid machine operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    machineName: string,
    parameters: MachineUpdate,
    options?: MachinesUpdateOptionalParams
  ): Promise<MachinesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * The operation to delete a hybrid machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    machineName: string,
    options?: MachinesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves information about the model view or the instance view of a hybrid machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    machineName: string,
    options?: MachinesGetOptionalParams
  ): Promise<MachinesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to assess patches on a hybrid machine identity in Azure.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the hybrid machine.
   * @param options The options parameters.
   */
  async beginAssessPatches(
    resourceGroupName: string,
    name: string,
    options?: MachinesAssessPatchesOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<MachinesAssessPatchesResponse>,
      MachinesAssessPatchesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<MachinesAssessPatchesResponse> => {
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
      args: { resourceGroupName, name, options },
      spec: assessPatchesOperationSpec
    });
    const poller = await createHttpPoller<
      MachinesAssessPatchesResponse,
      OperationState<MachinesAssessPatchesResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to assess patches on a hybrid machine identity in Azure.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the hybrid machine.
   * @param options The options parameters.
   */
  async beginAssessPatchesAndWait(
    resourceGroupName: string,
    name: string,
    options?: MachinesAssessPatchesOptionalParams
  ): Promise<MachinesAssessPatchesResponse> {
    const poller = await this.beginAssessPatches(
      resourceGroupName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to install patches on a hybrid machine identity in Azure.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the hybrid machine.
   * @param installPatchesInput Input for InstallPatches as directly received by the API
   * @param options The options parameters.
   */
  async beginInstallPatches(
    resourceGroupName: string,
    name: string,
    installPatchesInput: MachineInstallPatchesParameters,
    options?: MachinesInstallPatchesOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<MachinesInstallPatchesResponse>,
      MachinesInstallPatchesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<MachinesInstallPatchesResponse> => {
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
      args: { resourceGroupName, name, installPatchesInput, options },
      spec: installPatchesOperationSpec
    });
    const poller = await createHttpPoller<
      MachinesInstallPatchesResponse,
      OperationState<MachinesInstallPatchesResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to install patches on a hybrid machine identity in Azure.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the hybrid machine.
   * @param installPatchesInput Input for InstallPatches as directly received by the API
   * @param options The options parameters.
   */
  async beginInstallPatchesAndWait(
    resourceGroupName: string,
    name: string,
    installPatchesInput: MachineInstallPatchesParameters,
    options?: MachinesInstallPatchesOptionalParams
  ): Promise<MachinesInstallPatchesResponse> {
    const poller = await this.beginInstallPatches(
      resourceGroupName,
      name,
      installPatchesInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the hybrid machines in the specified resource group. Use the nextLink property in the
   * response to get the next page of hybrid machines.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: MachinesListByResourceGroupOptionalParams
  ): Promise<MachinesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the hybrid machines in the specified subscription. Use the nextLink property in the
   * response to get the next page of hybrid machines.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: MachinesListBySubscriptionOptionalParams
  ): Promise<MachinesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
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
    options?: MachinesListByResourceGroupNextOptionalParams
  ): Promise<MachinesListByResourceGroupNextResponse> {
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
    options?: MachinesListBySubscriptionNextOptionalParams
  ): Promise<MachinesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Machine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Machine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Machine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const assessPatchesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/assessPatches",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MachineAssessPatchesResult
    },
    201: {
      bodyMapper: Mappers.MachineAssessPatchesResult
    },
    202: {
      bodyMapper: Mappers.MachineAssessPatchesResult
    },
    204: {
      bodyMapper: Mappers.MachineAssessPatchesResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const installPatchesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{name}/installPatches",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MachineInstallPatchesResult
    },
    201: {
      bodyMapper: Mappers.MachineInstallPatchesResult
    },
    202: {
      bodyMapper: Mappers.MachineInstallPatchesResult
    },
    204: {
      bodyMapper: Mappers.MachineInstallPatchesResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.installPatchesInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.name
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
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
    "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/machines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineListResult
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
