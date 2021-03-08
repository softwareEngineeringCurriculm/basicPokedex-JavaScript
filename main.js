//PART I D.O.M. Manipulation

// Select the search button pokeball by its HTML Id Attribute
const searchBtn = document.getElementById('search-btn'); // search button pokeball

// Select the search field input by its HTML Id Attribute
const inputField = document.getElementById('name-input'); // search field input

// Select the pokemon name screen by it's HTML Id Attribute
const nameScreen = document.getElementById('name-screen'); //pokemon name-screen

// Select the pokemon image screen by it's HTML Id Attribute
const imageScreen = document.getElementById('main-screen'); // pokemon image screen

// Select the height and weight screen by it's HTML Id Attribute
const aboutScreen = document.getElementById('about-screen'); // about-text screen

// Select the type screen by it's HTML Id Attribute
const typeScreen = document.getElementById('type-screen'); // pokemon type screen

// Select the pokemon id number screen by it's HTML Id Attribute
const idScreen = document.getElementById('id-screen'); // pokemon id number screen

//PART II Fetching the Pokemon Data from the PokeAPI

//Create a function that uses fetch api to call the poke api and search for a specific pokemon and then add the poke api data to the 
//appropriate HTML elements from PART I

const getPokemonData = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      let id = ('00' + data.id).slice(-3);
      imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
      nameScreen.innerHTML = data.name;
      typeScreen.innerHTML = data.types[0].type.name;
      idScreen.innerHTML = `#${data.id}`;
      aboutScreen.innerHTML = `Height: ${data.height * 10}cm Weight: ${
        data.weight / 10
      }kg`;
      inputField.value = '';
    })
};

//PART III Triggering the Search Functionality

//Create an event listner that attaches to the search button poke ball and activates when a user 'clicks' on it!
//The event listener should call our pokemon data function from PART II

searchBtn.addEventListener('click', () => getPokemonData(inputField.value));


// <!-- Copyright (c) 2021 by oryam (https://codepen.io/oryamne/pen/vYKXbgZ)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. -->

