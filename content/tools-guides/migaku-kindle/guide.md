---
title: Migaku Kindle User's Guide
shortTitle: User's Guide
description: Migaku Kindle is an add-on that allows importing Kindle dictionary lookups into your Anki collection.
headerImage: /content-images/tools-guides/migaku-kindle/kindle-header.png
position: 1
---

# Migaku Kindle User's Guide

## Table of Contents

- [Intro](#intro)
- [Installation](#installation)
  - [Ensuring You Have the Correct Anki Version](#ensuring-you-have-the-correct-anki-version)
  - [Downloading the Add-on](#downloading-the-add-on)
  - [Installing the Add-on](#installing-the-add-on)
- [Updating](#updating)
- [Uninstalling](#uninstalling)
- [Using your Kindle](#using-your-kindle)
  - [Installing dictionaries](#installing-dictionaries)
  - [Setting default dictionaries](#setting-default-dictionaries)
  - [Enabling the Vocabulary Builder](#enabling-the-vocabulary-builder)
  - [Looking up words](#looking-up-words)
- [Using the Add-on](#using-the-add-on)
  - [Opening the Lookup browser](#opening-the-lookup-browser)
  - [Filtering Lookups](#filtering-lookups)
  - [Sorting Lookups](#sorting-lookups)
  - [Select a target deck](#select-a-target-deck)
  - [Select a note type](#select-a-note-type)
  - [Importing Lookups](#importing-lookups)
  - [Hiding Lookups](#hiding-lookups)
  - [Lookup Actions](#lookup-actions)

## Intro

Amazon Kindle E-readers save all your dictionary lookups. Migaku Kindle allows easy importing of these lookups into your Anki collection along with the sentence they appear in. If you have <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary</internal-link> installed you can import lookups directly with dictionary entries.

This works with all following Kindle Models: Kindle (At least 3rd generation), Kindle Paperwhite, Kindle Voyage and Kindle Oasis. Also note that sideloaded books must be in the azw3 format to work with the Vocabulary Builder.

## Installation

If you have not yet installed Anki and need help then please <internal-link to="/tools-guides/anki/guide#installation">click here</internal-link> to find out how to install an Anki version compatible with the Migaku Toolset.

**If you are new to Anki, we suggest you to read our <internal-link to="/tools-guides/anki/guide">Anki Quick Start Guide</internal-link> which covers all of the fundamentals of Anki from the perspective of a language learner.**

### Ensuring You Have the Correct Anki Version

The current recommended version of Anki for those using the Migaku Add-on series is <internal-link to="/tools-guides/anki/guide#installation">Anki 2.1.35</internal-link>. This add-on will not support older versions of Anki.

If you have not yet downloaded Anki, please <internal-link to="/tools-guides/anki/guide#installation">visit our Anki download page</internal-link> to ensure you download the correct version of Anki for your operating system.

<!--Checking Your Anki Version-->

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/checking-anki-version.mp4"></migaku-video>

You can check your Anki version by:

1. Navigating to `Help->About...` from Anki's top menu bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

### Downloading the Add-on

Migaku Kindle is currently an exclusive perk for Migaku Patreon supporters. If you're interested in supporting Migaku on Patreon and gaining access, please <a href="https://www.patreon.com/Migaku" target="_blank">visit our Patreon page</a>!

You can download Migaku Kindle by visiting the Patreon Posts below:

<a href="https://www.patreon.com/posts/47374043" target="_blank">Get Migaku Kindle for Anki 2.1.35</a> _\* This is the latest stable release._

The file you download will have the file extension `.ankiaddon`.

### Installing the Add-on

Once you have obtained the Migaku Kindle `.ankiaddon` file by following the instructions above then it's time to install Migaku Kindle:

<!--Double Click to Install Migaku Kindle-->

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/double-click-install.mp4"></migaku-video>

To install Migaku Kindle's `.ankiaddon` file:

1. Double click the file to open an installation prompt in Anki.
1. Confirm the prompt to install the add-on.
1. Restart Anki.

## Updating

<!--Migaku Kindle Update-->

In order to update Migaku Kindle simply follow the [installation instructions](#installing-the-add-on) again. If you have an existing installation of Migaku Kindle the add-on will automatically be updated when installing an update.

## Uninstalling

<!--Migaku Kindle Uninstall-->

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/uninstall.mp4"></migaku-video>

To uninstall Migaku Kindle:

1. Navigate to `Tools->Add-ons` from Anki's top menu bar.
1. Select "Migaku Kindle".
1. Click "Delete"
1. Restart Anki.

## Using your Kindle

Make sure you have one of the following devices: Kindle (At least 3rd generation), Kindle Paperwhite, Kindle Voyage, Kindle Oasis. Pretty much every device produced after 2010 should be compatible.

### Installing dictionaries

Your Kindle already comes with a selection of about 45 free dictionaries for a few languages. To install these:

1. Go to the home screen of your Kindle.
1. Make sure that `ALL` books are displayed, not only `DOWNLOADED` books.
1. Open the `Dictionaries` folder in your book list.
1. Tap the dictionary you want to install and wait for the download to finish.

Dictionaries in the azw3 and mobi formats can be installed:

1. Connect your Kindle to your computer.
1. Navigate to the `documents/dictionaries/` folder on the device that appears on your computer.
1. Copy your dictionary files to this folder.

For Japanese you can find well converted JMdict and JMnedict dictionaries <a href="https://github.com/jrfonseca/jmdict-kindle" target="_blank">here</a>. You can also use <a href="https://github.com/olety/epwing2kindle" target="_blank">this</a> toolset to convert select epwing or yomichan dictionaries to the Kindle format. Note that these tools are rather difficult to use, but you may be able to find pre-converted dictionary files somewhere.

You are also able to buy dictionaries on the Kindle store.

### Setting default dictionaries

If you have multiple dictionaries installed for one languange you can set the default dictionary that is used for it:

1. In the menu bar tap the `settings` button with the gear icon.
1. Tap the `All Settings` button with the gear icon.
1. Tap the `Language & Dictionaries` line.
1. Tap the `Dictionaries` line.
1. Tap the line of the language you want to set the default dictionary for.
1. Select the dictionary you want to set as default.

### Enabling the Vocabulary Builder

You need to enable the Vocabulary Builder on your Kindle so that word lookups are saved and later available to import into your Anki collection. To do so:

1. In the menu bar tap the `settings` button with the gear icon.
1. Tap the `All Settings` button with the gear icon.
1. Tap the `Reading Options` line.
1. Set the switch for `Vocabulary Builder` to `On`.

### Looking up words

While reading a book simply long press a word to open the dictionary.

The word will be opened in your [default dictionary](#setting-default-dictionaries). In the bottom right corner you can open the word in other dictionaries you have installed.
You can also swipe left and right to switch between dictionary, Wikipedia and Google translate lookups.

If the book you are reading is from the Amazon store or a sideloaded book in the azw3 format your lookup along with the sentence it appeared in will then be available to import into your Anki collection.

## Using the Add-on

### Opening the Lookup browser

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/opening-browser.mp4"></migaku-video>

1. Connect your Kindle to your computer using an USB cable.
1. Navigate to `Migaku->Kindle` in Anki's top menu.
1. In the window that opens select the main directory of your Kindle device and press `Open`.

### Filtering Lookups

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/filtering.mp4"></migaku-video>
When you enter text into the top left line, the lookup list will show all entries that contain the text you entered. You can also filter lookups by book if you select the corresponding one in the dropdown list beside the text filter line.

### Sorting Lookups

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/sorting.mp4"></migaku-video>
By default lookups are sorted by the date they occurred (descending). You can click onto the column headers (eg. `Word`, `Sentence`, `Book`, `Date`) to sort by that column. Click again onto the header to toggle between ascending and descending order.

### Select a target deck

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/select-deck.mp4"></migaku-video>
Click on the button beside `Deck` on the bottom of the window to select the target deck into which lookups are imported.

### Select a note type

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/select-note-type.mp4"></migaku-video>
Click on the button beside `Note` on the bottom of the window to select the note type that is used for importing. You also have to set fields into which the Setence, Word and Book data is imported.

If you have the <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary Add-on</internal-link> installed you can select the field into which dictionary entires will be exported into along with up to 3 dictionaries that will be searched when importing lookups. You can also set the maximum amount of definitions that will be imported per dictionary.

### Importing Lookups

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/importing.mp4"></migaku-video>
Select the lookup you want to import. You can also select multiple lookups by pressing the `Ctrl` or `Shift` key when click onto the list. Then press the `Import` button in the bottom right of the window. Make sure you selected the correct target deck and note type with correct target fields.

Imported lookups will be hidden from the list.

If you have the <internal-link to="/tools-guides/migaku-japanese/quickstart">Migaku Japanese Add-on</internal-link> installed you can check the `Add Japanese Syntax` checkbox to automatically generate Japanese syntax for imported lookups.

### Hiding Lookups

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/hiding.mp4"></migaku-video>
Select the lookup you want to hide. You can also select multiple lookups by pressing the `Ctrl` or `Shift` key when clicking onto the list. Then press the `Del` key to hide the selected lookups. Note that no data on your Kindle is modified and Migaku Kindle internally keeps track of imported and hidden lookups.

### Lookup Actions

<migaku-video controls src="/content-images/tools-guides/migaku-kindle/lookup-actions.mp4"></migaku-video>
If you right click a lookup you can copy the word, sentence or book title to your clipboard.
If you have the <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary Add-on</internal-link> installed you can also search for the word in there. Alternatively you can also double click a lookup to do so.
