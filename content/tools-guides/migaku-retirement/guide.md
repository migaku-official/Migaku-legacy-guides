---
title: Migaku Retirement User's Guide
shortTitle: User's Guide
description: The Migaku Retirement Add-on will automatically retire Anki cards that you have learned well.
headerImage: /content-images/tools-guides/migaku-retirement/migaku-retirement-header.png
position: 1
---

# Migaku Retirement User's Guide

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
  - [Ensuring You Have the Correct Anki Version](#ensuring-you-have-the-correct-anki-version)
  - [Installing the Add-on](#installing-the-add-on)
- [Updating](#updating)
- [Uninstalling](#uninstalling)
- [Main Features](#main-features)
  - [Setting a Retiring Interval](#setting-a-retiring-interval)
  - [Mass Retirement](#mass-retirement)
- [Retirement Settings](#retirement-settings)

## Intro

Migaku Retirement adds the ability to automatically [Retire Your Anki Cards] once they reach an interval of a certain length until their next due date. We believe that when it comes to language learning there is no need to continue reviewing your Anki cards once you pass an interval of one year or so, (or even shorter intervals in the case of more common words). This is because if a learner is already immersing regularly then they will almost surely see a given word again within a year's time and be able to review that word through their actual immersion. If for some reason you don't see some of those words within an entire year during your immersion then it's very likely not a word worth worrying about since it doesn't come up in the actual content you enjoy to spend time with in your target language. We at Migaku believe in building a relationship with the content in the language that you enjoy and discourage attempting to artificially remember vocabulary through Anki that you neither use nor ever come in contact with. It's much better to simply reference a dictionary when needed for those rare words, you will be surprised how many of them you will permanently pick up through immersion alone if they're found in content you regularly immerse with.

_If there are some cards that you feel shouldn't be retired (for example, if they will be on a test you're studying towards), then you can simply place them in a separate deck and not [set a Retiring Interval] for that deck's <internal-link to="/tools-guides/anki/guide#optimizing-your-anki-settings">Option Group</internal-link>._

**We hope you find this add-on helpful! If you are in a position where you are financially able please consider <a href="https://www.patreon.com/Migaku" target="_blank">supporting the Migaku Team</a>! Our software projects take thousands of hours to build, update, and maintain and we are only able to continue our work thanks to our supporters! We are deeply and humbly grateful to everyone who decides to support Migaku!**

## Installation

If you have not yet installed Anki and need help then please <internal-link to="/tools-guides/anki/guide#installation">click here</internal-link> to find out how to install an Anki version compatible with the Migaku Toolset.

**If you are new to Anki, we suggest you to read our <internal-link to="/tools-guides/anki/guide">Anki Quick Start Guide</internal-link> which covers all of the fundamentals of Anki from the perspective of a language learner.**

### Ensuring You Have the Correct Anki Version

The current recommended version of Anki for those using the Migaku Add-on series is <internal-link to="/tools-guides/anki/guide#installation">Anki 2.1.35</internal-link>.

_\* A legacy version of the Migaku Add-on series is also available for Anki 2.1.22-23. But those versions are no longer updated or maintained, and <internal-link to="/tools-guides/migaku-retirement/support">support</internal-link> cannot be offered for them. If you wish to receive <internal-link to="/tools-guides/migaku-retirement/support">support</internal-link> then please ensure you are using the recommended version of Anki._

If you have not yet downloaded Anki, please <internal-link to="/tools-guides/anki/guide#installation">visit our Anki download page</internal-link> to ensure you download the correct version of Anki for your operating system.

<!--Checking Your Anki Version-->

<migaku-video controls src="/content-images/tools-guides/migaku-retirement/checking-anki-version.mp4"></migaku-video>

You can check your Anki version on Windows by:

1. Navigating to `Help->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

You can check your Anki version on Mac by:

1. Navigating to `Anki->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

### Installing the Add-on

Migaku Retirement can be installed the same way as any other Anki add-on.

You do this by pasting Migaku Retirement's installation Code into Anki's _"Install Add-on"_ window. You can access this window by navigating _`Tools->Add-ons->Get Add-on's`_ from Anki's top menu.

Migaku Retirement's installation code is `1666520655`.

<!--Migaku Retirement Add-on Installation-->

<migaku-video controls src="/content-images/tools-guides/migaku-retirement/retirement-addon-installation.mp4"></migaku-video>

### Updating

<!--Migaku Retirement Update-->

<migaku-video controls src="/content-images/tools-guides/migaku-retirement/retirement-addon-update.mp4"></migaku-video>

To update Migaku Retirement:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Click the "Check for Updates" button.
1. If an update is found you will be notified and asked if you would like to update. Confirm the update.
1. Restart Anki to begin using the update.

### Uninstalling

<!--Migaku Retirement Uninstall-->

<migaku-video controls src="/content-images/tools-guides/migaku-retirement/retirement-addon-uninstall.mp4"></migaku-video>

To uninstall Migaku Retirement:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Select "Migaku Retirement".
1. Click "Delete"
1. Restart Anki.

## Main Features

Migaku Retirement is a very light weight add-on with just two major features:

1. [Setting a Retiring Interval](#setting-a-retiring-interval)
1. [Mass Retirement](#mass-retirement)

### Setting a Retiring Interval

<!--Setting a Retiring Interval-->

<migaku-video controls src="/content-images/tools-guides/migaku-retirement/setting-retiring-interval.mp4"></migaku-video>

Setting a retiring interval is easy. To do:

1. Click the icon gear icon to the right side of a deck's name then click "Options".
   - This will open the "Deck Options" page.
1. On this window click the "Reviews" tab.
1. In the "Reviews" tab, your will see a "Card Retirement" header with several settings below it.
1. First you should set your "Retiring Interval".
   - This value should be the number of days that an Anki's interval needs to grow to before it is retired. `365` would mean 365 days, or 1 year for example.
1. Then your must select which "Retirement actions" will happen when a card reaches the Retiring Inverval:
   - Delete - Deletes the card.
   - Suspend - (Default) Will <internal-link to="/tools-guides/anki/guide#suspending-and-deleting-cards">suspend</internal-link> the card.
   - Tag - (Default) Will tag cards with a [Retirement Tag](#retirement-settings) _(the default tag is "Retired" but can be changed in the settings)_.
   - Move - Will move cards to a [Retirement Deck](#retirement-settings) which will automatically be created to house retired cards.
1. Click the `Migaku` drop-down menu in Anki's top menu bar and click [Optimize Schedule](#optimizing-your-reviews) and the schedule changes will be applied.

Once you have set a retiring interval, cards will automatically be retired as you review them if their interval reaches the Retiring Interval that has been set for them. There is an option to enable a notification to appear when this happens in the [Retirement Settings](#retirement-settings). These notifications are disabled by default however, because they may lead you to second guess a card's retirement and slow down your review speed. We recommend leaving the notifications off.

<!--Retiring Cards During Reviews With Notification-->

<migaku-video controls src="/content-images/tools-guides/migaku-retirement/retiring-during-reviews.mp4"></migaku-video>

_Card Retirement during reviews when [Real-Time Notifications](#retirement-settings) are enabled, which is not recommended._

**Remember that these settings apply to the deck's <internal-link to="/tools-guides/anki/guide#optimizing-your-anki-settings">Option Group</internal-link>, and that several decks might share a group. Be sure to <internal-link to="/tools-guides/anki/guide#creating-an-option-group">create a separate group</internal-link> for separate decks if you wish them to not share the same Retiring Interval.**

### Mass Retirement

Mass Retirement is an option that will check through your deck and retire all of the cards in your Anki Collection that have already reached the Retiring Intervals that have been set for their deck's Option Group.

You would do this:

1. The first time you install the add-on to retire all cards that have already reached their Retiring Intervals.
1. After studying on AnkiWeb, Anki Mobile, or AnkiDroid to ensure all cards reviewed on different platforms are properly retired.

<!--Running Mass Retirement-->

<migaku-video controls src="/content-images/tools-guides/migaku-retirement/running-mass-retirement.mp4"></migaku-video>

You can run "Mass Retirement" by:

1. Clicking "Migaku" in Anki's top menu bar.
1. Clicking "Run Mass Retirement".
1. Once the Mass Retirement process finishes running you will see a message about how many cards were retired.

_There is also an option in the [Retirement Settings](#retirement-settings) to run Mass Retirement on Anki Startup._

## Retirement Settings

![Retirement Settings](/content-images/tools-guides/migaku-retirement/retirement-settings.png)
To open the Retirement Settings:

1. Click "Migaku" in Anki's top menu bar.
1. Click "Retirement Settings".

There are several options you can change here:

- Retirement Deck Name - The name of your retirement deck.
- Retirement Tag - The name of the tag that will be added to your retired cards.
- Run Mass Retirement - Whether or not to run [Mass Retirement](#mass-retirement) automatically.
- Real-Time Notification - Whether or not to display a notification when a card is retired during reviews.
- Mass Retirement Notifications - Whether or not to display the number of cards that were retired during [Mass Retirement](#mass-retirement).
