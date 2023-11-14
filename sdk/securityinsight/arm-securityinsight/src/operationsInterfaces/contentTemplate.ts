/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TemplateModel,
  ContentTemplateInstallOptionalParams,
  ContentTemplateInstallResponse,
  ContentTemplateGetOptionalParams,
  ContentTemplateGetResponse,
  ContentTemplateDeleteOptionalParams
} from "../models";

/** Interface representing a ContentTemplate. */
export interface ContentTemplate {
  /**
   * Install a template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param templateId template Id
   * @param templateInstallationProperties Template installation properties
   * @param options The options parameters.
   */
  install(
    resourceGroupName: string,
    workspaceName: string,
    templateId: string,
    templateInstallationProperties: TemplateModel,
    options?: ContentTemplateInstallOptionalParams
  ): Promise<ContentTemplateInstallResponse>;
  /**
   * Gets a template byt its identifier.
   * Expandable properties:
   * - properties/mainTemplate
   * - properties/dependantTemplates
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param templateId template Id
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    templateId: string,
    options?: ContentTemplateGetOptionalParams
  ): Promise<ContentTemplateGetResponse>;
  /**
   * Delete an installed template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param templateId template Id
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    templateId: string,
    options?: ContentTemplateDeleteOptionalParams
  ): Promise<void>;
}
