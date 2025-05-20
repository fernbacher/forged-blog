---
title: "How to install Windows using UUPDump"
date: 2024-04-27
author: Anonymous
snippet: "A guide on installing Windows using UUPDump.net, downloading specific ISOs, and keeping your data safe, plus a bonus section on customization."
slug: how-to-install-windows-using-uupdump
featured: false
---

**In this guide, I'll walk you through the process of installing Windows using UUPDump.net, a tool that allows you to download Windows ISO files and their updates directly from Microsoft's servers. I'll also discuss the potential risks of reinstalling Windows and how to safely keep your data on a separate drive. There is a [bonus](https://fernbacher.vercel.app/windows/#bonus) section at the end.**

## What is UUPDump.net?

UUPDump.net is a tool that allows you to download Windows ISO files and their updates directly from Microsoft's servers. It's particularly useful for those who want to install a specific version of Windows or need the latest updates without downloading the entire ISO file.

## Step 1: Visit UUPDump.net or One of the forums

* First, visit [UUPDump.net](https://uupdump.net/) in your web browser.
    1.  This website provides a user-friendly interface to select the Windows version and edition you want to download.
* You can also use [TenForums](https://www.tenforums.com/windows-10-news/) for Windows 10 to see which is the latest public version or insider version with the latest updates and what people are saying about them **or** [ElevenForum](https://www.elevenforum.com/news/) for Windows 11.

## Step 2: Choose Your Windows Version and Edition

* On UUPDump.net, you'll find options to select the Windows version and edition you're interested in. I recommend the **Windows Pro** edition.

## Step 3: Download the ISO builder from UUPDump.net

* After selecting your Windows version and edition, UUPDump.net will prepare the download for you.
    1.  Once you downloaded the archive, extract it and run `uup_download_windows.cmd` **as administrator**.
    2.  This will start the process of building the .iso file you need for the next step.

## Step 4: Create a Bootable USB Drive

Once the download is complete, you'll need to create a bootable USB drive. You can use tools like [Rufus](https://rufus.ie/en/) or [Ventoy](https://ventoy.net/en/index.html). Follow the instructions provided by the tool to create the bootable drive.

## Step 5: Install Windows

* With your bootable USB drive ready, restart your computer and boot from the USB drive in your BIOS.
    1.  Usually using your F2/F8/F12/DEL keys will open bios.
    2.  Choose your bootable USB Drive.
    3.  Follow the on-screen instructions to install Windows; choose **custom** not upgrade.
    4.  Make sure to select the option to install Windows on a separate drive **or** format the drive you already use for Windows along with its other partitions.
    5.  If you want to keep your data safe, such as configuration files, game saves which are not stored in the cloud of the publisher's launcher of your games, even the actual games if you keep them on the same drive as your Windows installation, move them to another drive if possible then put them back where you last had them after you are done installing Windows.
    6.  If you end up with a `windows.old` folder, you can safely delete it.

## Conclusion

* Installing Windows using UUPDump.net is a straightforward process that allows you to download the specific version of Windows you need, along with its updates. By following the steps outlined in this guide, you can safely install Windows and protect your data.

## BONUS

**If you are a gamer or even an average user looking to get rid of Microsoft's horrible default experience which makes your PC cry with the amount of crap it holds down from them, I have the simplest solution so far in customizing your fresh Windows installation: Playbooks.**

* What is a Playbook?
    1.  A Playbook is a small file that contains a set of system modifications. The changes from this Playbook are applied by the open-source [AME Wizard](https://ameliorated.io), a tool that can modify a running Windows system.
* Why should I use a Playbook?
    1.  Playbooks are openly readable, allowing you to check, edit and contribute to all tweaks.
* Which Playbook should I use?
    1.  I personally recommend the [Revision](https://revi.cc) Playbook because of their longevity and experience and I personally use it without a single issue in anything I do.
    2.  There is also [AtlasOS](https://atlasos.net).
* How do I use a Playbook?
    1.  Download the AME Wizard and a Playbook.
    2.  Launch the AME Wizard and drag the Playbook you chose to the dedicated section.
    3.  Follow the displayed steps to disable Windows Defender and other system protections.
    4.  Customize features to pick your preferred browser, and edit further settings.
    5.  Install the Playbook and watch the magic happen. Depending on your system's power, this can take anywhere from 5 to 30 minutes.

Credit to the Revision Docs for the information which I also provided here.
