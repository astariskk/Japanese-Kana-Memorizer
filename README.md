# Kana Memorizer

A lightweight browser-based Japanese kana study app for practicing Hiragana and Katakana in a quiz format.

## Overview

Kana Memorizer helps learners review kana characters, romanization, and grouped practice sets with a focused, low-friction interface. It is built as a static HTML/CSS/JavaScript app, so it works without a build step or dependency installation.

The app includes:

- Hiragana and Katakana practice
- Custom symbol selection by category and group
- Fast quiz flow with skip and next controls
- Instant Death mode for higher-risk practice
- Timer tracking and completion summary
- Dark mode toggle
- Active practice table with answer visibility and jump navigation

## Features

### 1. Kana Practice Quiz

The app presents kana symbols one at a time and asks the learner to type the matching romaji answer. The quiz advances automatically when an answer is correct and can be skipped or jumped when needed.

### 2. Selection and Filtering

Users can choose which kana to practice from a settings modal:

- Hiragana Only
- Katakana Only
- Both scripts
- Select individual categories, groups, or whole sections
- Quick actions for selecting all or deselecting all in the active tab
- Drag-select support for faster multi-card selection

### 3. Practice Grouping

The available kana data is organized by:

- Basic vowels
- K, S, T, N, H, M, Y, R, W/N groups
- Dakuon (voiced sounds)
- Handakuon (half-voiced sounds)
- Yōon combinations and related clusters

This makes it easy to study systematically instead of memorizing everything at once.

### 4. Instant Death Mode

Instant Death Mode introduces a higher-pressure learning mode:

- The learner must type the correct romaji for each symbol
- A wrong answer ends the run immediately
- The full result and reference table are shown at the end

This mode is useful for building confidence under stricter recall conditions.

### 5. Timer and Progress Tracking

The quiz includes:

- A 5-minute countdown timer
- Active status badge
- Score counter
- Completion screen showing accuracy and time used
- A reference table showing each current symbol, the answer, and pass/fail status

### 6. Reference Table

The lower section shows an active practice table containing all selected symbols. It includes:

- Symbol
- Romaji answer
- Status indicator
- Click-to-jump behavior for quick review
- A maximum 3-column layout for readability

### 7. Theme Support

The interface includes a light/dark visual mode and a soft pink/rose color palette that matches the Kana theme.

## Project Structure

```text
Japanese Kana Memorizer/
├── app.js
├── Memorizer.html
├── style.css
├── README.md
└── .git/
```

## How to Run

Because this is a static web app, no installation is required.

### Option 1: Open directly

Open `Memorizer.html` in a browser.

### Option 2: Run a local web server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/Memorizer.html
```

## Usage

1. Open the app in a browser.
2. Use the settings button to select kana sets.
3. Choose Hiragana, Katakana, or both.
4. Start the quiz.
5. Type the romanization for each kana.
6. Use Skip, Next, or Give Up as needed.
7. Review the reference table after completion.

## Notes

- This project is designed for learning and review rather than production deployment.
- The app stores all practice data in the browser and runs entirely client-side.
- It is best suited for quick personal study sessions or classroom-style review.

## License

This project is provided as-is for educational use.
