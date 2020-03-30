# Zoom Closer for Firefox

## Description
Are you in Zoom meetings all the time?  Do you often end up with a bunch of "post-meeting" browser tabs open?

This Firefox extension automatically closes all Zoom meeting windows after the meeting has been launched.  See below for more about what this means and why it's possible this extension may not work for you out of the box.

## How to Install
Although I have not published this to the Firefox Add-ons Manager, the packaged extension has been signed by Firefox (Firefox won't let you install unsigned extensions).
1. Go to [Releases](https://github.com/mattdoyle/zoom-close-firefox/releases)
2. Click on the XPI file for the latest release.  Firefox should guide you through the installation.  That should be it!
3. Optionally you can choose to download the XPI and manually install it.  To do this, after downloading the file, in Firefox open the Menu and click Add-ons (or type `about:addons` into your location bar)
4. In the top, right-hand corner click the gear icon and select "Install Add-on From File..."
5. Find the XPI file you downloaded and click Open

That's it!

## What is a "Meeting Window" (and why yours may not close)?
What I'm calling "Meeting Windows" are the zoom.us URLs that launch the Zoom meeting, stay open even after the meeting ends, then transition to a post attendee page.  These URLs will normally end in something like /j or /s or /postattendee.

Zoom account owners or admins can set a custom post attendee URL, so this extension may not work for your organization if they are using a custom post attendee URL.  If it doesn't work, examine the URL of your open Zoom tab and proceed to customizing the behavior of this extension.

## Customization
By opening the Extensions page in Firefox and clicking into the Preferences section for this extension you can make the following customizations:
* **Custom URL regex:** if you want or need to fine-tune the URLs that do get closed, you can specify your own regular expression here.
* **Delay before closing:** by default the extension will wait 3 seconds before closing any meeting windows in order to give your computer time to open Zoom.  If you find that the Zoom tab is getting closed before the meeting is launched you can increase this value.

Don't forget to hit Save!  Note that the Reset Defaults button will update the fields to their defaults but will not save them; you'll still need to hit Save.

## Chrome Extension (give credit where credit is due)
This project is based off the extension for Google Chrome called [Zoom Closer](https://chrome.google.com/webstore/detail/zoom-closer/appjbedfhcmpknanmbndpojcllfaemal?hl=en) (view the project on GitHub [here](https://github.com/seanstar12/zoom-close)) by seanstar12.  If Chrome is your default browser I highly suggest you head over to the Chrome store and install it.
