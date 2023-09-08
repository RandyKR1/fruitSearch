const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


// search function
function search(str) {
    const userInput = str.toLowerCase();//making the user input case insensitive and binding to a variable
    let results = [];//creating array for the input results
    for (let fruit of fruits) {
        if (fruit.toLowerCase().includes(userInput)) { //looping over the fruits list to see if the user input matches anything from the list
            results.push(fruit); //if so, we are pushing the fruit to the results array
        }
    }
    return results;
}

// suggestions function
function updateSuggestions(results) {
    suggestions.innerHTML = ''; // clears prior suggestions
    for (let result of results) { // looping over results
        const suggestionItem = document.createElement('li'); //creating a list item for each suggested fruit
        suggestionItem.textContent = result;
        suggestions.appendChild(suggestionItem); //append suggestions to newly created li
    }
}


function searchHandler(e) {
    const inputVal = e.target.value.trim();
    if (inputVal === '' || e.key === 'Enter') { // Check if input is empty or contains only whitespace
        suggestions.innerHTML = ''; // If input is empty or Enter key is pressed, clear the suggestions
    } else {
        const results = search(inputVal);
        updateSuggestions(results);
    }
}


// Event handler for suggestion click
function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent; //finding which suggestion to select with the provided text content
        suggestions.innerHTML = ''; // Clear the suggestions
    }
}


// Add event listeners
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

