/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  SBNamespace as SBNamespaceMapper,
  SBNamespaceUpdateParameters as SBNamespaceUpdateParametersMapper,
  NetworkRuleSet as NetworkRuleSetMapper,
  SBAuthorizationRule as SBAuthorizationRuleMapper,
  RegenerateAccessKeyParameters as RegenerateAccessKeyParametersMapper,
  CheckNameAvailability as CheckNameAvailabilityMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  ArmDisasterRecovery as ArmDisasterRecoveryMapper,
  FailoverProperties as FailoverPropertiesMapper,
  MigrationConfigProperties as MigrationConfigPropertiesMapper,
  SBQueue as SBQueueMapper,
  SBTopic as SBTopicMapper,
  Rule as RuleMapper,
  SBSubscription as SBSubscriptionMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-01-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: SBNamespaceMapper
};

export const namespaceName: OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    serializedName: "namespaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const namespaceName1: OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 6
    },
    serializedName: "namespaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: SBNamespaceUpdateParametersMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: NetworkRuleSetMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: SBAuthorizationRuleMapper
};

export const authorizationRuleName: OperationURLParameter = {
  parameterPath: "authorizationRuleName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    serializedName: "authorizationRuleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: RegenerateAccessKeyParametersMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckNameAvailabilityMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ArmDisasterRecoveryMapper
};

export const alias: OperationURLParameter = {
  parameterPath: "alias",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    serializedName: "alias",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters8: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: FailoverPropertiesMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: MigrationConfigPropertiesMapper
};

export const configName: OperationURLParameter = {
  parameterPath: "configName",
  mapper: {
    serializedName: "configName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const queueName: OperationURLParameter = {
  parameterPath: "queueName",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "queueName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 0
    },
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: SBQueueMapper
};

export const topicName: OperationURLParameter = {
  parameterPath: "topicName",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "topicName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: SBTopicMapper
};

export const subscriptionName: OperationURLParameter = {
  parameterPath: "subscriptionName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    serializedName: "subscriptionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: RuleMapper
};

export const ruleName: OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    serializedName: "ruleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters13: OperationParameter = {
  parameterPath: "parameters",
  mapper: SBSubscriptionMapper
};
