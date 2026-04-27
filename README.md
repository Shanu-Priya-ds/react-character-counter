# Character Counter

A React component that tracks character count, word count, and estimated reading time in real-time.

---

## Components

### `CharacterCounter`
The top-level component. Manages state and passes data down to child components.

**Props:**
| Prop | Type | Required | Description |
|---|---|---|---|
| `minWords` | `number` | No | Minimum word count goal |
| `maxWords` | `number` | No | Maximum word count limit |
| `targetReadingTime` | `number` | No | Target reading time in minutes |

**Usage:**
```tsx
// With all props
<CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />

// Word limits only
<CharacterCounter minWords={10} maxWords={50} />

// No limits — just live stats
<CharacterCounter />
```

---

### `TextInput`
A textarea that fires a callback on every keystroke.

**Props:**
| Prop | Type | Required | Description |
|---|---|---|---|
| `onTextChange` | `(text: string) => void` | Yes | Called on every keystroke with current text |
| `placeholder` | `string` | No | Placeholder text (default: `"Start typing..."`) |
| `initialValue` | `string` | No | Initial text value (default: `""`) |

**Usage:**
```tsx
<TextInput
  onTextChange={(text) => console.log(text)}
  placeholder="Write something..."
/>
```

---

### `StatsDisplay`
Displays character count, word count, reading time, progress bar, and warnings.

**Props:**
| Prop | Type | Required | Description |
|---|---|---|---|
| `stats` | `TextStats` | Yes | `{ characterCount, wordCount, readingTime }` |
| `showReadingTime` | `boolean` | No | Whether to show reading time section |
| `characterCounterProps` | `CharacterCounterProps` | Yes | Passes `minWords`, `maxWords`, `targetReadingTime` |

---

## Features

- **Live stats** — character count, word count, and reading time update on every keystroke
- **Progress bar** — shows how close word count is to `maxWords`
- **Warnings:**
  - Shows `"Too short!"` when word count is below `minWords`
  - Shows `"Word limit exceeded!"` when word count is above `maxWords`
- **Reading time** — calculated at 200 words per minute

---

## Getting Started

```bash
npm install
npm run dev
```

## Reflection

### How did you handle state updates when the text changed?
- CharacterCounter defines handleTextChange and passes it down to TextInput as a prop. TextInput just calls it for every keystroke on the textarea in textInput.
- Character counter handled useState hook for updating the charCount, wordCount and readingTime when the textInput value changes
### What considerations did you make when calculating reading time?
- The average person reads 200 words per minute, so calculated the reading time in minutes `wordCount / 200` 
- rounded the result decimal to two places using toFiexd(2). 
### How did you ensure the UI remained responsive during rapid text input?
- React's useState hook update only the affected components on every key stroke, keeping updates efficient.
### What challenges did you face when implementing the statistics calculations?
- used split method to get the words array, but when you use special character at the end, white space were added as a last item to the array, which miscalculated the word count
- added filter() function to the split method which removes the empty item getting added to the array.
