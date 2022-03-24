---
title: The Immerse with Migaku Browser Extension Quick Start Guide
shortTitle: Quick Start Guide
description: Everything you need to start language learning with Netflix, Youtube, local video files, and your favorite websites with the Migaku Browser Extension!
headerImage: /content-images/tools-guides/migaku-browser-extension/extension-header.png
position: 1
---

# The Immerse with Migaku Browser Extension Quick Start Guide

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
- [Updating](#updating)
- [Uninstalling](#uninstalling)
- [Using the Extension](#main-components)
  - [Getting Started with the Extension](#getting-started-with-the-extension)
  - [Video Player Hotkeys](#video-player-hotkeys)
  - [Subtitle Modes](#subtitle-modes)
  - [Skip Mode](#skip-mode)
  - [Searching in the Migaku Dictionary](#searching-in-the-migaku-dictionary)
    - [Searching the Selected Text](#searching-the-selected-text)
    - [Automatically Searching All Unknown Words in a Subtitle Line](#automatically-searching-all-unknown-words-in-a-subtitle-line)
    - [Searching from Learning Status Popups](#searching-from-learning-status-popups)
  - [Creating Anki Cards](#creating-cards-with-the-extension)
    - [Creating a Card from a Single Subtitle Line](#creating-a-card-from-a-single-subtitle-line)
    - [Creating a Card from Multiple Subtitle Lines](#creating-a-card-from-multiple-subtitle-lines)
    - [Creating Cards in Bulk](#creating-cards-in-bulk)
    - [Automatic Searching When Adding Flashcards](#automatic-searching-when-adding-flashcards)
    - [Hotkey Overview](#hotkey-overview)
- [Reference](#reference)
  - [Playing Local Files with Migaku Player](<#playing-local-files-with-migaku-player-(optional)>)
  - [Extra Features For Japanese](#extra-features-for-japanese)
    - [Word Learning Statuses](#word-learning-statuses)
      - [Parsing Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website)
      - [Learning Status Underlining](#learning-status-underlining)
      - [Changing the Learning Status of a Word](#changing-the-learning-status-of-a-word)
    - [Japanese Parsing Features](#japanese-parsing-features)
      - [Pitch Accent Coloring](#pitch-accent-coloring)
      - [Japanese Display Modes](#japanese-display-modes)
      - [Pitch Shapes](#pitch-shapes)
      - [Click a Word to Play Audio](#click-a-word-to-play-audio)
      - [Learning Status Popup Features](#extra-features-on-the-learning-status-popup)

## Intro

**This Quick Start guide does not review all features of the extension. Please view the <internal-link to="/tools-guides/migaku-browser-extension/manual">User's Manual</internal-link> for an in depth look at every feature that extension has.**

The Immerse with Migaku Browser Extension is an extension for <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a> and other <a href="https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium" target="_blank">Chromium-based browsers</a> that aims to make immersion learning as convenient and approachable as possible!

<!--Making an Instant Flashcard from Netflix-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/instant-netflix-card.mp4"></migaku-video>

It allows you to <internal-link to="/tools-guides/migaku-browser-extension/manual#instant-flashcard-creation">make instant Anki flashcards</internal-link> from video streaming sites such a Netflix, and YouTube, and from your local video and subtitle files. Not only that, the extension creates very high quality cards that include a screenshot and audio recording of the portion of the video you were watching:

![High Quality Card Example](/content-images/tools-guides/migaku-browser-extension/high-quality-card.png)

Besides this instant high quality flashcard creation, the Immerse with Migaku Browser extension also offers support for [Word Learning Status Underlining](#learning-status-underlining).

The continual development of the Immerse with Migaku Browser Extension is a big part of the future vision we have for Migaku, and we hope you're as excited about it as we are!

_\* The Immerse with Migaku Browser Extension will be coming to Firefox in the near future._

**The Immerse with Migaku Browser Extension is still a work in progress and you may encounter bugs while using it. If you do please use the <internal-link to="/tools-guides/migaku-browser-extension/support">support page</internal-link> for help resolving your issue, and report any issues that you're confident is a bug. Also, the current styling of the Extension is entirely utilitarian, but it will be professionally aesthetically styled once it is feature complete.**

## Installation

**In order to use the Immerse with Migaku Browser Extension's Instant Card Creation features you must install <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary </internal-link>. We recommend installing <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary </internal-link> first and then installing the Browser Extension.**

The Immerse with Migaku Browser Extension is currently only compatible with <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a> and other <a href="https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium" target="_blank">Chromium-based browsers</a>. You will not be able to use the extension if you are not using a compatible browser.
_\* The Immerse with Migaku Browser Extension will be coming to Firefox in the near future._

Before you can install Migaku Dictionary you must first download the necessary installation files. As the Immerse with Migaku Browser Extension is still one of our beta software projects, it is currently only available to Migaku Patreon supporters. You can find the link to download the necessary files on <a href="https://www.patreon.com/posts/46934225" target="_blank">this Patreon Post</a>.

There are 2 files available for download at the above <a href="https://www.patreon.com/posts/46934225" target="_blank">Patreon Post</a>:

1. The Immerse with Migaku Browser Extension itself (a ZIP file).
1. If you are studying Japanese, you can optionally download the `accentAudio.zip` ZIP file which adds the ability to click words to play a recording for that word.
   - **The support for this feature is coming to other languages in the near future.**

<!--Installing Process for the Browser Extension-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/installing-migaku-extension.mp4"></migaku-video>

Once you have downloaded the Browser Extension (and optionally `accentAudio.zip` for the Japanese learners), you can do the following to install it:

1. Unzip the Immerse with Migaku Browser Extension zip file's contents to a desired install location on your computer.
   - The contents of the zip file are a single folder named `ImmerseWithMigaku`. You should then have this folder located where you chose to unzip if on your computer; `[Installation Folder]/ImmerseWithMigaku`.
1. If you have downloaded `accentAudio.zip` you should now unzip the contents of that file (the contents are a single folder named `accentAudio`), into your `ImmerseWithMigaku` folder.
   - The resulting path will be: `[Installation Folder]/ImmerseWithMigaku/accentAudio`.
   - _\* There are many audio files contained within `accentAudio.zip`, so it may take considerable time to unzip depending on your computer's hardware._
1. Open Google Chrome's (or your Chromium Based Browser's) Settings Menu.
1. Navigate to the "Extensions" tab.
   - In Google Chrome there will be an "Extensions" button near the bottom of the Menu List on the left side of the screen. Clicking this button will open the "Extensions" tab.
1. In the top right of the "Extensions" tab you will see a switch labelled "Developer mode". Enable this switch to turn Developer Mode on.
1. Once Developer Mode is enabled you will see three new options appear; "Load Unpacked", "Pack Extension", and "Update".
   - They will appear on the top left of the screen in Google Chrome.
1. Click the "Load Unpacked" button and navigate to and select your `ImmerseWithMigaku` folder ( found in `[Installation Folder]/ImmerseWithMigaku`), then click the "Select Folder" button.
   - The Immerse with Migaku Browser Extension will then be installed into your internet browser.

## Updating

<!--Updating the Extension-->

<migaku-video autoplay loop src="/content-images/tools-guides/migaku-browser-extension/updating-the-extension.mp4"></migaku-video>

To update the Immerse with Migaku Browser Extension:

1. Unzip the new version of the Immerse with Migaku Browser Extension zip file's contents to a temporary location on your computer.
   - The contents of the zip file are a single folder named `ImmerseWithMigaku`. You should then have this folder located where you chose to unzip if on your computer; `[Temporary Location]/ImmerseWithMigaku`.
1. Copy all of the files of the new update's `ImmerseWithMigaku` folder (`[Temporary Location]/ImmerseWithMigaku/[Files]`).
1. Paste all of these files into your current installation folder ( `[Installation Folder]/ImmerseWithMigaku`).
1. Open Google Chrome's (or your Chromium Based Browser's) Settings Menu.
1. Navigate to the "Extensions" tab.
   - In Google Chrome there will be an "Extensions" button near the bottom of the Menu List on the left side of the screen. Clicking this button will open the "Extensions" tab.
1. Find the "Immerse with Migaku" extension, and click the Refresh button (it is a loading icon in Google Chrome).
1. Delete the update folder `[Temporary Location]/ImmerseWithMigaku`.

## Uninstalling

<!--Uninstalling the Extension-->

<migaku-video autoplay loop src="/content-images/tools-guides/migaku-browser-extension/uninstalling-the-extension.mp4"></migaku-video>

To Uninstall the Immerse with Migaku Browser Extension:

1. Open Google Chrome's (or your Chromium Based Browser's) Settings Menu.
1. Navigate to the "Extensions" tab.
   - In Google Chrome there will be an "Extensions" button near the bottom of the Menu List on the left side of the screen. Clicking this button will open the "Extensions" tab.
1. Find the "Immerse with Migaku" extension, and click the "Remove" button.
1. Delete the installation folder ( `[Installation Folder]/ImmerseWithMigaku`).

## Using the Extension

Once you've installed the Immerse with Migaku Browser Extension and Migaku Dictionary, you're ready to start making instant flashcards from Netflix, YouTube, your local video files, and your favorite websites!

If you're learning Japanese you can also try out the Word Learning Status tracking functionality which we also be coming to all other major languages in the near future. Along with this Japanese also has support for playing audio recordings of the words you're encountering and coloring words according to pitch accent.

_\* Similar coloring functionality will be coming to other languages in the near future, to help with learning genders, stress accent, verb families and more!_

### Getting Started with the Extension

<!--Enabling the Migaku Toolbar-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/enabling-migaku-toolbar.mp4"></migaku-video>

To get started click the "Enable Toolbar" button in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-extension-menu">the Extension Menu</internal-link>. This will enable <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">the Migaku Toolbar</internal-link>.

Next visit your favorite video that has target language subtitles on YouTube or Netflix and you will see <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">the Migaku Toolbar</internal-link> appear on the page.

The first drop-down menu furthest to the left is <internal-link to="/tools-guides/migaku-browser-extension/manual#default-toolbar-buttons">the Main Language Selector</internal-link>, here you can select the language of the target language subtitles.

![Migaku Toolbar for Japanese](/content-images/tools-guides/migaku-browser-extension/toolbar-for-japanese.png)
If you select Japanese your <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">toolbar</internal-link> will have some extra features that will soon be available to other languages as well.

**If you will be using the extension to learn Japanese it is recommended you review the [Extra Features For Japanese](#extra-features-for-japanese).**

![Migaku Toolbar for Not Japanese](/content-images/tools-guides/migaku-browser-extension/toolbar-for-other-langs.png)
If you select a language other than Japanese, your toolbar will look like this.

<!--Main Language Drop-down With Some Languages-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/main-secondary-drop-down-with-languages.mp4"></migaku-video>

The next drop-down menu is <internal-link to="/tools-guides/migaku-browser-extension/manual#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player">the Secondary Language Selector</internal-link>, here you can select your native language subtitle track.

### Video Player Hotkeys

These hotkeys are valid for all <internal-link to="/tools-guides/migaku-browser-extension/manual#supported-streaming-platforms">supported streaming platforms</internal-link> and for [Migaku Player](<#playing-local-files-with-migaku-player-(optional)>).

The hotkeys are:

- "a" or "←" : Seek video to beginning of the previous subtitle.
- "d" or "→" : Seek video to beginning of the next subtitle.
- "s" : Seek video to beginning of the currently displayed subtitle.
- "w" : Toggle between Shown/Hidden subtitles
- "q" : [Add an Anki card](#creating-cards-with-the-extension) for either the currently displayed subtitle, or all subtitles that have been selected in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-subtitle-browser">the Subtitle Browser</internal-link>.

_A hotkey for searching currently selected text will be implemented in the very next update._

### Subtitle Modes

<internal-link to="/tools-guides/migaku-browser-extension/manual#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player">The Migaku Toolbar on Supported Streaming Sites and the Migaku Player page</internal-link> has support for multiple Subtitle Modes.

![The Subtitle Mode Drop-Down Menu](/content-images/tools-guides/migaku-browser-extension/subtitle-drop-down.png)

A Subtitle Mode is a particular way of displaying subtitles in such a way that it is more useful for language learning.

There are four subtitle modes:

1. Default - Shows subtitles as they would normally appear on any subtitled content.

   <!--Reading Mode Example-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/reading-mode.mp4"></migaku-video>

1. Reading
   - Pauses the video at the beginning of a subtitle line so that the learner may read that subtitle line before listening to the audio for that subtitle line.

<!--Recall Mode Example-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/recall-mode.mp4"></migaku-video>

1. Recall
   - Hides the subtitle line until the audio is finished playing then displays it and pauses the video. This allows a learner to listen to the audio of a subtitle line before reading that line and confirming whether they heard it correctly or not.
   - _You will notice that the video seems to jump back a bit before displaying the subtitle, that is to ensure that the audio for the next subtitle line plays from the beginning._

<!--Hidden Mode Example-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/recall-mode.mp4"></migaku-video>

1. Hidden
   - Only shows the subtitles when the video is paused. This allows a learner to focus on listening and pause the video when they want to check the subtitles.

### Skip Mode

<internal-link to="/tools-guides/migaku-browser-extension/manual#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player">The Migaku Toolbar on Supported Streaming Sites and the Migaku Player page</internal-link> has support for Skip Mode.

Skip Mode allows you to change the speed the video plays at when a subtitle hasn't been on the screen for at least 1 second, in effect fast forwarding through parts of the video that do not have dialogue. This is particularly useful when rewatching content to practice one's listening.

![The Skip Mode Drop-Down Menu](/content-images/tools-guides/migaku-browser-extension/skip-drop-down.png)

There are 5 options available:

1. Don't Skip
   - The video will always play at the same speed.
1. Skip at 2x
   - The video will play at 2x speen when there are no subtitles on screen.
1. Skip at 4x
   - The video will play at 4x speen when there are no subtitles on screen.
1. Skip at 6x
   - The video will play at 6x speen when there are no subtitles on screen.
1. Skip at 8x
   - The video will play at 8x speen when there are no subtitles on screen.

### Searching in the Migaku Dictionary

There are 3 types of searches that can be carried out from the Immerse with Migaku Browser Extension to the <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary</internal-link> Add-on:

- Searching text that you have selected/highlighted.
- Automatically Searching All Unknown Words in a Subtitle Line.
- Searching a word from its <internal-link to="/tools-guides/migaku-browser-extension/manual#the-word-learning-status-popup">Word Learning Status Popup</internal-link>.

#### Searching the Selected Text

This feature is currently only available on <internal-link to="/tools-guides/migaku-browser-extension/manual#supported-streaming-platforms">supported streaming platforms</internal-link> and on [Migaku Player](<#playing-local-files-with-migaku-player-(optional)>).

Currently you must use <internal-link to="/tools-guides/migaku-dictionary/manual#global-hotkeys">Migaku Dictionary's Global Hotkeys</internal-link> if you would like to search selected/highlighted text on other websites.

You can search any text that you have selected by:

<!--Searching Selected Text in a Subtitle Line-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-selected-in-sub.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right of the currently displayed subtitle when hovered.

<!--Searching Selected Text in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-selected-in-sub-browser.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right a subtitle line in the Subtitle Browser.

#### Automatically Searching All Unknown Words in a Subtitle Line

**This feature is only available for languages that support Word Learning Statuses. Which currently is only Japanese, this support will be coming to more languages in the very near future.**

This feature is exclusive to languages with [Word Learning Status Support](#word-learning-statuses) (currently only `Japanese`), and also only currently works on <internal-link to="/tools-guides/migaku-browser-extension/manual#supported-streaming-platforms">supported streaming platforms</internal-link> and on [Migaku Player](<#playing-local-files-with-migaku-player-(optional)>).

To use this requires that your have already [Parsed the Words Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website) of the <internal-link to="/tools-guides/migaku-browser-extension/manual#default-toolbar-buttons">Main Language</internal-link> subtitles.

Once you have done so you can search all unknown words by either simply:

<!--Searching All Unknown Words in a Subtitle Line-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-all-unknown-words-in-sub.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right of the currently displayed subtitle when hovered.

<!--Searching All Unknown Words in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-all-unknown-words-in-sub-browser.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right a subtitle line in the Subtitle Browser.

#### Searching from Learning Status Popups

**This feature is only available for languages that support Word Learning Statuses. Which currently is only Japanese, this support will be coming to more languages in the very near future.**

Once you have [Parsed the Words Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website) on a page, then hovering over a word on that page will cause a <internal-link to="/tools-guides/migaku-browser-extension/manual#the-word-learning-status-popup">Word Learning Status Popup</internal-link> to appear.

<!--Searching a Word From the Word Learning Status Popup-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-from-popup.mp4"></migaku-video>

In this popup, which is covered in more detail in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-word-learning-status-popup">its section of the manual</internal-link>, you will find a Search button in the top right corner, clicking that button will search the word appearing in the popup.

_This functionality works on all pages where [Word Learning Statuses](#word-learning-statuses) are available._

### Creating Cards with the Extension

There are several ways to make fast high quality SRS flashcards for Anki using the Immerse with Migaku Browser Extension and <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary</internal-link>. Let's take a look at them.

Currently instant flashcard creation is only for <internal-link to="/tools-guides/migaku-browser-extension/manual#supported-streaming-platforms">supported streaming platforms</internal-link> and [Migaku Player](<#playing-local-files-with-migaku-player-(optional)>). On other sites you can use <internal-link to="/tools-guides/migaku-dictionary/manual#global-hotkeys">Migaku Dictionary's Global Hotkeys</internal-link> to create cards very quickly in a similar way to what is explained below.

**Before you can create any cards you must <internal-link to="/tools-guides/migaku-browser-extension/manual#the-extension-menu">Allow Recording in the Extension Menu</internal-link>.**

_\* If you have not yet installed <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary</internal-link>, please click <internal-link to="/tools-guides/migaku-dictionary/quickstart#installation">this link</internal-link> to view its installation instructions.

#### Creating a Card from a Single Subtitle Line

There are two ways to create an Anki flashcard from a single subtitle line:

<!--Creating a Card from Current Subtitle-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/card-from-current-sub.mp4"></migaku-video>

1. Clicking the Anki button that appears to the right of the currently displayed subtitle when hovered.

<!--Creating a Card from a Single Subtitle Line in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/card-from-single-sub-in-browser.mp4"></migaku-video>

1. Clicking the Anki button that appears to the right a subtitle line in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-subtitle-browser">the Subtitle Browser</internal-link>.

Once the Anki button is clicked:

1. The extension will automatically play the video, record the necessary audio, take a screenshot, and pause the video when it is finished.
1. Then it will send the necessary information to Migaku Dictionary and its <internal-link to="/tools-guides/migaku-dictionary/manual#card-exporter">tCard Exporter </internal-link> will be opened.
   - Please reference <internal-link to="/tools-guides/migaku-dictionary/manual#card-exporter">the Card Exporter section of the Migaku Dictionary Add-on's Manual</internal-link> if you are not familiar with using the Card Exporter.

**<internal-link to="/tools-guides/migaku-dictionary/manual#main-dictionary-window">Migaku Dictionary's Dictionary Window</internal-link> must be open for card creation to work.**

#### Creating a Card from Multiple Subtitle Lines

To create a single Anki flashcard from multiple subtitle lines:

<!--Creating a Card from Multiple Subtitle Lines in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/card-from-multiple-subs.mp4"></migaku-video>

1. <internal-link to="/tools-guides/migaku-browser-extension/manual#the-subtitle-browser">Open the Subtitle Browser</internal-link>
1. Left click the timestamps of the subtitles you would like to make a single card for.
   - The subtitles must be connected. You cannot have unselected subtitles in between selections.
1. Click any of the Anki buttons in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-subtitle-browser">the Subtitle Browser</internal-link>.

Once the Anki button is clicked:

1. The extension will automatically play the video, record the necessary audio, take a screenshot, and pause the video when it is finished.
1. Then it will send the necessary information to Migaku Dictionary and its <internal-link to="/tools-guides/migaku-dictionary/manual#card-exporter">tCard Exporter </internal-link> will be opened.
   - Please reference <internal-link to="/tools-guides/migaku-dictionary/manual#card-exporter">the Card Exporter section of the Migaku Dictionary Add-on's Manual</internal-link> if you are not familiar with using the Card Exporter.

**<internal-link to="/tools-guides/migaku-dictionary/manual#main-dictionary-window">Migaku Dictionary's Dictionary Window</internal-link> must be open for card creation to work.**

#### Creating Cards in Bulk

The Immerse with Migaku Browser Extension allows you to create Anki flashcards in bulk.

You can currently create cards in bulk for:

1. [All subtitle lines of a show](#creating-a-card-for-all-subtitle-lines).
1. [All 1 Target subtitle lines of a show](#creating-a-card-for-all-1-target-subtitle-lines).

<!--Add Extension Cards Automatically Checked Off-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/automatically-add-from-extension-checked.mp4"></migaku-video>

**If you are using an older version of Migaku Dictionary:**  
**1. You must check off <internal-link to="/tools-guides/migaku-dictionary/manual#add-extension-card-automatically">"Add Extension/Netflix Cards Automatically" in the Card Exporter</internal-link> for the cards to be actually added to your collection.**
**2. If you are bulk exporting cards on [subtitles that have been parsed](#parsing-the-learning-statuses-in-subtitles-or-on-a-website), then you should enable <internal-link to="/tools-guides/migaku-dictionary/manual#tabs">Single-Tab Mode</internal-link> in the Dictionary Window to avoid the add-on opening many tabs when performin [Automatic Searching When Adding Flashcards](#automatic-searching-when-adding-flashcards).**
_\* This has been fixed in versions > 1.1.041 for Anki 2.1.22-23, and > 1.2.0 for Anki 2.1.35._

##### Creating a Card for All Subtitle Lines

To automatically create a card for every subtitle line in a show:

1. Press the "Export All" button on <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">the Migaku Toolbar</internal-link>.

<!--Exporting All Cards Clip-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/exporting-all.mp4"></migaku-video>

After the button is clicked:

1. The audio of the program will be muted.
1. The recording will begin and proceed until completed.

Currently there is no progress bar to show you the percentage completed, this will be implemented soon.

**You can cancel bulk exporting at any time by refreshing the page.**

_\* Please note that <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a> (and other Chromium-based browsers) requires the tab being recorded to remain in focus in order to take screenshots. As a result you cannot use another tab or another window of your internet browser while performing bulk card creation. If you would like to surf the internet while your cards are created please install and use a different internet browser during that time. If you unfocus the tab, then screenshots will not be taken._

**<internal-link to="/tools-guides/migaku-dictionary/manual#main-dictionary-window">Migaku Dictionary's Dictionary Window</internal-link> must be open for card creation to work.**

##### Creating a Card for All 1 Target Subtitle Lines

To automatically create a card for all 1 Target subtitle lines (subtitle lines that have only a single unknown word):

1. [Parse the Words Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website) of the subtitles.
   - This requires a <internal-link to="/tools-guides/migaku-browser-extension/manual#supported-languages">language that supports Word Learning Statuses</internal-link>.
1. Press the "Export 1T" button on <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">the Migaku Toolbar</internal-link>.

<!--Exporting 1 Target Cards Clip-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/exporting-1-target.mp4"></migaku-video>

After the button is clicked:

1. The audio of the program will be muted.
1. The recording will begin and proceed until completed.

Currently there is no progress bar to show you the percentage completed, this will be implemented soon.

**You can cancel bulk exporting at any time by refreshing the page.**

_\* Please note that <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a> (and other Chromium-based browsers) requires the tab being recorded to remain in focus in order to take screenshots. As a result you cannot use another tab or another window of your internet browser while performing bulk card creation. If you would like to surf the internet while your cards are created please install and use a different internet browser during that time. If you unfocus the tab, then screenshots will not be taken._

**<internal-link to="/tools-guides/migaku-dictionary/manual#main-dictionary-window">Migaku Dictionary's Dictionary Window</internal-link> must be open for card creation to work.**

#### Automatic Searching When Adding Flashcards

<!--Unknown Words Being Search Automatically When Adding a Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/auto-search-when-adding.mp4"></migaku-video>

If you have [Parsed the Words Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website) for the subtitles you are adding cards for then:

- All unknown words in a sentence will automatically be searched
- The first unknown word will be added to the <internal-link to="/tools-guides/migaku-dictionary/manual#opening-the-exporter">Card Exporter's Word Field</internal-link> automatically.

### Hotkey Overview

![Migaku Browser Extension Hotkeys](/content-images/tools-guides/migaku-browser-extension/hotkeys-browser-extension.png)

## Reference

### Playing Local Files with Migaku Player (Optional)

Migaku Player is a video player that allows you to play your own local video and subtitle files while using all of the Immerse with Migaku Browser Extension functionality that is available on <internal-link to="/tools-guides/migaku-browser-extension/manual#supported-streaming-platforms">supported streaming platforms</internal-link>.

Migaku Video Player shares aalmost all of its functionality found with that found in the <internal-link to="/tools-guides/migaku-browser-extension/manual#streaming-site-integration">Streaming Site Integration</internal-link>.

The shared functionality includes:

- <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">the Migaku Toolbar</internal-link>
- <internal-link to="/tools-guides/migaku-browser-extension/manual#the-subtitle-browser">the Subtitle Browser</internal-link>
- <internal-link to="/tools-guides/migaku-browser-extension/manual#the-font-settings-button">The Font Settings Button</internal-link>
- <internal-link to="/tools-guides/Tmigaku-browser-extension/manual#the-subtitle-settings-button">The Subtitle Settings Button</internal-link>
- [Video Player Hotkeys](#video-player-hotkeys)

Please reference the relevant sections linked above to find out more about that functionality.

Besides this shared functionality Migaku Player of course also gives you the ability to load in your own local video files.

<!--Loading Local Videos into Migaku Player-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/loading-local-videos.mp4"></migaku-video>

You can load your local video files by:

1. Hovering over the top-left corner of the player page to display the "Load Videos" button.
1. Clicking the "Load Videos" button to display both [the Migaku Player Playlist](#the-migaku-player-playlist), and the Video Loading Area.
1. Dragging and dropping your local video files onto the Video Loading Area will load them into Migaku Player and automatically play the first file.

<!--Playing a Video With Migaku MPV-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/using-migaku-mpv.mp4"></migaku-video>

- \* <b>Because Migaku Player is an internet browser based player it can only play <a href="https://www.chromium.org/audio-video" target="_blank">video formats that are supported on Chromium based internet browsers</a></b>. If you find that your local video files are imcompatible with Migaku Player, please check out our other project <internal-link to="/tools-guides/migaku-mpv/guide">Migaku MPV</internal-link>. <internal-link to="/tools-guides/migaku-mpv/guide">Migaku MPV</internal-link> is an extension for MPV Player, a 100% free and open source video player that supports any video format.

<!--Using the Previous and Next Video Button-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/previous-next-migaku-player.mp4"></migaku-video>

When a video has been loaded the video currently being played will be displayed to the right of the "Load Videos" button. To the left and right of the name of the video currently being played you will find the "Previous Video" and "Next Video" buttons, click them will play the previous or next video in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-player-playlist">the Migaku Player Playlist</internal-link> respectively.

### Extra Features for Japanese

### Word Learning Statuses

![One Line of Text With Learning Status Underlining, One Word of Each Status At Least](/content-images/tools-guides/migaku-browser-extension/one-line-with-underlining.png)

Word Learning Statuses are a way of keeping track of the words you "Known", the words you are "Learning", and the words that are still "Unknown" to you.

In fact the three learning statuses are just that.

1. Known - Words you know.
2. Seen - Words you have begun studying or have seen recently, but don't know well yet.
3. Unknown - Words you don't know yet

#### Parsing the Learning Statuses in Subtitles or on a Website

![The Word Status and Parse Buttons](/content-images/tools-guides/migaku-browser-extension/word-status-parse-buttons.png)

When you select a language that supports learning statuses, you will see two buttons added to <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">the Migaku Toolbar</internal-link>:

1. The "Word Status | Known: 0" Button
   - This is a toggleable option that enables/disables [Learning Status Underlining](#learning-status-underlining).
   - The button's text will become green when it is enabled.
1. The "Parse" Button
   - Clicking this button will both parse the words in a subtitle or on a website to apply Word Learning Status Information to them, and will also apply <internal-link to="/tools-guides/migaku-browser-extension/manual#extra-features">Extra Features</internal-link> if the Main Language selected has them.

<!--Parsing a Website with Only Learning Status Underlining Enabled-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/parse-with-underlines.mp4"></migaku-video>

When the "Word Status | Known: x" button is toggled on _(text is green)_ and you hit the parse button then you the text will be rendered with [Learning Status Underlining](#learning-status-underlining).

<!--Parsing a Website with earning Status Underlining Disabled Hover Over Word-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/parse-without-underlines-hover.mp4"></migaku-video>

When the "Word Status | Known: x" button is toggled off _(text is white)_ and you hit the parse button then you the text will be rendered without [Learning Status Underlining](#learning-status-underlining). However, if you hover over a word you will see in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-word-learning-status-popup">the Word Learning Status Popup</internal-link> that Word Learning Statuses have still been applied to the parsed words. The only difference is that that information is not displayed with underlining.

**You currently must reload a page if you would like to re-parse it with different settings selected.**

#### Learning Status Underlining

![One Line of Text With Learning Status Underlining, One Word of Each Status At Least](/content-images/tools-guides/migaku-browser-extension/one-line-with-underlining.png)

The 3 different Learning Statuses are displayed as follows when underlining is enabled:

<!--Hovering a Known Word-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/hover-known-word.mp4"></migaku-video>

1. Known
   - No underline is shown on Known words until that word is hovered, then a green underline is shown.
2. Seen
   - A light orange underline signifies the Seen Learning Status
3. Unknown
   - A red underline signifies the Unknown Learning Status

##### Changing the Learning Status of a Word

<!--Changing the Learning Status of 磨く to Unknown-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/migaku-changed-to-unknown.mp4"></migaku-video>

Clicking one of the three Learning Statuses in <internal-link to="/tools-guides/migaku-browser-extension/manual#the-word-learning-status-popup">the Word Learning Status Popup</internal-link> will change the learning status of that word to the Learning Status that was clicked.

### Japanese Parsing Features

![The Japanese Extra Feature Buttons](/content-images/tools-guides/migaku-browser-extension/japanese-extra-buttons.png)

There are three Extra Feature Buttons added to <internal-link to="/tools-guides/migaku-browser-extension/manual#the-migaku-toolbar">the Migaku Toolbar</internal-link> when Japanese is selected:

1. The Highlight Button
   - A toggleable button that allows you to Enable/Disable [Pitch Accent Coloring](#pitch-accent-coloring) _(the text is green when enabled)_.
1. The Display Mode Drop-Down Menu
   - Allows you select a [Japanese Display Mode](#japanese-display-modes).
1. Pitch Shapes
   - A toggleable button that allows you to Enable/Disable [Pitch Shapes](#pitch-shapes) _(the text is green when enabled)_.

Once you have enabled or disabled [Pitch Accent Coloring](#pitch-accent-coloring), and [Pitch Shapes](#pitch-shapes), and chosen a [Japanese Display Mode](#japanese-display-modes), you can press parse to add the information to the subtitle or website's text.

<!--Parsing With Coloring, Pitch Shapes, and Furigana-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/coloring-shapes-furigana.mp4"></migaku-video>

Parsing text with [Pitch Accent Coloring](#pitch-accent-coloring), and [Pitch Shapes](#pitch-shapes) enabled, and the [Japanese Display Mode](#japanese-display-modes) set to Furigana.

**You currently must reload a page if you would like to re-parse it with different settings selected.**

#### Pitch Accent Coloring

**Please note that Pitch Accent Coloring applies on a per word basis within the extension. It is meant to help you learn the pitch accent of the dictionary form of the word. The actual pitch of the word may differ based on how it is conjugated, how it is used in a sentence, or where it is found within a sentence.**

When the Highlight Button is toggled to enabled and the text of subtitles or a website is parsed, the Japanese words on that page will be colored according to their <a href="https://en.wikipedia.org/wiki/Japanese_pitch_accent" target="_blank">pitch accent</a> pattern.

> In standard Japanese, pitch accent has the following effect on words spoken in isolation:

![Picture of an Atamadaka Word Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/atamadaka-pitch.png)

> - If the accent is on the first mora, then the pitch starts high, drops suddenly on the second mora, then levels out. The pitch may fall across both morae, or mostly on one or the other (depending on the sequence of sounds)—that is, the first mora may end with a high falling pitch, or the second may begin with a (low) falling pitch, but the first mora will be considered accented regardless. The Japanese describe this as **頭高 atamadaka** (literally, "head-high").

_Atamadaka words are colored red by default._

![Picture of a Nakadaka Word Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/nakadaka-pitch.png)

> - If the accent is on a mora other than the first or the last, then the pitch has an initial rise from a low starting point, reaches a near-maximum at the accented mora, then drops suddenly on any following morae. This accent is referred to as **中高 nakadaka** ("middle-high").

_Nakadaka words are colored light orange by default._

![Picture of an Odaka Word Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/odaka-pitch.png)

> - If the word has an accent on the last mora, the pitch rises from a low start up to a high pitch on the last mora. Words with this accent are especially distinguishable from accent-less words because the pitch immediately drops on a following particle such as が ga or に ni. In Japanese this accent is called **尾高 odaka** ("tail-high").

_Odaka words are colored green by default._

![Picture of a Heiban Word Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/heiban-pitch.png)

> - If the word doesn't have an accent, the pitch rises from a low starting point on the first mora or two, and then levels out in the middle of the speaker's range, without ever reaching the high tone of an accented mora. In Japanese this accent is named **平板 heiban** ("flat-board").

_Heiban words are colored blue by default._
_\* Heiban is by far the most common pattern._

##### A Special Note About Verbs and Adjectives

**Please note that Pitch Accent Coloring applies on a per word basis within the extension. It is meant to help you learn the pitch accent of the dictionary form of the word. The actual pitch of the word may differ based on how it is conjugated, how it is used in a sentence, or where it is found within a sentence.**

Verbs and Adjectives in Japanese are either Heiban or hava drop 2 moras from their final mora.

Since this rule applies to all verbs and adjectives in Japanese we can make a more simple distinction in pitch for verbs and adjectives. They have one of two patterns:

![A Heiban Verb Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/heiban-verb.png)

1. Heiban - Colored Blue
   - Means that the unconjugated dictionary form of this word is Heiban.

![A Kifuku Verb Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/kifuku-verb.png)

1. Kifuku ("起伏" "rise-fall") - Colored Purple
   - Means that the unconjugated dictionary form has a drop. (You can [hover a word to see where the drop occurs](#extra-features-on-the-learning-status-popup).)

##### Compound Words with 2 Patterns

There are some words that have more than one pitch accent within the same word itself. This happens when the word in question is actually a compound word made up of 2 words that each have a different pitch accent. This most often happens with <a href="https://en.wikipedia.org/wiki/Yojijukugo" target="_blank">four character compounds</a>.

When the extension runs across such a word it is incapable of breaking the larger compound word down into its 2 base words and applying a pitch accent to each of them.
_(The required information to split the base words at their boundaries accurately does not exist within the extension's dataset and therefore it is not possible.)_

Instead the extension will make it known to the user that this word is a compound word and that each of its base words has a different accent.  
Let's take a look at how it does this:

![Picture of a "孤立無援" Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/koritu-muen.png)

The above word "孤立無援" is made up of 2 different words "孤立" and "無援". In the compound word "孤立無援", there are 2 accents that are pronounced _(just as if you were saying the 2 base words independently)_. "孤孤" is Atamada, while "無援" is Heiban. Since the extension cannot accurately split words at their boundaries it will instead:

- Color the text of the compound word, the color of the pitch accent of the first word.
- Give the compound word a background, that is the color of the pitch accent of the second word.

**This can very rarely lead to a word becoming unreadable unless it is hovered, on the occassion that both base words have the same pitch accent:**

![Picture of a "唇歯輔車" Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/sinsi-hosha.png)
We can see that the word "唇歯輔車" becomes obscured because both of its base words have the Atamadaka pattern, making both the text and the background red. This will be fixed in a future update.

#### Japanese Display Modes

There are 3 Display Modes:

![Text with Kanji Display Mode](/content-images/tools-guides/migaku-browser-extension/kanji-display-mode.png)

1. Kanji
   - The text is displayed as it normally is.

![Text with Furigana Display Mode](/content-images/tools-guides/migaku-browser-extension/furigana-display-mode.png)

1. Furigana
   - Readings are added above words when applicable.

![Text with Only Kana Display Mode](/content-images/tools-guides/migaku-browser-extension/kana-display-mode.png)

1. Only Kana
   - Words are replaced by their readings in kana, making the text "Only Kana".

#### Pitch Shapes

Pitch Shapes are visual cues ("Shapes") added after a word to call attention to the learner that that word has multiple potential pitch accents. There will be one Pitch Shape for each variant pitch accent that a word has.

There are 2 Pitch Shapes:

![Picture of a Pitch Shape Diamond with the Word "期間" Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/kikan-multi-pitch.png)

1. A Diamond
   - A Pitch Diamond will always be one solid color, mapping to the color of the variant pitch accent.

![Picture of a Pitch Shape Circle with the Word "一意専心" Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/ichiisenshin-pitch-circle.png)

1. A Circle
   - A Pitch Circle will always be 2 colors and signifies that the variant pitch accent is a compound word and each of that compound word's base words have a different accent. See [Compound Words with 2 Patterns](#compound-words-with-2-patterns).

![Hovering the Pitch Diamond Next to the Word "期間" ](/content-images/tools-guides/migaku-browser-extension/kikan-diamond-hovered.png)

#### Click a Word to Play Audio

If you [installed the `accentAudio` folder](#installation) when installing the extension then at any time you can click a word to play the audio for that word. Please note that audio is not available for all words however.

#### Extra Features on the Learning Status Popup

![Picture of the Word Learning Status Popup for the Word 磨く as a Known Word](/content-images/tools-guides/migaku-browser-extension/learning-status-popup.png)

Some extra information (when available) is added to the <internal-link to="/tools-guides/migaku-browser-extension/manual#the-word-learning-status-popup">Word Learning Status Popup</internal-link> when the <internal-link to="/tools-guides/migaku-browser-extension/manual#default-toolbar-buttons">Main Language</internal-link> is set to Japanese:

1. The dictionary form colored with its pitch accent coloring with a bar showing where the pitch drops.
1. The pitch accent pattern written in Japanese ("平板", "頭高", "中高", "尾高", "起伏"), again in the color of that pattern.
1. The pitch accent dictionary entry for the dictionary form of the word with the number pitch accent notation used in Japanese dictionaries (`[0]`, `[1]`, `[2]`, etc.).
1. A speaker icon that when clicked will play the audio of the dictionary form.
