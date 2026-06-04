---
author: AlexYatskov
description: Enumeration of supported button labels.
edited: 03/03/2025
kindex: GameInputLabel
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputLabel
---

# GameInputLabel

Enumeration of supported button labels.

## Syntax

```cpp
enum GameInputLabel
{
    GameInputLabelUnknown                  = -1,
    GameInputLabelNone                     =  0,
    GameInputLabelXboxGuide                =  1,
    GameInputLabelXboxBack                 =  2,
    GameInputLabelXboxStart                =  3,
    GameInputLabelXboxMenu                 =  4,
    GameInputLabelXboxView                 =  5,
    GameInputLabelXboxA                    =  7,
    GameInputLabelXboxB                    =  8,
    GameInputLabelXboxX                    =  9,
    GameInputLabelXboxY                    =  10,
    GameInputLabelXboxDPadUp               =  11,
    GameInputLabelXboxDPadDown             =  12,
    GameInputLabelXboxDPadLeft             =  13,
    GameInputLabelXboxDPadRight            =  14,
    GameInputLabelXboxLeftShoulder         =  15,
    GameInputLabelXboxLeftTrigger          =  16,
    GameInputLabelXboxLeftStickButton      =  17,
    GameInputLabelXboxRightShoulder        =  18,
    GameInputLabelXboxRightTrigger         =  19,
    GameInputLabelXboxRightStickButton     =  20,
    GameInputLabelXboxPaddle1              =  21,
    GameInputLabelXboxPaddle2              =  22,
    GameInputLabelXboxPaddle3              =  23,
    GameInputLabelXboxPaddle4              =  24,
    GameInputLabelLetterA                  =  25,
    GameInputLabelLetterB                  =  26,
    GameInputLabelLetterC                  =  27,
    GameInputLabelLetterD                  =  28,
    GameInputLabelLetterE                  =  29,
    GameInputLabelLetterF                  =  30,
    GameInputLabelLetterG                  =  31,
    GameInputLabelLetterH                  =  32,
    GameInputLabelLetterI                  =  33,
    GameInputLabelLetterJ                  =  34,
    GameInputLabelLetterK                  =  35,
    GameInputLabelLetterL                  =  36,
    GameInputLabelLetterM                  =  37,
    GameInputLabelLetterN                  =  38,
    GameInputLabelLetterO                  =  39,
    GameInputLabelLetterP                  =  40,
    GameInputLabelLetterQ                  =  41,
    GameInputLabelLetterR                  =  42,
    GameInputLabelLetterS                  =  43,
    GameInputLabelLetterT                  =  44,
    GameInputLabelLetterU                  =  45,
    GameInputLabelLetterV                  =  46,
    GameInputLabelLetterW                  =  47,
    GameInputLabelLetterX                  =  48,
    GameInputLabelLetterY                  =  49,
    GameInputLabelLetterZ                  =  50,
    GameInputLabelNumber0                  =  51,
    GameInputLabelNumber1                  =  52,
    GameInputLabelNumber2                  =  53,
    GameInputLabelNumber3                  =  54,
    GameInputLabelNumber4                  =  55,
    GameInputLabelNumber5                  =  56,
    GameInputLabelNumber6                  =  57,
    GameInputLabelNumber7                  =  58,
    GameInputLabelNumber8                  =  59,
    GameInputLabelNumber9                  =  60,
    GameInputLabelArrowUp                  =  61,
    GameInputLabelArrowUpRight             =  62,
    GameInputLabelArrowRight               =  63,
    GameInputLabelArrowDownRight           =  64,
    GameInputLabelArrowDown                =  65,
    GameInputLabelArrowDownLLeft           =  66,
    GameInputLabelArrowLeft                =  67,
    GameInputLabelArrowUpLeft              =  68,
    GameInputLabelArrowUpDown              =  69,
    GameInputLabelArrowLeftRight           =  70,
    GameInputLabelArrowUpDownLeftRight     =  71,
    GameInputLabelArrowClockwise           =  72,
    GameInputLabelArrowCounterClockwise    =  73,
    GameInputLabelArrowReturn              =  74,
    GameInputLabelIconBranding             =  75,
    GameInputLabelIconHome                 =  76,
    GameInputLabelIconMenu                 =  77,
    GameInputLabelIconCross                =  78,
    GameInputLabelIconCircle               =  79,
    GameInputLabelIconSquare               =  80,
    GameInputLabelIconTriangle             =  81,
    GameInputLabelIconStar                 =  82,
    GameInputLabelIconDPadUp               =  83,
    GameInputLabelIconDPadDown             =  84,
    GameInputLabelIconDPadLeft             =  85,
    GameInputLabelIconDPadRight            =  86,
    GameInputLabelIconDialClockwise        =  87,
    GameInputLabelIconDialCounterClockwise =  88,
    GameInputLabelIconSliderLeftRight      =  89,
    GameInputLabelIconSliderUpDown         =  90,
    GameInputLabelIconWheelUpDown          =  91,
    GameInputLabelIconPlus                 =  92,
    GameInputLabelIconMinus                =  93,
    GameInputLabelIconSuspension           =  94,
    GameInputLabelHome                     =  95,
    GameInputLabelGuide                    =  96,
    GameInputLabelMode                     =  97,
    GameInputLabelSelect                   =  98,
    GameInputLabelMenu                     =  99,
    GameInputLabelView                     =  100,
    GameInputLabelBack                     =  101,
    GameInputLabelStart                    =  102,
    GameInputLabelOptions                  =  103,
    GameInputLabelShare                    =  104,
    GameInputLabelUp                       =  105,
    GameInputLabelDown                     =  106,
    GameInputLabelLeft                     =  107,
    GameInputLabelRight                    =  108,
    GameInputLabelLB                       =  109,
    GameInputLabelLT                       =  110,
    GameInputLabelLSB                      =  111,
    GameInputLabelL1                       =  112,
    GameInputLabelL2                       =  113,
    GameInputLabelL3                       =  114,
    GameInputLabelRB                       =  115,
    GameInputLabelRT                       =  116,
    GameInputLabelRSB                      =  117,
    GameInputLabelR1                       =  118,
    GameInputLabelR2                       =  119,
    GameInputLabelR3                       =  120,
    GameInputLabelPaddleLeft1              =  121,
    GameInputLabelPaddleLeft2              =  122,
    GameInputLabelPaddleRight1             =  123,
    GameInputLabelPaddleRight2             =  124,
};
```

## Constants

| Constant                               | Description                                      |
| ---                                    | ---                                              |
| GameInputLabelUnknown                  | Indicates that the label is unknown.             |
| GameInputLabelNone                     | Indicates that there is no label.                |
| GameInputLabelXboxGuide                | Indicates the Xbox guide button.                 |
| GameInputLabelXboxBack                 | Indicates the Xbox back button.                  |
| GameInputLabelXboxStart                | Indicates the Xbox start button.                 |
| GameInputLabelXboxMenu                 | Indicates the Xbox menu button.                  |
| GameInputLabelXboxView                 | Indicates the Xbox view button.                  |
| GameInputLabelXboxA                    | Indicates the Xbox A button.                     |
| GameInputLabelXboxB                    | Indicates the Xbox B button.                     |
| GameInputLabelXboxX                    | Indicates the Xbox X button.                     |
| GameInputLabelXboxY                    | Indicates the Xbox Y button.                     |
| GameInputLabelXboxDPadUp               | Indicates the Xbox D-Pad up button.              |
| GameInputLabelXboxDPadDown             | Indicates the Xbox D-Pad down button.            |
| GameInputLabelXboxDPadLeft             | Indicates the Xbox D-Pad left button.            |
| GameInputLabelXboxDPadRight            | Indicates the Xbox D-Pad right button.           |
| GameInputLabelXboxLeftShoulder         | Indicates the Xbox left shoulder button.         |
| GameInputLabelXboxLeftTrigger          | Indicates the Xbox left trigger button.          |
| GameInputLabelXboxLeftStickButton      | Indicates the Xbox left stick button.            |
| GameInputLabelXboxRightShoulder        | Indicates the Xbox right shoulder button.        |
| GameInputLabelXboxRightTrigger         | Indicates the Xbox right trigger button.         |
| GameInputLabelXboxRightStickButton     | Indicates the Xbox right stick button.           |
| GameInputLabelXboxPaddle1              | Indicates the Xbox paddle 1.                     |
| GameInputLabelXboxPaddle2              | Indicates the Xbox paddle 2.                     |
| GameInputLabelXboxPaddle3              | Indicates the Xbox paddle 3.                     |
| GameInputLabelXboxPaddle4              | Indicates the Xbox paddle 4.                     |
| GameInputLabelLetterA                  | Indicates the alpha-numeric key A.               |
| GameInputLabelLetterB                  | Indicates the alpha-numeric key B.               |
| GameInputLabelLetterC                  | Indicates the alpha-numeric key C.               |
| GameInputLabelLetterD                  | Indicates the alpha-numeric key D.               |
| GameInputLabelLetterE                  | Indicates the alpha-numeric key E.               |
| GameInputLabelLetterF                  | Indicates the alpha-numeric key F.               |
| GameInputLabelLetterG                  | Indicates the alpha-numeric key G.               |
| GameInputLabelLetterH                  | Indicates the alpha-numeric key H.               |
| GameInputLabelLetterI                  | Indicates the alpha-numeric key I.               |
| GameInputLabelLetterJ                  | Indicates the alpha-numeric key J.               |
| GameInputLabelLetterK                  | Indicates the alpha-numeric key K.               |
| GameInputLabelLetterL                  | Indicates the alpha-numeric key L.               |
| GameInputLabelLetterM                  | Indicates the alpha-numeric key M.               |
| GameInputLabelLetterN                  | Indicates the alpha-numeric key N.               |
| GameInputLabelLetterO                  | Indicates the alpha-numeric key O.               |
| GameInputLabelLetterP                  | Indicates the alpha-numeric key P.               |
| GameInputLabelLetterQ                  | Indicates the alpha-numeric key Q.               |
| GameInputLabelLetterR                  | Indicates the alpha-numeric key R.               |
| GameInputLabelLetterS                  | Indicates the alpha-numeric key S.               |
| GameInputLabelLetterT                  | Indicates the alpha-numeric key T.               |
| GameInputLabelLetterU                  | Indicates the alpha-numeric key U.               |
| GameInputLabelLetterV                  | Indicates the alpha-numeric key V.               |
| GameInputLabelLetterW                  | Indicates the alpha-numeric key W.               |
| GameInputLabelLetterX                  | Indicates the alpha-numeric key X.               |
| GameInputLabelLetterY                  | Indicates the alpha-numeric key Y.               |
| GameInputLabelLetterZ                  | Indicates the alpha-numeric key Z.               |
| GameInputLabelNumber0                  | Indicates the alpha-numeric key 0.               |
| GameInputLabelNumber1                  | Indicates the alpha-numeric key 1.               |
| GameInputLabelNumber2                  | Indicates the alpha-numeric key 2.               |
| GameInputLabelNumber3                  | Indicates the alpha-numeric key 3.               |
| GameInputLabelNumber4                  | Indicates the alpha-numeric key 4.               |
| GameInputLabelNumber5                  | Indicates the alpha-numeric key 5.               |
| GameInputLabelNumber6                  | Indicates the alpha-numeric key 6.               |
| GameInputLabelNumber7                  | Indicates the alpha-numeric key 7.               |
| GameInputLabelNumber8                  | Indicates the alpha-numeric key 8.               |
| GameInputLabelNumber9                  | Indicates the alpha-numeric key 9.               |
| GameInputLabelArrowUp                  | Indicates the Arrow Up button.                   |
| GameInputLabelArrowUpRight             | Indicates the Arrow Up Right button.             |
| GameInputLabelArrowRight               | Indicates the Arrow Right button.                |
| GameInputLabelArrowDownRight           | Indicates the Arrow Down Right button.           |
| GameInputLabelArrowDown                | Indicates the Arrow Down button.                 |
| GameInputLabelArrowDownLLeft           | Indicates the Arrow Down Left button.            |
| GameInputLabelArrowLeft                | Indicates the Arrow Left button.                 |
| GameInputLabelArrowUpLeft              | Indicates the Arrow Up Left button.              |
| GameInputLabelArrowUpDown              | Indicates the Arrow Up Down button.              |
| GameInputLabelArrowLeftRight           | Indicates the Arrow Left Right button.           |
| GameInputLabelArrowUpDownLeftRight     | Indicates the Arrow Up Down Left Right button.   |
| GameInputLabelArrowClockwise           | Indicates the Arrow Clockwise button.            |
| GameInputLabelArrowCounterClockwise    | Indicates the Arrow Counter-Clockwise button.    |
| GameInputLabelArrowReturn              | Indicates the Arrow Return button.               |
| GameInputLabelIconBranding             | Indicates the Icon Branding.                     |
| GameInputLabelIconHome                 | Indicates the Icon Home.                         |
| GameInputLabelIconMenu                 | Indicates the Icon Menu.                         |
| GameInputLabelIconCross                | Indicates the Icon Cross.                        |
| GameInputLabelIconCircle               | Indicates the Icon Circle.                       |
| GameInputLabelIconSquare               | Indicates the Icon Square.                       |
| GameInputLabelIconTriangle             | Indicates the Icon Triangle.                     |
| GameInputLabelIconStar                 | Indicates the Icon Star.                         |
| GameInputLabelIconDPadUp               | Indicates the Icon D-Pad Up.                     |
| GameInputLabelIconDPadDown             | Indicates the Icon D-Pad Down.                   |
| GameInputLabelIconDPadLeft             | Indicates the Icon D-Pad Left.                   |
| GameInputLabelIconDPadRight            | Indicates the Icon D-Pad Right.                  |
| GameInputLabelIconDialClockwise        | Indicates the Icon Dial Clockwise.               |
| GameInputLabelIconDialCounterClockwise | Indicates the Icon Dial Counter-Clockwise.       |
| GameInputLabelIconSliderLeftRight      | Indicates the Icon Slider Left Right.            |
| GameInputLabelIconSliderUpDown         | Indicates the Icon Slider Up Down.               |
| GameInputLabelIconWheelUpDown          | Indicates the Icon Wheel Up Down.                |
| GameInputLabelIconPlus                 | Indicates the Icon Plus.                         |
| GameInputLabelIconMinus                | Indicates the Icon Minus.                        |
| GameInputLabelIconSuspension           | Indicates the Icon Suspension.                   |
| GameInputLabelHome                     | Indicates the Home button.                       |
| GameInputLabelGuide                    | Indicates the Guide button.                      |
| GameInputLabelMode                     | Indicates the Mode button.                       |
| GameInputLabelSelect                   | Indicates the Select button.                     |
| GameInputLabelMenu                     | Indicates the Menu button.                       |
| GameInputLabelView                     | Indicates the View button.                       |
| GameInputLabelBack                     | Indicates the Back button.                       |
| GameInputLabelStart                    | Indicates the Start button.                      |
| GameInputLabelOptions                  | Indicates the Options button.                    |
| GameInputLabelShare                    | Indicates the Share button.                      |
| GameInputLabelUp                       | Indicates the Up button.                         |
| GameInputLabelDown                     | Indicates the Down button.                       |
| GameInputLabelLeft                     | Indicates the Left button.                       |
| GameInputLabelRight                    | Indicates the Right button.                      |
| GameInputLabelLB                       | Indicates the Left Back button.                  |
| GameInputLabelLT                       | Indicates the Left Trigger button.               |
| GameInputLabelLSB                      | Indicates the Left Stick button.                 |
| GameInputLabelL1                       | Indicates the Left button 1 (PlayStation&#174;). |
| GameInputLabelL2                       | Indicates the Left button 2 (PlayStation).       |
| GameInputLabelL3                       | Indicates the Left button 3 (PlayStation).       |
| GameInputLabelRB                       | Indicates the Right Back button.                 |
| GameInputLabelPaddleLeft1              | Indicates the first Left Paddle button.          |
| GameInputLabelPaddleLeft2              | Indicates the second Left Paddle button.         |
| GameInputLabelPaddleRight1             | Indicates the first Right Paddle button.         |
| GameInputLabelPaddleRight2             | Indicates the second Right Paddle button.        |

"PlayStation" is a registered trademark or trademark of Sony Interactive Entertainment Inc.

## Remarks

GameInputLabel accounts for multiple device types including many types of gamepads.

Member of [GameInputControllerSwitchInfo](../structs/gameinputcontrollerswitchinfo.md).

Member of [GameInputControllerInfo](../structs/gameinputcontrollerinfo.md).

Member of [GameInputArcadeStickInfo](../structs/gameinputarcadestickinfo.md).

Member of [GameInputFlightStickInfo](../structs/gameinputflightstickinfo.md).

Member of [GameInputGamePadInfo](../structs/gameinputgamepadinfo.md).

Member of [GameInputRacingWheelInfo](../structs/gameinputracingwheelinfo.md).

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)  
[GameInputArcadeStickInfo](../structs/gameinputarcadestickinfo.md)  
[GameInputFlightStickInfo](../structs/gameinputflightstickinfo.md)  
[GameInputGamePadInfo](../structs/gameinputgamepadinfo.md)  
[GameInputRacingWheelInfo](../structs/gameinputracingwheelinfo.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | **Renamed 4 constants**: `GameInputLabelP1`→`GameInputLabelPaddleLeft1`, `P2`→`PaddleLeft2`, `P3`→`PaddleRight1`, `P4`→`PaddleRight2` (values unchanged). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

The paddle label constants used the names `P1`–`P4` before they were renamed in v3. All other constants and values are unchanged.

| Old name (v0) | New name (v3+) | Value |
| --- | --- | --- |
| `GameInputLabelP1` | `GameInputLabelPaddleLeft1` | 121 |
| `GameInputLabelP2` | `GameInputLabelPaddleLeft2` | 122 |
| `GameInputLabelP3` | `GameInputLabelPaddleRight1` | 123 |
| `GameInputLabelP4` | `GameInputLabelPaddleRight2` | 124 |
