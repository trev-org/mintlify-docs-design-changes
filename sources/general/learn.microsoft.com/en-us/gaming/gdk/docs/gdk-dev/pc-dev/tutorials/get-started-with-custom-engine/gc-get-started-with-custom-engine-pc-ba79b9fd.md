# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-custom-engine/gc-get-started-with-custom-engine-pc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/get-started-with-custom-engine/gc-get-started-with-custom-engine-pc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# C/C++ Custom engine integration for PC: get started

Feedback

Summarize this article for me

Use this topic if you are preparing your game for publishing to the Microsoft Store on PC, and your game uses a C/C++ based engine that does not have built in support for the GDK.

- [Creating a product in Partner Center](https://learn.microsoft.com/#CreatingAProductInPartnerCenter)
- [Integrating the GDK into C/C++ games](https://learn.microsoft.com/#IntegratingTheGDK)
- [Testing Xbox services in your game](https://learn.microsoft.com/#TestingXboxServices)
- [Publishing](https://learn.microsoft.com/#Publishing)

## Creating a product in Partner Center

Before you can publish a game to the Microsoft Store, you need to create your Xbox services-enabled product in Partner Center. For more information about Partner Center, see [Setting up an app or game in Partner Center, for Managed Partners](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/portal-config/live-setup-partner-center-partners?view=gdk-2604).

## Integrating the GDK into C/C++ games

To integrate the GDK into a C/C++ game, the game needs 4 things:

1. The GDK and Xbox Services API (XSAPI) _header(s)_ that describe the API signatures and data structures.
2. The _import libraries_ that tells the linker how to resolve external references to exported GDK functions.
3. The XSAPI static libraries or _import libraries_ that tells the linker how to resolve external references to exported XSAPI DLL functions.
 - XSAPI is available in both static and dynamic forms. Refer to the table below for more information and choose from either static or dynamic.
4. The _dynamic-link libraries_ that actually contains the runtime implementation of the GDK and XSAPI functions (if utilizing the dynamic version of XSAPI).

For games to integrate with essential Xbox ecosystem experiences, they need to interact with two components - Gaming Runtime Services (GRTS) and XSAPI. Here are the files needed by an unmanaged game:

Expand table

| Component | GRTS (dynamic only) | XSAPI (dynamic) | XSAPI (static) |
| --- | --- | --- | --- |
| Headers | GRTS headers: XUser, XGameSave, XGameUI, etc. (from GDK) | XSAPI headers: profile\_c.h, achievements\_c.h, etc. (from GDK) | XSAPI headers: profile\_c.h, achievements\_c.h, etc. (from GDK) |
| Import library | xgameruntime.lib (from GDK) | Microsoft.Xbox.Services.GDK.C.Thunks.lib (from GDK) | Microsoft.Xbox.Services.142.GDK.C.lib (from GDK) |
| Dynamic-link library | xgameruntime.dll and a few other dlls (system32 installed by GRTS) | Microsoft.Xbox.Services.GDK.C.Thunks.dll (from GDK, needs to be included in the game package) | Not required |

Note

For games that use a plug-in–based architecture with functionality spread across multiple DLLs, we recommend and support integrating XSAPI into them by using the `Thunks.dll`. This approach works reliably on both PC and Xbox platforms.

When you statically link XSAPI into multiple DLLs, each DLL maintains its own copy of the global state. As a result, calling `XblInitialize` in one DLL doesn’t initialize XSAPI in others. Sharing XSAPI handles across DLLs with separate static instances can lead to crashes or unpredictable behavior.

The `Thunks.dll` solves this by providing a single shared instance of XSAPI and its state. This avoids duplication and ensures consistent behavior across all DLLs.

While it’s technically possible to statically link XSAPI into one DLL and export the symbols, this approach is more complex and error-prone. Using the `Thunks.dll` is simpler, safer, and fully supported.

### Adding requirements for Gaming Runtime Services and XSAPI to your project

The following steps outline the changes you need to make to your project to ensure it has all of the requirements for using the Gaming Runtime Services and XSAPI.

1. Make sure x64 is being targeted.
 
 In Visual Studio you would go to **Build**\->**Configuration Manager** and set **Active solution platform** to x64.
 
2. Add the following include paths:
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\GameKit\Include`
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.Services.API.C\Include`
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.LibHttpClient\Include`
 
 Where **GDK version number** will be a directory named for the year, month, and sub-version number of the release. For example, for the June 2022 GDK the directory name would be 220600.
 
 For Microsoft GDK (June 2024) or earlier, use _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.Services.API.C\\DesignTime\\CommonConfiguration\\Neutral\\Include_ and _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.LibHttpClient\\DesignTime\\CommonConfiguration\\Neutral\\Include_
 
 In Visual Studio you would add these paths in the project properties page under **Configuration Properties**\->**VC++ Directories**\->**Include Directories**.
 
3. Add the following library paths for the import libraries:
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\GameKit\Lib\amd64`
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.Services.API.C\Lib\x64\Release`
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.LibHttpClient\Lib\x64`
 
 Where **GDK version number** will be a directory named for the year, month, and sub-version number of the release. For example, for the June 2022 GDK the directory name would be 220600.
 
 For Microsoft GDK (June 2024) or earlier, use _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.Services.API.C\\DesignTime\\CommonConfiguration\\Neutral\\Lib\\Release_ and _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.LibHttpClient\\DesignTime\\CommonConfiguration\\Neutral\\Lib_
 
 In Visual Studio you would add these paths in the project properties page under **Configuration Properties**\->**VC++ Directories**\->**Library Directories**.
 
4. Add the following libraries to the list of libraries linked into your project:
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\GameKit\Lib\amd64\xgameruntime.lib`
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.Services.API.C\Lib\x64\Release\Microsoft.Xbox.Services.GDK.C.Thunks.lib (or Microsoft.Xbox.Services.142.GDK.C.lib, if statically linking)`
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.LibHttpClient\Lib\x64\libHttpClient.GDK.lib`
 
 Where **GDK version number** will be a directory named for the year, month, and sub-version number of the release. For example, for the June 2022 GDK the directory name would be 220600.
 
 For Microsoft GDK (June 2024) or earlier, use _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.Services.API.C\\DesignTime\\CommonConfiguration\\Neutral\\Lib\\Release\\Microsoft.Xbox.Services.GDK.C.Thunks.lib (or Microsoft.Xbox.Services.142.GDK.C.lib, if statically linking)_ and _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.LibHttpClient\\DesignTime\\CommonConfiguration\\Neutral\\Lib\\libHttpClient.GDK.lib_
 
 In Visual Studio you would add the libraries in the project properties page under **Configuration Properties**\->**Linker**\->**Input**\->**Additional Dependencies**.
 
5. Define _\_GAMING\_DESKTOP_ and _WINAPI\_FAMILY=WINAPI\_FAMILY\_DESKTOP\_APP_.
 
 In Visual Studio you would add the following line in the project properties page under **C/C++**\->**Command Line**\->**Additional Options**:
 
 `/D "_GAMING_DESKTOP" /D "WINAPI_FAMILY=WINAPI_FAMILY_DESKTOP_APP"`
 
6. Create a MicrosoftGame.config file and make sure it is copied to the same destination as the .exe during builds.
 
 **Note:** If your engine supports any sort of run-in-editor functionality that uses a different .exe when running, you'll need to make sure MicrosoftGame.config is copied to the same directory as that .exe as well. If MicrosoftGame.config isn't present in the same directory as the .exe, Xbox services will not work when using your run-in-editor functionality.
 
 For starting development you can use a config with default values like the following example. Values for Identity Name, Executable Name, and Executable Alias would all be replaced with the name of your executable.
 
 ```
    <?xml version="1.0" encoding="utf-8"?>
    <Game configVersion="1">
    
    <Identity Name="Direct3DGame1_test"
                Publisher="CN=Publisher"
                Version="1.0.0.0"/>
    
    <ExecutableList>
        <Executable Name="Direct3DGame1_test.exe"
                    Id="Game"
                    Alias="Direct3DGame1_test.exe"/>
    </ExecutableList>
    
    <ShellVisuals DefaultDisplayName="Direct3DGame1_test"
                    PublisherDisplayName="PublisherName"
                    Square480x480Logo="LargeLogo.png"
                    Square150x150Logo="GraphicsLogo.png"
                    Square44x44Logo="SmallLogo.png"
                    Description="Direct3DGame1_test"
                    ForegroundText="light"
                    BackgroundColor="#000040"
                    SplashScreenImage="SplashScreen.png"
                    StoreLogo="StoreLogo.png"/>
    </Game>
    ```
 
7. Make sure copies of **Microsoft.Xbox.Services.GDK.C.Thunks.dll** (if dynamically linked), **XCurl.dll,** and **libHttpClient.GDK.dll** are copied to the same destination as the .exe during builds.
 
 **Note:** If your engine supports any sort of run-in-editor functionality that uses a different .exe when running, you'll need to make sure that the .exe references these .dlls as well. If the .dlls aren't referenced by the .exe, Xbox services will not work when using your run-in-editor functionality.
 
 If dynamically linking to XSAPI, **Microsoft.Xbox.Services.GDK.C.Thunks.dll** can be found in the GDK install in the following directory:
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.Services.API.C\Lib\x64\[Debug|Release]`
 
 **XCurl.dll** can be found in the GDK install in the following directory:
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.XCurl.API\Redist\x64`
 
 **libHttpClient.GDK.dll** can be found in the GDK install in the following directory:
 
 `C:\Program Files (x86)\Microsoft GDK\[GDK version number]\GRDK\ExtensionLibraries\Xbox.LibHttpClient\Redist\x64`
 
 Where **GDK version number** will be a directory named for the year, month, and sub-version number of the release. For example, for the June 2022 GDK the directory name would be 220600.
 
 For Microsoft GDK (June 2024) or earlier, use _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.Services.API.C\\DesignTime\\CommonConfiguration\\Neutral\\Lib\\\[Debug|Release\]_, _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.XCurl.API\\Redist\\CommonConfiguration\\neutral_, and _C:\\Program Files (x86)\\Microsoft GDK\\\[GDK version number\]\\GRDK\\ExtensionLibraries\\Xbox.LibHttpClient\\Redist\\CommonConfiguration\\neutral_
 

Note

Alternatively, if you are integrating the GDK into an existing Visual Studio Desktop project you can follow the steps in this topic to convert your project to a GDK project, [Adding the Microsoft Game Development Kit to an existing desktop project](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-add-to-existing-project?view=gdk-2604).

### Update MicrosoftGame.config

The MicrosoftGame.config file created in the previous step has default values that allow early development on PC and Xbox without the need for further configuration until you start to use features in the Gaming Runtime, Microsoft Store, and title identity. In order to use Xbox services functionality you need to update your project's MicrosoftGame.config with your Partner Center project identity details.

1. Go to the [Partner Center dashboard](https://partner.microsoft.com/dashboard/windows/overview).
2. Select your game from the list of products.
3. Select the **Game setup** tab, and then select **Identity details**.
4. Select **Show Details** to expand the **Identity details** section.
5. Use the following values from the table in the **Identity details** section, and then copy those values from Partner Center into the corresponding element and field in MicrosoftGame.config.

Expand table

| Name in Partner Center | MicrosoftGame.config |
| --- | --- |
| Xbox Title ID | TitleId |
| Package/Identity/Name | Identity->Name |
| Package/Identity/Publisher | Identity->Publisher |
| Xbox services -> Xbox Settings -> MSAAppId | MSAAppId |

For example, the following identity details in Partner Center would result in your MicrosoftGame.config looking like the sample bellow:

Expand table

| Name in Partner Center | Example value |
| --- | --- |
| Xbox Title ID | 64353034 |
| Package/Identity/Name | 41336MicrosoftATG.Achievements2017Redux |
| Package/Identity/Publisher | CN=A4954634-DF4B-47C7-AB70-D3215D246AF1 |
| Xbox services -> Xbox Settings -> MSAAppId | 0000000000000000 |

```
<?xml version="1.0" encoding="utf-8"?>
<Game configVersion="1">

  <Identity Name='41336MicrosoftATG.Achievements2017Redux' Version="1.1.0.0" Publisher='CN=A4954634-DF4B-47C7-AB70-D3215D246AF1' />

  <TitleId>64353034</TitleId>
  <MSAAppId>0000000000000000</MSAAppId>
  
  <ExecutableList>
    <Executable Name="Achievements2017_desktop.exe"
                TargetDeviceFamily="PC"
                Id="Game"/>
  </ExecutableList>
  
  <ShellVisuals DefaultDisplayName="Achievements2017 Desktop Sample"
                PublisherDisplayName="Xbox Advanced Technology Group"
                StoreLogo="Assets\StoreLogo.png"
                Square150x150Logo="Assets\Logo.png"
                Square44x44Logo="Assets\SmallLogo.png"
                Square480x480Logo="Assets\LargeLogo.png"
                Description="Achievements2017"
                ForegroundText="dark"
                BackgroundColor="#000000"
                SplashScreenImage="Assets\SplashScreen.png"/>
</Game>

```

See [MicrosoftGame.config overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-config/microsoftgameconfig-overview?view=gdk-2604) for additional information on the values in MicrosoftGame.config.

### Initialize the game runtime and XSAPI

The following steps show how to initialize Gaming Runtime Services and XSAPI in your game.

1. Include the XGameRuntime header and the XSAPI services-c header.
 
 ```
    #include <XGameRuntime.h> 
    #include <xsapi-c/services_c.h>
    ```
 
2. Call [XGameRuntimeInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/functions/xgameruntimeinitialize?view=gdk-2604) to initialize the GDK runtime.
 
 ```
    // Initialize the GameRuntime
    HRESULT hr = XGameRuntimeInitialize();
    if (FAILED(hr))
    {
        if (hr == E_GAMERUNTIME_DLL_NOT_FOUND || hr == E_GAMERUNTIME_VERSION_MISMATCH)
        {
            (void)MessageBoxW(nullptr, L"Game Runtime is not installed on this system or needs updating.", g_szAppName, MB_ICONERROR | MB_OK);
        }
        return 1;
    
    }
    
    ```
 
3. Call [XblInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/xbox_live_global_c/functions/xblinitialize?view=gdk-2604) to initialize XSAPI.
 
 ```
     XblInitArgs xblArgs = {};
     //xblArgs.queue = queue; // Uncomment this line if you've chosen to create your own XTaskQueue. Otherwise, by default, this line is not needed.
     xblArgs.scid = "00000000-0000-0000-0000-000000000000"; // Add your scid from your Partner Center project here;
    
     HRESULT hr = XblInitialize(&xblArgs);
     if (FAILED(hr))
     {
         // Handle failure
     }
    
    ```
 

### Uninitializing the game runtime

Gaming Runtime Services need to be uninitialized before your game exits. XSAPI does not need to be explicitly cleaned up prior to exit.

Uninitialize the GDK runtime by calling [XGameRuntimeUninitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/functions/xgameruntimeuninitialize?view=gdk-2604).

```
 // Uninitialize the Gaming Runtime after
 // all other activity has been completed.
 XGameRuntimeUninitialize();
```

See [Getting started with Xbox services APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/xbox-services-api/live-gs-xbl-apis?view=gdk-2604) for a detailed overview of using XSAPI in your game. 
See [Game Development Kit (GDK) features](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/features-index?view=gdk-2604) for overviews of implementing GDK features.

## Testing Xbox services in your game

In order to test Xbox services functionality in your game such as achievements, you need to use a sandbox and test accounts with access to that sandbox.

### Creating a test account

To test any Xbox services features in your game you'll need to create test accounts that have access to your development sandbox. For information about creating test accounts, see [Creating test accounts](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/test-accounts/live-setup-testaccounts?view=gdk-2604).

### Switching your sandbox

After you've created a test account, use the account to access your sandbox by using the following steps.

1. To find your sandbox ID, go to [Partner Center](https://partner.microsoft.com/dashboard/windows/overview).
2. Select **Xbox services**, and then select **Gameplay Settings**.
 
 Note
 
 Your sandbox ID is on the first tab, and it's named like "ABCDEF.0".
 
3. Open the **Start** menu.
4. Enter **Microsoft GDK Command Prompts**, and then select **Enter** on your keyboard.
5. Open the first command prompt.
6. In the command prompt, enter **XblPCSandbox.exe \[your sandbox ID\]**.
7. After the command prompt launches several apps, sign in with your test account to the Xbox App.

If you're able to sign in successfully, you've created a test account and changed to your sandbox to begin testing.

For more information on sandboxes see [Xbox services Sandboxes overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox?view=gdk-2604).

## Publishing

In order to be ready to publish your game, you need to:

- Have finished integrating your game with the GDK
- Created a game package by following the steps in [Getting started with packaging titles for a PC by using the MSIXVC packaging tools](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc?view=gdk-2604)

After you've completed those two requirements, you're ready to publish. To submit your game, go to [Partner Center](https://partner.microsoft.com/dashboard/windows/overview) and follow the instructions in the UI.

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 11/06/2025