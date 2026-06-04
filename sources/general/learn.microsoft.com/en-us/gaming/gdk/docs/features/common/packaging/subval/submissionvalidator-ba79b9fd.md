# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Submission Validator (SubmissionValidator.dll)

Feedback

Summarize this article for me

Submission Validator is a component of the Microsoft Game Development Kit (GDK) that runs a series of basic quality checks on a title or app package. Submission Validator provides feedback to developers for addressing common problems that would cause titles to fail during the content ingestion and certification process at Microsoft. When a title package is submitted, the most current version of Submission Validator is used to detect any failures that could lead to the title being rejected. The overarching goal of Submission Validator is to automate these checks and push them as early into the process as possible to ensure that partners are able to self-diagnose and correct problems prior to submitting their title package for certification.

- [Using Submission Validator](https://learn.microsoft.com/#ID4EU)
- [Problems identified by Submission Validator](https://learn.microsoft.com/#ID4EUC)
- [Understanding the Results Log](https://learn.microsoft.com/#ID4EDD)
- [Updating Submission Validator](https://learn.microsoft.com/#ID4E4E)
- [Submission Validator Release Notes](https://learn.microsoft.com/#SubValUpdates)

## Using Submission Validator

Submission Validator isn't a standalone tool that the developer uses. Rather, it's automatically called to check an app whenever the [makepkg pack](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) or [makepkg2 pack](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg2?view=gdk-2604) command is used. For more information about syntax and command-line use, see the [makepkg](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) or [makepkg2](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg2?view=gdk-2604) reference pages.

Submission Validator runs after the title package is created. Validation failures are recorded in the validation log, which is written to the output location that's specified on the [makepkg](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) command line. This is the same output location where the finished title package is created. A localized version of the output is also available (in addition to the English output) at the same location if the /validationlanguage parameter is set on [makepkg](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) or [makepkg2](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg2?view=gdk-2604). The current additional supported validation language is ja-jp.

Note

During the MSIXVC2 preview (April 2026 GDK), you can sideload and publish MSIXVC2 packages to your sandboxes for testing. Submission Validator prevents MSIXVC2 packages from being submitted to certification for public release. Contact your Microsoft representative if you need an exception.

A subset of Submission Validator tests can be run before title package creation by running the [makepkg validate](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604) command line. We recommend running it to catch issues before package creation.

## Problems identified by Submission Validator

The types of problems that Submission Validator identifies will grow and evolve over time to work toward the goal of smoothing the way from submission, through certification, and to market. For the current list of problems that Submission Validator detects, see [Submission Validator quality checks](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator-tests?view=gdk-2604).

## Understanding the Results Log

After the `makepkg` process is complete, the title XVC appears in the output folder. The validation log is in this same folder. You can recognize it by its name in the form of _"Validator\_\[title and package identifier\].xml."_ You should examine this log for any failures or warnings. In addition to failures and warnings already shown in previous sections, any `<failure>` tag designates a condition that will cause your submission to be rejected as part of the content ingestion, mastering, and certification phase. Although nothing prevents you from submitting such a package, doing so will cause you wasted time and effort. It's far better to correct the problems identified until the log contains no `<failure>` tags.

You might also see `<warning>` tags in the log. These generally indicate issues that might require an exception. If you have questions about any warnings that are identified, contact your developer account manager (DAM). Even if you're granted an exception for your title, the `<warning>` tag still appears in the log file. For a full list of log messages, see [Submission Validator Messages](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator-messages?view=gdk-2604).

The `<validatorrun>` section is at the end of the log, shown as follows. This section contains a `<result>` tag that indicates overall Fail or Success for Submission Validator tests. Any failure in any section results in an overall failure.

```
<validatorrun>
  <starttime>Sep 23 2019 16:43:41</starttime>
  <endtime>Sep 23 2019 16:43:41</endtime>
  <result>Fail</result>
</validatorrun>  
```

The version number for Submission Validator that's being used for the test is at the top of the log file. The following example shows this version number in a log file.

```
<XboxOneSubmissionValidator>
  <engineversion>10.0.18362.7198</engineversion>  
```

Your submission will be tested by using the latest version of Submission Validator when your submission is received at Microsoft. We strongly recommend that you regularly update the version of Submission Validator that you're using as you prepare to submit your title. For more information, see the following section.

## Updating Submission Validator

Submission Validator is implemented as a separate SubmissionValidator.dll found in the `\Bin` directory of the Microsoft Game Development Kit (GDK). Updates to Submission Validator won't always correspond to the release cycle of the Microsoft Game Development Kit (GDK). The current version of Submission Validator is always available for download from [developer.microsoft.com/games/resources -> downloads](https://aka.ms/currentsubvalzip). Download the compressed (.zip) file, open it, and place the updated SubmissionValidator.dll in the `\Bin` directory of the Microsoft Game Development Kit (GDK), overwriting the previous version of Submission Validator. The Certification Tools page also includes the current release version number and date. Inside the compressed file, there's a text file containing release notes for the current version, including known issues and information about changes to the checks performed by Submission Validator that differ from the descriptions in this article.

Starting with the **October 2025 GDK**, `makepkg` now supports a new `/updatesubval` option, which checks for a newer version of `SubmissionValidator.dll`. If available, it downloads and installs the `.dll` into the same location from which makepkg.exe is being from, which by default is the GDK `\Bin` directory. If you have optionally specified `/validationpath`, `SubmissionValidator.dll` will be placed in that location.

When an app, a title, or a content package is submitted to Microsoft, the current version of Submission Validator is used to check that submission. Before you submit your app, title, or content package, we recommend that you ensure that you have the current version of Submission Validator on the development PC on which the submission package is being built.

## Submission Validator Release Notes

For more information on what changes with each release of Submission Validator, please see the [Submission Validator Updates](https://aka.ms/subvalupdates) feed on the Xbox Developer Forums.

## In this section

[Submission Validator quality checks](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator-tests?view=gdk-2604)

Describes the quality checks that are performed by Submission Validator.

[Submission Validator Messages](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator-messages?view=gdk-2604)

Describes the messages (warnings, errors, and advisories) that are generated by the Submission Validator.

## See also

[Make package (makepkg.exe)](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/deployment/makepkg?view=gdk-2604)

[Title packaging, content updates, and streaming-installation testing](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/title-packaging-streaming-install-testing?view=gdk-2604)

Xbox Requirements (XRs) [(Xbox Developer Downloads->Partner, Publishing, and Release Management Information->XGD Partner Documentation)](https://aka.ms/xgddl)

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