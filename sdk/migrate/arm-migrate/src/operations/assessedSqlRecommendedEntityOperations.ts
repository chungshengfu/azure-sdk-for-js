/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AssessedSqlRecommendedEntityOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateAssessmentService } from "../azureMigrateAssessmentService";
import {
  AssessedSqlRecommendedEntity,
  AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2NextOptionalParams,
  AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2OptionalParams,
  AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Response,
  AssessedSqlRecommendedEntityOperationsGetOptionalParams,
  AssessedSqlRecommendedEntityOperationsGetResponse,
  AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2NextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AssessedSqlRecommendedEntityOperations operations. */
export class AssessedSqlRecommendedEntityOperationsImpl
  implements AssessedSqlRecommendedEntityOperations {
  private readonly client: AzureMigrateAssessmentService;

  /**
   * Initialize a new instance of the class AssessedSqlRecommendedEntityOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateAssessmentService) {
    this.client = client;
  }

  /**
   * List AssessedSqlRecommendedEntity resources by SqlAssessmentV2
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param groupName Group ARM name
   * @param assessmentName SQL Assessment arm name.
   * @param options The options parameters.
   */
  public listBySqlAssessmentV2(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2OptionalParams
  ): PagedAsyncIterableIterator<AssessedSqlRecommendedEntity> {
    const iter = this.listBySqlAssessmentV2PagingAll(
      resourceGroupName,
      projectName,
      groupName,
      assessmentName,
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
        return this.listBySqlAssessmentV2PagingPage(
          resourceGroupName,
          projectName,
          groupName,
          assessmentName,
          options,
          settings
        );
      }
    };
  }

  private async *listBySqlAssessmentV2PagingPage(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2OptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AssessedSqlRecommendedEntity[]> {
    let result: AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Response;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySqlAssessmentV2(
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySqlAssessmentV2Next(
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySqlAssessmentV2PagingAll(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2OptionalParams
  ): AsyncIterableIterator<AssessedSqlRecommendedEntity> {
    for await (const page of this.listBySqlAssessmentV2PagingPage(
      resourceGroupName,
      projectName,
      groupName,
      assessmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List AssessedSqlRecommendedEntity resources by SqlAssessmentV2
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param groupName Group ARM name
   * @param assessmentName SQL Assessment arm name.
   * @param options The options parameters.
   */
  private _listBySqlAssessmentV2(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    options?: AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2OptionalParams
  ): Promise<
    AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Response
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, groupName, assessmentName, options },
      listBySqlAssessmentV2OperationSpec
    );
  }

  /**
   * Get a AssessedSqlRecommendedEntity
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param groupName Group ARM name
   * @param assessmentName SQL Assessment arm name.
   * @param recommendedAssessedEntityName Sql assessment Assessed Recommended Entity ARM name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    recommendedAssessedEntityName: string,
    options?: AssessedSqlRecommendedEntityOperationsGetOptionalParams
  ): Promise<AssessedSqlRecommendedEntityOperationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        recommendedAssessedEntityName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListBySqlAssessmentV2Next
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param groupName Group ARM name
   * @param assessmentName SQL Assessment arm name.
   * @param nextLink The nextLink from the previous successful call to the ListBySqlAssessmentV2 method.
   * @param options The options parameters.
   */
  private _listBySqlAssessmentV2Next(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    assessmentName: string,
    nextLink: string,
    options?: AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2NextOptionalParams
  ): Promise<
    AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2NextResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        nextLink,
        options
      },
      listBySqlAssessmentV2NextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySqlAssessmentV2OperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/recommendedAssessedEntities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessedSqlRecommendedEntityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.pageSize,
    Parameters.continuationToken,
    Parameters.totalRecordCount
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/recommendedAssessedEntities/{recommendedAssessedEntityName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessedSqlRecommendedEntity
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
    Parameters.groupName,
    Parameters.assessmentName,
    Parameters.recommendedAssessedEntityName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySqlAssessmentV2NextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessedSqlRecommendedEntityListResult
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
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
