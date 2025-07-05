---
title: "Forged NTLite"
date: 2025-07-05
author: Fernbacher
slug: forged-ntlite
featured: true
---

**Forged Windows 11** is a stripped-down, aggressively optimized Windows 11 24H2 image for gaming and other dedicated PCs. It uses NTLite to remove dozens of built-in apps and features, then runs a post-install script to disable telemetry and system services.

In effect, the system dedicates maximum resources to performance: all unnecessary processes are trimmed away and low-level tweaks (power plan, registry settings, etc.) are applied. For example, the script stops the “Connected User Experiences and Telemetry” service (DiagTrack) and sets the `AllowTelemetry=0` policy to cut off Windows data collection.

These changes are intended for isolated, non-production use — many security protections (UAC, Spectre/Meltdown mitigations, etc.) are disabled.

## Features

- **Massive Debloat**: Removes dozens of built-in Windows apps and services. With fewer applications running, resource consumption drops and overall performance improves. The NTLite preset uninstalls extra software (store apps, OEM utilities, etc.), freeing up disk space and memory. It also eliminates pre-installed telemetry and bloatware.

- **Privacy Hardening**: Disables Windows telemetry and tracking. The post-install script deletes the DiagTrack and dmwappushservice services and applies registry policies (e.g. setting `AllowTelemetry=0`) to turn off diagnostics. Scheduled tasks for app compatibility and feedback are also disabled.

- **Performance Tweaks**: Applies aggressive system tuning. The script disables Spectre/Meltdown CPU mitigations and other latency-introducing features, then "installs" the Ultimate Performance power plan and tweaks NTFS and network settings. Various registry flags (priority separation, NTFS last access, etc.) are set for maximum throughput.

- **UI Customization & Cleanup**: Installs the classic Start menu (Open-Shell) and removes taskbar/search clutter for a lean interface. A custom wallpaper is applied to all users. After all tweaks, the script clears temporary files, event logs, update caches, and Windows component store.

- **Auto-Reboot & Self-Destruct**: When the post-install fixes are complete, the system reboots automatically. The script can remove its own files in the process, so the image boots up in its final state with all changes applied.

## Requirements

- Windows 11 24H2 (x64) installation media  
- **NTLite** (Windows image customization tool)  
- A dedicated or disposable PC/VM for testing (not your daily system)  
- Basic familiarity with Windows installation and PowerShell (advanced user)

## Usage

1. **Create a Custom ISO**:  
   Load a Windows 11 24H2 ISO into NTLite and import the provided `ntlite.xml` preset. Build the customized ISO — this strips out the bloatware and embeds core optimizations.

2. **Integrate Tools**:  
   Mount or extract the new ISO and copy the following files into the image's `C:\Windows\Tools` folder:
   - `MinSudo.exe` (TrustedInstaller launcher)
   - `Forged.png` (wallpaper)
   - `Forge-PostInstall.ps1` (optimization script)

3. **Install Windows**:  
   Boot the target PC from the forged ISO and install Windows 11 normally. Complete initial setup until you reach the first user desktop.

4. **Run the Optimization Script**:  
   Log in as the first user and run `Forge-PostInstall.ps1` as administrator. The script applies all remaining tweaks and then reboots the system. After reboot, your system is in its final "Forged" state.

 This build is **for advanced users only**. You assume all risks — these tweaks disable many security features and updates. Do **not** use on machines that require ongoing security or compatibility.

---

For full details and source code, visit the  
👉 [**fernbacher/Forged-NTLite** on GitHub](https://github.com/fernbacher/Forged-NTLite)
