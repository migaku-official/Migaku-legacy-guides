---
title: Migaku Dictionary User's Manual
shortTitle: User's Manual
description: This manual contains an explanation of every feature and piece of functionality in the Migaku Dictionary Add-on.
headerImage: /content-images/tools-guides/migaku-dictionary/migaku-dictionary-header.png
position: 2
---

# Migaku Dictionary User's Manual

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
  - [Ensuring the Correct Anki Version](#ensuring-you-have-the-correct-anki-version)
  - [Add-on](#add-on)
  - [Dictionaries](#dictionaries)
    - [Downloading All Available Target Language Dictionaries](#downloading-all-available-target-language-dictionaries)
    - [Finding the Installation Folder](#finding-your-dictionaries-installation-folder)
    - [Supported Formats](#supported-file-formats)
    - [Installing Dictionaries](#installing-dictionaries)
    - [Removing Dictionaries](#removing-dictionaries)
    - [How Dictionaries Work](#how-dictionaries-work-in-migaku-dictionary)
  - [Frequency Lists](#frequency-lists)
    - [Frequency List Format](#frequency-list-format)
    - [Special Note About Homographs](#special-note-about-homographs)
    - [Frequency List Installation](#frequency-list-installation)
  - [Deconjugation Support](#deconjugation-support)
    - [Conjugation Table Format](#conjugation-table-format)
    - [Conjugation Table Installation](#conjugation-table-installation)
  - [Customizing the Definition Header](#customizing-the-definition-header)
    - [Changing a Definition Header](#changing-a-definition-header)
  - [Updating Migaku Dictionary](#updating-migaku-dictionary)
  - [Uninstalling Migaku Dictionary](#uninstalling-migaku-dictionary)
- [Basic Functionality](#basic-functionality)
  - [Opening the Dictionary](#opening-the-dictionary)
  - [Searching](#searching)
    - [Dictionary Groups](#dictionary-groups)
    - [Search Modes](#search-modes)
    - [Tabs](#tabs)
    - [Deconjugation Modes](#deconjugation-modes)
    - [Brackets](#Brackets)
    - [Searching Your Anki Collection](#searching-your-anki-collection)
  - [Main Dictionary Window](#main-dictionary-window)
    - [Dictionary Headers](#dictionary-headers)
    - [Definition Headers](#definition-headers)
    - [Frequency Score](#frequency-score)
    - [Sidebar](#sidebar)
    - [Zooming](#zooming)
    - [Search History](#search-history)
    - [Night Mode](#night-mode)
  - [Sending Definitions to Cards](#sending-definitions-to-cards)
    - [Export Target](#export-target)
    - [Sending a Portion of a Definition](#sending-a-portion-of-a-definition)
    - [Output Modes](#output-modes)
    - [Duplicate Headers](#duplicate-headers)
    - [Google Images Dictionary](#google-images)
    - [Forvo Dictionary](#forvo-dictionary)
- [Card Exporter](#card-exporter)
  - [Export Templates](#export-templates)
  - [Opening The Exporter](#opening-the-exporter)
  - [Adding Definitions Manually](#adding-definitions-manually)
  - [Adding Images Manually](#adding-images-manually)
  - [Adding Audio Manually](#adding-audio-manually)
  - [Adding Definitions Automatically](#adding-definitions-automatically)
  - [Adding Images Automatically](#adding-images-automatically)
  - [Adding Audio Automatically](#adding-audio-automatically)
  - [Adding Cards](#adding-cards)
  - [Adding Cards Automatically](#adding-cards-automatically)
  - [Text Styling in The Exporter](#text-styling-in-the-exporter)
- [Mass Exporting Definitions](#mass-exporting-definitions)
- [Settings](#settings)
  - [Restoring Defaults](#restoring-defaults)
  - [Creating Dictionary Groups](#creating-dictionary-groups)
    - [Adding a New Group](#adding-a-new-group)
    - [Editing and Removing a Group](#editing-and-removing-a-group)
  - [Creating Export Templates](#creating-export-templates)
    - [Exporter Fields](#exporter-fields)
    - [Adding a New Template](#adding-a-new-template)
    - [Editing and Removing a Template](#editing-and-removing-a-template)
  - [Options](#Options)
    - [Open on Startup](#open-on-startup)
    - [Highlight Example Sentences](#hightlight-example-sentences)
    - [Show Export Target](#show-export-target)
    - [Dictionary Tooltips](#dictionary-tooltips)
    - [Global Hotkeys](#global-hotkeys)
    - [Open on Global Search](#open-on-global-search)
    - [Max Total Search Results](#max-total-search-results)
    - [Max Dictionary Search Results](#max-dictionary-search-results)
    - [Add Cards With Japanese Readings](#add-cards-with-japanese-readings)
    - [Japanese Readings on Edit](#japanese-readings-on-edit)
    - [Google Images Search Region](#google-images-search-region)
    - [Maximum Image Width](#maximum-image-width)
    - [Maximum Image Height](#maximum-image-height)
    - [Surround Term](#surround-term)
    - [Forvo Language](#forvo-language)
    - [Always on Top](#always-on-top)
  - [Dictionaries Tab](#dictionaries-tab)

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

### Add-on

Migaku Dictionary can be installed the same way as any other Anki add-on.

You do this by pasting Migaku Dictionary's installation Code into Anki's _"Install Add-on"_ window. You can access this window by navigating to _`Tools->Add-ons->Get Add-on's`_ from Anki's top menu.

Migaku Dictionary's installation code is `1655992655`.

<!--Migaku Dictionary Add-on Installation-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/addon-installation.mp4"></migaku-video>

### Dictionaries

Migaku Dictionary includes two built-in dictionaries: Google Images and Forvo.

- Google Images allows you to find images related to your search input.
- Forvo allows you to search for audio recordings for your searched input.

They both function the same as normal dictionaries in most respects. More information is available in their respective sections.

#### Supported File Formats

There are two different formats supported by Migaku dictionary:

1. Migaku's Proprietary Format
1. The Yomichan Dictionary Format.

##### Yomichan Format

<a href="https://foosoft.net/projects/yomichan/" target="_blank">Yomichan</a> is a popup dictionary extension available for both Google Chrome and Mozilla Firefox.

Yomichan dictionaries are ZIP files with a number of JSON files contained within them.
_\* Please note that Yomichan's Kanji Dictionary and Frequency List are not compatible with Migaku Dictionary._

![Picture of a Yomichan Dictionary](/content-images/tools-guides/migaku-dictionary/yomichan-dictionary-picture.png)

##### Migaku Dictionary Format

The Migaku Dictionary format is a JSON file formatted as follows:

```
[{"term": "", "altterm": "", "pronunciation": "", "definition": "", "pos": "", "examples": "", "audio": ""}, {"term": "", "altterm": "", "pronunciation": "", "definition": "to separate", "pos": "", "examples": "", "audio": ""}]
```

Where:

- `"term"` is the term being defined.
- `"altterm"` (alternative term) is an alternative form of the term. When searching, `"altterm"` functions the same as the main term. Each entry can have one `"altterm"` value. If the `"alterm"` is the same as the main term, it will be ignored.
- `"pronunciation"` is the pronunciation.
- `"pos"` is for what part of speech the term is.
- `"examples"` is for example sentences.
- `"audio"` is the location of an audio file of the term being pronounced.
- `"altterm"`, `"pos"`, `"examples"`, and `"audio"` can be empty. `(empty strings)`.

_\* `"pos"`, `"examples"`, and `"audio"` are future-proofing values, and not yet currently used within the add-on._

Example from CEDICT Chinese to English dictionary:

```
[{"term": "分隔", "altterm": "", "pronunciation": "fēn gé", "definition": "to divide/to separate/partition", "pos": "", "examples": "", "audio": ""}, {"term": "分离", "altterm": "分離", "pronunciation": "fēn lí", "definition": "to separate", "pos": "", "examples": "", "audio": ""}]
```

Example from Kengdict Korean to English dictionary:

```
[{"term": "사회", "altterm": "社會", "pronunciation": "", "definition": "culture,society", "pos": "", "examples": "", "audio": ""}, {"term": "사회 계층", "altterm": "", "pronunciation": "", "definition": "stratification", "pos": "", "examples": "", "audio": ""}]
```

#### Installing Dictionaries

The first step to install a dictionary is to navigate to the Dictionaries Tab of the Dictionary Settings Window. You can do this by:

1. Navigate to `Migaku->Dictionary Settings` from Anki's Top Menu Bar.
1. The Dictionary Settings window will then open. In this window click the `Dictionaries` tab.
1. You will then be viewing the Dictionaries Tab.

From the Dictionaries Tab, there are a three options for installing dictionaries:

1. [Installing a Dictionary With Our Installation Wizard](#installing-a-dictionary-with-our-installation-wizard)
1. [Installing a Dictionary From a ZIP File](#installing-a-dictionary-from-a-zip-file)
1. [Installing a Dictionary by Adding a Language](#installing-a-dictionary-by-adding-a-language)

##### Installing a Dictionary With Our Installation Wizard

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

**If you are a technical user and are interested in hosting dictionaries on your own server please contact us and we can provide general information about the API.**

##### Installing a Dictionary from a ZIP File

All open source dictionaries that are provided by the Migaku team are able to be [installed using our Installation Wizard](#installing-a-dictionary-with-our-installation-wizard). If you have a dictionary ZIP file that is in a [supported file format](#supported-file-formats), then you can install it directly into any existing language group.

You can do this by:

1. Select a language in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the `Install Dictionary From File` button.
1. Navigate to the Dictionary ZIP file you would like to install and click `Open`
1. You can then optionally change the name of the Dictionary.
   - The default name is the name of the ZIP file you selected.
1. Click `OK`

- You will then see the dictionary added to the language you selected.

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/installating-yomichan-dictionary.mp4"></migaku-video>

##### Installing a Dictionary by Adding a Language

To install dictionaries by adding your own language:

1. In the Dictionaries Tab of the Migaku Settings Window, click the `Add a Language` button.
   - This will open a window where you can enter a name for the language.
1. Enter the name you wish to give your language and press `OK`

**If you wish to install a frequency list for your dictionaries, then you have to install the frequency list first. This step is not necessary if you install the dictionary's via the wizard and there is a frequency list provided. **

To install the frequency data in Wizard:

1. Select a language in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the `Install Frequency Data in Wizard` button.
1. From the list, select the language for which you want to install the frequency data and click `Download`
1. Click `OK`

To install the frequency data from a file:

1. Select a language in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the `Install Frequency Data From File` button.
1. Navigate to the Dictionary ZIP file you would like to install and click `Open`

To install a dictionary:

1. Select the language you created on the left side of the Dictionaries tap.
1. Click the `Install Dictionary in Wizard` button on the right side.
1. Follow [Installing a Dictionary With Our Installation Wizard](#installing-a-dictionary-with-our-installation-wizard) from step 2 onwards.

To install the conjugation data:

1. Select a language in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the `Install Conjugation Data in Wizard` button.
1. From the list, select the language for which you want to install the conjugation data and click `Download`
1. Click `OK`

To install the conjugation data in wizard:

1. Select a language in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the `Install Conjugation Data in Wizard` button.
1. Navigate to the Dictionary ZIP file you would like to install and click `Open`

To install the conjugation data from a file:

1. Select a language in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the `Install Conjugation Data From File` button.
1. Select the language you want to install the conjugation data for and click `Download`

#### Uninstalling Languages and Dictionaries

To uninstall a language:

1. Select a language in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the "Remove Language" button.

To uninstall a dictionary:

1. Select a dictionary in the Language and Dictionary list on the left side of the Dictionary Tab.
1. Click the "Remove Dictionary" button.

#### How Dictionaries Work in Migaku Dictionary

Dictionaries are big. Multiple dictionaries are very big, so searching through them can take some time. In order to speed up this process, Migaku Dictionary creates a single <a href="https://www.sqlite.org/index.html" target="_blank">SQLite</a> database to use while searching.

This database is created by importing the dictionaries contained in the add-on's `dictionaries` folder. When an Anki profile is loaded, Migaku dictionary checks to see if there have been any changes to the folder. If a change is found, the SQLite database is updated to reflect the current state. This allow you to easily add or remove dictionaries simply by adding or removing them from the appropriate folder.

### Frequency Lists

Frequency lists are used to generate a frequency score for words in your dictionaries.

#### Frequency List Format

In order to use the frequency score feature, the frequency list must be stored as a single JSON file in one of two formats, ordered from most to least common words:

1. The first format is for languages whose words do not have a separate reading component.

```
["you", "I", "to", "the", "a", "and", "that", "it", "of", "me", "what", "is", "in", "this"]
```

_\*In this example "you" is the most common word. "I" is next, "to" is the third, and so on._

2. For languages that have a separate reading component _(like Japanese or Chinese)_, there is an alternative format that can be also be used but is not required.

```
[["去る","サル"], ["バナナ","バナナ"], ["斧","オノ"], ["高校","コウコウ"], ["する","スル"], ["あっさり","アッサリ"]]
```

_\*This allows the add-on to differentiate between words that are written the same way but have different pronunciations 辛い(つらい) and 辛い(からい). In this format, **the reading must be in katakana, even if the word is normally written in hiragana**._

#### Special Note About Homographs

One thing to keep in mind is that aside from Japanese where this can be partially mitigated because the word can be differentiated by readings, using a frequency list will treat homographs as the same word. Both words will end up having the same frequency score, which will be the higher of the two.

_\*Just as an example, let’s say "record" as a noun is a 1 star word word and "record" as a verb is a 3 star word. In the dictionary, both will appear as 3 star words._

#### Frequency List Installation

**A frequency lists should be installed before you install a dictionary that you want to add that frequency information to. You will need to [uninstall the dictionaries](#uninstalling-languages-and-dictionaries) you would like to be affected and reinstall them after installing a new frequency list if you want the new frequency list information to apply to them.**

There are 3 different ways to install Frequency Lists or Data to the Dictionary Add-on:

1. Install Frequency Data that is provided by the Migaku team when installing languages through our wizard.
   - With this step there is nothing for you to do, as the frequency list is installed with the dictionaries.
1. Download and install Frequency Data directly from a server into an existing language.
1. Install Frequency Data from a file into an existing language.

For explanations on how to install frequency lists, you can follow the guide in the [Installing Dictionaries](#installing-dictionaries) section.

## Deconjugation Support

Migaku dictionary can also offers deconjugation support. Deconjugation support is installed by installing a conjugation table (`conjugations.json`) file into a particular language folder. More information can be found by referencing the Deconjugation Mode section.

### Conjugation Table Format

In order to use a conjugation table, it must be a JSON file configured in the following format:

```
[{"inflected":"いなさい","dict":["う"]}, {"inflected":"いました","dict":["う"]}, {"inflected":"いません","dict":["う"]}, {"inflected":"かったら","dict":["い"]}, {"inflected":"かったり","dict":["い"]}, {"inflected":"きすぎる","dict":["く","くる"]}, {"inflected":"ぎすぎる","dict":["ぐ"]}, {"inflected":"きちゃう","dict":["くる"]}, {"inflected":"きなさい","dict":["く","くる"]}, {"inflected":"ぎなさい","dict":["ぐ"]}, {"inflected":"きました","dict":["く","くる"]}, {"inflected":"ぎました","dict":["ぐ"]}, {"inflected":"きません","dict":["く","くる"]}]
```

Where:

- `"inflected"` is a conjugated word-ending (or in the case of irregular words, an entire conjugated word, e.g., ran).
- `"dict"` is the corresponding dictionary form-ending (or in the case of irregular words, the entire corresponding dictionary form, e.g., run).
- There is also the optional `prefix` option that can be used for languages such as German in the case that a conjugated form has both a change in ending and a prefix added to it:
  - `[{"inflected": "tet", "dict": ["ten"], "prefix": "ge"},...]`

### Conjugation Table Installation

To install a conjugation table:

1. Open the `Dictionaries` tab in the settings
1. Select the language you want to install the conjugation data for on the left side
1. Click `Install Conjugation Data in Wizard` on the right side
1. Select the language from the list provided and press `Download`
1. Press `OK` in the window that pops up

<!--- Installing a conjugation table ---->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/installing-conjugation-data.mp4"></migaku-video>

_\*Find out how to use Deconjugation Mode in the [Deconjugation Mode Section](#deconjugation-modes 'Deconjugation Mode Section')._

If you want to install your own conjugation data you can follow the section [Installing a Dictionary From a ZIP File](#installing-a-dictionary-from-a-zip-file).

### Customizing the Definition Header

![Definition Header Order Example](/content-images/tools-guides/migaku-dictionary/definition-headers-examples.png)
By changing the definition header, you can control what order the information in a definition’s header appears.

#### Changing a Definition Header

To change the definition header:

1. Open the Migaku Dictionary Settings
1. Go to the `Dictionaries` tab
1. Select the dictionary who's header you want to change on the left side
1. Click the `Edit Definition Header` button on the right side under `Dictionary Options`
1. Change the oder of the words and press `OK`

<!--- Changing definition header --->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/changing-definition-header.mp4"></migaku-video>

Now you can change the shown word into one of the following:

1. term,altterm,pronunciation
1. term,pronunciation,altterm
1. altterm,term,pronunciation
1. altterm,pronunciation,term
1. pronunciation,term,altterm

The default order is pronunciation,term,altterm.

### Updating Migaku Dictionary

<!--Migaku Dictionary Update-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/addon-update.mp4"></migaku-video>

To update Migaku Dictionary:

1. Navigate to `Tools->Add-ons` from Anki's Top Menu Bar.
1. Click the "Check for Updates" button.
1. If an update is found you will be notified and asked if you would like to update. Confirm the update. -_You will see a couple warning messages about Migaku Dictionary shutting down its database, this is expected behavior._
1. Restart Anki to begin using the update.

### Uninstalling Migaku Dictionary

If you try and remove the add on, you will likely see this error:

<!--Migaku Dictionary Uninstall Error-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/addon-uninstall-error.mp4"></migaku-video>

This error is caused by the type of database Migaku Dictionary uses `(SQLite)`. SQLite Databases can not be deleted while in use. In order to remove the add-on:

1. Disable the add-on.
1. Restart Anki and delete the add-on.

<!--Migaku Dictionary Uninstall-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/addon-uninstall.mp4"></migaku-video>

_\*More technically minded users can delete the add-on by closing Anki, navigating to your `appdata/roaming/anki2/addons21` folder, and deleting the folder labeled "`1655992655`"._

## Basic Functionality

### Opening the Dictionary

<!--Migaku Menu Open Dictionary-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/open-dictionary-option.mp4"></migaku-video>

There are two ways to open the dictionary:

1. Click on "Migaku" in Anki's Top Menu Bar. In the menu that drops down, click "Open Dictionary".
1. Use the hotkey "Ctrl+W" ("⌘+W" on Mac).

<!--Clicking to Open the Dictionary-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/clicking-open-dictionary.mp4"></migaku-video>

The dictionary will open to the welcome screen which displays the add-on’s hotkeys.

![Migaku Dictionary Welcome Screen](/content-images/tools-guides/migaku-dictionary/dictionary-welcome-screen.png)

There are 2 types of hotkeys, "Local" hotkeys and "Global" hotkeys.

1. Local hotkeys only work in Anki
1. Global hotkeys will work anywhere on your computer while Anki is running.
   _\* If the global hotkeys are conflicting with other programs, you can disable them in Settings._

The welcome screen will disappear once a word is searched.

### Searching

<!--Searching in the Search Bar-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/search-bar-searching.mp4"></migaku-video>

To search a word, type it into the search bar and either click the search button or press enter.

<!--Searching in Anki-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/searching-in-anki.mp4"></migaku-video>

It’s also possible to search for a word within Anki by highlighting a word, and pressing the local hotkey ("Ctrl+S” on PC or “⌘+S” on Mac) or by right clicking the highlighted word and selecting “Search” in the popup menu.

<!--Searching Globally-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/searching-globally.mp4"></migaku-video>

You can also search for a word outside Anki by highlighting a word and pressing the global hotkey. (“Ctrl+C+Space” on PC or “⌘+C+B” on Mac)

#### Dictionary Groups

_\* [Click here](#creating-dictionary-groups) to learn about creating Dictionary Groups._

<!--Changing the Dictionary Group-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/changing-the-dict-group.mp4"></migaku-video>

Dictionaries are grouped together into Dictionary Groups to allow the user to search only a specific subset of their installed dictionaries and/or to search those dictionaries in a particular order. In the top left corner of the [Main Dictionary Window](#main-dictionary-window), you can select which group you want to search in Dictionary Group Drop-Down Menu.

There are three default groups built into the add-on:

- All (searches every dictionary currently installed excluding Google Images and Forvo)  
   _\* Dictionaries are searched in alphabetical order._
- Google Images
- Forvo

And there can be an indefinite number of language specific dictionaries which map to the language folders found in the `[Migaku Dictionary Parent Folder]/user_files/dictionaries` folder.

- Language specific  
   _\* Searches every dictionary inside the selected language’s folder. Dictionaries are searched in alphabetical order._

**In addition to these built-in dictionaries, it’s possible to [create your own custom groups](#creating-dictionary-groups) in the settings menu.**

You can control which Dictionary Group is searched using the drop down menu furthest to the left in the Dictionary Toolbar.

<!--Dictionary Group Menu Example-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/dictionary-group-menu.mp4"></migaku-video>

#### Search Modes

<!--Searching with different Search Modes-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/searching-with-search-modes.mp4"></migaku-video>

Search mode controls how the add-on will search through the dictionary. There are six different modes.

- Forward: searches dictionaries for entries that begin with your search query.

* Backward: searches dictionaries for entries that end with your search query.
* Exact: searches dictionaries for entries that perfectly match your search query.
  - This mode is compatible with Deconjugation Mode; it will search for entries that exactly match deconjugated versions of your search query.
  - Searches in this mode will be considerably faster than the other modes. The reason for this is that this mode only looks for a direct case-sensitive match within the searched dictionaries, and computers are much faster at determining whether a given piece of text matches another piece of text exactly than they are at determining partial matches.
* Definition: searches for entries that contain your search query inside the contents of their definition.
* Example: searches for entries whose definition contains an example sentence that contains your search query.
  - This mode works by specifically searching the contents of “「」” brackets. Because of this, this mode only works with Japanese monolingual dictionaries.
* Pronunciation: the same as Forward, but only searches for entries whose pronunciation matches the search query.

You can control which mode is being used with the drop down menu to the left of the search bar

#### Tabs

<!--Clicking Different Tabs-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/clicking-different-tabs.mp4"></migaku-video>

Tabs allow you to reference the results of multiple searches.

There are two tab modes that can be used: Multi-Tab Mode and Single-Tab Mode.

<!--Multi-Tab Mode Search-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/multi-tab-search.mp4"></migaku-video>

- Multi-Tab mode opens a new tab when a new word is searched.

<!--Single-Tab Mode Search-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/single-tab-search.mp4"></migaku-video>

- With Single-Tab Mode the results in the current tab are overwritten with each new search.

<!--Closing a Tab-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/closing-a-tab.mp4"></migaku-video>
In order to close a tab, right click on it. Closing the dictionary itself will close all of the tabs.

#### Deconjugation Modes

##### Using Deconjugation Mode

<!--Deconjugation Mode Search-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/deconjugation-mode-search.mp4"></migaku-video>
When toggled on, Deconjugation Mode allows you to to look up words even if they are in a conjugated form. Migaku Dictionary will automatically find the word's unconjugated dictionary form for you!

<!--Deconjugation Mode Toggle-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/deconjugation-mode-toggle.mp4"></migaku-video>
To toggle this mode press the Rubik's Cube button. When all three rows are aligned on the cube, deconjugation mode is turned off. When the middle row is partially rotated, deconjugation mode is on.

In addition to using the button, a conjugation table for the language you want to look up a word in is also necessary. [Find out how to install one here](#conjugation-table-installation).

Conjugation tables can deconjugate regular conjugated forms (“play” and “-ed”), as well irregular conjugated forms (“think” and “thought”).

##### How Deconjugation Mode Works

When deconjugation mode is turned on, the add-on will check the end of your search query for any matching conjugated word-endings in the conjugation table. For each match that’s found, the add-on will replace the conjugated word-ending with each potential dictionary form ending, and then search that along with your original search query.

Deconjugation Mode is compatible with the “Exact” Search Mode; when enabled the add-on will search for entries that are exact matches of possible deconjugated versions of your search query, as well as also looking for any results that match the original searched text exactly.

As this is a brute force process, unrelated entries may appear among the results occasionally.  
_\* This can be partially mitigated in Japanese by searching for terms in their full kanji forms._

Although creating more precise deconjugation algorithms is possible, each language's algorithm would need to be constructed individually. The current method of deconjugation was chosen because it is equally applicable for all languages.

#### Brackets

<!--Brackets Removed When Searching-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/brackets-removed-search.mp4"></migaku-video>

In some languages, Japanese for instance, brackets are used to display the readings of words. Oftentime these brackets are placed directly in the middle of a word. In order to remove the inconvenience of needing to manually remove them, the add on automatically excludes brackets as well as the information contained within when searching. Specifically, the following brackets are removed: (), [], （）, 《》.

#### Searching Your Anki Collection

<!--Searching in Your Collection-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/searching-in-collection.mp4"></migaku-video>

You can search a word to see if it appears in any of your cards by highlighting and right clicking it, and then selecting “Search Collection”. This will open the Anki Card Browser and show you any cards where the word that has been searched occurs.

### Main Dictionary Window

Results from a search will be grouped together by dictionary, rather than by word. The order which the dictionaries are shown in is determined by the [dictionary group](#dictionary-groups). If a frequency list has been installed for a language, the results will be sorted by frequency from the highest to the lowest. If no frequency list has been installed then the words will be sorted first by relevancy and then in alphabetical order.

#### Dictionary Headers

![Dictionary Header Left Handside](/content-images/tools-guides/migaku-dictionary/dictionary-header-left.png)

The current dictionary's name will appear on the left side of the heading section.

![Dictionary Header Right Handside](/content-images/tools-guides/migaku-dictionary/dictionary-header-right.png)

The Duplicate Header toggle, Output mode drop-down menu, Field Selector drop-down menu and the Next Dictionary/Previous Dictionary buttons can be found on the right hand side.
_\* Information about using the Duplicate Header toggle, Output Mode drop-down, and Field Selector drop-down can be found in the [Sending Definitions to Cards section](#sending-definitions-to-cards)._

![Dictionary Header Next and Previous Dictionary Buttons](/content-images/tools-guides/migaku-dictionary/dictionary-next-previous-dictionary.png)

The Next Dictionary/Previous Dictionary buttons allow you to jump directly to the next dictionary.

#### Definition Headers

![Definition Header](/content-images/tools-guides/migaku-dictionary/definition-header.png)

Each entry of a result has a Definition Header.

![Definition Header Left](/content-images/tools-guides/migaku-dictionary/definition-header-left.png)

On the left of the header you will find the [`term`, `alternative term`, `pronunciation`, and `frequency score`](#supported-file-formats).
_\* If the dictionary entry is missing a value for any of those variables then they will not be displayed._

![Definition Header Right](/content-images/tools-guides/migaku-dictionary/definition-header-right.png)

On the right side, you can find the Send to Exporter button, the Copy button, the Send to Field button, and the Next Entry/Previous Entry buttons.

- The order in which the term, alternative term(s), the pronunciation, and the frequency score are found can be changed by using a [Definition Header File (`Header.csv`)](#customizing-the-definition-header), and the brackets surrounding the term and alternate term can be changed in the [settings](#settings).

![Definition Copy Button](/content-images/tools-guides/migaku-dictionary/definition-copy-button.png)

When no portion of a definition is highlighted, the “Copy” button copies the entire definition to your clipboard. If a portion of the entry is highlighted, the “Copy” button, instead, only sends the header and the highlighted portion to the clipboard.

![Next and Previous Definition Buttons](/content-images/tools-guides/migaku-dictionary/next-previous-definition.png)

The Next Entry/Previous Entry buttons will jump you to the next or previous definition respectively.

The [Send to Exporter Button](#adding-definitions) and the [Send to Field Button](#sending-definitions-to-cards) will be explained in their respective sections.

#### Frequency Score

![Frequency Score Example](/content-images/tools-guides/migaku-dictionary/frequency-score-example.png)

For language learners, the usefulness of any given word is directly related to how common a word is. The more commonly a word is used in native speech or media, the more a learner’s comprehension will grow from learning that word. See <a href="https://simple.wikipedia.org/wiki/Zipf%27s_law" target="_blank">Zipf’s Law</a> for more information on this topic.

In order to leverage this, you can use the frequency score feature to simplify the decision of whether a word is worth adding to Anki at your current stage in learning or not.

Words are ranked by their Star Count, it ranges from 5 (most common) to 0 (least common):

- ★★★★★ = 1st - 1.5k _(most common words)_
- ★★★★ = 1.5k - 5k
- ★★★ = 5k - 15k
- ★★ = 15k - 30k
- ★ = 30k - 60k
- \_\_ _(no stars)_ = 60k+ _(least common words)_

At the beginning stages of your language learning journey, you should focus on words with a Star Count of 4 or 5 stars. Often words of 2 stars or lower are worth delaying until you reach an intermediate or advanced level.

For a word's Star Count to be shown, you must [install a Frequency List for that dictionary's language group](#frequency-list-installation).

#### Sidebar

Using the sidebar allows you to see a list of every result found by your current search.

<!--Opening and Closing the Sidebar-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/open-close-sideabar.mp4"></migaku-video>

To open or close the sidebar, click on the side bar icon, located to the right of the search button.

<!--Navigating by Entry in the Sidebar-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/navigating-in-sideabar.mp4"></migaku-video>

Clicking on an entry in the side bar will jump you straight to that entry. By right clicking on a dictionary, you can minimize that dictionary and hide its entries. This allows you to more easily see all dictionaries in which entries have been found.

#### Zooming

<!--Zooming in and Out-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/font-size-definitions-and-sidebar.mp4"></migaku-video>

By pressing the + and - buttons to the right of the sidebar, you can increase or decrease the font size of the definitions, and side bar entries.

#### Search History

By clicking on the clock icon, you can display a list of all of the items you have searched along with the date that the search occured.

<!--Open History and Search Term-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/open-history-and-search.mp4"></migaku-video>  
By double clicking on a term, you can re-search for it.

<!--Clear History-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/clear-history.mp4"></migaku-video>

To erase your history, press the "Clear History" button.

#### Night Mode

<!--Night Mode Toggling-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/night-mode-toggling.mp4"></migaku-video>

For users who prefer a dark theme, pressing the Moon/Sun icon will toggle night mode on and off respectively.

### Sending Definitions to Cards

<!--Sending a Definition to a Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/definition-sent-to-field.mp4"></migaku-video>

In addition to searching, one of the most useful features of the Migaku Dictionary is the ability to send definitions directly to fields on your Anki cards.

<!--Selecting Fields and Send to Different Card Types-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/selecting-and-sending-to-fields.mp4"></migaku-video>

You first will need to select all of the fields that Migaku Dictionary should attempt to send definitions to. You can do this using the Field Selector drop-down menu, it can be found in a dictionary's [Dictionary Header](#dictionary-headers).  
_\* You can select as many or as few fields as you like. This way, if you use various <internal-link to="/tools-guides/anki/guide#note-types">Note-Types</internal-link>, they can all be selected at one time. This only has to be done once as the add-on will remember which fields are selected._

Once fields have been selected, pressing the "Send to Field" button will send the definition to your currently open cards in each of these situations:

<!--Sending a Definition to a Field When Adding-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/definition-sent-to-field-adding.mp4"></migaku-video>

- When creating a new card.

<!--Sending a Definition to a Field When Editing-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/definition-sent-to-field-editing.mp4"></migaku-video>

- When editing a card.

<!--Sending a Definition to a Field When Reviewing-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/definition-sent-to-field-reviewing.mp4"></migaku-video>

- When reviewing a card.

#### Export Target

The “Send to Field” button can only send definitions to one card at a time. If more than one card is open in any of the following windows:

![Add Card Window](/content-images/tools-guides/migaku-dictionary/add-card-window-picture.png)

- The Add Card Window

![Edit Card Window](/content-images/tools-guides/migaku-dictionary/edit-card-window-picture.png)

- The Edit Card Window

![Card Browser Window](/content-images/tools-guides/migaku-dictionary/card-browser-window-picture.png)

- The Card Browser Window

![Review Window](/content-images/tools-guides/migaku-dictionary/review-window-picture.png)

- The Review Window

Then Migaku Dictionary will send the definition to the card in the most recently used window.

<!--Changing Export Targets-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/changing-the-export-target.mp4"></migaku-video>

By turning on the [Show Export Target](#export-target) option in the settings menu, you can see which window the definition will be sent to at any given time.
_\* If no card is currently open, the send to field button will not function. You must open one of the windows mentioned above to a card before pressing the “Send to Field” button._

#### Sending a Portion of a Definition

<!--Sending a Full Definition-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/sending-full-definition.mp4"></migaku-video>

If nothing is highlighted, the entire definition will be sent.

<!--Sending a Partial Definition-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/sending-partial-definition.mp4"></migaku-video>

If a portion of the definition is highlighted, only that part along with the definition header will be sent.

#### Output Modes(

![Output Modes](/content-images/tools-guides/migaku-dictionary/output-modes-picture.png)

When sending a definition to a card there are three different output modes to choose from:

- Add
- Overwrite
- If Empty.

Each mode controls what will happen if a field already has text in it.

<!--Output Mode Add-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/output-modes-adding.mp4"></migaku-video>

Add: Adds the definition beneath what’s already in the target field.

<!--Output Mode Overwrite-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/output-modes-overwriting.mp4"></migaku-video>

Overwrite: Erases whatever is currently in the target field and replaces it with the definition.

<!--Output Mode If Empty-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/output-modes-if-empty.mp4"></migaku-video>

If Empty: Only sends the definition if the target field is empty.

_\* If the field which a definition will be sent to is empty, then all 3 modes will function identically._

#### Duplicate Headers

Some dictionaries have headers containing the word being defined within the definitions themselves. If this is the case, entries sent from these dictionaries will have 2 headers added when sent to a field.

<!--Duplicate Header-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/with-and-without-duplicate-header.mp4"></migaku-video>

In order to prevent this behavior, check the Duplicate Header checkbox. This will cause Migaku Dictionary to only export the definition, avoiding the issue of duplicate definition headers.

#### Google Images

The add-on also allows you to search Google Images in the same way you would search any other dictionary within the Add-on.

<!--Sending a Google Image to a Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/sending-google-image.mp4"></migaku-video>

To select an image, simply click it. To deselect, simply click again. After the images are selected, they can be sent to a field in the same manner as any other dictionary entry.

_\* You can select the maximum size an image can be before it is resized, and which Google Images Region to search in the [Dictionary Settings Window](#settings)._

#### Forvo Dictionary

Migaku Dictionary allows you to search Forvo for audio recordings and send those recordings to a card in the same manner as the definitions of any other dictionary.

<!--Sending Forvo Audio to a Field-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/sending-forvo-audio.mp4"></migaku-video>

Simply click the check box next to an audio file to select it, and press the send button to send it to your selected field.

_\* The language which Forvo searches for recordings in can be set in the [Dictionary Settings Window](#settings)._

## Card Exporter

<!--Creating a Card in the Card Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/sending-forvo-audio.mp4"></migaku-video>

The Card Exporter is a quality of life feature that allows for much faster and intuitive card creating within Anki.

### Export Templates

_\* [Click here](#creating-export-templates) to learn about creating Export Templates._

In order to use the Card Exporter, you need to create at least one Export Template. An Export Template serves as a blueprint which instructs the Card Exporter which note-type to use and which fields to send a given type of content _(sentence, term, definitions, images, audio files)_ to.

_\* You can find out how Export Templates can be created, edited, or deleted in the [Settings section](#settings)._

### Opening the Exporter

The Exporter can opened with the global hotkey “Ctrl+C+Alt” ( “⌘+C+Ctrl” on Mac) as long as the main dictionary window is also open.

<!--Opening Card Exporter With a Sentence-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/open-card-exporter-with-sentence.mp4"></migaku-video>

If any text is selected when the hotkey is pressed, the selected text will be sent to the sentence area of the Exporter window. If no text is currently selected, the contents of the clipboard will be sent instead.

<!--Opening Card Exporter With the Anki Button-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/open-card-exporter-with-sentence.mp4"></migaku-video>

The Exporter can also be opened by pressing the “Send to Exporter” (Anki) icon in a [Definition Header](#dictionary-headers) inside Migaku Dictionary. This will send that entry’s definition to the card exporter.

Once the exporter is open you can:

<!--Selecting Export Template-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/selecting-export-template.mp4"></migaku-video>

- Select the Export Template you want.

<!--Selecting Export Deck-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/selecting-export-deck.mp4"></migaku-video>

- Select which deck to create cards in.

<!--Overwriting Export Sentence-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/overwriting-export-sentence.mp4"></migaku-video>

- Use the hotkey “Ctrl+C+Alt” ( “⌘+C+Ctrl” on Mac) to [send a new sentence to the Card Exporter]. _\* Overwriting its previous contents._
- Use the hotkey "Ctrl+Shift+V" ( “⌘+Shift+V” on Mac) to [paste an image](#adding-images) or [audio file](#adding-audio) currently copied to your clipboard into the Card Exporter.
- Use the hotkey "Ctrl+Enter" ( “⌘+Enter” on Mac) to [add the current card to your Anki Collection](#adding-audio).
- [Send more definitions to a card](#Adding-Definitions) using the “Send to Exporter” (Anki) icons within entry's [Definition Headers](#definition-headers).

<!--Clear the Card Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/clear-card-exporter.mp4"></migaku-video>

### Adding Definitions Manually

You can add definitions to the definition area of the Card Exporter by pressing the “Send to Exporter” (Anki) button in an entry's [Definition Header](#definition-headers). Which field the definition will be sent to when the card is created is determined by the [Export Template](#export-templates) being used.
_- The Field Selector's selected fields do not apply to the Card Exporter, but only apply when sending a definition directly to a field._
_- The duplicate header checkbox is honored by the Card Exporter however._

<!--Sending More Definitions to the Card Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/sending-more-definitions-to-exporter.mp4"></migaku-video>

When the “Send to Exporter” (Anki) button is clicked that entry's definition will be sent to the Card Exporter's definition section, which shows you which definitions will be added to the current card.

- If none of the definition is highlighted, the whole entry will be sent.
- If only a part is highlighted, only that part will be sent along with its header.

<!--Sending Google Image and Forvo to the Card Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/sending-google-and-forvo-to-exporter.mp4"></migaku-video>

Images from Google Images and recordings from Forvo can also be sent to the Card Exporter.

When multiple definitions are sent, they will be displayed in the order they are sent to the Card Exporter.

<!--Remove Definition From Card Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/card-exporter-remove-definition.mp4"></migaku-video>

To remove a definition press the “X” button.

### Adding Images Manually

<!--Pasting Image into Card Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/pasting-card-exporter-image.mp4"></migaku-video>

By pressing the global hotkey ( “Ctrl+Shift+V” on PC or “⌘+Shift+V” ) you can send an image that is currently copied to your computer's clipboard to the image section of the Card Exporter.

The maximum height and width can be set in [Dictionary Settings Window](#settings).
_\* Unlike with the Google Images dictionary, you can only add a single image to a card with this feature. Adding a second image will overwrite any currently added images._

### Adding Audio Manually

<!--Pasting Audio into Card Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/pasting-card-exporter-audio.mp4"></migaku-video>

If an MP3 file is on your computer and you wish to include it on a card and you wish to add it to the Card Exporter, then:

1. First, select the mp3 you want and copy it to the clipboard.
1. Press the global hotkey ( “Ctrl+Shift+V” on PC or “⌘+Shift+V” ).

_\* Unlike with the Forvo dictionary, you can only add a single audio file to a card with this feature. Adding a second audio file will overwrite any currently added files._

_A user can easily leverage this function using a program such as ShareX, as it can be configured to record an audio file, save it as an mp3 and copy that file directly to your clipboard with a single hotkey. Combining this with the Card Exporter allows you to make audio cards very quickly._

### Adding Definitions Automatically

<!--Setting the dictionary for auto-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/adding-definitions-automatically.mp4"></migaku-video>

You also have the option to automatically add definitions to your cards, as soon as they get created. To do this:

1. Check the box `Automatically Add Definitions`
1. Now open the options by clicking `Automatic Definition Settings`
1. Open the dropdown menu on the top right and select the dictionary you want to use from the list.
1. In the field below you can also choose the maximum amount of definition that are added.
   - This can be repeated for up to three dictionaries.
1. Press `Save Settings'

### Adding Images Automatically

<!--Setting google for auto-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/adding-images-automatically.mp4"></migaku-video>

You also have the option to automatically add pictures to your cards, as soon as they get created. To do this:

1. Check the box `Automatically Add Definitions`
1. Now open the options by clicking `Automatic Definition Settings`
1. Open one of the dropdown menus on the right and select `Google Images` from the list.
1. In the field below you can also choose the maximum number of pictures that are added.
   - The function starts adding the pictures in the order they appear in Google.
1. Press `Save Settings'

### Adding Audio Automatically

<!--Setting forvo for auto-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/adding-audio-automatically.mp4"></migaku-video>

You also have the option to automatically add audio to your cards, as soon as they get created. To do this:

1. Check the box `Automatically Add Definitions`
1. Now open the options by clicking `Automatic Definition Settings`
1. Open one of the dropdown menus on the right and select `Forvo` from the list.
1. In the field below you can also choose the maximum number of audio files that are added.
   - The function starts adding the audio in the order they appear in Forvo.
1. Press `Save Settings`

### Adding Cards

<!--Exporting Card With Exporter-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/exporting-with-exporter.mp4"></migaku-video>

Once all of the information you want on a given card is filled in, pressing the add button or using the hotkey, “Ctrl+Enter” on PC or “⌘+Enter” on Mac, will create the card and add it to your collection.

### Adding Cards Automatically

![Add Extension Cards Automatically](/content-images/tools-guides/migaku-dictionary/add-extension-cards-automatically.png)

By checking the box `Add Extension Cards Automatically` the card gets added without you having to press `Add`. This feature is most useful in combination with [Adding Definitions Automatically](#adding-definitions-automatically), [Adding Pictures Automatically](#adding-pictures-automatically) and [Adding Audio Automatically](#adding-audio-automatically).

### Text Styling in The Exporter

While using the exporter you can use shortcuts to add styling to a text.

`ctrl + b` to **bolden** the text
`ctrl + u` to <u>underline</u> the text
`ctrl + i` to turn the text into _italics_

Using those shortcuts you can add styling to the `Sentence`, `Secondary` and `User Notes` fields.

## Mass Exporting Definitions

You can add definitions to multiple cards at once with the Mass Definition Export feature.

![Mass Exporting Options Window](/content-images/tools-guides/migaku-dictionary/mass-exporting-options-window.png)

For each selected card, the add-on will look up the word in the `Input Field` and export its definitions to the `Output Field`.

<!--Mass Exporting Process-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/mass-exporting-process.mp4"></migaku-video>

To use this feature:

1. Select the cards you want to add definitions to in Anki's Card Browser.
1. Open the `Edit` menu in the top-left of the Card Browser window and click `Export Definitions`.
1. Set the `Input Field` as the field where the word you want to export a definition for is contained.
   _\* For this to work, the input field must contain a single, unconjugated word. If the field contains multiple words, or a conjugated term, the add-on will fail to find a definition. Deconjugation mode is now supported when Mass Exporting._
1. Select the `Output Field` where the definition will be added.
1. Select the up to 3 dictionaries where you want to add definitions from.
1. Select an `Output Mode`
   _-Add: Adds the definition(s) beneath what’s already in the `Output Field`._
   _-Overwrite: Erases whatever is currently in the `Output Field` and replaces it with the definition(s)._
   _-If Empty: Only add the definition(s) if the `Output Field"`is empty._
1. Select the max number of definitions you want to export per dictionary (the `Max Per Dict` option).
1. Press the `Execute` button to add the definitions to your cards.

Add: Adds the definition beneath what’s already in the target field.

<!--Output Mode Overwrite-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/output-modes-overwriting.mp4"></migaku-video>

Overwrite: Erases whatever is currently in the target field and replaces it with the definition.

<!--Output Mode If Empty-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/output-modes-if-empty.mp4"></migaku-video>

If Empty: Only sends the definition if the target field is empty.

## Settings

You can open the add-on settings either by:

<!--Opening Dictionary Setting From Top Menu-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/open-settings-top-menu.mp4"></migaku-video>

- Clicking on “Migaku” in the Anki Top Menu Bar in the main Anki window.
- Then clicking on “Dictionary Settings”

Or by:

<!--Opening Dictionary Setting From Dictionary-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/open-settings-dictionary.mp4"></migaku-video>

- Clicking on the gear icon in the main dictionary window.

_\* Any changes made will not go into effect until the main dictionary window is closed and reopened._

### Restoring Defaults

<!--Restoring Dictionary Defaults-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/restoring-dictionary-defaults.mp4"></migaku-video>

To restore the Migaku Dictionary to its default settings, click on the “Restore Defaults” button in the bottom left corner of the Settings window.

### Creating Dictionary Groups

To learn more about how Dictionary Groups work, please see the [Dictionary Groups section](#dictionary-groups)

#### Adding a New Group

<!--Adding a Dictionary Group-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/adding-a-dictionary-group.mp4"></migaku-video>

To add a new dictionary group:

1.  Press the “Add Dictionary Group” button in the Settings window.
1.  Choose a unique name.
1.  Select which dictionaries to include in that group.
    _-You can include a dictionary by pressing the checkmark box next to the dictionary._
    _-A number will appear which indicates the order dictionary will appear in while using the group._
    _-All dictionaries can be selected with “Select All'' and deselected with “Remove All.”_
1.  You can also choose which font you want the dictionaries to be displayed in.
    _-You can either select a font installed on your system or use a font from a file. When you use a font from a file it will be installed into `[Migaku Dictionary Parent Folder]/user_files/fonts`._
1.  Select the dictionaries that you want as a part of the group in the order you want them to appear in the search results.
    - Notice that the number that appear next to the dictionary once selected. This signifies the order that the dictionary results will appear.
1.  Press the "Save" button
1.  Close the Main Dictionary Window if it is open and reopen it for the changes to take effect.

#### Editing and Removing a Group

<!--Editing a Dictionary Group-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/editing-a-dictionary-group.mp4"></migaku-video>

Your can edit a Dictionary Group by:

1. Pressing the “Edit” button next to the Dictionary Group you would like to edit.
1. Make the desired changes.
1. Click the "Save" button.
   _\* You cannot rename a Dictionary Group once it has been created it, you will have to remove it and create a new one with your desired name._

<!--Removing a Dictionary Group-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/removing-a-dictionary-group.mp4"></migaku-video>

Your can remove a Dictionary Group by:

1. Clicking the "X" button next to the Dictionary Group you would like to remove.
1. Confirming the deletion in the prompt that appears.

### Creating Export Templates

To learn more about how Export Templates work, please see the [Export Templates section](#export-templates)

#### Exporter Fields

**Notetype:** Here you choose the note type you want to use for the export. You can use one of the premade Migaku note types, or use your own.

**Sentence Field:** Here you can choose where the Migaku Browser Extension will send the sentence to. Be it from a video or a sentence in a book/article. You can learn more about dual subtitles in the<internal-link to="/tools-guides/migaku-browser-extension/manual#dual-subtitle-tracks">Migaku Browser Extension Manual</internal-link>.

**Secondary Field:** In the Migaku Browser Extension, you can set two subtitle lines. The first line in your Target Language and the second line in your Native Language. When you export a card, the secondary field is the field where the secondary subtitle line is sent.

**Word Field:** This is the field where the new word, in the sentence you are exporting is sent.

**User Notes:** This field can be used in any way you want. You can add definitions here, but also add notes about the material you are using or other information you deem important.

**Image Field:** As the name suggests, this is the field where the screenshot created by the Migaku Browser Extension, or an image pasted with `Ctrl+Shift+V` is sent.

**Audio Field:** As the name suggests, this is the field where the audio recorded by the Migaku Browser Extension, or an audio file pasted with `Ctrl+Shift+V` is sent.

**Unspecific Dictionary Field:** This is the field where the definitions from the Migaku Dictionary Add-on are sent. Either through the `Automatically Add Definitions` function, or by clicking the Anki button in the Migaku Dictionary window itself.

#### Adding a New Template

<!--Adding an Export Template-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/adding-an-export-template.mp4"></migaku-video>

To create a new template:

1. Press the "Add Export Template” button in the Settings window.

1. Choose a unique name.

1. Select which note type to use.

1. Choose which field the "Sentence" section of the Card Exporter will map to by setting the "Sentence Field".

1. Choose which field the "Secondary" section of the Card Exporter will map to by setting the "Secondary Field".

   _- This field exports the secondary subtitle track, if available. If your main track is Japanese and the secondary is English, then this field will contain the English track._

1. Choose which field the "Word" section of the Card Exporter will map to by setting the "Word Field".

1. Choose which field [an image added by hotkey](#adding-images) to the Card Exporter will map to by setting the "Image Field".  
   _- This does not apply to an Image from the Google Images Dictionary, those images are handled as if they were definitions._
1. Choose which field [an audio file (mp3) added by hotkey](#adding-audio) to the Card Exporter will map to by setting the "Audio Field".  
   _- This does not apply to an Image from the Google Images Dictionary, those images are handled as if they were definitions._
1. Choose which field definitions from dictionaries that aren't specified in particular, are added to by setting the "Unspecified Dictionaries Field".  
   _- All dictionaries definitions from that haven't been specifically set to go to a different field in the next step will all be added to this field._

   - **_If you want definitions from every dictionary to go to the same field then you only need to set this setting, and can skip the next step._**

1. If you want a specific dictionary to be sent to a specific field:
   - Select the dictionary and the desired destination field and then press the “Add” button. _You can remove an entry in the Dictionary - Destination Field table by pressing the "X" button._
   - _\* If the same field is selected for multiple dictionaries, then definitions from those dictionaries will be added to the field in the order those dictionaries were added to the list._
1. Change the "Entry Separator" value if desired:  
   -_The “Entry Separator” is what gets added between definitions when multiple definitions are sent to a single field. The default is two line breaks ("\<br\>\<br\>")._
1. Press the "Save" button.

1. Close the Main Dictionary Window if it is open and reopen it for the changes to take effect.

#### Editing and Removing a Template

<!--Editing an Export Template-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/editing-an-export-template.mp4"></migaku-video>

Your can edit an Export Template by:

1. Pressing the “Edit” button next to the Export Template you would like to edit.
1. Make the desired changes.
1. Click the "Save" button.
   _\* You cannot rename an Export Template once it has been created it, you will have to remove it and create a new one with your desired name._

<!--Removing an Export Template-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/removing-an-export-template.mp4"></migaku-video>

Your can remove an Export Template by:

1. Clicking the "X" button next to the Export Template you would like to remove.
1. Confirming the deletion in the prompt that appears.

### Options

![Options Section](/content-images/tools-guides/migaku-dictionary/options-section.png)

#### Open on Startup

Check this box if you want the main dictionary window to automatically open when you start Anki.

#### Highlight Example Sentences

<!--Highlighted Sentence-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/highlighted-sentence.mp4"></migaku-video>

This option will highlight example sentences in the definition. It currently only works on monolingual Japanese dictionaries because it depends on example sentences being surrounded by "「...」"brackets

#### Highlight Searched Term

<!--Highlighted Term-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/highlighted-term.mp4"></migaku-video>

The query will be highlighted in a definition

#### Show Export Target

<!--Export Target Shown-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/export-target-shown.mp4"></migaku-video>

When this is checked the window that the “Send to Field” button will send to is displayed on the right side of the settings icon.

There are four possible targets:

- The Card Browser
- The Add Card Window
- The Edit Card Window
- The Review Window.

For more information see the [Export Target section](#export-target).

#### Dictionary Tooltips

<!--Dictionary Tooltips-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/export-target-shown.mp4"></migaku-video>

This will add on-hover tooltips to the icons and buttons in the add-on.  
_\* You can disable this option if you're already familiar with Migaku Dictionary._

#### Global Hotkeys

When selected, this will enable the use of the Migaku Dictionary’s global hotkeys on other applications on your computer outside of Anki.

#### Open on Global Search

When selected, if the main dictionary windows is closed, and the global search hotkey is pressed (“Ctrl+C+Space” /“⌘+C+B” on Mac), the main window will open and whatever is highlighted will be the search query. If disabled global searches will only work if the dictionary window is already opened.

#### Max Total Search Results

The maximum number of entries that will be displayed across all dictionaries.

#### Max Dictionary Search Results

This is the maximum number of results for any particular dictionary. Once this number is reached, the add-on will stop searching the current dictionary and move on to the next dictionary

#### Add Cards with Japanese Readings

<!--Add Cards with Japanese Readings-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/add-with-readings.mp4"></migaku-video>

If <internal-link to="/tools-guides/migaku-japanese/quickstart">Migaku Japanese</internal-link> is installed and this option is selected, readings and pitch accents will be generated for the fields in a card added through the [Card Exporter](#card-exporter).

_\* Whether the <internal-link to="/tools-guides/migaku-japanese/quickstart#the-migaku-syntax">Migaku Japanese Syntax</internal-link> is generated or not is based on your Migaku Japanese settings. When the field of the card being added has been registered as an <internal-link to="/tools-guides/migaku-japanese/manual#active-fields-tab">"Active Field"</internal-link> in Migaku Japanese the Migaku Japanese syntax will automatically be generated for that field when a card is added with the Card Exporter. **Audio and pitch graphs will not be generated, however.**._

#### Japanese Readings on Edit

<!--Japanese Readings on Edit-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/edit-with-readings.mp4"></migaku-video>

If <internal-link to="/tools-guides/migaku-japanese/quickstart">Migaku Japanese</internal-link> is installed and this option is selected, readings and pitch accents will be generated for the words in dictionary definitions when using the Send to Field Button. What is generated is based on the settings in Migaku Japanese, however, audio and pitch graphs will not be generated for definitions.

_\* Whether the <internal-link to="/tools-guides/migaku-japanese/quickstart#the-migaku-syntax">Migaku Japanese Syntax</internal-link> is generated or not is based on your Migaku Japanese settings. When the field of the card being added has been registered as an <internal-link to="/tools-guides/migaku-japanese/manual#active-fields-tab">"Active Field"</internal-link> in Migaku Japanese the Migaku Japanese syntax will automatically be generated for that field when a definition is sent to that field using the ["Send to Field"](#sending-definitions-to-cards) button in a [Definition Header](#definition-headers). **Audio and pitch graphs will not be generated, however.**._

#### Google Images Search Region

Select which region you would like Google Images to search.

#### Maximum Image Width

The maximum width of an image sent to a card. If an image's width exceeds this number, the image is resized proportionally so that it matches this value. This applies to both the built-in Google Images dictionary and images pasted into the Card Exporter.

#### Maximum Image Height

The maximum height of an image sent to a card. If an image's height exceeds this number, the image will be resized proportionally so that it matches this value. This applies to both the built-in Google Images dictionary and images pasted into the Card Exporter.

#### Surround Term

<!--Surround Term-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/surround-term.mp4"></migaku-video>

##### Surround Term (Front)

The text if any that appears directly to the left of the [term and alternate term](#supported-file-formats), which itself is found on the left side of [Definition Headers](#definition-headers).

##### Surround Term (Back)

The text if any that appears directly to the right of the [term and alternate term](#supported-file-formats), which itself is found on on the left side of [Definition Headers](#definition-headers).

#### Forvo Language

The language the built-in Forvo dictionary will search for audio in.

#### Always on Top

<!--Always on Top-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/always-on-top.mp4"></migaku-video>

Checking of the "Always on Top" checkbox, will enable Always On Top Mode, which will keep the [Migaku Dictionary Main Window](#main-dictionary-window) and [Card Exporter Window](#card-exporter) on top of all other windows running on your system.

<!--Always on Top Mode Example-->

<migaku-video controls src="/content-images/tools-guides/migaku-dictionary/always-on-top-example.mp4"></migaku-video>

### Dictionaries Tab

![Dictionaries Tab](/content-images/tools-guides/migaku-dictionary/dictionaries-tab.png)

In the Dictionaries Tab you can manage the dictionaries for your different languages, as well as their frequency list and conjugation data. You have the option to either use our Wizard to install dictionaries from our server, or you can import dictionaries from a file. The same options are available for the frequency and conjugation data. You can find an exact explanation of the process in the [Installing Dictionaries](#installing-dictionaries) section.

#### Add a Language

This option allows you to add your own language to the list and choose a name instead of the predetermined name from our server.

#### Install Languages in Wizard

Install languages from our server. This includes frequency as well as conjugation data for the languages where such data is available.

#### Language Options

Allows you to install dictionaries, frequency and conjugation data either in the Wizard or from a file.

#### Dictionary Options

Here you can remove singular dictionaries from a language or edit the definition header of a dictionary.

### New Settings Options

Find out more about the Settings Window [here](#settings).
