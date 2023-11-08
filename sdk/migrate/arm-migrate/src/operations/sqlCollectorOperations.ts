/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SqlCollectorOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateAssessmentService } from "../azureMigrateAssessmentService";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  SqlCollector,
  SqlCollectorOperationsListByAssessmentProjectNextOptionalParams,
  SqlCollectorOperationsListByAssessmentProjectOptionalParams,
  SqlCollectorOperationsListByAssessmentProjectResponse,
  SqlCollectorOperationsGetOptionalParams,
  SqlCollectorOperationsGetResponse,
  SqlCollectorOperationsCreateOptionalParams,
  SqlCollectorOperationsCreateResponse,
  SqlCollectorOperationsDeleteOptionalParams,
  SqlCollectorOperationsListByAssessmentProjectNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlCollectorOperations operations. */
export class SqlCollectorOperationsImpl implements SqlCollectorOperations {
  private readonly client: AzureMigrateAssessmentService;

  /**
   * Initialize a new instance of the class SqlCollectorOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateAssessmentService) {
    this.client = client;
  }

  /**
   * List SqlCollector resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  public listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: SqlCollectorOperationsListByAssessmentProjectOptionalParams
  ): PagedAsyncIterableIterator<SqlCollector> {
    const iter = this.listByAssessmentProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByAssessmentProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listByAssessmentProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: SqlCollectorOperationsListByAssessmentProjectOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SqlCollector[]> {
    let result: SqlCollectorOperationsListByAssessmentProjectResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAssessmentProject(
        resourceGroupName,
        projectName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAssessmentProjectNext(
        resourceGroupName,
        projectName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAssessmentProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: SqlCollectorOperationsListByAssessmentProjectOptionalParams
  ): AsyncIterableIterator<SqlCollector> {
    for await (const page of this.listByAssessmentProjectPagingPage(
      resourceGroupName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List SqlCollector resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  private _listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: SqlCollectorOperationsListByAssessmentProjectOptionalParams
  ): Promise<SqlCollectorOperationsListByAssessmentProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByAssessmentProjectOperationSpec
    );
  }

  /**
   * Get a SqlCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param collectorName Sql collector ARM name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    collectorName: string,
    options?: SqlCollectorOperationsGetOptionalParams
  ): Promise<SqlCollectorOperationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, collectorName, options },
      getOperationSpec
    );
  }

  /**
   * Create a SqlCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param collectorName Sql collector ARM name.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    projectName: string,
    collectorName: string,
    resource: SqlCollector,
    options?: SqlCollectorOperationsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SqlCollectorOperationsCreateResponse>,
      SqlCollectorOperationsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlCollectorOperationsCreateResponse> => {
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
        projectName,
        collectorName,
        resource,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      SqlCollectorOperationsCreateResponse,
      OperationState<SqlCollectorOperationsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a SqlCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param collectorName Sql collector ARM name.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    projectName: string,
    collectorName: string,
    resource: SqlCollector,
    options?: SqlCollectorOperationsCreateOptionalParams
  ): Promise<SqlCollectorOperationsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      projectName,
      collectorName,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a SqlCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param collectorName Sql collector ARM name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    collectorName: string,
    options?: SqlCollectorOperationsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, collectorName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByAssessmentProjectNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param nextLink The nextLink from the previous successful call to the ListByAssessmentProject
   *                 method.
   * @param options The options parameters.
   */
  private _listByAssessmentProjectNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: SqlCollectorOperationsListByAssessmentProjectNextOptionalParams
  ): Promise<SqlCollectorOperationsListByAssessmentProjectNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listByAssessmentProjectNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAssessmentProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlCollectorListResult
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
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors/{collectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlCollector
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
    Parameters.projectName,
    Parameters.collectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors/{collectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlCollector
    },
    201: {
      bodyMapper: Mappers.SqlCollector
    },
    202: {
      bodyMapper: Mappers.SqlCollector
    },
    204: {
      bodyMapper: Mappers.SqlCollector
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.collectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors/{collectorName}",
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
    Parameters.projectName,
    Parameters.collectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAssessmentProjectNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlCollectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
