---
title: "How to install a custom Windows ISO"
date: 2025-05-20
author: Fernbacher
snippet: "A tutorial on how to properly install a custom Windows ISO."
slug: how-to-install-a-custom-windows-iso
featured: false
---

## Installation

* First off, you need a free drive/partitioned drive in which you can install Windows; usually, your SSD is the first choice.
    * For this tutorial, I will be using XOS by imribiy.

![Windows drive selection screen for XOS installation](assets/img/how-to-install-a-custom-windows-iso/partition.png)

* Once you choose the drive/partition of choice, the installation process will start. Just let it do its thing. Once it's done, it will automatically reboot and take you to creating your Username and Password or connecting with your Microsoft account.

![Windows installation progress screen for XOS](assets/img/how-to-install-a-custom-windows-iso/installation.png)

![Windows account creation screen after XOS installation](assets/img/how-to-install-a-custom-windows-iso/account.png)

* Once all of the above are done, most custom ISOs have a script running at the first boot which takes care of most of the things that your Windows installation needs, including stripping drivers, configuring power plans, the registry, services, and so on. All you need to know: **don't reboot or power off while in this process. It will break everything, and it will either blue screen or fail and end up with half a working operating system. Just wait, as it should be quite fast on modern hardware. It will reboot by itself once it's done, and you should be booted up and seeing your desktop.**

![Post-installation script running with 'Just a moment' screen for XOS](assets/img/how-to-install-a-custom-windows-iso/script.png)

* If you are on older hardware or even on a virtual machine (which are usually slower), you can sometimes see the script in action, which shouldn't scare you. It just means your PC isn't fast enough to finish it in the "Just a moment" phase.

![Post-installation script visible in command prompt during XOS setup on slower hardware](assets/img/how-to-install-a-custom-windows-iso/script2.png)

## Post-installation configuration

* Now that you can actually use your PC, most custom ISOs have a tool/folder on the desktop in which you can do extra things which are for advanced users. I personally wouldn't recommend it unless you are truly desperate for the performance percentage, and so there are only a few simple steps to do:
    * Install drivers with SDIO if necessary (if anything is missing, most of the time they are not).
    * Install **GRAPHICS CARD DRIVER**.
    * XOS installs them automatically, but if not on XOS, you should get [DirectX End User Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=35) and [VCRedistAIO](https://github.com/abbodi1406/vcredist).
    * Here is how I usually install my NVIDIA graphics driver with NVCleanstall:
        *I don't use AMD, but from my knowledge, you should just get the official installation and choose the "minimal" option.*

![NVCleanstall initial screen for NVIDIA driver installation](assets/img/how-to-install-a-custom-windows-iso/nv1.png)

![NVCleanstall component selection screen](assets/img/how-to-install-a-custom-windows-iso/nv2.png)

![NVCleanstall installation options screen showing tweaks](assets/img/how-to-install-a-custom-windows-iso/nv3.png)

* And you are done! You can install your favourite game launcher, your browser, or whatever you want. Everything should be working fine. Have fun.
