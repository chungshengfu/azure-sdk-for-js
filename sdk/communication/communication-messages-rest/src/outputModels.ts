// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Result of the send message operation. */
export interface SendMessageResultOutput {
  /** Receipts of the send message operation. */
  receipts: Array<MessageReceiptOutput>;
}

/** Receipt of the sending one message. */
export interface MessageReceiptOutput {
  /** The message id. */
  messageId: string;
  /** The native external platform user identifier of the recipient. */
  to: string;
}

/** Paged collection of MessageTemplateResponse items */
export interface ListTemplatesResponseOutput {
  /** The MessageTemplateResponse items on this page */
  value: Array<MessageTemplateResponseOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The Message Template Response. */
export interface MessageTemplateResponseOutput {
  /** Get the template's Name */
  name?: string;
  /** Get the template's language */
  language?: string;
  /**
   * The Communication Messages Channel.
   *
   * Possible values: whatsApp
   */
  channelType?: string;
  /**
   * The aggregated template status.
   *
   * Possible values: approved, rejected, pending, paused
   */
  status?: string;
  /** The WhatsApp-specific template response contract */
  whatsApp?: WhatsAppMessageTemplateResponseOutput;
}

/** The WhatsApp-specific template response contract */
export interface WhatsAppMessageTemplateResponseOutput {
  /**
   * WhatsApp platform's template content
   * This is the payload returned from WhatsApp
   * API.
   */
  content?: any;
}
