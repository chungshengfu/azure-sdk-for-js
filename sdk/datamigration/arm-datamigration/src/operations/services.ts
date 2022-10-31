/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Services } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataMigrationManagementClient } from "../dataMigrationManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AvailableServiceSku,
  ServicesListSkusNextOptionalParams,
  ServicesListSkusOptionalParams,
  DataMigrationService,
  ServicesListByResourceGroupNextOptionalParams,
  ServicesListByResourceGroupOptionalParams,
  ServicesListNextOptionalParams,
  ServicesListOptionalParams,
  ServicesCreateOrUpdateOptionalParams,
  ServicesCreateOrUpdateResponse,
  ServicesGetOptionalParams,
  ServicesGetResponse,
  ServicesDeleteOptionalParams,
  ServicesUpdateOptionalParams,
  ServicesUpdateResponse,
  ServicesCheckStatusOptionalParams,
  ServicesCheckStatusResponse,
  ServicesStartOptionalParams,
  ServicesStopOptionalParams,
  ServicesListSkusResponse,
  NameAvailabilityRequest,
  ServicesCheckChildrenNameAvailabilityOptionalParams,
  ServicesCheckChildrenNameAvailabilityResponse,
  ServicesListByResourceGroupResponse,
  ServicesListResponse,
  ServicesCheckNameAvailabilityOptionalParams,
  ServicesCheckNameAvailabilityResponse,
  ServicesListSkusNextResponse,
  ServicesListByResourceGroupNextResponse,
  ServicesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Services operations. */
export class ServicesImpl implements Services {
  private readonly client: DataMigrationManagementClient;

  /**
   * Initialize a new instance of the class Services class.
   * @param client Reference to the service client
   */
  constructor(client: DataMigrationManagementClient) {
    this.client = client;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * skus action returns the list of SKUs that a service resource can be updated to.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  public listSkus(
    groupName: string,
    serviceName: string,
    options?: ServicesListSkusOptionalParams
  ): PagedAsyncIterableIterator<AvailableServiceSku> {
    const iter = this.listSkusPagingAll(groupName, serviceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listSkusPagingPage(groupName, serviceName, options);
      }
    };
  }

  private async *listSkusPagingPage(
    groupName: string,
    serviceName: string,
    options?: ServicesListSkusOptionalParams
  ): AsyncIterableIterator<AvailableServiceSku[]> {
    let result = await this._listSkus(groupName, serviceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listSkusNext(
        groupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listSkusPagingAll(
    groupName: string,
    serviceName: string,
    options?: ServicesListSkusOptionalParams
  ): AsyncIterableIterator<AvailableServiceSku> {
    for await (const page of this.listSkusPagingPage(
      groupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The Services resource is the top-level resource that represents the Database Migration Service. This
   * method returns a list of service resources in a resource group.
   * @param groupName Name of the resource group
   * @param options The options parameters.
   */
  public listByResourceGroup(
    groupName: string,
    options?: ServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DataMigrationService> {
    const iter = this.listByResourceGroupPagingAll(groupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(groupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    groupName: string,
    options?: ServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DataMigrationService[]> {
    let result = await this._listByResourceGroup(groupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        groupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    groupName: string,
    options?: ServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DataMigrationService> {
    for await (const page of this.listByResourceGroupPagingPage(
      groupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * method returns a list of service resources in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ServicesListOptionalParams
  ): PagedAsyncIterableIterator<DataMigrationService> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ServicesListOptionalParams
  ): AsyncIterableIterator<DataMigrationService[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ServicesListOptionalParams
  ): AsyncIterableIterator<DataMigrationService> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * PUT method creates a new service or updates an existing one. When a service is updated, existing
   * child resources (i.e. tasks) are unaffected. Services currently support a single kind, "vm", which
   * refers to a VM-based service, although other kinds may be added in the future. This method can
   * change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the
   * service is busy), this will fail with 400 Bad Request ("ServiceIsBusy"). The provider will reply
   * when successful with 200 OK or 201 Created. Long-running operations use the provisioningState
   * property.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param parameters Information about the service
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    groupName: string,
    serviceName: string,
    parameters: DataMigrationService,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServicesCreateOrUpdateResponse>,
      ServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServicesCreateOrUpdateResponse> => {
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
      { groupName, serviceName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * PUT method creates a new service or updates an existing one. When a service is updated, existing
   * child resources (i.e. tasks) are unaffected. Services currently support a single kind, "vm", which
   * refers to a VM-based service, although other kinds may be added in the future. This method can
   * change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the
   * service is busy), this will fail with 400 Bad Request ("ServiceIsBusy"). The provider will reply
   * when successful with 200 OK or 201 Created. Long-running operations use the provisioningState
   * property.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param parameters Information about the service
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    groupName: string,
    serviceName: string,
    parameters: DataMigrationService,
    options?: ServicesCreateOrUpdateOptionalParams
  ): Promise<ServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      groupName,
      serviceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * GET method retrieves information about a service instance.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  get(
    groupName: string,
    serviceName: string,
    options?: ServicesGetOptionalParams
  ): Promise<ServicesGetResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, options },
      getOperationSpec
    );
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * DELETE method deletes a service. Any running tasks will be canceled.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  async beginDelete(
    groupName: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { groupName, serviceName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * DELETE method deletes a service. Any running tasks will be canceled.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    groupName: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(groupName, serviceName, options);
    return poller.pollUntilDone();
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * PATCH method updates an existing service. This method can change the kind, SKU, and network of the
   * service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad
   * Request ("ServiceIsBusy").
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param parameters Information about the service
   * @param options The options parameters.
   */
  async beginUpdate(
    groupName: string,
    serviceName: string,
    parameters: DataMigrationService,
    options?: ServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServicesUpdateResponse>,
      ServicesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServicesUpdateResponse> => {
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
      { groupName, serviceName, parameters, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * PATCH method updates an existing service. This method can change the kind, SKU, and network of the
   * service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad
   * Request ("ServiceIsBusy").
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param parameters Information about the service
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    groupName: string,
    serviceName: string,
    parameters: DataMigrationService,
    options?: ServicesUpdateOptionalParams
  ): Promise<ServicesUpdateResponse> {
    const poller = await this.beginUpdate(
      groupName,
      serviceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * action performs a health check and returns the status of the service and virtual machine size.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  checkStatus(
    groupName: string,
    serviceName: string,
    options?: ServicesCheckStatusOptionalParams
  ): Promise<ServicesCheckStatusResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, options },
      checkStatusOperationSpec
    );
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * action starts the service and the service can be used for data migration.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  async beginStart(
    groupName: string,
    serviceName: string,
    options?: ServicesStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { groupName, serviceName, options },
      startOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * action starts the service and the service can be used for data migration.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  async beginStartAndWait(
    groupName: string,
    serviceName: string,
    options?: ServicesStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(groupName, serviceName, options);
    return poller.pollUntilDone();
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * action stops the service and the service cannot be used for data migration. The service owner won't
   * be billed when the service is stopped.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  async beginStop(
    groupName: string,
    serviceName: string,
    options?: ServicesStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { groupName, serviceName, options },
      stopOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * action stops the service and the service cannot be used for data migration. The service owner won't
   * be billed when the service is stopped.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  async beginStopAndWait(
    groupName: string,
    serviceName: string,
    options?: ServicesStopOptionalParams
  ): Promise<void> {
    const poller = await this.beginStop(groupName, serviceName, options);
    return poller.pollUntilDone();
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. The
   * skus action returns the list of SKUs that a service resource can be updated to.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  private _listSkus(
    groupName: string,
    serviceName: string,
    options?: ServicesListSkusOptionalParams
  ): Promise<ServicesListSkusResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, options },
      listSkusOperationSpec
    );
  }

  /**
   * This method checks whether a proposed nested resource name is valid and available.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param parameters Requested name to validate
   * @param options The options parameters.
   */
  checkChildrenNameAvailability(
    groupName: string,
    serviceName: string,
    parameters: NameAvailabilityRequest,
    options?: ServicesCheckChildrenNameAvailabilityOptionalParams
  ): Promise<ServicesCheckChildrenNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, parameters, options },
      checkChildrenNameAvailabilityOperationSpec
    );
  }

  /**
   * The Services resource is the top-level resource that represents the Database Migration Service. This
   * method returns a list of service resources in a resource group.
   * @param groupName Name of the resource group
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    groupName: string,
    options?: ServicesListByResourceGroupOptionalParams
  ): Promise<ServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { groupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * method returns a list of service resources in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ServicesListOptionalParams
  ): Promise<ServicesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * This method checks whether a proposed top-level resource name is valid and available.
   * @param location The Azure region of the operation
   * @param parameters Requested name to validate
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    parameters: NameAvailabilityRequest,
    options?: ServicesCheckNameAvailabilityOptionalParams
  ): Promise<ServicesCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, parameters, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * ListSkusNext
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param nextLink The nextLink from the previous successful call to the ListSkus method.
   * @param options The options parameters.
   */
  private _listSkusNext(
    groupName: string,
    serviceName: string,
    nextLink: string,
    options?: ServicesListSkusNextOptionalParams
  ): Promise<ServicesListSkusNextResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, nextLink, options },
      listSkusNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param groupName Name of the resource group
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    groupName: string,
    nextLink: string,
    options?: ServicesListByResourceGroupNextOptionalParams
  ): Promise<ServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { groupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ServicesListNextOptionalParams
  ): Promise<ServicesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationService
    },
    201: {
      bodyMapper: Mappers.DataMigrationService
    },
    202: {
      bodyMapper: Mappers.DataMigrationService
    },
    204: {
      bodyMapper: Mappers.DataMigrationService
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationService
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.deleteRunningTasks],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationService
    },
    201: {
      bodyMapper: Mappers.DataMigrationService
    },
    202: {
      bodyMapper: Mappers.DataMigrationService
    },
    204: {
      bodyMapper: Mappers.DataMigrationService
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const checkStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/checkStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationServiceStatusResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceSkuList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkChildrenNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationServiceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/services",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationServiceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listSkusNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceSkuList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationServiceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMigrationServiceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
