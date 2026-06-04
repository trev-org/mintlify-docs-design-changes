---
author: M-Stahl
title: "Creating cross-generation test discs"
description: "Describes how to create test discs that work across Xbox One family consoles and Xbox Series consoles."
kindex:
- Creating test discs, Smart Delivery
- Smart Delivery discs, creating test
- test Smart Delivery discs, creating
- Creating test discs, cross gen
- Creating test discs, cross-generation
- cross-gen discs, creating test
- cross-gen discs, creating
ms.topic: article
edited: 11/24/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Cross-generation test discs overview
  
Use this topic to create cross-generation test discs so that you can test your title across Xbox One family consoles and Xbox Series consoles.

> [!NOTE]
> These instructions are only for testing purposes. For retail scenarios, this data is autoconfigured according to the metadata that's found in Partner Center. The options selected in the flow for creating compilation discs are used to control settings such as the installation order and AutoPlay. You don't submit the test metadata or JSON configuration files to Microsoft when you submit your games for ingestion.  
  
 
You can create the following types of test discs.  
  * [Smart Delivery discs](#ID5RX) 
  * [Multi-product discs](#ID4Q3R) 

 
<a id="ID5RX"></a>


## Create Smart Delivery discs 
  
Smart Delivery discs contain a package for Xbox One family consoles and Xbox Series consoles. The packages have a license that works for both packages. They're part of the same product in Partner Center. When inserted into a console, the appropriate package for the console type installs. The installation includes the initiation of any applicable content updates, if available.

> [!NOTE]
> If you want to create a package for your game that's per console generation, by using separate Partner Center products on a disc, this is called a multi-product disc. For more information, see the [Multi-product discs](#ID4Q3R) section in this topic.

### Create and test Smart Delivery discs 
  
To create and test a Smart Delivery disc, create a *catalog.js* metadata file and a disc layout as described in the following sections of this topic. 
  
  * [Create a disc layout](#ID4EBG) 
  * [Catalog.js](#ID4ECM) 
 
<a id="ID4EBG"></a>

### Create a disc layout 
 
Create a disc layout that looks like the following example.
   
```
- Disc Root
    - Licenses (folder) - (Not needed for Xbox One ERA Development Kits. Use XVCs that are created with the /LT flag or /LK flag.)
        License0.xml (file) - (Not needed for Xbox One ERA dev kits. Use XVCs that are created with the /LT or /LK flag.)
    - MSXC (folder)
        - Package_x.xvc (file)
        - Package_xs.xvc (file)
        - Metadata (folder)
            - catalog.js (file)
            - Package_x.xvc (folder)
                - Package images (files)
            
```

*Package_x.xvc* and *Package_xs.xvc* are the per-console generation packages. The MakePkg tool will suffix a package with either `_x` for Xbox One packages or `_xs` for Xbox Series X&#124;S generation packages. One of these packages is declared as a "variant" of the other package in the *catalog.js* file. In the previous example, *Package_xs.xvc* is a variant of *Package_x.xvc*.
 
 
The directories have the following content. 
  * **Licenses** contain the license files for the games. This information isn't needed for Xbox One ERA dev kits. Use XVCs that are created with the `/LT` or `/LK` flag. Afterward, they can be omitted. 

> [!IMPORTANT]
> If you are using a package created with the `/LK` flag, you will need to use the **xbapp installkey** to install the CEKB file onto the target console. This will allow for decryption of the /LK package on the disc. See [xbapp.exe (NDA topic)](../../../tools/tools-console/commandlinetools/xbapp.md) for more details.

  * **MSXC** contains the packaged games and the metadata that are used by the Xbox shell. 

  * **Metadata** contains the metadata that the shell uses for games on the disc and for game packages. 

  * **Package_x.xvc** contains images that are used by the shell for the game. The name must match the game package file that's in MSXC. You don't need to provide images for packages that are variants of other packages.

 
<a id="ID4ECM"></a>

### Catalog.js 
  
In the Metadata folder, create a file called *catalog.js*. Edit this file to reflect the names of your packages and images that are in the other folders. 
> [!NOTE]
> This file must be UTF-8-encoded. We recommend using a JSON validator on the web. To ensure that the JSON is validated, copy it into a text editor and then save the file in UTF-8 format. 
 

#### Example of a Smart Delivery product

The following is an example of a *catalog.js* file single product that uses Smart Delivery with inline comments. 
   
```js
{
    "version": "4.0",                                               // Don't adjust this value.
    "packages": [                                                   // This is an array of packages.
    {
        "packageName": "Package_x.xvc",                             // Match your package name in MSXC\<package name> to the package name in MSXC\Metadata\<package name>.
        "generation": "8",                                        // Enter "8" for Xbox One packages, or enter "9" for Xbox Series X&#124;S generation packages.
        "oneStoreProductId": "BX38WRFV50MJ",                        // Partner Center Product ID for the package.
        "contentId": "2b05043b-4043-4ba0-80ed-fd4811c4b333",        // Content ID for your package. Match this to the Content ID of the package file.
        "titleId": "037C3A1D",                                      // Title ID for your package.
        "variants" : [
            {
                "generation": "9",                                  // The console generation for this variant of the package. Enter "8" for Xbox One packages, or enter "9" for Xbox Series X&#124;S generation packages.
                "packageName": "Package_xs.xvc"                     // The package name for this variant. All packages must have the same Content ID or Product ID.
            }
        ],
        "titles": [
          {
              "locale": "default",
              "title": "Killer Instinct"                            // Package title.
          }
        ],
        "images": [
          {
              "size": "100x100",
              "image": "100x100_1.png"                              // Match the file names to MSXC\Metadata\<Package_x>\.
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
        "ratings": [                                                // This ratings information is only for example purposes.
          {                                                         // This is automatically generated for your discs
              "system": "OFLC",                                     // by using the information that's published in Partner Center.
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
  
    
<a id="ID4Q3R"></a>


## Multi-product discs 
 
Multi-product discs contain a package for Xbox One and Xbox Series X&#124;S consoles. The discs contain a license for each package. These packages come from separate products that are in Partner Center. They have an explicit, generational relationship that's configured in Partner Center. Only one of the packages installs by default when they're sold as a digital bundle, or when they're installed to a console by using the disc. When the disc is inserted into a console, the appropriate package for the console type installs. This includes the initiation of any applicable content updates, if available.

> [!NOTE]
> If you want to create a package per console generation by using a single Partner Center product, this is called a cross-generation Smart Delivery disc. For more information, see the [Smart Delivery](#ID5RX) section of this topic.  

#### Example of a multi-product disc

The following is an example of a *catalog.js* file multi-product disc with inline comments.
   
```js
{
  "version": "4.0",                                                 // Don't change this value.
  "bundle": {
    "oneStoreProductId": "9P436MXJ71GV",                            // Replace with the game bundle Product ID.
    "launchPackage": "Package1_x.xvc",                              // This is the package that is launched when the game disc is inserted into the console.
    "titles": [
      {
        "locale": "default",                                        
        "title": "Game Title"                                       // Replace with the game bundle name.
      }
    ],
    "images": [
      {
        "size": "100x100",
        "image": "100x100_1.png"                                    // Match this to the image file names that are in MSXC\Metadata\Bundle\.
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
  "siblings": [                                                     // The sibling entry that sets these two packages as
    [                                                               // related. The correct package for the console
      "Package1_x.xvc",                                             // type is chosen.
      "Package2_xs.xvc"                                             // Note: the sibling relationships are an array
    ]                                                               // of arrays.
  ],
  "packages": [
    {
      "packageName": "Package1_x.xvc",                              // Match this to the folder name that's in MSXC\Metadata\<folder name>.
      "generation": "8",                                            // Xbox One family generation that's used for Xbox One and Xbox Series X&#124;S consoles.
      "oneStoreProductId": "BX38WRFV50MJ",                          // Replace with Package 1 Product ID.
      "contentId": "ace6ef3b-0c5b-4f17-a651-390e75169d5c",          // Replace with Package 1 Content ID. Match the ID to the Content ID of the package file.
      "titles": [
        {
          "locale": "default",
          "title": "Game Title Xbox One Edition"
        }
      ],
      "images": [
        {
          "size": "100x100",
          "image": "100x100_1.png"                                  // Match file names that are in MSXC\Metadata\Package1_x.xvc\.
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
      "type": "Game"
    },
    {
      "packageName": "Package2_xs.xvc",
      "generation": "9",
      "oneStoreProductId": "BVC818MXZ6KG",
      "contentId": "5519355c-bff9-40b4-92bb-b5473fd9c577",
      "titleId": "35c8f637",
      "titles": [
        {
          "locale": "default",
          "title": "Game Title Xbox Series generation edition"
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
      "type": "Game"
    }
  ]
}  
```

 
## See also 

[Creating discs](creating-discs.md) 

[Creating test discs](creating-test-compilation-discs.md) 

[Multi-disc functionality](packaging-multi-disc.md)
