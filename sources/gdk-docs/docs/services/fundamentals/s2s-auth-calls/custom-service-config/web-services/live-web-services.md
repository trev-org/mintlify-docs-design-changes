---
title: "Setting up web services at Partner Center"
description: "Describes how to create your own web service for an Xbox services-enabled app."
kindex:
- Setting up web services at Partner Center
- Xbox services, Setting up web services at Partner Center
- Xbox services, Managed Partners
- Xbox services, SSO
- Xbox services, NSAL
- Xbox services, Business Partner Certificate
- Xbox services, Relying Party
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.date: 06/04/2018
edited: 05/03/2021
permissioned-type: public
---

# Setting up web services at Partner Center

> [!NOTE]
>This topic is for Managed Partners only, not for the Creators Program, because of restrictions that are placed on web service configuration. It's only available to developers with the Relying Parties account-level permission granted. If you don't have control of your account-level permissions, contact your developer account manager (DAM) for assistance.

Publishers can create web services if they want to customize the way their apps/titles interact with Xbox services.
Web services are publisher-level configurations and can be called by any title within a sandbox that's owned by the publisher by configuring single sign-on (SSO).

Reasons to define web services:

1. **Providing SSO to Xbox users:** For your web service to provide SSO to Xbox users, it needs to be configured as a Relying Party of Xbox services. When configured this way, users who are authenticated in Xbox services are automatically authenticated in your services without having to enter a different set of credentials.

2. **Making service-to-service calls from your service to Xbox services:** If your title will use one of your web services to make calls to Xbox services, either directly or on behalf of individual users, you'll need a Business Partner Certificate.

## Creating a web service

1. Go to the [Partner Center Dashboard](https://partner.microsoft.com/dashboard/windows/overview).
2. Select the **Apps and Games** section
3. From the left navigation pane, select **Xbox services** > **Web services**.
4. On the **Web Services** page, select **New Web Service**.
5. Enter the Web Service Name, and then choose the access type as required.
    * **Telemetry access** enables your service to retrieve game telemetry data for any of your games.
    * **App Channel access** gives the media provider that owns the service the authority to programmatically publish app channels for consumption on console.
6. Select **Save**.

At this point, you have defined the service, and Xbox services is aware of the existence of the service.
Depending on the reasons for creating the web service, you'll be required to configure Relying Parties (SSO) or Business Partner Certificates (service-to-service calls).


<a id="corepa"></a>

## Configuring the NSAL, XSTS token definitions, and Relying Parties in Partner Center  

Before your title can communicate with your web service by using XSTS tokens, you'll need to define your web service in Partner Center, create a Relying Party, and publish your title's Network Security Access List (NSAL) via the Xbox services configuration in your sandbox.  

### Defining your web service, Relying Party, and XSTS token claims  

1. In Partner Center, select the **Apps and games** section  
2. From the left navigation menu select, **Xbox services** > **Relying parties**.  
3. On the **Relying Parties** page, select **New Relying Party**.  
4. Provide an Audience URI*.  
5. Select the encryption type that you want your tokens to use**.  
6. Create an asymmetric Relying Party certificate by following the instructions in the next section. Then export and upload the public .cer file. Ensure that you name the .cer file something related to the Relying Party so that it's easy to identify.  
7. Enter how long, in hours, that you want your token's lifetime to last (we recommend four hours).  
8. Add the required token claims to the token definition.  
9. Select **Save**.  

>*The Audience URI must be in the form of a host URI. However, the name can be different from the URI of the actual service. For example, `Example.com` could be Audience URI of the Relying Party, but the service endpoint is actually `https://game.example.com/action/`.  

>**We recommend using the `JWE RFC 7516` option for asymmetric encryption. The `JWE Draft 7` legacy option is for backward compatibility of previous titles.  

### Creating a new Relying Party certificate  

1. On your computer, open the Developer Command Prompt for Visual Studio.  
2. Run the following command, replacing the example name "Contoso" with your own:  
`makecert -sv RP_Private_Key.pvk -n "CN=Contoso Relying Party" RP_Cert.cer -b 01/01/2015 -e 12/31/2199 -sky exchange -ss My -a sha256 -len 2048 -r -pe`  
3. When prompted, enter a password for the private key.  
4. Run the following command, replacing the password at the end with your own:  
`PVK2PFX -pvk RP_Private_Key.pvk -spc RP_Cert.cer -pfx RP_Full_Cert.pfx -po PasswordForPFX!`  
5. When prompted, enter the password that you set for the private key in step 3.  
6. Use the *RP_Cert.cer* file to set up your token definition setup in Partner Center.  
7. Copy the *RP_Full_Cert.pfx* file to your server, and then import it to the computer's certificate store.  
8. When importing the full certificate, ensure that you select the **Mark this key as exportable** option so that you can export it to other servers if needed.  
9. If you ever need to re-export the public key .cer file for this certificate, select the **Base-64 encoded X.509 (.CER)** option in the **Certificate Export** wizard.  


### Defining your service endpoint in your title's NSAL  

Now that you've defined your Relying Party and XSTS token claims, you need to define the URL that your title will be calling in the NSAL for your Xbox services configuration. This informs the `GetTokenAndSignature` API on the client which XSTS token definition it should give when calling that URL host.  

1. Go to your title's overview page in Partner Center.
1. Select **Xbox services** > **Gameplay settings** in the left navigation menu. The **Gameplay Setting** page appears.
1. Review the tab toward the top of the page for the sandbox that you'll be testing in.  
1. Select **Xbox services** > **Single sign-on**.  The **Xbox Live single sign-on configuration** page appears.
1. Select **New endpoint**.  
1. Enter the URL host address of the service that your title will be calling.  
1. Select the **Relying Party** that you previously configured from the dropdown list.  
1. Select **Save**.
1. Go back to the **Gameplay Setting** page.  
1. Select the tab of the sandbox that you want to publish your updated NSAL to.  
1. Select **Publish** in the upper-right corner.  

### Creating a Business Partner Certificate for server-to-server (business-to-business (B2B)) calls to Xbox services  

1. In Partner Center, select the **Apps and games** section
2. From the left navigation menu select, **Xbox services** > **Web services**.  
3. Select **New web service**.  
4. Enter a name to identify your web service. This name can be the host URL or any string name to help you identify where the certificates will be used and manage them.  
5. Select **Save**.
6. On the **Web services** page, you should now see your new web service listed.  
7. Select **Generate Certificate** for your new web service.  
8. Select the **Show Options** link to see a PowerShell script to create the needed key. You can run this script on any computer, and then export the certificate to other computers.  
9. From the console window, remove any word wrap line breaks, and then copy the resulting string key output into the text box under **Download the CSP Certificate**.  
10. Select **Download**.  
11. Follow the instructions under **Binding the Certificate**.  
12. Ensure that after the certificate is imported it has the private key bound to it (indicated by the **small key** icon in the upper-left corner).  


Specifying an SSL certificate chain for the endpoint connection is only required when using a self-signed certificate. Public SSL certificates that are grounded in known Certificate Authorities are valid without configuration.  
> [!NOTE]
> Self-signed certificates can only be used for development scenarios and are prohibited for production services.  

## Configuring a Business Partner Certificate

If your title will use one of your web services to make calls to Xbox services, either directly or on behalf of individual users, you'll need a Business Partner Certificate.


### Generating a Business Partner Certificate

Use the following steps after you've successfully created a web service.

1. On the **Web Services** page, find the web service that you want to associate a Business Partner Certificate with.
2. Select the **Generate Certificate** link against the chosen web service.
3. Select **Show Options** next to **Generating a New Certificate**. This displays commands that should be run from PowerShell with Administrator privileges.
4. Running all the commands, one after the other, should successfully give a Base64-encoded blob. This is the public key. Copy the public key from PowerShell, and then paste it in the placeholder for the configuration service provider (CSP) blob.
5. Select **Download**, and then follow the instructions on the page for **Binding the certificates**.
    1. Use the same computer that you used to generate the public key.
    2. Run this command in PowerShell: `mmc.exe`
    3. Select **File**, and then select **Add/Remove Snap In**.
    4. Select **Certificates**, and then select **Add**. Ensure that you select **Computer Account** for the certificate snap-in. Select **Finish**, and then select **OK**.
    5. Open the Personal\Certificate store.
    6. Right-click **Certificates**, and then select **All Tasks**. Select **Import**.
    7. Select the certificate that you downloaded from Partner Center.
    8. Right-click the certificate in the UI after it was imported. Select **All Tasks**, and then select **Export**.
    9. Follow the **Export** wizard. Ensure that you select to export the private key with the certificate.
    10. Finish the **Export** wizard.
