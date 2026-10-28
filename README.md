# Kana Memorizer
A lightweight, static browser app for practicing Hiragana and Katakana through a kana-to-romaji quiz. No build step or dependencies required — open `Memorizer.html` in a browser, or serve it locally (e.g. `python -m http.server 8000`).

## Features

- **Kana practice** — type the romaji for each kana symbol; correct answers advance automatically
- **Enter mode** — press Enter to submit each answer; wrong answers deduct time from the timer
- **Instant Death mode** — a wrong answer ends the run immediately
- **Script & grouping selection** — choose Hiragana, Katakana, or both; filter by category/group, or click and hold to select multiple groups or individual cards.
- **Timer & score** — configurable countdown (default 5 min), score counter, accuracy summary on completion
- **Reference table** — all active symbols with answers and pass/fail status; click a row to jump to it
- **Dark mode** — light/dark theme toggle

## Usage

1. Open `Memorizer.html` in a browser.
2. Open **Settings** to select kana sets (Hiragana/Katakana/Both, categories, groups, or individual cards).
3. Click **Save & Start Quiz**.
4. Type the romanization for each kana.
5. Use **Skip**, **Next**, or **Give Up & Reveal Answers** as needed.
6. Review the reference table after completion.

The mode toggle in the header cycles between Normal, Enter mode, and Instant Death mode.

## Notes

- Entirely client-side; practice data stays in the browser.
- Best suited for quick personal study or classroom review.
- Provided as-is for educational use.
- for quick personal study sessions or classroom-style review.
