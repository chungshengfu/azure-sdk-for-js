/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ReplicationProtectionContainers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ProtectionContainer,
  ReplicationProtectionContainersListByReplicationFabricsNextOptionalParams,
  ReplicationProtectionContainersListByReplicationFabricsOptionalParams,
  ReplicationProtectionContainersListByReplicationFabricsResponse,
  ReplicationProtectionContainersListNextOptionalParams,
  ReplicationProtectionContainersListOptionalParams,
  ReplicationProtectionContainersListResponse,
  ReplicationProtectionContainersGetOptionalParams,
  ReplicationProtectionContainersGetResponse,
  CreateProtectionContainerInput,
  ReplicationProtectionContainersCreateOptionalParams,
  ReplicationProtectionContainersCreateResponse,
  DiscoverProtectableItemRequest,
  ReplicationProtectionContainersDiscoverProtectableItemOptionalParams,
  ReplicationProtectionContainersDiscoverProtectableItemResponse,
  ReplicationProtectionContainersDeleteOptionalParams,
  SwitchProtectionInput,
  ReplicationProtectionContainersSwitchProtectionOptionalParams,
  ReplicationProtectionContainersSwitchProtectionResponse,
  ReplicationProtectionContainersListByReplicationFabricsNextResponse,
  ReplicationProtectionContainersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationProtectionContainers operations. */
export class ReplicationProtectionContainersImpl
  implements ReplicationProtectionContainers {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationProtectionContainers class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the protection containers in the specified fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  public listByReplicationFabrics(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationProtectionContainersListByReplicationFabricsOptionalParams
  ): PagedAsyncIterableIterator<ProtectionContainer> {
    const iter = this.listByReplicationFabricsPagingAll(
      resourceName,
      resourceGroupName,
      fabricName,
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
        return this.listByReplicationFabricsPagingPage(
          resourceName,
          resourceGroupName,
          fabricName,
          options,
          settings
        );
      }
    };
  }

  private async *listByReplicationFabricsPagingPage(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationProtectionContainersListByReplicationFabricsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProtectionContainer[]> {
    let result: ReplicationProtectionContainersListByReplicationFabricsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReplicationFabrics(
        resourceName,
        resourceGroupName,
        fabricName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReplicationFabricsNext(
        resourceName,
        resourceGroupName,
        fabricName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReplicationFabricsPagingAll(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationProtectionContainersListByReplicationFabricsOptionalParams
  ): AsyncIterableIterator<ProtectionContainer> {
    for await (const page of this.listByReplicationFabricsPagingPage(
      resourceName,
      resourceGroupName,
      fabricName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the protection containers in a vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  public list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationProtectionContainersListOptionalParams
  ): PagedAsyncIterableIterator<ProtectionContainer> {
    const iter = this.listPagingAll(resourceName, resourceGroupName, options);
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
          resourceName,
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationProtectionContainersListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProtectionContainer[]> {
    let result: ReplicationProtectionContainersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceName, resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceName,
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

  private async *listPagingAll(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationProtectionContainersListOptionalParams
  ): AsyncIterableIterator<ProtectionContainer> {
    for await (const page of this.listPagingPage(
      resourceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the protection containers in the specified fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param options The options parameters.
   */
  private _listByReplicationFabrics(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationProtectionContainersListByReplicationFabricsOptionalParams
  ): Promise<ReplicationProtectionContainersListByReplicationFabricsResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, fabricName, options },
      listByReplicationFabricsOperationSpec
    );
  }

  /**
   * Gets the details of a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectionContainersGetOptionalParams
  ): Promise<ReplicationProtectionContainersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Operation to create a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Unique fabric ARM name.
   * @param protectionContainerName Unique protection container ARM name.
   * @param creationInput Creation input.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    creationInput: CreateProtectionContainerInput,
    options?: ReplicationProtectionContainersCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationProtectionContainersCreateResponse>,
      ReplicationProtectionContainersCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationProtectionContainersCreateResponse> => {
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        creationInput,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      ReplicationProtectionContainersCreateResponse,
      OperationState<ReplicationProtectionContainersCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to create a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Unique fabric ARM name.
   * @param protectionContainerName Unique protection container ARM name.
   * @param creationInput Creation input.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    creationInput: CreateProtectionContainerInput,
    options?: ReplicationProtectionContainersCreateOptionalParams
  ): Promise<ReplicationProtectionContainersCreateResponse> {
    const poller = await this.beginCreate(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      creationInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to a add a protectable item to a protection container(Add physical server).
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName The name of the fabric.
   * @param protectionContainerName The name of the protection container.
   * @param discoverProtectableItemRequest The request object to add a protectable item.
   * @param options The options parameters.
   */
  async beginDiscoverProtectableItem(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    discoverProtectableItemRequest: DiscoverProtectableItemRequest,
    options?: ReplicationProtectionContainersDiscoverProtectableItemOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        ReplicationProtectionContainersDiscoverProtectableItemResponse
      >,
      ReplicationProtectionContainersDiscoverProtectableItemResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationProtectionContainersDiscoverProtectableItemResponse> => {
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        discoverProtectableItemRequest,
        options
      },
      spec: discoverProtectableItemOperationSpec
    });
    const poller = await createHttpPoller<
      ReplicationProtectionContainersDiscoverProtectableItemResponse,
      OperationState<
        ReplicationProtectionContainersDiscoverProtectableItemResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to a add a protectable item to a protection container(Add physical server).
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName The name of the fabric.
   * @param protectionContainerName The name of the protection container.
   * @param discoverProtectableItemRequest The request object to add a protectable item.
   * @param options The options parameters.
   */
  async beginDiscoverProtectableItemAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    discoverProtectableItemRequest: DiscoverProtectableItemRequest,
    options?: ReplicationProtectionContainersDiscoverProtectableItemOptionalParams
  ): Promise<ReplicationProtectionContainersDiscoverProtectableItemResponse> {
    const poller = await this.beginDiscoverProtectableItem(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      discoverProtectableItemRequest,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to remove a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Unique fabric ARM name.
   * @param protectionContainerName Unique protection container ARM name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectionContainersDeleteOptionalParams
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        options
      },
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
   * Operation to remove a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Unique fabric ARM name.
   * @param protectionContainerName Unique protection container ARM name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectionContainersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to switch protection from one container to another or one replication provider to another.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Unique fabric name.
   * @param protectionContainerName Protection container name.
   * @param switchInput Switch protection input.
   * @param options The options parameters.
   */
  async beginSwitchProtection(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    switchInput: SwitchProtectionInput,
    options?: ReplicationProtectionContainersSwitchProtectionOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationProtectionContainersSwitchProtectionResponse>,
      ReplicationProtectionContainersSwitchProtectionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationProtectionContainersSwitchProtectionResponse> => {
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        switchInput,
        options
      },
      spec: switchProtectionOperationSpec
    });
    const poller = await createHttpPoller<
      ReplicationProtectionContainersSwitchProtectionResponse,
      OperationState<ReplicationProtectionContainersSwitchProtectionResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to switch protection from one container to another or one replication provider to another.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Unique fabric name.
   * @param protectionContainerName Protection container name.
   * @param switchInput Switch protection input.
   * @param options The options parameters.
   */
  async beginSwitchProtectionAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    switchInput: SwitchProtectionInput,
    options?: ReplicationProtectionContainersSwitchProtectionOptionalParams
  ): Promise<ReplicationProtectionContainersSwitchProtectionResponse> {
    const poller = await this.beginSwitchProtection(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      switchInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the protection containers in a vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  private _list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationProtectionContainersListOptionalParams
  ): Promise<ReplicationProtectionContainersListResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * ListByReplicationFabricsNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param nextLink The nextLink from the previous successful call to the ListByReplicationFabrics
   *                 method.
   * @param options The options parameters.
   */
  private _listByReplicationFabricsNext(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    nextLink: string,
    options?: ReplicationProtectionContainersListByReplicationFabricsNextOptionalParams
  ): Promise<
    ReplicationProtectionContainersListByReplicationFabricsNextResponse
  > {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, fabricName, nextLink, options },
      listByReplicationFabricsNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: ReplicationProtectionContainersListNextOptionalParams
  ): Promise<ReplicationProtectionContainersListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationFabricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainer
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainer
    },
    201: {
      bodyMapper: Mappers.ProtectionContainer
    },
    202: {
      bodyMapper: Mappers.ProtectionContainer
    },
    204: {
      bodyMapper: Mappers.ProtectionContainer
    }
  },
  requestBody: Parameters.creationInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const discoverProtectableItemOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/discoverProtectableItem",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainer
    },
    201: {
      bodyMapper: Mappers.ProtectionContainer
    },
    202: {
      bodyMapper: Mappers.ProtectionContainer
    },
    204: {
      bodyMapper: Mappers.ProtectionContainer
    }
  },
  requestBody: Parameters.discoverProtectableItemRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/remove",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  serializer
};
const switchProtectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/switchprotection",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainer
    },
    201: {
      bodyMapper: Mappers.ProtectionContainer
    },
    202: {
      bodyMapper: Mappers.ProtectionContainer
    },
    204: {
      bodyMapper: Mappers.ProtectionContainer
    }
  },
  requestBody: Parameters.switchInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationFabricsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerCollection
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerCollection
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
