---
title: Migaku Vacation User's Guide
shortTitle: User's Guide
description: The Migaku Vacation Add-on allows you take vacations away from Anki reviews and take designated days off every week!
headerImage: /content-images/tools-guides/migaku-vacation/migaku-vacation-header.png
position: 1
---

# Migaku Vacation User's Guide

## Table of Contents

- [Intro](#intro)
- [Why Use Migaku Vacation?](#why-use-migaku-vacation?)
- [How Migaku Vacation Works](#how-migaku-vacation-works)
  - [How Anki Schedules Cards](#how-anki-schedules-cards)
  - [How Migaku Vacation Reschedules Cards](#how-migaku-vacation-reschedules-cards)
- [Installation](#installation)
  - [Ensuring You Have the Correct Anki Version](#ensuring-you-have-the-correct-anki-version)
  - [Installing the Add-on](#installing-the-add-on)
- [Updating](#updating)
- [Uninstalling](#uninstalling)
- [Main Features](#main-features)
  - [Setting a Study Schedule](#setting-a-study-schedule)
  - [Taking a Vacation](#taking-a-vacation)
  - [Optimizing Your Reviews](#optimizing-your-reviews)
  - [Taking a Sick Day](#taking-a-sick-day)
  - [Catching Up on Overdue Reviews](#catching-up-on-overdue-reviews)
  - [Studying Ahead](#studying-ahead)
  - [Maintaining Card Ease](#maintaining-card-ease)
- [Vacation Settings](#vacation-settings)
- [Confirmed Incompatible Add-ons](#confirmed-incompatible-add-ons)

## Intro

We at Migaku, feel that the SRS should be flexible and prioritize the experience of the user over their reviews. The SRS is ultimately a tool to help you to learn, as such it should take into account the realities of the different individual situations that different learners of that tool are in.

Migaku Vacation seeks to largely resolve these issues, and to help every SRS user make their SRS a more sustainable and fun part of their lives. It does this by allowing you to:

1. Set up a Study Schedule (ex: take the weekends off)
1. Take vacations away from the SRS
1. Optimize and smooth daily review counts
1. Taking a "Sick Day" and pushing all reviews one day into the future
1. Catching up slowly on overdue reviews using the “Catch-Up” feature
1. Studying cards that will be due in the future using the “Get-Ahead” feature
1. Maintain Card Ease (Eliminates card scheduling penalties)

Please make sure to also checkout the <internal-link to="/tools-guides/migaku-flexible-grading/guide">Migaku Flexible Grading Add-on</internal-link>. It together with the Migaku Vacation add-on should make your SRS regiment a much more efficient and enjoyable pursuit in your life.

**We hope you find this add-on helpful! If you are in a position where you are financially able please consider <a href="https://www.patreon.com/Migaku" target="_blank">supporting the Migaku Team</a>! Our software projects take thousands of hours to build, update, and maintain and we are only able to continue our work thanks to our supporters! We are deeply and humbly grateful to everyone who decides to support Migaku!**

## Why Use Migaku Vacation?

![Smooth Review Count with Weekends and Vacation Graph](/content-images/tools-guides/migaku-vacation/smooth-review-count-weekends-vacation.png)

Using a Spaced Repetition System like Anki is a fantastic way to ensure that you are not forgetting what you have learned while you're learning something new. We believe that studying in an SRS allows you to much more reliably learn the necessary vocabulary you will need to reach the highest levels of foreign language proficiency. However, there are some major issues found in the majority of today's popular SRS's, including Anki.

The major flaws include:

1. SRS's are not flexible. They expect you to do your reviews 7 days per week, every week without fail.
   - There is plenty of evidence that even the most consistent learners who use an SRS will fall behind on occassion, and that's even more true for the majority of us who have busy lives and other priorities. We don't believe that the SRS, which is supposed to be a study aid that helps us, should punish us for attending to other responsibilities in our lives. Migaku Vacation allows you to [set a study schedule](#setting-a-study-schedule) so that you, and not the tool is in control of how many days per week you'd like to study.
1. SRS's don't intelligently allow the learner to take a break away from it.
   - We all know that even for the hobbies and interests in our lives that are most dear to us, that at times we just want some time away. Maybe we want to go visit family or friends for a couple of week, or even go on week-long getaway and relax at the beach with your significant other. Well, the SRS is designed in such a way that reviews are prioritized over the learner. We feel this is completely ridiculous, and have designed a feature that allows you to take a week or even a month off from the SRS off if you'd like. Migaku Vacation itself will do what it can to reduce the harm caused to your retention rate while you're away as well, so you can enjoy time off while resting assured that your reviews will be scheduled in the best possible way to optimize your retention of what you've studied.
1. SRS's don't optimize you review counts each day.
   - Migaku Vacation will keep your review counts as even as possible, ensuring that you can better predict how long your daily SRS study time will take and greatly reducing the chance that you fall behind.
1. SRS's don't allow you to take an unscheduled day off.
   - Some times we get sick. Migaku Vacation doesn't believe that the tools you use should work with you in these situations so Migaku Vacation includes a [Sick Day Feature](#taking-a-sick-day) that allows you to take an unscheduled day off without having to stress about your SRS reviews piling up.
1. SRS's have no mechanism to help you deal with overdue cards.
   - SRS's will not actually separate the cards that you've fallen behind on from the cards that are due. This can lead to you spending your time reviewing cards that are overdue which you may have already forgotten, while not having time to review the cards that are actually currently due, this will cause those cards to also fall behind causing further harm to your retention. With Migaku Vacation's [Catch Up Feature](#catching-up-on-overdue-reviews), the add-on keeps track of which cards are overdue and allows you to slowly catch up on them over a chosen number of days, while most importantly allowing you to review the reviews that are currently coming due, ensuring that you don't fall behind and maintain a good retention rate on them.
1. SRS's don't allow you to study ahead when you know you're going to be busy.
   - While studying ahead will somewhat affect the retention rate of those cards you study a bit early, the effect is actually minimal. Studying some cards early is infinitely preferable to not being able to study them at all on those days you have other priorities, and then falling behind. Migaku Vacation's [Get Ahead](#studying-ahead) feature allows you to study early when you know you're not going to have time in the upcoming days.
1. Anki in particular, <a href="https://readbroca.com/anki/ease-hell/" target="_blank">applies permanent penalties to cards</a> that greatly affects how often those cards come due.
   - This can lead to greatly, and needlessly inflated review counts for the user, increasing their likelihood of falling behind and feeling negatively towards their SRS reviews. While we at Migaku, feel that a very refined system that was scientifically proven to help the overall retention rate of individual cards might make sense, the way penalties are currently applied in Anki is very far away from that ideal, and proveably leads to bad outcomes. As a result we have added a [Maintain Card Ease Feature](#maintaining-card-ease) to Migaku Vacation, that eliminates such penalties which we recommend that you enable.

Personally experiencing these difficulties with Anki is what inspired us to build Migaku Vacation, and what inspired us to continue building Migaku SRS. Migaku SRS is our take on what an SRS that doesn't forget about the human element should be, and will be coming soon. In the meanwhile we recommend that you use Migaku Vacation to alleviate some of the difficulties with using Anki.

We highly recommend that you reality test your SRS study regiment and if you find that you regularly don't meet your goals or consistently fall behind on your reviews, then it's likely time to [set a more conservative SRS schedule](#setting-a-study-schedule), that allows you to take a day or even a few days off during the week until you find a sustainable SRSing schedule that you can consistently meet.

**The best part of Migaku Vacation is that it does all of this while operating within Anki's default "fuzz factor" _(the range of possible due dates given to a card when it is studied)_. You can find out more about this in the next section; [How Migaku Vacation Works](#how-migaku-vacation-works).**

## How Migaku Vacation Works

The [Main Features](#main-features) section of this guide will only go over how to actually use the features of Migaku Vacation and will not go into detail about how it is that they work. This section aims to be a rough breakdown of the principles by which Migaku Vacation operates and ensures that you maintain the highest possible retention rates while allowing you to finally take control of your SRS study.

### How Anki Schedules Cards

Anki basically follows these steps when it produces the next due date for a card:

1. It performs a calculation using the card's current statistics, to find the next potential interval.
   - An interval is the number of days until a card becomes due again.
   - It namely uses the card's current interval, it's penalty/bonus value (<a href="https://readbroca.com/anki/ease-hell/" target="_blank">Ease Value</a>), and how the question was answered ("Again", "Hard", "Good", or "Easy").
     - Remember that <internal-link to="/tools-guides/anki/guide#reviewing-cards">we recommend only answering question with either "Again" or "Good"</internal-link> to avoid any permanent penalties affecting your cards.  
       _\* If you would like to know more about the calculation Anki does to arrive at the initial due date that it then applies a fuzz factor to in order to create a due date range, then please view this reference material about <internal-link to="/tools-guides/anki/guide#anki's-algorithm">Anki's Algorithm</internal-link>._
1. Anki then applies a <a href="https://github.com/ankitects/anki/blob/b66bedbc9fe13bb3c5193771ed600cba819875a2/pylib/anki/schedv2.py#L1004" target="_blank">"fuzz factor"</a> to this interval, that depends on the how large that interval is, creating an interval range.
   - For example, if the interval is `25` the interval range will be `22-28`, a fuzz factor of `3` will be applied to the interval to create the interval range.
1. Anki then randomly selects a new final interval for the card that falls within that interval range.
   - For example, with the interval range of `22-28` Anki has an equal chance of selecting `22` as it does `28`, both are seen as equally valid due dates.
1. Finally Anki adds this final interval value to the previous due date to arrive at the new due date, then saves the new values to the card.

### How Migaku Vacation Reschedules Cards

![Smooth Review Count Graph Without Days Off or Vacations](/content-images/tools-guides/migaku-vacation/smooth-review-count.png)

As you can see by reading the calculation above, Anki works randomly within a range of possible due dates for each card. Knowing this what Migaku Vacation does whenever the [Optimize Schedule](#optimizing-your-reviews) process is run _(and optimization is enabled)_ is to:

1. Schedule each card while keeping track of how many cards are going to be due on any given day.
   - If a day has been scheduled as a Day Off in your [Study Schedule](#setting-a-study-schedule) or has been [designated as a Vacation Day](#taking-a-vacation) then that day is seen as an invalid due-date and cards cannot be scheduled on those days.
1. Migaku Vacation then split the due date range for each card into thirds and checks for valid due dates with the minimum number of reviews within each of those thirds.
   - It checks in this order `the middle third -> the ending third -> the beginning third`. This ensures that most cards are generally scheduled towards the upper 2 thirds of their due date range leading to less overall reviews.
   - The date within their due date range found with the lowest possible due cards is selected. If there is a tie, then the order mentioned above decides which due date is chosen. This leads to the a very little review count deviation.
1. If every potential due date within a card's due date range falls outside of valid due dates _(ie, they have all been marked as [Days Off](#setting-a-study-schedule) or [Vacation Days)](#taking-a-vacation)_, three days are added to both ends of the due date range until a valid due date is found.
   - This may have an effect on the retention rate of these cards, but the effect should still be minimal because as stated before the due date range's given to cards are quite fluid to begin with.
     - The retention rate hit you will take will be larger the longer the Vacation that you schedule is, particularly if it was not scheduled far enough in advance. Reference the section about [Taking a Vacation](#taking-a-vacation) for more information.

_\* A special note about <a href="https://docs.ankiweb.net/#/stats?id=types-of-cards" target="_blank">learning cards</a> or <a href="https://docs.ankiweb.net/#/stats?id=types-of-cards" target="_blank">cards that you have failed</a>, these cards are treated differently than your regular reviews. Anki by default is deterministic for these cards' due dates, and an interval range is not applied to them. As a result, Migaku Vacation also honors this behavior and will not adjust the due dates of <a href="https://docs.ankiweb.net/#/stats?id=types-of-cards" target="_blank">learning cards</a> or <a href="https://docs.ankiweb.net/#/stats?id=types-of-cards" target="_blank">cards that you have failed</a> unless they are due on an invalid due date, in which case Migaku Vacation will apply the same fuzz factor as Anki does to reviews to find it a valid next due date._

## Installation

If you have not yet installed Anki and need help then please <internal-link to="/tools-guides/anki/guide#installation">click here</internal-link> to find out how to install an Anki version compatible with the Migaku Toolset.

**If you are new to Anki, we suggest that you read our <internal-link to="/tools-guides/anki/guide">Anki Quick Start Guide</internal-link> which covers all of the fundamentals of Anki from the perspective of a language learner.**

### Ensuring You Have the Correct Anki Version

The current recommended version of Anki for those using the Migaku Add-on series is <internal-link to="/tools-guides/anki/guide#installation">Anki 2.1.35</internal-link>.

_\* A legacy version of the Migaku Add-on series is also available for Anki 2.1.22-23. But those versions are no longer updated or maintained, and <internal-link to="/tools-guides/migaku-vacation/support">support</internal-link> cannot be offered for them. If you wish to receive <internal-link to="/tools-guides/migaku-vacation/support">support</internal-link> then please ensure you are using the recommended version of Anki._

If you have not yet downloaded Anki, please <internal-link to="/tools-guides/anki/guide#installation">visit our Anki download page</internal-link> to ensure you download the correct version of Anki for your operating system.

<!--Checking Your Anki Version-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/checking-anki-version.mp4"></migaku-video>

You can check your Anki version on Windows by:

1. Navigating to `Help->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

You can check your Anki version on Mac by:

1. Navigating to `Anki->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

### Installing the Add-on

Migaku Vacation can be installed the same way as any other Anki add-on.

You do this by pasting Migaku Vacation's installation Code into Anki's _"Install Add-on"_ window. You can access this window by navigating _`Tools->Add-ons->Get Add-on's`_ from Anki's top menu.

Migaku Vacation's installation code is `605638174`.

<!--Migaku Vacation Add-on Installation-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/vacation-addon-installation.mp4"></migaku-video>

**### WARNING: Migaku Vacation is not compatible with other add-ons that affect cards scheduling, <a href="https://readbroca.com/anki/ease-hell/" target="_blank">Ease</a>, or any other statistic that may have an impact on scheduling. ###**
**### Using Migaku Vacation with such incompatible add-ons may lead to your Anki card's becoming incorrectly schedule. Do not use any add-on that you feel may edit your card's statistics along with Migaku Vacation. ###**
**### [Add-ons that have been confirmed to be incompatible can be viewed here.](#confirmed-incompatible-add-ons) ###**

### Updating

<!--Migaku Vacation Update-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/vacation-addon-update.mp4"></migaku-video>

To update Migaku Vacation:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Click the "Check for Updates" button.
1. If an update is found you will be notified and asked if you would like to update. Confirm the update.
1. Restart Anki to begin using the update.

### Uninstalling

<!--Migaku Vacation Uninstall-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/vacation-addon-uninstall.mp4"></migaku-video>

To uninstall Migaku Vacation:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Select "Migaku Vacation".
1. Click "Delete"
1. Restart Anki.

## Main Features

Migaku Vacation aims to improve the Anki user experience by considering the human element when it comes to the SRS. Migaku Vacation adds features that tackles some of the most common issues we all have with studying in an SRS.

### Setting a Study Schedule

<!--Setting a Mon-Fri Study Schedule and Showing the Graph Afterwards-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/set-mon-fri-show-graph.mp4"></migaku-video>

Setting a Study Schedule is easy! In order to set your study schedule for a given deck:

1. Click the icon gear icon to the right side of a deck's name then click "Options".
   - This will open the "Deck Options" page.
1. On this window click the "Reviews" tab.
1. In the "Reviews" tab, your will see a "Review Schedule" header with a group of checkboxes for each day of the week. Uncheck any days you want to take off.
1. Press the ok button to save the options.
1. Click the `Migaku` drop-down menu in Anki's top menu bar and click [Optimize Schedule](#optimizing-your-reviews) and the schedule changes will be applied.

It is important to note that you should run [Optimize Schedule](#optimizing-your-reviews) once per day in order to keep your Anki Collection optimized. You can enable this to happen automatically in the [Vacation Settings Window](#vacation-settings). If you review on AnkiWeb or on Anki's mobile apps, it is important to note that your Collection will not be optimized. So even if you do not do your reviews on your computer, try and access the computer version to [optimize your Anki Collection](#optimizing-your-reviews) at least once a day when possible. If you are not able to do so every day then do so as often as you are able. We are already working on a mobile solution that will make this unnecessary in the near future.

**_Study Schedules actually apply to an <internal-link to="/tools-guides/anki/guide#">Options Group</internal-link>. Several different decks may share an <internal-link to="/tools-guides/anki/guide#optimizing-your-anki-settings">Option Group</internal-link>, so please be sure you click the hypelink to find out more about how <internal-link to="/tools-guides/anki/guide#optimizing-your-anki-settings">Options Group</internal-link> if you aren't yet familiar._**

### Taking a Vacation

<!--Scheduling a New Vacation and Seeing the Graph-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/scheduling-a-new-vacation.mp4"></migaku-video>

To schedule a new vacation:

1. Click the `Migaku` drop-down menu in Anki's top menu bar and click "Vacation Scheduler".
   - This will open the Vacation Browser Window, where you view, delete, and edit existing vacations, and create new ones.
1. Click the "Schedule a New Vacation" button at the bottom of the window.
   - This will open the Vacation Scheduler Window.
1. Name your Vacation.
1. Select a Start Date and End Date.
   - The End Date is also considered a vacation day. Your Reviews will begin the day after your End Date.
1. Select the decks that this vacation will apply to.
1. Click the save button.
1. Click the `Migaku` drop-down menu in Anki's top menu bar and click [Optimize Schedule](#optimizing-your-reviews) and the schedule changes will be applied.

_You can edit an existing vacation by clicking the "Edit" button next to a vacation in the Vacation Browser Window"._

**It is recommended that you schedule vacations as far out as possible from the date of that vacation in order to avoid cards piling up. Cards must have enough days to be spread out over in order to avoid this happening. If you don't leave enough days in between the day you schedule a vacation, and the day it begins, cards will be spread out over a lower number of days leading to a greater review count.**

### Optimizing Your Reviews

Whenever you make a change to your [Study Schedule](#setting-a-study-schedule) or [schedule a new vacation](#taking-a-vacation) you will need to reoptimize your Anki Collection's scheduling.

<!--Smoothing Reviews by Optimizing Your Schedule Shown on Graph Before and After-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/before-and-after-smoothing.mp4"></migaku-video>

You do this by:

1. Clicking the `Migaku` drop-down menu in Anki's top menu bar.
1. Clicking [Optimize Schedule](#optimizing-your-reviews) and the schedule changes will be applied.

Optimizing your Anki Collection in this way will allow you to take time off as you'd like, but as mentioned earlier optimizing your schedule also smooths out your review counts. If you want to know more about how that works please check the [How Migaku Vacation Works](#how-migaku-vacation-works) section of this guide. When you optimize you Anki Collection there are actually a few different mode of optimization.

1. Deck Level (The Default)
   - When Deck Level optimization is selected, the add-on will ensure that each of your decks has a smooth review count each day.
1. Profile Level
   - When Profile Level is checked, the add-on will schedule your reviews in such a way that you have the lowest possible number of reviews each day. This may lead to some of your deck's having very uneven review counts on a daily basis, but your total review count for your profile will be consistent.
1. Off
   - Rescheduling of cards will only occur when they land on an Day Off or on a scheduled vacation day. Since no other optimization or schedule smoothing is happening, this will to cards piling up in an extreme manner around your Days Off or vacation days. We recommend not use this option and to use some level of optimization when using Migaku Vacation.

You can change the mode that is used in the [Vacation Settings Window](#vacation-settings).

_\* If you review on AnkiWeb or on Anki's mobile apps, it is important to note that your Collection will not be optimized. So even if you do not do your reviews on your computer, try and access the computer version to [optimize your Anki Collection](#optimizing-your-reviews) at least once a day when possible. If you are not able to do so every day then do so as often as you are able. We are already working on a mobile solution that will make this unnecessary in the near future._

### Taking a Sick Day

Taking a Sick Day allows you to push back all of your reviews in your entire Collection by one day, and then reoptimizes those reviews ensuring that they adhere to your [Study Schedile](#setting-a-study-schedule), and [Vacation Schedule](#taking-a-vacation).
_Because reviews will be optimized when you take a sick day this can lead to slightly different review counts the next day but this is normal and expected behavior._

<!--Sick Day All Decks-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/sick-day-all.mp4"></migaku-video>

You can take a sick day for all of your decks by:

1. Clicking the `Migaku` drop-down menu in Anki's top menu bar.
1. Clicking "Sick Day (All Decks)".
1. Confirm by pressing "Yes" in the prompt.

<!--Sick Day One Deck-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/sick-day-one.mp4"></migaku-video>

You can take a sick day for a particular deck by:

1. Clicking the name of a Deck on the Main Anki Screen.
1. Clicking "Sick Day" at the bottom of the Deck Preview Screen.
1. Confirm by pressing "Yes" in the prompt.

A word of warning about Sick Days, this is the least optimal process that can be run with Migaku Vacation (because it will arbitrarily add a day to the due date of all reviews). If not used too often this is likely to not cause any major issues because as we talked about in the [How Migaku Vacation Works](#how-migaku-vacation-works) section, Anki's scheduling has a high degree of randomness to it by default. That being said, if you find yourself relying on this feature a lot we would advise that you consider [adjusting your Study Schedule](#setting-a-study-schedule) until you find a sustainable SRS regiment you can regularly meet. The [Study Schedule](#setting-a-study-schedule) functionality works with less potential retention rate side effects than the Sick Day feature does, and is the recommended way to regularly take days off.

**Please note that this feature is not meant to be used to catch up on overdue reviews. For example, if you didn't do your reviews yesterday or today, and then use the Sick Day Feature, today's reviews will be due tomorrow and yesterday's reviews will be due today. This is intended behavior. If you would like help catching up on overdue reviews please reference the [Catching Up on Overdue Reviews](#catching-up-on-overdue-reviews) section of this guide.**

### Catching Up on Overdue Reviews

When you have cards that are overdue, you can use Migaku Vacation to "Catch Up" on them. This will schedule the overdue cards evenly out over a chosen number of days into the future. The cards will also be ordered in such a way that you will be shown the cards with the smallest intervals first, because they are more likely than not the easier to forget cards.

<!--Catch Up All Decks-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/catch-up-all.mp4"></migaku-video>

You can set a Catch Up Schedule for all of your decks at once by:

1. Clicking the `Migaku` drop-down menu in Anki's top menu bar.
1. Clicking "Catch Up (All Decks)".
1. Choose the number of days you would like to schedule you reviews over.
1. Check off whether you would like to schedule cards starting today.
   - By default cards will be scheduled starting the next day.
1. Press "Confirm",

<!--Catch Up One Deck-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/catch-up-one.mp4"></migaku-video>

You can set a Catch Up Schedule for a particular deck by:

1. Clicking the name of a Deck on the Main Anki Screen.
1. Clicking "Catch Up" at the bottom of the Deck Preview Screen.
1. Choose the number of days you would like to schedule you reviews over.
1. Check off whether you would like to schedule cards starting today.
   - By default cards will be scheduled starting the next day.
1. Press "Confirm",

_\* Migaku Vacation will save a list of cards that are being caught up, in you Anki Collection's media directory. This list is tells Migaku Vacation to ignore these cards during optimization and keeps their due dates in place. This list will automatically be synced to other computers when you sync your Anki Collection._

### Studying Ahead

If you know that you will not have time to do your Anki reviews on a particular day or on some particular days, you can use the "Get Ahead" feature to study in advance, some of the cards that will be due in the future.

<!--Get Ahead-->

<migaku-video controls src="/content-images/tools-guides/migaku-vacation/get-ahead.mp4"></migaku-video>

You must use the "Get Ahead" for one particular deck at a time. You can do this by:

1. Clicking the name of a Deck on the Main Anki Screen.
1. Clicking "Get Ahead" at the bottom of the Deck Preview Screen.
1. The prompt will show you how many valid cards are due and in how many days those cards are due.
1. Select how many of those possible cards you would like to review and press "Confirm".
1. The cards will then show up in your Review count and can be reviewed as normal.

_\* The cards you study through "Get Ahead" must have an interval greater than one day. Meaning they must not be cards that were studied the day you are using the Get Ahead feature. Those cards will be ignored but you will still be able to review all cards with an interval greater than one day._

**If you finish all of the valid review when using the "Get Ahead" feature, it will give you the option of to study the next day's cards as well. You can study up to 14 days into the future using the "Get Ahead" feature, although that is not recommended.**

### Maintaining Card Ease

Migaku Vacation has the ability to maintain your Anki card's Ease (penalty/bonus) values. You can read more about why this might be desireable in <internal-link to="/tools-guides/anki/guide#anki's-algorithm">this section of our Anki Guide</internal-link>. This feature is not enabled by default however and must be enabled through the [Vacation Settings Window](#vacation-settings)

When enabled any penalties or bonuses will automatically be reset when [optimizing your reviews](#optimizing-your-reviews).

## Vacation Settings

![Vacation Settings Window](/content-images/tools-guides/migaku-vacation/vacation-settings.png)

There are three settings that can be adjusted on the Migaku Vacation Settings Window:

1. Run schedule optimization once daily on profile load.
   - When checked off, the add-on will automatically optimize your schedule for you the first time you open Anki each day.
1. Balance daily review count.
   - There are three options that are selectable:
     1. Off
     1. Deck Level (The Default)
     1. Profile Level
   - You can find more about what each of these does in [Optimizing Your Reviews Section](#optimizing-your-reviews).
1. Maintain Ease at 250%.
   - When checked off this will [maintain the Ease (penalties/bonuses)](#maintaining-card-ease) of your cards at the default value of `250%`.
   - You can read more about why this might be desireable in <internal-link to="/tools-guides/anki/guide#anki's-algorithm">this section of our Anki Guide</internal-link>.

## Confirmed Incompatible Add-ons

The following add-ons have been confirmed as incompatible with Migaku Vacation:

1. <a href="https://ankiweb.net/shared/info/819023663" target="_blank">RefoldEase</a>
