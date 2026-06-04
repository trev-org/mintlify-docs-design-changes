---
author: aablackm
title: "DeployToTitleScratch"
description: "Deploys the specified app package."
kindex:
- DeployToTitleScratch method
- IXtfApplicationClient::DeployToTitleScratch method
ms.author: stevenpr
ms.topic: reference
ms.date: '08/01/2022'
permissioned-type: public
---

# IXtfApplicationClient::DeployToTitleScratch
  
Deploys the specified app package.  
  
<a id="syntaxSection"></a>
  

## Syntax
  
```cpp
public:
HRESULT DeployToTitleScratch(
         LPCWSTR pszDeployFilepath,
         LPCWSTR pszTitleScratchRelativePath,
         BOOL fRemoveExtraFiles,
         IXtfDeployCallback *pCallback,
         BOOL *pfCanceled,
         int *pdwResult,
         LPBSTR pbstrPackageFullName,
         LPBSTR pbstrAumidJson
)  
```
  
<a id="parametersSection"></a>
  
### Parameters
  
*pszDeployFilepath*  
Type: LPCWSTR  
  
The *source path* for the content that is going to be deployed.  
  
*pszTitleScratchRelativePath*  
Type: LPCWSTR  
  
A pointer to the path, relative to the root folder of the title scratch drive, into which to deploy the app package. For Game Core deployments, title scratch in this context refers to the shared system scratch drive, or D:\, which is accessible both via the System OS and the Game OS.


*fRemoveExtraFiles*  
Type: BOOL  
  
Specify TRUE to remove files that are already on the development console but are not part of the deployment package; otherwise, FALSE to keep them.  
  
*pCallback*  
Type: IXtfDeployCallback\*  
  
A pointer to the [IXtfDeployCallback](../../IXtfDeployCallback/ixtfdeploycallback-xtfapplication-xbox-microsoft-t.md) callback to invoke when a trackable action occurs during the deployment. Set to `nullptr` if you do not want callbacks during deployment.  
  
*pfCanceled*  
Type: BOOL\*  
  
A pointer that receives a Boolean value that indicates whether deployment was canceled.  
  
*pdwResult*  
Type: int\*  
  
A pointer that receives the HRESULT of the deployment operation. For example, if an open file handle prevents a file from being deleted, this parameter receives the HRESULT error code.  
  
*pbstrPackageFullName*  
Type: LPBSTR  
  
A pointer that receives the full name of the deployed app package, including the version number, architecture, and culture.  
  
*pbstrAumidJson*  
Type: LPBSTR  
  
A pointer that receives a JSON representation of a list of the AUMIDs associated with the app package. All AUMIDs in the list share the same `PackageFamilyName`, but have different AppIds after the exclamation mark ("!") in each AUMID.  
  
<a id="retvalSection"></a>
  
### Return value
  
Type: HRESULT  
  
Returns `S_OK` if successful; otherwise, returns an HRESULT error code.  
  
<a id="remarksSection"></a>
  
## Remarks
  
This method performs a push deployment of your title onto an Xbox dev kit for testing. Your title is deployed to the title scratch drive, in the folder specified in `pszDeployFilepath`. After the method successfully completes the deployment, your title is ready to launch. For more information about deploying app packages, see [Deploying your title to your Xbox Development Kit (NDA topic)](../../../../../../../gdk-dev/console-dev/dev-kits/concepts/deployment.md).  
  
> [!NOTE]
> This function runs synchronously.
  
This method is similar to the `xbapp deploy` command from the Application Management (xbapp.exe) tool,  included as part of the Xbox Tools Framework (XTF). For more information about the `xbapp deploy` command, see [Application Management (xbapp.exe) (NDA topic)](../../../../../../../tools/tools-console/commandlinetools/xbapp.md).  
  
<a id="remarks_output"></a>
  
### Handling LPBSTR pointers
  
For more information about handling LPBSTR pointers returned by this function, see [Allocating and Releasing Memory for a BSTR](/cpp/atl-mfc-shared/allocating-and-releasing-memory-for-a-bstr?view=vs-2019).  
  
<a id="requirementsSection"></a>
  
## Requirements
  
**Header:** xtfapplication.h  
  
**Library:** xtfapplication.lib  
  
**Supported platforms:** Windows (for Xbox console tools)  
  
<a id="seealsoSection"></a>
  
## See also
  
[IXtfApplicationClient](../ixtfapplicationclient-xtfapplication-xbox-microsoft-t.md)  
[XtfApplication](../../../xtfapplication-xbox-microsoft-n.md)  
  