// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SendMessageParameters,
  DownloadMediaParameters,
  ListParameters,
} from "./parameters";
import {
  SendMessage202Response,
  SendMessageDefaultResponse,
  DownloadMedia200Response,
  DownloadMediaDefaultResponse,
  List200Response,
  ListDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SendMessage {
  /** Sends a notification message from Business to User. */
  post(
    options: SendMessageParameters
  ): StreamableMethod<SendMessage202Response | SendMessageDefaultResponse>;
}

export interface DownloadMedia {
  /** Download the Media payload from a User to Business message. */
  get(
    options?: DownloadMediaParameters
  ): StreamableMethod<DownloadMedia200Response | DownloadMediaDefaultResponse>;
}

export interface List {
  /** List all templates for given ACS channel */
  get(
    options?: ListParameters
  ): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface Routes {
  /** Resource for '/messages/notifications/:send' has methods for the following verbs: post */
  (path: "/messages/notifications/:send"): SendMessage;
  /** Resource for '/messages/streams/\{id\}' has methods for the following verbs: get */
  (path: "/messages/streams/{id}", id: string): DownloadMedia;
  /** Resource for '/messages/channels/\{channelId\}/templates' has methods for the following verbs: get */
  (path: "/messages/channels/{channelId}/templates", channelId: string): List;
}

export type AzureCommunicationMessagesServiceClient = Client & {
  path: Routes;
};
