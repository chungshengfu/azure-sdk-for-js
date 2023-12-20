// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { AzureCommunicationMessagesServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `AzureCommunicationMessagesServiceClient`
 * @param endpoint - The communication resource, for example https://my-resource.communication.azure.com
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {}
): AzureCommunicationMessagesServiceClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2024-02-01";
  const userAgentInfo = `azsdk-js-communication-messages-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(
    baseUrl,
    options
  ) as AzureCommunicationMessagesServiceClient;

  return client;
}
