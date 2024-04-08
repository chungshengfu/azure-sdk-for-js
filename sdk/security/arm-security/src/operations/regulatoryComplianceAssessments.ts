/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RegulatoryComplianceAssessments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  RegulatoryComplianceAssessment,
  RegulatoryComplianceAssessmentsListNextOptionalParams,
  RegulatoryComplianceAssessmentsListOptionalParams,
  RegulatoryComplianceAssessmentsListResponse,
  RegulatoryComplianceAssessmentsGetOptionalParams,
  RegulatoryComplianceAssessmentsGetResponse,
  RegulatoryComplianceAssessmentsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RegulatoryComplianceAssessments operations. */
export class RegulatoryComplianceAssessmentsImpl
  implements RegulatoryComplianceAssessments
{
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class RegulatoryComplianceAssessments class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Details and state of assessments mapped to selected regulatory compliance control
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param options The options parameters.
   */
  public list(
    regulatoryComplianceStandardName: string,
    regulatoryComplianceControlName: string,
    options?: RegulatoryComplianceAssessmentsListOptionalParams,
  ): PagedAsyncIterableIterator<RegulatoryComplianceAssessment> {
    const iter = this.listPagingAll(
      regulatoryComplianceStandardName,
      regulatoryComplianceControlName,
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
          regulatoryComplianceStandardName,
          regulatoryComplianceControlName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    regulatoryComplianceStandardName: string,
    regulatoryComplianceControlName: string,
    options?: RegulatoryComplianceAssessmentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RegulatoryComplianceAssessment[]> {
    let result: RegulatoryComplianceAssessmentsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
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
    regulatoryComplianceStandardName: string,
    regulatoryComplianceControlName: string,
    options?: RegulatoryComplianceAssessmentsListOptionalParams,
  ): AsyncIterableIterator<RegulatoryComplianceAssessment> {
    for await (const page of this.listPagingPage(
      regulatoryComplianceStandardName,
      regulatoryComplianceControlName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Details and state of assessments mapped to selected regulatory compliance control
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param options The options parameters.
   */
  private _list(
    regulatoryComplianceStandardName: string,
    regulatoryComplianceControlName: string,
    options?: RegulatoryComplianceAssessmentsListOptionalParams,
  ): Promise<RegulatoryComplianceAssessmentsListResponse> {
    return this.client.sendOperationRequest(
      {
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        options,
      },
      listOperationSpec,
    );
  }

  /**
   * Supported regulatory compliance details and state for selected assessment
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
   * @param options The options parameters.
   */
  get(
    regulatoryComplianceStandardName: string,
    regulatoryComplianceControlName: string,
    regulatoryComplianceAssessmentName: string,
    options?: RegulatoryComplianceAssessmentsGetOptionalParams,
  ): Promise<RegulatoryComplianceAssessmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        regulatoryComplianceAssessmentName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    regulatoryComplianceStandardName: string,
    regulatoryComplianceControlName: string,
    nextLink: string,
    options?: RegulatoryComplianceAssessmentsListNextOptionalParams,
  ): Promise<RegulatoryComplianceAssessmentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessmentList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments/{regulatoryComplianceAssessmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessment,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName,
    Parameters.regulatoryComplianceAssessmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessmentList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
