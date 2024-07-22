# ✍️ Textarea Character Counter

This project is a character and word counter application for a textarea input. It provides real-time updates on the number of characters and words, and shows the remaining character count for Twitter and Facebook.

## 📋 Project Information

### HTML

The HTML structure includes:

- A textarea element with the class `textarea`.
- Elements to display the number of characters, words, and the remaining characters for Twitter and Facebook.

### 🖥️ JavaScript

#### Features:

- **Script Tag Check**: If the input contains `<script>`, an alert is triggered, and the tag is removed from the textarea value.
- **Word Count**: Updates the word count in real-time.
- **Character Count**: Updates the character count in real-time.
- **Twitter Character Limit**: Calculates and displays the remaining characters for Twitter (280 characters max). Adds a visual indicator if the limit is exceeded.
- **Facebook Character Limit**: Calculates and displays the remaining characters for Facebook (2200 characters max). Adds a visual indicator if the limit is exceeded.
