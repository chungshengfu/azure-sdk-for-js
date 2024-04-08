/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOptionalParams,
  ProjectCatalogEnvironmentDefinitionsGetErrorDetailsResponse,
} from "../models";

/** Interface representing a ProjectCatalogEnvironmentDefinitions. */
export interface ProjectCatalogEnvironmentDefinitions {
  /**
   * Gets Environment Definition error details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param environmentDefinitionName The name of the Environment Definition.
   * @param options The options parameters.
   */
  getErrorDetails(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    environmentDefinitionName: string,
    options?: ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOptionalParams,
  ): Promise<ProjectCatalogEnvironmentDefinitionsGetErrorDetailsResponse>;
}
