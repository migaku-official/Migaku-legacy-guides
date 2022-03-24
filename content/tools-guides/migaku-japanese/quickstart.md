---
title: Migaku Japanese Quick Start Guide
shortTitle: Quick Start Guide
description: The Migaku Japanese Add-on provides a host of features that makes studying Japanese with Anki more fun, convenient, and efficient.
headerImage: /content-images/tools-guides/migaku-japanese/migaku-japanese-header.png
position: 1
---

# Migaku Japanese Quick Start Guide

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
  - [Ensuring You Have the Correct Anki Version](#ensuring-you-have-the-correct-anki-version)
  - [Installing the Add-on](#installing-the-add-on)
  - [Installing the Audio Files](#installing-the-audio-files)
- [Updating](#updating)
- [Uninstalling](#uninstalling)
- [Major Features](#major-features)
  - [The Migaku Japanese Note Type](#the-migaku-japanese-note-type)
    - [How to use the Note Type](#how-to-use-the-note-type)
    - [Converting Your Cards to the Migaku Japanese Note Type](#converting-your-cards-to-the-migaku-japanese-note-type)
  - [The Migaku Syntax](#the-migaku-syntax)
    - [The Reading](#the-reading)
    - [The Dictionary Form Reading](#the-dictionary-form-reading)
    - [The Pitch Accent(s)](<#the-pitch-accent(s)>)
  - [Pitch Accent Coloring](#pitch-accent-coloring)
  - [Pitch Accent Shapes](#pitch-accent-shapes)
  - [Pitch Accent Graph Popup on Hover](#pitch-accent-graph-popup-on-hover)
  - [Pitch Graphs and Audio](#pitch-graphs-and-audio)
  - [Clicking Words to Play Audio](#clicking-words-to-play-audio)
  - [Generating the Migaku Syntax](#generating-the-migaku-syntax)
    - [Generating the Syntax for a Single Card](#generating-the-syntax-for-a-single-card)
      - [The Sentence Button ("文")](#the-sentence-button)
      - [The Word Button ("語")](#the-word-button)
    - [Removing the Syntax from a Single Card](#removing-the-syntax-from-a-single-card)
    - [Generating the Syntax for Many Cards](#generating-the-syntax-for-many-cards)
    - [Using Spaces Within the Syntax](#using-spaces-within-the-syntax)
    - [Searching in the Card Browser](#searching-in-the-card-browser)
  - [Handling Generation Mistakes](#handling-generation-mistakes)
    - [Manually Editing the Syntax](#manually-editing-the-syntax)
    - [Adding Overwrite Rules](#adding-overwrite-rules)
    - [Dealing with Words Written the Same with Different Readings](#dealing-with-words-written-the-same-with-different-readings)
- [Reference](#reference)
  - [Adding an Image Field to the Migaku Japanese Note Type](#adding-an-image-field-to-the-migaku-japanese-note-type)
  - [Pitch Accent Patterns](#pitch-accent-patterns)
  - [Compound Words with 2 Patterns](#compound-words-with-2-patterns)
  - [How to Perform a Full Sync](#how-to-perform-a-full-sync)

## Intro

Migaku Japanese is an Anki add-on that provides a host of features that makes studying Japanese more fun, convenient, and efficient. Some of Migaku Japanese's main features include [automatic reading (furigana) generation](#generating-the-migaku-syntax), [audio recordings for the vast majority of words](#clicking-words-to-play-audio), and [Pitch Accent Coloring](#pitch-accent-coloring) which makes learning the high and low tone changes of Japanese a lot easier.

One of the best parts of Migaku Japanese is that most of these features work across all Anki platforms, including the computer version, AnkiWeb, Anki Mobile, and AnkiDroid!

**We hope you find this add-on helpful! If you are in a position where you are financially able please consider <a href="https://www.patreon.com/Migaku" target="_blank">supporting the Migaku Team</a>! Our software projects take thousands of hours to build, update, and maintain and we are only able to continue our work thanks to our supporters! We are deeply and humbly grateful to everyone who decides to support Migaku!**

## Installation

If you have not yet installed Anki and need help then please <internal-link to="/tools-guides/anki/guide#installation">click here</internal-link> to find out how to install an Anki version compatible with the Migaku Toolset.

**If you are new to Anki, we suggest you to read our <internal-link to="/tools-guides/anki/guide">Anki Quick Start Guide</internal-link> which covers all of the fundamentals of Anki from the perspective of a language learner.**

### Ensuring You Have the Correct Anki Version

The current recommended version of Anki for those using the Migaku Add-on series is <internal-link to="/tools-guides/anki/guide#installation">Anki 2.1.35</internal-link>.

_\* A legacy version of the Migaku Add-on series is also available for Anki 2.1.22-23. But those versions are no longer updated or maintained, and <internal-link to="/tools-guides/migaku-japanese/support">support</internal-link> cannot be offered for them. If you wish to receive <internal-link to="/tools-guides/migaku-japanese/support">support</internal-link> then please ensure you are using the recommended version of Anki._

If you have not yet downloaded Anki, please <internal-link to="/tools-guides/anki/guide#installation">visit our Anki download page</internal-link> to ensure you download the correct version of Anki for your operating system.

<!--Checking Your Anki Version-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/checking-anki-version.mp4"></migaku-video>

You can check your Anki version on Windows by:

1. Navigating to `Help->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

You can check your Anki version on Mac by:

1. Navigating to `Anki->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

### Installing the Add-on

Migaku Japanese can be installed the same way as any other Anki add-on.

You do this by pasting Migaku Japanese's installation Code into Anki's _"Install Add-on"_ window. You can access this window by navigating _`Tools->Add-ons->Get Add-on's`_ from Anki's top menu.

Migaku Japanese's installation code is `278530045`.

<!--Migaku Japanese Add-on Installation-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/japanese-addon-installation.mp4"></migaku-video>

### Installing the Audio Files

In order to install the audio files needed to download and add the `accentAudio` folder into your Migaku Japanese installation.

First you must <a href="https://mega.nz/file/yiwlDIaA#e1CQot7oapShNt36Ys5XVOPwf-DsGT8lkw9nMeVG18o" target="_blank">download the `accentAudio.zip` file</a>.

Once you have downloaded the ZIP file you must add it to the `user_files` folder of your Migaku Japanese installation folder.

You can reach your `[Migaku Japanese Installation Folder]/user_files` folder by:

1. Navigating to `Tools->Add-ons` from Anki's top menu bar.
1. Selecting the Migaku Japanese Add-on in the add-on list.
1. Clicking the _"View Files"_ button.
1. Navigating to your `user_files` from the Migaku Japanese installation folder.

To install the audio files into the `user_files` folder:

1. Unzip the contents of `accentAudio.zip`, which is a single folder called `accentAudio`, into the `user_files` folder.
   - The path to the audio files will then be `[Migaku Japanese Installation Folder]/user_files/accentAudio/[Audio Files]`

Once you have done this the [Audio Features](#pitch-graphs-and-audio) should now work properly.

### Updating

<!--Migaku Japanese Update-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/japanese-addon-update.mp4"></migaku-video>

To update Migaku Japanese:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Click the "Check for Updates" button.
1. If an update is found you will be notified and asked if you would like to update. Confirm the update.
1. Restart Anki to begin using the update.

### Uninstalling

<!--Migaku Japanese Uninstall-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/japanese-addon-uninstall.mp4"></migaku-video>

To uninstall Migaku Japanese:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Select "Migaku Japanese".
1. Click "Delete"
1. Restart Anki.

## Major Features

Migaku Japanese has many useful features that will help you on your Japanese learning journey.

### The Migaku Japanese Note Type

<!--Showing a Front and Back of a Migaku Japanese Note Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/migaku-japanese-card-front-back.mp4"></migaku-video>

Migaku Japanese will automatically add the Migaku Japanese <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link> to your Anki Collection if a <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link> by the same name doesn't already exist.

The Migaku Japanese Add-on comes out of the box configured to work with the Migaku Japanese <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link>.

_\* You can prevent the add-on from automatically adding the Migaku Japanese <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link> by disabling [its associated setting on the Settings Window](#add-migaku-japanese-note-type)._

#### How to use the Note Type

The Migaku Japanese <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link> is a note type designed to be used with either <internal-link to="/tools-guides/anki/guide#general-recommended-sentence-card-format">Sentence Cards</internal-link> or <internal-link to="/tools-guides/anki/guide#general-recommended-audio-sentence-card-format">Audio Cards</internal-link>.

**We are currently planning on adding out-of-the-box support for other varieties of cards as well, such as <internal-link to="/tools-guides/anki/guide#general-recommended-vocabulary-card-format">Vocabulary Cards</internal-link>, and <internal-link to="/tools-guides/anki/guide#general-recommended-kanji-and-hanzi-card-format">Kanji Cards</internal-link>. **

These are the <internal-link to="/tools-guides/anki/guide#notes">Fields</internal-link> found on the Migaku Japanese <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link>:

1. Expression
   - This is the field where the sentence goes.
1. Meaning
   - This is the field where any definitions or images go.
1. Audio
   - Where the audio of the card goes.
1. Audio on Front
   - A <a href="https://docs.ankiweb.net/#/templates/generation?id=conditional-replacement" target="_blank">Conditional Field</a> that when empty will display the card as a <internal-link to="/tools-guides/anki/guide#">Sentence Card</internal-link>, and if it has any content at all will display the card as an <internal-link to="/tools-guides/anki/guide#general-recommended-audio-sentence-card-format">Audio Card</internal-link>
   - This field is hidden, and not visible either on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front of the Card</internal-link> or the <internal-link to="/tools-guides/anki/guide#the-back-(answer)-side-of-a-card">Back of the Card</internal-link> when being reviewed.

The Migaku Japanese Note Type is somewhat unique in that its "Audio on Front" field is a <a href="https://docs.ankiweb.net/#/templates/generation?id=conditional-replacement" target="_blank">Conditional Field</a>, when it is empty the card will display as a <internal-link to="/tools-guides/anki/guide#general-recommended-sentence-card-format">Sentence Card</general-recommended-sentence-card-format> with the "Expression" field on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front of the Card</internal-link>, but if the content of that field is not completely empty then the card will be displayed as an <internal-link to="/tools-guides/anki/guide#general-recommended-audio-sentence-card-format">Audio Card</internal-link> with the "Audio" field being displayed on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front of the Card</internal-link>:

<!--Toggling Audio on Front-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/toggling-audio-on-front.mp4"></migaku-video>

_Toggling between a Sentence Card and an Audio Card by filling in or deleting the contents of the "Audio on Front" field._

#### Converting Your Cards to the Migaku Japanese Note Type

The fastest way to get started using the Migaku Japanese Add-on is to convert your existing <internal-link to="/tools-guides/anki/guide#general-recommended-sentence-card-format">Sentence Cards</internal-link> to the Migaku Japanese Note Type. If you are also studying <internal-link to="/tools-guides/anki/guide#general-recommended-vocabulary-card-format">Vocabulary Cards</internal-link>, or other card varieties, then it is recommended that you do not convert them to the Migaku Japanese Note Type and instead [configure those Note Types to work with the Migaku Japanese Add-on](#active-fields-tab).

_\* Please note that if you use <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> that have multiple <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> associated with them that you also should not convert them to the Migaku Japanese Note Type, and you should similarly [configure them to work with the Migaku Japanese Add-on](#active-fields-tab)._

**If you will be converting cards from a Note Type that has a separate field for images, then you should first [add an Image Field to the Migaku Japanese Note Type](#adding-an-image-field-to-the-migaku-japanese-note-type) before converting your cards.**

To convert your cards to the Migaku Japanese Note Type:

1. Open Anki's Card Browser
1. Select a Note Type from the <internal-link to="/tools-guides/anki/guide#viewing-your-anki-collection">Filter List</internal-link> on the left side of the Card Browser Window
   - _You can only convert cards of a single Note Type at a time, so we use the filter list to ensure we are only selecting the cards of one Note Type at a time._
1. Select all of the cards of that Note Type by pressing "Ctrl+A" ("⌘+A" on Mac).
1. Right click one of the selected cards, and then click "Change Note Type..." in the drop-down menu that appears.
1. In the "Change Note Type" Window, select "Migaku Japanese" for the "New Note Type" value.
1. In the "Fields" section at the bottom of the "Change Note Type" Window.
   - Assign the sentence field from your cards to the "Expression" field.
   - Assign the field that holds definitions on your card to the "Meaning" field.
   - Assign the field that has audio on your cards to the "Audio" field.
   - (Optionally) if you have an image field on your cards and have [added an Image Field to the Migaku Japanese Note Type](#adding-an-image-field-to-the-migaku-japanese-note-type), then assign the Image field on your cards to the Image field you created on the Migaku Japanese Note Type.
   - Make sure to not assign anything to the "Audio on Front' field of the Migaku Japanese Note Type.

**If you don't wish to use the Migaku Japanese <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link> or have cards that aren't Sentence Cards that you would like to use with the Migaku Japanese Add-on, you can instead add Migaku Japanese support to your own <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> using the [Active Fields Tab of the Settings Window](#active-fields-tab).**

### The Migaku Syntax

![Migaku Syntax Labelled](/content-images/tools-guides/migaku-japanese/migaku-syntax-labelled.png)

Understanding the Migaku Japanese Syntax is an essential part of getting the most out of the Migaku Japanese Add-on. Luckily, the syntax is relatively easy to understand, it has 3 components:

1. The Reading
1. The Dictionary Form Reading
   - For verbs and adjectives only.
1. The Pitch Accent(s)

The syntax is as follows:

```
Word[Reading(,Dictionary Form Reading);pitch-accent(s)](Word-Suffix)
```

An example with a verb:

```
走[はしり,はしる;k2]ります
```

An example with a noun:

```
日本語[にほんご;h]
```

_\* The syntax itself is also surrounded by a single space character `" "` (unless it is at the beginning or ending value in a card's field's contents)._

#### The Reading

The Reading portion of the syntax is the text that will be shown as <a href="https://en.wikipedia.org/wiki/Furigana" target="_blank">Furigana</a> for the word in question:

![Reading Syntax and Prefiew Showing Furigana](/content-images/tools-guides/migaku-japanese/reading-and-furigana.png)

The Reading is either followed by a comma and [the Dictionary Form Reading](#the-dictionary-form-reading) (applies to verbs and adjectives):  
`Reading,Dictionary Form Reading`

Or it is followed by a semicolon and [the Pitch Accent(s)](<#the-pitch-accent(s)>):
`Reading;Pitch Accent(s)`

#### The Dictionary Form Reading

The Dictionary Form Reading will only ever be [generated](#generating-the-migaku-syntax) for verbs and adjectives.
An example with a verb:

```
走[はしり,はしる;k2]ります
```

The reason a Dictionary Form Reading is part of the syntax is because pitch accent information for verb and adjective conjugations is not currently implemented within the add-on. The verb and adjective pitch accent information applies to the Dictionary Form (for example `走る` and not `走ります`) of the word and thus the add-on generates the Dictionary Form Reading of adjectives and verbs so that a [Pitch Accent Graph Popup](#pitch-accent-graph-popup-on-hover) for the Dictionary Form of the word can be shown when the word is hovered:

<!--走ります Hovered Showind the Pitch Graph-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/hashirimasu-hovered.mp4"></migaku-video>

#### The Pitch Accent(s)

There are 5 different Pitch Accent Patterns used in the Migaku Japanese Add-on, and each of those patterns are represented by a letter:

- h: <span style="color:#005ce6">平板(へいばん)/Heiban</span>
- a: <span style="color:#e60000">頭高(あたまだか)/Atamadaka</span>
- n: <span style="color:#e68a00">中高(なかだか)/Nakadaka</span>
- o: <span style="color:#00802b">尾高(おだか)/Odaka</span>
- k: <span style="color:#ac00e6">起伏(きふく)/Kifuku</span>

If you are not familiar with Japanese pitch accent and what these patterns mean please check the [reference section about Pitch Accent Patterns](#pitch-accent-patterns)

**An important note when it comes to verbs and adjectives:**

The pitch accent value shown only applies to the dictionary form of the verb, and not to the particular conjugated form you are seeing. We do plan to eventually add verb and adjective conjugation pitch accent support to the add-on in the future though.

The Pitch Accent syntax will always come between a semicolon and a closing square bracket:

```
;Pitch Accent Syntax]
```

The syntax itself allows for expressing words that have pitch accent variants, and even [compound words with multiple pitch accents within that single word](#compound-words-with-2-patterns).

Let's take a look at an example of the syntax for a word with a single pitch accent, then a word with pitch accent variants, and finally a compound word with multiple pitch accents with that same word:

- A word with a single pitch accent:  
  ![意味 Hovered With Popup](/content-images/tools-guides/migaku-japanese/意味-hovered.png)
  - `意味[いみ;a]`
  - `意味` is always <span style="color:#e60000">頭高(あたまだか)/Atamadaka</span>.
- A word with pitch accent variants:  
  ![頭 Hovered With Popup](/content-images/tools-guides/migaku-japanese/頭-hovered.png)
  - `頭[あたま;o,n2]`
  - `頭` is either <span style="color:#00802b">尾高(おだか)/Odaka</span> or its variant of <span style="color:#e68a00">中高(なかだか)/Nakadaka</span>
  - We also notice that the `n` is followed by a `2`, this means that the drop happens after the 2nd kana character/mora when `頭` is <span style="color:#e68a00">中高(なかだか)/Nakadaka</span>. You can find out more about these numbers in this section [Special Nakadaka and Kifuku Syntax](#special-nakadaka-and-kifuku-syntax).
- A word with a single pitch accent:  
  ![内閣総理大臣 Hovered With Popup](/content-images/tools-guides/migaku-japanese/内閣総理大臣-hovered.png)
  - `内閣総理大臣[ないかくそうりだいじん;an4]`
  - `内閣総理大臣` is a compound word that has 2 pitch accents.
    - `内閣` is <span style="color:#e60000">頭高(あたまだか)/Atamadaka</span>
    - `総理大臣` is <span style="color:#e68a00">中高(なかだか)/Nakadaka</span>
    - The add-on however does not have the necessary data to correctly display this, to find out more about how these types of words are displayed please view the reference section about [Compound Words with 2 Patterns](#compound-words-with-2-patterns).

You can find out more about how this syntax is displayed by reading the sections about [Pitch Accent Coloring](#pitch-accent-coloring), [Pitch Accent Shapes](#pitch-accent-shapes), and [Pitch Accent Graph Popup on Hover](#pitch-accent-graph-popup-on-hover).

##### Special Nakadaka and Kifuku Syntax

<span style="color:#e68a00">中高(なかだか)/Nakadaka</span> and <span style="color:#ac00e6">起伏(きふく)/Kifuku</span> words have a drop somewhere within the word. In order to represent exactly which kana/mora this drop will happen after a number is included after the letter that represents each pattern:

- `協力者[きょうりょくしゃ;n3]`
  - The drop is after the 3rd mora.
- `考[かんが,かんがえる;k4,k3]えます`
  - The drop is after the 4th or 3rd mora.

### Pitch Accent Coloring

<!--Showing a Front and Back of a Migaku Japanese Note Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/migaku-japanese-card-front-back.mp4"></migaku-video>

When a [Display Type](#display-type) that supports Pitch Accent Coloring is applied to a field. Such as on the "Expression" and "Meaning" fields on the Back of the Card of [the Migaku Japanese Note Type](#the-migaku-japanese-note-type), then words will be colored according to the pitch accent of their dictionary form.

- <span style="color:#005ce6">平板(へいばん)/Heiban words are colored in blue.</span>
- <span style="color:#e60000">頭高(あたまだか)/Atamadaka words are colored in red.</span>
- <span style="color:#e68a00">中高(なかだか)/Nakadaka words are colored in light orange.</span>
- <span style="color:#00802b">尾高(おだか)/Odaka words are colored in green.</span>
- <span style="color:#ac00e6">起伏(きふく)/Kifuku words are colored in purple.</span>

These colors can be changed in the [Japanese Setting Window](#colors).

You can find out more information about Pitch Accent Patterns in [their reference section](#pitch-accent-patterns).

![Picture of a "孤立無援" Being Hovered with Add-on Popup Displayed](/content-images/tools-guides/migaku-japanese/migaku-jp-koritu-muen.png)
_\* Some compound words can have multiple pitch accent patterns within a single word. In such cases you might see the background of the word being colored along with the word's text as seen above. You can find out more about why this is in the [Compound Words with 2 Patterns](#compound-words-with-2-patterns) reference article._

**Please remember that Pitch Accent Coloring applies on a per word basis. It is meant to help you learn the pitch accent of the dictionary form of the words on your cards. The actual pitch of the word may differ based on how it is conjugated, how it is used in a sentence, or where it is found within a sentence.**

### Pitch Accent Shapes

Pitch Accent Shapes are used to call attention to words that have multiple pitch accent variants. They can be enabled or disabled using the [Display Shapes](#display-shapes) option in the Japanese Settings Window.

There are 2 types of pitch shapes:

1. A Pitch Diamond
   - One or more Pitch Diamonds are shown when a word's pitch accent variant(s) is a single [Pitch Accent Pattern](#pitch-accent-patterns).
   - A Pitch Diamond can be hovered to see a [Pitch Accent Popup](#pitch-accent-graph-popup-on-hover) for that variant pattern.
   - An example would be `頭[あたま;o,n2]`, the variant pattern being `n2`.
     ![Hovering the Diamond After 頭](/content-images/tools-guides/migaku-japanese/diamond-after-頭.png)
1. A Pitch Circle
   - One or more Pitch Circles are shown when a compound word has a variant that is made up of 2 pitch accents. You can find out more about in the [Compound Words with 2 Patterns](#compound-words-with-2-patterns) reference article.
   - A Pitch Circle can be hovered to see a [Pitch Accent Popup](#pitch-accent-graph-popup-on-hover) for that variant pattern, however no Pitch Accent Graph will be available.
   - The first half of the pitch circle will be colored according to the first pattern of the variant, and the second half will be colored according to the second pattern of the variant.
   - An example would be `一意専心[いちいせんしん;n2,n2h]` the variant pattern being `n2h`.
     ![Hovering the Circle After 一意専心](/content-images/tools-guides/migaku-japanese/circle-after-一意専心.png)

### Pitch Accent Graph Popup on Hover

Pitch Accent Popups can be enabled or disabled using the <internal-link to="/tools-guides/migaku-japanese/manual#graph-on-hover">Graph on Hover</internal-link> options in the Japanese Settings Window.

When enabled you will see a popup containing a Pitch Accent Graph of the word being hovered, and will also have letters signifying the pattern of the word that was hovered in the top right corner of that popup:

<!--Hovering a Few Words to See the Popups-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/hovering-a-few-words.mp4"></migaku-video>

### Pitch Graphs and Audio

You can add Pitch Graphs and Audio recording to fields that have been designated in the <internal-link to="/tools-guides/migaku-japanese/manual#pitch-graph-field(s)">Pitch Graph Fields</internal-link> and <internal-link to="/tools-guides/migaku-japanese/manual#audio-field(s)">Audio Fields</internal-link> of the Japanese Settings page respectively.

By Default when you highlight a word and press [the Word Button](#the-word-button) both Pitch Graphs and Audio recordings for the selected word (if available), will be added to a field named `"Audio"` if it exists on the card being edited:

<!--Clicking the Word Button to Add Graphs and Audio then Previewing the Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/graphs-and-audio-with-preview.mp4"></migaku-video>

_\* You can change the add-ons settings to export to a field with a different name, or to only export Pitch Graphs or only Audio recording, or you can even export Pitch Graphs and Audio Recordings for every word in a sentence if you [enable the Pitch Graphs and Audio option for the Sentence Button](#sentence-button)._

### Clicking Words to Play Audio

If the [Audio on Click](#audio-on-click) option is enabled in the Japanese Settings Window, then when you click a word a recording of that word will be played (if available):

<!--Clicking a Word to Play the Audio For It-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/clicking-to-play-audio.mp4"></migaku-video>

### Generating the Migaku Syntax

The Migaku Japanese Add-on's core functionality relies on [the Migaku Syntax](#the-migaku-syntax) to function. Migaku Japanese comes with various ways of generating this syntax for your cards.

#### Generating the Syntax for a Single Card

![Migaku Japanese Buttons](/content-images/tools-guides/migaku-japanese/migaku-jp-buttons.png)

When you are adding or editing a card you will notice that 4 new buttons have been added to the Add Card Window or Card Editor's top menu.

The first 2 of these ("文" and "語") are related to generating [the Migaku Syntax](#the-migaku-syntax) and/or [Pitch Graphs and Audio](#pitch-graphs-and-audio) for the card being edited or added.

_The 3rd button is for [Removing the Migaku Syntax](#removing-the-syntax-from-a-single-card), and the 4th button is to [Add an Overwrite Rule](#adding-overwrite-rules) which helps to automatically correct any mistakes the add-on makes._

##### The Sentence Button

The Sentence Button ("文") can be used to add the following information to cards:

- [Readings](#the-reading)
  - Enabled by default
- [Dictionary Form Readings](#the-dictionary-form-reading) (for Verbs and Adjectives)
  - Enabled by default
- [Pitch Accent Information](<#the-pitch-accent(s)>)
  - Enabled by default
- [Pitch Graphs](#pitch-graphs-and-audio)
  - Disabled by default
- [Audio Recordings](#pitch-graphs-and-audio)
  - Disabled by default

You can enable or disable which of these are generated in the [Sentence Button Option Group](#sentence-button).

To use the Sentence Button, simply click within a field and click the Sentence Button ("文") (or press its hotkey "F2").

When the defaults setting are used, you will see that [Readings](#the-reading), [Dictionary Form Readings](#the-dictionary-form-reading), and [Pitch Accent Information](<#the-pitch-accent(s)>) are added to the selected field.

<!--Pressing the Sentence Button with Default Settings-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/sentence-button-with-default.mp4"></migaku-video>

When all the information has been enabled, you will see that [Pitch Graphs and Audio](#pitch-graphs-and-audio) are also added to the card's `Audio` field.

<!--Pressing the Sentence Button with All Settings Enabled-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/sentence-button-with-all.mp4"></migaku-video>

##### The Word Button

The Word Button ("語") can be used to add the following information for a selected word to cards:

- [Readings](#the-reading)
  - Disabled by default
- [Dictionary Form Readings](#the-dictionary-form-reading) (for Verbs and Adjectives)
  - Disabled by default
- [Pitch Accent Information](<#the-pitch-accent(s)>)
  - Disabled by default
- [Pitch Graphs](#pitch-graphs-and-audio)
  - Enabled by default
- [Audio Recordings](#pitch-graphs-and-audio)
  - Enabled by default

You can enable or disable which of these are generated in the [Word Button Option Group](#word-button).

To use the Sentence Button, either highlight a word within a field or click and place the cursor before a word _(the longest word from that point will be found automatically)_, then click the Word Button ("語") (or press its hotkey "F3").

When the defaults setting are used, you will see that only [Pitch Graphs and Audio](#pitch-graphs-and-audio) for the selected word are added to the card's `Audio` field.

<!--Pressing the Word Button with Default Settings-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/word-button-with-default.mp4"></migaku-video>

When all the information has been enabled, you will see that the [Readings](#the-reading), [Dictionary Form Readings](#the-dictionary-form-reading), and [Pitch Accent Information](<#the-pitch-accent(s)>) is added to the word that has been selected.

<!--Pressing the Word Button with All Settings Enabled-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/word-button-with-all.mp4"></migaku-video>

#### Removing the Syntax from a Single Card

Removing a syntax from a field is easy. Simply select a field, and click the Remove Migaku Syntax Button ("削") (or press its hotkey "F4").

![Removing Syntax From a Card](/content-images/tools-guides/migaku-japanese/removing-syntax.gif)

You can also highlight some text within a field to remove the syntax just from that text:

<!--Removing Syntax From a Card's Highlighted Text-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/removing-syntax-highlighted.mp4"></migaku-video>

#### Generating the Syntax for Many Cards

<!--Mass Generating Cards-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/mass-generating-cards.mp4"></migaku-video>

In order to generate [the Migaku Syntax](#the-migaku-syntax) for many cards at once:

1. Click the "Browse" button on Anki's Main Screen to open the Card Browser.
1. Within the Card Browser select which cards you would like to add [the Migaku Syntax](#the-migaku-syntax) to.
1. Click the "Edit" button in the top left corner of the Card Browser and then click "Generate Readings/Accents/Audio".
   - A "Generate Accents and Furigana" window will then popup.
1. Select an "Origin" field.
   - This is the field where the text that will have the syntax added it to will come from.
1. Select what information you would like to add:
   - Furigana = [Readings](#the-reading)
   - Dict Form = [Dictionary Form Readings](#the-dictionary-form-reading)
   - Accents = [Pitch Accent Information](<#the-pitch-accent(s)>)
   - Audio = [Audio Recordings](#pitch-graphs-and-audio)
   - Graphs = [Pitch Graphs](#pitch-graphs-and-audio)
1. Select the "Destination" field where the [the Migaku Syntax](#the-migaku-syntax) will be added.
   - We recommend you to select the same field as the "Origin" field, because the Migaku Japanese add-on allows you to change how a field is displayed without needing to actually edit the contents of the field.
1. Select the "Addition Mode", there are three of them:
   - "Add" - Adds [the Migaku Syntax](#the-migaku-syntax) to the bottom of the "Destination" field.
   - "Overwrite" - Overwrites the current contents of the "Destination" field with [the Migaku Syntax](#the-migaku-syntax).
   - "If Empty" - Will only add [the Migaku Syntax](#the-migaku-syntax) to the "Destination" field if it is empty.
   - We recommend using "Overwrite" and having the "Destination" and "Origin" fields be the same field.
1. Click the "Execute" button.

**Please note that if you select to export "Audio" and "Graphs" that the destination field for the audio recordings, and pitch graphs will counter-intuitively be the field(s) that have been selected in the [Pitch Graph Fields](<#pitch-graph-field(s)>) and [Audio Fields](<#audio-field(s)>) sections of the Japanese Settings Window. We plan to add a destination field for the Graphs and Audio "Generate Accents and Furigana" window and prevent this type of confusion in an upcoming update.**

#### Using Spaces Within the Syntax

As stated in [the Migaku Syntax](#the-migaku-syntax) section, spaces are used to mark the borders of words, and are not shown when the card is studied or reviewed. This can lead to some issues if you have fields that contain both English (or other languages that have spaces in between words), and Japanese words.

What will happen by default is that the spaces will be removed and your English text will not display correctly. Fixing this is simple however, simply generate [the Migaku Syntax](#the-migaku-syntax) for a card where this issue is happening to resolve the issue:

<!--Space Issues with Migaku Japanese-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/space-issues.mp4"></migaku-video>

#### Searching in the Card Browser

Because [the Migaku Syntax](#the-migaku-syntax) adds brackets and various text to our words, it can make searches in our collection not return the expected results. We have however implemented a feature that will ignore [the Migaku Syntax](#the-migaku-syntax) when searching for a word. You can use this feature by simply typing your search terms plus `"nobr"`, which stands for "No Brackets". When `"nobr"` is typed along with your search terms [the Migaku Syntax](#the-migaku-syntax) will be ignored and your search will return the expected results.

<!--No Bracket Search-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/nobr-search.mp4"></migaku-video>

### Handling Generation Mistakes

Migaku Japanese's parser is certainly not perfect, and although we plan to greatly improve it going forward, you will inevitably run across mistakes in the generated syntax. Luckily there are various strategies we can use to resolve these issues.

#### Manually Editing the Syntax

<!--Fixing a Parsing Error Manually-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/fixing-a-parsing-error-manually.mp4"></migaku-video>

You can at any time edit the syntax of a card, and change any of the values of [the Migaku Syntax](#the-migaku-syntax). The changes you make will be instantly reflected when displaying the card. However, if the same word where the parsing issue occurred comes up again the add-on would once again make the same parsing mistake, and you would have to manually edit the contents of that card to fix the parsing mistake. To avoid these issues with manually fixing the parsing issues you come across you can instead [add an Overwrite Rule](#adding-overwrite-rules). Overwrite Rules are automatically applied and will fix parsing mistakes for you automatically.

#### Adding Overwrite Rules

<!--Adding an Overwrite Rule-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/add-overwrite-rule-from-edit-window.mp4"></migaku-video>

You can add a new Overwrite Rule by:

1. Selecting the text that you would like to add a new Overwrite Rule for in the Add Card or Edit Card Window.
1. Clicking the add Overwrite Rule button ("R+") (or press its hotkey "F5").
1. The selected text will automatically be added to the "Original" field.
1. Fill in the "Overwrite" field with the fixed syntax.

_\* You can also add an Overwrite Rule by navigating to `Migaku->Add Parsing Overwrite Rule` from Anki's top bar menu._

## Reference

### Adding an Image Field to the Migaku Japanese Note Type

<!--Adding an Image Field to Migaku Japanese-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/adding-an-image-field.mp4"></migaku-video>

To add an Image field to the Migaku Japanese Note Type:

1. Navigate to `Tools->Manage Note Types` in Anki's top menu.
1. Select "Migaku Japanese" in the list on the left side of the window.
1. Click the "Fields..." button on the right side of the window.
1. Click the "Add" button.
1. Name the field `"Image"`, and click "OK".
1. Click the "Save" button.
1. Click the "Cards..." button.
1. Select the "Back Template" at the top of the screen.
1. Above the line that says `<!--###MIGAKU JAPANESE SUPPORT JS START###` paste this text: `<br>{{Image}}`
   - The result will be:

```
...
{{^Audio on Front}}{{Audio}}{{/Audio on Front}}
<br>{{Image}}
<!--###MIGAKU JAPANESE SUPPORT JS START###
...
```

10. Click the "Save" button and close the "Note Types" Window.

![Picture on the Back of Migaku Japanese](/content-images/tools-guides/migaku-japanese/picture-on-back-migaku-japanese.png)

You will now have an image that will appear on the back of your cards that use the Migaku Japanese Note Type.

### Pitch Accent Patterns

There are 5 Pitch Accent Patterns used in the Migaku Japanese Add-on.

First, Migaku Japanese uses <a href="https://en.wikipedia.org/wiki/Japanese_pitch_accent" target="_blank">the 4 standard patterns of Pitch Accent</a>:

#### 1. <span style="color:#005ce6">平板(へいばん)/Heiban</span>

![Picture of a Heiban Word Being Hovered with Add-on Popup Displayed](/content-images/tools-guides/migaku-japanese/migaku-jp-heiban-pitch.png)

> - If the word doesn't have an accent, the pitch rises from a low starting point on the first mora or two, and then levels out in the middle of the speaker's range, without ever reaching the high tone of an accented mora. In Japanese this accent is named **<span style="color:#005ce6">平板(へいばん)/Heiban</span>** ("flat-board").

_<span style="color:#005ce6">Heiban words are colored blue by default.</span>_  
_\* Heiban is by far the most common pattern._

#### 2. <span style="color:#e60000">頭高(あたまだか)/Atamadaka</span>

![Picture of an Atamadaka Word Being Hovered with Add-on Popup Displayed](/content-images/tools-guides/migaku-japanese/migaku-jp-atamadaka-pitch.png)

> - If the accent is on the first mora, then the pitch starts high, drops suddenly on the second mora, then levels out. The pitch may fall across both morae, or mostly on one or the other (depending on the sequence of sounds)—that is, the first mora may end with a high falling pitch, or the second may begin with a (low) falling pitch, but the first mora will be considered accented regardless. The Japanese describe this as **<span style="color:#e60000">頭高(あたまだか)/Atamadaka</span>** (literally, "head-high").

_<span style="color:#e60000">Atamadaka words are colored red by default.</span>_

#### 3. <span style="color:#e68a00">中高(なかだか)/Nakadaka</span>

![Picture of a Nakadaka Word Being Hovered with Add-on Popup Displayed](/content-images/tools-guides/migaku-japanese/migaku-jp-nakadaka-pitch.png)

> - If the accent is on a mora other than the first or the last, then the pitch has an initial rise from a low starting point, reaches a near-maximum at the accented mora, then drops suddenly on any following morae. This accent is referred to as **<span style="color:#e68a00">中高(なかだか)/Nakadaka</span>** ("middle-high").

_<span style="color:#e68a00">Nakadaka words are colored light orange by default.</span>_

#### 4. <span style="color:#00802b">尾高(おだか)/Odaka</span>

![Picture of an Odaka Word Being Hovered with Add-on Popup Displayed](/content-images/tools-guides/migaku-japanese/migaku-jp-odaka-pitch.png)

> - If the word has an accent on the last mora, the pitch rises from a low start up to a high pitch on the last mora. Words with this accent are especially distinguishable from accent-less words because the pitch immediately drops on a following particle such as が ga or に ni. In Japanese this accent is called **<span style="color:#00802b">尾高(おだか)/Odaka</span>** ("tail-high").

_<span style="color:#00802b">Odaka words are colored green by default.</span>_

You can find out more about these patterns from <a href="https://en.wikipedia.org/wiki/Japanese_pitch_accent" target="_blank">this article</a>, if you'd like.

---

**The Migaku Japanese Add-on adds one more pattern to these 4 that applies only to verbs and adjectives:**

#### 5. <span style="color:#ac00e6">起伏(きふく)/Kifuku</span>

Verbs and Adjectives in Japanese are either Heiban or have a drop 2 moras from their final mora.

Since this rule applies to all verbs and adjectives in Japanese we can make a more simple distinction in pitch for verbs and adjectives. We can think of them as either being Heiban or Kifuku. This is makes memorizing the pitch accents much easier since it simplifies all verbs and adjectives to one of two patterns.

![A Kifuku Verb Being Hovered with Add-on Popup Displayed](/content-images/tools-guides/migaku-japanese/migaku-jp-kifuku-verb.png)

- Means literally: "rise-fall"
- When used, signifies that the unconjugated Dictionary Form of a verb or adjective has a drop. (You can [hover a word to see where the drop occurs](#extra-features-on-the-learning-status-popup).)

_<span style="color:#ac00e6">Kifuku verbs and adjectives are colored purple by default.</span>_

### Compound Words with 2 Patterns

There are some words that have more than one pitch accent within the same word itself. This happens when the word in question is actually a compound word made up of 2 words that each have a different pitch accent. This most often happens with <a href="https://en.wikipedia.org/wiki/Yojijukugo" target="_blank">four character compounds</a>.

When the add-on runs across such a word it is incapable of breaking the larger compound word down into its 2 base words and applying a pitch accent to each of them.
_(The required information to split the base words at their boundaries accurately does not exist within the add-on's dataset and therefore it is not possible.)_

Instead the add-on will make it known to the user that this word is a compound word and that each of its base words has a different accent.  
Let's take a look at how it does this:

![Picture of a "孤立無援" Being Hovered with Add-on Popup Displayed](/content-images/tools-guides/migaku-japanese/migaku-jp-koritu-muen.png)

The above word "孤立無援" is made up of 2 different words "孤立" and "無援". In the compound word "孤立無援", there are 2 accents that are pronounced _(just as if you were saying the 2 base words independently)_. "孤孤" is Atamada, while "無援" is Heiban. Since the add-on cannot accurately split words at their boundaries it will instead:

- Color the text of the compound word, the color of the pitch accent of the first word.
- Give the compound word a background, that is the color of the pitch accent of the second word.
- Notice that when hovered, no pitch accent graph is shown for word in the [Pitch Accent Popup](#pitch-accent-graph-popup-on-hover).
  - This is because the add-on doesn't have information about how to split the word and apply the pitch accent patterns to the base words.

**This can very rarely lead to a word becoming unreadable unless, on the occassion that both base words have the same pitch accent:**

![Picture of a "唇歯輔車" Being Hovered with Add-on  Popup Displayed](/content-images/tools-guides/migaku-japanese//migaku-jp-sinsi-hosha.png)
We can see that the word "唇歯輔車" becomes obscured because both of its base words have the <span style="color:#e60000">頭高(あたまだか)/Atamadaka</span> pattern, making both the text and the background red. This will be fixed in a future update.

**We recommend [Adding an Overwrite Rule](#adding-overwrite-rules) when you run across such words that splits these words into their base forms. For example the syntax for "唇歯輔車" would change:**

- From: `唇歯輔車[しんしほしゃ;aa]` - To: `唇歯[しんし;a] 輔車[ほしゃ;a]`
- Please reference [this section of the guide](#adding-overwrite-rules) to find out more.

### How to Perform a Full Sync

<!--Performing a Full Sync-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/performing-a-full-sync.mp4"></migaku-video>

To perform a full sync:

1. Navigate to `Tools->Preferences...` from Anki's top menu bar.
1. Click the "Network" tab.
1. Check off the "On next sync, force changes in one direction" checkbox.
1. Click "Close".
1. Click the "Sync" button on Anki's Main Screen.
1. Click "Upload to AnkiWeb" in the prompt.
