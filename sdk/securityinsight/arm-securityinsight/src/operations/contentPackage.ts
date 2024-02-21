/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ContentPackage } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  PackageModel,
  ContentPackageInstallOptionalParams,
  ContentPackageInstallResponse,
  ContentPackageUninstallOptionalParams,
} from "../models";

/** Class containing ContentPackage operations. */
export class ContentPackageImpl implements ContentPackage {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class ContentPackage class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Install a package to the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param packageId package Id
   * @param packageInstallationProperties Package installation properties
   * @param options The options parameters.
   */
  install(
    resourceGroupName: string,
    workspaceName: string,
    packageId: string,
    packageInstallationProperties: PackageModel,
    options?: ContentPackageInstallOptionalParams,
  ): Promise<ContentPackageInstallResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        packageId,
        packageInstallationProperties,
        options,
      },
      installOperationSpec,
    );
  }

  /**
   * Uninstall a package from the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param packageId package Id
   * @param options The options parameters.
   */
  uninstall(
    resourceGroupName: string,
    workspaceName: string,
    packageId: string,
    options?: ContentPackageUninstallOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, packageId, options },
      uninstallOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const installOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentPackages/{packageId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PackageModel,
    },
    201: {
      bodyMapper: Mappers.PackageModel,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.packageInstallationProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.packageId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const uninstallOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/contentPackages/{packageId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.packageId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
