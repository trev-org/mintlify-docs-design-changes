# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-creating-partnercenter-product-definition?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-creating-partnercenter-product-definition?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Step 3 - Create an initial product definition in Partner Center

Feedback

Summarize this article for me

Before you can publish your game to the Microsoft Store you need to set up a product definition for your game in Partner Center.

## Creating the initial product definition at Partner Center

1. Go to [Partner Center](https://partner.microsoft.com/dashboard/).
 
2. The Partner Center dashboard Home page will appear.
 
3. Click **Apps and games**.
 
4. The "Apps and games | Overview" page will appear listing any products you have defined.
 
5. Click the **New product** button, then select **Game** as the product type.
 
6. The "Create your game by reserving a name" page will appear.
 
7. In the **Name** text box, enter the name of your game.
 
8. Click the **Reserve product name** button.
 
9. You will be taken to the "Game overview" page for your new game, and initially the status at the top of the page will read "Incomplete".
 
10. Check **Retail** in the **Desktop** row of the **Device family availability** section. **Sandboxes** will automatically be checked in the same row.
 
11. Leave the default values in the Holographic and Sandboxes sections.
 
12. Contact your Microsoft representative to ask them to add Xbox services capability to your title. Include the Microsoft Store ID from the Identity details section of the Game setup page for your game. For example:
 
 - **Subject**: Need to enable game for Xbox services
 
 - **Body**: "Hi support, please enable Xbox services compatibility for my Partner Center product. The Microsoft Store ID is \[your game's store ID\]."
 
 
 Your Microsoft representative will email you to tell you that your app or game has been enabled in Partner Center.
 
 Note
 
 When you initally create your Partner Center project for your game, only **Disable** will be selectable in the Xbox services section. You will need to contact your Microsoft representative to enable Xbox services use in your game. Once Xbox services are enabled you will be able to come back to the Game Setup page and select **Use full Xbox services feature set**. Until Xbox services are enabled you won't be able to test any Xbox services calls from your game, so it's best to do this early in your development cycle.
 
13. Take note of the Identity details section. You won't need to do anything with it for this step, but you will need the product identity information in a later step to set up the configuration file for your game. You can get back to the Game setup page at any point to retrieve your project's identity details.
 
14. Click **Save draft**.
 

At this point you have created the initial Partner Center definition for your game and are ready to move on to the next step, integrating the GDK with your game.

## Next step

[Step 4 - Integrating the GDK with your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-integrating-gdk-in-your-game?view=gdk-2604)

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

- Last updated on 11/06/2025