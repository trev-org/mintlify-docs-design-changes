---
author: M-Stahl
title: "Development PC hardware and OS requirements"
description: "Describes the development PC hardware and operating system requirements for developing titles with the Microsoft Game Development Kit (GDK)."
kindex: Setting up your development PC for Xbox title development
ms.author: aaronste
ms.topic: article
edited: 10/08/2019
ms.date: '08/01/2022'
permissioned-type: public
---

# Development PC hardware and operating system requirements for developing Xbox and Windows titles

Verify that your development PC meets the requirements for hardware and operating system.

## Hardware requirements  

### Hardware requirements for developing Xbox and Windows titles  

Use a fast, modern development computer running a supported version of Windows. The Microsoft Game Development Kit (GDK) requires 30 GB of free space to install successfully.  

Developing Xbox titles requires extra hardware.


### Additional hardware requirements for developing Xbox titles

We recommend that your development computer be fast, modern, and equipped with an NVMe SSD drive. In addition to an NVMe SSD drive, we recommend purchasing a heatsink for your NVMe SSD drive to offset performance degradation due to overheating.

The time it takes to launch a game or deploy it to your console is affected by:

* The quality of the network hardware, such as routers, switches, NIC, and cabling.
* The network's latency, traffic, and hops.

For best results, use Category 6a cables, and put your development computer and development console on the same Ethernet switch.

With the Xbox Series X Dev Kit, the Debug NIC now supports 10‑Gigabit Ethernet (10 GbE) for [faster deployments](../../console-dev/dev-kits/concepts/deployment.md). We recommend that you configure your hardware environment with the following:

* A development computer with a 10 GbE Network Interface Adapter, NVMe SSD drive, and NVMe heatsink.
* A network switch that's 10 GbE-capable.
* Category 6a cables, with your development computer and development consoles on the same switch that's on the same subnet.
* Network infrastructure that's 10 GbE-capable.

Additionally, the GDK supports Thunderbolt 3 for improved deployment in an upcoming release. To get ready for this, we would recommend:

* A motherboard on your development computer that has support for Thunderbolt 3.

We recommend using monitors and/or TVs that support 4K/UHD and HDR to be able to take advantage of these platform features properly.

#### 10 GbE validated hardware

As reference, we have validated our 10 GbE-capable Debug NIC with the following hardware configuration:
* Netgear XS708T 8-port Switch
* AQuantia Aqtion AQN-107 PCIe to 10GBase-T Multi-Gig Pro Ethernet Adapter
* Intel Ethernet Converged Network Adapter X540-T1
* Samsung SSD 970 EVO NVMe M.2 1TB
* Category 6a Ethernet cables

## Software requirements

> [!IMPORTANT]
> GDK Visual Studio extension (VSIX) components aren't supported on ARM-based devices. To use GDK Visual Studio project templates, property pages, and debugging extensions, install the GDK on an x64-based development PC.

### Software requirements for developing Xbox titles

To build GDK titles for the Xbox family of consoles, use the following versions and supported editions of Windows:
  
* Windows 10 (64-bit): Home, Pro, or Enterprise
* Windows 11 (64-bit): Home, Pro, or Enterprise
  
> [!NOTE]
> Versions of the Microsoft Game Development Kit (GDK) prior to June 2020 supported Windows 7, 8, and 8.1 in addition to Windows 10 and Windows 11. That support is removed. Microsoft Game Development Kit (GDK) setup blocks if you try to install the GDK on an unsupported OS.

The following operating system versions and editions are supported for build servers:  

* Windows Server 2019 (Version 1809 or later): Standard and Datacenter  

### Software requirements for developing Windows titles

The following operating systems support the Gaming Runtime Development Kit that you install on your development computer:

* Windows 10 (May 2019 Update or later) client operating system (64-bit)
* Windows 11 (64-bit) 

Review the following list for additional restrictions and suggestions:

* You can't install the Gaming Runtime Development Kit on a 32-bit version of Windows. 
* Update your Windows development computer to the latest graphics drivers available and check for updates often to help ensure that your remote tools run optimally.

If your title uses MicrosoftGame.config to install framework dependencies, you need to sideload these dependencies onto devices configured to use the developer sandbox. For more information, see [Framework package dependencies](../../../features/common/packaging/packaging-framework-packages.md).

> [!NOTE]
> Only install the exact versions that are specified in MicrosoftGame.config. Installing versions you don't specify can mask errors during development or cause unexpected problems after publishing to retail.

If you plan to install and run PC games that are packaged by using MSIXVC and/or use Gaming Runtime APIs, the device on which you plan to test your games (which can be your development PC or a remote PC device) must have the following installed:

* Windows 10 (May 2019 Update or later) client OS (64-bit)  
* Gaming Services Runtime (installed automatically when you install an MSIXVC-packaged game from Microsoft Store. You can manually install the latest version from [Microsoft Store](ms-windows-store://pdp/?productid=9MWPM2CQNLHN)).  



### Microsoft Symbol Servers  

When you turn on Microsoft Symbol Servers, you get Gaming Runtime symbols.  

To turn on Microsoft Symbol Servers in Visual Studio, go to **Debug** > **Options** > **Symbols** and select the **Microsoft Symbol Servers** checkbox.    

![Turning on Microsoft Symbol Servers](../../../../media/public-images/microsoft_symbol_servers.png)  

For more information, see [Microsoft public symbol server](/windows-hardware/drivers/debugger/microsoft-public-symbols).  

## Next steps

After you verify your development PC meets the hardware and operating system requirements, proceed to [SDK and tools requirements](sdk-and-tools.md).

## See also

[Getting started with the Microsoft Game Development Kit](../get-started-home.md)