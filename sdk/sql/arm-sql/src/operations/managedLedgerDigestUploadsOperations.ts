/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedLedgerDigestUploadsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ManagedLedgerDigestUploads,
  ManagedLedgerDigestUploadsListByDatabaseNextOptionalParams,
  ManagedLedgerDigestUploadsListByDatabaseOptionalParams,
  ManagedLedgerDigestUploadsListByDatabaseResponse,
  ManagedLedgerDigestUploadsName,
  ManagedLedgerDigestUploadsGetOptionalParams,
  ManagedLedgerDigestUploadsGetResponse,
  ManagedLedgerDigestUploadsCreateOrUpdateOptionalParams,
  ManagedLedgerDigestUploadsCreateOrUpdateResponse,
  ManagedLedgerDigestUploadsDisableOptionalParams,
  ManagedLedgerDigestUploadsDisableResponse,
  ManagedLedgerDigestUploadsListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedLedgerDigestUploadsOperations operations. */
export class ManagedLedgerDigestUploadsOperationsImpl
  implements ManagedLedgerDigestUploadsOperations {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedLedgerDigestUploadsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all ledger digest upload settings on a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedLedgerDigestUploadsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedLedgerDigestUploads> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedLedgerDigestUploadsListByDatabaseOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedLedgerDigestUploads[]> {
    let result: ManagedLedgerDigestUploadsListByDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDatabase(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedLedgerDigestUploadsListByDatabaseOptionalParams
  ): AsyncIterableIterator<ManagedLedgerDigestUploads> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all ledger digest upload settings on a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedLedgerDigestUploadsListByDatabaseOptionalParams
  ): Promise<ManagedLedgerDigestUploadsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * Gets the current ledger digest upload configuration for a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    options?: ManagedLedgerDigestUploadsGetOptionalParams
  ): Promise<ManagedLedgerDigestUploadsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        ledgerDigestUploads,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads The name of the Ledger Digest Upload Configurations.
   * @param parameters The Ledger Digest Storage Endpoint.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    parameters: ManagedLedgerDigestUploads,
    options?: ManagedLedgerDigestUploadsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedLedgerDigestUploadsCreateOrUpdateResponse>,
      ManagedLedgerDigestUploadsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedLedgerDigestUploadsCreateOrUpdateResponse> => {
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
        managedInstanceName,
        databaseName,
        ledgerDigestUploads,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedLedgerDigestUploadsCreateOrUpdateResponse,
      OperationState<ManagedLedgerDigestUploadsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads The name of the Ledger Digest Upload Configurations.
   * @param parameters The Ledger Digest Storage Endpoint.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    parameters: ManagedLedgerDigestUploads,
    options?: ManagedLedgerDigestUploadsCreateOrUpdateOptionalParams
  ): Promise<ManagedLedgerDigestUploadsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      ledgerDigestUploads,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  async beginDisable(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    options?: ManagedLedgerDigestUploadsDisableOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedLedgerDigestUploadsDisableResponse>,
      ManagedLedgerDigestUploadsDisableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedLedgerDigestUploadsDisableResponse> => {
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
        managedInstanceName,
        databaseName,
        ledgerDigestUploads,
        options
      },
      spec: disableOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedLedgerDigestUploadsDisableResponse,
      OperationState<ManagedLedgerDigestUploadsDisableResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  async beginDisableAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    options?: ManagedLedgerDigestUploadsDisableOptionalParams
  ): Promise<ManagedLedgerDigestUploadsDisableResponse> {
    const poller = await this.beginDisable(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      ledgerDigestUploads,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: ManagedLedgerDigestUploadsListByDatabaseNextOptionalParams
  ): Promise<ManagedLedgerDigestUploadsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        nextLink,
        options
      },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/ledgerDigestUploads",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedLedgerDigestUploadsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/ledgerDigestUploads/{ledgerDigestUploads}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.managedInstanceName,
    Parameters.ledgerDigestUploads1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/ledgerDigestUploads/{ledgerDigestUploads}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    201: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    202: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    204: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    default: {}
  },
  requestBody: Parameters.parameters73,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.managedInstanceName,
    Parameters.ledgerDigestUploads1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const disableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/ledgerDigestUploads/{ledgerDigestUploads}/disable",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    201: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    202: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    204: {
      bodyMapper: Mappers.ManagedLedgerDigestUploads
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.managedInstanceName,
    Parameters.ledgerDigestUploads1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedLedgerDigestUploadsListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
