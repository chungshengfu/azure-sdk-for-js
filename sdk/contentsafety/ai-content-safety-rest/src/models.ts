// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The text analysis request. */
export interface AnalyzeTextOptions {
  /** The text needs to be analyzed. We support a maximum of 10k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: TextCategory[];
  /** The names of blocklists. */
  blocklistNames?: string[];
  /** When set to true, further analyses of harmful content will not be performed in cases where blocklists are hit. When set to false, all analyses of harmful content will be performed, whether or not blocklists are hit. */
  haltOnBlocklistHit?: boolean;
  /** This refers to the type of text analysis output. If no value is assigned, the default value will be "FourSeverityLevels". */
  outputType?: AnalyzeTextOutputType;
}

/** The text jailbreak analysis request. */
export interface AnalyzeTextJailbreakOptions {
  /** The text needs to be analyzed if it attempt to jailbreak. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The protected material analysis request. */
export interface AnalyzeTextProtectedMaterialOptions {
  /** The text needs to be analyzed. We support a maximum of 1k Unicode characters (Unicode code points) in the text of one request. */
  text: string;
}

/** The text prompt injection attacks analysis request. */
export interface AnalyzeTextPromptInjectionOptions {
  /** The user prompt needs to be analyzed if it attempts to do direct injection attacks. */
  userPrompt?: string;
  /** The documents needs to be analyzed if they attempt to do direct or indirect injection attacks. */
  documents?: string[];
}

/** The text auto reviewing request. */
export interface AutoReviewTextOptions {
  /** The text needs to be auto reviewed. */
  text: string;
  /** The name of the auto reviewer. */
  autoReviewerName: string;
  /** The version of the auto reviewer. If not assigned we will use the latest version. */
  autoReviewerVersion?: number;
}

/** The text detect incidents analysis request. */
export interface AnalyzeTextDetectIncidentsOptions {
  /** The text needs to be analyzed if it attempts to detect incidents. We support a maximum of 10 thousands Unicode characters (Unicode code points) in the text of one request. */
  text: string;
  /** The incidents to detect. */
  incidentNames: string[];
}

/** The custom category option for text. */
export interface AnalyzeTextCustomCategoryOption {
  /** The text needs to be analyzed. */
  text: string;
  /** Custom category name. */
  categoryName: string;
  /** Custom category version, if not assigned use the latest version. */
  version?: number;
}

/** The image analysis request. */
export interface AnalyzeImageOptions {
  /** The image needs to be analyzed. */
  image: ImageData;
  /** The categories will be analyzed. If they are not assigned, a default set of analysis results for the categories will be returned. */
  categories?: ImageCategory[];
  /** This refers to the type of image analysis output. If no value is assigned, the default value will be "FourSeverityLevels". */
  outputType?: AnalyzeImageOutputType;
}

/** The image can be either base64 encoded bytes or a blob URL. You can choose only one of these options. If both are provided, the request will be refused. The maximum image size is 2048 x 2048 pixels and should not exceed 4 MB, while the minimum image size is 50 x 50 pixels. */
export interface ImageData {
  /** The Base64 encoding of the image. */
  content?: string;
  /** The blob url of the image. */
  blobUrl?: string;
}

/** The image detect incidents analysis request. */
export interface AnalyzeImageDetectIncidentsOptions {
  /** The image needs to be analyzed. */
  image: ImageData;
  /** The incidents to detect. */
  incidentNames: string[];
}

/** Text Blocklist. */
export interface TextBlocklist {
  /** Text blocklist name. */
  blocklistName: string;
  /** Text blocklist description. */
  description?: string;
}

/** The request to add blocklistItems to a text blocklist. */
export interface AddOrUpdateTextBlocklistItemsOptions {
  /** Array of blocklistItems to add. */
  blocklistItems: Array<TextBlocklistItem>;
}

/** Item in a TextBlocklist. */
export interface TextBlocklistItem {
  /** BlocklistItem description. */
  description?: string;
  /** BlocklistItem content. */
  text: string;
  /** Optional setting. true means this item is a regex matched term, false means this item is an exact matched term. Default value is false. */
  isRegex?: boolean;
}

/** The request to remove blocklistItems from a text blocklist. */
export interface RemoveTextBlocklistItemsOptions {
  /** Array of blocklistItemIds to remove. */
  blocklistItemIds: string[];
}

/** The request of groundedness detection. */
export interface AnalyzeTextGroundednessOptions {
  /**
   * The domain of the text for analysis. Allowed values: Medical, Generic.
   * This field is optional, with a default value of Generic.
   */
  domain?: GroundednessDomain;
  /**
   * The task type for the text analysis. Type of task: QnA, Summarization.
   * This field is optional, with a default value of Summarization.
   */
  task?: GroundednessTask;
  /**
   * The user's question input in a QnA scenario.
   * This field is optional, but if the task type is set to QnA, it becomes required.
   */
  qna?: QnAOptions;
  /** The specific text that needs to be checked. */
  text: string;
  /**
   * Leverages a vast array of grounding sources to validate AI-generated text.
   * Limit: Restrictions on the total amount of grounding sources that can be analyzed in a single request are 55K characters.
   */
  groundingSources: string[];
  /**
   * A value indicating if the output includes an explanation for the identified groundedness.
   * This field is optional, with a default value of false.
   */
  reasoning?: boolean;
  /**
   * Connection details for the LLM resource.
   * This field will be used only when the 'reasoning' field is set to true; otherwise, it will be ignored.
   */
  llmResource?: LLMResource;
}

/** The request of QnA options. */
export interface QnAOptions {
  /** The user's question input in a QnA scenario. */
  query: string;
}

/** Connection details for the LLM resource. */
export interface LLMResource {
  /** LLM resource type. The default value is AzureOpenAI. */
  resourceType?: LLMResourceType;
  /** Endpoint for Azure OpenAI resource. */
  azureOpenAIEndpoint: string;
  /** Deployment model name. */
  azureOpenAIDeploymentName: string;
}

/** The auto reviewer version. */
export interface AutoReviewerVersion {
  /** The name of the auto reviewer. */
  autoReviewerName: string;
  /** The labels defined in the auto reviewer. There should be a label named 'Other' in the list. The 'Other' label is used to represent the content that does not belong to any other label. */
  labels: Array<AutoReviewerLabelDetails>;
  /** URL of example jsonl blob. Read & write access to the last layer virtual directory is required. */
  exampleBlobUrl?: string;
  /** Delimiter of blob url. If not provided, '/' will be used as the delimiter to parse the exampleBlobUrl. */
  blobDelimiter?: string;
}

/** The label details in the auto reviewer. */
export interface AutoReviewerLabelDetails {
  /** The name of the label. */
  labelName: string;
  /** The description of the label. */
  description: string;
}

/** Text Incident. */
export interface TextIncident {
  /** incident name. */
  incidentName: string;
  /** Incident definition. */
  incidentDefinition?: string;
  /** Incident created time. */
  created: Date | string;
  /** Incident updated time. */
  lastUpdated: Date | string;
}

/** The request to add incidentSamples to a incident. */
export interface AddTextIncidentSamplesOptions {
  /** Array of incidentSamples to add. */
  incidentSamples: Array<TextIncidentSample>;
}

/** Sample in a Text Incident. */
export interface TextIncidentSample {
  /** IncidentSample text content. */
  text?: string;
}

/** The request to remove incidentSamples from a incident. */
export interface RemoveTextIncidentSamplesOptions {
  /** Array of incidentSamples to remove. */
  incidentSampleIds: string[];
}

/** Image Incident. */
export interface ImageIncident {
  /** incident name. */
  incidentName: string;
  /** Incident created time. */
  created: Date | string;
  /** Incident updated time. */
  lastUpdated: Date | string;
}

/** The request to add incidentSamples to a incident. */
export interface AddImageIncidentSamplesOptions {
  /** Array of incidentSamples to add. */
  incidentSamples: Array<ImageIncidentSample>;
}

/** Sample in an Image Incident. */
export interface ImageIncidentSample {
  /** IncidentSample image content. */
  image?: ImageData;
}

/** The request to remove incidentSamples from a incident. */
export interface RemoveImageIncidentSamplesOptions {
  /** Array of incidentSamples to remove. */
  incidentSampleIds: string[];
}

/** Text custom category */
export interface TextCustomCategoryVersion {
  /** Name of the custom category */
  categoryName: string;
  /** Definition or description of the custom category. */
  definition: string;
  /** URL of sample jsonl blob. Read & write access to the last layer virtual directory is required. */
  sampleBlobUrl: string;
}

/** Alias for TextCategory */
export type TextCategory = string | "Hate" | "SelfHarm" | "Sexual" | "Violence";
/** Alias for AnalyzeTextOutputType */
export type AnalyzeTextOutputType =
  | string
  | "FourSeverityLevels"
  | "EightSeverityLevels";
/** Alias for ImageCategory */
export type ImageCategory =
  | string
  | "Hate"
  | "SelfHarm"
  | "Sexual"
  | "Violence";
/** Alias for AnalyzeImageOutputType */
export type AnalyzeImageOutputType = string | "FourSeverityLevels";
/** Alias for GroundednessDomain */
export type GroundednessDomain = string | "Generic" | "Medical";
/** Alias for GroundednessTask */
export type GroundednessTask = string | "Summarization" | "QnA";
/** Alias for LLMResourceType */
export type LLMResourceType = string | "AzureOpenAI";
/** Alias for AutoReviewerOperationStatus */
export type AutoReviewerOperationStatus =
  | string
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed";
/** Alias for CustomCategoryStatus */
export type CustomCategoryStatus =
  | string
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed";
