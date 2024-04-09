/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AgentVersionListOptionalParams,
  AgentVersionListResponse,
  AgentVersionGetOptionalParams,
  AgentVersionGetResponse,
} from "../models";

/** Interface representing a AgentVersionOperations. */
export interface AgentVersionOperations {
  /**
   * Gets all Agent Versions along with the download link currently present.
   * @param osType Defines the os type.
   * @param options The options parameters.
   */
  list(
    osType: string,
    options?: AgentVersionListOptionalParams,
  ): Promise<AgentVersionListResponse>;
  /**
   * Gets an Agent Version along with the download link currently present.
   * @param osType Defines the os type
   * @param version Defines the agent version. To get latest, use latest or else a specific agent
   *                version.
   * @param options The options parameters.
   */
  get(
    osType: string,
    version: string,
    options?: AgentVersionGetOptionalParams,
  ): Promise<AgentVersionGetResponse>;
}
