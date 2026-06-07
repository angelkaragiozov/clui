# CLUI

**CLUI** stands for **Command Line User Interface**. It is a minimalist terminal application for macOS built for CLI power users who want a cleaner, more organized terminal experience.

CLUI uses the terminal engine behind VS Code, then builds a focused desktop experience around it with a lightweight interface, flexible layout, and practical widgets. The goal is simple: make terminal work feel more ordered, readable, and useful without getting in the way.

## Why CLUI

Traditional terminal workflows are powerful, but they can become visually noisy and fragmented when you are juggling multiple tasks, contexts, and outputs. CLUI is designed to make that experience feel more structured.

It brings together:

- A minimalist terminal-first interface.
- A layout system based on flexible panels and widgets.
- A more ordered workspace for command-line work.
- A lightweight desktop shell built with Tauri.

## What it is

CLUI is a terminal emulator with a UI layer designed around productivity and clarity.

You can think of it as a focused command-line workspace rather than just a plain terminal window. It is meant for developers, terminal-heavy users, and anyone who wants a more intentional way to organize CLI activity.

## Core ideas

- **Terminal-first** — the terminal stays at the center of the experience.
- **Minimalist** — no unnecessary chrome or heavy abstractions.
- **Flexible layout** — useful widgets and panel-based organization.
- **Lightweight** — built with Tauri, with an app size of about 25 MB.
- **Power-user oriented** — made for people who live in the command line.

## Tech stack

- **Framework:** Tauri
- **Platform:** macOS desktop app
- **Terminal engine:** based on the engine used by VS Code
- **Footprint:** approximately 25 MB

## Status

CLUI is currently in active development. The project is focused on building a practical, elegant terminal experience that feels fast, lightweight, and visually ordered.

## Installation

### Homebrew

```bash
brew tap angelkaragiozov/clui
brew install --cask clui
```

### Direct download

Download the latest macOS release from the GitHub Releases page.

## Who it is for

CLUI is built for:

- Developers who work in the terminal every day.
- CLI power users who want a more organized workspace.
- People who prefer minimal tools with clear visual structure.
- macOS users looking for a lightweight terminal companion.

## Vision

The long-term vision for CLUI is to turn the terminal into a more composed workspace: still fast, still text-first, but easier to structure, scan, and use for real daily work.

Instead of replacing the command line, CLUI aims to support it with better layout, better focus, and a calmer interface.
