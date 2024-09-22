# Shopping List Chrome Extension

## Overview

This Chrome extension allows users to create and manage a shopping list by saving items from their current browser tabs. Users can categorize items, preview item names, and organize their list by category.

## Features

- Save the current tab's URL as a shopping list item
- Select a category for each item (Books, Clothes, Shoes, Electronics, Pets, Health)
- Preview item names before saving
- Display saved items with truncated names (50 characters) and their respective categories
- Persist shopping list data across browser sessions
- Delete items from the shopping list
- Display saved items in separate lists based on their category

## Installation

1. Clone this repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to a webpage with an item you want to add to your shopping list.
2. Click the extension icon in your Chrome toolbar.
3. The extension popup will show a preview of the item name.
4. Select a category from the dropdown menu.
5. Click the "Save Item" button to add the item to your list.
6. View your saved items organized by category.
7. To remove an item, click the delete icon next to it.

## Technical Details

- Built using HTML, CSS, and JavaScript
- Uses Chrome Extension APIs to interact with browser tabs
- Implements local storage for data persistence
- Utilizes icon fonts for the delete button

## Development

To modify or extend this extension:

1. Update the HTML in `popup.html` for layout changes.
2. Modify styles in `styles.css` for appearance adjustments.
3. Enhance functionality by editing `script.js`.
4. Update `manifest.json` if adding new permissions or changing extension metadata.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your chosen license here]
