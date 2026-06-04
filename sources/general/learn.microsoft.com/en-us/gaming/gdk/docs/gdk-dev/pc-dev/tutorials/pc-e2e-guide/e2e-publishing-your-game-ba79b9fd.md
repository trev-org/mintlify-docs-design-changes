# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-publishing-your-game?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-publishing-your-game?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Step 5 - Publishing your game in Partner Center

Feedback

Summarize this article for me

This article describes how to upload and publish your game on Partner Center. You can publish your game to a sandbox for testing purposes or to RETAIL to make your game available in the Microsoft Store.

1. Go to [Partner Center](https://partner.microsoft.com/dashboard)
 
2. Select **Apps and games**.
 
3. Select the product name you want to publish.
 
4. Select **Packages** on the left hand pane.
 
5. Upload your game's .msixvc and .ekb files by dragging them into the upload area or selecting **Browse your files**. The process for generating these files is covered in the integration guide specific to your game engine or scenario under [Step 4 - Integrate the GDK with your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-integrating-gdk-in-your-game?view=gdk-2604).
 
 - For game engines that have built-in GDK packaging support, use the provided menu option to create the required package.
 - For other game engines or scenarios, use the GDK command-line tools to create the package.
 
 For MSIXVC2 packaging, see [Getting started with MSIXVC2 for PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/overviews/packaging-getting-started-for-pc-msixvc2?view=gdk-2604). If you can't upload an .msixvc file, contact your Microsoft representative for help.
 
6. After you upload the required files, select **Save draft**.
 
7. On the left pane, select **Properties** and then enter the required information. You need to provide basic information on about your game such as its genre, contact information, privacy detail, and player modes. You also need to provide information about the technical capabilities of your game such as High Dynamic Range (HDR) video output support and supported input devices.
 
8. On the left pane, select **Age ratings** and then enter the required information. Age ratings are generated based on your answers to the age ratings questionnaire by using the IARC rating process.
 
9. On the left pane, select **Store listings** and then enter the required information. You're required to define a store listing for at least one language by selecting **Manage additional languages**. After you add a language, configure its values by selecting the entry for the language and adding all the required values.
 
 Note
 
 The values you provided in the **Store listings** section determine how your game appears on the store page and will be publicly visible. We recommend taking extra time to decide on the values you use here to ensure that your game listing looks correct in the store.
 
10. On the left pane, select **Pricing and availability**, and then enter the required information. Here, you can specify pricing and the markets that your game is available in. You can also specify whether you're publishing to a public or private audience and when you want to publish. Specifying a private audience allows you to publish with limited availability for testing purposes, betas, and so on. For more information about limiting visibility and discoverability options, see [Choose visibility or discoverability options for MSIX app](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/msix/visibility-options).
 
11. Optionally, on the left pane, select **Gaming metadata** and then enter metadata that can help players find your game in the Microsoft Store and Xbox app.
 
12. On the left pane, select **Game setup** then select **Review and publish** at the bottom of the page.
 
13. In the **Publish to** drop down list, select where you want to publish your game to. This selection is either a testing sandbox, or the RETAIL sandbox.
 
14. After you select a sandbox, a table of areas and their status appears. If all the areas show the status as **Complete**, you're ready to publish. If any of the areas show **Incomplete**, select the area and provide any required details.
 
15. Optionally, add people to receive submission status notifications by selecting **Click here** in the Submission notification audience section.
 
16. Select **Publish**.
 

You've now started the submission process. Any specified people will receive submission status notifications as the submission is processed.

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

- Last updated on 04/22/2026