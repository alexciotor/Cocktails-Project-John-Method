import fetchDrinks from './src/fetchDrinks.js'
import singleDrink from './src/displayDrinks.js'
 


const peresentDrink = async() =>{
console.log(('hello there'));
const id = localStorage.getItem('drink')
if(!id){
    window.location.replace('index.html')
}
else{
const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
displayDrink(drink)
}

}
import displayDrink from './src/displaySingleDrink.js';

window.addEventListener('DOMContentLoaded', peresentDrink)