---
title: The Migaku Anki Guide for Immersion Learners
shortTitle: The Migaku Anki Guide for Immersion Learners
description: The aim of this guide is to help immersion learners get acquainted with the most important concepts of Spaced Repetition Study with Anki.
headerImage: /content-images/tools-guides/anki/anki-header.png
position: 1
---

# The Migaku Anki Guide for Immersion Learners

## Table of Contents

- [What is Anki](#what-is-anki)
  - [How Spaced Repetition Works](#how-spaced-repetition-works)
- [Why Use an SRS for Language Learning](#why-use-an-srs-for-language-learning)
- [Basic Concepts](#basic-concepts)
  - [Flashcards](#flashcards)
    - [Notes](#notes)
    - [Cards](#cards)
  - [Decks](#decks)
- [Basic Usage](#basic-usage)
  - [Installation](#installation)
  - [The Interface](#the-interface)
  - [Installing a Shared Deck](#installing-a-shared-deck)
  - [Creating Your Own Deck](#creating-your-own-deck)
  - [Optimizing Your Anki Settings](#optimizing-your-anki-settings)
    - [Creating an Option Group](#creating-an-option-group)
    - [Optimizing Option Group Settings](#optimizing-option-group-settings)
  - [Adding Your Own Cards](#adding-your-own-cards)
  - [Studying New Cards](#studying-new-cards)
    - [Best Practice for Studying New Cards](#best-practice-for-studying-new-cards)
    - [How to Study a New Card](#how-to-study-a-new-card)
    - [Important Concerns](#important-concerns)
  - [Reviewing Cards](#reviewing-cards)
    - [The Front (Question) Side](<#the-front-(question)-side-of-a-card>)
    - [The Back (Answer) Side](<#the-back-(answer)-side-of-a-card>)
    - [Leeches](#leeches)
    - [Suspending and Deleting Cards](#suspending-and-deleting-cards)
    - [What Happens If You Don't Finish Your Reviews](#what-happens-if-you-don't-finish-your-reviews)
  - [Editing Cards](#editing-cards)
  - [Viewing Your Anki Collection](#viewing-your-anki-collection)
    - [Viewing Suspended and Leeched Cards](#viewing-suspended-and-leeched-cards)
    - [Other Functionality](#other-functionality)
  - [Anki Stats Page](#anki-stats-page)
  - [Syncing](#syncing)
- [AnkiWeb](#ankiweb)
- [Add-ons](#add-ons)
- [Mobile Apps](#mobilde-apps)
- [Learn More](#learn-more)
- [Reference](#reference)
  - [Checking Your Anki Version](#checking-your-anki-version)
  - [Anki's Algorithm](#anki's-algorithm)
  - [Anki Card Format Recommendations](#anki-card-format-recommendations)
    - [The Note Types](#the-note-types)
    - [Important Note](#important-note)

## What is Anki

Anki is a Spaced Repetition System, an SRS. An SRS is based on the concept of <a href="https://en.wikipedia.org/wiki/Spaced_repetition" target="_blank">"Spaced Repetition"</a>. Spaced repetition is a learning method by which you review learned information at gradually increasing time intervals. The information itself is usually studied in small chunks and the presentation of the information is most often done through flashcards.

### How Spaced Repetition Works

![Spaced Repetition Visualized](/content-images/tools-guides/anki/spaced-repetition.png)

For example, let's think about a learner studying the meaning and pronunciation of a single new vocabulary word on a flashcard on a given day number 1. With spaced repetition, they may then test if they remember that information the next day on day 2. Then they may wait 3 days before testing themselves again on day 5, and then wait 8 or 9 days the next time, and so on. The basic concept is that the learner will test themselves at ever increasing intervals. This act of a learner testing if they can correctly recall the information being tested is called "reviewing".

_The way the word "review" is used by communities who use SRS's may be somewhat counter intuitive. The act of "reviewing" with an SRS is more akin to something like quizzing oneself and quite different than how the term "review" is used in traditional learning. Nevertheless, "reviewing" is the common term used and it is the term we will use in this guide._

If the information cannot be correctly recalled, then the flashcard is "Lapsed" or reset to either the status of a new word, or to a new interval that is a percentage of that flashcard's previous interval. The interval is the period of time before the learner reviews the information again. For example, a learner may learn a new word on a flashcard, then review it correctly the next day, then again 3 days after that, which would schedule that it to be reviewed in another 8 days. At this point the interval of that flashcard would be "8 days". If the next time they reviewed the flashcard after those 8 days passed, they could either not remember the information or couldn't remember it correctly then they would "Fail" that flashcard and it would "Lapse". That flashcard is then added to a "Failed Cards Pile", and will then need to be reviewed again. When it is reviewed again it will either gain the initial 1 day interval that a new flashcard gains when it is first studied, or it would retain a portion of its previous interval of 8 days _(for example it may retain 25% of the previous 8 day interval and gain a new interval of 2 days)_.

_\* By default Anki gives flashcards that have been Lapsed and are in the Failed Cards Pile an interval equal to that of a newly studied flashcard. We at Migaku, recommend to make a settings adjustment within Anki that will instead give Lapsed flashcards a new interval that is a percentage of their previous interval. We will tell you how to adjust this setting later in this guide._

Spaced repetition ensures that a learner is in control of (and aware of) the amount of information they've studied, and that they are retaining that information in the long-term. In this way a learner can ensure that they are not forgetting large amounts of previously learned information, while they continue to learn new things. A Spaced Repetition System like Anki handles the scheduling of the information you've studied so all that you need to do is show up and [review your flashcards](#reviewing-cards) each day.

## Why Use an SRS for Language Learning

![Picture of Anki Using Migaku Add-ons](/content-images/tools-guides/anki/anki-with-migaku-addons.png)

The main reason we recommend using an SRS when language learning is because it works! It works really well! A major problem that happens when learning a languages is that a learner is liable to forget what they've previously learned when moving on to new materials. This can be extremely frustrating. Using a Spaced Repetition System will greatly reduce the amount of learned words, phrases, grammar points, etc. that a student will forget. Especially when SRS study is combined with an immersion regiment. Studying with an SRS is particularly beneficial in the beginning, and middle of a learner's immersion learning journey, when learning new words in their target language is still very challenging - particularly so if a learner's target language greatly differs from the languages that they already know. However, as a learner reaches more advanced levels in their target language we recommend that they gradually deemphasize the role of the SRS in their studies.

## Basic Concepts

In order for a learner to feel comfortable about their SRS study with Anki we feel it is important that they understand the basic concepts of how Anki functions, both conceptually and as a piece of software.

### Flashcards in Anki

A flashcard within Anki has 2 main components: the "Note", which is the information of the flashcard itself, and the "Card(s)" which control the way that information is displayed to a learner. A flashcard only ever has a single Note associated with it, but that Note may have one or more Cards.

#### Notes

Here is a Note as seen in Anki's Card Editor:

![A Note Opened in Anki](/content-images/tools-guides/anki/note-opened-in-anki.png)

Whenever you are using an _Edit_ or _Add Card_ Window in Anki, what you are looking at is a Note.

A Note's main components are its "Cards" (covered in the next section), and its "Fields". Fields have 2 basic components:

- A name for that Field.
- The data of that Field, which can be:
  - Text
  - Images
  - Audio Files

![A Note with a Tag](/content-images/tools-guides/anki/a-note-with-a-tag.png)

A Note can also have "Tags" associated with it which will apply to all of its Cards.

Which Fields and Cards a Note has is decided by the "Note Type" of that Note. You can think of the Fields as belonging to the Note Type while the data in those fields belong to each Note created from that Note Type.

##### Note Types

![Several Different Note Types in the Anki Note Type Manager Window Side by Side](/content-images/tools-guides/anki/side-by-side-note-types.png)  
_Several Note Types, each with different fields._

Note types are basically a blueprint for building a Note, they have a list of Fields associated with them, and one or more [Card Types](#card-types).

When you [add a Card]("#adding-your-own-cards") in Anki, what is actually happening is that you are first filling out the contents of a Note, then when you press the "Add" button, Anki will create a Card for each [Card Type](#card-types) that is associated with this Note's Note Type. Whenever you [edit the contents of a "Card"](#editing-cards), you are actually editing the contents of its parent Note, and all Cards that share that parent Note will reflect any changes made.

There is actually a bit more information that is associated with Fields and Note Types, such as fonts used when editing, and which Field is shown and used for sorting in Anki's Card Browser. <a href="https://docs.ankiweb.net/#/editing?id=adding-a-note-type" target="_blank">Click here</a> if you're interested in learning more about Note Types, and customizing them or making your own.

![Note Types With Different Card Counts](/content-images/tools-guides/anki/note-type-card-counts.png)  
_You can see how many Cards of each Note Type you have in Anki's Note Type Manager Window._

#### Cards

![A Note With Two Associated Cards](/content-images/tools-guides/anki/note-with-2-cards.png)  
_A Note with 2 associated Cards viewed in Anki Card's Browser._

![Front Side With Sentence Field](/content-images/tools-guides/anki/front-side-with-sentence-field.png)  
_One of the Note's Cards shows its "Sentence" field on the Front (Question) Side of the Card, and its "Meaning" field on the Back (Answer) Side of the Card._

![Front Side With Meaning Field](/content-images/tools-guides/anki/front-side-with-meaning-field.png)  
_The other shows its "Meaning" field on the Front (Question) Side of the Card, and its "Sentence" field on the Back (Answer) Side of the Card._

As previously stated Cards display the data of a Card's parent Note, but the actual styling instructions are contained within that Card's [Card Type](#card-types).

Cards also contain information such as:

- The date of the next review.
- The current Card's interval _(the number of days from the previous review until the next scheduled review)_.
- A history of all reviews done with the Card.
- Whether the Card is ["Suspended"](#suspending-and-deleting-cards) or not.

The Cards associated with a particular Note are created automatically when that Note is added. The important thing to remember is that Notes are the information itself, while Cards are the medium by which you display and study that information.

##### Card Types

Card Types, also knows as "Card Templates" are a set of display instructions for the data of a particular Note Type. A Card Type is always associated with a single Note Type, but a single Note Type may have several different Card Types associated with it.

In an Anki Edit Window or the Add Card Window you can click the "Cards" button to actually view _(and potentially edit)_ the Card Types associated with that note. There is no need to do this however as we recommend using the Note Types and Card Types that we have built, which <internal-link to="/coming-soon">can be found here</internal-link>.

<!--Viewing a Note's Card Types-->

<migaku-video controls src="/content-images/tools-guides/anki/viewing-a-notes-card-types.mp4"></migaku-video>

Card Types are a rather advanced Anki concept, and further knowledge about the topic is not necessary to successfully learn a language through immersion with Migaku. If you would like to know more about creating or editing Card Types, please refer to <a href="https://docs.ankiweb.net/#/templates/intro" target="_blank">this section of the Anki Manual</a>
.

### Decks

Decks are Collections of Cards. If you are studying several areas of a language using Anki, you may wish to separate your Cards into separate Decks by theme.

<!--Kanji, Grammar Points, and Sentences Deck-->

<migaku-video controls src="/content-images/tools-guides/anki/different-cards-in-kanji-grammar-sentences-decks.mp4"></migaku-video>

For example, you may have a "Kanji" Deck, a "Grammar Points" Deck, and a "Sentences" Deck. Each containing a different type of Card.

We at Migaku, recommend that learners use Decks in this way. This is not only in order to better organize your Anki Collection itself, but because it more efficient, and therefore considerably quicker to [review Cards](#reviewing-cards) of a similar theme together. This is because your brain knows what sort of question to expect and as a result can usually respond considerably more quickly than if the question format varied from Card to Card during a review session.

## Basic Usage

Anki can be a bit overwhelming for new-comers, the Migaku team is well aware of this and is currently working on a permanent solution to this problem. In the meantime, please follow this basic usage guide which covers everything a language learner using Anki should need to know.

### Installation

In order to use Anki with the <internal-link to="/tools-guides">Migaku Add-on Series</internal-link> you must install Anki ver. 2.1.35.

- _The Migaku Team develops and maintains add-ons in 6 month development cycles. At the end of each development cycle, the Migaku Add-on Series is updated to the latest stable Anki version. The current development cycle version is Anki `2.1.35`._

If you already have Anki installed, please [check if it is the correct version](#checking-your-anki-version).

In order to install Anki 2.1.35, do the following:

1. Download Anki 2.1.35 Here: <a href="https://github.com/ankitects/anki/releases/download/2.1.35/anki-2.1.35-windows.exe" target="_blank">Windows</a> - <a href="https://github.com/ankitects/anki/releases/download/2.1.35/anki-2.1.35-mac.dmg" target="_blank">macOS</a> - <a href="https://github.com/ankitects/anki/releases/download/2.1.35/anki-2.1.35-linux-amd64.tar.bz2" target="_blank">Linux</a>
1. Double click the downloaded file, and follow the installation prompts.

### The Interface

Once you have installed Anki go ahead and open the program.

The first page you will see is Anki's Collection Overview Screen:

![Anki Main Screen New Profile](/content-images/tools-guides/anki/anki-main-screen-new-profile.png)

In order to begin studying we must either [install a Shared Deck](#installing-a-shared-deck) or [create your own Deck](#creating-your-own-deck).

### Installing a Shared Deck

If you would like to find a direct link to download the Decks recommended by Migaku in the recommended format, please click here to visit our <internal-link to="/coming-soon">Recommended Beginner Decks Downloads List</internal-link>.

If you can't find a recommended Deck for your target language in our recommendation list, then please <a href="https://ankiweb.net/shared/decks/" target="_blank">visit Anki's Shared Decks page</a>.

![Anki Shared Decks Page](/content-images/tools-guides/anki/anki-shared-decks-page.png)

It is recommended that you download a beginner Deck that includes both audio (and ideally a picture for each Card) and adheres to our [Anki Card Format Recommendations](#anki-card-format-recommendations).

**_We are currently in the process of producing official Migaku Starter Decks for all major languages which we will recommend learners to use. In the meantime, using a shared beginner Deck is the best course of action. Please visit our <internal-link to="/learning-guides">Learning Guide page</internal-link> to find out the role premade beginner Decks play in the immersion learning process._**

### Creating Your Own Deck

You can also create your own Deck(s) by clicking the "Create Deck" button on Anki's Collection Overview Screen, giving your new Deck a name and clicking "OK":

<!--Creating Your Own Deck-->

<migaku-video controls src="/content-images/tools-guides/anki/creating-your-own-deck.mp4"></migaku-video>

Once a Deck is created adding Cards to it is as simple as pressing the "Add" button on Anki's Main Window. It is recommended that the Note Types you use with your Deck adhere to our [Anki Card Format Recommendations](#anki-card-format-recommendations).

If you would like to create your own Note Type to use with your Deck please reference <a href="https://docs.ankiweb.net/#/templates/intro" target="_blank">this section of the Anki Manual</a> to find out how to do so.

However:

- If you are learning Japanese, we recommend that you check out the <internal-link to="/tools-guides/migaku-japanese/quickstart">Migaku Japanese Add-on Quick Start Guide</internal-link> and use the <internal-link to="/tools-guides/migaku-japanese/quickstart#the-migaku-japanese-note-type">Migaku Japanese Note Type</internal-link> as your main Note Type.
- If you are learning Chinese (Traditional or Simplified), or Cantonese, we recommend that you check out the <internal-link to="/coming-soon">Migaku Chinese Add-on Quick Start Guide</internal-link> and use the Migaku Note Type that pertains to your target language, as your main Note Type.
- If you are learning German, we recommend that you check out the <internal-link to="/coming-soon">Migaku German Add-on User's Guide</internal-link> and use the Migaku German Note Type as your main Note Type.
- If you are learning French, we recommend that you check out the <internal-link to="/coming-soon">Migaku French Add-on User's Guide</internal-link> and use the Migaku French Note Type as your main Note Type.
- If you are learning Spanish, we recommend that you check out the <internal-link to="/coming-soon">Migaku Spanish Add-on User's Guide</internal-link> and use the Migaku Spanish Note Type as your main Note Type.

### Optimizing Your Anki Settings

Once you have downloaded or created a Deck it is recommended that you change a few settings in Anki for more effective SRS study.

First, navigate to `Tools->Preferences` in Anki's Top Menu Bar, to open the Preferences Window:

<!--Opening the Preferences Window-->

<migaku-video controls src="/content-images/tools-guides/anki/opening-preferences-window.mp4"></migaku-video>

In the Preferences Window you will want to uncheck the "Show next review time above answer buttons". This is recommended because seeing the next time a Card will be due when [reviewing it](#reviewing-cards) can be distracting and give you more to think about than necessary, making your reviews slower. Spaced Repetition works, rest assured that the results will become clear in time.

Next you will want to change a couple settings in your Decks' Option Group.

To view the Deck Option's window click the icon gear icon to the right side of a Deck's name, then click "Options":

<!--Opening the Deck Options Window-->

<migaku-video controls src="/content-images/tools-guides/anki/opening-deck-options.mp4"></migaku-video>

#### Creating an Option Group

At the top of the Deck Option's Window, you will see the text "Options group" next to a drop-down menu. An "Option Group" is a set of option and settings that will apply to all Decks that are using that group. This can allow for fine tuning settings according to the types of Cards or content in each Deck. We recommend that you make a separate "Options Group" for your [Sentence Cards](#general-recommended-sentence-card-format), and [Vocabulary Cards](#general-recommended-vocabulary-card-format)_(, and [Kanji/Hanzi Cards](#general-recommended-kanji-and-hanzi-card-format) if applicable)_, etc.

<!--Creating an Options Group-->

<migaku-video controls src="/content-images/tools-guides/anki/creating-an-options-group.mp4"></migaku-video>

To create an Options Group:

1. Click the "Manage..." button to the right of the Options Group Drop-Down Menu.
1. Click the "Add" option.
1. Write an appropriate name for your options group, for example "Sentence Options" for your [Sentence Cards](#general-recommended-sentence-card-format) Decks.
1. Press "Ok".

Once you've created an Options Group for the appropriate type of Cards that the Deck contains, then it is time to adjust this Option Group's "New Interval on Lapse" setting.  
This is the setting that we mentioned in the [Spaced Repetition Visualized section of this guide](#spaced-repetition-visualized) and it controls the percentage of the previous interval that a failed Card will retain.

#### Optimizing Option Group Settings

<!--Setting the Max Review Count-->

<migaku-video controls src="/content-images/tools-guides/anki/setting-max-review-count.mp4"></migaku-video>

First and foremost, we recommend setting your "Maximum reviews/day" option in the "Reviews" tab of the Deck Options Window to `9999`. This will ensure that you will always be shown all possible reviews as they come due. By default this number is set to `200` which means that if you have more reviews than `200` it will only show `200` reviews as being due. This can lead to a "Review Backlog" developing. The concept of a "Review Backlog" is explained in the section about [studying new Cards]("studying-new-cards), and [reviewing Cards](#reviewing-cards).

<!--Adjust the New Interval on Lapse-->

<migaku-video controls src="/content-images/tools-guides/anki/adjusting-new-interval-on-lapse.mp4"></migaku-video>

To adjust the "New Interval on Lapse" setting:

1. Click the "Lapses" tab.
1. Type `20%` into the "New Interval" number input.
   - 20% is a conservative starting point for the "New Interval on Lapse" setting. If you find that previously failed Cards are either still quite easy and that you are nearly always passing them, then you may want to adjust the interval up by a further `5%`. On the contrary, if failed Cards are often repeatedly failed you may want to adjust it down by a further `5%`. Feel free to make adjustments to this modifier in increments of `2%-5%` but we recommend never going below about `10%` and never going above about `40%`.

We also highly recommend using the <internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation</internal-link> and <internal-link to="/tools-guides/migaku-flexible-grading/guide">Migaku Flexible Grading</internal-link> Add-ons. Together, they are a powerful combination that will help make SRS study a more sustainable and positive part of your life.

<internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation</internal-link> allows you to:

- Choose a Study Schedule _(For example: Only studying Mon-Fri, and taking the weekends off)_.
- Schedule vacations away from reviews.
- Optimize and smooth daily review counts _(greatly reduces variance in daily review count, so you have about the same number of reviews every day)_.
- Taking a "Sick Day" and rescheduling all reviews into the future.
- Catching up slowly on overdue reviews using the “Catch-Up” feature.

And much more! We highly recommend reading the <internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation Add-on's User's Guide</internal-link> to help you get started using it today.

Meanwhile <internal-link to="/tools-guides/migaku-flexible-grading/guide">Migaku Flexible Grading</internal-link>:

- Simplifies Anki's review grading options into a simple Pass/Fail system. _You can read more about why this is desirable in the [Reviewing Cards section](#reviewing-cards)._
- Adds the option of answering Cards on their [Front Side](<#the-front-(question)-side-of-a-card>) considerably speeding up answering well known Cards.

While not as essential as <internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation</internal-link>, <internal-link to="/tools-guides/migaku-flexible-grading/guide">Migaku Flexible Grading</internal-link> can measurably improve reviewing speeds. Please check out <internal-link to="/tools-guides/migaku-flexible-grading/guide">Migaku Flexible Grading's User's Guide</internal-link> to find out more.

### Adding Your Own Cards

<!--Browser Extension Card Creation-->

<migaku-video controls src="/content-images/tools-guides/anki/browser-extension-card-creation.mp4"></migaku-video>

We recommend that if you are creating your own Cards that you use the <internal-link to="/tools-guides/migaku-browser-extension/quickstart">Immerse with Migaku Browser Extension</internal-link> and <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary </internal-link>, as they allow you to make nearly instant, high quality Cards with audio and a screenshot from Netflix, YouTube, your local video files, and your favorite websites.

<!--Migaku MPV Card Creation-->

<migaku-video controls src="/content-images/tools-guides/anki/migaku-mpv-card-creation.mp4"></migaku-video>

_\* If you plan to also heavily use your own local video files to make Cards then we recommend also installing <internal-link to="/tools-guides/migaku-mpv/guide">Migaku MPV</internal-link>. It has support for every video format, whereas the Immerse with Migaku Browser Extension is limited to video formats supported by the internet browser it's installed on._

If you do not have access to those projects, then we recommend using the 100% free publicly released <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary Add-on</internal-link>
to create Cards.

If you are interested in making cards without using Migaku Dictionary, please <a href="https://docs.ankiweb.net/#/editing?id=addingediting" target="_blank">see the section about adding Cards in Anki's Manual</a>.

### Studying New Cards

In order to make use of Anki to help you remember the meanings, usage, and pronunciation of new words, phrases, and grammar in your target language, you must first study a new Card.
_You can find out more about our recommendations about studying new Cards in detail in our article about <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link>._

#### Best Practice for Studying New Cards

We at Migaku believe that it is best practice to study New Cards in isolation from your other [reviews](#reviewing-cards). Which means that you should study new cards either before or after you [do your reviews](#reviewing-cards).

Feel free to decide by personal preference whether you prefer studying new Cards before or after your reviews. There are, however, a couple of arguments in favor of studying new Cards after you've finished reviewing your other Cards.  
Studying new Cards after you've finished your reviews:

- Ensures that you're completing your reviews before studying new Cards that will only add to future reviews.
- Reduces the chances of you seeing a word in a new Card that will give away the answer to a Card you are about to review. _(Which is inherently not a big problem because this is already unavoidable and will happen regularly through immersion as well. However, when this happens in Anki when studying a new Card it may then lead to you second-guessing yourself when answering your reviews, making the process slower.)_

<!--Setting the Daily Review Count to 0-->

<migaku-video controls src="/content-images/tools-guides/anki/setting-daily-review-count.mp4"></migaku-video>

_\* If you intend to study new Cards before your reviews you will have to set the "Maximum reviews/day" option in the "Reviews" tab of the Deck Options Window to 0, then study your new Cards and then return the "Maximum reviews/day" option to its previous value before starting your reviews._

We also believe that studying a small number of new Cards at a time is faster and more effective than studying many new Cards at once. For example, if your goal was to study 20 new Cards per day, rather than attempting to learn all of those Cards at the same time, we believe it is better to study them in small separate batches and moving on to the next batch once you've finished the previous one. We recommend studying between 3-6 Cards in a batch. You can trust your personal preference as long as you stay within that recommended range.

<!--Studying 5 Cards And Then Increasing the New Card Count from 5 to 10-->

<migaku-video controls src="/content-images/tools-guides/anki/incrementing-new-cards-by-5.mp4"></migaku-video>

To study in this way will currently require you to increment the "New cards/day" option in the "New Cards" tab of the Deck Options Window by the batch number (3-6 Cards) you've chosen each time you finish studying a batch of new Cards, until you've studied the desired number of Cards for that day.

_We are working an add-on that will make studying new Cards in batches a much easier process. It will be released in the very near future._

#### How to Study a New Card

After you've either finished your reviews, or temporarily set your "Maximum reviews/day" option to 0 for the deck you want to study new cards in, then you are ready to begin studying new Cards. To do so:

1. Click the Deck you would like to begin reviewing from Anki's Collection Overview Screen.
1. Click the "Study Now" button on the next screen.

You will then see [the Front (Question) Side of a Card](<#the-front-(question)-side-of-a-card>). You can find out more about all of the options available on this side of a Card in [this section](<#the-front-(question)-side-of-a-card>) of the guide.

<!--Showing the Back of a New Card-->

<migaku-video controls src="/content-images/tools-guides/anki/showing-back-of-new-card.mp4"></migaku-video>

To show [the Back (Answer) Side of a Card](<#the-back-(answer)-side-of-a-card>) click the "Show Answer" button in the middle of the bottom bar (or press the `Space` key).

<!--The Again, Good, and Easy Button-->

<migaku-video controls src="/content-images/tools-guides/anki/again-good-easy-button.mp4"></migaku-video>

On the Back (Answer) Side of a Card you will then see three buttons appear in the place of the "Show Answer" button:

1. The "Again" button (Hotkey: `1`), which should be pressed when you fail to remember the relevant information.
   - You should think of this as the "Fail" button.
1. The "Good" button (Hotkey: `2`), which should be pressed when you do remember the relevant information.
   - You should think of this as the "Pass" button.
1. The "Easy" button (Hotkey: `3`), which should never be pressed as it will apply a permanent bonus to your Card that is likely to do more harm than good. You can view the [reference information about Anki's Information](#anki's-algorithm) if you would like to know more about why this is.

The only important thing to remember here is to never press the "Easy" button, and to press the "Good" button to "Pass" the Card when you've understood its contents.

_The <internal-link to="/tools-guides/migaku-flexible-grading/guide">Migaku Flexible Grading Add-on</internal-link> removes the "Easy" button making pressing it impossible, however it is not available on the [Anki Mobile Apps](#mobile-apps) or on [AnkiWeb](#ankiweb), so you must remember to not use the "Easy" button when studying new Cards on those platforms._

- We believe an effective way to study new Cards is to press the "Again" button and rapidly answer each Card in the current batch, in effect looping through them multiple times. Once correctly recalling the information being tested on each Card becomes relatively easy (this should happen after looping through the batch of new Cards a few times) then you should press the "Good" button to "Pass" the Cards.
- Each New Card must be passed twice. Once they have been passed twice, they will be given a 1-day interval and scheduled to be reviewed the next day.

**To find out how to grade your new cards effectively please check out our article <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link>. It covers how to study new Cards (and review Cards) of all the common types used in language learning; Sentence Cards, Vocabulary Cards, Audio Cards, and Kanji/Hanzi Cards.**

#### Important Concerns

It is highly recommended that a learner maintains a consistent schedule when studying new Cards. Studying an irregular number of new Cards on different days _(for example, 10 Cards one day, 0 the next, 50 the next, etc..)_ will lead to unbalanced review counts which may lead you to getting behind on your reviews, and creating a "Review Backlog".

A "Review Backlog" refers to Cards that have become due in the past but have not yet been reviewed. The <internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation Add-on</internal-link> is currently the best way of dealing with this situation as it allows you to slowly catch up on your "Review Backlog" a little bit each day, while still continuing your other reviews and avoiding potential issues with forgetting the Cards coming due because they aren't being reviewed on time.

"Review Backlogs" are a [concern whenever you are not finishing your reviews](#what-happens-if-you-don't-finish-your-reviews). If you find that you often encounter "Review Backlogs", you should consider using <internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation</internal-link> and setting a study schedule that is easier to maintain. It's much better to rest a couple days a week and stay consistent than to regularly struggle with backlogs which can lead to some of the <internal-link to="/coming-soon">Major Psychological Challenges of Immersion Learning</internal-link>.

### Reviewing Cards

Reviewing cards is the main way you will be interacting with your Cards in Anki and is the foundation of Spaced Repetition.

_You can find out more about our recommendations about reviewing Cards in our article about <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link>._

<!--Beginning to Review Cards-->

<migaku-video controls src="/content-images/tools-guides/anki/beginning-to-review-cards.mp4"></migaku-video>

To begin reviewing Cards:

1. Click the Deck you would like to begin reviewing from Anki's Collection Overview Screen.
1. Click the "Study Now" button on the next screen.

_\* Make sure to set your "New cards/day" option in the "New Cards" tab of the Deck Options Window to 0 if you study new Cards after completing your reviews to avoid mixing new Cards with reviews._

#### The Front (Question) Side of a Card

The first screen you will see after pressing the "Study Now" button will be the "Front" or "Question" side of the first Card due in the selected deck.

![Front of Card](/content-images/tools-guides/anki/front-of-card.png)

You will see three buttons at the bottom of your screen:

1. On the left you will see the "Edit" button, this will open the Edit Card Window when clicked.
1. In the middle you will see the "Show Answer" button, this will show the [Back (Question) Side of a Card](<the-back-(answer)-side-of-a-card>) when clicked.
1. On the right you will see the "More" button which when clicked will show a menu with several different options, the two most important being the option to [Delete or Suspend a Card](#suspending-and-deleting-cards).

After just seeing the contents of the Front Side of the Card you should basically already understand whether you should "Pass" or "Fail" that Card (find out more here: <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link>) . Once the "Show Answer" button is clicked or the `Space` key is pressed the [Back (Question) Side of a Card](<the-back-(answer)-side-of-a-card>) will be shown.

#### The Back (Answer) Side of a Card

![Back of Card](/content-images/tools-guides/anki/Back-of-card.png)

The backside of the card contains the same 2 buttons on the left and right side of its bottom bar. But in the middle, it will now instead contain 4 different buttons:

1. The "Again" button (Hotkey: `1`), which should be pressed when you fail to remember the relevant information.
   - You should think of this as the "Fail" button.
1. The "Hard" button (Hotkey: `2`), which should never be pressed, as it will apply a permanent penalty to your Card that is likely to do more harm than good.
   - You can view the [reference information about Anki's Information](#anki's-algorithm) if you would like to know more about why this is.
1. The "Good" button (Hotkey: `3`), which should be pressed when you do remember the relevant information.
   - You should think of this as the "Pass" button.
1. The "Easy" button (Hotkey: `4`), which should never be pressed, as it will apply a permanent bonus to your Card that is likely to do more harm than good.
   - You can view the [reference information about Anki's Information](#anki's-algorithm) if you would like to know more about why this is.

The most important thing to remember here is to never press the "Hard" or "Easy" buttons, and to press the "Good" button to "Pass" the Cards that you've correctly recalled the information being tested or press "Again" to "Fail" the Cards where you did not.

_The <internal-link to="/tools-guides/migaku-flexible-grading/guide">Migaku Flexible Grading Add-on</internal-link> removes the "Hard" and "Easy" buttons making pressing them impossible, however it is not available on the [Anki Mobile Apps](#mobile-apps) or on [AnkiWeb](#ankiweb), so you must remember to not use the "Hard" or "Easy" buttons when reviewing cards on those platforms._

**To find out about what we feel are some good principles to follow when deciding whether to Pass or Fail a Card please reference our <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link> article.**

#### Leeches

Cards that have been incorrectly answered ("Failed") 8 times are considered "Leeches" and are automatically [Suspended](#suspending-cards). This is a good thing, as Cards that you are having trouble recalling consistently, tend to not be well-formed. It is better instead to allow these Cards to become leeches and to periodically delete them and make a replacement Card that tests the same information; or reset "Leech" Cards to new Cards after your abilities in your target language have improved. You will be surprised how much more easily you may be able to correctly recall the tested information on a "Leeched" Card after your abilities have improved.

![The Leech Notice](/content-images/tools-guides/anki/leech-notice.png)
_A small notice will appear on the left bottom side of the screen showing you that a Card has become a leech._

_Reference our <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link> article to find out in more detail how to handle Cards that have become leeches and have been suspended._

#### Suspending and Deleting Cards

Suspending and deleting Cards are essential parts of using an SRS as a supplement to immersion learning.

##### Suspending Cards

To "Suspend" a Card is to in effect "hide" a Card. A new Card that is suspended will not show up when learning new Cards, and a Card that you are studying that you suspend (or that is suspended as a [Leech](#leeches)) will no longer show up when reviewing. These Cards are however still in your Anki Collections, and can be found when [viewing that Collection](#viewing-your-anki-collection).

When to consider suspending a Card:

- If you find a Card very difficult or slow to review it may be a sign that it is not a good, well-formed Card. Suspending it for now and later deciding whether to edit, improve, or delete it, is a good idea.

- If you simply don't like a Card but are hesitant to delete it, then simply suspend it for now and make the decision later.

Suspend a Card while reviewing by:

- Clicking the "More" button at the bottom right of the Review Screen and pressing "Suspend Card" or by pressing `@` (Shift + 2 on most keyboards).

_\* There is also an option "Suspend Note" in the menu that appears after clicking "More". Suspending a Note will suspend all Cards associated with that Note._

You can also suspend Cards in the Card Browser window which is covered in [its relevant section](#viewing-your-anki-collection).

##### Deleting Cards

Deleting a Card will permanently remove it from your Anki Collection.

When to consider deleting a Card:

- If you find a Card very difficult or slow to review it and it's making you feel negatively towards your SRS study then consider simply deleting it.
- If you just don't like a Card it's almost certainly ok to go ahead and delete it on the spot.

_Immersion learning is a long-term project and mood and attitude maintenance towards your studies is primary. You will have plenty of chances in the future to acquire a word found on a Card that was deleted. So remember to foster a mindset of plenty when it comes to immersion learning and not one of scarcity. Words are plentiful and so are your opportunities to acquire them._

#### What Happens If You Don't Finish Your Reviews

As mentioned in the [Important Concerns section](#important-concerns) of the [New Card Study section](#studying-new-cards) of this guide, if you do not finish all of your reviews on a given day, those reviews that you did not finish will remain and become a "Review Backlog". In a sense, each day that you don't finish your Anki reviews you will have a sort of review debt that must be paid sometime in the future. We at Migaku, consider this a major design flaw in Anki and have developed the <internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation Add-on</internal-link> to help deal with the issues of a "Review Backlog".

The <internal-link to="/tools-guides/migaku-vacation/guide">Migaku Vacation Add-on</internal-link> does all of these things that can help to reduce that chances that you get behind on your reviews:

- Choosing a study schedule _(For example: Only studying Mon-Fri, and taking the weekends off)_.
- Schedule vacations away from reviews.
- Optimize and smooth daily review counts.
- Taking a "Sick Day" and rescheduling all reviews one day into the future.
- Catching up slowly on overdue reviews (Review Backlog) using the “Catch-Up” feature.

**We feel the biggest reasons learners fall behind on their reviews is because Anki by default demands that they study 7 days a week, every week, and that they never take any prolonged breaks away from it. Migaku Vacation fixes both issues with its Study Schedule feature and its Vacation Scheduling feature, respectively. We highly recommend all immersion learners to use it.**

### Editing Cards

We recommend that you edit Cards using <internal-link to="/tools-guides/migaku-editor/guide">Migaku Editor</internal-link> which greatly enhances Card editing and makes it far more convenient than editing Cards with vanilla Anki. Please visit the <internal-link to="/tools-guides/migaku-editor/guide">Migaku Editor User's Guide</internal-link> to find out more about editing Cards with Migaku Editor.

If you are interested in editing Cards without using <internal-link to="/tools-guides/migaku-editor/guide">Migaku Editor</internal-link> then please <a href="https://docs.ankiweb.net/#/editing?id=addingediting" target="_blank">see the section about editing Cards in Anki's Manual</a>.

### Viewing Your Anki Collection

![A Picture With a Number For Each Component of the Card Browser Window](/content-images/tools-guides/anki/labeled-card-browser.png)

The Card Browser window is made up of 4 components.

1. The Filter List to the left.
1. The Search Bar to the top. _(which also contains the "Filter..." button for advanced filters, and a "Preview" for previewing how a selected card looks)_
1. The Card List in the middle.
1. The Edit Window at the bottom.

<!--Filtering Cards Using the Filter List-->

<migaku-video controls src="/content-images/tools-guides/anki/filter-list-filtering.mp4"></migaku-video>

On the left-hand side of the Card Browser you will see the names of the different Decks, Note Types, and Tags that exist within your Collection. Clicking on any of those names will filter the Card List to only show Cards that either belong to the selected deck, are of that given Note Type, or have the given tag.

#### Viewing Suspended and Leeched Cards

You can also use advanced filters by clicking the "Filter..." button on the left of the Search Bar. There are various advanced filters available when using the "Filter..." button, but the ones with the most utility for a language learner are the filter for viewing [Suspended](#suspending-and-deleting-cards) Cards or [Leeched](#leeches) Cards. As stated earlier in this guide it is recommended that you periodically look over your Suspended Cards and Leeched Cards and decide whether to edit them, delete them, or reset them to the status of a new Card.

<!--Viewing Suspended Cards-->

<migaku-video controls src="/content-images/tools-guides/anki/viewing-suspended-cards.mp4"></migaku-video>

_Select `Card State->Suspended` to view your Suspended cards._

<!--Viewing Leeched Cards-->

<migaku-video controls src="/content-images/tools-guides/anki/viewing-leeched-cards.mp4"></migaku-video>

_Select `Tags->Leech` to view your Leeched cards._

#### Other Functionality

Here are some other useful things you can do in the Anki Card Browser:

- You can select all Cards between 2 Cards by holding down the shift key and clicking 2 different Cards.

<!--Selecting Multiple Cards and Suspending Them From the Drop-down Menu-->

<migaku-video controls src="/content-images/tools-guides/anki/selecting-and-suspending-cards.mp4"></migaku-video>

- You can also right click to show a menu with some useful options such as to [Suspend or Delete Cards](#suspending-and-deleting-cards). You can also change which decks a card belongs to among other things.

<!--Searching Cards in Browser-->

<migaku-video controls src="/content-images/tools-guides/anki/searching-cards-in-browser.mp4"></migaku-video>

- Search for Cards containing certain words.

To find out more about the Card Browser <a href="https://docs.ankiweb.net/#/browsing?id=browsing" target="_blank">view its section in the Anki Manual</a>.

### Anki Stats Page

<!--Navigating and Showing the Anki Stats Page-->

<migaku-video controls src="/content-images/tools-guides/anki/showing-anki-stats.mp4"></migaku-video>

You can see a list of stats for your Anki Collection by clicking "Stats" located in the top right of Anki's Main Window.

On the Stats Window you can see graphs and statistics for both a specific Deck and for your entire Collection.

To find our more about the stats shown on this page you can <a href="https://docs.ankiweb.net/#/stats?id=graphs-and-statistics" target="_blank">view the Stats section of the Anki Manual here</a>.

### Syncing

Syncing is the act of uploading/downloading your Anki Collection to/from <a href="https://ankiweb.net/" target="_blank">AnkiWeb</a>
_\* The full Collection only needs to be uploaded/downloaded the first time on any given device, from that point on syncing is a very fast to pretty fast process depending on your internet speed._

You will need to <a href="https://ankiweb.net/account/register" target="_blank">sign up for an AnkiWeb account</a> in order to use syncing. It's completely free and an essential part of both keeping your Anki Collection safely backed up, and necessary in order to sync your Anki Collection among multiple devices.

Once you've registered for an AnkiWeb account we highly recommend <a href="https://youtu.be/YkiM4DPzSVc?list=PLGgmaKOIHykFoomqkBJAyGiDQ2kyiuTao" target="_blank">watching the Anki Team's official video on Syncing</a> to find out how to sync your Anki Collection between different devices.

If you would like to know even more about syncing you can <a href="https://docs.ankiweb.net/#/syncing?id=syncing-with-ankiweb" target="_blank">visit its section in the Anki Manual</a>.

## AnkiWeb

After you have signed up for and [Synced](#syncing) your Collection to AnkiWeb, then it is also possible to review your Cards on AnkiWeb by visiting the <a href="https://ankiweb.net/decks/" target="_blank">Decks Page</a>.

_Remember to keep in mind the precautions we talked about in the sections about [Studying New Cards]("studying-new-cards), and [Reviewing Cards](#reviewing-cards) when studying on AnkiWeb._

## Add-ons

Besides the <internal-link to="/tools-guides">Migaku Add-on Series</internal-link>, there are also <a href="https://ankiweb.net/shared/addons/2.1" target="_blank">many other add-ons available for Anki</a>.

While we at Migaku don't condemn the use of our add-ons with other add-ons found on <a href="https://ankiweb.net/shared/addons/2.1" target="_blank">AnkiWeb Add-ons Page</a>, be aware that we cannot guarantee compatibility between our add-ons and the add-ons you will find there. Please pay attention to any warnings about incompatible add-ons found on the Support Pages of our Migaku Add-ons, or the installation section of their guides.

## Mobile Apps

To get Anki for Android (AnkiDroid) please <a href="https://play.google.com/store/apps/details?id=com.ichi2.anki" target="_blank">visit this page</a>.
_\* AnkiDroid is completely free._

- To find out more about AnkiDroid please <a href="https://docs.ankidroid.org/" target="_blank">see the AnkiDroid Manual</a>

To get Anki for iOS (Anki Mobile) please <a href="https://apps.apple.com/us/app/ankimobile-flashcards/id373493387" target="_blank">visit this page</a>.
_\* Unlike AnkiDroid, Anki Mobile is a paid application._

- To find out more about Anki Mobile please see the <a href="https://docs.ankimobile.net/#/" target="_blank">Anki Mobile Manual</a>.

_Remember to keep in mind the precautions we talked about in the sections about [Studying New Cards]("studying-new-cards), and [Reviewing Cards](#reviewing-cards) when studying with the Mobile Apps._

## Learn More

To find more detailed information about every feature Anki offers please reference the <a href="https://docs.ankiweb.net/#/" target="_blank">Anki Manual</a>.

## Reference

### Checking Your Anki Version

<!--Checking Your Anki Version-->

<migaku-video controls src="/content-images/tools-guides/anki/checking-anki-version.mp4"></migaku-video>

You can check your Anki version on Windows by:

1. Navigating to `Help->About...` from Anki's Top Menu Bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

You can check your Anki version on Mac by:

1. Navigating to `Anki->About...` from Anki's Top Menu Bar.
1. Your Version Number will be listed on the 3rd line of the "About Anki" window.

### Anki's Algorithm

**While it is not important to think too deeply about the algorithm itself, and this section is ok to skip if desired, we are including it as a reference to why we suggest the changes we suggested in [Optimizing Your Anki Settings section](#optimizing-your-anki-settings) and the reviewing style we suggested in the [Reviewing Cards section](#reviewing-cards).**

Anki's Space Repetition algorithm is pretty basic when it comes to Spaced Repetition Algorithms. Which is why the Migaku team is already hard at work on the Migaku SRS, our own solution to the SRS problem. That being said, Anki's algorithm, while not perfect has proven to be very effective, with many immersion learners using it successfully as a supplement to their immersion study.

The algorithm that returns a Card's next interval and review date works by multiplying the interval of a Card that has been answered using the "Good" button in this way:

```
New Interval = Previous Interval * Card Multiplier (Card Ease) * Extra Bonus or Penalty (Interval Modifier)
```

- Card Multiplier - The multiplier associated with the Card that is currently being reviewed. The default is `2.5`.
- Extra Bonus or Penalty - This is a bonus or penalty applied to the new interval. By default its value is `1`, which signifies no bonus or penalty being applied.

So as an example, reviewing a Card with a previous interval of `3` would lead to this result:

```
New Interval = 3 (Previous Interval) * 2.5 (Card Multiplier) * 1 (Extra Bonus or Penalty)
New Interval = 3 * 2.5
New Interval = 7.5
New Interval = 8 (after rounding 7.5)
```

As explained in the [Reviewing Cards section](#reviewing-cards), Anki has 4 possible responses when reviewing a Card. "Again", "Hard", "Good", and "Easy".

The exact reason we recommend only using the "Good" button for your response if because each time you use "Hard" or "Good" a permanent change is make to that Card's "Card Multiplier".

- When the "Hard" button is used the Card's "Card Multiplier" is decreased by 15%.
- When the "Easy" button is used the Card's "Card Multiplier" is increased by 15%.

What has been found to happen in practice is that a large percentage of learners tend to use the hard button regularly, simply believing that Anki will be showing them the Card a bit earlier when they use that button. But in fact what happens is that that Card's Card Multiplier will be permanently reduced each time that the "Hard" button is used, which can lead to hugely inflated review counts. Not only this but, the retention rate _(the percentage of Cards answered successfully)_ of Cards with a lower Card Multiplier doesn't tend to greatly increase when compared to using the default multiplier value of `2.5`, but the review load will increase very substantially.

Therefore, our recommendation is to only use the "Good" button, and to also let Cards naturally become [leeches](#leeches). The best mindset to have when reviewing within Anki is to allow what sticks to stick, and to have leeches be suspended. Then later you can decide whether to:

1. Simply delete the Leeched cards.
1. Delete those Leeched Cards and add a new Card that covers the same new piece of information in a different way.
1. Edit those Leeched Cards in some way that makes them easier to remember.
1. Wait until you're better at your target language and then <a href="https://docs.ankiweb.net/#/filtered-decks?id=rescheduling" target="_blank">reschedule them as new Cards</a>.

If you want to know even more about the issues with these sorts of penalties you can read <a href="https://readbroca.com/anki/ease-hell/" target="_blank">this article</a>.

### Anki Card Format Recommendations

Please note that if you visit our <internal-link to="/coming-soon">Recommended Beginner Decks Downloads List</internal-link>, that there you can also download an example deck that contains an example Card of each of the recommended Note Types. You can then delete the example Cards but use their Note Types for your own purposes.

#### The Note Types

**Find out more about studying these Cards and when to use each type of Card in our <internal-link to="/coming-soon">How to Study Cards in the SRS</internal-link> article.**

##### General Recommended Sentence Card Format

![A Well Formatted Sentence Card](/content-images/tools-guides/anki/sentence-card.png)

**Remember that ideally you only want one unknown element (one "Target") in a Sentence Card's sentence.**

- Front Side
  - The sentence you are studying.
- Back Side
  - The word or grammar point you are learning in the sentence. (Known as the "Target" of the sentence.)
  - The meaning of that word or grammar point.
  - Optionally, a related image or a screenshot of the source where the word was found.
  - Optionally, a recording of the Target word.
  - A recording of the sentence.

_\* Note that a value for each Field might not always be available. For example, the word audio may not be available for all words when searching them with <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary</internal-link>._

##### General Recommended Vocabulary Card Format

![A Well Formatted Vocabulary Card](/content-images/tools-guides/anki/vocabulary-card.png)

- Front Side
  - The word you are learning.
- Back Side
  - A sentence using that word.
  - The meaning of that word.
    - This might be a definition or even just a picture if the word is a <internal-link to="/coming-soon">Concrete Noun</internal-link>.
  - Optionally, a related image or a screenshot of the source where the word was found.
  - A recording of the word.
  - A recording of the sentence using that word.

_\* Note that a value for each Field might not always be available. For example, the word audio may not be available for all words when searching them with <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary</internal-link>._

##### General Recommended Audio Sentence Card Format

![A Well Formatted Audio Card](/content-images/tools-guides/anki/audio-card.png)

**Remember that ideally you only want one unknown element (one "Target") in an Audio Sentence Card's sentence.**

- Front Side
  - A recording of the sentence.
- Back Side
  - The written form of the sentence.
  - The word or grammar point you are learning in the sentence. (Known as the "Target" of the sentence.)
  - The meaning of that word or grammar point.
  - Optionally, a related image or a screenshot of the source where the word was found.
  - Optionally, a recording of the Target word.

_\* Note that a value for each Field might not always be available. For example, the word audio may not be available for all words when searching them with <internal-link to="/tools-guides/migaku-dictionary/quickstart">Migaku Dictionary</internal-link>._

##### General Recommended Recognition Kanji and Hanzi Card Format

**The Migaku team is currently hard at work on a project that will make making high quality Kanji/Hanzi cards of this format extremely easy.**

![A Well Formatted Recognition Kanji/Hanzi Card](/content-images/tools-guides/anki/recognition-character-card.png)

- Front Side
  - The character (kanji/hanzi) itself.
  - Common Words using that character (Ideally those you've already learned).
- Back Side
  - The (Heisig) keyword of the character.
  - A stroke order chart of the character.
  - Extra information as desired, such as the components (radicals, or Heisig primitives) of the character, readings, other meanings, etc.

##### General Recommended Production Kanji and Hanzi Card Format

**The Migaku team is currently hard at work on a project that will make making high quality Kanji/Hanzi cards of this format extremely easy.**

<!--A Well Formatted Production Kanji/Hanzi Card-->

![A Well Formatted Production Kanji/Hanzi Card](/content-images/tools-guides/anki/production-character-card.gif)

- Front Side
  - Common Words using that character with the character itself replaced with a placeholder (Ideally those you've already learned).
  - The (Heisig) keyword of the character.
- Back Side
  - The character (kanji/hanzi) itself.
  - The same common words as the front but this time with the character itself shown.
  - A stroke order chart of the the character.
  - Extra information as desired, such as the components (radicals, or Heisig primitives) of the character, readings, other meanings, etc.

#### Important Note

We recommend that if you are creating your own Cards that you use the <internal-link to="/tools-guides/migaku-browser-extension/quickstart">Immerse with Migaku Browser Extension</internal-link> and <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary</internal-link>, as they allow you to make nearly instant high quality Cards with audio and a screenshot from Netflix, YouTube, your local video files, and your favorite websites.

_\* If you plan to also heavily use your own local video files to make Cards then we recommend also installing <internal-link to="/tools-guides/migaku-mpv/guide">Migaku MPV</internal-link>. It has support for every video format, whereas the Immerse with Migaku Browser Extension is limited to video formats supported by the internet browser it's installed on._

If you are learning Japanese, we recommend that you check out the <internal-link to="/tools-guides/migaku-japanese/quickstart">Migaku Japanese Add-on Quick Start Guide</internal-link>.

If you are learning Chinese, (Traditional or Simplified) or Cantonese we recommend that you check out the <internal-link to="/coming-soon">Migaku Chinese Add-on Quick Start Guide</internal-link>.

If you are learning German, we recommend that you check out the <internal-link to="/coming-soon">Migaku German Add-on User's Guide</internal-link>.

If you are learning French, we recommend that you check out the <internal-link to="/coming-soon">Migaku French Add-on User's Guide</internal-link>.

If you are learning Spanish, we recommend that you check out the <internal-link to="/coming-soon">Migaku Spanish Add-on User's Guide</internal-link>.
