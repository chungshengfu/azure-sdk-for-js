// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Details of the message to send. */
export interface SendNotificationRequest {
  /** The Channel Registration ID for the Business Identifier. */
  channelRegistrationId: string;
  /** The native external platform user identifiers of the recipient. */
  to: string[];
  /**
   * The type of message. Supports text, image, template.
   *
   * Possible values: text, image, template
   */
  type: string;
  /** Message content. */
  content?: string;
  /**
   * A media url for the file. Required if the type is one of the supported media
   * types, e.g. image
   */
  mediaUri?: string;
  /** The template object used to create templates. */
  template?: MessageTemplate;
}

/** The template object used to create templates. */
export interface MessageTemplate {
  /** Name of the template. */
  name: string;
  /** The codes for the supported languages for templates. */
  language: string;
  /** The template values. */
  values?: Record<string, MessageTemplateValue>;
  /** The binding object to link values to the template specific locations */
  bindings?: MessageTemplateBindings;
}

/** The class describes a parameter of a template. */
export interface MessageTemplateValue {
  /**
   * The template value kind.
   *
   * Possible values: text, image, document, video, location, quick_action
   */
  kind: string;
  /** The message template's text value information. */
  text?: MessageTemplateValueText;
  /**
   * The message template's media value information.
   * Could be an image, document or
   * video.
   */
  image?: MessageTemplateValueMedia;
  /**
   * The message template's media value information.
   * Could be an image, document or
   * video.
   */
  document?: MessageTemplateValueMedia;
  /**
   * The message template's media value information.
   * Could be an image, document or
   * video.
   */
  video?: MessageTemplateValueMedia;
  /** The message template's location value information. */
  location?: MessageTemplateParameterLocation;
  /** The message template's quick action value information. */
  quickAction?: MessageTemplateValueQuickAction;
}

/** The message template's text value information. */
export interface MessageTemplateValueText {
  /** The text value. */
  text: string;
}

/**
 * The message template's media value information.
 * Could be an image, document or
 * video.
 */
export interface MessageTemplateValueMedia {
  /** The (public) URL of the media. */
  url?: string;
  /** The [optional] caption of the media object. */
  caption?: string;
  /** The [optional] filename of the media file. */
  fileName?: string;
}

/** The message template's location value information. */
export interface MessageTemplateParameterLocation {
  /** The [Optional] name of the location. */
  name?: string;
  /** The [Optional] address of the location. */
  address?: string;
  /** The latitude of the location. */
  latitude?: number;
  /** The longitude of the location. */
  longitude?: number;
}

/** The message template's quick action value information. */
export interface MessageTemplateValueQuickAction {
  /** The [Optional] quick action text */
  text?: string;
  /** The [Optional] quick action payload */
  payload?: string;
}

/** The binding object to link values to the template specific locations */
export interface MessageTemplateBindings {
  /** The template bindings for WhatsApp */
  whatsApp?: WhatsAppMessageTemplateBindings;
}

/** The template bindings for WhatsApp */
export interface WhatsAppMessageTemplateBindings {
  /** The header template bindings */
  header?: Array<WhatsAppMessageTemplateBindingsComponent>;
  /** The body template bindings */
  body?: Array<WhatsAppMessageTemplateBindingsComponent>;
  /** The footer template bindings */
  footer?: Array<WhatsAppMessageTemplateBindingsComponent>;
  /** The button template bindings */
  button?: Array<WhatsAppMessageTemplateBindingsButton>;
}

/** The template bindings component for WhatsApp */
export interface WhatsAppMessageTemplateBindingsComponent {
  /**
   * The reference to the value in the
   * Microsoft.Azure.Communication.CrossPlatformMessages.Contract.Model.VNext.Notifications.Requests.MessageTemplate.Values
   * dictionary.
   */
  refValue: string;
}

/** The template bindings component button for WhatsApp */
export interface WhatsAppMessageTemplateBindingsButton {
  /**
   * The WhatsApp button sub type
   *
   * Possible values: quickReply, url
   */
  subType?: string;
  /**
   * The reference to the value in the
   * Microsoft.Azure.Communication.CrossPlatformMessages.Contract.Model.VNext.Notifications.Requests.MessageTemplate.Values
   * dictionary.
   */
  refValue: string;
}
