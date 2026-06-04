---
author: tyduck
title: "ILampArray (Interface contents)"
description: "Represents a lighting-enabled device."
kindex: ILampArray
ms.author: tyduck
ms.topic: article
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray  

Represents an RGB lighting-enabled device. This object provides information about the device's physical properties, such as Lamp count, dimensions, manufacturer ID, and Lamp update interval (similar to the refresh rate of a display). ILampArray also exposes methods for changing Lamp color and brightness on the device.  

## Syntax  
  
```cpp  
class ILampArray : public IUnknown  
```  
  
  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [GetBoundingBox](methods/ilamparray_getboundingbox.md) | Returns the logical 3D bounding box encompassing the ILampArray. |  
| [GetBrightnessLevel](methods/ilamparray_getbrightnesslevel.md) | Gets the overall brightness of the LampArray. |  
| [GetDeviceId](methods/ilamparray_getdeviceid.md) | Returns the system-generated ID for the ILampArray. |  
| [GetHardwareVersion](methods/ilamparray_gethardwareversion.md) | Retrieves the hardware version number for an ILampArray. |  
| [GetIndicesCountForPurposes](methods/ilamparray_getindicescountforpurposes.md) | Returns the number of Lamp indices that support the given set of LampPurposes. |  
| [GetIndicesForPurposes](methods/ilamparray_getindicesforpurposes.md) | Populates a buffer of Lamp indices that support a given set of LampPurposes. |  
| [GetIsEnabled](methods/ilamparray_getisenabled.md) | Gets the enabled state of an ILampArray for the current process. |  
| [GetLampArrayKind](methods/ilamparray_getlamparraykind.md) | Returns the type of physical device represented by the ILampArray. |  
| [GetLampCount](methods/ilamparray_getlampcount.md) | Returns the number of Lamps that are part of this ILampArray. |  
| [GetLampInfo](methods/ilamparray_getlampinfo.md) | Returns an ILampInfo for the Lamp at the given index. |  
| [GetMinUpdateIntervalInMicroseconds](methods/ilamparray_getminupdateintervalinmicroseconds.md) | Returns the minimal interval at which the device is capable of updating its Lamp state, as reported by the device. |  
| [GetProductId](methods/ilamparray_getproductid.md) | Retrieves the hardware product ID for an ILampArray. |  
| [GetVendorId](methods/ilamparray_getvendorid.md) | Retrieves the hardware vendor ID number for an ILampArray. |  
| [SetBrightnessLevel](methods/ilamparray_setbrightnesslevel.md) | Sets the overall brightness of the ILampArray. |  
| [SetColor](methods/ilamparray_setcolor.md) | Sets the color of every Lamp on the ILampArray. |  
| [SetColorsForIndices](methods/ilamparray_setcolorsforindices.md) | Sets the color for one or more Lamps. |  
| [SetColorsForScanCodes](methods/ilamparray_setcolorsforscancodes.md) | Sets the color of one or more Lamps, corresponding to keyboard scan codes. |  
| [SetIsEnabled](methods/ilamparray_setisenabled.md) | Sets the enabled state of an ILampArray for the current process. |  
| [SupportsScanCodes](methods/ilamparray_supportsscancodes.md) | Returns whether a LampArray supports targeting lamps using keyboard scan codes. |  
  

## Remarks

Applications may continue to hold references to an ILampArray instance (intentionally or unintentionally) after the underlying device has been disconnected from the system. The ILampArray instance remains valid, since the application cannot be forced to release its reference to the interface, but the underlying object enters a zombie state.  

When in a zombie state, any methods on the ILampArray interface that return static configuration information or device state information remain callable (in general, the Get* methods). However, any methods that would modify Lamp color or brightness on a connected device will be ignored. If the same physical LampArray is later reconnected to the system, the zombie device object is resurrected and all methods on the ILampArray instance become functional again.  
  
## Requirements  
  
**Header:** LampArray.h
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../features/common/lighting/gc-lighting-toc.md)  
[Lighting Basics](../../../../../features/common/lighting/lighting-basics.md)  
[LampArray](../../lamparray_members.md)  