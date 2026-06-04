---
author: M-Stahl
title: "Fiddler on Windows PC"
description: "Describes how to use Fiddler with the Microsoft Game Development Kit (GDK) on Windows PC."
kindex:
- How to use Fiddler with the Microsoft Game Development Kit (GDK) on Windows desktop
- How to use Fiddler with the Microsoft Game Development Kit (GDK) on Windows PC
- Xbox services, Fiddler on Windows PC
- Xbox services, Fiddler
- Xbox services, traffic capture
ms.author: douggal
ms.topic: article
edited: 11/17/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Fiddler on Windows PC

Use this article to understand how to use Fiddler with the Microsoft Game Development Kit (GDK) on Windows PC. *Fiddler* is a web-debugging proxy that logs all HTTP and HTTPS traffic between a Windows PC and the internet. To understand and debug web service calls, use Fiddler to log and inspect traffic. Fiddler is available in several versions. *Fiddler Classic* is freeware. To download it, see the [Fiddler website](https://www.telerik.com/download/fiddler). The following section refers only to Fiddler Classic.


## Configuring Fiddler for use with the Microsoft Game Development Kit (GDK) on Windows PC

Configure Fiddler for use with the Microsoft Game Development Kit (GDK) on Windows PC by using its standard configuration process. For more information about this process, see the [Fiddler documentation](https://docs.telerik.com/fiddler/configure-fiddler/tasks/configurefiddler).

To capture all Xbox services and title traffic correctly, also ensure the following conditions are met:

* Run Fiddler in Administrator mode.
* Enable traffic capture for Xbox Game Bar, Xbox Console Companion, Xbox Game UI, and Xbox title-callable UI (TCUI).  

  You can do this process from **Tools** > **Win8 Loopback Exemptions** by selecting the following package names from the list and then saving any changes:
    - Xbox Game Bar Plugin
    - Xbox Console Companion
    - Xbox Game UI
    - Xbox TCUI
      
* Enable traffic capture from a title-executable container of a game.

  This condition can be met from the **Tools** > **Win8 Loopback Exemptions** menu by selecting the game package name from the list where the **Description** field matches the title package name. 

This Fiddler setup doesn't capture sign-in and in-game events, and you typically don't need these events for traffic analysis. To also capture this type of traffic, complete the following steps:

* Open an Administrator-level command prompt.
* Run `netsh winhttp set proxy 127.0.0.1:8888 "<-loopback>"`, where the port number (8888) matches the port you configured under the Fiddler **Tools** > **Options** > **Connections** tab.

Use the following steps to disable the capture of this traffic:

* Open an Administrator-level command prompt.
* Run `netsh winhttp reset proxy`.

## Limitations of traffic captures on Windows PC

Some Windows PC configurations prevent Fiddler from capturing traffic. The most common issues for game developers are:

* You can only capture traffic from a title-executable container of a game if the implementation respects the Windows networking and proxy configuration. You can't capture traffic that doesn't respect proxy configuration.
* VPN clients can disable proxy configuration and prevent traffic capture through Fiddler. You can review VPN routing and exempt title and Xbox traffic in the VPN configuration to address this problem.

For additional troubleshooting, see the [Fiddler website](https://www.telerik.com/download/fiddler).

## See also

 [Fiddler website](https://www.telerik.com/download/fiddler)
