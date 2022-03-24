---
title: Migaku Dictionary Quick Start Guide
shortTitle: Quick Start Guide
description: Migaku Dictionary is an add-on for Anki that dramatically simplifies and expedites the use of Anki for language learning.
headerImage: /content-images/tools-guides/migaku-dictionary/migaku-dictionary-header.png
position: 1
---

# Migaku Dictionary Quick Start Guide

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
  - [Ensuring the Correct Anki Version](#ensuring-you-have-the-correct-anki-version)
  - [Installing the Add-on](#installing-the-add-on)
  - [Downloading Target Language Dictionaries](#downloading-target-language-dictionaries)
- [Settings](#settings)
  - [Dictionary Group](#dictionary-group)
  - [Export Templates](#export-templates)
  - [Sending Definitions to Your Cards](#sending-definitions-to-your-cards)
- [Hotkey And Window Overview](#hotkey-and-window-overview)
- [Learning More](#learning-more)

## Intro

Migaku Dictionary is an add-on for Anki that dramatically simplifies and expedites the use of Anki for language learning. There are global hotkeys for instant look-ups. It can automatically deconjugate words, tag definitions with their frequency, send definitions from the dictionary to a card in a single click, create cards on-the-fly, listen to audio recordings of words, export multiple definitions, and more.

**We hope you find this add-on helpful! If you are in a position where you are financially able please consider <a href="https://www.patreon.com/Migaku" target="_blank">supporting the Migaku Team</a>! Our software projects take thousands of hours to build, update, and maintain and we are only able to continue our work thanks to our supporters! We are deeply and humbly grateful to everyone who decides to support Migaku!**

## Installation

If you have not yet installed Anki and need help then please <internal-link to="/tools-guides/anki/guide#installation">click here</internal-link> to find out how to install an Anki version compatible with the Migaku Toolset.

**If you are new to Anki, we suggest you to read our <internal-link to="/tools-guides/anki/guide">Migaku Anki Guide for Immersion Learners</internal-link> which covers all of the fundamentals of Anki from the perspective of a language learner.**

### Ensuring You Have the Correct Anki Version

The current recommended version of Anki for those using the Migaku Add-on series is <internal-link to="/tools-guides/anki/guide#installation">Anki 2.1.35</internal-link>.

_\* A legacy version of the <internal-link to="/tools-guides">Migaku Add-on Series</internal-link> is also available for Anki 2.1.22-23. But those versions are no longer updated or maintained, <internal-link to="/tools-guides/migaku-dictionary/support">support</internal-link> cannot be offered for them. If you wish to receive <internal-link to="/tools-guides/migaku-dictionary/support">support</internal-link> then please ensure you are using the recommended version of Anki._

If you have not yet downloaded Anki, please <internal-link to="/tools-guides/anki/guide#installation">visit our Anki Download Page</internal-link> to ensure that you download the correct version for your operating system.

<!--Checking Your Anki Version-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/checking-anki-version.mp4"></migaku-video>

You can check your Anki version on Windows by:

1. Navigating to `Help->About...` from Anki's Top Menu Bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

You can check your Anki version on Mac by:

1. Navigating to `Anki->About...` from Anki's Top Menu Bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

### Installing the Add-on

Migaku Dictionary can be installed the same way as any other Anki add-on.

1. Open Anki
1. Go to `Tools`
1. Click on `Add-ons`
1. In the following window, click `Get Add-ons...`
1. Post the code `1655992655` into the code field and press `OK`
1. Restart Anki

<!--Migaku Dictionary Add-on Installation-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/installing-the-addon.mp4"></migaku-video>

### Downloading Target Language Dictionaries

Using the our Installation Wizard it is possible to install open-source dictionaries from our dictionary server (or from another server that is hosting dictionaries of the correct format).

To install dictionaries using our Installation Wizard:

1. From the Dictionaries Tab of the Migaku Settings Window, click the `Install Languages in Wizard` button.
   - This will open the Installation Wizard.
1. The first page of the wizard allows you to select which server you would like to use. The default value is to use our dictionary server. You can change this value if you would like to use an alternate server.
   - You can press the Default button at any time to revert your selection to our default dictionary server.
1. Press the `Next` button once you have selected your dictionary server.
   - This will advance the wizard to the dictionary selection screen.
1. On this screen you can select dictionaries from a `Target Language -> Translation Language`.
   - For example if you are an English speaker starting to learn Japanese your would find Japanese on the list of languages and select it, then in the list of languages that would appear below Japanese you would select English.
   - To select a monolingual dictionary (when available) you would select your target language twice.
1. After selecting a Target Language and a Translation Language then you can click the checkboxes of all of the dictionaries you would like to install for that given language pair.
1. After you have made all of your selections, you can select at the bottom of your screen whether or not you would like to install [Frequency Information](#frequency-lists) and [Deconjugation Support](#deconjugation-support) for your chosen Target Language.
   - Please note however that Frequency Data and Deconjugation Support is not currently available for all languages, we plan to continue to increase support to other languages in the future.
1. Once you have made your selections and selected whether you would like to install the conjugation data then click the `Next >` button.
   - The wizard will then advance to the confirmation screen.
1. On the confirmation screen you can review what dictionaries will be installed for each Target Language you selected. You can also see whether frequency data and conjugation data (needed for [Deconjugation Support](#deconjugation-support)) is available for a given language.
1. Once you have confirmed your selections, press the `Confirm` button.
   - Pressing the `Confirm` button will transition the screen to the Installation Progress screen, where you can view the current installation progress.
1. Press the `Finish` button once the installation has reached 100%.

If you want to install your own dictionaries from a file you can find a step by step guide in our <internal-link to="/tools-guides/migaku-dictionary/manual#installing-dictionaries">Migaku Dictionary Manual</internal-link>.

<!--Installing a Language For a Quick Start-->

## Settings

### Dictionary Group

Next, to make looking up words easier, we have to set a dictionary group.

1. Click on the `Migaku` button at the top of your Anki window
1. Click on `Dictionary Settings`
1. On the left side of the window that just opened, click on `Add Dictionary Group`
1. Give the new group a name
1. Now select the dictionaries you want in your group from the list below
   - We also recommend you to select `Google Images` and `Forvo` so you can search for a definition, images and audio at the same time. The order in which you click the dictionaries determines the order in which the they appear in your dictionary search later on.
1. Once you selected all the dictionaries you want, click `Save`

<!--Adding a dictionary group-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/adding-a-dictionary-group.mp4"></migaku-video>

To search in your now created dictionary group:

1. Open the dictionary by pressing `Ctrl + w` (`⌘ + w` on Mac)
1. In the top left corner you can find a dropdown-list of all the dictionay groups. Click on the list and select the group you created.

<!--selecting dictionary group-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/selecting-a-dictionary-group.mp4"></migaku-video>

### Export Templates

All the language specific Migaku add-ons come with their own pre installed Export Templates. So if you are using the [Migaku Japanese Add-on](https://www.migaku.io/tools-guides/migaku-japanese/manual/), [Migaku German Add-on](https://www.migaku.io/tools-guides/migaku-german/guide/), [Migaku Chinese Add-on](), [Migaku French Add-on](), [Migaku Spanish Add-on]() or [Migaku Portuguese Add-on]() you allready have the Export Templates you need.

If you dont have one of these add-ons installed, or are learning a language that is not yet supported, you can create your own Template. To learn how to create your own Export Template you can find a step by step guide in the <internal-link to="/tools-guides/migaku-dictionary/manual#creating-export-templates">Migaku Dictionary Manual</internal-link>.

### Sending Definitions to Your Cards

For the last step you have to define the fields the add-on should send the definitions, images and audio to.

1. Open the dictionary by pressing `Ctrl + w` (`⌘ + w` on Mac)
1. Search for any word that you want
1. On the right side of the dictionary window select the field for each dictionary
1. Now you can send definitions, images and audio to your cards

<!--setting the definiton export-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/setting-the-definition-export.mp4"></migaku-video>

With this you can send definitions to your card by clicking the `Send to Field` button on the right side.

For Forvo you have to first select the audio you want to send to the card, by checking the box to the left of it.

For Google Images you have to click once on the image you want to send to your card. The images that is selected will turn slightly blue.

![Send to Field](/content-images/tools-guides/migaku-dictionary/send-to-field.png)

## Hotkey And Window Overview

![Shortcuts for the Dictionary](/content-images/tools-guides/migaku-dictionary/shortcuts-dictionary.png)

![Shortcuts for the Dictionary](/content-images/tools-guides/migaku-dictionary/dictionary-window-overview.png)

## Learning More

A detailed and complete <internal-link to="/tools-guides/migaku-dictionary/manual">User's Manual is available for Migaku Dictionary</internal-link>. It covers everything we covered here in great detail so please reference it as necessary.
