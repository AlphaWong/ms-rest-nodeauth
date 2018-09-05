// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

export { TokenCredentialsBase } from "./credentials/tokenCredentialsBase";
export { ApplicationTokenCredentials } from "./credentials/applicationTokenCredentials";
export { DeviceTokenCredentials } from "./credentials/deviceTokenCredentials";
export { UserTokenCredentials } from "./credentials/userTokenCredentials";
export { MSIOptions, MSITokenCredentials, MSITokenResponse } from "./credentials/msiTokenCredentials";
export { MSIAppServiceOptions, MSIAppServiceTokenCredentials } from "./credentials/msiAppServiceTokenCredentials";
export { MSIVmOptions, MSIVmTokenCredentials } from "./credentials/msiVmTokenCredentials";
export { AuthConstants, TokenAudience } from "./util/authConstants";
export { LinkedSubscription, LinkedUser, UserType } from "./subscriptionManagement/subscriptionUtils";
export {
  AuthResponse, LoginWithAuthFileOptions, InteractiveLoginOptions,
  AzureTokenCredentialsOptions, LoginWithUsernamePasswordOptions,
  interactive as interactiveLogin,
  withInteractiveWithAuthResponse as interactiveLoginWithAuthResponse,
  withUsernamePassword as loginWithUsernamePassword,
  withUsernamePasswordWithAuthResponse as loginWithUsernamePasswordWithAuthResponse,
  withServicePrincipalSecret as loginWithServicePrincipalSecret,
  withServicePrincipalSecretWithAuthResponse as loginWithServicePrincipalSecretWithAuthResponse,
  withAuthFile as loginWithAuthFile,
  withAuthFileWithAuthResponse as loginWithAuthFileWithAuthResponse,
} from "./login";