// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger.js";
import { TokenCredential } from "@azure/core-auth";
import { PurviewDataMapClient } from "./clientDefinitions.js";

/**
 * Initialize a new instance of `PurviewDataMapClient`
 * @param endpointParam - A sequence of textual characters.
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  credentials: TokenCredential,
  options: ClientOptions = {},
): PurviewDataMapClient {
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${endpointParam}/datamap/api`;

  const userAgentInfo = `azsdk-js-purview-datamap-rest/1.0.0-beta.1`;
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
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://purview.azure.net/.default",
      ],
    },
  };

  const client = getClient(
    endpointUrl,
    credentials,
    options,
  ) as PurviewDataMapClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
