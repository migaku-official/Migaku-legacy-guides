---
title: Migaku German User's Guide
shortTitle: User's Guide
description: The Migaku German Add-on adds features such a gender coloring, playing audio for any word, easy lookups of words' deconjugated forms and parts of speech, and much more!
headerImage: /content-images/tools-guides/migaku-german/migaku-german-header.png
position: 2
---

# Migaku German User's Guide

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
  - [Ensuring You Have the Correct Anki Version](#ensuring-you-have-the-correct-anki-version)
  - [Installing the Add-on](#installing-the-add-on)
  - [Installing the Audio Files](#installing-the-audio-files)
- [Updating](#updating)
- [Uninstalling](#uninstalling)
- [Major Features](#major-features)
  - [The Migaku German Note Types](#the-migaku-german-note-types)
    - [The 4 Migaku German Note Types](#the-4-migaku-german-note-types)
    - [How to use the Note Types](#how-to-use-the-note-types)
    - [Converting Your Cards to a Migaku German Note Type](#converting-your-cards-to-a-migaku-german-note-type)
    - [Converting From One Migaku German Note Type to Another](#converting-from-one-migaku-german-note-type-to-another)
  - [The Migaku Syntax](#the-migaku-syntax)
  - [Gender Coloring](#gender-coloring)
  - [Extra Information and Audio on Hover](#extra-information-and-audio-on-hover)
  - [Generating the Migaku Syntax](#generating-the-migaku-syntax)
    - [Generating the Syntax for a Single Card](#generating-the-syntax-for-a-single-card)
      - [The Generate Syntax Button](#the-generate-syntax-button)
    - [Removing the Syntax from a Single Card](#removing-the-syntax-from-a-single-card)
    - [Generating the Syntax for Many Cards](#generating-the-syntax-for-many-cards)
    - [Removing the Syntax from Many Cards](#removing-the-syntax-from-many-cards)
  - [Handling Generation Mistakes](#handling-generation-mistakes)
    - [Editing the Syntax](editing-the-syntax)
  - [Migaku Dictionary Integration](#migaku-dictionary-integration)
- [Settings](#settings)
  - [Options Tab](#options-tab)
    - [Profiles](#profiles)
    - [Colors](#colors)
  - [Active Fields Tab](#active-fields-tab)
    - [Auto CSS & JS Generation](#auto-css-&-js-generation)
    - [Add Migaku German Note Types](#add-migaku-german-note-types)
    - [How to Use Active Fields](#how-to-use-active-fields)
      - [Ensuring Your Card Types are Compatible](#ensuring-your-card-types-are-compatible)
      - [Adding a New Active Field](#adding-a-new-active-field)
      - [Editing an Active Field](#editing-an-existing-active-field)
      - [Deleting an Active Field](#deleting-an-active-field)
    - [Display Types](#display-types)
- [Reference](#reference)
  - [How to Perform a Full Sync](#how-to-perform-a-full-sync)
  - [Part of Speech Codes](#part-of-speech-codes)

## Intro

Migaku German is an Anki add-on that provides a host of features that makes studying German more fun, convenient, and efficient. Some of Migaku German's main features include [gender coloring](#gender-coloring), [audio recordings for the vast majority of words](#extra-information-and-audio-on-hover), and [easy lookups of words' deconjugated forms and parts of speech](#extra-information-and-audio-on-hover) which makes learning using Anki as a supplement a lot easier and a more fun.

One of the best parts of Migaku German is that most of these features work across all Anki platforms, including the computer version, AnkiWeb, Anki Mobile, and AnkiDroid!

**We hope you find this add-on helpful! If you are in a position where you are financially able please consider <a href="https://www.patreon.com/Migaku" target="_blank">supporting the Migaku Team</a>! Our software projects take thousands of hours to build, update, and maintain and we are only able to continue our work thanks to our supporters! We are deeply and humbly grateful to everyone who decides to support Migaku!**

## Installation

If you have not yet installed Anki and need help then please <internal-link to="/tools-guides/anki/guide#installation">click here</internal-link> to find out how to install an Anki version compatible with the Migaku Toolset.

**If you are new to Anki, we suggest you to read our <internal-link to="/tools-guides/anki/guide">Anki Quick Start Guide</internal-link> which covers all of the fundamentals of Anki from the perspective of a language learner.**

### Ensuring You Have the Correct Anki Version

The current recommended version of Anki for those using the Migaku Add-on series is <internal-link to="/tools-guides/anki/guide#installation">Anki 2.1.35</internal-link>.

_\* If you wish to receive <internal-link to="/tools-guides/migaku-german/support">support</internal-link> then please ensure you are using the recommended version of Anki._

If you have not yet downloaded Anki, please <internal-link to="/tools-guides/anki/guide#installation">visit our Anki download page</internal-link> to ensure you download the correct version for your operating system.

<!--Checking Your Anki Version-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/checking-anki-version.mp4"></migaku-video>

You can check your Anki version on Windows by:

1. Navigating to `Help->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

You can check your Anki version on Mac by:

1. Navigating to `Anki->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

### Installing the Add-on

Migaku German can be installed the same way as any other Anki add-on.

You do this by pasting Migaku German's installation Code into Anki's _"Install Add-on"_ window. You can access this window by navigating _`Tools->Add-ons->Get Add-on's`_ from Anki's top menu.

Migaku German's installation code is `768963681`.

Restart Anki after the installation is complete to start using Migaku German.

<!--Migaku German Add-on Installation-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/german-addon-installation.mp4"></migaku-video>

### Updating

<!--Migaku German Update-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/german-addon-update.mp4"></migaku-video>

To update Migaku German:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Click the "Check for Updates" button.
1. If an update is found you will be notified and asked if you would like to update. Confirm the update.
1. Restart Anki to begin using the update.

### Uninstalling

<!--Migaku German Uninstall-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/german-addon-uninstall.mp4"></migaku-video>

To uninstall Migaku German you must first disable the add-on, then delete it. You can do this by:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Select "Migaku German".
1. Click the "Toggle Enabled" button to disable Migaku German.
   - You will then see `(disabled)` appear next to "Migaku German" in the add-on list.
1. Restart Anki.
1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Select "Migaku German (disabled)".
1. Click "Delete"
1. Restart Anki.

## Major Features

Migaku German has many useful features that will help you on your German learning journey.

### The Migaku German Note Types

<!--Showing a Front and Back of a Migaku German Note Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/migaku-german-card-front-back.mp4"></migaku-video>

Migaku German will automatically add 4 Migaku German <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> to your Anki Collection if <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> by the same name don't already exist.

The Migaku German Add-on comes out of the box configured to work with these Migaku German <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link>.

_\* You can prevent the add-on from automatically adding the Migaku German <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> by disabling [its associated setting on the Settings Window](#add-migaku-german-note-types)._

#### The 4 Migaku German Note Types

Migaku German comes with 4 built in Note Types:

<!--Showing a Front and Back of a Migaku German Sentence Note Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/migaku-german-sentence-card-front-back.mp4"></migaku-video>

1. Migaku German Sentence
   - This note type is intended to be used when creating <internal-link to="/tools-guides/anki/guide#general-recommended-sentence-card-format">well-formed Sentence Cards</internal-link>

<!--Showing a Front and Back of a Migaku German Note Vocabulary Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/migaku-german-vocabulary-card-front-back.mp4"></migaku-video>

2. Migaku German Vocabulary
   - This note type is intended to be used when creating <internal-link to="/tools-guides/anki/guide#general-recommended-vocabulary-card-format">well-formed Vocabulary Cards</internal-link>

<!--Showing a Front and Back of a Migaku German Audio Sentence Note Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/migaku-german-audio-sentence-card-front-back.mp4"></migaku-video>

3. Migaku German Audio Sentence
   - This note type is intended to be used when creating <internal-link to="/tools-guides/anki/guide#general-recommended-audio-sentence-card-format">well-formed Audio Sentence Cards</internal-link>

<!--Showing a Front and Back of a Migaku German Note Audio Vocabulary Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/migaku-german-audio-vocabulary-card-front-back.mp4"></migaku-video>

4. Migaku German Audio Vocabulary
   - This note type is intended to be used when creating <internal-link to="/tools-guides/anki/guide#general-recommended-audio-vocabulary-card-format">well-formed Audio Vocabulary Cards</internal-link>

**If you'd like to find out when to use and how to study each of these Note Types then check out our <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link> article.**

#### How to use the Note Types

These are the <internal-link to="/tools-guides/anki/guide#notes">Fields</internal-link> found on the Migaku German <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link>:

_(The order of these fields will differ depending on the specific Note Type.)_

1. Sentence
   - The field where the sentence text goes.
1. Translation
   - The field where a translation of the sentence goes.
   - _Filling this field is not strictly required, and mostly only recommnded for students at lower levels of proficiency._
1. Target Word
   - The field where the <internal-link to="/coming-soon">Target Word</internal-link> in text goes.
     - The Target Word is the new word or grammar point being studied on the card.
1. Definitions
   - The definition(s) of the Target Word go here.
1. Image
   - An image related to the sentence or Target Word goes here.
1. Sentence Audio
   - An audio recording of the sentence goes here when available.
1. Word Audio
   - An audio recording of the Target Word goes here when available.

We feel that when possible it is generally better to have a value for each of the 7 fields listed above _(except for the "Translation" field, which is far more useful for learners at Beginner-Lower/Mid Intermediate level but even then is not strictly required)_. This is not always possible however, for example if you are <internal-link to="/coming-soon">Sentence Mining</internal-link> from a written source you may not always have audio available for the sentence of the card. In these and similar cases, it is fine to not be overly concerned with having every single field on your card filled out. If you want to find out more about our recommendations when studying cards of different varieties make sure to check out our <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link> article.

We highly recommend using the <internal-link to="/tools-guides/anki/guide#the-back-(answer)-side-of-a-card">Immerse with Migaku Browser Extension</internal-link> and the <internal-link to="/tools-guides/anki/guide#the-back-(answer)-side-of-a-card">Migaku Dictionary Add-on</internal-link> when creating your cards, together they allow you to near effortlessly make cards of the ab

**Each of the Migaku German Note Types has the same 7 fields. However, the order of those fields and the way they are displayed when viewing your cards differs based on which specific Migaku German Note Type you are using and on what specific information is being tested.**

#### Converting Your Cards to a Migaku German Note Type

The fastest way to get started using the Migaku German Add-on is to convert your existing <internal-link to="/tools-guides/anki/guide#anki-card-format-recommendations">flashcards</internal-link> to the Migaku German Note Type that matches their current format.

_\* Please note that if you use <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> that have multiple <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> associated with them that you should not convert them to a Migaku German Note Type, and should instead [configure your them to work with the Migaku German Add-on](#active-fields-tab)._

<!--Converting Some Cards to Migaku German Sentence Cards.-->

<migaku-video controls src="/content-images/tools-guides/converting-to-migaku-german-sentence.mp4"></migaku-video>

To convert your cards to a Migaku German Note Type:

1. Open Anki's Card Browser
1. Select a Note Type from the <internal-link to="/tools-guides/anki/guide#viewing-your-anki-collection">Filter List</internal-link> on the left side of the Card Browser Window
   - _You can only convert cards of a single Note Type at a time, so we use the filter list to ensure we are only selecting the cards of one Note Type at a time._
1. Select all of the cards of that Note Type by pressing "Ctrl+A" ("⌘+A" on Mac).
1. Right click one of the selected cards, and then click "Change Note Type..." in the drop-down menu that appears.
1. In the "Change Note Type" Window, select one of the Migaku German Note Types for the "New Note Type" value.
1. In the "Fields" section at the bottom of the "Change Note Type" Window.
   - Assign the Fields from your old Note Type according to the [recommendations listed above](#how-to-use-the-note-types).

**If you don't wish to use a Migaku German <internal-link to="/tools-guides/anki/guide#note-types">Note Type</internal-link> or have cards that aren't Sentence Cards that you would like to use with the Migaku German Add-on, you can instead add Migaku German support to your own <internal-link to="/tools-guides/anki/guide#note-types">Note Types</internal-link> using the [Active Fields Tab of the Settings Window](#active-fields-tab).**

**Cloze cards are not currently supported by the Migaku German Add-on.**

#### Converting From One Migaku German Note Type to Another

Converting cards that are already one of the Migaku German Note Types is easy. The Migaku German Add-on already understands how to convert between these Note Types and you don't need to assign the destination Card Type or Fields when doing the conversion.

<!--Converting Some Cards to Migaku German Sentence Cards to Migaku German Vocabulary Cards.-->

<migaku-video controls src="/content-images/tools-guides/converting-to-sentence-cards-to-vocabulary-cards.mp4"></migaku-video>

To convert cards from one Migaku German Note Type to another simply:

1. Open Anki's Card Browser
1. Select a one of the Migaku German Note Types from the <internal-link to="/tools-guides/anki/guide#viewing-your-anki-collection">Filter List</internal-link> on the left side of the Card Browser Window
   - _You can only convert cards of a single Note Type at a time, so we use the filter list to ensure we are only selecting the cards of one Note Type at a time._
1. Select the card(s) that you would like to convert.
   - You can hold "Ctrl" and click multiple cards to select different specific cards.
   - You can hold "Shift" and click two cards to select them and all cards in between them on the Card Browser's Card List.
1. Right click one of the selected cards, and then click "Change Note Type..." in the drop-down menu that appears.
1. In the "Change Note Type" Window, select the other Migaku German Note Type that you would like to convert to for the "New Note Type" value.
1. Press the "OK" button.

### The Migaku Syntax

![Migaku Syntax Labelled](/content-images/tools-guides/migaku-german/migaku-syntax-labelled.png)

When you [click the German Flag icon](#generating-the-syntax-for-a-single-card) in the Add Card or Card Editor window in Anki, or use [Migaku German's Mass Generation feature](#generating-the-syntax-for-many-cards) you will notice that some extra syntax is added to your cards. This is the Migaku German Syntax.

The Migaku German Syntax has 3 parts.

1. The Dictionary Form
   - The Dictionary Form of a word is the deconjugated form of a word as it will appear in a dictionary. For example, the Dictionary Form of the word "fastest" is "fast", and the Dictionary Form of the word the word "ran" is "run".
1. The Part of Speech.
   - The Part of Speech of the word is represented here by a code, which can be a single letter or several letters.
   - You can see what all of the Part of Speech Codes are in [their reference section](#part-of-speech-codes)
1. The Gender
   - The Gender of a word can be 4 possible values:
     1. "f" = feminine
     1. "m" = masculine
     1. "n" = neuter
     1. "x" = no gender (certain words do not have a gender)

The syntax is as follows:

```
Word[Dictionary Form,Part of Speech,Gender]
```

An example with a conjugated verb:

```
war[sein,v,x]
```

An example with a noun:

```
Bahnhof[Bahnhof,n,m]
```

### Gender Coloring

<!--Showing a Front and Back of a Migaku German Sentence Note Type Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/migaku-german-card-front-back.mp4"></migaku-video>

When the [Display Type](#display-type) of an [Active Field](#active-fields-tab) is set to "Gender Highlighting" then Gender Coloring will be enabled for that field. By default the "Sentence", "Target Word", and "Definitions" fields on all Migaku German Note Types will be displayed with Gender Coloring on the back side of a card.

- <span style="color:#e60000">Feminine words are colored in red.</span>
- <span style="color:#005ce6">Masculine words are colored in blue.</span>
- <span style="color:gray">Neuter words are colored in gray.</span>
- Words that don't have a gender are displayed in the default font color.

These colors can be changed in the [German Setting Window](#colors).

**The coloring does not function perfectly if you notice some common words are not being colored correctly for their gender please report it to us in the <internal-link to="/tools-guides/migaku-german/support">support section</internal-link>.**

### Extra Information and Audio on Hover

When you hover a word on an [Active Field](#active-fields-tab) that has already had [the Migaku German Syntax](#the-migaku-syntax) generated for it. Then you will see a popup that will show extra information about the word being hovered.

![A Word Being Hovered Showing the Popup with Labelled Information](/content-images/tools-guides/migaku-german/word-being-hovered.png)

The extra information that is shown is:

1. The Part of Speech of the hovered word.
1. The Dictionary Form of the hovered word.
   - Clicking the Dictionary Form will search it in the Migaku Dictionary Add-on if it is installed.
1. The Gender Symbol for the hovered word:
   - <span style="color:#e60000">&nbsp;♀ = Feminine</span>
   - <span style="color:#005ce6">&nbsp;♂ = Masculine</span>
   - <span style="color:gray">⚪ = Neuter</span>
   - <span style="color:#ac80ff">&nbsp;&nbsp;x = No Gender</span>
1. Audio Recordings for the hovered word provided by<a href="https://forvo.com/" target="_blank">Forvo</a>:
   - These will take a moment to load.

<!--Clicking the Play Button to Play the Audio-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/clicking-audio-play-button.mp4"></migaku-video>

_You can play the audio for the hovered word's Dictionary Form by pressing the Play Button._

<!--Searching the Dictionary Form-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/searching-the-dictionary-form.mp4"></migaku-video>

_Clicking the Dictionary Form will search it in the Migaku Dictionary Add-on if it is installed._

**If a popup does not appear when a word is hovered this signifies that the add-on can not yet parse this word because it does not exist in its dataset. We plan to continue improving the Migaku German Add-on's dataset well into the future. If you notice that some common words are not supported please consider reporting them to us in the <internal-link to="/tools-guides/migaku-german/support">support section</internal-link>.**

### Generating the Migaku Syntax

The Migaku German Add-on's core functionality relies on [the Migaku German Syntax](#the-migaku-syntax) to function. Migaku German comes with various ways of generating this syntax for your cards.

#### Generating the Syntax for a Single Card

![Migaku German Buttons](/content-images/tools-guides/migaku-german/migaku-german-buttons.png)

When you are adding or editing a card you will notice that 2 new buttons have been added to the Add Card Window or Card Editor's top menu.

The first is the Generate Syntax Button (A German Flag), the second is the Remove Syntax Button (A German Flag with an X Over It).

##### The Generate Syntax Button

The Generate Syntax Button can be used to add [the Migaku German Syntax](#the-migaku-syntax) to the selected field of a card that is currently open in the Add Card or Card Editor Window in Anki.

<!--Pressing the German Flag Button-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/pressing-the-german-flag.mp4"></migaku-video>

To generate the syntax simply:

1. Click within a field.
1. Click the Generate Syntax Button (or press its hotkey "F9").

#### Removing the Syntax from a Single Card

Removing a syntax from a field is easy. Simply:

1. Click within a field.
1. Click the Remove Syntax Button (or press its hotkey "F10").

<!--Removing Syntax From a Card-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/removing-syntax.mp4"></migaku-video>

#### Generating the Syntax for Many Cards

<!--Mass Generating Cards-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/mass-generating-cards.mp4"></migaku-video>

In order to generate [the Migaku German Syntax](#the-migaku-syntax) for many cards at once:

1. Click the "Browse" button on Anki's Main Screen to open the Card Browser.
1. Within the Card Browser select which cards you would like to add [the Migaku German Syntax](#the-migaku-syntax) to.
1. Click the "Edit" button in the top left corner of the Card Browser and then click "Generate German Readings".
   - A "Generate German Readings" window will then popup.
1. Select an "Origin" field.
   - This is the field where the text that will have the syntax added to it will come from.
1. Select the "Destination" field where the [the Migaku German Syntax](#the-migaku-syntax) will be added.
   - We recommend you to select the same field as the "Origin" field, because the Migaku German Add-on allows you to display the syntax differently on the front and back of your cards, eliminating the need to generate the syntax to a different field.
1. Select the "Addition Mode", there are three of them:
   - "Add" - Adds [the Migaku German Syntax](#the-migaku-syntax) to the bottom of the "Destination" field.
   - "Overwrite" - Overwrites the current contents of the "Destination" field with [the Migaku German Syntax](#the-migaku-syntax).
   - "If Empty" - Will only add [the Migaku German Syntax](#the-migaku-syntax) to the "Destination" field if it is empty.
   - **We recommend using "Overwrite" and having the "Destination" and "Origin" fields be the same field.**
1. Click the "Execute" button.

#### Removing the Syntax from Many Cards

<!--Mass Removing Syntax-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/mass-removing-syntax.mp4"></migaku-video>

In order to remove [the Migaku German Syntax](#the-migaku-syntax) from many cards at once:

1. Click the "Browse" button on Anki's Main Screen to open the Card Browser.
1. Within the Card Browser select which cards you would like to add [the Migaku Syntax](#the-migaku-syntax) to.
1. Click the "Edit" button in the top left corner of the Card Browser and then click "Generate German Readings".
   - A "Generate German Readings" window will then popup.
1. Select an "Origin" field.
   - This is the field [the Migaku German Syntax](#the-migaku-syntax) will be removed from.
1. Click the "Remove Readings" button.

### Handling Generation Mistakes

Migaku German's parser is certainly not perfect, and although we plan to greatly improve it going forward, you will inevitably run across mistakes in the generated syntax. Luckily fixing these mistakes is relatively easy.

#### Editing the Syntax

<!--Fixing a Parsing Error-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/fixing-a-parsing-error.mp4"></migaku-video>

You can at any time edit the syntax of a card, and change any of the values of [the Migaku German Syntax](#the-migaku-syntax). The changes you make will be instantly reflected when displaying the card. For example, you can edit an masculine "m" to a feminine "f", or neuter "n" if the word's gender is not masculine but is one of the other options.

### Migaku Dictionary Integration

Migaku German intergrates with the <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary Add-on</internal-link> and automatically adds <internal-link to="/tools-guides/migaku-dictionary/manual#export-templates">Export Templates</internal-link> to be used with each of [the Migaku German Note Types](#the-migaku-german-note-types). If you have both Migaku German and <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary Add-on</internal-link> installed then these <internal-link to="/tools-guides/migaku-dictionary/manual#export-templates">Export Templates</internal-link> will be added to your Anki Collection automatically when Anki is started.

If you do not want <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary Add-on</internal-link> to add these Export Templates, then you can disable this behavior by disabling the [Add Migaku German Note Types Option](#add-migaku-german-note-types) on the German Settings window.

<!--Importing a Migaku German Sentence from the Extension-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/importing-a-german-sentence.mp4"></migaku-video>

_You can simply install the Migaku Dictionary Add-on and your desired dictionaries and then create new cards using the Export Templates added by the Migaku German add-on._

## Settings

<!--Opening the Settings Window-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/opening-the-settings-window.mp4"></migaku-video>

To open the German Settings Window:

1. Navigate to `Migaku->German Settings` in Anki's top menu.

**If after making adjustments to any options you find that these changes are not reflected on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync and those changes will be reflected](#how-to-perform-a-full-sync).**

### Options Tab

![German Settings Window Options Tab](/content-images/tools-guides/migaku-german/german-settings-options-tab.png)

The Options Tab contains a few options that impact how Migaku German functions.

**Please note that you must hit the "Apply" button when you're finished making modifications to the settings for them to be saved.**

#### Profiles

![Profile Drop Down](/content-images/tools-guides/migaku-german/profiles-drop-down.png)

The Profiles drop-down select menu allows you to select which of your Anki Profiles Migaku German is enabled on.

The Migaku German buttons when editing cards, and the mass generation options will not show up on Profiles that are not enabled.

_By default Migaku German is enabled on "All" Profiles by default._

#### Colors

![Color Options](/content-images/tools-guides/migaku-german/color-options.png)

In the Colors Options Group you can customize the colors that are used in [Gender Coloring](#gender-coloring).

### Active Fields Tab

![Active Fields Tab](/content-images/tools-guides/migaku-german/active-fields-tab.png)

The Active Fields Tab is a sort of control center for the Migaku German Add-on. This is where you decide on which of your cards [the Migaku German Syntax](#the-migaku-syntax) will be interpreted and displayed using the different [Display Types](#display-types) available in the add-on.

**If after making adjustments to your Active Fields you find that these changes are not reflected on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync and those changes will be reflected](#how-to-perform-a-full-sync).**

#### Auto CSS & JS Generation

The Auto CCS & JS Generation option, enables and disables the add-on from automatically adjusting your Card Types, and adding the ability to interpret [the Migaku German Syntax](#the-migaku-syntax) into the selected [Display Type](#display-type).

**The add-on will not function normally with this option disabled, and it should only be disabled by developers who wish to adjust the JS and CSS themselves and don't want the add-on to interfere with any changes they make.**

#### Add Migaku German Note Types

When enabled Migaku German will attempt to add [the Migaku German Note Types](#the-migaku-german-note-types) to your Anki Collection if it does not already exist. If you wish to use different Note Types with the Add-on and don't want the add-on to add [the Migaku German Note Types](#the-migaku-german-note-types) after you've deleted them then disable this option.

#### How to Use Active Fields

Your "Active Fields" are the fields on your Cards on which Migaku German will interpret [the Migaku German Syntax](#the-migaku-syntax) into a selected [Display Type](#display-type).

If you find that [the Migaku German Syntax](#the-migaku-syntax) is being shown as is and is not being interpreted on the computer version Anki then that means you have incorrectly configured your Active Field row for that Card Type. You will need to [edit that Active Field row](#editing-an-existing-active-field) to resolve the issue.

**If [the Migaku German Syntax](#the-migaku-syntax) is being correctly interpreted on the Computer version of Anki but not on AnkiWeb, Anki Mobile, or AnkiDroid then [perform a full sync](#how-to-perform-a-full-sync) to resolve this issue.**

##### Ensuring Your Card Types are Compatible

There are a few things to keep in mind when using your own <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> with Migaku German.

There are a few template syntax issues that you may run across:

<!--Copying the Contents of the Front Side and Overwriting {{FrontSide}}-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/copying-and-overwriting-frontside.mp4"></migaku-video>

1. You cannot use `{{FrontSide}}` on the <a href="https://docs.ankiweb.net/#/templates/intro?id=card-templates" target="_blank">Back Template</a> of <internal-link to="/tools-guides/anki/guide#card-types">Card Types</internal-link> you will be using with Migaku German. Instead you should copy the contents of the <a href="https://docs.ankiweb.net/#/templates/intro?id=card-templates" target="_blank">Front Template</a> into the <a href="https://docs.ankiweb.net/#/templates/intro?id=card-templates" target="_blank">Back Template</a> itself in place of using `{{FrontSide}}`. This should be done before adding that Card Type to your Active Fields list.
1. Cloze cards are not currently compatible with Migaku German.

<!--Removing Cloze Filter From Field Name-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/removing-cloze-filter.mp4"></migaku-video>

1. You must remove any leading <a href="https://docs.ankiweb.net/#/templates/generation?id=cloze-templates" target="_blank">Filters</a> from your templates' fields.
   - For example, a common filter used in some German decks is `cloze:` and is used in this way: `{{cloze:[Field Name]}}`.
   - If you find that in your template there are <a href="https://docs.ankiweb.net/#/templates/generation?id=cloze-templates" target="_blank">Filters</a> before your field names (`{{[Filter Name]:[Field Name]}}`) then you must remove them and their trailing colons (`:`). Once you do this the syntax will be simply: `{{[Field Name]}}`.

##### Adding a New Active Field

Once you have ensured that you will be adding a compatible Card Type to your Active Fields list then you are ready to add a new Active Field.

You can do this by selecting an option for each of the drop-down menus that appear on top of the Active Field List and pressing the "Add" button.

<!--Adding a New Active Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/adding-a-new-active-field.mp4"></migaku-video>

The drop-down menu options are as follows:

1. Profile
   - The Profile(s) where the Migaku German Syntax for this Active Field will be active, and the necessary CSS and JS will be added to your Card Type.
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
   - Whether you want [the Migaku German Syntax](#the-migaku-syntax) for this field to be interpreted according to your selected [Display Type](#display-type) on the <internal-link to="/tools-guides/anki/guide#the-front-(question)-side-of-a-card">Front Side</internal-link>, the <internal-link to="/tools-guides/anki/guide#the-back-(answer)-side-of-a-card">Back Side</internal-link>, or both sides of your cards.
1. Display Type
   - How you want the add-on to interpret and display the [the Migaku German Syntax](#the-migaku-syntax).
   - You can find an explanation of the different types in the [Display Types section](#display-type).

**After you have added a new Active Field you should [perform a full sync](#how-to-perform-a-full-sync) so that the changes will be correctly reflected on AnkiWeb, Anki Mobile and AnkiDroid.**

##### Editing an Existing Active Field

<!--Editing an Active Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/editing-an-active-field.mp4"></migaku-video>

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

<migaku-video controls src="/content-images/tools-guides/migaku-german/deleting-an-active-field.mp4"></migaku-video>

To delete an existing Active Field.

1. Click the "X" button on the right side of the Active Field row you would like to delete.
1. Confirm the deletion in the prompt.

**After you have deleted an Active Field you should [perform a full sync](#how-to-perform-a-full-sync) so that the changes will be correctly reflected on AnkiWeb, Anki Mobile and AnkiDroid.**

#### Display Types

Display Types are the different ways you can display [the Migaku German Syntax](#the-migaku-syntax) when it is interpreted.

There are 2 different types:

**1. No Highlighting**

- Gender Coloring is not displayed. [Extra Information and Audio on Hover](#extra-information-and-audio-on-hover) is still available however.

![No Highlighting Display Type](/content-images/tools-guides/migaku-german/no-highlighting-display-type.gif)

**2. Gender Highlighting**

- Gender Coloring is Displayed and [Extra Information and Audio on Hover](#extra-information-and-audio-on-hover) is available.

![Gender Highlighting Display Type](/content-images/tools-guides/migaku-german/gender-highlighting-display-type.gif)

## Reference

### How to Perform a Full Sync

<!--Performing a Full Sync-->

<migaku-video controls src="/content-images/tools-guides/migaku-german/performing-a-full-sync.mp4"></migaku-video>

To perform a full sync:

1. Navigate to `Tools->Preferences...` from Anki's top menu bar.
1. Click the "Network" tab.
1. Check off the "On next sync, force changes in one direction" checkbox.
1. Click "Close".
1. Click the "Sync" button on Anki's Main Screen.
1. Click "Upload to AnkiWeb" in the prompt.

### Part of Speech Codes

The Part of Speech Codes used in [the Migaku German Syntax](#the-migaku-syntax) are as follows:

1. "v" = Verb
1. "adj" = Adjective
1. "adv" = Adverb
1. "art" = Article
1. "cnum" = Cardinal Number
1. "circ" = Zirkumposition
1. "conj" = Conjunction
1. "demo" = Demonstrative
1. "ind" = Indefinite Pronoun
1. "int" = Interjection
1. "onum" = Ordinal Number
1. "n" = Noun
1. "pn" = Proper Noun
1. "poss" = Possesive
1. "ppos" = Postposiiton
1. "per" = Personal Pronoun
1. "prep" = Preposition
1. "prepart" = Preposition w/ Article
1. "proadv" = Pronominal Adverb
1. "part" = Particle
1. "rel" = Relative Pronoun
1. "trunc" = Kompositions-Erstglied
1. "vpart" = Verb Particle
1. "advpro" = Adverbial Interrogative Pronoun
1. "pro" = Interrogative Pronoun
1. "zu" = Zu for Infinitive
