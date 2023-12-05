/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Schedules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Schedule,
  SchedulesListNextOptionalParams,
  SchedulesListOptionalParams,
  SchedulesListResponse,
  SchedulesListApplicableNextOptionalParams,
  SchedulesListApplicableOptionalParams,
  SchedulesListApplicableResponse,
  SchedulesGetOptionalParams,
  SchedulesGetResponse,
  SchedulesCreateOrUpdateOptionalParams,
  SchedulesCreateOrUpdateResponse,
  SchedulesDeleteOptionalParams,
  ScheduleFragment,
  SchedulesUpdateOptionalParams,
  SchedulesUpdateResponse,
  SchedulesExecuteOptionalParams,
  SchedulesListNextResponse,
  SchedulesListApplicableNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Schedules operations. */
export class SchedulesImpl implements Schedules {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class Schedules class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List schedules in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListOptionalParams
  ): PagedAsyncIterableIterator<Schedule> {
    const iter = this.listPagingAll(resourceGroupName, labName, options);
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
          labName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Schedule[]> {
    let result: SchedulesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, labName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
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
    labName: string,
    options?: SchedulesListOptionalParams
  ): AsyncIterableIterator<Schedule> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all applicable schedules
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  public listApplicable(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesListApplicableOptionalParams
  ): PagedAsyncIterableIterator<Schedule> {
    const iter = this.listApplicablePagingAll(
      resourceGroupName,
      labName,
      name,
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
        return this.listApplicablePagingPage(
          resourceGroupName,
          labName,
          name,
          options,
          settings
        );
      }
    };
  }

  private async *listApplicablePagingPage(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesListApplicableOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Schedule[]> {
    let result: SchedulesListApplicableResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listApplicable(
        resourceGroupName,
        labName,
        name,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listApplicableNext(
        resourceGroupName,
        labName,
        name,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listApplicablePagingAll(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesListApplicableOptionalParams
  ): AsyncIterableIterator<Schedule> {
    for await (const page of this.listApplicablePagingPage(
      resourceGroupName,
      labName,
      name,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List schedules in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListOptionalParams
  ): Promise<SchedulesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, options },
      listOperationSpec
    );
  }

  /**
   * Get schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesGetOptionalParams
  ): Promise<SchedulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    schedule: Schedule,
    options?: SchedulesCreateOrUpdateOptionalParams
  ): Promise<SchedulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, schedule, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Allows modifying tags of schedules. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param schedule Allows modifying tags of schedules. All other properties will be ignored.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    name: string,
    schedule: ScheduleFragment,
    options?: SchedulesUpdateOptionalParams
  ): Promise<SchedulesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, schedule, options },
      updateOperationSpec
    );
  }

  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  async beginExecute(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesExecuteOptionalParams
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
      args: { resourceGroupName, labName, name, options },
      spec: executeOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  async beginExecuteAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesExecuteOptionalParams
  ): Promise<void> {
    const poller = await this.beginExecute(
      resourceGroupName,
      labName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all applicable schedules
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  private _listApplicable(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: SchedulesListApplicableOptionalParams
  ): Promise<SchedulesListApplicableResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      listApplicableOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    nextLink: string,
    options?: SchedulesListNextOptionalParams
  ): Promise<SchedulesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListApplicableNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the schedule.
   * @param nextLink The nextLink from the previous successful call to the ListApplicable method.
   * @param options The options parameters.
   */
  private _listApplicableNext(
    resourceGroupName: string,
    labName: string,
    name: string,
    nextLink: string,
    options?: SchedulesListApplicableNextOptionalParams
  ): Promise<SchedulesListApplicableNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, nextLink, options },
      listApplicableNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    201: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.schedule,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.schedule1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const executeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}/execute",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listApplicableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}/listApplicable",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listApplicableNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
