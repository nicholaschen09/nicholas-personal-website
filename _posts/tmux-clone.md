---
title: 'Building a tmux Clone for Windows in Rust'
listTitle: 'tmux clone'
category: tech
date: '2026-04-14'
author: 'Amaan'
published: false
excerpt: 'A Windows terminal multiplexer written in Rust — ConPTY, panes, and the keyboard input problem.'
---

## What I Built

A more detailed version of this blog is already in the works with screenshots & code snippets. I built a Windows terminal multiplexer from scratch. Think tmux, but for Windows, written in Rust.

Started as a learning project to understand how terminal multiplexers work under the hood. Wanted to know how tmux actually manages multiple terminals in one window.

This blog documents what I learned building it, the challenges I faced, and why keyboard input on Windows is surprisingly difficult.

## Why Windows is Different

On Unix, PTYs (pseudo-terminals) are straightforward. On Windows, you need ConPTY - the Console Pseudo Terminal.

ConPTY is Microsoft solution for terminal emulation. It handles the complexity of translating between Windows console API and modern terminal expectations.

- CreatePseudoConsole() creates the PTY
- Two pipes: input (write to shell) and output (read from shell)
- CreateProcessW with STARTF_USESTDHANDLES spawns the shell

_How ConPTY connects your app to the shell_

The key insight: Windows terminal apps need to create a pseudo console, then spawn a process where stdin/stdout connect to that console.

On Unix its just open(/dev/pts/X). On Windows its... significantly more.

## The Core Architecture

Heres how the multiplexer works:

_Data flow through the multiplexer_

tty.rs wraps the ConPTY API. Creates the pseudo console and handles spawning cmd.exe or PowerShell.

pane.rs represents one terminal. Holds the TTY, title, and state for a single shell session.

window.rs manages multiple panes. Tracks layout and which pane is active.

ui.rs renders everything to the terminal. Draws borders, status bar, and terminal output.

main.rs ties it all together with the event loop.

### Key Challenges

Building this taught me several things about Windows terminal programming:

- ConPTY API is well-documented but tricky to use correctly
- Rust windows crate is excellent but verbose
- Terminal rendering is complex (ANSI escape codes, cursor positioning)
- Input handling is the hardest part on Windows

## The Keyboard Input Problem

The biggest challenge: getting keyboard input to work.

I tried multiple approaches:

1. crossterm event reading - events never came through
2. Direct stdin read - characters went to the shell instead of my code
3. Windows Console API - had various API issues

## Why This Happens

The fundamental issue is that terminal input is designed to go to the shell, not to your application.

Without raw mode interception at the right level, keys either go to cmd.exe or get lost in the ConPTY layer.

## Alternatives

**Windows Terminal:** Microsofts official solution. Works great, has tabs and split panes.

**WezTerm:** Fast, cross-platform terminal with built-in multiplexing.

**Tabby:** Electron-based with GUI, easier to extend.

_If you need a working solution today, use these instead_

## What I Learned

Even though its not finished, this project taught me a ton about systems programming on Windows.

The core terminal functionality works - spawning shells, reading output, rendering to screen. Its just the key input that blockers completion.

Sometimes the most valuable outcome is understanding WHY something is hard, not finishing it.

## References

- https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/
- https://github.com/microsoft/terminal
- https://crates.io/crates/windows
- https://docs.rs/crossterm/latest/crossterm/

Note: If you want to build this, Id recommend using a different approach like leveraging existing terminal emulation crates or building in a language with better Windows terminal support. See [portable-pty crate](https://crates.io/crates/portable-pty).
