/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedCertificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ManagedCertificate,
  ManagedCertificatesListNextOptionalParams,
  ManagedCertificatesListOptionalParams,
  ManagedCertificatesListResponse,
  ManagedCertificatesGetOptionalParams,
  ManagedCertificatesGetResponse,
  ManagedCertificatesCreateOrUpdateOptionalParams,
  ManagedCertificatesCreateOrUpdateResponse,
  ManagedCertificatesDeleteOptionalParams,
  ManagedCertificatePatch,
  ManagedCertificatesUpdateOptionalParams,
  ManagedCertificatesUpdateResponse,
  ManagedCertificatesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedCertificates operations. */
export class ManagedCertificatesImpl implements ManagedCertificates {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ManagedCertificates class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Managed Certificates in a given managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedCertificatesListOptionalParams
  ): PagedAsyncIterableIterator<ManagedCertificate> {
    const iter = this.listPagingAll(
      resourceGroupName,
      environmentName,
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
        return this.listPagingPage(
          resourceGroupName,
          environmentName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedCertificatesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedCertificate[]> {
    let result: ManagedCertificatesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, environmentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        environmentName,
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
    environmentName: string,
    options?: ManagedCertificatesListOptionalParams
  ): AsyncIterableIterator<ManagedCertificate> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      environmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the specified Managed Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param managedCertificateName Name of the Managed Certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    managedCertificateName: string,
    options?: ManagedCertificatesGetOptionalParams
  ): Promise<ManagedCertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, managedCertificateName, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update a Managed Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param managedCertificateName Name of the Managed Certificate.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    managedCertificateName: string,
    options?: ManagedCertificatesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedCertificatesCreateOrUpdateResponse>,
      ManagedCertificatesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedCertificatesCreateOrUpdateResponse> => {
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
      { resourceGroupName, environmentName, managedCertificateName, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or Update a Managed Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param managedCertificateName Name of the Managed Certificate.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    environmentName: string,
    managedCertificateName: string,
    options?: ManagedCertificatesCreateOrUpdateOptionalParams
  ): Promise<ManagedCertificatesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      environmentName,
      managedCertificateName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified Managed Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param managedCertificateName Name of the Managed Certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    managedCertificateName: string,
    options?: ManagedCertificatesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, managedCertificateName, options },
      deleteOperationSpec
    );
  }

  /**
   * Patches a managed certificate. Oly patching of tags is supported
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param managedCertificateName Name of the Managed Certificate.
   * @param managedCertificateEnvelope Properties of a managed certificate that need to be updated
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    environmentName: string,
    managedCertificateName: string,
    managedCertificateEnvelope: ManagedCertificatePatch,
    options?: ManagedCertificatesUpdateOptionalParams
  ): Promise<ManagedCertificatesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        managedCertificateName,
        managedCertificateEnvelope,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Get the Managed Certificates in a given managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedCertificatesListOptionalParams
  ): Promise<ManagedCertificatesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    environmentName: string,
    nextLink: string,
    options?: ManagedCertificatesListNextOptionalParams
  ): Promise<ManagedCertificatesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCertificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName,
    Parameters.managedCertificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCertificate
    },
    201: {
      bodyMapper: Mappers.ManagedCertificate
    },
    202: {
      bodyMapper: Mappers.ManagedCertificate
    },
    204: {
      bodyMapper: Mappers.ManagedCertificate
    },
    400: {
      isError: true
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.managedCertificateEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName,
    Parameters.managedCertificateName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName,
    Parameters.managedCertificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates/{managedCertificateName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCertificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.managedCertificateEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName,
    Parameters.managedCertificateName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/managedCertificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedCertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
