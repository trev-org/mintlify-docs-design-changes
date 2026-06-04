# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/functions/xgameruntimeuninitialize?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/functions/xgameruntimeuninitialize?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# XGameRuntimeUninitialize

Feedback

Summarize this article for me

Uninitializes the Gaming Runtime.

## Syntax

```
void XGameRuntimeUninitialize(  
)  
```

### Parameters

None.

### Return value

Type: void

## Remarks

To use the Gaming Runtime features in your game, first initialize the Gaming Runtime by invoking the [XGameRuntimeInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/functions/xgameruntimeinitialize?view=gdk-2604) function. When your game is done using the Gaming Runtime and is ready to exit, uninitialize the Gaming Runtime by invoking the **XGameRuntimeUninitialize** function. Invoke the **XGameRuntimeUninitialize** function as late as possible but before your game exits, typically within the entry-point function for your game.

The following example demonstrates how to use the [XGameRuntimeInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/functions/xgameruntimeinitialize?view=gdk-2604) and **XGameRuntimeUninitialize** functions within the entry-point function of a game that is based on the **Direct3D 12 Desktop Game** template in Visual Studio. The **XGameRuntimeInitialize** function is invoked before the **Game** object is instantiated and registered, and the **XGameRuntimeUninitialize** function is invoked after the **Game** object is reset but before the entry-point function returns.

```
// Entry point
int WINAPI wWinMain(_In_ HINSTANCE hInstance, _In_opt_ HINSTANCE hPrevInstance, _In_ LPWSTR lpCmdLine, _In_ int nCmdShow)
{
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);

    // Initialize the Gaming Runtime before
    // performing any other activity.
    if (FAILED(XGameRuntimeInitialize()))
        return 1;

    if (!XMVerifyCPUSupport())
        return 1;

    g_game = std::make_unique<Game>();

    // Register class and create window
    {
        // Code omitted for brevity.
        ...
    }

    // Main message loop
    MSG msg = {};
    while (WM_QUIT != msg.message)
    {
        // Code omitted for brevity.
        ...
    }

    g_game.reset();

    // Uninitialize the Gaming Runtime after
    // all other activity has been completed.
    XGameRuntimeUninitialize();

    return (int) msg.wParam;
}
```

## Requirements

**Header:** XGameRuntimeInit.h

**Library:** xgameruntime.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[XGameRuntimeInitialize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/functions/xgameruntimeinitialize?view=gdk-2604) [XGameRuntimeInit](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgameruntimeinit/xgameruntimeinit_members?view=gdk-2604) [Developing new titles using Gaming Runtime](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/overviews/gr-developing-new-titles-on-gamecore?view=gdk-2604)

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