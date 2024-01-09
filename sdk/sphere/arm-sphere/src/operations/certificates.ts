/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Certificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSphereManagementClient } from "../azureSphereManagementClient";
import {
  Certificate,
  CertificatesListByCatalogNextOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesListByCatalogResponse,
  CertificatesGetOptionalParams,
  CertificatesGetResponse,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesRetrieveCertChainResponse,
  ProofOfPossessionNonceRequest,
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
  CertificatesRetrieveProofOfPossessionNonceResponse,
  CertificatesListByCatalogNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Certificates operations. */
export class CertificatesImpl implements Certificates {
  private readonly client: AzureSphereManagementClient;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSphereManagementClient) {
    this.client = client;
  }

  /**
   * List Certificate resources by Catalog
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param options The options parameters.
   */
  public listByCatalog(
    resourceGroupName: string,
    catalogName: string,
    options?: CertificatesListByCatalogOptionalParams
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listByCatalogPagingAll(
      resourceGroupName,
      catalogName,
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
        return this.listByCatalogPagingPage(
          resourceGroupName,
          catalogName,
          options,
          settings
        );
      }
    };
  }

  private async *listByCatalogPagingPage(
    resourceGroupName: string,
    catalogName: string,
    options?: CertificatesListByCatalogOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Certificate[]> {
    let result: CertificatesListByCatalogResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCatalog(
        resourceGroupName,
        catalogName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCatalogNext(
        resourceGroupName,
        catalogName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCatalogPagingAll(
    resourceGroupName: string,
    catalogName: string,
    options?: CertificatesListByCatalogOptionalParams
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listByCatalogPagingPage(
      resourceGroupName,
      catalogName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List Certificate resources by Catalog
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param options The options parameters.
   */
  private _listByCatalog(
    resourceGroupName: string,
    catalogName: string,
    options?: CertificatesListByCatalogOptionalParams
  ): Promise<CertificatesListByCatalogResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, options },
      listByCatalogOperationSpec
    );
  }

  /**
   * Get a Certificate
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param serialNumber Serial number of the certificate. Use '.default' to get current active
   *                     certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    options?: CertificatesGetOptionalParams
  ): Promise<CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, serialNumber, options },
      getOperationSpec
    );
  }

  /**
   * Retrieves cert chain.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param serialNumber Serial number of the certificate. Use '.default' to get current active
   *                     certificate.
   * @param options The options parameters.
   */
  retrieveCertChain(
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    options?: CertificatesRetrieveCertChainOptionalParams
  ): Promise<CertificatesRetrieveCertChainResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, serialNumber, options },
      retrieveCertChainOperationSpec
    );
  }

  /**
   * Gets the proof of possession nonce.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param serialNumber Serial number of the certificate. Use '.default' to get current active
   *                     certificate.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  retrieveProofOfPossessionNonce(
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    body: ProofOfPossessionNonceRequest,
    options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams
  ): Promise<CertificatesRetrieveProofOfPossessionNonceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, serialNumber, body, options },
      retrieveProofOfPossessionNonceOperationSpec
    );
  }

  /**
   * ListByCatalogNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param nextLink The nextLink from the previous successful call to the ListByCatalog method.
   * @param options The options parameters.
   */
  private _listByCatalogNext(
    resourceGroupName: string,
    catalogName: string,
    nextLink: string,
    options?: CertificatesListByCatalogNextOptionalParams
  ): Promise<CertificatesListByCatalogNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, nextLink, options },
      listByCatalogNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByCatalogOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.maxpagesize
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
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
    Parameters.catalogName,
    Parameters.serialNumber
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const retrieveCertChainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveCertChain",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateChainResponse
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
    Parameters.catalogName,
    Parameters.serialNumber
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const retrieveProofOfPossessionNonceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveProofOfPossessionNonce",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProofOfPossessionNonceResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
    Parameters.serialNumber
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByCatalogNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListResult
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
    Parameters.catalogName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
