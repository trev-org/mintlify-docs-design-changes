# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/text-to-speech/text-to-speech?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/text-to-speech/text-to-speech?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Text-to-speech

Feedback

Summarize this article for me

The [XSpeechSynthesizer](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/xspeechsynthesizer_members?view=gdk-2604) API provides support for initializing and configuring a speech synthesis engine (or voice) to convert a text string to an audio stream, also known as text-to-speech (TTS). For example, voice characteristics, pronunciation, volume, pitch, rate or speed, and emphasis are customized through [Speech Synthesis Markup Language (SSML) Version 1.0](https://www.w3.org/TR/speech-synthesis/).

Note

This API requires callers to user version 1.0 of SSML.

The following steps show how to use the API.

1. Create the speech synthesizer by calling [XSpeechSynthesizerCreate](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizercreate?view=gdk-2604). Make sure to hold on to the handle.
2. You can also choose the voice you want by calling either [XSpeechSynthesizerSetCustomVoice](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizersetcustomvoice?view=gdk-2604) or [XSpeechSynthesizerSetDefaultVoice](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizersetdefaultvoice?view=gdk-2604).
3. For each bit of text you want to convert from text to speech, use the following steps.
 1. Create a new stream by calling [XSpeechSynthesizerCreateStreamFromText](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizercreatestreamfromtext?view=gdk-2604). By the time that this function completes, the conversion of the text to a .wav file is complete. This conversion can take some time and shouldn't done on any time-critical threads.
 2. Determine the size of the buffer you need to get the audio data from by calling [XSpeechSynthesizerGetStreamDataSize](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizergetstreamdatasize?view=gdk-2604).
 3. Get the audio data (.wav file) from that stream by calling [XSpeechSynthesizerGetStreamData](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizergetstreamdata?view=gdk-2604).
 4. Pass the audio data to an audio renderer.
 5. Close the stream handle by calling [XSpeechSynthesizerCloseStreamHandle](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizerclosestreamhandle?view=gdk-2604).
4. When you're completely done with speech synthesis, close the handle by calling [SpeechSynthesizerCloseHandle](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/functions/xspeechsynthesizerclosehandle?view=gdk-2604).

## See also

[XSpeechSynthesizer API reference](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xspeechsynthesizer/xspeechsynthesizer_members?view=gdk-2604)

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

- Last updated on 04/28/2025