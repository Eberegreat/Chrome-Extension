// Get references to the necessary HTML elements
const categorySelect = document.getElementById('category');
const itemNameInput = document.getElementById('itemName');
const saveItemButton = document.getElementById('saveItem');
const shoppingListDiv = document.getElementById('shoppingList');

// Object to store the shopping list items by category
const shoppingList = {
  Books: [],
  Clothes: [],
  Shoes: [],
  Electronics: [],
  Pets: [],
  Health: []
};

// Load the shopping list from local storage
loadShoppingList();
displayShoppingList();

// Add event listener to the current tab's URL change
chrome.tabs.onUpdated.addListener(updateItemNamePreview);

// Add event listener to the "Save Item" button
saveItemButton.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const itemUrl = tab.url;
  const itemName = tab.title;
  const category = categorySelect.value;

  addItemToList(category, itemUrl, itemName);
  saveShoppingList();
  displayShoppingList();
});

// Function to update the item name preview
async function updateItemNamePreview() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  itemNameInput.value = truncateString(tab.title, 50);
}

// Function to add an item to the shopping list
function addItemToList(category, url, name) {
  shoppingList[category].push({ url, name });
}

// Function to display the shopping list
function displayShoppingList() {
  shoppingListDiv.innerHTML = '';

  for (const category in shoppingList) {
    const categorySection = document.createElement('div');
    categorySection.classList.add('category-section');

    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category;
    categorySection.appendChild(categoryTitle);

    const categoryItems = document.createElement('div');
    categoryItems.classList.add('category-items');

    for (const { url, name } of shoppingList[category]) {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const itemLink = document.createElement('a');
      itemLink.href = url;
      itemLink.target = '_blank';
      itemLink.textContent = truncateString(name, 50);

      const deleteButton = document.createElement('span');
      deleteButton.classList.add('delete-button');
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      deleteButton.addEventListener('click', () => deleteItem(category, url));

      itemDiv.appendChild(itemLink);
      itemDiv.appendChild(deleteButton);
      categoryItems.appendChild(itemDiv);
    }

    categorySection.appendChild(categoryItems);
    shoppingListDiv.appendChild(categorySection);
  }
}

// Function to truncate a string to a maximum length
function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 3) + '...';
}

// Function to delete an item from the shopping list
function deleteItem(category, url) {
  const index = shoppingList[category].findIndex((item) => item.url === url);
  if (index !== -1) {
    shoppingList[category].splice(index, 1);
    saveShoppingList();
    displayShoppingList();
  }
}

// Function to load the shopping list from local storage
function loadShoppingList() {
  const storedList = JSON.parse(localStorage.getItem('shoppingList'));
  if (storedList) {
    Object.assign(shoppingList, storedList);
  }
}

// Function to save the shopping list to local storage
function saveShoppingList() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}