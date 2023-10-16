---
title: test
date: 2023-10-15 11:41:58
tags:
hidden: true
---
```mermaid
flowchart TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]
```