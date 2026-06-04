---
title: "Quality of service (QoS) packet tagging on Xbox consoles"
description: "Describes how QoS packet tagging functions on Xbox consoles and how this impacts network compatibility."
kindex: qos tagging
author: fschober
ms.author: jkepner
ms.topic: article
ms.localizationpriority: low
edited: 05/02/2022
ms.date: '08/01/2022'
permissioned-type: public
---

# Quality of service (QoS) packet tagging on Xbox consoles

Xbox consoles allow users to enable QoS packet tagging for outbound network traffic over the preferred UDP multiplayer port. The goal of the packet tagging feature is to help reduce the impact that network congestion can have on latency sensitive traffic that has been tagged when connected to a network environment that supports prioritization of tagged network traffic.

This feature can be found on Xbox consoles under *Settings, General, Network settings, Advanced settings, QoS Tagging* and two options are available:

- *Wireless multimedia (WMM) tagging*  
When WMM tagging is enabled, Xbox consoles that are connected to the network via Wi-Fi will set QoS tags on outbound packets using the preferred UDP multiplayer port and configure them with a WMM value of 6 or AC_VO. These traffic classifications are typically used for voice network traffic.

- *differentiated services code point (DSCP) tagging*  
When DSCP tagging is enabled, Xbox consoles that are connected to the network via Wi-Fi or wired interfaces will set QoS tags on outbound packets using the preferred UDP multiplayer port and will configure them with a DSCP value of 46 for both IPv4 and IPv6 packet types. These traffic classifications are typically associated with the "Expedited Forwarding" (EF) per-hop behavior (PHB) and used for voice network traffic.

Xbox consoles support enabling one or both QoS tagging behaviors.

## Microsoft Game Development Kit (GDK) title and test considerations

QoS tagging is transparent to Microsoft Game Development Kit (GDK) title logic and only applied to the perferred UDP multiplayer port. Titles using different UDP ports do not benefit from this tagging functionality. Developers are therefore encouraged to use the preferred UDP multiplayer port if possible.

While WMM and DSCP tagging leverages well know network standards, there are some network devices that can cause connection issues when one or both of these QoS tagging behaviors are enabled. Enabling packet tagging on managed networks, such as business or test networks, may result in unexpected connectivity issues for tagged traffic, depending on the managed network configuration. Developers encountering issues with QoS tagging should evaluate managed network configuration and disable QoS packet tagging if incompatible network configurations or devices cannot be addressed.


## See also

[Preferred local User Datagram Protocol (UDP) multiplayer port networking APIs](game-mesh/preferred-local-udp-multiplayer-port-networking.md)