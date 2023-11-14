/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TemplateModel, ContentTemplatesListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ContentTemplates. */
export interface ContentTemplates {
  /**
   * Gets all installed templates.
   * Expandable properties:
   * - properties/mainTemplate
   * - properties/dependantTemplates
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ContentTemplatesListOptionalParams
  ): PagedAsyncIterableIterator<TemplateModel>;
}
