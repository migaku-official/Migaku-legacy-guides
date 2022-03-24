---
title: The Immerse with Migaku Browser Extension User's Manual
shortTitle: User's Manual
description: This manual contains an explanation of every feature and piece of functionality in the Immerse with Migaku Browser Extension.
headerImage: /content-images/tools-guides/migaku-browser-extension/extension-header.png
position: 2
---

# The Immerse with Migaku Browser Extension User's Manual

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
- [Updating](#updating)
- [Uninstalling](#uninstalling)
- [Main Components](#main-components)
  - [The Migaku Toolbar](#the-migaku-toolbar)
    - [Default Toolbar Buttons](#default-toolbar-buttons)
    - [The Toolbar on a Supported Streaming Site and on Migaku Player](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player)
    - [The Toolbar on All Other Sites](#the-toolbar-on-all-other-sites)
    - [Languages With Extra Functionality](#languages-with-extra-functionality)
    - [Languages Without Extra Functionality](#languages-without-extra-functionality)
  - [Streaming Site Integration](#streaming-site-integration)
    - [Supported Streaming Sites](#supported-streaming-platforms)
    - [The Font Settings Button](#the-font-settings-button)
    - [The Subtitle Settings Button](#the-subtitle-settings-button)
    - [Video Player Hotkeys](#video-player-hotkeys)
  - [The Subtitle Browser](#the-subtitle-browser)
  - [Website Integration](#website-integration)
  - [The Extension Menu](#the-extension-menu)
  - [Migaku Player](#migaku-player)
    - [The Migaku Player Playlist](#the-migaku-player-playlist)
  - [The Settings Page](#the-settings-page)
    - [Text & Font](#the-text-and-font-tab)
    - [Recording Settings](#the-recording-settings-tab)
    - [Word Data](#the-word-data-tab)
    - [Word Browser](#the-word-browser-tab)
- [Hotkey Overview](#hotkey-overview)
- [Main Features](#main-features)
  - [Migaku MPV Integration](#migaku-mpv-integration)
  - [Migaku Dictionary Intergration](#migaku-dictionary-integration)
    - [Searching in the Migaku Dictionary](#searcing-in-the-migaku-dictionary)
  - [Instant Flashcard Creation](#instant-flashcard-creation)
    - [Creating a Card from a Single Subtitle Line](#creating-a-card-from-a-single-subtitle-line)
    - [Creating a Card from Multiple Subtitle Lines](#creating-a-card-from-multiple-subtitle-lines)
    - [Creating Cards in Bulk](#creating-cards-in-bulk)
    - [Automatic Searching When Adding Flashcards](#automatic-searching-when-adding-flashcards)
  - [Subtitle Related Features](#subtitle-related-features)
    - [Dual Subtitle Tracks](#dual-subtitle-tracks)
    - [Subtitle Modes](#subtitle-modes)
    - [Skip Mode](#skip-mode)
    - [Downloading Subtitles](#downloading-subtitles)
    - [Loading Local Subtitles](#loading-local-subtitles)
    - [Retiming Subtitles](#retiming-subtitles-you-have-loaded)
  - [Word Learning Statuses](#word-learning-statuses)
    - [Supported Languages](#supported-languages)
    - [Parsing Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website)
    - [Learning Status Underlining](#learning-status-underlining)
    - [The Word Learning Status Popup](#the-word-learning-status-popup)
    - [Changing the Learning Status of a Word](#changing-the-learning-status-of-a-word)
    - [Importing Learning Statuses From Anki](#importing-learning-statuses-from-anki)
    - [Updating Your Word List](#updating-your-word-list)
- [Extra Features](#extra-features)
  - [Extra Features for Japanese](#extra-features-for-japanese)
    - [Pitch Accent Coloring](#pitch-accent-coloring)
    - [Japanese Display Modes](#japanese-display-modes)
    - [Pitch Shapes](#pitch-shapes)
    - [Click a Word to Play Audio](#click-a-word-to-play-audio)
    - [Learning Status Popup Features](#extra-features-on-the-learning-status-popup)
  - [Extra Features for Other Languages](#extra-features-for-other-languages)

## Intro

The Immerse with Migaku Browser Extension is an extension for <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a> and other <a href="https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium" target="_blank">Chromium-based browsers</a> that aims to make immersion learning as convenient and approachable as possible!

<!--Making an Instant Flashcard from Netflix-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/instant-netflix-card.mp4"></migaku-video>

It allows you to [make instant Anki flashcards](#instant-flashcard-creation) from video streaming sites such a Netflix, and YouTube, and from your local video and subtitle files. Not only that, the extension creates very high quality cards that include a screenshot and audio recording of the portion of the video you were watching:

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

There are 2 files available for download on the <a href="https://www.patreon.com/posts/46934225" target="_blank">Patreon Post</a>:

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

## Main Components

The Immerse with Migaku Browser Extension has several components that make it up. In this section we will take a brief look at each of them and cover some aspects of their usage. The main features which incorporate the usage of many of these components are covered in the [Main Features section](#main-features) however.

### The Migaku Toolbar

Once you have Enabled the Migaku Toolbar in the [Extension Menu](#the-extension-menu) then when you visit a website the toolbar will appear shortly after the page is loaded. The appearance of the Migaku Toolbar will differ depending on a couple factors:

- The type of page you are visiting:
  - A supported streaming platform site _(the extension currently supports Netflix and YouTube)_, or the [Migaku Player](#migaku-player) Page.
  - Any other website besides those stated above.
- The language that is currently selected.
  - The Migaku Toolbar with languages with extra functionality (including [Word Learning Status support](#word-learning-statuses) and/or [Extra Features](#extra-features) ) may have a unique layout based on what functionality is available to that language. _(Currently only `Japanese` has extra functionality, but extra functionality is coming to other languages very soon.)_
  - The Migaku Toolbar with languages without extra functionality will have a default appearance shared by all of those languages.

#### Default Toolbar Buttons

The Migaku Toolbar will share some Default Toolbar Buttons no matter where it is being displayed.

![Picture of the Default Toolbar Buttons Labelled With Their Names](/content-images/tools-guides/migaku-browser-extension/migaku-toolbar-default-buttons.png)

The Default Toolbar Buttons are:

<!--Moving the Toolbar Around-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/moving-the-toolbar.mp4"></migaku-video>

- The Repositioning Button
  - Clicking and dragging the Repositioning Button allows you to place the toolbar wherever you would like on the screen. _(The last location is remembered.)_

<!--Shrinking and Expanding the Toolbar-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/shrinking-expanding-toolbar.mp4"></migaku-video>

- The Shrink/Expand Toolbar Button
  - Clicking this button will toggle the Migaku Toolbar Between Expanded Mode and Shrunk Mode
- The Main Language Selector.
  - Allows you to select the language of the Main Subtitle Track to display on supported streaming platforms or on Migaku Player.
  - Allows you to select which language you want to display [Word Learning Statuses](#word-learning-statuses) for, or have [Extra Features](#extra-features) applied for.

#### The Toolbar on a Supported Streaming Site and on Migaku Player

![Image of the Migaku Toolbar on Netflix](/content-images/tools-guides/migaku-browser-extension/migaku-toolbar-netflix-not-japanese.png)

The toolbar on supported streaming sites, and on the [Migaku Player](#migaku-player) page will have a set of "Streaming Player Buttons" along with the [Default Toolbar Buttons](#default-toolbar-buttons). These "Streaming Player Buttons" help with functionality such as selecting a secondary subtitle, downloading subtitles, and controlling playback speed.

![Picture of the Streaming Site Buttons Labelled With Their Names](/content-images/tools-guides/migaku-browser-extension/migaku-toolbar-extra-buttons-streaming-site.png)

The Streaming Player Buttons are:

- The Secondary Language Selector (if Enabled, it can be disabled on the [Text & Font tab of the Settings Page](#the-text-and-font-tab)).
  - Allows you to select the language of the secondary subtitle track (if any) that you wish to display.
- The [Subtitle Mode](#subtitle-modes) Selector.
  - Allows you to change the subtitle mode in use.
- The [Skip Mode](#skip-mode) Selector.
  - Allows you to change the speed the video plays at when a subtitle hasn't been on the screen for at least 1 second.
- The [Download Subtitles](#downloading-subtitles) Button.
  - Allows you to download the subtitle currently selected as the Main Language.
- The [Export 1T](#creating-a-card-for-all-1-target-subtitle-lines) (Meaning Export 1 "Target").
  - Allows you to [export all subtitles lines that contain only a single unknown word as Anki cards](#creating-a-card-for-all-1-target-subtitle-lines).
- The [Export All](#creating-a-card-for-all-subtitle-lines). Button.
  - Allows you to [export all subtitles lines in a show as Anki cards](#creating-a-card-for-all-subtitle-lines).
- The [Subtitle Browser](#the-subtitle-browser) Button.
  - Opens and Closes the [Subtitle Browser](#the-subtitle-browser).

<!--Main Language Drop-down With Some Languages-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/main-secondary-drop-down-with-languages.mp4"></migaku-video>

The options that appear on the Main Language Selector and Secondary Language Selector are by default a list of all the subtitles available for the currently loaded show. You can also [load your own subtitles](#loading-local-subittles) into any show you are watching.

_\* Loading your own local subtitles is required when using [Migaku Player](#migaku-player)._

#### The Toolbar on All Other Sites

The toolbar on sites other than supported streaming platforms _(Currently Netflix and YouTube)_, or the Migaku Player Page will only contain the [Default Toolbar Buttons](#default-toolbar-buttons) and any Extra Functionality Buttons that the selected language has (either [Word Learning Status](#word-learning-statuses) or [Extra Feature](#extra-features) related buttons).

The Main Language Selector by default will show the `Disabled` option plus a list of all languages with Extra Functionality (Currently only `Japanese`). When "Disabled" is selected as the Main Language, the toolbar has no functionality and is disabled but is still displayed.

<!--Toggling Between Disabled and Japanese on a Japanese News Site-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/toggling-disabled-and-japanese.mp4"></migaku-video>

Switching between "Disabled" and a language with extra functionality will change the look of the Toolbar. You can find out more about this in the next two sections.

#### Languages With Extra Functionality

Extra functionality refers to either [Word Learning Status Support](#word-learning-statuses) or [Extra Features](#extra-features) for a specific language.

<!--Toggling between English and Japanese as the Main Language on YouTube-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/toggling-english-japanese-on-youtube.mp4"></migaku-video>

When a language with extra functionality is selected as the Main Language then any buttons supplying that language's Extra Functionality are loaded into the Migaku Toolbar.

You can find out more about how this functions by checking out the [Word Learning Status](#word-learning-statuses) and the [Extra Features](#extra-features) sections.

_\* Extra Functionality (in the form of both [Word Learning Status Support](#word-learning-statuses) and [Extra Features](#extra-features) ) is currently only available for `Japanese`._

#### Languages Without Extra Functionality

This only applies when using the Immerse with Migaku Browser Extension on supported streaming platforms and the [Migaku Player](#migaku-player) page, because when you visit any other page the Migaku Toolbar will only display "Disabled" and a list of languages with Extra Functionality in the Main Language Selector's drop-down menu. Which means that you will not be able to select a language without extra functionality since there would be no functionality that could be applied to the webpage being visited. You can find out more about this in the [relevant section](#the-toolbar-on-all-other-sites).

In constrast when using the Immerse with Migaku Browser Extension on supported streaming platforms and the [Migaku Player](#migaku-player) page, the Main Language Selector's drop-down menu is populated with all of the subtitles available for the given video you're watching (or any [local subtitles you have loaded](#loading-local-subtitles)).

![Korean Subtitles as the Main Language on Netflix](/content-images/tools-guides/migaku-browser-extension/main-language-korean-on-netflix.png)

As you can see in the above image with `Korean` selected as the Main Language, we still have all of the [Streaming Site Buttons](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player) available. This is in order to allow [Instant Flashcard Creation](#instant-flashcard-creation) for videos and subtitles of any language not just those with [Extra Functionality](#languages-with-extra-functionality). You can find out more about creating flashcards in [the relevant section](#instant-flashcard-creation).

### Streaming Site Integration

The Immerse with Migaku Extension has support for popular online video streaming platforms.

#### Supported Streaming Platforms

Currently we offer support for:

- Netflix
- YouTube

We plan to release support for many other popular streaming platforms in the near future.

The main way this integration happens is through:

- [The Migaku Toolbar](#the-migaku-toolbar)
- [The Subtitle Browser](#the-subtitle-browser)
- [The Font Settings Button](#the-font-settings-button)
- [The Subtitle Settings Button](#the-subtitle-settings-button)
- [Video Player Hotkeys](#video-player-hotkeys)

[The Migaku Toolbar](#the-migaku-toolbar) and [The Subtitle Browser](#the-subtitle-browser) are covered in their respective sections. So let's take a brief look at [the Font Settings Button](#the-font-settings-button), [the Subtitle Settings Button](#the-subtitle-settings-button), and the [Video Player Hotkeys](#video-player-hotkeys)

#### The Font Settings Button

The Font Settings Button appears along with [the Subtitle Settings Button](#the-subtitle-settings-button) when the top right corner of the video being played is hovered.

<!--Clicking Font Settings to Open Text and Font Tab-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/clicking-font-button.mp4"></migaku-video>

Clicking the Font Settings Button will open [the Settings Page](#settings-page) to the [Text & Font Tab](#the-text-and-font-tab) where you can change the font, color, size among other text-related settings. Please visit the [Text & Font Tab](#the-text-and-font-tab) section to find out more.

#### The Subtitle Settings Button

The Subtitle Settings Button appears along with [The Font Settings Button](#the-font-settings-button) when the top right corner of the video being played is hovered.

<!--Clicking Subtitle Settings to Open Subtitle Adjustment Window-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/clicking-subtitle-settings-button.mp4"></migaku-video>

Clicking the Subtitle Settings button will open the Subtitle Adjustment Window. In the Subtitle Adjustment window you can both [load your local subtitle files](#loading-local-subtitles) onto a video, and [retime those subtitles](#retiming-subtitles-you-have-loaded) so that they are displayed at the correct times when watching the video. You can find out how exactly to do these things in the [Loading Local Subtitles section](#loading-local-subtitles).

#### Video Player Hotkeys

These hotkeys are not only valid for [supported streaming platforms](#supported-streaming-platforms) but are also valid for [Migaku Player](#migaku-player) as well.

The hotkeys are:

- "a" or "←" : Seek video to beginning of the previous subtitle.
- "d" or "→" : Seek video to beginning of the next subtitle.
- "s" : Seek video to beginning of the currently displayed subtitle.
- "w" : Toggle between Shown/Hidden subtitles
- "q" : [Add an Anki card](#instant-flashcard-creation) for either the currently displayed subtitle, or all subtitles that have been selected in [the Subtitle Browser](#the-subtitle-browser).

_A hotkey for searching currently selected text will be implemented in the very next update._

### The Subtitle Browser

<!--Opening, Scrolling, then Closing the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/opening-scrolling-closing-subtitle-browser.mp4"></migaku-video>

You can open the Subtitle Browser by pressing the Subtitle Browser button on [the Migaku Toolbar](#the-migaku-toolbar) on any supported streaming platform or on the Migaku Player page. You can also close the Subtitle Browser at anytime by pressing the Subtitle Browser button when the Subtitle Browser is already open.

The Subtitle Browser displays a list of all subtitles for the currently selected Main Language. If the Main Language is set to "Disabled" then the Subtitle Browser will be blank.

Along with being an easily reviewable list of all the Main Language subtitles. The Subtitle Browser also:

<!--Automatic Subtitle Scrolling-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/automatic-subtitle-scrolling.mp4"></migaku-video>

1. Automatically scrolls to keep up with the current subtitle being displayed.

<!--Jumping to a Different Subtitle Line-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/jumping-subtitle-lines.mp4"></migaku-video>

2. Right click a subtitle timestamp to jump to that point in the video.
3. Allows you to easily search words in Migaku Dictionary.
4. Allows you to [select multiple subtitle lines and export them to a single Anki Card](#creating-a-card-from-multiple-subtitle-lines).
   - This allows you to export a card for a larger portion of dialogue for more context when needed.

### Website Integration

On any website that is not a [Supported Streaming Site](#supported-streaming-platforms), and is not the [Migaku Player](#migaku-player) page, only the [Default Toolbar Buttons](#default-toolbar-buttons) and the selected language's [Extra Functionality](#languages-with-extra-functionality) buttons are available.

<!--Parsing a Japanese Website with Pitch Accent Coloring and Learning Status Underlining-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/parsing-site-learning-status-pitch-accent.mp4"></migaku-video>

This allows you to read websites with features like [Word Learning Status Underlining](#learning-status-underlining) and other language specific [Extra Features](#extra-features), like pitch accent coloring for Japanese as shown above for example.

To find out more about these features, reference their relevant sections:

- [Word Learning Statuses](#word-learning-statuses)
- [Extra Features](#extra-features)

### The Extension Menu

<!--Clicking the Extension Menu Button to Open the Extension Menu-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/opening-extension-menu.mp4"></migaku-video>

The Extension Menu is the menu displayed when the Extension Menu Button is clicked.

The Extension Menu contains 4 different options:

1. Settings - Opens [the Settings Page](#the-settings-page) when clicked.
1. Allow Recording - Enables Recording on the currently focused browser tab. This is required to [create instant Anki flashcards](#instant-flashcard-creation).
   - This functionality is covered in greater detail in its [relevant section](#instant-flashcard-creation).
1. Migaku Player - Opens a new [Migaku Player](#migaku-player) page when clicked.
1. Disable/Enable Migaku Toolbar - Enables/Disables [the Migaku Toolbar](#the-migaku-toolbar) when clicked.
   - Reloading a webpage is required in order for this change to be reflected.

<!--Pinning the Extension Menu Button on the Chrome Toolbar-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/pinning-the-extension-menu-button.mp4"></migaku-video>

_\* We recommend clicking the "Puzzle Piece" icon on Chrome, and then clicking the "Thumbtack" icon next to the "Immerse with Migaku", this will pin the extension's Extension Menu Button onto your main Chrome toolbar, making reaching it much more convenient._

### Migaku Player

Migaku Player is a video player that allows you to play your own local video and subtitle files while using all of the Immerse with Migaku Browser Extension functionality that is available on [Supported Streaming Platforms](#supported-streaming-platforms).

Migaku Video Player shares almost all of its functionality found with that found in the [Streaming Site Integration](#streaming-site-integration).

The shared functionality includes:

- [The Migaku Toolbar](#the-migaku-toolbar)
- [The Subtitle Browser](#the-subtitle-browser)
- [The Font Settings Button](#the-font-settings-button)
- [The Subtitle Settings Button](#the-subtitle-settings-button)
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

When a video has been loaded the video currently being played will be displayed to the right of the "Load Videos" button. To the left and right of the name of the video currently being played you will find the "Previous Video" and "Next Video" buttons, click them will play the previous or next video in [the Migaku Player Playlist](#the-migaku-player-playlist) respectively.

#### The Migaku Player Playlist

<!--Opening the Playlist, Playing a Different Video, then Loading a New Video to Clear the Playlist-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/playlist-functionality.mp4"></migaku-video>

Pressing the "Load Videos" button when one or more videos have been loaded into Migaku Player will display the Migaku Player Playlist in the left half of the popup window.

- Clicking the play button next to the name of any video file will play that file.
- Loading in any new video files will destroy the current playlist and create a new one from the newly loaded video files.

To find out more about [Instant Anki Flashcard Creation](#instant-card-creation) with Migaku Player, please reference [the relevant section](#instant-card-creation).

## The Settings Page

The Settings Page is accessed by clicking the "Settings" button in [the Extension Menu](#the-extension-menu).

The Settings Page has four tabs:

1. [Text & Font](#the-text-and-font-tab)
1. [Recording Settings](#the-recording-settings-tab)
1. [Word Data](#the-word-data-tab)
1. [Word Browser](#the-word-browser-tab)

### The Text and Font Tab

The Text & Font Tab allows you to customize the appearance of:

- The Main Subtitles (the subtitles loaded by [Main Language Selector](#default-subtitle-buttons)).
- The Secondary Subtitles (the subtitles loaded by the [Secondary Language Selector](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player)).

Any changes made here will be reflected on all [Supported Streaming Platforms](#supported-streaming-platforms) and on [Migaku Player](#migaku-player).

For both the Main Subtitles and Secondary Subtitles you can:

<!--Changing Fonts, Color, and Size and Showing the Preview Change-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/font-previewing.mp4"></migaku-video>

1. Change the font being used.
   - The first drop-down menu is the language group of fonts that you would like to use.
   - The second drop-down menu is the specific font within that group that you would like to use.
1. Change the size of the font.
1. Change the main color.
1. Change the border color.
1. Change the border-width.

_\* The font preview will be updated whenever any changes are made._

There are also two Secondary Subtitle exclusive options:

1. Enabled
   - If unchecked the [Secondary Language Selector](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player) and Secondary Subtitles will be completely disabled.

<!--Hover Over Secondary Subtitles to Unblur Them-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/hover-to-unblur.mp4"></migaku-video>

1. Blur Until Hovered
   - If checked Secondary Subtitles are blurred until they are hovered, else if unchecked they are never blurred.

Once you have finished adjusting these settings you must hit the "Save Changes" button at the top right corner of each box to save those changes. You can reset to the default settings at any time by pressing the "Reset Defaults" button.

You will need to reload any page that is already using the extension for the changes to take effect.

### The Recording Settings Tab

![Picture of the Recording Settings Tab](/content-images/tools-guides/migaku-browser-extension/recording-settings-tab.png)
The Recording Settings Tab is where you can adjust any settings related to recording audio or taking pictures when [creating Anki Flashcards](#instant-flashcard-creation).

Currently there are 2 settings:

- Start Time Padding (ms).
  - The number of milliseconds before the original subtitle line's starting time to begin recording.
- End Time Padding (ms):
  - The number of milliseconds before the original subtitle line's ending time to end recording.

_\* The subtitle timings of different videos can vary substantially, it is likely that you may at times want to adjust these settings to ensure no audio is cut off when [creating Anki Flashcards](#instant-flashcard-creation)._

You will need to reload any page that is already using the extension for the changes to take effect.

### The Word Data Tab

![Picture of the Word Data Tab](/content-images/tools-guides/migaku-browser-extension/word-data-tab.png)
The Word Data Tab is where you can manage your [Word Learning Status](#word-learning-statuses) Word List.

At the top of this tab you will see a drop-down menu. This drop-down menu is for selecting which language you would like to manage your [Word Learning Statuses](#word-learning-statuses) for. Because currently, `Japanese` is the only language that supports [Word Learning Statuses](#word-learning-statuses) the only option in the drop-down menu is `Japanese`.

Besides the Language Drop-Down Menu, you will also see 4 buttons on this page:

1. Import Words From Anki
   - Clicking this button allows you to automatically import [Word Learning Statuses](#word-learning-statuses) for words you've studied in Anki.
   - Find out more about this function in the [Importing Learning Statuses From Anki](#importing-learning-statuses-from-anki) section.
1. Import Words From Backup
   - If you have downloaded a Word List Backup using the "Download a Backup" button talked about next, then you can import that backup by clicking this button and selecting it.
1. Download a Backup
   - Clicking this button will download a backup of your current Word List in `.json` format.
1. Delete your List
   - This will delete your current Word List.

Below these buttons your will find two numerical values.

1. Known Word Count
   - You can find out more about "Known Words" [here](#word-learning-statuses) .
1. Learning Word Count
   - You can find out more about "Learning Words" [here](#word-learning-statuses) .

_\* Currently a progress bar is not implemented to show you how far along in the process the import is. You will know when the import is finished because you will see the "Known Word Count" and "Learning Word Count" values update when importing finishes. Importing from Anki takes considerably longer than importing from a backup. We will be implementing a Progress Bar in the very near future._

<!--Making a Word List Backup, Deleting, and then Importing the Backup-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/backup-delete-import-word-list.mp4"></migaku-video>

Here we are downloading a backup of our current Word List, then deleting our Word List within the extension, then re-importing our Word List from the Backup we just made. This is just to demonstrating the functionality of each button of course, as there would never be a need to do these actions in this order.

**_\* Importing words from either Anki or from a Backup will not overwrite your current Word List. Instead the 2 lists will be combined and words in your current Word List will be updated. You can find out more about how this works in [this section](#how-word-lists-are-combined)_**

### The Word Browser Tab

<!--Browsing and Searching for Words in Word List-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/browse-search-word-list.mp4"></migaku-video>

The Word Browser Tab simply allows you to browse and search for words in your Word List.

## Hotkey Overview

![Migaku Browser Extension Hotkeys](/content-images/tools-guides/migaku-browser-extension/hotkeys-browser-extension.png)

## Main Features

The Immerse with Migaku Browser extension has a wide variety of features and integrates with a couple of our other <internal-link to="/tools-guides">Migaku Software Projects</internal-link>.

### Migaku MPV Integration

<!--Playing a Video With Migaku MPV-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/using-migaku-mpv.mp4"></migaku-video>

<internal-link to="/tools-guides/migaku-mpv/guide">Migaku MPV</internal-link> is our official <a href="https://mpv.io/" target="_blank">MPV Player</a> plugin!

You can find out more about Migaku MPV on <internal-link to="/tools-guides/migaku-mpv/guide">its designated page</internal-link>. Know however, that using Migaku MPV along with the Immerse with Migaku Browser Extension is entirely optional. Migaku MPV is designed to help those of you who primarily study from your own downloaded video files, and have many files that are incompatible with [Migaku Player](#migaku-player). If that's the situation you find yourself in, be sure to check Migaku MPV out!

### Migaku Dictionary Integration

Making use of the integration with <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary </internal-link> is an integral part of using the Immerse with Migaku Extension to its full potential.

If you have not yet installed <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary</internal-link>, please click <internal-link to="/tools-guides/migaku-dictionary/manual#installation">this link</internal-link> to view its installation instructions.

The main features that this integration allows are the [card creation features](#instant-card-creation) which are covered in their own section, and the ability to easily search the dictionary, which we will go over now.

#### Searching in the Migaku Dictionary

There are 3 types of searches that can be carried out from the Immerse with Migaku Browser Extension to the <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary</internal-link> Add-on:

- Searching text that you have selected/highlighted.
- Automatically Searching All Unknown Words in a Subtitle Line.
- Searching a word from its [Word Learning Status Popup](#the-word-learning-status-popup).

##### Searching the Selected Text

This feature is currently only available on [Supported Streaming Platforms](#supported-streaming-platforms) and on [Migaku Player](#migaku-player).

Currently you must use <internal-link to="/tools-guides/migaku-dictionary/manual#global-hotkeys">Migaku Dictionary's Global Hotkeys</internal-link> if you would like to search selected/highlighted text on other websites.

You can search any text that you have selected by:

<!--Searching Selected Text in a Subtitle Line-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-selected-in-sub.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right of the currently displayed subtitle when hovered.

<!--Searching Selected Text in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-selected-in-sub-browser.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right a subtitle line in the Subtitle Browser.

##### Automatically Searching All Unknown Words in a Subtitle Line

This feature is exclusive to languages with [Word Learning Status Support](#word-learning-statuses) (currently only `Japanese`), and also only currently works on [Supported Streaming Platforms](#supported-streaming-platforms) and on [Migaku Player](#migaku-player).

To use this requires that your have already [Parsed the Words Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website) of the [Main Language](#default-toolbar-buttons) subtitles.

Once you have done so you can search all unknown words by either simply:

<!--Searching All Unknown Words in a Subtitle Line-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-all-unknown-words-in-sub.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right of the currently displayed subtitle when hovered.

<!--Searching All Unknown Words in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-all-unknown-words-in-sub-browser.mp4"></migaku-video>

- Clicking the "Search" button that appears to the right a subtitle line in the Subtitle Browser.

##### Searching from Learning Status Popups

Once you have [Parsed the Words Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website) on a page, then hovering over a word on that page will cause a [Word Learning Status Popup](#the-word-learning-status-popup) to appear.

<!--Searching a Word From the Word Learning Status Popup-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/searching-from-popup.mp4"></migaku-video>

In this popup, which is covered in more detail in [its section of this guide](#the-word-learning-status-popup), you will find a Search button in the top right corner, clicking that button will search the word appearing in the popup.

_This functionality works on all pages where [Word Learning Statuses](#word-learning-statuses) are available._

### Instant Flashcard Creation

There are several ways to make fast high quality SRS flashcards for Anki using the Immerse with Migaku Browser Extension and [Migaku Dictionary](#migaku-dictionary-integration). Let's take a look at them.

Currently instant flashcard creation is only for [Supported Streaming Platforms](#supported-streaming-platforms) and [Migaku Player](#migaku-player). On other sites you can use <internal-link to="/tools-guides/migaku-dictionary/manual#global-hotkeys">Migaku Dictionary's Global Hotkeys</internal-link> to create cards very quickly in a similar way to what is explained below.

**Before you can create any cards you must [Allow Recording in the Extension Menu](#the-extension-menu).**

_\* If you have not yet installed <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary </internal-link>, please click <internal-link to="/tools-guides/migaku-dictionary/manual#installation">this link</internal-link> to view its installation instructions.

#### Creating a Card from a Single Subtitle Line

There are two ways to create an Anki flashcard from a single subtitle line:

<!--Creating a Card from Current Subtitle-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/card-from-current-sub.mp4"></migaku-video>

1. Clicking the Anki button that appears to the right of the currently displayed subtitle when hovered.

<!--Creating a Card from a Single Subtitle Line in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/card-from-single-sub-in-browser.mp4"></migaku-video>

1. Clicking the Anki button that appears to the right a subtitle line in [the Subtitle Browser](#the-subtitle-browser).

Once the Anki button is clicked:

1. The extension will automatically play the video, record the necessary audio, take a screenshot, and pause the video when it is finished.
1. Then it will send the necessary information to Migaku Dictionary and its <internal-link to="/tools-guides/migaku-dictionary/manual#card-exporter">tCard Exporter </internal-link> will be opened.
   - Please reference <internal-link to="/tools-guides/migaku-dictionary/manual#card-exporter">the Card Exporter section of the Migaku Dictionary Add-on's Manual</internal-link> if you are not familiar with using the Card Exporter.

**<internal-link to="/tools-guides/migaku-dictionary/manual#main-dictionary-window">Migaku Dictionary's Dictionary Window</internal-link> must be open for card creation to work.**

#### Creating a Card from Multiple Subtitle Lines

To create a single Anki flashcard from multiple subtitle lines:

<!--Creating a Card from Multiple Subtitle Lines in the Subtitle Browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/card-from-multiple-subs.mp4"></migaku-video>

1. [Open the Subtitle Browser](#the-subtitle-browser)
1. Left click the timestamps of the subtitles you would like to make a single card for.
   - The subtitles must be connected. You cannot have unselected subtitles in between selections.
1. Click any of the Anki buttons in [the Subtitle Browser](#the-subtitle-browser).

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

1. Press the "Export All" button on [the Migaku Toolbar](#the-migaku-toolbar).

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
   - This requires a [language that supports Word Learning Statuses](#supported-languages).
1. Press the "Export 1T" button on [the Migaku Toolbar](#the-migaku-toolbar).

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

### Subtitle Related Features

There are various features related to subtitle files that add functionality to [Supported Streaming Platforms](#supported-streaming-platforms) and [Migaku Player](#migaku-player).

#### Dual Subtitle Tracks

![Picture of 2 Subtitles on Screen at Once](/content-images/tools-guides/migaku-browser-extension/two-subs-on-screen.png)

The Immerse with Migaku Browser Extensions allows you to select a Main Language subtitle track and a Secondary Language subtitle track.

You can find out more about this in [this section of the guide](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player).

#### Subtitle Modes

[The Migaku Toolbar on Supported Streaming Sites and the Migaku Player page](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player) has support for multiple Subtitle Modes.

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

#### Skip Mode

[The Migaku Toolbar on Supported Streaming Sites and the Migaku Player page](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player) has support for Skip Mode.

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

#### Downloading Subtitles

<!--Downloading a Subtitle-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/downloading-a-subtile.mp4"></migaku-video>

[The Migaku Toolbar on Supported Streaming Sites and the Migaku Player page](#the-toolbar-on-a-supported-streaming-site-and-on-migaku-player) has a "Download Subtitles" button, pressing this button will download the subtitle selected in the [Main Language Selector](#default-subtitle-buttons).

_If you [retime a subtitle you have loaded](#retiming-subtitles-you-have-loaded) you can then use the "Download Button" to download a version of the retimed subtitle for later use._

#### Loading Local Subtitles

Clicking [the Subtitle Settings Button](#the-subtitle-settings-button) which appears when you hover over the top right corner of the video player will open the Subtitle Adjustment Window.

![The Top Three Buttons in the Main Subtitle Subwindow](/content-images/tools-guides/migaku-browser-extension/loading-local-subs-buttons.png)

There is one subwindow for the Main Subtitle and one for the Secondary Subtitle. In each subwindow the top three options are related to loading in a local subtitle file.

<!--Importing and Selecting a Subtitle File as the Main Language-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/import-and-select-sub-as-main.mp4"></migaku-video>

In order to load local subtitles:

1. Click the "Select SRT File(s)" button and select 1 or more `.srt` subtitle files.
1. In the language drop-down select the language of the subtitles.
   - If the language you select here has [Extra Functionality](#languages-with-extra-functionality) then when this subtitle is selected you will have access to that functionality.
   - "Other" is a blanket option covering all other languages that currently have no [Extra Functionality](#languages-with-extra-functionality).
1. Click the "Import SRT" file to import the file(s).

##### Retiming Subtitles You Have Loaded

Clicking [the Subtitle Settings Button](#the-subtitle-settings-button) which appears when you hover over the top right corner of the video player will open the Subtitle Adjustment Window.

![The Bottom 2 Options in the Main Subtitle Subwindow](/content-images/tools-guides/migaku-browser-extension/retiming-subs-options.png)

There is one subwindow for the Main Subtitle and one for the Secondary Subtitle. In each subwindow the bottom two options are related to retiming a subtitle. It is important to remember that you can only retime [subtitles that you have loaded in yourself](#loading-local-subtitles).

<!--Retiming a Subtitle-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/retiming-a-subtitle.mp4"></migaku-video>

In order to retime a locally loaded subtitle file:

1. Ensure you have correctly selected the subtitle you want to retime in the [Main/Secondary Language Selector](#default-toolbar-buttons)
1. Input the a number in milliseconds of the offset that you wish to apply to the subtitles.
   - A positive number will move the subtitles towards the end of the video.
   - A negative number will move the subtitles towards the beginning of the video.
1. Click the "Adjust Timings" button, to update the subtitles timing.
   - You will see the "current Adjustement (ms)" value update to reflect the changes you have made.

### Word Learning Statuses

![One Line of Text With Learning Status Underlining, One Word of Each Status At Least](/content-images/tools-guides/migaku-browser-extension/one-line-with-underlining.png)

Word Learning Statuses are a way of keeping track of the words you "Known", the words you are "Learning", and the words that are still "Unknown" to you.

In fact the three learning statuses are just that.

1. Known - Words you know.
2. Seen - Words you have begun studying or have seen recently, but don't know well yet.
3. Unknown - Words you don't know yet

#### Supported Languages

The current list of languages that supports Words Learning Statuses:

1. Japanese

#### Parsing the Learning Statuses in Subtitles or on a Website

![The Word Status and Parse Buttons](/content-images/tools-guides/migaku-browser-extension/word-status-parse-buttons.png)

When you select a language that supports learning statuses, you will see two buttons added to [the Migaku Toolbar](#the-migaku-toolbar):

1. The "Word Status | Known: 0" Button
   - This is a toggleable option that enables/disables [Learning Status Underlining](#learning-status-underlining).
   - The button's text will become green when it is enabled.
1. The "Parse" Button
   - Clicking this button will both parse the words in a subtitle or on a website to apply Word Learning Status Information to them, and will also apply [Extra Features](#extra-features) if the Main Language selected has them.

<!--Parsing a Website with Only Learning Status Underlining Enabled-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/parse-with-underlines.mp4"></migaku-video>

When the "Word Status | Known: x" button is toggled on _(text is green)_ and you hit the parse button then you the text will be rendered with [Learning Status Underlining](#learning-status-underlining).

<!--Parsing a Website with earning Status Underlining Disabled Hover Over Word-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/parse-without-underlines-hover.mp4"></migaku-video>

When the "Word Status | Known: x" button is toggled off _(text is white)_ and you hit the parse button then you the text will be rendered without [Learning Status Underlining](#learning-status-underlining). However, if you hover over a word you will see in [the Word Learning Status Popup](#the-word-learning-status-popup) that Word Learning Statuses have still been applied to the parsed words. The only difference is that that information is not displayed with underlining.

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

#### The Word Learning Status Popup

After you have [Parsed the Words Learning Statuses](#parsing-the-learning-statuses-in-subtitles-or-on-a-website) of subtitles or a website, the Word Learning Status Popup will then display when a word is hovered.

![Picture of the Word Learning Status Popup for the Word 磨く as a Known Word](/content-images/tools-guides/migaku-browser-extension/learning-status-popup.png)

By default the popup contains the following information:

1. The dictionary form of the hovered word.
1. A search icon in the top right that will [search the dictionary form when clicked](#searching-from-learning-status-popups).
1. Three Buttons for each of the Learning Statuses.
   - The button for the current Learning Status of the word has a white border.

Along with this information, extra language dependent information may also be shown as well. Check out the [Extra Features](#extra-features) section to find out about what other information will be displayed here for different languages.

##### Changing the Learning Status of a Word

<!--Changing the Learning Status of 磨く to Unknown-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/migaku-changed-to-unknown.mp4"></migaku-video>

Clicking one of the three Learning Statuses in [the Word Learning Status Popup](#the-word-learning-status-popup) will change the learning status of that word to the Learning Status that was clicked.

#### Importing Learning Statuses From Anki

Importing Instructions:

1. Navigate to the [Word Data Tab](#the-word-data-tab) of [the Settings Page](#the-settings-page).
1. Press the "Import Words From Anki" button.
1. You will then see the [Card Type Options Window](#card-type-options) which is covered in the next section.

##### Card Type Options

![Card Type Options Window](/content-images/tools-guides/migaku-browser-extension/card-type-options.png)
Once you've selected your `collection.anki2` file, you will see the Card Type Options Window.

The Card Type Options Window allows you to customize which <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> are imported, and which <internal-link to="/tools-guides/anki/guide#notes">Fields</internal-link> from those <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> are imported.

The Card Type Options Window Contains the following options:

1. The Known Interval
   - This is the first option you will see at the top of the window. The Known Interval is the number of days <internal-link to="/tools-guides/anki/guide#how-spaced-repetition-works">the interval of a card</internal-link> must be, for the words imported from that card to be considered Known. Words from cards with an interval less than the Known Interval will be considered Seen.
     - If a word is found on both a card with an interval of 21 days and a card with an interval of less than 21 days, then the word is considered Known.
   - Leaving the default value of 21 is recommended. 21 is the number of day the interval of a card must be in Anki to be considered a <a href="https://docs.ankiweb.net/#/stats?id=types-of-cards" target="_blank">Mature Card</a>.
1. An Option Group for each <internal-link to="/tools-guides/anki/guide#card-types">Card Type</internal-link> in your collection organized by that Card Type's <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link>.
   - Each Card Type has three possible options:
     - Only Front
       - Will import the words found in all <internal-link to="/tools-guides/anki/guide#notes">Fields</internal-link> that are shown on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front Side of the Card</internal-link>.
     - Front and Back
       - Will import the words found in all <internal-link to="/tools-guides/anki/guide#notes">Fields</internal-link> that are shown on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front Side of the Card</internal-link> and the <internal-link to="/tools-guides/anki/guide#the-back-(answer)-side-of-a-card">Back Side of the Card</internal-link>.
     - Manual Selection
       - Allows you to individually select the <internal-link to="/tools-guides/anki/guide#notes">Fields</internal-link> whose words will be imported.

![A Card Type That Will Not Be Imported](/content-images/tools-guides/migaku-browser-extension/no-import-card-type.png)

To not import words from a Card Type:

1. Select Manual Selection but do not select any fields to import.

**If you are studying Chinese or Japanese it is recommended that you do not import any Kanji/Hanzi decks as they will lead to innacurate Known and Learned Word Counts.**

<!--Hitting the Confirm Button and Seeing Updated Word Count-->

<migaku-video controls src="/content-images/tools-guides/migaku-browser-extension/hitting-confirm.mp4"></migaku-video>

After you've set up which <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> you would like to import then you can hit the "Confirm" button at the bottom of the screen.

- Hit the confirm button only once.
- Currently a progress bar is not implemented it may appear as if nothing is happening.

When the process is finished you will see your Known Word and Learning Word Count update to reflect your knowledge from Anki.

#### Updating Your Word List

When you [import words from Anki](#importing-learning-statuses-from-anki) the known words from Anki are [combined with your current Word List](#how-word-lists-are-combined) allowing you to update your list with new words learned in Anki at any time.

##### How Word Lists are Combined

Word Lists are combined in a very simple way. If a word that is being imported has a Learning Status that is more "Known" than the current Learning Status for that word in your Word List then it will be updated.

For example, if the word `磨く` (Migaku), was an Unknown, or Seen word in your word list but was used in a card on Anki with an interval greater than or equal to 21 days then its learning status would be updated to Known.

## Extra Features

Extra features are language exclusive bonus features that should make studying a particular language more effective and efficient.

### Extra Features for Japanese

![The Japanese Extra Feature Buttons](/content-images/tools-guides/migaku-browser-extension/japanese-extra-buttons.png)

There are three Extra Feature Buttons added to [the Migaku Toolbar](#the-migaku-toolbar) when Japanese is selected:

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

> - If the accent is on the first mora, then the pitch starts high, drops suddenly on the second mora, then levels out. The pitch may fall across both morae, or mostly on one or the other (depending on the sequence of sounds)—that is, the first mora may end with a high falling pitch, or the second may begin with a (low) falling pitch, but the first mora will be considered accented regardless. The Japanese describe this as **<span style="color:#e60000">頭高(あたまだか)/Atamadaka</span>** (literally, "head-high").

_<span style="color:#e60000">Atamadaka words are colored red by default.</span>_

![Picture of a Nakadaka Word Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/nakadaka-pitch.png)

> - If the accent is on a mora other than the first or the last, then the pitch has an initial rise from a low starting point, reaches a near-maximum at the accented mora, then drops suddenly on any following morae. This accent is referred to as **<span style="color:#e68a00">中高(なかだか)/Nakadaka</span>** ("middle-high").

_<span style="color:#e68a00">Nakadaka words are colored light orange by default.</span>_

![Picture of an Odaka Word Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/odaka-pitch.png)

> - If the word has an accent on the last mora, the pitch rises from a low start up to a high pitch on the last mora. Words with this accent are especially distinguishable from accent-less words because the pitch immediately drops on a following particle such as が ga or に ni. In Japanese this accent is called **<span style="color:#00802b">尾高(おだか)/Odaka</span>** ("tail-high").

_<span style="color:#00802b">Odaka words are colored green by default.</span>_

![Picture of a Heiban Word Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/heiban-pitch.png)

> - If the word doesn't have an accent, the pitch rises from a low starting point on the first mora or two, and then levels out in the middle of the speaker's range, without ever reaching the high tone of an accented mora. In Japanese this accent is named **<span style="color:#005ce6">平板(へいばん)/Heiban</span>** ("flat-board").

_<span style="color:#005ce6">Heiban words are colored blue by default.</span>_  
_\* Heiban is by far the most common pattern._

##### A Special Note About Verbs and Adjectives

**Please note that Pitch Accent Coloring applies on a per word basis within the extension. It is meant to help you learn the pitch accent of the dictionary form of the word. The actual pitch of the word may differ based on how it is conjugated, how it is used in a sentence, or where it is found within a sentence.**

Verbs and Adjectives in Japanese are either Heiban or have a drop 2 moras from their final mora.

Since this rule applies to all verbs and adjectives in Japanese we can make a more simple distinction in pitch for verbs and adjectives. They have one of two patterns:

![A Heiban Verb Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/heiban-verb.png)

1. Heiban - Colored Blue
   - Means that the unconjugated dictionary form of this word is Heiban.

![A Kifuku Verb Being Hovered with Popup Displayed](/content-images/tools-guides/migaku-browser-extension/kifuku-verb.png)

1. <span style="color:#ac00e6">起伏(きふく)/Kifuku</span> ("rise-fall")
   - Means that the unconjugated dictionary form has a drop. (You can [hover a word to see where the drop occurs](#extra-features-on-the-learning-status-popup).)

_<span style="color:#ac00e6">Kifuku verbs and adjectives are colored purple by default.</span>_

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

Some extra information (when available) is added to the [Word Learning Status Popup](#the-word-learning-status-popup) when the [Main Language](#default-toolbar-buttons) is set to Japanese:

1. The dictionary form colored with its pitch accent coloring with a bar showing where the pitch drops.
1. The pitch accent pattern written in Japanese ("平板", "頭高", "中高", "尾高", "起伏"), again in the color of that pattern.
1. The pitch accent dictionary entry for the dictionary form of the word with the number pitch accent notation used in Japanese dictionaries (`[0]`, `[1]`, `[2]`, etc.).
1. A speaker icon that when clicked will play the audio of the dictionary form.

### Extra Features for Other Languages

Currently there are extra features for:

- `Cantonese`
- `English`
- `French`
- `German`
- `Japanese`
- `Mandarin`
- `Portuguese`
- `Spanish`

Extra features are coming to other languages in the very near future!
