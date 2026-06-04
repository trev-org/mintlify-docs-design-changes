---
author: M-Stahl
title: "Creating test discs"
description: "Describes how to create test discs."
kindex:
- Creating test discs
- compilation discs, creating test
- test compilation discs, creating
- multi-discs, creating test
- test multi-discs, creating
ms.topic: article
edited: '09/26/2023'
ms.date: '08/01/2022'
permissioned-type: public
---

# Creating test discs

> [!NOTE]
> These instructions are only for testing purposes. For retail scenarios, this data is autoconfigured according to the metadata in Partner Center. The options selected in the flow for creating compilation discs are used to control the installation order, autoplay, and more. You don't submit the test metadata or JSON config files to us directly when you submit your games for ingestion.


This topic explains how to create test discs. You can create the following types of test discs.
   
   *  [Compilations](#ID4E1)  
   *  [Multi-discs](#ID4EBE)  

 
<a id="ID4E1"></a>

   

## Compilations  
   

### Create a test compilation disc  
   
  
To create and test a compilation disc, you need to create a catalog.js metadata file and a disc layout described as follows.  
   
   *  [Create a disc layout](#ID4EGB)  
   *  [Catalog.js](#ID4EMC)  
   *  [Installation ordering and notifications](#ID4ELD)  
   *  [Deploying](#ID4EYD)  

 
<a id="ID4EGB"></a>

   

### Create a disc layout  
   
  
Create a disc layout that looks like the following example.
   
```
- Disc Root
    - Licenses (folder) - (Not needed for Xbox One ERA Development Kits - make sure to use XVCs created with /LT flag)
        License0.xml (file) - (Not needed for Xbox One ERA dev kits - make sure to use XVCs created with /LT flag)
    - MSXC (folder)
        - Package1.xvc (file)
        - Package2.xvc (file)
        - Metadata (folder)
            - catalog.js (file)
            - Bundle (folder)
                - Bundle images (files)
            - Package1.xvc (folder)
                - Package 1 images (files)
            - Package2.xvc (folder)
                - Package 2 images (files)  
```
   
  
Where the directories have the following content:  
   

   *  **Licenses** contains the license files for the games. This information isn't needed for Xbox One ERA dev kits. Make sure to use XVCs that are created with the **/LT** flag. Afterward, these can be omitted.  

   *  **MSXC** contains the packaged games and the metadata that are used by the Xbox shell.  

   *  **Metadata** contains the metadata that the shell uses for games on the disc and for game packages.  

   *  **Bundle** contains images that are used by the shell.  

   *  **Package1.XVC** contains images that are used by the shell for the first game. The name must match that of the game package file in MSXC.  

   *  **Package2.XVC** contains images that are used by the shell for the second game. The name must match that of the game package file in MSXC.  

  
<a id="ID4EMC"></a>

   

### Catalog.js  
   
  
In the Metadata folder, create a file called catalog.js. Edit this file to reflect the names of your packages and images in the other folders. This file must be UTF-16 LE encoded. We recommend using a JSON validator on the web. To ensure that the JSON is valid, copy it into a text editor and then save the file in UTF-16 LE format.  
 
<a id="ID4ESC"></a>

   

##### Example of a catalog.js file for a multi-game scenario with comments  
   
```js
{
  "version": "4.1",                                        // Don't adjust this value.
  "bundle": {
    "oneStoreProductId": "9P436MXJ71GV",                   // Replace with your bundle product id.
    "titles": [
      {
        "locale": "default",
        "title": "Bundle Title"                            // Replace with bundle title.
      }
    ],
    "images": [
      {
        "size": "100x100",                                 // Don't change the size values.
        "image": "100x100_1.png"                           // Must match the image file names in MSXC\Metadata\Bundle\
      },
      {
        "size": "208x208",
        "image": "208x208_1.png"
      },
      {
        "size": "480x480",
        "image": "480x480_1.png"
      }
    ]
  },
  "packages": [                                             // This is an array of packages.
    {
      "packageName": "Package1.xvc",                        // Match your package name in MSXC\<package name> and MSXC\Metdata\<package name>
      "oneStoreProductId": "BX38WRFV50MJ",                  // Product id for package 1.
      "contentId": "2b05043b-4043-4ba0-80ed-fd4811c4b333",  // Content id for package 1.  Must match the content id of the package file.
      "franchiseGameHubId": "47445142-3636-3036-C048-464D4E574000", // Optional; Replace with the FranchiseGameHubId. This marks the package as a game hub
      "titleId": "037C3A1D",                                // Title id for package 1.
      "titles": [
        {
          "locale": "default",
          "title": "Killer Instinct"                        // Package 1 title.
        }
      ],
      "images": [
        {
          "size": "100x100",
          "image": "100x100_1.png"                          // Match file names in MSXC\Metadata\<Package1>\
        },
        {
          "size": "208x208",
          "image": "208x208_1.png"
        },
        {
          "size": "480x480",
          "image": "480x480_1.png"
        }
      ],
      "ratings": [
        {
          "system": "OFLC",
          "value": "M"
        },
        {
          "system": "DJCTQ",
          "value": "14"
        },
        {
          "system": "PCBP",
          "value": "Unrated"
        },
        {
          "system": "USK",
          "value": "16"
        },
        {
          "system": "ESRB",
          "value": "T"
        },
        {
          "system": "CERO",
          "value": "Unrated"
        },
        {
          "system": "CSRR",
          "value": "Unrated"
        },
        {
          "system": "COB",
          "value": "M"
        },
        {
          "system": "GRB",
          "value": "Unrated"
        },
        {
          "system": "PEGI",
          "value": "16"
        },
        {
          "system": "PEGIPortugal",
          "value": "Unrated"
        }
      ],
      "type": "Game"
  },
  {
    "packageName": "Package2.xvc",
    "oneStoreProductId": "BVC818MXZ6KG",
    "contentId": "4a6cb1d0-5ad3-47b7-9583-7480098b4a26",
    "associatedFranchiseGameHubId": "47445142-3636-3036-C048-464D4E574000", // Replace with the FranchiseGameHubId of the corresponding franchise game hub that this package is launched with. Optional;
    "titleId": "669E1864",
    "titles": [
      {
        "locale": "default",
        "title": "LocoCycle"
      }
    ],
    "images": [
      {
        "size": "100x100",
        "image": "100x100_1.png"
      },
      {
        "size": "208x208",
        "image": "208x208_1.png"
      },
      {
        "size": "480x480",
        "image": "480x480_1.png"
      }
    ],
    "ratings": [
      {
        "system": "OFLC",
        "value": "PG"
      },
      {
        "system": "DJCTQ",
        "value": "10"
      },
      {
        "system": "USK",
        "value": "12"
      },
      {
        "system": "ESRB",
        "value": "T"
      },
      {
        "system": "PEGI",
        "value": "12"
      },
      {
        "system": "COB",
        "value": "PG"
      }
    ],
    "type": "Game"
    }
  ]
}  
```
  
<a id="ID4EAD"></a>

   

##### Example of catalog.js for a game and downloadable content (DLC) scenario  
   
```js
{
  "version": "4.0",                                        // Don't adjust this value.
  "bundle": {
    "oneStoreProductId": "9P436MXJ71GV",                   // Replace with bundle product id.
    "launchPackage": "Package3.xvc",                       // Should be the package name of the game package.  This is the package that is launched when the game disc is inserted.
    "titles": [
      {
        "locale": "default",                                        
        "title": "Game + DLC Bundle Title"                 // Replace with bundle name.
      }
    ],
    "images": [
      {
        "size": "100x100",
        "image": "100x100_1.png"                           // Must match the image file names in MSXC\Metadata\Bundle\
      },
      {
        "size": "208x208",
        "image": "208x208_1.png"
      },
      {
        "size": "480x480",
        "image": "480x480_1.png"
      }
    ]
  },
  "packages": [
    {
      "packageName": "Package1.xvc",                       // Match folder name in MSXC\Metadata\<folder name>
      "oneStoreProductId": "BX38WRFV50MJ",                 // Replace with DLC 1 product id.
      "contentId": "ace6ef3b-0c5b-4f17-a651-390e75169d5c", // Replace with DLC 1 content id. This must match the content id of the package file.
      "allowedOneStoreProductIds": [
        "BVC818MXZ6KG"                                     // Should match the product id of the game that will load this DLC.
      ],
      "titles": [
        {
          "locale": "default",
          "title": "DLC Title 1"
        }
      ],
      "images": [
        {
          "size": "100x100",
          "image": "100x100_1.png"                         // Match file names in MSXC\Metadata\Package1.xvc\
        },
        {
          "size": "208x208",
          "image": "208x208_1.png"
        },
        {
          "size": "480x480",
          "image": "480x480_1.png"
        }
      ],
      "ratings": [
        {
          "system": "ESRB",
          "value": "E"
        }
      ],
      "type": "Durable"                                    // Indicates that this is a DLC package.
    },
    {
      "packageName": "Package2.xvc",
      "oneStoreProductId": "9P436MXJ71GV",
      "contentId": "b0f77189-d74c-4005-b351-955d380cb875",
      "allowedOneStoreProductIds": [
        "BVC818MXZ6KG"
      ],
      "titles": [
        {
          "locale": "en-US",
          "title": "DLC Title 2"
        }
      ],
      "images": [
        {
          "size": "100x100",
          "image": "100x100_1.png"
        },
        {
          "size": "208x208",
          "image": "208x208_1.png"
        },
        {
          "size": "480x480",
          "image": "480x480_1.png"
        }
      ],
      "ratings": [
        {
          "system": "ESRB",
          "value": "E"
        }
      ],
      "type": "Durable"
    },
    {
      "packageName": "Package3.xvc",
      "oneStoreProductId": "BVC818MXZ6KG",
      "contentId": "5519355c-bff9-40b4-92bb-b5473fd9c577",
      "titleId": "35c8f637",
      "titles": [
        {
          "locale": "default",
          "title": "Game Title"
        }
      ],
      "images": [
        {
          "size": "100x100",
          "image": "100x100_1.png"
        },
        {
          "size": "208x208",
          "image": "208x208_1.png"
        },
        {
          "size": "480x480",
          "image": "480x480_1.png"
        }
      ],
      "ratings": [
        {
          "system": "ESRB",
          "value": "E"
        }
      ],
      "type": "Game"                                       // Indicates main game package.
    }
  ]
}  
```
   
<a id="ID4ELD"></a>

   

### Installation ordering and notifications  
   
  
DLC installation notifications are usually triggered when a DLC package completes an installation. For certain types of game discs, there are cases when this isn't desired, because it would create a large number of notifications in a very short time. For example, a Game of the Year edition might include a large number of small DLC packages on the disc. To handle this situation, notifications for DLC are triggered only when the game they apply to is already installed.  
   
  
For games with a large number of small DLC packages, we recommend that the packages on the disc be ordered such that the DLC is installed before the game. This ensures that the user isn't inundated with notifications when the DLC packages are installed.  
   
  
For games with a small number of large DLC packages, we recommend that the DLC be installed after the main game to ensure that a user isn't blocked from playing the game until all the DLC packages are installed.  
   
  
To control the order in which the DLC and game are installed, simply adjust their order in the _Packages_ JSON array in catalog.js. This array is what controls the default order of installation.  
  
<a id="ID4EYD"></a>

   

### Deploying  
   
  
To deploy the compilation disc, burn the directory structure to a disc. When you insert the disc into a dev kit, it starts just as a release version would on a retail console.  
    
<a id="ID4EBE"></a>

   

## Multi-discs  
   
  
To create test multi-discs, split your existing XVC into two files.   
   
> [!NOTE]
> XVCs can be split only on individual chunk boundaries, as defined in your Layout.xml file. XVCs that have extremely large chunks (larger than 45 GB) might be impossible to publish by using the multi-disc facility. In general, it's best to keep your title's chunks smaller than 45 GB.   
   
  
To split an XVC across two discs, create a DiscLayout.xml file similar to the following.   
   
```xml
<Packages>
  <Package Name="MultiDisc" Description="Package published on 2 discs" MaxDiscs="2">
  </Package>
</Packages>  
```
   
  
Next, invoke SplitPkg to produce the individual files that will be burned to disc. This will produce two files with your original XVC file name suffixed with ".MultiDisc.1" and ".MultiDisc.2".
   
```
SplitPkg /f DiscLayout.xml /p sourceXVC /s Multidisc /pd outputDir  
```
   
  
To simulate installation from multiple discs, use `xbapp install` for disc 1 and `xbapp install` for disc 2. After the content on disc 1 is installed, the console will prompt you to insert disc 2.   
 
<a id="ID4ENF"></a>

   

### Catalog.js  
   
  
To burn these test discs, create a Catalog.js file with the new **discNumber**, **discCount**, and **discSetId** fields. Note that *every* disc needs all this metadata. The only difference in the Catalog.js files on each disc is the value of the **discNumber** field. For example, disc 1 should have a value of 1, and disc 2 should have a value of 2. Zero (0) is a reserved value and shouldn't be used.   
 
<a id="ID4E5F"></a>

   

#### Example of Catalog.js for multi-discs  
   
```json
{
  "version": "4.0",                                         // Don't adjust this value.
  "discNumber": 1,                                          // 1 for disc 1, 2 for disc 2.
  "discCount": 2,                                           // Same on all discs.
  "discSetId": "00000001",                                  // For test purposes, this can be 00000001. On retail discs, this value is unique for each published disc set. 
                                                            // Don't mix installations of test discs from different sets if they share this value. Cancel your installation before starting a new one.
  "packages": [                                             // This is an array of packages.
    {
      "packageName": "Package1.xvc",                        // Match your package name in MSXC\package-name and MSXC\Metdata\package-name
      "oneStoreProductId": "BX38WRFV50MJ",                  // Product id for package 1.
      "contentId": "2b05043b-4043-4ba0-80ed-fd4811c4b333",  // Content id for package 1. Must match the content id of the package file.
      "titleId": "037C3A1D",                                // Title id for package 1.
      "titles": [
      {
        "locale": "default",
        "title": "Killer Instinct"                          // Package 1 title.
      }
    ],
    "images": [
      {
        "size": "100x100",
        "image": "100x100_1.png"                            // Match file names in MSXC\Metadata\Package1\
      },
      {
        "size": "208x208",
        "image": "208x208_1.png"
      },
      {
        "size": "480x480",
        "image": "480x480_1.png"
      }
    ],
    "ratings": [
      {
        "system": "OFLC",
        "value": "M"
      },
      {
        "system": "DJCTQ",
        "value": "14"
      },
      {
        "system": "PCBP",
        "value": "Unrated"
      },
      {
        "system": "USK",
        "value": "16"
      },
      {
        "system": "ESRB",
        "value": "T"
      },
      {
        "system": "CERO",
        "value": "Unrated"
      },
      {
        "system": "CSRR",
        "value": "Unrated"
      },
      {
        "system": "COB",
        "value": "M"
      },
      {
        "system": "GRB",
        "value": "Unrated"
      },
        {
        "system": "PEGI",
        "value": "16"
      },
      {
        "system": "PEGIPortugal",
        "value": "Unrated"
      }
    ],
      "type": "Game"
    }
  ]
}  
```


## See also

* [Creating cross-generation test discs](creating-cross-gen-test-discs.md)  
* [Creating discs](creating-discs.md)
* [Multi-disc functionality](packaging-multi-disc.md)  
* [Franchise Game Hubs](../../../store/franchise-game-hubs.md)  
