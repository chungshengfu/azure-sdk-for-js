/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ServerAdvisorsListByServerOptionalParams,
  ServerAdvisorsListByServerResponse,
  ServerAdvisorsGetOptionalParams,
  ServerAdvisorsGetResponse,
  Advisor,
  ServerAdvisorsUpdateOptionalParams,
  ServerAdvisorsUpdateResponse,
} from "../models";

/** Interface representing a ServerAdvisors. */
export interface ServerAdvisors {
  /**
   * Gets a list of server advisors.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAdvisorsListByServerOptionalParams,
  ): Promise<ServerAdvisorsListByServerResponse>;
  /**
   * Gets a server advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param advisorName The name of the Server Advisor.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    options?: ServerAdvisorsGetOptionalParams,
  ): Promise<ServerAdvisorsGetResponse>;
  /**
   * Updates a server advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param advisorName The name of the Server Advisor.
   * @param parameters The requested advisor resource state.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    parameters: Advisor,
    options?: ServerAdvisorsUpdateOptionalParams,
  ): Promise<ServerAdvisorsUpdateResponse>;
}
