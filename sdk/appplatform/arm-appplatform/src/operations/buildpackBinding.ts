/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BuildpackBinding } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BuildpackBindingResource,
  BuildpackBindingListForClusterNextOptionalParams,
  BuildpackBindingListForClusterOptionalParams,
  BuildpackBindingListForClusterResponse,
  BuildpackBindingListNextOptionalParams,
  BuildpackBindingListOptionalParams,
  BuildpackBindingListResponse,
  BuildpackBindingGetOptionalParams,
  BuildpackBindingGetResponse,
  BuildpackBindingCreateOrUpdateOptionalParams,
  BuildpackBindingCreateOrUpdateResponse,
  BuildpackBindingDeleteOptionalParams,
  BuildpackBindingListForClusterNextResponse,
  BuildpackBindingListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BuildpackBinding operations. */
export class BuildpackBindingImpl implements BuildpackBinding {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class BuildpackBinding class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Get collection of buildpack bindings under all builders.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  public listForCluster(
    resourceGroupName: string,
    serviceName: string,
    options?: BuildpackBindingListForClusterOptionalParams,
  ): PagedAsyncIterableIterator<BuildpackBindingResource> {
    const iter = this.listForClusterPagingAll(
      resourceGroupName,
      serviceName,
      options,
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
        return this.listForClusterPagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listForClusterPagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: BuildpackBindingListForClusterOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BuildpackBindingResource[]> {
    let result: BuildpackBindingListForClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForCluster(
        resourceGroupName,
        serviceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForClusterNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForClusterPagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: BuildpackBindingListForClusterOptionalParams,
  ): AsyncIterableIterator<BuildpackBindingResource> {
    for await (const page of this.listForClusterPagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Handles requests to list all buildpack bindings in a builder.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    options?: BuildpackBindingListOptionalParams,
  ): PagedAsyncIterableIterator<BuildpackBindingResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      buildServiceName,
      builderName,
      options,
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
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          buildServiceName,
          builderName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    options?: BuildpackBindingListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BuildpackBindingResource[]> {
    let result: BuildpackBindingListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        buildServiceName,
        builderName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        buildServiceName,
        builderName,
        continuationToken,
        options,
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
    buildServiceName: string,
    builderName: string,
    options?: BuildpackBindingListOptionalParams,
  ): AsyncIterableIterator<BuildpackBindingResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      buildServiceName,
      builderName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get collection of buildpack bindings under all builders.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  private _listForCluster(
    resourceGroupName: string,
    serviceName: string,
    options?: BuildpackBindingListForClusterOptionalParams,
  ): Promise<BuildpackBindingListForClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listForClusterOperationSpec,
    );
  }

  /**
   * Get a buildpack binding by name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    options?: BuildpackBindingGetOptionalParams,
  ): Promise<BuildpackBindingGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        buildServiceName,
        builderName,
        buildpackBindingName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Create or update a buildpack binding.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param buildpackBinding The target buildpack binding for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    buildpackBinding: BuildpackBindingResource,
    options?: BuildpackBindingCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BuildpackBindingCreateOrUpdateResponse>,
      BuildpackBindingCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BuildpackBindingCreateOrUpdateResponse> => {
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
      args: {
        resourceGroupName,
        serviceName,
        buildServiceName,
        builderName,
        buildpackBindingName,
        buildpackBinding,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      BuildpackBindingCreateOrUpdateResponse,
      OperationState<BuildpackBindingCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a buildpack binding.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param buildpackBinding The target buildpack binding for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    buildpackBinding: BuildpackBindingResource,
    options?: BuildpackBindingCreateOrUpdateOptionalParams,
  ): Promise<BuildpackBindingCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      buildServiceName,
      builderName,
      buildpackBindingName,
      buildpackBinding,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to delete a Buildpack Binding
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    options?: BuildpackBindingDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
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
      args: {
        resourceGroupName,
        serviceName,
        buildServiceName,
        builderName,
        buildpackBindingName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to delete a Buildpack Binding
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    options?: BuildpackBindingDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      buildServiceName,
      builderName,
      buildpackBindingName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Handles requests to list all buildpack bindings in a builder.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    options?: BuildpackBindingListOptionalParams,
  ): Promise<BuildpackBindingListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        buildServiceName,
        builderName,
        options,
      },
      listOperationSpec,
    );
  }

  /**
   * ListForClusterNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param nextLink The nextLink from the previous successful call to the ListForCluster method.
   * @param options The options parameters.
   */
  private _listForClusterNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: BuildpackBindingListForClusterNextOptionalParams,
  ): Promise<BuildpackBindingListForClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listForClusterNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    nextLink: string,
    options?: BuildpackBindingListNextOptionalParams,
  ): Promise<BuildpackBindingListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        buildServiceName,
        builderName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listForClusterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildpackBindings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildpackBindingResourceCollection,
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
    Parameters.serviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildpackBindingResource,
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
    Parameters.serviceName,
    Parameters.buildServiceName,
    Parameters.builderName,
    Parameters.buildpackBindingName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BuildpackBindingResource,
    },
    201: {
      bodyMapper: Mappers.BuildpackBindingResource,
    },
    202: {
      bodyMapper: Mappers.BuildpackBindingResource,
    },
    204: {
      bodyMapper: Mappers.BuildpackBindingResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.buildpackBinding,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.buildServiceName,
    Parameters.builderName,
    Parameters.buildpackBindingName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings/{buildpackBindingName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
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
    Parameters.serviceName,
    Parameters.buildServiceName,
    Parameters.builderName,
    Parameters.buildpackBindingName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/buildServices/{buildServiceName}/builders/{builderName}/buildpackBindings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildpackBindingResourceCollection,
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
    Parameters.serviceName,
    Parameters.buildServiceName,
    Parameters.builderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildpackBindingResourceCollection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildpackBindingResourceCollection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink,
    Parameters.buildServiceName,
    Parameters.builderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
