/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AccessReviewInstanceDecisions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewDecision,
  AccessReviewInstanceDecisionsListNextOptionalParams,
  AccessReviewInstanceDecisionsListOptionalParams,
  AccessReviewInstanceDecisionsListResponse,
  AccessReviewInstanceDecisionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessReviewInstanceDecisions operations. */
export class AccessReviewInstanceDecisionsImpl
  implements AccessReviewInstanceDecisions {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AccessReviewInstanceDecisions class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get access review instance decisions
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  public list(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceDecisionsListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewDecision> {
    const iter = this.listPagingAll(scheduleDefinitionId, id, options);
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
        return this.listPagingPage(scheduleDefinitionId, id, options, settings);
      }
    };
  }

  private async *listPagingPage(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceDecisionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AccessReviewDecision[]> {
    let result: AccessReviewInstanceDecisionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(scheduleDefinitionId, id, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        scheduleDefinitionId,
        id,
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
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceDecisionsListOptionalParams
  ): AsyncIterableIterator<AccessReviewDecision> {
    for await (const page of this.listPagingPage(
      scheduleDefinitionId,
      id,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get access review instance decisions
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  private _list(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceDecisionsListOptionalParams
  ): Promise<AccessReviewInstanceDecisionsListResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scheduleDefinitionId: string,
    id: string,
    nextLink: string,
    options?: AccessReviewInstanceDecisionsListNextOptionalParams
  ): Promise<AccessReviewInstanceDecisionsListNextResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/decisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewDecisionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewDecisionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
