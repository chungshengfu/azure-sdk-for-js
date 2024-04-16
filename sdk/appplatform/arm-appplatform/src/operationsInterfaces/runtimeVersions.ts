/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  RuntimeVersionsListRuntimeVersionsOptionalParams,
  RuntimeVersionsListRuntimeVersionsResponse,
} from "../models";

/** Interface representing a RuntimeVersions. */
export interface RuntimeVersions {
  /**
   * Lists all of the available runtime versions supported by Microsoft.AppPlatform provider.
   * @param options The options parameters.
   */
  listRuntimeVersions(
    options?: RuntimeVersionsListRuntimeVersionsOptionalParams,
  ): Promise<RuntimeVersionsListRuntimeVersionsResponse>;
}
