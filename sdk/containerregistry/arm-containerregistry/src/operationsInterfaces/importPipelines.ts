/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ImportPipeline,
  ImportPipelinesListOptionalParams,
  ImportPipelinesGetOptionalParams,
  ImportPipelinesGetResponse,
  ImportPipelinesCreateOptionalParams,
  ImportPipelinesCreateResponse,
  ImportPipelinesDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ImportPipelines. */
export interface ImportPipelines {
  /**
   * Lists all import pipelines for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    options?: ImportPipelinesListOptionalParams,
  ): PagedAsyncIterableIterator<ImportPipeline>;
  /**
   * Gets the properties of the import pipeline.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param importPipelineName The name of the import pipeline.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    importPipelineName: string,
    options?: ImportPipelinesGetOptionalParams,
  ): Promise<ImportPipelinesGetResponse>;
  /**
   * Creates an import pipeline for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param importPipelineName The name of the import pipeline.
   * @param importPipelineCreateParameters The parameters for creating an import pipeline.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    registryName: string,
    importPipelineName: string,
    importPipelineCreateParameters: ImportPipeline,
    options?: ImportPipelinesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ImportPipelinesCreateResponse>,
      ImportPipelinesCreateResponse
    >
  >;
  /**
   * Creates an import pipeline for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param importPipelineName The name of the import pipeline.
   * @param importPipelineCreateParameters The parameters for creating an import pipeline.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    importPipelineName: string,
    importPipelineCreateParameters: ImportPipeline,
    options?: ImportPipelinesCreateOptionalParams,
  ): Promise<ImportPipelinesCreateResponse>;
  /**
   * Deletes an import pipeline from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param importPipelineName The name of the import pipeline.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    importPipelineName: string,
    options?: ImportPipelinesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an import pipeline from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param importPipelineName The name of the import pipeline.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    importPipelineName: string,
    options?: ImportPipelinesDeleteOptionalParams,
  ): Promise<void>;
}
