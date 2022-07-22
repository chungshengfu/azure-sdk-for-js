# Release History
    
## 4.1.0 (2022-07-22)
    
**Features**

  - Added operation ReplicationMigrationItems.beginPauseReplication
  - Added operation ReplicationMigrationItems.beginPauseReplicationAndWait
  - Added operation ReplicationMigrationItems.beginResumeReplication
  - Added operation ReplicationMigrationItems.beginResumeReplicationAndWait
  - Added Interface PauseReplicationInput
  - Added Interface PauseReplicationInputProperties
  - Added Interface ReplicationMigrationItemsPauseReplicationOptionalParams
  - Added Interface ReplicationMigrationItemsResumeReplicationOptionalParams
  - Added Interface ResumeReplicationInput
  - Added Interface ResumeReplicationInputProperties
  - Added Interface ResumeReplicationProviderSpecificInput
  - Added Type Alias ReplicationMigrationItemsPauseReplicationResponse
  - Added Type Alias ReplicationMigrationItemsResumeReplicationResponse
  - Added Type Alias ResumeReplicationProviderSpecificInputUnion
  - Added Type Alias VMwareCbtResumeReplicationInput
  - Interface MigrationItemProperties has a new optional parameter lastMigrationStatus
  - Interface MigrationItemProperties has a new optional parameter lastMigrationTime
  - Interface MigrationItemProperties has a new optional parameter recoveryServicesProviderId
  - Interface MigrationItemProperties has a new optional parameter replicationStatus
  - Interface VMwareCbtNicDetails has a new optional parameter testIPAddress
  - Interface VMwareCbtNicDetails has a new optional parameter testIPAddressType
  - Interface VMwareCbtNicDetails has a new optional parameter testNetworkId
  - Interface VMwareCbtNicDetails has a new optional parameter testSubnetName
  - Interface VMwareCbtNicInput has a new optional parameter testStaticIPAddress
  - Interface VMwareCbtNicInput has a new optional parameter testSubnetName
  - Interface VMwareCbtProtectedDiskDetails has a new optional parameter seedBlobUri
  - Interface VMwareCbtProtectedDiskDetails has a new optional parameter targetBlobUri
  - Interface VMwareCbtUpdateDiskInput has a new optional parameter isOSDisk
  - Type Alias VMwareCbtEnableMigrationInput has a new parameter testNetworkId
  - Type Alias VMwareCbtEnableMigrationInput has a new parameter testSubnetName
  - Type Alias VMwareCbtMigrationDetails has a new parameter storageAccountId
  - Type Alias VMwareCbtMigrationDetails has a new parameter testNetworkId
  - Type Alias VMwareCbtMigrationDetails has a new parameter resumeProgressPercentage
  - Type Alias VMwareCbtMigrationDetails has a new parameter resumeRetryCount
  - Type Alias VMwareCbtTestMigrateInput has a new parameter vmNics
  - Type Alias VMwareCbtUpdateMigrationItemInput has a new parameter testNetworkId
  - Enum KnownMigrationItemOperation has a new value PauseReplication
  - Enum KnownMigrationItemOperation has a new value ResumeReplication
  - Enum KnownMigrationState has a new value MigrationCompletedWithInformation
  - Enum KnownMigrationState has a new value MigrationPartiallySucceeded
  - Enum KnownMigrationState has a new value ProtectionSuspended
  - Enum KnownMigrationState has a new value ResumeInitiated
  - Enum KnownMigrationState has a new value ResumeInProgress
  - Enum KnownMigrationState has a new value SuspendingProtection
    
    
## 4.0.0 (2022-01-20)

The package of @azure/arm-recoveryservices-siterecovery is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
