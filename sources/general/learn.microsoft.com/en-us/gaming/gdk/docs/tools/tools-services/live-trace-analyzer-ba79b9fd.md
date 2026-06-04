# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-trace-analyzer?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-trace-analyzer?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Xbox services Trace Analyzer (XblTraceAnalyzer.exe)

Feedback

Summarize this article for me

The Xbox services Trace Analyzer reviews the service calls made by a title.

The _Xbox services Trace Analyzer_ is an offline analysis tool, to find any violations in calling patterns.

The Trace Analyzer (**XblTraceAnalyzer.exe**) can be found as part of the GDK and `XboxLiveTools.zip`; see [Development tools for Xbox services](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-tools?view=gdk-2604).

This is a command-line tool. There is a readme file about this tool in the .zip file.

## Gather logs and analyze the service calls

The following steps are required to gather the logs that contain the record of your service calls and analyze them using Xbox services Trace Analyzer.

1. Build your title.
2. Modify your title to enable tracing as described below.
3. Deploy your title.
4. Launch the title and make at least one call to Xbox services in order to initialize the Xbox services API.
5. Start tracing at the point in your title you'd like to analyze.
6. Stop tracing.
7. Run the Xbox services Trace Analyzer tool on your development PC and view the output.

## Starting and stopping tracing

On GDK titles, it is currently recommended to use Fiddler to capture the trace file of the target device. Then save the Fiddler results as a Fiddler Session file (.saz) which the Xbox services Trace Analyzer tool can read. See [Using Fiddler to inspect web service calls](https://learn.microsoft.com/en-us/gaming/gdk/docs/tools/tools-services/live-fiddler-inspect-web-calls?view=gdk-2604).

## Analyze the trace file

To analyze your title's use of Xbox services, after the trace file has been copied back to your PC, you can use the Xbox services Trace Analyzer tool on GDN.

For a description of how to invoke the tool and interpret its output, see the documentation included with the Xbox services Trace Analyzer tool on Game Developer Network.

To view command line help, you can also run **XblTraceAnalyzer.exe** with the command line option of -? or -h.

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