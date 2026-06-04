# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-fiddler-inspect-web-calls?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-fiddler-inspect-web-calls?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Using Fiddler to inspect web service calls

Feedback

Summarize this article for me

Fiddler is a web debugging proxy that logs all HTTP and HTTPS traffic between your device and the internet. Use Fiddler to log and inspect traffic to and from the Xbox Live services and relying party web services, so you can understand and debug web service calls. Fiddler is available in multiple versions. 'Fiddler Classic' is freeware. The following section refers to this version only.

## For Microsoft Game Development Kit (GDK) projects running on Xbox One or later

For details, see [Fiddler](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/networking/tools/fiddler-setup-networking?view=gdk-2604).

## For Xbox One (or later) Xbox One Software Development Kit projects

In normal operation, a console that communicates through a proxy risks having its communications modified by the proxy. This modification can possibly allow players to cheat. Thus, consoles don't allow communication through a proxy. To use Fiddler with your Xbox One (or later) dev kit, you need to perform some special configuration steps on the dev kit to allow it to use the Fiddler proxy.

You can download Fiddler Classic from the [Fiddler website](https://www.telerik.com/download/fiddler).

Fiddler can affect the network status that the console reports. If you disable an upstream connection from the machine running Fiddler, the console might not detect this disconnection until the authentication of the console expires. If you're using Fiddler, be sure to disconnect the connection between the console and the computer running Fiddler, rather than using Fiddler to simulate a disconnect. Better still, use the network stress tools to simulate disconnection for testing purposes.

### Installing and enabling Fiddler on the development PC

To install and enable Fiddler to monitor traffic from your dev kit, follow these steps.

1. Install Fiddler Classic on your development PC, following the directions on the [Fiddler website](https://www.telerik.com/download/fiddler).
 
2. Launch Fiddler and select **Fiddler Options** from the **Tools** menu.
 
3. Select the **Connections** tab, and ensure that the **Allow remote computers to connect** checkbox is checked.
 
4. Select **OK** to accept your change to the settings. You'll see a dialog box saying that Fiddler must be restarted for the change to take effect, and that you might need to configure your firewall manually. Select **OK** on this dialog, but don't restart Fiddler yet.
 
5. Configure the necessary firewall rule to allow remote computers to connect. Start the Windows Firewall Control Panel applet. Select **Advanced Settings**, and then **Inbound Rule**. Find the rule named **FiddlerProxy**, and scroll to the right, verifying that each of the following settings appears for that rule.
 

Expand table

| Setting | Preferred Value |
| --- | --- |
| Name | FiddlerProxy |
| Group | (don't set a value for Group) |
| Profile | All |
| Enabled | Yes |
| Action | Allow |
| Override | No |
| Program | path to fiddler.exe |
| LocalAddress | Any |
| RemoteAddress | Any |
| Protocol | TCP |
| LocalPort | Any |
| RemotePort | Any |
| AllowedUsers | Any |
| AllowedComputers | Any |

6. Configure Fiddler to capture and decrypt HTTPS traffic.
 
 1. To enable best performance, set Fiddler to use Streaming Mode by selecting the **Stream** button on the button bar.
 2. In Fiddler, select **Tools**, then **Fiddler Options**, then **HTTPS**.
 3. Check the **Decrypt HTTPS traffic** checkbox. If a message box asks whether to configure Windows to trust the CA certificate, select **Yes**.
 4. Select the **Export Root Certificate to Desktop** button.
7. Exit Fiddler and start it again.
 

### To configure a dev kit to use Fiddler as its proxy to the Internet

Fiddler configuration on the dev kit is simpler than the method used in previous releases.

1. Copy the Fiddler root certificate that you exported to the desktop to the dev kit as `xs:\Microsoft\Cert\FiddlerRoot.cer`. Use the following command: `xbcp [local Fiddler Root directory]\FiddlerRoot.cer xs:\Microsoft\Cert\FiddlerRoot.cer`.
 
2. Create a text file named `ProxyAddress.txt` with the IP address or hostname of the development PC running Fiddler and the port number where Fiddler is listening as the only content in the file. Format the name/IP address and port as follows: `HOST:PORT`. (By default, Fiddler uses port 8888.) For example, `10.124.220.250:8888` or `my_dev_pc.contoso.com:8888`.
 
3. Copy that file to the dev kit as `xs:\Microsoft\Fiddler\ProxyAddress.txt`. Use the following command: `xbcp [local Proxy Address file directory]\ProxyAddress.txt xs:\Microsoft\Fiddler\ProxyAddress.txt`.
 
4. Reboot the dev kit by typing `xbreboot` into the command prompt.
 

### To stop using Fiddler

To stop using Fiddler as a proxy to the Internet, and thus tracing all of the dev kit's network traffic in Fiddler, rename or delete the `FiddlerRoot.cer` file on the dev kit, and then reboot the dev kit.

### How it works

If both the `xs:\Microsoft\Cert\FiddlerRoot.cer` file and the `xs:\Microsoft\Fiddler\ProxyAddress.txt` file are present at boot time, the dev kit configures itself to use the proxy server specified in `ProxyAddress.txt`. If either file is missing, the dev kit doesn't configure itself to operate through a Fiddler proxy.

Each PC with Fiddler installed uses a different Fiddler root certificate. If you have more than one PC that might provide a Fiddler proxy for your dev kit, you can copy each PC's Fiddler root certificate into the `xs:\Microsoft\Cert` directory, as long as one of them is named `FiddlerRoot.cer`.

The dev kit checks all of the certificates in the Cert directory when it authenticates a Fiddler proxy. The dev kit uses the Fiddler instance on the PC whose address is in `ProxyAddress.txt` as long as its certificate is present in the Cert directory.

## For Xbox One (or later) UWP projects

Follow the steps in the article [How to use Fiddler with Xbox One when developing for UWP ⬀](https://learn.microsoft.com/en-us/windows/uwp/xbox-apps/uwp-fiddler) in the UWP documentation.

## For Windows UWP PC apps

1. Make sure that the current user is in the administrator group on the PC.
 
2. Download Fiddler from [https://www.telerik.com/fiddler](https://www.telerik.com/fiddler).
 
3. Make sure that you select the version that is **Built for .NET 4**.
 
4. Once installed, go to **Tools** > **Fiddler Options** and enable **Capture HTTPS CONNECTs** and **Decrypt HTTPS traffic**. All communications between the runtime and Xbox services are encrypted by using SSL. Without this option, you don't see anything useful. Accept all dialogs Fiddler pops up (there are five dialogs, including UAC).
 
5. Go to **WinConfig**, select **Exempt All**, and **Save Changes**. Otherwise, Fiddler doesn't work with Store apps.
 
6. Now if you run your app, you see the requests and responses between the app, runtime, and Xbox services.
 

To debug UWP OS level calls, which isn't usually needed but can be helpful when debugging sign-in and in-game events, use this command to configure Fiddler to capture WinHTTP traffic:

```
    netsh winhttp set proxy 127.0.0.1:8888 "<-loopback>"
```

The port number must match the port configured on the Fiddler **Tools** | **Options** | **Connections** tab. The default port number is 8888.

Use this command to undo this configuration:

```
    netsh winhttp reset proxy
```

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

- Last updated on 04/22/2026