---
title: Migaku MPV User's Guide
shortTitle: User's Guide
description: Migaku MPV is a plugin for the MPV Video Player that allows you to play videos of any format with the Immerse with Migaku Browser extension.
headerImage: /content-images/tools-guides/migaku-mpv/migaku-mpv-header.png
position: 1
---

# Migaku MPV User's Guide

## Table of Contents

- [Intro](#intro)
- [MPV Installation](#mpv-installation)
  - [Windows](#mpv-installation-windows)
  - [macOS](#mpv-installation-macos)
  - [Linux](#mpv-installation-linux)
- [MPV Uninstallation](#mpv-uninstallation)
  - [Windows](#mpv-uninstallation-windows)
  - [macOS](#mpv-uninstallation-macos)
  - [Linux](#mpv-uninstallation-linux)
- [MPV Configuration](#mpv-configuration)
- [Installation](#installation)
  - [Windows](#installation-windows)
  - [macOS](#installation-macos)
  - [Linux](#installation-linux)
- [Uninstallation](#uninstallation)
- [Updating](#updating)
- [Functionality](#functionality)
  - [Opening the subtitle browser](#opening-the-subtitle-browser)
  - [Using the subtitle browser](#using-the-subtitle-browser)
  - [Subtitle styling in the MPV window](#subtitle-styling-in-the-mpv-window)
  - [Hotkeys](#hotkeys)
  - [Loading web videos](#loading-web-videos)
  - [Subtitle retiming](#subtitle-retiming)
- [Configuration](#configuration)
  - [Browser](#browser)
  - [Subtitle styling](#subtitle-styling)
  - [Export Media Quality and Format](#export-media-quality-and-format)
  - [Advanced Configuarion](#advanced-configuarion)

## Intro

Migaku MPV is a plugin for the video player MPV that allows the use of all local video files with the Migaku Browser extension. Playing videos from several websites is also supported through youtube-dl. To use it please first install the <internal-link to="/tools-guides/migaku-dictionary/manual">Migaku Dictionary</internal-link> and the <internal-link to="/tools-guides/migaku-browser-extension/quickstart">Migaku Browser Extension</internal-link>.

**We hope you find this project helpful! If you are in a position where you are financially able please consider <a href="https://www.patreon.com/Migaku" target="_blank">supporting the Migaku Team</a>! Our software projects take thousands of hours to build, update, and maintain and we are only able to continue our work thanks to our supporters! We are deeply and humbly grateful to everyone who decides to support Migaku!**

## MPV Installation

_If you already have MPV version 0.33.0 or newer installed you can skip this section._

### MPV Installation (Windows)

<!--MPV Installation Windows-->

<migaku-video controls src="/content-images/tools-guides/migaku-mpv/mpv-installation-windows.mp4"></migaku-video>

1. Download the latest MPV release for your system from <a href="https://sourceforge.net/projects/mpv-player-windows/files/" target="_blank">here</a> (64 bit or 32 bit folder, then uppermost file).
1. Create a folder called `mpv`.
1. Extract the contents of the downloaded `.7z` file into the newly created folder using <a href="https://www.7-zip.org/" target="_blank">7-zip</a> or <a href="https://www.rarlab.com/download.htm" target="_blank">WinRAR</a>.
1. Cut and paste the `mpv` folder to the location where you want MPV to be installed. The recommended location is `C:/Program Files/`.
1. Navigate into the `installer` folder inside the `mpv` folder.
1. Right click on `mpv-install.bat` and click on `Run as administrator`.
1. Once the installer finishes hit enter. A system settings window opens where you can set MPV as your default video player. This step is optional.
1. Run MPV at least once to create the config folder which will be located at `%appdata%/mpv/`. `[mpv config folder]` the following guides will refer to this folder.

### MPV Installation (macOS)

<!--MPV Installation macOS-->

<migaku-video controls src="/content-images/tools-guides/migaku-mpv/mpv-installation-macos.mp4"></migaku-video>

1. Download the latest MPV release from <a href="https://laboratory.stolendata.net/~djinn/mpv_osx/mpv-latest.tar.gz" target="_blank">here</a>.
1. Click onto the downloaded `.tar` file to extract it.
1. Open the newly extracted folder. Its name should start with `mpv-`.
1. Copy the `mpv` application from that folder into your mac's `Applications` folder.
1. From there right click the `mpv` application and press `Open` in the context menu.
1. A warning popup should appear. Click `Open`. After this you can launch MPV regularly from the Launchpad.
1. The MPV config directory will be created at `~/.config/mpv/`. You can always easily reach it by using `Go->Go to Folder...` in Finder. `[mpv config folder]` the following guides will refer to this folder.

### MPV Installation (Linux)

MPV is available in most Linux package managers. Make sure you install version 0.33.0 or later. If such a version is not available on your distribution see <a href="https://mpv.io/installation/" target="_blank">here</a> for all install options available including a PPA for Debian and Ubuntu users.

Start MPV at least once to create the config folder which will be located at `~/.config/mpv/`. `[mpv config folder]` the following guides will refer to this folder.

## MPV Uninstallation

### MPV Uninstallation (Windows)

1. Navigate to the `installer` folder inside the `mpv` folder where you installed MPV.
1. Right click on `mpv-uninstall.bat` and click on `Run as administrator`.
1. Remove the `mpv` folder and optionally the `[mpv config folder]` to remove all configuration.

### MPV Uninstallation (macOS)

1. Navigate to the `Applications` folder.
1. Right click onto `mpv` and click on `Move to Bin`.
1. Delete the `[mpv config folder]` to remove all configuration.

### MPV Uninstallation (Linux)

1. Remove MPV using your package manager or according to your install method.
1. Delete the `[mpv config folder]` to remove all configuration.

## MPV Configuration

Download this <a href="http://dicts.migaku.io/files/mpv/mpv.conf" target="_blank">mpv.conf</a> file and place it in your `[mpv config folder]`.
Open the file with a text editor. It contains several useful options with instructions on how to enable them.

If you want to use the same hotkeys that work on the subtitle browser on the MPV window, download this <a href="http://dicts.migaku.io/files/mpv/input.conf" target="_blank">input.conf</a> file and place it in your `[mpv config folder]`. This is recommended.

For a full guide on mpv refer to its <a href="https://mpv.io/manual/master/" target="_blank">manual</a>.

## Installation

### Installation (Windows)

Note: Currently Migaku MPV will not work on Windows versions older than Windows 10.

<!--Installation Windows-->

<migaku-video controls src="/content-images/tools-guides/migaku-mpv/installation-windows.mp4"></migaku-video>

1. Open the explorer and navigate to `%appdata%/mpv/`.
1. Create a folder called `scripts` if it does not exist yet.
1. Extract the `migaku_mpv` folder from the latest <a href="http://dicts.migaku.io/files/mpv/migaku-mpv-latest-windows.zip" target="_blank">release</a> into the `scripts` folder.
1. `[migaku_mpv folder]` in the following guide refers to the just extracted `migaku_mpv` folder which should be located at `%appdata%/mpv/scripts/migaku_mpv/`.

### Installation (macOS)

<!--Installation macOS-->

<migaku-video controls src="/content-images/tools-guides/migaku-mpv/installation-macos.mp4"></migaku-video>

1. Open Finder and open `Go->Go to Folder...` from the menu bar, then enter `~/.config/mpv/` and press `Go`.
1. Create a folder called `scripts` if it does not exist yet.
1. Extract the `migaku_mpv` folder from the latest <a href="http://dicts.migaku.io/files/mpv/migaku-mpv-latest-macOS.zip" target="_blank">release</a> into the `scripts` folder.
1. `[migaku_mpv folder]` in the following guide refers to the just extracted `migaku_mpv` folder which should be located at `~/.config/mpv/scripts/migaku_mpv/`. You can always easily reach it with `Go->Go to Folder...` in Finder.
1. When running MPV with the Migaku MPV plugin installed for the first time you may get security warnings that applications are opened. Press `Open` on all of these popups.

### Installation (Linux)

1. Install `ffmpeg` from your package manager. The command `ffmpeg` must be available globally.
1. Install `python 3.x` from your package manager. The command `python3` must be available globally.
1. Open your file manager and navigate to `~/.config/mpv/`.
1. Create a folder called `scripts` if it does not exist yet.
1. Extract the `migaku_mpv` folder from the latest <a href="http://dicts.migaku.io/files/mpv/migaku-mpv-latest-linux.zip" target="_blank">release</a> into the `scripts` folder.
1. `[migaku_mpv folder]` in the following guide refers to the just extracted `migaku_mpv` folder which should be located at `~/.config/mpv/scripts/migaku_mpv/`.
1. Execute the command `sudo python3 -m pip install -r ~/.config/mpv/scripts/migaku_mpv/requirements.txt` from a terminal. Enter your password if you are requested to do so.

## Uninstallation

1. Delete the `[migaku_mpv folder]`. Migaku MPV does not store any data outside this folder.

## Updating

1. [Uninstall](#uninstallation) Migaku MPV
2. Follow the [Installation](#installation) guide for your operating system.

## Functionality

### Opening the subtitle browser

<!--Opening the subtitle browser-->

<migaku-video controls src="/content-images/tools-guides/migaku-mpv/opening-subtitle-browser.mp4"></migaku-video>

1. First open the media file you want to watch along with the subtitles you want to use.
1. Select the correct audio and subtitle by either clicking the speech bubble/subtitle icons in the bottom right corner or by pressing the `#` / `j` keys.
1. Press the `b` key to open the subtitle browser.

### Using the subtitle browser

1. Make sure the Migaku Browser Extension toolbar is enabled.
1. Select the language you want to use, select the desired options and press `Parse` in the toolbar.
1. Use the Anki and Search buttons just like when using the browser extension on Netflix.

### Hotkeys

_Note: These hotkeys apply to the subtitle browser, not the MPV window unless you set the input.conf file as described [here](#mpv-configuration)._

- `Space` : Pause/Unpause the video
- `a` / `←` : Seek to last subtitle
- `d` / `→` : Seek to next subtitle
- `s` / `↓` : Seek to the start of the current subtitle
- `w` / `v` / `↑` : Toggle subtitle visibility
- `q` : Export current subtitle to Anki
- `e` : Search unknown words in current subtitle in Migaku Dictionary

### Loading web videos

MPV supports playing web videos from several websites using [youtube-dl](https://youtube-dl.org/). However, a modified version of that project called [yt-dlp](https://github.com/yt-dlp/yt-dlp) exists with slightly more supported websites. We will install that into MPV.

On Windows download [this](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe) file and place it in your mpv installation folder (Where `mpv.exe` is. If you used the recommended location from this guide this is `C:/Program Files/mpv/`) and then rename the downloaded file from `yt-dlp.exe` to `youtube-dl.exe`.

On macOS or Linux open a terminal and execute these two commands:

```
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/youtube-dl
```

```
sudo chmod a+rx /usr/local/bin/youtube-dl
```

Once you have set up youtube-dl you can copy urls from many video websites to your clipboard and then press `y` in the MPV window to load it. Alternatively you can press `Shift+y` to queue it to play.

Then you can use the subtitle browser after selecting a subtitle track as usual.

A list of websites supported by yt-dlp can be found [here](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md). Be aware that this list isn't always up to date as websites often get updated which can break youtube-dl support. Whenever MPV closes itself after attempting to load a web video, chances are that youtube-dl or yt-dlp doesn't support it at the moment.

Also be aware that subtitle files from websites can be in unusual formats which may cause them to not be loaded correctly into the subtitle browser. In this case you can conact us in `#migaku-mpv` on our Discord server and we will look into supporting that website!

### Subtitle styling in the MPV window

Subtitles in the MPV window can be styled exactly like in the subtitle brower by clicking the `⟳ MPV Subs` button. This supports all styling features available for any languages supported by the browser extension like word status underlining, 1T highlighting and pitch/tone/gender coloring.

For this to work properly you need to specify what font to use for subtitles in the configuration file. Refer to [this](#subtitle-styling) section for how to set it up.

### Subtitle retiming

If an external subtitle file you want to use is not in sync with the video you can retime it before opening the subtitle browser.

<!--Automatic subtitle syncing-->

<migaku-video controls src="/content-images/tools-guides/migaku-mpv/automatic-subtitle-syncing.mp4"></migaku-video>

1. Press `Shift+b` to open the automatic retiming menu.
1. Select a reference track for the resyncing process using the arrow keys (`↑` / `↓`).
1. Press `Enter` to start the process. Depending on the media files and your system this can take up to a minute but usually finishes in about 5 seconds for a regular 25 minute show.
1. This will create a subtitle file in the same folder as the input subtitle file with the suffix `_resynced` which is automatically loaded into MPV once the process is finished.

If the automatic syncing does not create an acceptable result or fails to select the original subtitle track. Then you can use `z` and `Shift+z` to manually change the offset of the subtitles.

## Configuration

<!--Configuration-->

<migaku-video controls src="/content-images/tools-guides/migaku-mpv/configuration.mp4"></migaku-video>

To configure Migaku MPV open the `migaku_mpv.cfg` file inside `[migaku_mpv folder]` with a text editor.
Please only edit the texts after the equals characters (`=`). On Linux `chromium` works if it is available as a global command.

### Browser

To change the browser Migaku MPV uses find the `browser` key. The value `default` will use the system's default browser setup to open websites. `chrome` and `edge` will force using the respective browser.

Advanced: You can specify the exact command that will be used to open websites in the `browser` field. `%s` will be replaced by the target url. End the command with `&` to force async execution which you most likely want. Example: `/usr/bin/chromium %s &`

### Subtitle styling

Subtiles generated with `⟳ MPV Subs` will use styling specified using the following properties:

`sub_font_name` specifies what font to use. This setting is important. If the font you specified isn't found, spacing calculations will be off!

For asian languages we recommend using the Noto Sans fonts ([Japanese](https://www.google.com/get/noto/#sans-jpan), [Korean](https://www.google.com/get/noto/#sans-kore), [Simplified Chinese](https://www.google.com/get/noto/#sans-hans), [Traditional Chinese](https://www.google.com/get/noto/#sans-hant)).

On some systems you might have to specify the font weight in `sub_font_name`. If the styling looks wrong, try to append `Regular` to the font name you specified. Example `Arial` -> `Arial Regular`.

Modify `sub_font_size` to set the font size. `sub_bottom_margin` modifies the distance from the bottom of the mpv window to the first subtitle line. `sub_outline_size` and `sub_shadow_offset` modifies the outline and shadow styling of the font. All numeric values are relative to a window height of 720p.

### Export Media Quality and Format

You can configure the quality of the images and audio that are exported for your Anki cards.

Image dimensions can be set by changing the `anki_image_width` and `anki_image_height` settings. These values are in pixels. The aspect ratio of images is always preserved. You can set `anki_image_width` or `anki_image_height` to `auto` which causes the value to be calculated from the other value and the aspect ratio. If both values are set to `auto` the exported image size will match the size of the video you are watching. The format that is used for image can be changed with `anki_image_format`. The recommended format is `jpg` but you can also choose `png` for better quality, but larger file size images.

The format used for audio can be set with `anki_audio_format`. It is recommended you leave the default value `wav` and you enable <internal-link to="/tools-guides/migaku-dictionary/manual/#convert-extension-audio-to-mp3">Convert Extension Audio to MP3</internal-link> in Migaku Dictionary.

### Advanced Configuration

- `reuse_last_tab` controls if a previous subtitle browser tab is reused when opening it. Values: `yes` / `no`.
- `reuse_last_tab_timeout` controls the time in seconds after which tab reusal attempts time out and a new tab is opened.
- `host` and `port` control the location that is used to host the subtitle browser while MPV is running.
- `skip_empty_subs` will remove empty subtitles from the browser when set to `yes`.
- `subtitle_export_timeout` controls the timeout in seconds after which export of internal subtitles times out.
- `ffmpeg` can set an override path to ffmpeg. If it is not set, first the application is searched in `[migaku_mpv folder]`, then in `[migaku_mpv folder]/ffmpeg/` and finally system wide.
- `ffsubsync` can set an override path to ffsubsync. If it is not set, first the application is searched in `[migaku_mpv folder]`, then in `[migaku_mpv folder]/ffsubsync/` and finally system wide.
- `rubysubs` can set an override path to rubysubs. If it is not set, first the application is searched in `[migaku_mpv folder]`, then in `[migaku_mpv folder]/rubysubs/` and finally system wide.
