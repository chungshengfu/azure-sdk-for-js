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
  CheckEndpointNameAvailabilityInput as CheckEndpointNameAvailabilityInputMapper,
  CheckNameAvailabilityInput as CheckNameAvailabilityInputMapper,
  ValidateProbeInput as ValidateProbeInputMapper,
  CheckHostNameAvailabilityInput as CheckHostNameAvailabilityInputMapper,
  ValidateSecretInput as ValidateSecretInputMapper,
  ProfileUpgradeParameters as ProfileUpgradeParametersMapper,
  AFDDomain as AFDDomainMapper,
  AFDDomainUpdateParameters as AFDDomainUpdateParametersMapper,
  AFDEndpoint as AFDEndpointMapper,
  AFDEndpointUpdateParameters as AFDEndpointUpdateParametersMapper,
  AfdPurgeParameters as AfdPurgeParametersMapper,
  ValidateCustomDomainInput as ValidateCustomDomainInputMapper,
  AFDOriginGroup as AFDOriginGroupMapper,
  AFDOriginGroupUpdateParameters as AFDOriginGroupUpdateParametersMapper,
  AFDOrigin as AFDOriginMapper,
  AFDOriginUpdateParameters as AFDOriginUpdateParametersMapper,
  L4Route as L4RouteMapper,
  L4RouteUpdatePropertiesParameters as L4RouteUpdatePropertiesParametersMapper,
  Route as RouteMapper,
  RouteUpdateParameters as RouteUpdateParametersMapper,
  Rule as RuleMapper,
  RuleUpdateParameters as RuleUpdateParametersMapper,
  SecurityPolicy as SecurityPolicyMapper,
  SecurityPolicyUpdateParameters as SecurityPolicyUpdateParametersMapper,
  Secret as SecretMapper,
  Profile as ProfileMapper,
  ProfileUpdateParameters as ProfileUpdateParametersMapper,
  CanMigrateParameters as CanMigrateParametersMapper,
  MigrationParameters as MigrationParametersMapper,
  Endpoint as EndpointMapper,
  EndpointUpdateParameters as EndpointUpdateParametersMapper,
  PurgeParameters as PurgeParametersMapper,
  LoadParameters as LoadParametersMapper,
  Origin as OriginMapper,
  OriginUpdateParameters as OriginUpdateParametersMapper,
  OriginGroup as OriginGroupMapper,
  OriginGroupUpdateParameters as OriginGroupUpdateParametersMapper,
  CustomDomainParameters as CustomDomainParametersMapper,
  CustomDomainHttpsParameters as CustomDomainHttpsParametersMapper,
  CdnWebApplicationFirewallPolicy as CdnWebApplicationFirewallPolicyMapper,
  CdnWebApplicationFirewallPolicyPatchParameters as CdnWebApplicationFirewallPolicyPatchParametersMapper
} from "../models/mappers";

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

export const checkEndpointNameAvailabilityInput: OperationParameter = {
  parameterPath: "checkEndpointNameAvailabilityInput",
  mapper: CheckEndpointNameAvailabilityInputMapper
};

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
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-04-11-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const checkNameAvailabilityInput: OperationParameter = {
  parameterPath: "checkNameAvailabilityInput",
  mapper: CheckNameAvailabilityInputMapper
};

export const validateProbeInput: OperationParameter = {
  parameterPath: "validateProbeInput",
  mapper: ValidateProbeInputMapper
};

export const profileName: OperationURLParameter = {
  parameterPath: "profileName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$"),
      MaxLength: 260,
      MinLength: 1
    },
    serializedName: "profileName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const profileName1: OperationURLParameter = {
  parameterPath: "profileName",
  mapper: {
    serializedName: "profileName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const checkHostNameAvailabilityInput: OperationParameter = {
  parameterPath: "checkHostNameAvailabilityInput",
  mapper: CheckHostNameAvailabilityInputMapper
};

export const validateSecretInput: OperationParameter = {
  parameterPath: "validateSecretInput",
  mapper: ValidateSecretInputMapper
};

export const profileUpgradeParameters: OperationParameter = {
  parameterPath: "profileUpgradeParameters",
  mapper: ProfileUpgradeParametersMapper
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

export const customDomainName: OperationURLParameter = {
  parameterPath: "customDomainName",
  mapper: {
    serializedName: "customDomainName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const customDomain: OperationParameter = {
  parameterPath: "customDomain",
  mapper: AFDDomainMapper
};

export const customDomainUpdateProperties: OperationParameter = {
  parameterPath: "customDomainUpdateProperties",
  mapper: AFDDomainUpdateParametersMapper
};

export const endpointName: OperationURLParameter = {
  parameterPath: "endpointName",
  mapper: {
    serializedName: "endpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationParameter = {
  parameterPath: "endpoint",
  mapper: AFDEndpointMapper
};

export const endpointUpdateProperties: OperationParameter = {
  parameterPath: "endpointUpdateProperties",
  mapper: AFDEndpointUpdateParametersMapper
};

export const contents: OperationParameter = {
  parameterPath: "contents",
  mapper: AfdPurgeParametersMapper
};

export const customDomainProperties: OperationParameter = {
  parameterPath: "customDomainProperties",
  mapper: ValidateCustomDomainInputMapper
};

export const originGroupName: OperationURLParameter = {
  parameterPath: "originGroupName",
  mapper: {
    serializedName: "originGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const originGroup: OperationParameter = {
  parameterPath: "originGroup",
  mapper: AFDOriginGroupMapper
};

export const originGroupUpdateProperties: OperationParameter = {
  parameterPath: "originGroupUpdateProperties",
  mapper: AFDOriginGroupUpdateParametersMapper
};

export const originName: OperationURLParameter = {
  parameterPath: "originName",
  mapper: {
    serializedName: "originName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const origin: OperationParameter = {
  parameterPath: "origin",
  mapper: AFDOriginMapper
};

export const originUpdateProperties: OperationParameter = {
  parameterPath: "originUpdateProperties",
  mapper: AFDOriginUpdateParametersMapper
};

export const routeName: OperationURLParameter = {
  parameterPath: "routeName",
  mapper: {
    serializedName: "routeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const route: OperationParameter = {
  parameterPath: "route",
  mapper: L4RouteMapper
};

export const routeUpdateProperties: OperationParameter = {
  parameterPath: "routeUpdateProperties",
  mapper: L4RouteUpdatePropertiesParametersMapper
};

export const route1: OperationParameter = {
  parameterPath: "route",
  mapper: RouteMapper
};

export const routeUpdateProperties1: OperationParameter = {
  parameterPath: "routeUpdateProperties",
  mapper: RouteUpdateParametersMapper
};

export const ruleSetName: OperationURLParameter = {
  parameterPath: "ruleSetName",
  mapper: {
    serializedName: "ruleSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ruleName: OperationURLParameter = {
  parameterPath: "ruleName",
  mapper: {
    serializedName: "ruleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const rule: OperationParameter = {
  parameterPath: "rule",
  mapper: RuleMapper
};

export const ruleUpdateProperties: OperationParameter = {
  parameterPath: "ruleUpdateProperties",
  mapper: RuleUpdateParametersMapper
};

export const securityPolicyName: OperationURLParameter = {
  parameterPath: "securityPolicyName",
  mapper: {
    serializedName: "securityPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const securityPolicy: OperationParameter = {
  parameterPath: "securityPolicy",
  mapper: SecurityPolicyMapper
};

export const securityPolicyUpdateProperties: OperationParameter = {
  parameterPath: "securityPolicyUpdateProperties",
  mapper: SecurityPolicyUpdateParametersMapper
};

export const secretName: OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    serializedName: "secretName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const secret: OperationParameter = {
  parameterPath: "secret",
  mapper: SecretMapper
};

export const metrics: OperationQueryParameter = {
  parameterPath: "metrics",
  mapper: {
    serializedName: "metrics",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const dateTimeBegin: OperationQueryParameter = {
  parameterPath: "dateTimeBegin",
  mapper: {
    serializedName: "dateTimeBegin",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const dateTimeEnd: OperationQueryParameter = {
  parameterPath: "dateTimeEnd",
  mapper: {
    serializedName: "dateTimeEnd",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const granularity: OperationQueryParameter = {
  parameterPath: "granularity",
  mapper: {
    serializedName: "granularity",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const groupBy: OperationQueryParameter = {
  parameterPath: ["options", "groupBy"],
  mapper: {
    serializedName: "groupBy",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const continents: OperationQueryParameter = {
  parameterPath: ["options", "continents"],
  mapper: {
    serializedName: "continents",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const countryOrRegions: OperationQueryParameter = {
  parameterPath: ["options", "countryOrRegions"],
  mapper: {
    serializedName: "countryOrRegions",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const customDomains: OperationQueryParameter = {
  parameterPath: "customDomains",
  mapper: {
    serializedName: "customDomains",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const protocols: OperationQueryParameter = {
  parameterPath: "protocols",
  mapper: {
    serializedName: "protocols",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const rankings: OperationQueryParameter = {
  parameterPath: "rankings",
  mapper: {
    serializedName: "rankings",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const metrics1: OperationQueryParameter = {
  parameterPath: "metrics",
  mapper: {
    serializedName: "metrics",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const maxRanking: OperationQueryParameter = {
  parameterPath: "maxRanking",
  mapper: {
    serializedName: "maxRanking",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const customDomains1: OperationQueryParameter = {
  parameterPath: ["options", "customDomains"],
  mapper: {
    serializedName: "customDomains",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const metrics2: OperationQueryParameter = {
  parameterPath: "metrics",
  mapper: {
    serializedName: "metrics",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const granularity1: OperationQueryParameter = {
  parameterPath: "granularity",
  mapper: {
    serializedName: "granularity",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const actions: OperationQueryParameter = {
  parameterPath: ["options", "actions"],
  mapper: {
    serializedName: "actions",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const groupBy1: OperationQueryParameter = {
  parameterPath: ["options", "groupBy"],
  mapper: {
    serializedName: "groupBy",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const ruleTypes: OperationQueryParameter = {
  parameterPath: ["options", "ruleTypes"],
  mapper: {
    serializedName: "ruleTypes",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const rankings1: OperationQueryParameter = {
  parameterPath: "rankings",
  mapper: {
    serializedName: "rankings",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const profile: OperationParameter = {
  parameterPath: "profile",
  mapper: ProfileMapper
};

export const profileUpdateParameters: OperationParameter = {
  parameterPath: "profileUpdateParameters",
  mapper: ProfileUpdateParametersMapper
};

export const canMigrateParameters: OperationParameter = {
  parameterPath: "canMigrateParameters",
  mapper: CanMigrateParametersMapper
};

export const migrationParameters: OperationParameter = {
  parameterPath: "migrationParameters",
  mapper: MigrationParametersMapper
};

export const endpoint1: OperationParameter = {
  parameterPath: "endpoint",
  mapper: EndpointMapper
};

export const endpointUpdateProperties1: OperationParameter = {
  parameterPath: "endpointUpdateProperties",
  mapper: EndpointUpdateParametersMapper
};

export const contentFilePaths: OperationParameter = {
  parameterPath: "contentFilePaths",
  mapper: PurgeParametersMapper
};

export const contentFilePaths1: OperationParameter = {
  parameterPath: "contentFilePaths",
  mapper: LoadParametersMapper
};

export const origin1: OperationParameter = {
  parameterPath: "origin",
  mapper: OriginMapper
};

export const originUpdateProperties1: OperationParameter = {
  parameterPath: "originUpdateProperties",
  mapper: OriginUpdateParametersMapper
};

export const originGroup1: OperationParameter = {
  parameterPath: "originGroup",
  mapper: OriginGroupMapper
};

export const originGroupUpdateProperties1: OperationParameter = {
  parameterPath: "originGroupUpdateProperties",
  mapper: OriginGroupUpdateParametersMapper
};

export const customDomainProperties1: OperationParameter = {
  parameterPath: "customDomainProperties",
  mapper: CustomDomainParametersMapper
};

export const customDomainHttpsParameters: OperationParameter = {
  parameterPath: ["options", "customDomainHttpsParameters"],
  mapper: CustomDomainHttpsParametersMapper
};

export const resourceGroupName1: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_\\-\\(\\)\\.]*[^\\.]$"),
      MaxLength: 80,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyName: OperationURLParameter = {
  parameterPath: "policyName",
  mapper: {
    constraints: {
      MaxLength: 128
    },
    serializedName: "policyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cdnWebApplicationFirewallPolicy: OperationParameter = {
  parameterPath: "cdnWebApplicationFirewallPolicy",
  mapper: CdnWebApplicationFirewallPolicyMapper
};

export const cdnWebApplicationFirewallPolicyPatchParameters: OperationParameter = {
  parameterPath: "cdnWebApplicationFirewallPolicyPatchParameters",
  mapper: CdnWebApplicationFirewallPolicyPatchParametersMapper
};
