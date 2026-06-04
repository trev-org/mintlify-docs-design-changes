---
author: M-Stahl
title: "XGameUI (API contents)"
description: "Reference material for XGameUI APIs."
kindex: XGameUI
ms.topic: article
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameUI  
  
The XboxGameUI APIs allow titles to bring up pre-defined user interface displays on the Xbox One Console. These pre-defined UI include user pickers, profile cards, and game invites among other interfaces.  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XGameUiSetNotificationPositionHint](functions/xgameuisetnotificationpositionhint.md) | Sets the preferred position for toast notifications to be shown on the current title. |  
| [XGameUiShowAchievementsAsync](functions/xgameuishowachievementsasync.md) | Displays UI presenting the requesting player's achievements for the specified title. |  
| [XGameUiShowAchievementsResult](functions/xgameuishowachievementsresult.md) | Gets the result of a call to [XGameUiShowAchievementsAsync](functions/xgameuishowachievementsasync.md). |  
| [XGameUiShowErrorDialogAsync](functions/xgameuishowerrordialogasync.md) | Displays UI for an error dialog with a service defined error string for the specified error code. |  
| [XGameUiShowErrorDialogResult](functions/xgameuishowerrordialogresult.md) | Gets the result of a call to [XGameUiShowErrorDialogAsync](functions/xgameuishowerrordialogasync.md). |  
| [XGameUiShowMessageDialogAsync](functions/xgameuishowmessagedialogasync.md) | Displays UI for a customizable message dialog. |  
| [XGameUiShowMessageDialogResult](functions/xgameuishowmessagedialogresult.md) | Gets the result of a call to [XGameUiShowMessageDialogAsync](functions/xgameuishowmessagedialogasync.md). |  
| [XGameUiShowMultiplayerActivityGameInviteAsync](functions/xgameuishowmultiplayeractivitygameinviteasync.md) | TBD |  
| [XGameUiShowMultiplayerActivityGameInviteResult](functions/xgameuishowmultiplayeractivitygameinviteresult.md) | TBD |  
| [XGameUiShowPlayerPickerAsync](functions/xgameuishowplayerpickerasync.md) | Displays a picker UI that allows a person playing the game to select players from a presented list of people. |  
| [XGameUiShowPlayerPickerResult](functions/xgameuishowplayerpickerresult.md) | Gets the results from a [XGameUiShowPlayerPickerAsync](functions/xgameuishowplayerpickerasync.md) call. |  
| [XGameUiShowPlayerPickerResultCount](functions/xgameuishowplayerpickerresultcount.md) | Gets the count of results from a [XGameUiShowPlayerPickerAsync](functions/xgameuishowplayerpickerasync.md) call. |  
| [XGameUiShowPlayerProfileCardAsync](functions/xgameuishowplayerprofilecardasync.md) | Displays UI for the profile card of the specified player. |  
| [XGameUiShowPlayerProfileCardResult](functions/xgameuishowplayerprofilecardresult.md) | Gets the result of a call to [XGameUiShowPlayerProfileCardAsync](functions/xgameuishowplayerprofilecardasync.md). |  
| [XGameUiShowSendGameInviteAsync](functions/xgameuishowsendgameinviteasync.md) | Shows a picker UI populated from the selected player's friend list and suggested friend list. |  
| [XGameUiShowSendGameInviteResult](functions/xgameuishowsendgameinviteresult.md) | Gets the result of a call to [XGameUIShowSendGameInviteAsync](functions/xgameuishowsendgameinviteasync.md). |  
| [XGameUiShowStateShareAsync](functions/xgameuishowstateshareasync.md) | Displays UI for sharing a state with other players |  
| [XGameUiShowStateShareResult](functions/xgameuishowstateshareresult.md) | Gets the result of a call to [XGameUIShowStateShareAsync](functions/xgameuishowstateshareasync.md) |  
| [XGameUiShowTextEntryAsync](functions/xgameuishowtextentryasync.md) | Displays a text entry UI for a user to enter information. |  
| [XGameUiShowTextEntryResult](functions/xgameuishowtextentryresult.md) | Gets the results from a [XGameUiShowTextEntryAsync](functions/xgameuishowtextentryasync.md) call. |  
| [XGameUiShowTextEntryResultSize](functions/xgameuishowtextentryresultsize.md) | Gets the size of the return buffer from a [XGameUiShowTextEntryAsync](functions/xgameuishowtextentryasync.md) call. |  
| [XGameUiShowWebAuthenticationAsync](functions/xgameuishowwebauthenticationasync.md) | Displays a web UI that allows the user to delegate access to external web sites and services without directly providing their credentials to the running title. |  
| [XGameUiShowWebAuthenticationResult](functions/xgameuishowwebauthenticationresult.md) | Gets the results from a [XGameUiShowWebAuthenticationAsync](functions/xgameuishowwebauthenticationasync.md) call. |  
| [XGameUiShowWebAuthenticationResultSize](functions/xgameuishowwebauthenticationresultsize.md) | Retrieves the size of the buffer needed to contain the results of an authentication request. |  
| [XGameUiShowWebAuthenticationWithOptionsAsync](functions/xgameuishowwebauthenticationwithoptionsasync.md) | Displays a web UI, with the option of showing it fulll screen, that allows the user to delegate access to external web sites and services without directly providing their credentials to the running title. |  
| [XGameUiTextEntryClose](functions/xgameuitextentryclose.md) | Closes the virtual keyboard and frees up the corresponding resources. |  
| [XGameUiTextEntryGetExtents](functions/xgameuitextentrygetextents.md) | Gets the screen extents of the virtual keyboard. |  
| [XGameUiTextEntryGetState](functions/xgameuitextentrygetstate.md) | Gets the current state of the open virtual keyboard. |  
| [XGameUiTextEntryOpen](functions/xgameuitextentryopen.md) | Opens up a virtual keyboard where the title is responsible for rendering the text. |  
| [XGameUiTextEntryUpdatePositionHint](functions/xgameuitextentryupdatepositionhint.md) | Updates the preferred positionining of the virtual keyboard. |  
| [XGameUiTextEntryUpdateVisibility](functions/xgameuitextentryupdatevisibility.md) | Updates whether to show the full virtual keyboard or only the candidate list. |  
| [XGameUISetUICallbacks](functions/xgameuisetuicallbacks.md) | Sets the UI callbacks defined by the developer.|
| [XGameUISetMessageDialogUIResponse](functions/xgameuisetmessagedialoguiresponse.md) | Sets the result XGameUiMessageDialogButton value to be returned by XGameUiShowMessageDialogResult. |
| [XGameUISetPlayerPickerUIResponse](functions/xgameuisetplayerpickeruiresponse.md) | Sets the results to be returned by XGameUiShowPlayerPickerResultCount and XGameUiShowPlayerPickerResult. |
| [XGameUISetTextEntryUIResponse](functions/xgameuisettextentryuiresponse.md) | Sets the resulting text length and text to be returned by XGameUiShowTextEntryAsync. |
| [XGameUISetPlayerProfileCardUIResponse](functions/xgameuisetplayerprofilecarduiresponse.md) | Completes the call to XGameUiShowPlayerProfileCardAsync. |
| [XGameUISetSendGameInviteUIResponse](functions/xgameuisetsendgameinviteuiresponse.md) | Completes the call to XGameUiShowSendGameInviteAsync. |
| [XGameUISetAchievementsUIResponse](functions/xgameuisetachievementsuiresponse.md) | Completes the call to XGameUiShowAchievementsAsync. |
| [XGameUISetMultiplayerActivityGameInviteUIResponse](functions/xgameuisetmultiplayeractivitygameinviteuiresponse.md) | Completes the call to XGameUiShowMultiplayerActivityGameInviteAsync. |
| [XGameUISetErrorDialogUIResponse](functions/xgameuiseterrordialoguiresponse.md) | Completes the call to XGameUiShowErrorDialogAsync. |
| [XGameUIShowPlayerProfileCardUICallback](functions/xgameuishowplayerprofilecarduicallback.md) | Signature for a XGameUiShowPlayerProfileCardAsync callback. |
| [XGameUIShowPlayerPickerUICallback](functions/xgameuishowplayerpickeruicallback.md) | Signature for a XGameUiShowPlayerPickerAsync callback. |
| [XGameUIShowSendGameInviteUICallback](functions/xgameuishowsendgameinviteuicallback.md) | Signature for a XGameUiShowSendGameInviteAsync callback. |
| [XGameUIShowAchievementsUICallback](functions/xgameuishowachievementsuicallback.md) | Signature for a XGameUiShowAchievementsAsync callback. |
| [XGameUIShowMultiplayerActivityGameInviteUICallback](functions/xgameuishowmultiplayeractivitygameinviteuicallback.md) | Signature for a XGameUiShowMultiplayerActivityGameInviteAsync callback. |
| [XGameUIShowMessageDialogUICallback](functions/xgameuishowmessagedialoguicallback.md) | Signature for a XGameUiShowMessageDialogAsync callback. |
| [XGameUIShowErrorDialogUICallback](functions/xgameuishowerrordialoguicallback.md) | Signature for a XGameUiShowErrorDialogAsync callback. |
| [XGameUIShowTextEntryUICallback](functions/xgameuishowtextentryuicallback.md) | Signature for a XGameUiShowTextEntryAsync callback. |
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [XGameUiWebAuthenticationResultData](structs/xgameuiwebauthenticationresultdata.md) | Contains the response from a web authentication request. |  
| [XGameUiTextEntryExtents](structs/xgameuitextentryextents.md) | Describes the relative positioning of the virtual keyboard. |  
| [XGameUiTextEntryOptions](structs/xgameuitextentryoptions.md) | Initial set of options for the virtual keyboard used by XGameUiTextEntryOpen. |  
| [XGameUICallbackHandle](structs/xgameuicallbackhandle.md) | Handle associated with an XGameUi callback invocation. Used in calls to Set*Response APIs. |
| [XGameUIPlayerPickerInfo](structs/xgameuiplayerpickerinfo.md) | Struct encapsulating user information to be used by the developer’s custom player picker UI. |
| [XGameUIUICallbacks](structs/xgameuiuicallbacks.md) |  Struct containing pointers to dev-defined UI callbacks.|

## Enumerations  
  
| Enumeration | Description |  
| --- | --- |  
| [XGameUiMessageDialogButton](enums/xgameuimessagedialogbutton.md) | Enumerates buttons in a customizable message dialog box. |  
| [XGameUiNotificationPositionHint](enums/xgameuinotificationpositionhint.md) | Describes the preferred position for toast notifications to be shown on the current title. |  
| [XGameUiTextEntryChangeTypeFlags](enums/xgameuitextentrychangetypeflags.md) | Flags indicating what has changed since the last call to XGameUiTextEntryGetState. |  
| [XGameUiTextEntryInputScope](enums/xgameuitextentryinputscope.md) | Enumerates types of information expected in text entry. |  
| [XGameUiTextEntryPositionHint](enums/xgameuitextentrypositionhint.md) | Hint for where to best position the virtual keyboard. |  
| [XGameUiTextEntryVisibilityFlags](enums/xgameuitextentryvisibilityflags.md) | Flags indicating the visibility state of the virtual keyboard. |  
| [XGameUiWebAuthenticationOptions](enums/xgameuiwebauthenticationoptions.md) | Enumerates options for presenting the web authentication flow. |  
  
## See also  

[System API reference](../gc-reference-system-toc.md)  
