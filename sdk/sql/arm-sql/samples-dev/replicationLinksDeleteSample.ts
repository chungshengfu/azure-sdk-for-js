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
 * This sample demonstrates how to Deletes the replication link.
 *
 * @summary Deletes the replication link.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-02-01-preview/examples/ReplicationLinkDelete.json
 */
async function deleteReplicationLinkOnServer() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default";
  const serverName = "sourcesvr";
  const databaseName = "gamma-db";
  const linkId = "4891ca10-ebd0-47d7-9182-c722651780fb";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.replicationLinks.beginDeleteAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    linkId,
  );
  console.log(result);
}

async function main() {
  deleteReplicationLinkOnServer();
}

main().catch(console.error);
