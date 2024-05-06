// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare module "react-native" {
  export const Platform: {
    constants?: {
      reactNativeVersion?: {
        major: number;
        minor: number;
        patch: number;
      };
    };

    OS: string;
    Version: string;
  };
}
