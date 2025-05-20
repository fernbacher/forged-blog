---
title: "How to Install Frame Generation Mods"
date: 2024-04-24
author: Fernbacher
snippet: "Improve game performance with Frame Generation mods. This guide covers prerequisites, downloads, installation for various mods, and troubleshooting."
slug: how-to-install-frame-generation-mods
featured: false
---

## Introduction

**These mods can significantly improve the performance in games, making them actually playable on low-mid-end specs. This guide will walk you through the basic steps to install Frame Generation mods.**

**Please note that frame generation modding is primarily for DirectX 12 games so make sure to choose that option in-game before installing your mod, unless it's a PureDark mod for specific games or Lossless Scaling.**

**To enable frame generation capabilities in a game, the game must already have frame generation when using LukeFZ mods. Otherwise, you won't gain frame-generation capabilities magically. The only way to achieve this is through PureDark mods if available for the game you're interested in or through Lossless Scaling.**

**You can use [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home) to see which upscalers a game uses.**

1.  **For FSR2FSR3, you need to determine which FSR version a game uses to decide which mod you need.**
2.  **For Uniscaler, you only need at least one of the 3 upscalers (DLSS, FSR, or XESS).**
3.  **For PureDark mods, most of the time, it's about copying and pasting the files into your game folder but please follow the included tutorial files in the Filen drive i provide, they are mostly made by the community using the same mods as you.**
4.  **For OptiScaler/CyberXESS upscaling, you copy the provided files into the game folder and use the in-game menu by pressing the HOME key.**
5.  **For Lossless Scaling, i share the cs.rin.ru method of cracking it, it's an installer made by `MaranBr`, use [these settings](https://imgur.com/6AuocIR) along with LSFG as the selection for frame generation and for the scaling type you can test what looks best for you, if encountering issues go to settings top right and tick start as administrator.**
6.  **For [DLSS Enabler](https://www.nexusmods.com/site/mods/757?tab=description), please use their nexusmods page, it's detailed with games tested, known issues, how to use it and more.**
7.  **Please use the [Troubleshooting](#troubleshooting) section first, if you are still stuck please join my [Discord](https://discord.gg/32evyzmPqY) server.**

## Prerequisites

Before you begin, ensure you have:
* Read through the [Introduction](#introduction)
* The Frame Generation mod files you wish to install listed down below.

## Downloads

I provide everything on my Google Drive, but I also have backups. Please contact me on Discord if the links ever go down.
1. [LukeFZ Mods](https://drive.google.com/drive/folders/1h2Lccfd7GqbxmT5zR7GhLO04WFsTTvGB?usp=sharing) [BACKUP!](https://icedrive.net/s/5j3VvWSwQgSA7WhVh6FGPkVBQXvF)
2. [PureDark Mods](https://drive.google.com/drive/folders/1lZMJGrZ4_rhz7MQ59hCT9FFlASEAEdnZ?usp=sharing) [BACKUP!](https://icedrive.net/s/X4QuFTbW2B6Wa8uXbP1S1QWSAQb5)
3. [Lossless Scaling](https://drive.google.com/drive/folders/1dCzbyP0l520C7ntdxxrJo50Nw-80qMwN?usp=sharing) [BACKUP!](https://icedrive.net/s/vxiahxg4jRfh5GWwQk2uR7T1ARY6)
4. [Intel XESS](https://github.com/intel/xess), an open-source repository from Intel, useful for forcefully updating XESS in a game that has an older version without having to use Optiscaler/Cyberxess.
5. [My backup of Optiscaler/CyberXESS](https://drive.google.com/drive/folders/1hWIGOVUZMZ60FuN0-ZGh7l5EujXSeftz?usp=sharing) [SECOND BACKUP](https://icedrive.net/s/yawRxCBgT4Cb5FtBbBG6BkkS366G) / [Official Github](https://github.com/cdozdil/OptiScaler)

## Installation

1. Open your game folder and copy the mod files where the **`.EXE`** of the game is, usually either in the main folder or the bin folder.
2. Make sure you don't have any mods that modify the game files beside the FSR3 mod. Some mods may work with FSR3 modding, some may not. It's safer to avoid potential conflicts.

## Launching

1. Open your game.
2. The Frame Generation mod should now be active if you've followed the instructions correctly.
3. You should be able to enable frame generation inside the game now, along with the DLSS/FSR/XESS upscaling options.

## Troubleshooting

If you encounter any issues during the installation process, try the following:
* Ensure your game is running on DirectX 12.
* Sometimes even on NVIDIA GPUs you have to run the `EnableSignatureOverride.reg`, so make sure you run it if something doesn't work.
* Ensure you are running the game in **borderless fullscreen**/**fullscreen windowed**.
* If on AMD / Intel GPU, after you launch the game once, the mod will generate a config file. In that config file, set the following options to **true**:
    1.  `fake_nvidia_gpu`
    2.  `fake_nvapi_results`
    3.  `amd_unreal_engine_dlss_workaround`
* If you want to use Uniscaler Preview 7, the `nvngx.dll` provided as a stub is bugged. Use OptiScaler's (formerly known as CyberXESS) `nvngx.dll` or an older preview stub.
* As reported on my server by multiple users, having the graphics option inside of Windows 11 "Optimisations for windowed games" turned on will make the mods not work, make sure you disable that.

Happy gaming!
