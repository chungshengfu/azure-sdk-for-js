/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a long term retention backup.
 *
 * @summary Deletes a long term retention backup.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-05-01-preview/examples/ResourceGroupBasedLongTermRetentionBackupDelete.json
 */
async function deleteTheLongTermRetentionBackup() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "testResourceGroup";
  const locationName = "japaneast";
  const longTermRetentionServerName = "testserver";
  const longTermRetentionDatabaseName = "testDatabase";
  const backupName =
    "55555555-6666-7777-8888-999999999999;131637960820000000;Archive";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.longTermRetentionBackups.beginDeleteByResourceGroupAndWait(
      resourceGroupName,
      locationName,
      longTermRetentionServerName,
      longTermRetentionDatabaseName,
      backupName,
    );
  console.log(result);
}

async function main() {
  deleteTheLongTermRetentionBackup();
}

main().catch(console.error);
