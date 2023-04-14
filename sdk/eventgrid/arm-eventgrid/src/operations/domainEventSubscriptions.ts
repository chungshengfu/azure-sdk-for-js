/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DomainEventSubscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  EventSubscription,
  DomainEventSubscriptionsListNextOptionalParams,
  DomainEventSubscriptionsListOptionalParams,
  DomainEventSubscriptionsListResponse,
  DomainEventSubscriptionsGetDeliveryAttributesOptionalParams,
  DomainEventSubscriptionsGetDeliveryAttributesResponse,
  DomainEventSubscriptionsGetOptionalParams,
  DomainEventSubscriptionsGetResponse,
  DomainEventSubscriptionsCreateOrUpdateOptionalParams,
  DomainEventSubscriptionsCreateOrUpdateResponse,
  DomainEventSubscriptionsDeleteOptionalParams,
  EventSubscriptionUpdateParameters,
  DomainEventSubscriptionsUpdateOptionalParams,
  DomainEventSubscriptionsUpdateResponse,
  DomainEventSubscriptionsGetFullUrlOptionalParams,
  DomainEventSubscriptionsGetFullUrlResponse,
  DomainEventSubscriptionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DomainEventSubscriptions operations. */
export class DomainEventSubscriptionsImpl implements DomainEventSubscriptions {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class DomainEventSubscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all event subscriptions that have been created for a specific topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    domainName: string,
    options?: DomainEventSubscriptionsListOptionalParams
  ): PagedAsyncIterableIterator<EventSubscription> {
    const iter = this.listPagingAll(resourceGroupName, domainName, options);
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
          domainName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    domainName: string,
    options?: DomainEventSubscriptionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EventSubscription[]> {
    let result: DomainEventSubscriptionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, domainName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        domainName,
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
    domainName: string,
    options?: DomainEventSubscriptionsListOptionalParams
  ): AsyncIterableIterator<EventSubscription> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      domainName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all delivery attributes for an event subscription for domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetDeliveryAttributesOptionalParams
  ): Promise<DomainEventSubscriptionsGetDeliveryAttributesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, eventSubscriptionName, options },
      getDeliveryAttributesOperationSpec
    );
  }

  /**
   * Get properties of an event subscription of a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the partner topic.
   * @param eventSubscriptionName Name of the event subscription to be found. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetOptionalParams
  ): Promise<DomainEventSubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, eventSubscriptionName, options },
      getOperationSpec
    );
  }

  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DomainEventSubscriptionsCreateOrUpdateResponse>,
      DomainEventSubscriptionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DomainEventSubscriptionsCreateOrUpdateResponse> => {
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
        domainName,
        eventSubscriptionName,
        eventSubscriptionInfo,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      DomainEventSubscriptionsCreateOrUpdateResponse,
      OperationState<DomainEventSubscriptionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainEventSubscriptionsCreateOrUpdateOptionalParams
  ): Promise<DomainEventSubscriptionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      domainName,
      eventSubscriptionName,
      eventSubscriptionInfo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete an existing event subscription for a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be deleted. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsDeleteOptionalParams
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
      args: { resourceGroupName, domainName, eventSubscriptionName, options },
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
   * Delete an existing event subscription for a domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be deleted. Event subscription names
   *                              must be between 3 and 100 characters in length and use alphanumeric letters only.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      domainName,
      eventSubscriptionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainEventSubscriptionsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DomainEventSubscriptionsUpdateResponse>,
      DomainEventSubscriptionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DomainEventSubscriptionsUpdateResponse> => {
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
        domainName,
        eventSubscriptionName,
        eventSubscriptionUpdateParameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      DomainEventSubscriptionsUpdateResponse,
      OperationState<DomainEventSubscriptionsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update an existing event subscription for a topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainEventSubscriptionsUpdateOptionalParams
  ): Promise<DomainEventSubscriptionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      domainName,
      eventSubscriptionName,
      eventSubscriptionUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the full endpoint URL for an event subscription for domain.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    domainName: string,
    eventSubscriptionName: string,
    options?: DomainEventSubscriptionsGetFullUrlOptionalParams
  ): Promise<DomainEventSubscriptionsGetFullUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, eventSubscriptionName, options },
      getFullUrlOperationSpec
    );
  }

  /**
   * List all event subscriptions that have been created for a specific topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    domainName: string,
    options?: DomainEventSubscriptionsListOptionalParams
  ): Promise<DomainEventSubscriptionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    domainName: string,
    nextLink: string,
    options?: DomainEventSubscriptionsListNextOptionalParams
  ): Promise<DomainEventSubscriptionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getDeliveryAttributesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeliveryAttributeListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscription
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscription
    },
    201: {
      bodyMapper: Mappers.EventSubscription
    },
    202: {
      bodyMapper: Mappers.EventSubscription
    },
    204: {
      bodyMapper: Mappers.EventSubscription
    },
    default: {}
  },
  requestBody: Parameters.eventSubscriptionInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.eventSubscriptionName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscription
    },
    201: {
      bodyMapper: Mappers.EventSubscription
    },
    202: {
      bodyMapper: Mappers.EventSubscription
    },
    204: {
      bodyMapper: Mappers.EventSubscription
    },
    default: {}
  },
  requestBody: Parameters.eventSubscriptionUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getFullUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscriptionFullUrl
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName,
    Parameters.eventSubscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscriptionsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSubscriptionsListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
