# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/xuser_howto_best_practice_signing_in?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/xuser_howto_best_practice_signing_in?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# How to: best practice to sign in a user

Feedback

Summarize this article for me

## Example demonstrating how to silently get the default user

A game needs to establish an initial user. This example shows how to accomplish this as early as possible. You would typically want to follow this pattern if your game menus wanted to "greet" the user with something clearly identifying them, and you didn't want to immediately show the UI.

```
HRESULT Identity_TrySignInDefaultUserSilently(_In_ XTaskQueueHandle asyncQueue)
{
    XAsyncBlock* asyncBlock = new XAsyncBlock();
    asyncBlock->queue = asyncQueue;
    asyncBlock->callback = Identity_TrySignInDefaultUserSilently_Callback;

    // Request to silently sign in the default user.
    HRESULT hr = XUserAddAsync(XUserAddOptions::AddDefaultUserSilently, asyncBlock);

    if (FAILED(hr))
    {
        delete asyncBlock;
    }

    return hr;
}

void CALLBACK Identity_TrySignInDefaultUserSilently_Callback(_In_ XAsyncBlock* asyncBlock)
{
    // NOTE: XUserAddResult will add a Ref to the passed-in XUserHandle.
    XUserHandle newUser = nullptr;
    HRESULT hr = XUserAddResult(asyncBlock, &newUser);

    if (SUCCEEDED(hr))
    {
        // TO DO: create Xbox services context and do something with that user.
        // ...
    }
    else 
    {
        // You are here because there's no default user or because of an error.
        // Display some UI, such as "Press A or Enter to continue," and try the sign-in with the UI flow.
    }

    delete asyncBlock;
}
```

## Example demonstrating how to get an initial user

As with the previous example, the game needs to establish an initial user. In this case, the game is willing to have UI show at the point when it requests a user. UI only shows if the system can't determine the default user.

```
HRESULT Identity_TrySignInDefaultUser(_In_ XTaskQueueHandle asyncQueue)
{
    XAsyncBlock* asyncBlock = new XAsyncBlock();
    asyncBlock->queue = asyncQueue;
    asyncBlock->callback = Identity_TrySignInDefaultUser_Callback;

    // Request to silently sign in the default user.
    HRESULT hr = XUserAddAsync(XUserAddOptions::AddDefaultUserAllowingUI, asyncBlock);

    if (FAILED(hr))
    {
        delete asyncBlock;
    }

    return hr;
}

void CALLBACK Identity_TrySignInDefaultUser_Callback(_In_ XAsyncBlock* asyncBlock)
{
    // NOTE: XUserAddResult will add a Ref to the passed-in XUserHandle.
    XUserHandle newUser = nullptr;
    HRESULT hr = XUserAddResult(asyncBlock, &newUser);

    if (SUCCEEDED(hr))
    {
        // TO DO: create Xbox services context and do something with that user.
        // ...
    }
    else
    {
        // You are probably here because someone canceled out of the UI flow to 
        // sign in or an expected error occurred.
        // Display some UI, such as "Press A or Enter to continue," and try the sign-in 
        // again with the UI flow.
    }

    delete asyncBlock;
}

```

## See also

[User identity and XUser](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/user/player-identity-xuser?view=gdk-2604)

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