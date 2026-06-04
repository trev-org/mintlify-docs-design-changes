---
title: "Referencing Xbox Game Streaming Servers in Xbox services Security Token (XSTS) Claims"
description: "Describes how to reference xCloud servers in XSTS claims."
author: vrastogi
ms.author: vrastogi
ms.topic: article
edited: 00/00/0000
kindex:
- Referencing xCloud Servers in XSTS Claims
- Xbox services, Referencing Xbox game Streaming Servers in Xbox services Security Token Claims
- Xbox services, Referencing Xbox game Streaming Servers in Xbox services Security Token (XSTS) Claims
- Xbox services, XSTS
- Xbox services, xCloud Servers in XSTS Claims
ms.date: '08/01/2022'
permissioned-type: public
---

#  Referencing Xbox Game Streaming Servers in Xbox services Security Token (XSTS) Claims

In certain scenarios, your game may need to specifically reference and identify which users are coming from Xbox Game Streaming servers.

To do this, the following steps should be taken in Partner Center: 

1. Within Partner Center, navigate to the applicable Relying Party and select the appropriate claim found in [Xbox services security token claims (microsoft.com) (NDA topic)](../../../services/fundamentals/s2s-auth-calls/service-authentication/security-tokens/live-token-claims.md). To understand which claim to use and what value is expected, look for the term "Xbox Game Streaming server" in the linked claims documentation.
2. Update Claim schema to include the appropriate variable referencing Xbox Game Streaming.
3. Return to the main 'Relying Parties' menu and click 'Publish'.

> [!NOTE]
> Adjustments to an existing relying party will require a device and title restart (to clear the console cache) in order to get newly minted XSTS tokens (or wait for a period of about 4 hours for the previous one to expire).