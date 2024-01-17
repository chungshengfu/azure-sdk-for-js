/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Email } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureBotService } from "../azureBotService";
import {
  EmailCreateSignInUrlOptionalParams,
  EmailCreateSignInUrlResponse,
} from "../models";

/** Class containing Email operations. */
export class EmailImpl implements Email {
  private readonly client: AzureBotService;

  /**
   * Initialize a new instance of the class Email class.
   * @param client Reference to the service client
   */
  constructor(client: AzureBotService) {
    this.client = client;
  }

  /**
   * Creates an email channel sign in url for a Bot Service
   * @param resourceGroupName The name of the Bot resource group in the user subscription.
   * @param resourceName The name of the Bot resource.
   * @param options The options parameters.
   */
  createSignInUrl(
    resourceGroupName: string,
    resourceName: string,
    options?: EmailCreateSignInUrlOptionalParams,
  ): Promise<EmailCreateSignInUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      createSignInUrlOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createSignInUrlOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/createEmailSignInUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreateEmailSignInUrlResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
