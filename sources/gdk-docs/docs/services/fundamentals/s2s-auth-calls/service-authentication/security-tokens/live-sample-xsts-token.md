---
title: "Example XSTS Token, decryption, and validation"
description: "Provides an example of an XSTS token and the flow to proccess the token."
kindex:
- Example XSTS Token, decryption, and validation
- sample token, sample xsts token, example token, example xsts, xsts
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.author: cagood
edited: 02/05/2024
ms.date: '08/01/2022'
permissioned-type: public
---

# Example XSTS Token, decryption, and validation

This topic provides an example of an XSTS token from the SimpleHttp client sample as it is proccessed through the [Game Service sample](https://aka.ms/xgdsamples).

This token was generated against the following relying party and settings in Partner Center:

| Property         | Value |
|------------------|-------|
| Audience URI     | rp://AsymetricJKU.atg.net/ |
| Token Validation | JKU enabled |
| Encryption type  | Asymmetric encryption - JWE RFC 7516 |
| Encryption certificate thumprint | 0004a3a12c1d5e59307a308d6d02e83978e2a9ae |
| Token life time  | 4 |

## Example token

```json
Authorization: XBL3.0 x=18026470712427541036;eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJ4NXQiOiJBQVNqb1N3ZFhsa3dlakNOYlFMb09YamlxYTQifQ.nPHHgFYqVcPZBZaZHN8L_OsT3K79fbEIzf7wOHyco5mrzKzKqgu9hM2m3bY7vle1TkEos5fJ9cgoJ-Ti3y3BNY490BXi-1biqyGOa3znni1Rg01X-otfulqnv_-H7ACsRdRM6cgQHIGSA9rLK9R0136MhrlzWBH_b5uo_30Avwx75kU8-B2iYbYcn3YU2lLRiBcI9ZoSVbXyGIG5oV9wDG4rBHR696opn7Dx2TxfXcl-K587RG-hTmvZt85PRKIwnVnFDIMsO_yKApKfqscB2MHDZ3D7HWvjeAwIrzkYcBpvBP_Aom4DhrN2sFeYWm6uCR7Vp7lQaZffPtjQxVVo7Q.dpcK5rhxbSM-yTN8PG3boQ.AJPYDIDymLxiisvHIUD-GlDwMc7tXo3vY4axhO9CR9u1YhCsggBz9h125G7XLg13zXTxuQA5Y9AFEVPc6xJ5IlWPxLoq3_pCvHriAZ8iQHk_xZeyZRlkz2nuLyU0uiqExISrqKIiQ1MGad1wp6Udd8PtLgHZhIi7IOMJACZzMn0KMDBUrzHMK-uc6Awd2SlQr92pu2vMrdrpZvmHfjBlvHUT5U0i9-QP4tBxNrpXFEPBlyi7SH772E2FpVMRZ9DReh3UtD1_J59TYwzvMcU9hKHD8wnHqcTHH29qHsUaqYDob0CtkFUiw0-MCIbdRLNKywBaa1nljOg0qxYAV-Hr4Wi9--CJJw75-LNojp7dveGUqYLDXjvEWIkk6Eg-v9T1zgTQ7sVl3ePjaKFADyu3QaUOHiY_03WTpxXnWzUsStNcmJOhxbdZHDlVLc-EzFy_W7JzhyxZzUMR0D4rOhVeDJ7teWRELVK4f2feXenL8pqZKBQLOrXoXtx4BRsfT584pPnf942244BrO5skeq__PpDR--I78wOt4eiYrCURzXXZFysWHjfvl-lypUz1nSGFGkdqEQOEKmm3zHISqLbZxjohcO_INE15RDb6gPn22AuH5iSbbyYYrlJFvph3GAmwsw1h_HaWUm77b78ykpUZi--EXqsmF8djhR4JuMOQ2JYkfYHdombok5tNTZkLk5LbRP8uY-bzcaszxkGWyz5kTgu2zVTSz3a1Xn0DeghBQ0YHgDoyOa_gSClN2YzgsIjIJ58ZaqYoAdFSiMnF9rY390Aj1eaxXcV_cCWsRTmZR9ZXfQwPLxP5WhuUmU4FYZnB6el3Lx5o4N0gTZp_p9YqhpxtFb5LyXUz_8d7DSKPXmX-mjFILULU3Z2XMCW5RDpQdQR1NreLaR-U8w_jIJBfUQVj4dlAEUnd1usrxe1OoRbjNv2CktY49LtgI5RMP1vOJe85YPT7PwRcxGD5hHlxK6n6m7IbOGlzgLP_4on2-jP8we0C7efipAWNtX6LELTQ1A3NuPTuYADhyEAnvAg2CeU2P5ZLol_by-6u2fpiWy_n-LslblGkOnu6xQxWN5i1ln8WDCj5gsZoH7f_QZujmrU-5XcGFBvyZywLhfCF7bPh8lhLpA-apdgr_rhqDL0bgwDGVSo-cgM0U8eAln2FdKqezGlbRLfQ8Ufyr-exXEv7wlxnNj1DSXLLOUxc4fL8dKMtq1DbxTh74drZb0XqR5-azLAXRCPyVsYker8dNJSwoIDE1xPaXSzTe_OCDdIA1KwPLI8TcJGmGo7VhEW7P5tML2ZmYsRtT1MkF0VPHY_SZPdO2KPSTTcWR1otUel8ERUwDu7eggmL8gVbitUiNCIVKkPdhkLQDtloBAT99WtKo37RDzv43AE2RBTTFSTF-4r6pGDoJyCkj7XB2eliS_3_HTQG3Pf547fDVUdTST3aKzJLox789zRjAq2MTDTGpjUgLeeUUZ-q6Y9O_7JF4js_t0rse3W1e2vSToj0As1X7bIQVy1ZQWif24DtDnvamcsOjddMGJG14v9dbNh-ScowBZ_h1UBPjXaNQyXiKFIQjKzS1hy5vXqN_pAPgzjMh-jdavwqEglEEDZd6vowUhzuYkXivfh7u-TQReXomgixGYS-QTcTewphwKZDAEz7-734Y6tnolOK8XmDl1fctKFlXGHBt_zY3V29U9qQTSYUw-RD-0CafeFooUFOhXTaxdN7QRUhc0HZ8_dGOcvo7-gM6TfWd4V10vBkpJByXl4EQaqda7ZnSAKyhc0SzFgpFJnJp0EyJ7ZeEmwq7-4t13u3DmcrW1EXFCr7HCHyQi4VBQmp1wBydUxgUWnnu8yxca1SnymQlR5kVVGQntkl4V3YafOJWeUFKGtJ3I3aYYXq0sqEdRVKVpASoxspXhyAPwKwoGLaTNG__H-NMyJGxv_qmoBAJRs9TuqvjrPMAg2fBm4QWrX31xIfnpZ7YKYLrYyZJqxGV7Z8qlQ_Lu2DUdhL6Q3OKsr9kkN3PRlqLjpBBnW4fPMFzn4mfIWcOCfqAEw8cQFbtQPiqLA5gOV2myaARLijr4obuIGYLSugyRzbUxDeei7hSGHpTwsnIVvI22VZIkC2cPAJu28E3PFP11ApqiZDMivhivpPWTWCU2-HjX59I7WgbTLZhf9icehcsIpeEvyT9_8Spmtku9UOQxpnAI8O2PAByauWvGneowDNDBw0Gmj3P96xa1Dsod9Rw6V72TipUAKgVVd17QWW-HJrlsS0zV17ZP55UYqv-qxfIyuIXq-T5m2W1RoeawIBumOKl1cE0UaKaoMw7F-DOQRUVZJKjRQljZhRV6rNoNMSvE1LwTK8kvDrEE-QR-sYdtK_MSgtO57P8tjOtTSLpw.36u4TTh3Jg7ZAgaFT68MtQ
```

## Splitting and handling the outer token

The various sections of the token can be broken up as follows.

```json
Authorization: XBL3.0 x=18026470712427541036;[HEADER].[CONTENT ENCRYPTION KEY].[INITIALIZATION VECTOR].[PAYLOAD].[AUTHENTICATION TAG]
```

### Outer token header

So, for example, the header component is:

```json
eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiUlNBLU9BRVAiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJ4NXQiOiJBQVNqb1N3ZFhsa3dlakNOYlFMb09YamlxYTQifQ
```

You can put the header into the JSON Web Token (JWT) tool at [https://jwt.io](https://jwt.io) to see the following contents of the header once it is decoded.

```json
{
  "enc": "A128CBC-HS256",
  "alg": "RSA-OAEP",
  "cty": "JWT",
  "zip": "DEF",
  "x5t": "AASjoSwdXlkwejCNbQLoOXjiqa4"
}
```

This shows that this is a JWT and that the certificate used to encrypt the Content Encryption Key has a thumbnail of `0004A3A12C1D5E59307A308D6D02E83978E2A9AE`, which you can get by using Base64URL to decode the `x5t` value.

`AASjoSwdXlkwejCNbQLoOXjiqa4` -> Base64Url decode to byte array -> `[ 00-04-A3-A1-2C-1D-5E-59-30-7A-30-8D-6D-02-E8-39-78-E2-A9-AE ]`
-> Convert into a string and remove the `'-'` characters

### Decrypting the content encryption key (CEK)

Using the private key of the Relying Party certificate that matches the thumbprint, we can then decrypt the Content Encryption Key (CEK):

```xml
nPHHgFYqVcPZBZaZHN8L_OsT3K79fbEIzf7wOHyco5mrzKzKqgu9hM2m3bY7vle1TkEos5fJ9cgoJ-Ti3y3BNY490BXi-1biqyGOa3znni1Rg01X-otfulqnv_-H7ACsRdRM6cgQHIGSA9rLK9R0136MhrlzWBH_b5uo_30Avwx75kU8-B2iYbYcn3YU2lLRiBcI9ZoSVbXyGIG5oV9wDG4rBHR696opn7Dx2TxfXcl-K587RG-hTmvZt85PRKIwnVnFDIMsO_yKApKfqscB2MHDZ3D7HWvjeAwIrzkYcBpvBP_Aom4DhrN2sFeYWm6uCR7Vp7lQaZffPtjQxVVo7Q`
```

Using base64Url decode returns the following byte array:

```xml
[  9c f1 c7 80 56 2a 55 c3 d9 05 96 99 1c df 0b fc eb 13 dc ae fd 7d b1 08 cd fe f0 38 7c 9c a3 99 ab cc ac ca aa 0b bd 84 cd a6 dd b6 3b be 57 b5 4e 41 28 b3 97 c9 f5 c8 28 27 e4 e2 df 2d c1 35 8e 3d d0 15 e2 fb 56 e2 ab 21 8e 6b 7c e7 9e 2d 51 83 4d 57 fa 8b 5f ba 5a a7 bf ff 87 ec 00 ac 45 d4 4c e9 c8 10 1c 81 92 03 da cb 2b d4 74 d7 7e 8c 86 b9 73 58 11 ff 6f 9b a8 ff 7d 00 bf 0c 7b e6 45 3c f8 1d a2 61 b6 1c 9f 76 14 da 52 d1 88 17 08 f5 9a 12 55 b5 f2 18 81 b9 a1 5f 70 0c 6e 2b 04 74 7a f7 aa 29 9f b0 f1 d9 3c 5f 5d c9 7e 2b 9f 3b 44 6f a1 4e 6b d9 b7 ce 4f 44 a2 30 9d 59 c5 0c 83 2c 3b fc 8a 02 92 9f aa c7 01 d8 c1 c3 67 70 fb 1d 6b e3 78 0c 08 af 39 18 70 1a 6f 04 ff c0 a2 6e 03 86 b3 76 b0 57 98 5a 6e ae 09 1e d5 a7 b9 50 69 97 df 3e d8 d0 c5 55 68 ed
]
```

 We can then decrypt the Base64URL decoded value by using the RSA private key, which returns the fully decoded CEK.

```xml
[ 42 d5 d1 d2 a5 fd 0f 2e 16 88 8e 24 fe 95 95 a5 b3 fc 54 f7 19 26 1e 48 7b ce 19 d9 07 d1 86 9a ]`
```

### Getting the HMAC, AES, and IV (initialization vector) to decrypt the payload

The CEK can then be broken into the `hmacKey` and the `aesKey`.
The HMAC key is the first half of the CEK with the AES key as the second half.

```xml
hmacKey = [ 42 d5 d1 d2 a5 fd 0f 2e 16 88 8e 24 fe 95 95 a5 ]
aesKey =  [ b3 fc 54 f7 19 26 1e 48 7b ce 19 d9 07 d1 86 9a ]
```

The final piece that we need in order to decrypt the outer token's payload is the initialization vector.
The IV can simply be base64 decoded from the third section of the outer token .

```xml
dpcK5rhxbSM-yTN8PG3boQ
```

```xml
iv =      [ 76 97 0a e6 b8 71 6d 23 3e c9 33 7c 3c 6d db a1 ]
```

### Decrypting the payload

With the above keys we can now decrypt the payload of the outer token to the following.
For the code that is doing this decryption please see the `DecryptAsync` and `Decrypt` APIs in XstsUtilities.cs of the [Game Service sample](https://aka.ms/xgdsamples).

```xml
[  7d 56 5b 93 aa 3c 16 fd 45 3d 15 10 8e ed 23 48 c0 70 4c 38 81 70 cb cb 29 05 9b bb da dd a8 c0 af 9f 1d fa 9b a9 79 9a 07 4a 57 91 bd b3 6f 6b 6d 2e b3 5f 9f bd a2 09 1a 9f c7 0b d1 58 43 be c9 30 de e5 9e fc 22 6d 5d 53 d1 21 e6 d8 c3 51 e4 1a 13 74 64 5e ac e5 11 32 a5 47 8c 63 4a 67 e9 c5 88 b5 fe 10 a4 6e cf f6 ca f6 fe 55 46 60 3b d4 a8 3c d8 4b d0 bc 3f 2f 07 86 8a 59 fb 92 59 bf 1c 07 57 2b bd ea 71 f1 fc e7 c5 9b ee e5 10 3f 72 7d 37 1e 37 f6 52 e8 63 7f c9 68 73 dc fb e8 92 59 2a a6 df 89 c6 9b 0f fe af cb ec 1b d2 eb 9a e0 fa dd 48 2f 1c 49 7b 6b c2 c4 b7 49 f3 6a e4 21 34 15 4e 95 4b bc 7b c8 48 85 11 b6 b9 0a a3 c5 ca 5d 57 5e 09 b8 23 13 dd 1b af 63 4b 34 ba 74 06 fc 9a b4 5d af eb 56 df 8d ef 85 8e f5 a2 0e 31 a8 43 5f 90 96 1d 38 fe fe e7 0e fb ae ee a0 d8 b5 b9 c0 26 17 d2 e1 9d 6b 87 98 4e 01 a6 88 2d 15 3c 58 0f 1c 6c 04 98 79 61 ec da 54 24 38 74 f8 4c 67 88 e7 6a 77 a7 35 1e db e6 31 9e 82 18 eb 1c f9 f0 3f 74 a8 a8 1d e6 14 06 3c 13 6b ab 29 70 6a 27 ec 12 75 8f 16 62 8e fe 1b e3 46 e5 e0 b7 6c 21 b3 6c c3 3a 9f 11 94 9f 4c 47 11 76 32 25 63 90 c6 b3 6c 10 92 c2 9a d9 42 17 68 8d c9 da b8 92 a9 df 52 e1 42 dd c8 c8 44 b5 61 7b 84 f2 94 1a 47 51 77 b9 9e 8f 81 43 17 ea f1 99 09 d6 50 21 6b e2 61 9d c2 7b ea 58 f3 51 f4 bd 14 05 b4 9d cc ac 51 6d 4f 9a a3 e0 4b be 14 26 d4 a6 a7 a2 58 64 64 a1 7c 20 46 2e 58 2f 23 6d 90 4e 85 e0 8c 2e 5b 3a 06 5e d8 e7 60 c7 5a ac 4b 18 23 36 e0 57 3e f0 2a 6f bb 59 0a fe ca d3 78 a4 69 3e 05 11 c4 ed 58 9b 63 8a 17 39 e4 23 75 98 f2 ad 31 3d a9 65 5b 98 e4 8a a0 86 35 52 35 84 59 40 a7 94 ab 7e ce 10 a3 49 45 6e b2 85 6b aa 4f e5 41 ce 6b 9f 22 63 3a b6 d6 83 aa 91 bc 86 d7 a2 51 b5 e7 2f ea 25 2d 5d 58 7d 84 3a e4 29 57 e3 3c c9 08 19 50 87 e5 98 86 1d 6b 93 1a 62 42 6c 88 5f b4 b1 1b a6 c7 13 4b c9 42 1b ad c9 07 ac f2 7a 41 bc 50 6b bc 09 22 0d ce 17 0b 75 62 4d 3a 05 d4 8f 36 1f d1 ab 29 74 df 58 e7 11 87 c7 78 36 26 15 57 ae 9b 03 69 ef 5b a0 c7 e6 34 af 39 b4 c5 35 5f 69 77 14 ff d0 ee 5a 29 ac 87 0e fb 15 a2 fb ed 92 d4 9b f0 90 20 d1 69 36 5f ca 96 66 6c 8e 5c 49 cf fa 24 84 93 e8 81 bb 73 cf 09 d5 93 2c 6c 22 2f 61 ea 9e cb 4a bd 7e 89 fa d2 66 59 49 c4 41 06 34 ad eb d8 f5 ff 14 28 36 cf d0 0b 91 58 a3 40 b5 28 17 df 48 e3 90 b3 c5 b5 23 e8 0f cc 86 9a b3 ff c8 81 fb 3f 72 80 56 bf 5d e2 ac 35 ce 58 af f2 2b f4 fe 4a ae da 0e 6c 8c 32 05 fe f4 23 e4 57 22 e8 00 d4 9a 54 a1 97 e8 04 7a 1a 88 78 c3 9c 6a f9 f1 a5 5d cb fd ff 79 7f 4d 6e c5 6a 8f 61 fe 88 0e 9c 78 01 af 66 e6 90 0d 13 7c 02 5e ea 3f 31 84 cb aa 01 59 8d 64 e6 3f f2 f4 a5 62 7f 95 07 55 43 02 35 c4 26 5d c8 02 b6 46 e0 f0 89 77 f9 06 78 89 69 47 34 de fa 6e e8 f4 0e 45 09 06 8e 3a 30 c7 98 0b b2 f9 f1 fb c3 73 d6 f1 29 10 74 a6 4b 01 7c ac 10 8d 7d 8f 2d c0 4b d0 03 16 93 39 8c b9 c9 17 06 7e b0 c6 97 6a 0e 31 c4 38 af ba f3 fd 93 9f 7d 8a ae f6 29 ed 89 56 ec 77 32 c1 a6 90 c3 7d 08 b0 d6 cb 61 97 c7 87 fe eb 92 f5 76 18 ed 6e b2 63 de b9 1b 7d 8a 6a ad 3c b8 58 a0 5d 1f 75 37 e3 ec f8 b2 c4 da eb 12 d7 b7 d3 50 4e 49 72 ef 68 56 3e c3 74 5c 28 2a a3 44 bb 5f 53 ef 7e 8a 7a f6 25 70 ff 2c 85 9b 9f 63 b3 8b 86 10 c7 1b 6b 4a bb f0 eb dc 25 7f 82 03 dd 04 99 24 b4 cf e7 68 d0 48 ec f6 bf 2e 4e b9 e1 03 3b 09 8f 0d 69 e7 33 1e 4b ff e4 30 fd 32 b8 e6 d9 bd 0b 36 ec 46 90 af 8d dc c8 9c b9 d6 cc a3 11 94 68 f7 8c 52 ed 51 c4 bb 4f 1a f7 e8 84 ca 3f a2 1b 97 22 1e f7 65 f7 ae c7 0b 8b 38 22 53 7a 90 be d4 c7 d3 25 b9 47 45 ea fa f1 a6 3f 00 cd 4f 3c b3 bf e2 b6 d2 c5 7e 3c 06 89 dd 14 2d 73 cf ca ff 15 14 3c 71 af 90 97 9b 1e 2a f4 27 5a e7 e0 1f ce c2 5c e8 78 a1 22 36 8f 69 32 80 56 8d 6a 56 40 67 80 53 dc 04 0d 6b 40 03 10 13 18 7a 85 17 b6 b7 16 d9 62 2d 10 95 e2 ec 00 da a1 38 0b 3a 11 83 ce 11 23 d8 6b 03 e8 5c 4f 41 37 19 ac b7 bc cd 2b d0 d2 46 3a dd 24 3d 3c e6 ad 35 af 5a e4 11 0d b4 af 65 60 27 db dc 00 b5 47 74 e0 53 ae e3 79 e5 73 0a 1b 05 e6 84 a7 a1 76 3e 70 35 7b 6d 79 f8 67 c7 38 ab 5e 7f 9f 87 62 c5 ea 7c 71 f0 f5 55 97 44 85 08 ec 08 16 59 30 57 79 05 78 a3 70 b0 07 2c 2c c0 dd 44 d4 ec 36 0a 53 85 d5 79 93 ad b8 52 d8 24 0e 79 d1 bd 05 39 e1 8a b6 d6 a2 30 5b 71 ac b0 be e2 59 e1 4a 61 75 7e a2 11 60 c1 01 63 4d 61 f0 07 b8 00 4c 5e 80 e7 d5 be 5d b1 01 18 3a 09 78 51 f6 5c 9d 47 ca 1f 73 3a c0 f1 0c 58 53 e7 99 88 9b 8f 04 74 19 56 fa fa b9 70 f5 5f 6a dd f3 8c 99 e7 34 41 c5 d0 b7 51 37 26 b0 f2 41 13 cc 87 cc f8 53 d5 e2 94 b1 95 bb 3f 9f 05 66 0d 5c be 1d af 75 73 de d4 df a7 4c f6 c7 81 3d cf eb 0e 37 1b 09 33 00 71 2a 0d 00 fe e7 50 37 d8 c5 59 fd 02 fb 89 2d d6 06 ea 01 fb ba d2 e0 13 21 7d e2 2f bb fa 6c 41 28 2e fc b6 fd be b1 ed e1 4c b4 f8 e2 45 0f 23 f2 df 1e d7 41 93 9f 5e fe 1a 0f a5 dc 17 7a f1 f8 aa b3 74 e8 90 d8 2e d6 e5 c2 e2 f8 f0 67 d9 7c 14 fd f1 fd 19 ea de 8e 86 ee 96 5a e4 f7 f3 ed 32 c7 c5 d7 fe fa 9b eb 7f 3d bc 97 de 3e f6 b7 45 71 d3 0c dd bd 61 8e 2f a6 36 3a 73 7d d8 7f 3e 9f d6 e8 be cd f7 43 b9 18 e3 f6 f7 7b e4 3c 24 77 de f3 bf 07 cd da 6e 8b 72 5b 7c 94 9f 3c 7f 7c 57 98 dc b2 ef b7 d8 ff 35 35 a7 b9 91 66 ca d0 d7 23 d9 cc 71 5e 8d 86 d1 b4 cc 7e b7 cd 5f d7 29 b8 5e 34 12 65 12 db f5 d0 eb ef e4 f1 3e 7c 7f fc b5 64 6d 47 c9 df fd f3 1b 12 27 c3 9b f6 89 3e b6 e9 df 51 86 f7 b4 0a df cf 62 30 6e f3 b1 bf 9e b3 4f db 79 7b bc 25 96 f6 bb 79 f1 c6 7e fd 66 ae fb 6b 40 71 a9 71 cb 98 b2 4b 18 7e 0c 99 6d a1 ad b1 6d 8a dd 4c 87 7e e2 6f 92 5d e6 f7 9b b1 f4 43 fe fa 37 00 00 00 00 00 00 00 00 00 00 ]`
```

Decompressing this byte array we get the inner JWT token.
For more information, see `DecompressAsync` in XstsUtilities.cs of the [Game Service sample](https://aka.ms/xgdsamples).

## Handling the decrypted inner token

After decompressing the decrypted byte array of the outer token payload, we now have a standard JSON Web Token (JWT) that houses the claims and information that contains the claims for the user, title, and device as defined in the relying party.

```json
eyJhbGciOiJQUzI1NiIsImtpZCI6IjhhMTk0NDBmLTY1NTMtNGU1YS05ZGI4LWMyZGU0NjJmOWFlNCIsImprdSI6Imh0dHBzOi8veHN0cy1rZXlzLmF1dGgueGJveGxpdmUuY29tL3Bzc2tleXMiLCJ0eXAiOiJKV1QifQ.eyJ4ZGkiOnsiZGRtIjoiRVJBIiwiZHR5IjoiWGJveE9uZSIsImRjYSI6IjEiLCJkdnIiOiIxMC4wLjI1Mzk4LjI5MjMiLCJkZGkiOiJGRDAwMDI4MDMwNjJBODJCIiwiZHBpIjoiMEFBQTE5QTZDQkFBREMxOEM0Nzg0NzE2ODE4OENGRUFBMTVERDQyMyIsInBkaSI6IjBBQUExOUE2Q0JBQURDMThDNDc4NDcxNjgxODhDRkVBQTE1REQ0MjMiLCJkZ3IiOiJjNzIyZjRhYy0yZGIxLTRkZWItOWUyZi00ZTAyNzMzZGU5NjUgZWJjMTFiZGItNTg3NC00YWM4LThkY2YtODMzMGQyNTNiMTZhIGE2MWM4MDAyLTllZTctNGIyNi05ZGViLTQzYzc5ODJlMTczZSA0YmI4YTNlZS1mZDg0LTQ2ZjMtOGRlYi05NjE2ZDBmNmEwYmQgYjkyZTQwYWUtMWYxOS00ZDA3LWEzZmYtMDNlMTc1N2VhZjc5In0sInh0aSI6eyJ0aWQiOiIyMDA5MTY5NzQ1IiwidHZyIjoiMS4xLjAuMCIsInRnciI6IjQwMGVjMzNhLTg3YWQtNGUxZS04Y2YzLWRkNjVhYWU0NmUwMiBiN2UxNWIzMi1iYmE0LTQwMWYtOWE3OS1kNjczMDU1ZDcyNTMifSwic2J4IjoiWERLUy4xIiwiY25mIjp7Imp3ayI6eyJjcnYiOiJQLTI1NiIsIngiOiJ2RDN6R0poeVh3RHV0Tk1BQzdjMXNySFZMb2xTTDV2OF9FbVM2VXRiSGVNIiwieSI6ImlzSldBNXdITHZOMWhhUFJPc0U5bi05TVAtT0hTdzJ4WURQNzFBSjE2NTgiLCJhbGciOiJFUzI1NiIsImt0eSI6IkVDIiwidXNlIjoic2lnIn19LCJ4dWkiOlt7Imd0ZyI6IjIgRGV2IDA3OTU3NDgzNiIsIm1ndCI6IjIgRGV2IDA3OTU3NDgzNiIsInVocyI6IjE4MDI2NDcwNzEyNDI3NTQxMDM2IiwidXRzIjoiRXh0ZXJuYWwiLCJwdHgiOiI2RDE5MzIzNzE4ODQxQkY3OENEMkI1QjJFRDlDM0VEMTVDODJEQTI3IiwidXBpIjoiNkQxOTMyMzcxODg0MUJGNzhDRDJCNUIyRUQ5QzNFRDE1QzgyREEyNyIsImRsdCI6IjBaSnBaWlI1cC9ZVE5TZmpmOE1lZm9YUHlreXlBRS9oZkNGbktJM0h1dHFET09lSko4bDJZdE1weUhoamdxVVpkMXdvRWtzM0dSV1pnWGpaSlNrTElvdTFYbU5kSmREU3AxWkRrbkVPOHM3OXZIMlYySm1IUFl6eDd3QmNaTGNmWkJNQUZJaDN2emF5bFpTNm9tTVE3Z3ZYNFAyQStEQ09vSW1ucU9qMUl0a0dPTktzcUtCdk82UzNSQ0IxWHZJZ2taeVpScWFJU3lHWUtaQXBrUjg2TCtLOVBicjNFb3ZYNnZHRVFnRWtFWHg0PSIsInVnciI6IjgzN2EzMTU5LWVmODMtNDgzZS1iY2Q5LThiMDA0NTEyMzEzNCAzZjE1OTgzMi1mZjc0LTQyMDUtODI4OC1mNTNlMGIxNjhhYjYgZjRiZDkxZGEtYjAyOS00ZGI1LTljNDUtZjY4ZDQ0MmQxY2EyIiwiYWdnIjoiQWR1bHQiLCJjdHIiOiIxMDMiLCJsbmciOiIxIiwicHJ2IjoiMTg0IDE4NSAxODYgMTg3IDE4OCAxOTAgMTkxIDE5MiAxOTMgMTk0IDE5NiAxOTggMTk5IDIwMCAyMDEgMjAzIDIwNCAyMDUgMjA2IDIwNyAyMDggMjA5IDIxMSAyMTQgMjE1IDIxNiAyMTcgMjIwIDIyNCAyMjcgMjI4IDIzNSAyMzggMjQ1IDI0NyAyNDkgMjUyIDI1NCAyNTUifV0sImF1ZCI6InJwOi8vQXN5bWV0cmljSktVLmF0Zy5uZXQvIiwiaXNzIjoieHN0cy5hdXRoLnhib3hsaXZlLmNvbSIsIm5iZiI6MTcwNzE3NTY4NSwiZXhwIjoxNzA3MTkwMDg1fQ.WvErBgqjI3NeQo7soN7HbI1UeGSu4SJ-unm1ZqGYwtHdZCc2curhXWmk0T7zAeeNUUHPz3fclL8vR2G9MRF7MAIKv-eyUcrCnKQ2_GECZGCUJ7cco142FoEQEe51tDyhHCqvvAtF-ypHdz4t7K8SDuZQD8Y_H1A77cd7cfdqQYusgEIoXs-UJ6xiayiZ5WN0ruV3yUYgt44ijNB8B56nxOne1ISXZEBhml28Iu8msf_AZhBSV_Cvs1fQIm-1q0f7W_tZRpWgR8bTm4oyLlnbXqBD-u-VA1KiwQiBwKNFF6m0Ud1QA4xXeRRfmXBA0747ic9yMmlxQ-ZNey8o4zlmYw
```

Using the JWT decoding tool at [https://jwt.io](https://jwt.io), we can see these claims.

```json
{
  "xdi": {
    "ddm": "ERA",
    "dty": "XboxOne",
    "dca": "1",
    "dvr": "10.0.25398.2923",
    "ddi": "FD0002803062A82B",
    "dpi": "0AAA19A6CBAADC18C47847168188CFEAA15DD423",
    "pdi": "0AAA19A6CBAADC18C47847168188CFEAA15DD423",
    "dgr": "c722f4ac-2db1-4deb-9e2f-4e02733de965 ebc11bdb-5874-4ac8-8dcf-8330d253b16a a61c8002-9ee7-4b26-9deb-43c7982e173e 4bb8a3ee-fd84-46f3-8deb-9616d0f6a0bd b92e40ae-1f19-4d07-a3ff-03e1757eaf79"
  },
  "xti": {
    "tid": "2009169745",
    "tvr": "1.1.0.0",
    "tgr": "400ec33a-87ad-4e1e-8cf3-dd65aae46e02 b7e15b32-bba4-401f-9a79-d673055d7253"
  },
  "sbx": "XDKS.1",
  "cnf": {
    "jwk": {
      "crv": "P-256",
      "x": "vD3zGJhyXwDutNMAC7c1srHVLolSL5v8_EmS6UtbHeM",
      "y": "isJWA5wHLvN1haPROsE9n-9MP-OHSw2xYDP71AJ1658",
      "alg": "ES256",
      "kty": "EC",
      "use": "sig"
    }
  },
  "xui": [
    {
      "gtg": "2 Dev 079574836",
      "mgt": "2 Dev 079574836",
      "uhs": "18026470712427541036",
      "uts": "External",
      "ptx": "6D19323718841BF78CD2B5B2ED9C3ED15C82DA27",
      "upi": "6D19323718841BF78CD2B5B2ED9C3ED15C82DA27",
      "dlt": "0ZJpZZR5p/YTNSfjf8MefoXPykyyAE/hfCFnKI3HutqDOOeJJ8l2YtMpyHhjgqUZd1woEks3GRWZgXjZJSkLIou1XmNdJdDSp1ZDknEO8s79vH2V2JmHPYzx7wBcZLcfZBMAFIh3vzaylZS6omMQ7gvX4P2A+DCOoImnqOj1ItkGONKsqKBvO6S3RCB1XvIgkZyZRqaISyGYKZApkR86L+K9Pbr3EovX6vGEQgEkEXx4=",
      "ugr": "837a3159-ef83-483e-bcd9-8b0045123134 3f159832-ff74-4205-8288-f53e0b168ab6 f4bd91da-b029-4db5-9c45-f68d442d1ca2",
      "agg": "Adult",
      "ctr": "103",
      "lng": "1",
      "prv": "184 185 186 187 188 190 191 192 193 194 196 198 199 200 201 203 204 205 206 207 208 209 211 214 215 216 217 220 224 227 228 235 238 245 247 249 252 254 255"
    }
  ],
  "aud": "rp://AsymetricJKU.atg.net/",
  "iss": "xsts.auth.xboxlive.com",
  "nbf": 1707175685,
  "exp": 1707190085
}
```

For more information about the claims that can be included in your relying party configuration, see [Xbox services security token claims](live-token-claims.md).

### Validating the inner token

To validate the inner token's contents, your service should validate the signature of the JWT following the standard defined in JWT RFC 7516.
This example token is configured for JKU signature validation in Partner Center, so the header of the inner token gives us the following:

```json
{
  "alg": "PS256",
  "kid": "8a19440f-6553-4e5a-9db8-c2de462f9ae4",
  "jku": "https://xsts-keys.auth.xboxlive.com/keys",
  "typ": "JWT"
}
```

The `kid` value identifies the specific Xbox Live signing key used to generate the signature.
The `jku` value points to a URL where the public key can be downloaded and used to validate the signature.

If the domain name of the `jku` is not "xsts-keys.auth.xboxlive.com", then the token should not be trusted.

It is recommended to cache they key at runtime as the signing keys change frequently.  
This also allows your service to be resilient and able to handle obtaining new keys when they are updated on the fly without downtime or maintenance.

If you are using an existing JWT open-source solution, signature validation is done automatically when you pass in the JKW public key to the JWK decoding API.
After validating the signature, your service can trust that the certificate and the data within it are authentic.

For more information on the inner token validation for both the Xbox Live signing JWK and Xbox Live signing certificate, see [Inner token header and signature validation](live-security-tokens.md#inner-token-header-and-signature-validation)

### Identifying the correct user in the token

Tokens will have user identities for all Xbox Live users who are actively signed-in at the time the token was created on the client.
Therefore, your service needs to use the user hash value from the HTTP authorization header, and find the matching `ush` value within the user identities.

For this example token the Authorization header had a user hash of `18026470712427541036`.
From this we can see the claims are there for this user hash who is Gamertag `2 Dev 079574836`.

Although this token only has one user identity in the token claims, we shouls still validate that it matches the user hash from the header.

## See also

[Xbox services security token claims](live-token-claims.md)

[Sample Xbox Live security token](live-sample-xsts-token.md)

[Xbox services authentication for title services](../live-title-service-authentication.md)
