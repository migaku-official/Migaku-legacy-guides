---
title: Migaku Japanese User's Manual
shortTitle: User's Manual
description: This manual contains an explanation of every feature and piece of functionality in the Migaku Japanese Add-on.
headerImage: /content-images/tools-guides/migaku-japanese/migaku-japanese-header.png
position: 2
---

# Migaku Japanese User's Manual

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
    - [Removing the Syntax from Many Cards](#removing-the-syntax-from-many-cards)
    - [Using Spaces Within the Syntax](#using-spaces-within-the-syntax)
    - [Searching in the Card Browser](#searching-in-the-card-browser)
  - [Handling Generation Mistakes](#handling-generation-mistakes)
    - [Manually Editing the Syntax](#manually-editing-the-syntax)
    - [Adding Overwrite Rules](#adding-overwrite-rules)
    - [Dealing with Words Written the Same with Different Readings](#dealing-with-words-written-the-same-with-different-readings)
- [Settings](#settings)
  - [Options Tab](#options-tab)
    - [Profiles](#profiles)
    - [Generation Options](#generation-options)
      - [Sentence Button](#sentence-button)
      - [Word Button](#word-button)
      - [Audio Field(s)](<#audio-field(s)>)
      - [Pitch Graph Field(s)](<#pitch-graph-field(s)>)
      - [Look Ahead](#look-ahead)
    - [Colors](#colors)
    - [Behavior Options](#behavior-options)
      - [Furigana Font Size](#furigana-font-size)
      - [Display Shapes](#display-shapes)
      - [Graph on Hover](#graph-on-hover)
      - [Buffered Output](#buffered-output)
      - [Audio on Click](#audio-on-click)
      - [Katakana Conversion](#katakana-conversion)
      - [Remove Legacy JS & CSS](#remove-legacy-js-&-css)
      - [Historical Conversion](#historical-conversion)
  - [Active Fields Tab](#active-fields-tab)
    - [Auto CSS & JS Generation](#auto-css-&-js-generation)
    - [Add Migaku Japanese Note Type](#add-migaku-japanese-note-type)
    - [How to Use Active Fields](#how-to-use-active-fields)
      - [Ensuring Your Card Types are Compatible](#ensuring-your-card-types-are-compatible)
      - [Adding a New Active Field](#adding-a-new-active-field)
      - [Editing an Active Field](#editing-an-existing-active-field)
      - [Deleting an Active Field](#deleting-an-active-field)
    - [Display Types](#display-types)
  - [Overwrite Rules Tab](#overwrite-rules-tab)
    - [Adding a New Rule](#adding-a-new-rule)
    - [Editing an Existing Rule](#editing-an-existing-rule)
    - [Deleting an Existing Rule](#deleting-an-existing-rule)
    - [Applying Rules to Your Collection](#applying-rules-to-your-collection)
    - [Importing and Exporting Rule Lists](#importing-and-exporting-rules-lists)
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
   - A <a href="https://docs.ankiweb.net/#/templates/generation?id=conditional-replacement" target="_blank">Conditional Field</a> that when empty will display the card as a <internal-link to="/tools-guides/#general-recommended-sentence-card-format">Sentence Card</internal-link>, and if it has any content at all will display the card as an <internal-link to="/tools-guides/anki/guide#general-recommended-audio-sentence-card-format">Audio Card</internal-link>
   - This field is hidden, and not visible either on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front of the Card</internal-link> or the <internal-link to="/tools-guides/anki/guide#the-back-(answer)-side-of-a-card">Back of the Card</internal-link> when being reviewed.

The Migaku Japanese Note Type is somewhat unique in that its "Audio on Front" field is a <a href="https://docs.ankiweb.net/#/templates/generation?id=conditional-replacement" target="_blank">Conditional Field</a>, when it is empty the card will display as a <internal-link to="/tools-guides/#general-recommended-sentence-card-format">Sentence Card</internal-link> with the "Expression" field on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front of the Card</internal-link>, but if the content of that field is not completely empty then the card will be displayed as an <internal-link to="/tools-guides/anki/guide#general-recommended-audio-sentence-card-format">Audio Card</internal-link> with the "Audio" field being displayed on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front of the Card</internal-link>:

<!--Toggling Audio on Front-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/toggling-audio-on-front.mp4"></migaku-video>

_Toggling between a Sentence Card and an Audio Card by filling in or deleting the contents of the "Audio on Front" field._

#### Converting Your Cards to the Migaku Japanese Note Type

The fastest way to get started using the Migaku Japanese Add-on is to convert your existing <internal-link to="/tools-guides/anki/guide#general-recommended-sentence-card-format">Sentence Cards</internal-link> to the Migaku Japanese Note Type. If you are also studying <internal-link to="/tools-guides/anki/guide#general-recommended-vocabulary-card-format">Vocabulary Cards</internal-link>, or other card varieties, then it is recommended that you do not convert them to the Migaku Japanese Note Type and instead [configure those Note Types to work with the Migaku Japanese Add-on](#active-fields-tab).

_\* Please note that if you use <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> that have multiple <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> associated with them that you also should not convert them to the Migaku Japanese Note Type, and you should similarly [configure your them to work with the Migaku Japanese Add-on](#active-fields-tab)._

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

The reason a Dictionary Form Reading is part of the syntax is because pitch accent information for verb and adjective conjugations is not currently implemented withing the add-on. The verb and adjective pitch accent information applies to the Dictionary Form (for example `走る` and not `走ります`) of the word and thus the add-on generates the Dictionary Form Reading of adjectives and verbs so that a [Pitch Accent Graph Popup](#pitch-accent-graph-popup-on-hover) for the Dictionary Form of the word can be shown when the word is hovered:

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

Pitch Accent Popups can be enabled or disabled using the [Graph on Hover](#graph-on-hover) options in the Japanese Settings Window.

When enabled you will see a popup containing a Pitch Accent Graph of the word being hovered, and will also have letters signifying the pattern of the word that was hovered in the top right corner of that popup:

<!--Hovering a Few Words to See the Popups-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/hovering-a-few-words.mp4"></migaku-video>

### Pitch Graphs and Audio

You can add Pitch Graphs and Audio recording to fields that have been designated in the [Pitch Graph Fields](<#pitch-graph-field(s)>) and [Audio Fields](<#audio-field(s)>) of the Japanese Settings page respectively.

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
   - This is the field where the text that will have the syntax added to it will come from.
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

#### Removing the Syntax from Many Cards

<!--Mass Removing Syntax-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/mass-removing-syntax.mp4"></migaku-video>

In order to remove [the Migaku Syntax](#the-migaku-syntax) from many cards at once:

1. Click the "Browse" button on Anki's Main Screen to open the Card Browser.
1. Within the Card Browser select which cards you would like to add [the Migaku Syntax](#the-migaku-syntax) to.
1. Click the "Edit" button in the top left corner of the Card Browser and then click "Generate Readings/Accents/Audio".
   - A "Generate Accents and Furigana" window will then popup.
1. Select an "Origin" field.
   - This is the field [the Migaku Syntax](#the-migaku-syntax) will be removed from.
1. Click the "Remove Readings" button.

#### Using Spaces Within the Syntax

As stated in [the Migaku Syntax](#the-migaku-syntax) section, spaces are used to mark the borders of words, and are not shown when the card is studied or reviewed. This can lead to some issues if you have fields that contain both English (or other languages that have spaces in between words), and Japanese words.

What will happen by default is that the spaces will be removed and your English text will not display correctly. Fixing this is simple however, simply generate [the Migaku Syntax](#the-migaku-syntax) for a card where this issue is happening to resolve the issue:

![Space Issues with Migaku Japanese](/content-images/tools-guides/migaku-japanese/space-issues.gif)

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

#### Dealing with Words Written the Same with Different Readings

A small percentage of words in Japanese are written the same way yet have different readings. Just one example is the word "玩具" which can be read both as "おもちゃ" and "がんぐ". Migaku Japanese will only ever parse this word as "おもちゃ" the much more common variant. This however leads you to be unable to look up the pitch accent or generate [Pitch Graphs and Audio](#pitch-graphs-and-audio) for "がんぐ". Migaku Japanese however provides you with a way to look up the variant word's pitch accent and generate [Pitch Graphs and Audio](#pitch-graphs-and-audio) for it.

<!--Replacing Omocha with Gangu-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/omocha-replaced-with-gangu.mp4"></migaku-video>

To do this:

1. First, see that when Migaku Japanese parses `玩具`, it delivers the following result: `玩具[おもちゃ;n2]`
1. In order to manually overwrite the reading of "おもちゃ" to "がんぐ" we can:
   - Replace "おもちゃ" with the letter "a" (meaning "alternate") followed by the reading we would like the add-on to use; "がんぐ".
1. The result would then be `玩具[aがんぐ;n2]`
1. Now you should highlight `玩具[aがんぐ;n2]` or place your cursor before the character `玩`, and then press the Word Button "語".
   - If [Readings](#the-reading), [Dictionary Form Readings](#the-dictionary-form-reading), and [Pitch Accent Information](<#the-pitch-accent(s)>) are enabled for [the Word Button](#the-word-button) then the add-on will overwrite the previous text of `玩具[aがんぐ;n2]` with the correct data for "がんぐ", including its correct pitch accent; `玩具[がんぐ;a]`.
   - If [Pitch Graphs](#pitch-graphs-and-audio) and [Audio Recordings](#pitch-graphs-and-audio) are enabled for [the Word Button](#the-word-button) then the add-on will generate the [Pitch Graphs](#pitch-graphs-and-audio) and [Audio Recordings](#pitch-graphs-and-audio) for "がんぐ" and send the [Pitch Graph Fields](<#pitch-graph-field(s)>) and [Audio Fields](<#audio-field(s)>).

## Settings

<!--Opening the Settings Window-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/opening-the-settings-window.mp4"></migaku-video>

To open the Japanese Settings Window:

1. Navigate to `Migaku->Japanese Settings` in Anki's top menu.

**If after making adjustments to any options you find that these changes are not reflected on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync and those changes will be reflected](#how-to-perform-a-full-sync).**

### Options Tab

![Japanese Settings Window Options Tab](/content-images/tools-guides/migaku-japanese/japanese-settings-options-tab.png)

The Options Tab contains a variety of options that impact how Migaku Japanese functions.

**Please note that you must hit the "Apply" button when you're finished making modifications to the settings for them to be saved.**

#### Profiles

![Profile Drop Down](/content-images/tools-guides/migaku-japanese/profiles-drop-down.gif)

The Profiles drop-down select menu allows you to select which of your Anki Profiles Migaku Japanese is enabled on.

The Migaku Japanese buttons when editing cards, and the mass generation options will not show up on Profiles that are not enabled.

_By default Migaku Japanese is enabled on "All" Profiles by default._

#### Generation Options

The Generation Options group contains the options that decide what content will be included when using the generation buttons.

##### Sentence Button

![Sentence Button Options](/content-images/tools-guides/migaku-japanese/sentence-button-options.png)

The Sentence Button Options Group allows you customize the behavior of the "Sentence Button (文)".

There are 5 different options which can be enabled:

1. Kana
   - Enabled by default.
   - Adds readings to the generated [Migaku Syntax](#the-migaku-syntax) for every word in the field where the button is pressed.
1. Dictionary Form
   - Enabled by default.
   - Adds the [Dictionary Form Readings](#the-dictionary-form-reading) for verbs and adjectives to the generated [Migaku Syntax](#the-migaku-syntax) in the field where the button is pressed.
1. Audio
   - Disabled by default.
   - Adds audio recordings to the [Audio Field(s)](<#audio-field(s)>) you have selected (if those fields exist on the card where the button is pressed).
1. Pitch Graph
   - Disabled by default.
   - Adds [Pitch Graphs](#pitch-graphs-and-audio) to the [Pitch Graph Field(s)](<#pitch-graph-field(s)>) you have selected (if those fields exist on the card where the button is pressed).
1. Pitch Accent
   - Enabled by default.
   - Adds the [Pitch Accents](<#the-pitch-accent(s)>) to the generated [Migaku Syntax](#the-migaku-syntax) in the field where the button is pressed.

##### Word Button

![Word Button Options](/content-images/tools-guides/migaku-japanese/word-button-options.png)

The Word Button Options Group allows you customize the behavior of the "Word Button (語)".

There are 5 different options with can be enabled:

1. Kana
   - Disabled by default.
   - Adds readings to the generated [Migaku Syntax](#the-migaku-syntax) to the selected word.
1. Dictionary Form
   - Disabled by default.
   - Adds the [Dictionary Form Readings](#the-dictionary-form-reading) to the selected word if it is a verb or an adjective.
1. Audio
   - Enabled by default.
   - Adds audio recordings for the selected word to the [Audio Field(s)](<#audio-field(s)>) you have selected (if those fields exist on the card where the button is pressed).
1. Pitch Graph
   - Enabled by default.
   - Adds [Pitch Graphs](#pitch-graphs-and-audio) for the selected word to the [Pitch Graph Field(s)](<#pitch-graph-field(s)>) you have selected (if those fields exist on the card where the button is pressed).
1. Pitch Accent
   - Disabled by default.
   - Adds the [Pitch Accents](<#the-pitch-accent(s)>) to the selected word.

_\* When using the Word Button you can either highlight the word you would like to have parsed by Migaku Japanese, or you can click into the field and have the next word that is found after the location of the cursor be parsed._

##### Audio Field(s)

![Audio Fields Option](/content-images/tools-guides/migaku-japanese/audio-fields-option.png)

Selects which fields the add-on will attempt to add audio recordings to when [adding audio recordings](#pitch-graphs-and-audio) to cards using the Sentence Button or the Word Button.

There are three modes that will add Audio to fields under different criteria:

1. Overwrite
   - If the field exists on the Card where the Sentence Button or Go Button is pressed, and the Audio option is enabled for that button, this will overwrite the contents of that field with the audio recordings for the word(s) that were in the field parsed by Migaku Japanese.
1. If Empty
   - If the field exists on the Card where the Sentence Button or Go Button is pressed, and the Audio option is enabled for that button, this will only add the audio recordings to that field if that field is currently empty.
1. Add with Separator:
   - If the field exists on the Card where the Sentence Button or Go Button is pressed, and the Audio option is enabled for that button, this will add the Separator (a single line break `<br>` by default) first and then the audio recording to the selected field.

If Empty is selected, audio will only be generated when the audio field is empty.

_\* If using the Sentence Button you must have ["Audio" enabled in the Sentence Button Options Group](#sentence-button), and if using the Word Button you must have ["Audio" enabled in the Word Button Options Group](#word-button)._

**Please note that while counter-intuitive, the Audio Fields(s) you have selected here are also the fields where audio recordings will be added when using [Mass Generation](#generating-the-syntax-for-many-cards). We plan to change this behavior in the future and add an Audio destination option to the Mass Generation Setting Window.**

##### Pitch Graph Field(s)

![Pitch Graph Fields Option](/content-images/tools-guides/migaku-japanese/pitch-graph-fields-option.png)

Selects which fields the add-on will attempt to add Pitch Graphs to when [adding Pitch Graphs](#pitch-graphs-and-audio) to cards using the Sentence Button or the Word Button.

There are three modes that will add Pitch Graphs to fields under different criteria:

1. Overwrite
   - If the field exists on the Card where the Sentence Button or Go Button is pressed, and the Pitch Graph option is enabled for that button, this will overwrite the contents of that field with the audio recordings for the word(s) that were in the field parsed by Migaku Japanese.
1. If Empty
   - If the field exists on the Card where the Sentence Button or Go Button is pressed, and the Pitch Graph option is enabled for that button, this will only add the Pitch Graphs to that field if that field is currently empty.
1. Add with Separator:
   - If the field exists on the Card where the Sentence Button or Go Button is pressed, and the Pitch Graph option is enabled for that button, this will add the Separator (a single line break `<br>` by default) first and then the audio recording to the selected field.

If Empty is selected, audio will only be generated when the audio field is empty.

_\* If using the Sentence Button you must have ["Audio" enabled in the Sentence Button Options Group](#sentence-button), and if using the Word Button you must have ["Audio" enabled in the Word Button Options Group](#word-button)._

**Please note that while counter-intuitive, the Pitch Graph Fields(s) you have selected here are also the fields where Pitch Graphs will be added when using [Mass Generation](#generating-the-syntax-for-many-cards). We plan to change this behavior in the future and add a Pitch Graph destination option to the Mass Generation Setting Window.**

##### Look Ahead

When the Word Button is clicked and the mouse cursor is placed within a field, the add-on will attempt to parse the longest word that occurs from the location of the cursor. For example, the word “内閣総理大臣” begins with the word “内閣”. What happens however if your place your cursor in front of “内閣総理大臣” and press the Word Button is that the add-on will parse the word “内閣総理大臣” because it is the longest word that it has found.

The Look Ahead option defines how far ahead the add-on will search when looking for the longest possible word. Although we recommend leaving it at the default value, if you find that the Word Button functionality is sluggish then you can reduce this value,.

#### Colors

![Color Options](/content-images/tools-guides/migaku-japanese/color-options.png)

In the Colors Options Group you can customize the colors that the [Pitch Accent Patterns](#pitch-accent-patterns) are shown in.

#### Behavior Options

![Behavior Options](/content-images/tools-guides/migaku-japanese/behavior-options.png)

The Behaviors Options Group mainly contains options that will affect both how Migaku Japanese generates and displays information.

##### Furigana Font Size

This is the size of the furigana font size in relation to the size of a word's text.

![Font Size at 1](/content-images/tools-guides/migaku-japanese/font-size-1.png)
For example, 1 is equal to 10% of the word's font size

![Font Size at 10](/content-images/tools-guides/migaku-japanese/font-size-10.png)
And 10 is equal to 100% of the word's font size.

##### Display Shapes

Whether or not [Pitch Accent Shapes](#pitch-accent-shapes) will be shown for words that have variant pitch accent patterns.

##### Graph on Hover

There are 2 "Graph on Hover" options, one for the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front Side</internal-link> of your cards ("Graph on Hover (Front)") and the other ("Graph on Hover (Back)") is for the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Back Side</internal-link> of your cards.

When the option is enabled [Pitch Accent Graph Popups](#pitch-accent-graph-popup-on-hover) will be shown on the particular side of the card that the option applies to.

##### Buffered Output

When Buffered Output is enabled, the [The Migaku Syntax](#the-migaku-syntax) will be processed in parts rather than all at once.

The Buffered Output option should not be enabled except on the slowest computers and even then only if the text content of your cards are a thousand words or more in length.

##### Audio on Click

When checked will enable the [Clicking Words to Play Audio](#clicking-words-to-play-audio) feature.

**This feature currently only works on the computer version of Anki.**

##### Katakana Conversion

![Enabling Katakana Conversion and Viewing Cards](/content-images/tools-guides/migaku-japanese/katakana-conversion.gif)

When Katakana Conversion is enabled, all <a href="https://en.wikipedia.org/wiki/Hiragana" target="_blank">Hiragana</a> on your cards will be converted to <a href="https://en.wikipedia.org/wiki/Katakana" target="_blank">Katakana</a>.

This conversation is done in real-time using JavaScript and does not change the actual contents of the cards where it is applied. This means that you can enable this feature on occassion to practice reading Katakana and disable it when you're finished and you cards will be displayed as they originally were.

Katakana Conversion will be applied to all of your [Active Fields](#how-to-use-active-fields), if you would like the content of a field to be converted to Katakana you must add that field to your [Active Fields List](#how-to-use-active-fields).

**This feature works across all platforms including AnkiWeb, Anki Mobile, and AnkiDroid. If you find that a change to this setting is not reflected on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync and the change will be reflected](#how-to-perform-a-full-sync).**

##### Remove Legacy JS & CSS

If you previously used a legacy version of this add-on (when they were part of the defunct MIA brand), then your cards may have some stray CSS and JS on them which may cause performance and display issues.

<!--Removing Legacy JS and CSS-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/removing-legacy-js-and-css.mp4"></migaku-video>

In order to fix any potential issues:

1. Check off the "Remove Legacy JS & CSS" checkbox.
1. Click the "Apply" button.
1. [Perform a full sync](#how-to-perform-a-full-sync).

##### Historical Conversion

<!--Enabling Historical Kanji and Kana Conversion and Viewing Cards-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/historical-conversion.mp4"></migaku-video>

Historical Conversion is a sort of special "Easter Egg" feature provided by the Migaku Japanese Add-on. It has no practical implementation unless the user is interested in learning the <a href="https://en.wikipedia.org/wiki/Ky%C5%ABjitai" target="_blank">Traditional Kanji Characters</a> and the <a href="https://en.wikipedia.org/wiki/Historical_kana_orthography" target="_blank">Historical Kana Usage</a>, used in Japanese literature before the language reforms carried out after the end of <a href="https://en.wikipedia.org/wiki/World_War_II" target="_blank">World War 2</a>.

One of our co-founders, Lucas was always very interested in <a href="https://en.wikipedia.org/wiki/Meiji_(era)" target="_blank">Meiji Era</a> literature, and included this feature to help other history or classical literature enthusiasts learn to read historical Japanese. We truly hope that it is helpful!

You can separately enable Historical Conversion for Kanji and Kana.

**This feature works across all platforms including AnkiWeb, Anki Mobile, and AnkiDroid. If you find that a change to this setting is not reflected on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync and the change will be reflected](#how-to-perform-a-full-sync).**

### Active Fields Tab

![Active Fields Tab](/content-images/tools-guides/migaku-japanese/active-fields-tab.png)

The Active Fields Tab is a sort of control center for the Migaku Japanese Add-on. This is where you decide on which of your cards [the Migaku Syntax](#the-migaku-syntax) will be interpreted and displayed using the different [Display Types](#display-types) available in the add-on.

**If after making adjustments to your Active Fields you find that these changes are not reflected on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync and those changes will be reflected](#how-to-perform-a-full-sync).**

#### Auto CSS & JS Generation

The Auto CCS & JS Generation option, enables and disables the add-on from automatically adjusting your Card Types, and adding the ability to interpret [the Migaku Syntax](#the-migaku-syntax) into the selected [Display Type](#display-type).

**The add-on will not function normally with this option disabled, and it should only be disabled by developers who wish to adjust the JS and CSS themselves and don't want the add-on to interfere with any changes they make.**

#### Add Migaku Japanese Note Type

When enabled Migaku Japanese will attempt to add [the Migaku Japanese Note Type](#the-migaku-japanese-note-type) to your Anki Collection if it does not already exist. If you wish to use different Note Types with the Add-on and don't want the add-on to add [the Migaku Japanese Note Type](#the-migaku-japanese-note-type) after you've deleted it then disable this option.

#### How to Use Active Fields

Your "Active Fields" are the fields on your Cards on which Migaku Japanese will interpret [the Migaku Syntax](#the-migaku-syntax) into a selected [Display Type](#display-type).

If you find that [the Migaku Syntax](#the-migaku-syntax) is being shown as is and is not being interpreted on the computer version Anki then that means you have incorrectly configured your Active Field row for that Card Type. You will need to [edit that Active Field row](#editing-an-existing-active-field) to resolve the issue.

**If [the Migaku Syntax](#the-migaku-syntax) is being correctly interpreted on the Computer version of Anki but not on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync](#how-to-perform-a-full-sync) to resolve this issue.**

##### Ensuring Your Card Types are Compatible

There are a few things to keep in mind when using your own <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> with Migaku Japanese.

There are a few template syntax issues that you may run across:

<!--Copying the Contents of the Front Side and Overwriting {{FrontSide}}-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/copying-and-overwriting-frontside.mp4"></migaku-video>

1. You cannot use `{{FrontSide}}` on the <a href="https://docs.ankiweb.net/#/templates/intro?id=card-templates" target="_blank">Back Template</a> of <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> you will be using with Migaku Japanese. Instead you should copy the contents of the <a href="https://docs.ankiweb.net/#/templates/intro?id=card-templates" target="_blank">Front Template</a> into the <a href="https://docs.ankiweb.net/#/templates/intro?id=card-templates" target="_blank">Back Template</a> itself in place of using `{{FrontSide}}`. This should be done before adding that Card Type to your Active Fields list.
1. Cloze cards are not currently compatible with Migaku Japanese.

<!--Removing Furigana Filter From Field Name-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/removing-furigana-filter.mp4"></migaku-video>

1. You must remove any leading <a href="https://docs.ankiweb.net/#/templates/generation?id=cloze-templates" target="_blank">Filters</a> from your templates' fields.
   - For example, a common filter used in some Japanese decks is `furigana:` and is used in this way: `{{furigana:[Field Name]}}`. _(`cloze:` is a another common Field filter)_
   - If you find that in your template there are <a href="https://docs.ankiweb.net/#/templates/generation?id=cloze-templates" target="_blank">Filters</a> before your field names (`{{[Filter Name]:[Field Name]}}`) then you must remove them and their trailing colons (`:`). Once you do this the syntax will be simply: `{{[Field Name]}}`.

##### Adding a New Active Field

Once you have ensured that you will be adding a compatible Card Type to your Active Fields list then you are ready to add a new Active Field.

You can do this by selecting an option for each of the drop-down menus that appear on top of the Active Field List and pressing the "Add" button.

<!--Adding a New Active Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/adding-a-new-active-field.mp4"></migaku-video>

The drop-down menu options are as follows:

1. Profile
   - The Profile(s) where the Migaku Syntax for this Active Field will be active, and the necessary CSS and JS will be added to your Card Type.
   - "All" is the default, meaning that a Card Type by that name will be affected across all of your Anki Profiles.
1. Note Type
   - The Note Type where the field you want to be affected is found.
   - If "All" is selected as the Profile you will also see the Profile where that Note Type is found in parentheses after the name of the Note Type itself (`[Note Type Name] (Prof: [Profile Name])`).
     - This allows you to make sure you are selecting the correct Note Type in the case you have note types by the same name that have different associated Card Types and Field Names across different Anki Profiles.
1. Card Type
   - The Card Type that you want to be affected.
1. Field
   - The Field that you want to be affected.
1. Side
   - Whether you want [the Migaku Syntax](#the-migaku-syntax) for this field to be interpreted according to your selected [Display Type](#display-type) on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front Side</internal-link>, the <internal-link to="/tools-guides/anki/guide#the-back-(answer)-side-of-a-card">Back Side</internal-link>, or both sides of your cards.
1. Display Type
   - How you want the add-on to interpret and display the [the Migaku Syntax](#the-migaku-syntax).
   - You can find an explanation of the different types in the [Display Types section](#display-type).

**After you have added a new Active Field you should [perform a full sync](#how-to-perform-a-full-sync) so that the changes will be correctly reflected on AnkiWeb, Anki Mobile and AnkiDroid.**

##### Editing an Existing Active Field

<!--Editing an Active Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/editing-an-active-field.mp4"></migaku-video>

To edit an existing Active Field:

1. Click the Active Field row you would like to edit.
   - This will load the select Active Field row into the drop-down menus.
   - The "Add" button will also change to a "Cancel" button.
1. Adjust the drop-down menu options as you wish.
   - Once a change is made the "Cancel" button will be changed into a "Save" button.
1. Click the "Save" button.

You can cancel editing an Actice Field by clicking the "Cancel" button before making any changes to its drop-down menu options or by clicking another Active Field row.

**After you have edited an Active Field you should [perform a full sync](#how-to-perform-a-full-sync) so that the changes will be correctly reflected on AnkiWeb, Anki Mobile and AnkiDroid.**

##### Deleting an Existing Active Field

<!--Deleting an Active Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/deleting-an-active-field.mp4"></migaku-video>

To delete an existing Active Field.

1. Click the "X" button on the right side of the Active Field row you would like to delete.
1. Confirm the deletion in the prompt.

**After you have deleted an Active Field you should [perform a full sync](#how-to-perform-a-full-sync) so that the changes will be correctly reflected on AnkiWeb, Anki Mobile and AnkiDroid.**

#### Display Types

Display Types are the different ways you can display [the Migaku Syntax](#the-migaku-syntax) when it is interpreted.

There are 8 different types:

**1. Kanji**

- No furigana or [Pitch Accent Coloring](#pitch-accent-coloring) is displayed. The text is displayed as it would be if [the Migaku Syntax](#the-migaku-syntax) was removed from it.

![Kanji Display Type](/content-images/tools-guides/migaku-japanese/kanji-display-type.gif)

**2. Colored Kanji**

- No furigana is displayed, but [Pitch Accent Coloring](#pitch-accent-coloring) is.

![Colored Kanji Display Type](/content-images/tools-guides/migaku-japanese/colored-kanji-display-type.gif)

**3. Hover**

- Furigana is displayed when a word is hovered.

![Hover Display Type](/content-images/tools-guides/migaku-japanese/hover-display-type.gif)

**4. Colored Hover**

- Furigana and [Pitch Accent Coloring](#pitch-accent-coloring) is displayed when a word is hovered.

![Colored Hover Display Type](/content-images/tools-guides/migaku-japanese/colored-hover-display-type.gif)

**5. Kanji Reading**

- Furigana is displayed over words.

![Kanji Reading Display Type](/content-images/tools-guides/migaku-japanese/kanji-reading-display-type.gif)

**6. Colored Kanji Reading**

- Furigana is displayed over words, and [words are colored according to their pitch accent](#pitch-accent-coloring).

![Colored Kanji Reading Display Type](/content-images/tools-guides/migaku-japanese/colored-kanji-reading-display-type.gif)

**7. Reading**

- All words are converted to kana.

![Reading Display Type](/content-images/tools-guides/migaku-japanese/reading-display-type.gif)

**8. Colored Reading**

- All words are converted to kana and [colored according to their pitch accent](#pitch-accent-coloring).

![Colored Reading Display Type](/content-images/tools-guides/migaku-japanese/colored-reading-display-type.gif)

### Overwrite Rules Tab

In the Overwrite Rules Tab you can browse all your current [Overwrite Rules](#adding-overwrite-rules), add new rules, and edit or delete existing ones. You can also save a backup of your overwrite rules list or import a list that someone's shared with you.

\*\*All Overwrite Rules you have added are automatically applied whenever you generate [the Migaku Syntax](#the-migaku-syntax), whether you do through the Sentence Button, the Word Button, or [Mass Generation](#generating-the-syntax-for-many-cards)..

#### Adding a New Rule

<!--Adding a Rule in Rule Tab-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/adding-a-rule-in-rules-tab.mp4"></migaku-video>

To add a new rule:

1. Type the text that you would like to replace in the "Original" field.
1. Type the text you would like the original text to be replaced with in the "Overwrite" field.
1. If you would like to apply the rule you are adding when it is added then check off "New Cards" and/or "Learned Cards":
   - "New Cards" will replace the original text with the text from the "Overwrite" in all new cards across your Anki Collection.
   - "Learned Cards" will replace the original text with the text from the "Overwrite" in all cards you are studying _(cards that have a due date)_ across your Anki Collection.
1. Click the "Add" button.

#### Editing an Existing Rule

<!--Editing a Rule-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/editing-a-rule.mp4"></migaku-video>

To edit an existing rule:

1. Double click a row's "Original" or "Overwrite" field to begin editing it.
1. Make any changes.
1. Press "Enter" or click outside of that field.
1. Decide whether or not to immediately apply the rules to your collection in the prompt.

#### Deleting an Existing Rule

<!--Deleting a Rule-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/deleting-a-rule.mp4"></migaku-video>

To delete an existing rule.

1. Select one or more rules.
   - (Select one rule by clicking it, select more than one rule by shift clicking)
1. Right click to open the deletion menu.
1. Click the "Delete Selected Roles" option.
1. Confirm the deletion in the prompt.

#### Applying Rules to Your Collection

<!--Applying All Rules-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/applying-all-rules.mp4"></migaku-video>

At any time you can apply you entire Overwrite Rules List to your Anki collection by checking off "New Cards" and/or "Learned Cards" and clicking the "Run" button.

- "New Cards" will apply the Overwrite Rules List to all new cards in your Anki Collection.
- "Learned Cards" apply the Overwrite Rules List to all cards you are studying _(cards that have a due date)_ in your Anki Collection.

_\* This is particularly useful if you have just imported a new rules list and would like to apply it to your collection._

#### Importing and Exporting Rule Lists

<!--Exporting Overwrite Rules-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/exporting-rules.mp4"></migaku-video>

To Export your Overwrite Rules List:

1. Click the Export button.
1. Choose where you would like to save the list.
1. Click the "Save" button.

<!--Importing Overwrite Rules-->

<migaku-video controls src="/content-images/tools-guides/migaku-japanese/importing-rules.mp4"></migaku-video>

To Import an Overwrite Rules List:

1. Click the Import button.
1. Navigate to the Overwrite Rules List you would like to import and select it.
1. Click the "Open" button.

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
