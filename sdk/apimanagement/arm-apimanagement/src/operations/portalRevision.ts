/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PortalRevision } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PortalRevisionContract,
  PortalRevisionListByServiceNextOptionalParams,
  PortalRevisionListByServiceOptionalParams,
  PortalRevisionListByServiceResponse,
  PortalRevisionGetEntityTagOptionalParams,
  PortalRevisionGetEntityTagResponse,
  PortalRevisionGetOptionalParams,
  PortalRevisionGetResponse,
  PortalRevisionCreateOrUpdateOptionalParams,
  PortalRevisionCreateOrUpdateResponse,
  PortalRevisionUpdateOptionalParams,
  PortalRevisionUpdateResponse,
  PortalRevisionListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PortalRevision operations. */
export class PortalRevisionImpl implements PortalRevision {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class PortalRevision class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists developer portal's revisions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: PortalRevisionListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<PortalRevisionContract> {
    const iter = this.listByServicePagingAll(
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: PortalRevisionListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PortalRevisionContract[]> {
    let result: PortalRevisionListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
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
      result = await this._listByServiceNext(
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

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: PortalRevisionListByServiceOptionalParams,
  ): AsyncIterableIterator<PortalRevisionContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists developer portal's revisions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: PortalRevisionListByServiceOptionalParams,
  ): Promise<PortalRevisionListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the developer portal revision specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalRevisionId Portal revision identifier. Must be unique in the current API Management
   *                         service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    portalRevisionId: string,
    options?: PortalRevisionGetEntityTagOptionalParams,
  ): Promise<PortalRevisionGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, portalRevisionId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the developer portal's revision specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalRevisionId Portal revision identifier. Must be unique in the current API Management
   *                         service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    portalRevisionId: string,
    options?: PortalRevisionGetOptionalParams,
  ): Promise<PortalRevisionGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, portalRevisionId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new developer portal's revision by running the portal's publishing. The `isCurrent`
   * property indicates if the revision is publicly accessible.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalRevisionId Portal revision identifier. Must be unique in the current API Management
   *                         service instance.
   * @param parameters Portal Revision's contract details.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    portalRevisionId: string,
    parameters: PortalRevisionContract,
    options?: PortalRevisionCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PortalRevisionCreateOrUpdateResponse>,
      PortalRevisionCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PortalRevisionCreateOrUpdateResponse> => {
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
        portalRevisionId,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      PortalRevisionCreateOrUpdateResponse,
      OperationState<PortalRevisionCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new developer portal's revision by running the portal's publishing. The `isCurrent`
   * property indicates if the revision is publicly accessible.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalRevisionId Portal revision identifier. Must be unique in the current API Management
   *                         service instance.
   * @param parameters Portal Revision's contract details.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    portalRevisionId: string,
    parameters: PortalRevisionContract,
    options?: PortalRevisionCreateOrUpdateOptionalParams,
  ): Promise<PortalRevisionCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      portalRevisionId,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the description of specified portal revision or makes it current.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalRevisionId Portal revision identifier. Must be unique in the current API Management
   *                         service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Portal Revision's contract details.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    serviceName: string,
    portalRevisionId: string,
    ifMatch: string,
    parameters: PortalRevisionContract,
    options?: PortalRevisionUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PortalRevisionUpdateResponse>,
      PortalRevisionUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PortalRevisionUpdateResponse> => {
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
        portalRevisionId,
        ifMatch,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      PortalRevisionUpdateResponse,
      OperationState<PortalRevisionUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the description of specified portal revision or makes it current.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalRevisionId Portal revision identifier. Must be unique in the current API Management
   *                         service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Portal Revision's contract details.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    portalRevisionId: string,
    ifMatch: string,
    parameters: PortalRevisionContract,
    options?: PortalRevisionUpdateOptionalParams,
  ): Promise<PortalRevisionUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      serviceName,
      portalRevisionId,
      ifMatch,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: PortalRevisionListByServiceNextOptionalParams,
  ): Promise<PortalRevisionListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalRevisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortalRevisionCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalRevisions/{portalRevisionId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.PortalRevisionGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.portalRevisionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalRevisions/{portalRevisionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.portalRevisionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalRevisions/{portalRevisionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionCreateOrUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionCreateOrUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters64,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.portalRevisionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalRevisions/{portalRevisionId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.PortalRevisionContract,
      headersMapper: Mappers.PortalRevisionUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters64,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.portalRevisionId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortalRevisionCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
