---
title: "Linux for Beginners"
date: 2025-05-21
author: Fernbacher
slug: linux-for-beginners
featured: true
snippet: "A simple and direct guide to Linux."
---

## Why Bother with Linux?

So, Linux. Why make the switch? It's open-source, generally more secure, super flexible, and respects your privacy. Many get fed up with the usual suspects. If you're curious about some strong takes on that:

-   [Stallman on Microsoft](https://stallman.org/microsoft.html)
-   [Stallman on Apple](https://stallman.org/apple.html)
-   [Stallman on Google](https://stallman.org/google.html)

Bottom line: Linux lets you control your computer, not the other way around.

## Picking Your First Linux Distro

A "distro" is just a Linux version with a specific setup. Don't overthink it; pick one and dive in!

### Easiest to Jump Into:

-   **[Linux Mint](https://linuxmint.com/)**: Coming from Windows? Start here. The Cinnamon desktop feels very familiar, and it just works.
-   **[Pop!_OS](https://pop.system76.com/)**: Super slick, great for modern PCs, and top-notch for NVIDIA graphics cards. Really well put together.
-   **[Bazzite](https://bazzite.gg/)**: A Fedora-based system built for a "just works" gaming and desktop experience. It includes many gaming tweaks and features, excellent for PCs and handhelds. Uses an immutable model for stability.

### For a More Direct Linux Experience:

-   **[Arch Linux](https://archlinux.org/)**: A flexible, rolling-release distribution providing up-to-date software. Its installation is streamlined by the official `archinstall` script. Arch offers a highly customizable, "build-it-your-way" system.

### Other Solid Choices Worth Knowing:

-   **[Debian](https://www.debian.org/)**: Rock-solid, powers many other distros, and committed to free software. Great for servers and desktops.
-   **[Devuan](https://www.devuan.org/) / [Artix Linux](https://artixlinux.org/)**: Debian/Arch, but without `systemd`, if you prefer to explore alternatives. ([Some thoughts on systemd](https://ebin.city/~werwolf/posts/systemd-sucks/)).

## Custom Kernels

The kernel is Linux's engine. Your distro's default is most usually certainly fine.

-   **[Linux-Zen](https://github.com/zen-kernel/zen-kernel)** (often packaged as **[Liquorix](https://liquorix.net)**): Tuned for desktop & gaming responsiveness.
-   **[XanMod](https://xanmod.org)**: Aims for a very smooth desktop, popular for gaming.
-   **[Linux-CachyOS Kernels](https://wiki.cachyos.org/cachyos-kernel/cachyos-kernel/)**: Highly optimized for performance with advanced schedulers and compiler tweaks.
-   **[Linux-TKG](https://github.com/Frogging-Family/linux-tkg)**: Build your *own* gaming-focused kernel. Very DIY.
-   **[DIY Kernel (Example)](https://youtu.be/NVWVHiLx1sU)**: Outdated video but a good base.

## Key Software You'll Want

Your distro comes with basics. Here are some popular additions:

### Web Browsers
-   **[Firefox](https://www.mozilla.org/firefox/new/)**: Solid, open-source, often pre-installed.
-   **[Zen Browser](https://zen-browser.app/)**: A minimalist, privacy-respecting web browser.
-   **[Brave Browser](https://brave.com/)**: Focuses on privacy with built-in ad-blocking.
-   **[Vivaldi](https://vivaldi.com/)**: Highly customizable with many built-in features.

### Office Suites
-   **[LibreOffice](https://www.libreoffice.org/)**: Powerful, free, and open-source office suite.
-   **[OnlyOffice](https://www.onlyoffice.com/desktop.aspx)**: Excellent suite known for high compatibility with Microsoft Office formats.

### Coding & Text Editing
-   **For powerful, keyboard-driven editing:**
    -   **[Helix](https://helix-editor.com/)**: A modern, modal text editor written in Rust.
    -   **[Neovim](https://neovim.io/)**: A highly extensible, Vim-based text editor.
-   **Simpler GUI options:** Your desktop environment will include one (like Gedit, Kate, Mousepad).

### Gaming
-   **[umu-launch-gum](https://github.com/fernbacher/umu-launch-gum)**: My script launcher with a Terminal User Interface (TUI) for running Windows games on Linux using `umu-run`. Supports custom Proton versions, Gamescope, Gamemode, MangoHud, and includes a game library.
-   **[Steam](https://store.steampowered.com/about/)**: Essential for most PC gamers, with its Proton technology.
-   **[ProtonUp-Qt](https://github.com/DavidoTek/ProtonUp-Qt)**: Easily manage Proton-GE, Proton-TKG and other compatibility tools.

### Utilities
-   **[NoiseTorch](https://github.com/lawl/NoiseTorch)**: Real-time microphone noise suppression.
-   **[Timeshift](https://github.com/teejee2008/timeshift)**: System restore utility. **Use this!** Make snapshots.

## Helpful Resources & Tools

-   **Your Distro's Official Docs & Forums:** Best first stop for specific help!
-   **Key Documentation Hubs:**
    -   The **[Arch Wiki](https://wiki.archlinux.org/)** is incredibly detailed and accurate, often useful even if you're not using Arch Linux.
    -   **[Debian Wiki](https://wiki.debian.org/)**: For Debian systems (and often helpful for Ubuntu/Mint).
    -   **[Ubuntu Community Help Wiki](https://help.ubuntu.com/community)**: For Ubuntu-specific guides.
    -   **[Fedora Docs](https://docs.fedoraproject.org/en-US/docs/)**: Official documentation for Fedora.
-   **News, Tutorials & Communities:**
    -   [It's FOSS](https://itsfoss.com/), [OMG! Linux](https://www.omgubuntu.co.uk/), [9to5Linux](https://9to5linux.com/), [GamingOnLinux](https://www.gamingonlinux.com/).
    -   Reddit: r/linux4noobs, r/linuxquestions, r/linux_gaming, and specific distro subreddits.
-   **[Firefox Profile Maker](https://ffprofile.com)**: Tool for a custom Firefox profile.
-   **AUR Helpers (Arch-based only):** `paru` or `yay` for the Arch User Repository ([What's the AUR?](https://wiki.archlinux.org/title/Arch_User_Repository)).
    -   Recommended: **[paru](https://github.com/Morganamilo/paru)**.
-   **Gamepads:** Most modern controllers (Xbox, PlayStation, etc.) just work. Plug them in or connect via Bluetooth.

## Basic Terminal Commands (Cheat Sheet)

You'll use the terminal. It's powerful. Basics for software:

### Arch (`pacman`)
-   Update System: `sudo pacman -Syu`
-   Install: `sudo pacman -S package_name`
-   Remove: `sudo pacman -Rns package_name`
-   Search: `pacman -Ss search_term`

### Debian/Ubuntu/Mint (`apt`)
-   Update Lists: `sudo apt update`
-   Upgrade: `sudo apt upgrade`
-   Install: `sudo apt install package_name`
-   Remove: `sudo apt remove package_name`
-   Search: `apt search search_term`

### Fedora (`dnf`)
-   Update System: `sudo dnf upgrade --refresh`
-   Install: `sudo dnf install package_name`
-   Remove: `sudo dnf remove package_name`
-   Search: `dnf search search_term`
    *(Note: Bazzite uses `rpm-ostree` for core system updates, but `dnf` is used in toolboxes/containers like `toolbox` or `distrobox`.)*

## FAQs

1.  **Terminal: Mandatory?**
    Not for every click on friendly distros. But to get the most out of Linux and troubleshoot? Yes. Learn basic commands. It's easier than it looks.
2.  **What's a "Desktop Environment" (DE)?**
    Your main graphical interface – how things look and feel (windows, menus, etc.). Common ones: GNOME, KDE Plasma, Cinnamon, XFCE. Distros usually offer choices or a default.
3.  **Try Linux before installing?**
    Yep! Most distros offer a "live session" from the USB. Test it out without touching your hard drive.
4.  **Drivers? Will my stuff work?**
    Mostly, yes. Linux hardware support is great. Things like Wi-Fi, sound, basic graphics usually work instantly. For NVIDIA, distros like Pop!\_OS or Bazzite make it easy. For super new or odd hardware, a quick search: "[your hardware model] Linux" helps.
5.  **Is Linux hard?**
    Different, not necessarily hard. User-friendly distros (Mint, Pop!\_OS, Bazzite) are easy for daily tasks. The "hard" part can come if you want deep customization, but that's optional.
6.  **GNU/Linux – what's the difference?**
    "Linux" is the core (kernel). "GNU" provides many essential tools around it. Together, they form the OS. More here: [GNU Project](https://www.gnu.org/gnu/linux-and-gnu.en.html) & [What is Linux?](https://www.linux.com/what-is-linux/).
7.  **Manual Partitioning?**
    Most installers do this automatically. If you want to do it yourself (e.g., for dual boot), search YouTube: "Calamares manual partition [your distro name]". Example: [Video (placeholder)](https://www.youtube.com/watch?v=lBvps3VwEZs).
8.  **Swap?**
    These days, **ZRAM** is often a smarter choice.
    * **What's ZRAM?** It creates a compressed swap space *directly in your RAM*. Think of it as super-fast, efficient emergency memory.
    * **Why it's good:**
        *  **Much Faster:** Accessing compressed data in RAM is way quicker than reading/writing to a disk. This can make your system feel snappier, especially when you have many applications open.
        *  **SSD Friendly:** It significantly reduces writes to your SSD that traditional swap would cause, which can help prolong your SSD's lifespan.
9.  **Help! Where?**
    First, your distro's official forum/wiki. Then, general Linux spots like the Arch Wiki (it's useful for everyone!), Reddit (r/linux4noobs, r/linuxquestions). Ask clear questions.
10. **Okay, really, which Distro for a newbie?**
    -   **Easy & Familiar:** Linux Mint.
    -   **Modern & Gamer-Friendly (NVIDIA easy mode):** Pop!_OS.
    -   **Gaming Powerhouse (Fedora-based, immutable):** Bazzite.
    -   **If you like to tinker & learn from the start:** Arch Linux (use `archinstall`).
11. **How to extract `.tar` files?**
    -   Usually: `tar -xf your_archive.tar.extension`
    -   Specifics: `.gz` -> `tar -xzvf f.tar.gz` | `.bz2` -> `tar -xjvf f.tar.bz2` | `.xz` -> `tar -xJvf f.tar.xz` | `.zst` -> `tar -I'zstd -d' -xvf f.tar.zst`

---
