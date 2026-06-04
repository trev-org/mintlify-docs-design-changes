---
title: Xbox Game Publisher Insights Frequently Asked Questions (FAQ)
description: A list of frequently answered questions on Xbox Game Publisher Insights.
services: gaming
author: sofiamarinv
ms.author: sofiamarin
ms.service: gaming
ms.topic: article
ms.date: 8/13/2024
keywords: publishing, publish, gaming, partner center, games, game creator, reports, downloads hub, reports, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Xbox Game Publisher Insights Frequently Asked Questions

This article provides comprehensive answers to frequently asked questions about various aspects of Store analytics, including reporting, scheduling, onboarding, APIs, and more. Whether you're looking for detailed instructions or quick tips, you'll find the information you need right here.

### Onboarding

**Q:** Is there any onboarding documentation for Insights in Partner Center? For example, Overview of How-To and data definitions?  
**A:**  Yes, go to [Partner Center Insights Overview](/partner-center/insights/insights-overview)

### Downloads Hub

**Q:** How can understand more about the contents of a report?  
**A:** Learn more about the reports and their contents from [Downloads Hub Datasets](/partner-center/insights/downloads-hub-datasets)


**Q:** Is there a way to schedule reports based on calendar days? (example: first Monday every month).  
**A:** Partners can schedule reports on Downloads Hub Insights on Partner Center. Downloads Hub allows the flexibility of all data sets to be scheduled as per their need. The reports will be downloaded on Partner center in the reports section and will be available for the next 7 days from the day of download for partners to access. You can learn more from [Report Scheduling in Downloads Hub](/partner-center/insights/apps-games-download-reports#reports-scheduled)

**Q:** For partners adopting the Downloads Hub APIs is there a sample app/solution that can be shared externally as a reference?  Something that a partner could plug their own IDs and keys into to accelerate onboarding timeframe.     
**A:** Yes, go to [Sample application for accessing the APIs for Apps and Games](/partner-center/insights/apps-games-sample-application) 

**Q:** What's the difference between XDP Analytics & the Windows Desktop Application Downloads Hubs?  
**A:** XPD Analytics is the download report section for the non-back compatible Xbox 360 titles' acquisition reports whereas in Downloads Hub you can find all other reports.   

### Reports

#### Acquisition Report

**Q:** What is the refresh cadence and its frequency (scheduled or instant) of the acquisition report database?   
**A:** Currently, the job to acquire Acquisition data runs twice a day: at 5 AM PST and 5 PM PST. The job typically takes between 6 to 10 hours to complete, but in certain edge cases, it can take up to 24 hours. For any real-time data acquisition related dataset, hourly aggregation can be used, providing the latest data every hour. 

**Q:** If the report is scheduled, how long will it be until it starts being generated?     
**A:** The scheduling starts generating it one hour before the actual scheduled time set by the partners to avoid any delay in receiving the report. Despite this precaution, factors such as queue traffic can still cause delays beyond the scheduled time for delivering the data.

**Q:** Is the data being upserted? And if so, what is the key on which it is being upserted?   
**A:** Yes, the data is upserted based on the described process. The upsert operation uses a unique key such as OrderID or a combination of OrderID and State to ensure that each state change is tracked correctly. This key allows the system to either update an existing record (if the state changes) or insert a new record (if it's a new transaction or state).

**Q:** Does a change in pre-order state update the original record or does it add a new record?     
**A:** A change in pre-order state would likely update the original record if the system is designed to reflect the latest state of an order. This means that the OrderID would remain the same, but the state and other relevant fields would be updated to reflect the new status, such as 'charged pre-order' or 'cancelled pre-order'.

**Q:** If records are upserted, and a record has one gross sale and that sale is refunded, will the record show purchase quantity equal 0, or will the record just disappear.    
**A:** In this scenario, if the system is designed to track net purchases, the record would not simply disappear. Instead, the original purchase record might remain, and a corresponding refund record would be added. The net purchase quantity would be calculated by taking the PurchaseQuantity from the purchase record and subtracting the RefundQuantity from the refund record. If the record is upserted with the same key, PurchaseQuantity could be updated to reflect the net quantity (which might be 0 if fully refunded).

**Q:** Is it possible to limit the timespan to less than 30 days when scheduling the report for the Purchase dataset?   
**A:** No, this is only available for executeNow = true, it's not available when scheduling a report. 

**Q:** On the Acquisitions - Customer Demographics report: If players opt-out of data sharing, will they appear in the "Unknown" category?   
**A:** Yes, if players opt-out and we were unable to determine the age group or gender, the acquisition is categorized as "Unknown". To learn more, go to [Acquisitions Report - GDK or Xbox Games Report](/partner-center/insights/acquisitions-report#app-page-views-and-conversions-by-channel)

**Q:** Is there a way to access historical acquisition data?     
**A:** Yes, acquisition data up to 4 years is available in Downloads Hub. For accessing historical data via API- please refer to [Make your first API call - Partner Center](/partner-center/insights/apps-games-make-your-first-api-call)
Report Name: Acquisition 
Dataset name in API: Acquisitions 

**Q:** In the "App Page Views & Conversions by Channel" section in the Channel Conversion dataset, what is the definition of Store Traffic vs Custom campaign?    
**A:** Store Traffic refers to the visitors who arrive at the app's page through the store itself, such as browsing or searching within the store. Custom Campaign involves traffic generated through specific marketing campaigns initiated by the developer or partner, typically using custom links or UTM parameters to track the source of the traffic. Learn more from [Acquisitions Report - GDK or Xbox Games Report](/partner-center/insights/acquisitions-report#app-page-views-and-conversions-by-channel)


**Q:** In the channels and conversions section, can partners see traffic from specific store sections?    
**A:** Yes, in the channels and conversions section, partners can see traffic from specific store sections. To find more information, go to  [Acquisitions Report - Analyze Performance](/partner-center/insights/view-acquisitions-report#campaign-performance-by-channel)


## See also

* [Apps and games overview](/partner-center/insights/apps-and-games-overview)
* [Downloads Hub Overview](/partner-center/insights/apps-games-download-reports)
* [Downloads Hub datasets](/partner-center/insights/downloads-hub-datasets)
