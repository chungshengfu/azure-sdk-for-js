/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AzureDevOpsRepos } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AzureDevOpsRepository,
  AzureDevOpsReposListNextOptionalParams,
  AzureDevOpsReposListOptionalParams,
  AzureDevOpsReposListResponse,
  AzureDevOpsReposGetOptionalParams,
  AzureDevOpsReposGetResponse,
  AzureDevOpsReposCreateOrUpdateOptionalParams,
  AzureDevOpsReposCreateOrUpdateResponse,
  AzureDevOpsReposUpdateOptionalParams,
  AzureDevOpsReposUpdateResponse,
  AzureDevOpsReposListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureDevOpsRepos operations. */
export class AzureDevOpsReposImpl implements AzureDevOpsRepos {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class AzureDevOpsRepos class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Returns a list of Azure DevOps repositories onboarded to the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    options?: AzureDevOpsReposListOptionalParams
  ): PagedAsyncIterableIterator<AzureDevOpsRepository> {
    const iter = this.listPagingAll(
      resourceGroupName,
      securityConnectorName,
      orgName,
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
        return this.listPagingPage(
          resourceGroupName,
          securityConnectorName,
          orgName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    options?: AzureDevOpsReposListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AzureDevOpsRepository[]> {
    let result: AzureDevOpsReposListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        securityConnectorName,
        orgName,
        projectName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        securityConnectorName,
        orgName,
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

  private async *listPagingAll(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    options?: AzureDevOpsReposListOptionalParams
  ): AsyncIterableIterator<AzureDevOpsRepository> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      securityConnectorName,
      orgName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of Azure DevOps repositories onboarded to the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    options?: AzureDevOpsReposListOptionalParams
  ): Promise<AzureDevOpsReposListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        securityConnectorName,
        orgName,
        projectName,
        options
      },
      listOperationSpec
    );
  }

  /**
   * Returns a monitored Azure DevOps repository resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param repoName The repository name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    repoName: string,
    options?: AzureDevOpsReposGetOptionalParams
  ): Promise<AzureDevOpsReposGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        securityConnectorName,
        orgName,
        projectName,
        repoName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a monitored Azure DevOps repository resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param repoName The repository name.
   * @param azureDevOpsRepository The Azure DevOps repository resource payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    repoName: string,
    azureDevOpsRepository: AzureDevOpsRepository,
    options?: AzureDevOpsReposCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AzureDevOpsReposCreateOrUpdateResponse>,
      AzureDevOpsReposCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AzureDevOpsReposCreateOrUpdateResponse> => {
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
        securityConnectorName,
        orgName,
        projectName,
        repoName,
        azureDevOpsRepository,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      AzureDevOpsReposCreateOrUpdateResponse,
      OperationState<AzureDevOpsReposCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a monitored Azure DevOps repository resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param repoName The repository name.
   * @param azureDevOpsRepository The Azure DevOps repository resource payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    repoName: string,
    azureDevOpsRepository: AzureDevOpsRepository,
    options?: AzureDevOpsReposCreateOrUpdateOptionalParams
  ): Promise<AzureDevOpsReposCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      securityConnectorName,
      orgName,
      projectName,
      repoName,
      azureDevOpsRepository,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a monitored Azure DevOps repository resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param repoName The repository name.
   * @param azureDevOpsRepository The Azure DevOps repository resource payload.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    repoName: string,
    azureDevOpsRepository: AzureDevOpsRepository,
    options?: AzureDevOpsReposUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AzureDevOpsReposUpdateResponse>,
      AzureDevOpsReposUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AzureDevOpsReposUpdateResponse> => {
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
        securityConnectorName,
        orgName,
        projectName,
        repoName,
        azureDevOpsRepository,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      AzureDevOpsReposUpdateResponse,
      OperationState<AzureDevOpsReposUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a monitored Azure DevOps repository resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param repoName The repository name.
   * @param azureDevOpsRepository The Azure DevOps repository resource payload.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    repoName: string,
    azureDevOpsRepository: AzureDevOpsRepository,
    options?: AzureDevOpsReposUpdateOptionalParams
  ): Promise<AzureDevOpsReposUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      securityConnectorName,
      orgName,
      projectName,
      repoName,
      azureDevOpsRepository,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param projectName The project name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    projectName: string,
    nextLink: string,
    options?: AzureDevOpsReposListNextOptionalParams
  ): Promise<AzureDevOpsReposListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        securityConnectorName,
        orgName,
        projectName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/devops/default/azureDevOpsOrgs/{orgName}/projects/{projectName}/repos",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsRepositoryListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion24],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.orgName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/devops/default/azureDevOpsOrgs/{orgName}/projects/{projectName}/repos/{repoName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion24],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.orgName,
    Parameters.projectName,
    Parameters.repoName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/devops/default/azureDevOpsOrgs/{orgName}/projects/{projectName}/repos/{repoName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    201: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    202: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    204: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.azureDevOpsRepository,
  queryParameters: [Parameters.apiVersion24],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.orgName,
    Parameters.projectName,
    Parameters.repoName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/devops/default/azureDevOpsOrgs/{orgName}/projects/{projectName}/repos/{repoName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    201: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    202: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    204: {
      bodyMapper: Mappers.AzureDevOpsRepository
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.azureDevOpsRepository,
  queryParameters: [Parameters.apiVersion24],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.orgName,
    Parameters.projectName,
    Parameters.repoName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsRepositoryListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.orgName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
