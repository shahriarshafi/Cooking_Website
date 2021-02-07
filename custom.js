
const meal = firstLetter =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
    fetch(url)
    .then(res => res.json())
    .then( data => displayFoods(data))
}


const searchBar = document.getElementById("search");
searchBar.addEventListener("click" , function(){
    const searchMeal = document.getElementById("searchMeal").value;
    meal(searchMeal);
})


const displayFoods = foods=>{
    const ul = document.getElementById("allFood");
    let food = foods.meals;
    ul.innerText="";

    food.forEach(foodItems => {
        const foodItemsDiv = document.createElement('div');
        foodItemsDiv.className = "mealArea";
        const foodAbout = `
        <img src=${foodItems.strMealThumb}>
        <h6> ${foodItems.strMeal}  </h6>
        <button onclick="foodDetails(${foodItems.idMeal})"> Details</button>
        `

        foodItemsDiv.innerHTML = foodAbout;
        ul.appendChild(foodItemsDiv);

    });   
}



 const foodDetails = idMeal => {
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
     .then(res => res.json())
     .then (data => {
         singleFoodDetails(data.meals[0])
     })
 }


 const singleFoodDetails = food =>{
     console.log(food);
     const foodItems = document.getElementById("foodies");
     const ul = document.createElement('ul');
     foodItems.innerText="";
     const foodIngreadients = `
     <img src=${food.strMealThumb}>
     <li><b>Ingredients</b></li>
     <li>"${food.strIngredient1}</li>
     <li>"${food.strIngredient2}</li>
     <li>"${food.strIngredient3}</li>
     <li>"${food.strIngredient4}</li>
     <li>"${food.strIngredient5}</li>
     <li>"${food.strIngredient6}</li>
     <li>"${food.strIngredient7}</li>
     <li>"${food.strIngredient8}</li>
     <li>"${food.strIngredient9}</li>
     <li>"${food.strIngredient10}</li> `
     ul.innerHTML = foodIngreadients;
     foodItems.appendChild(ul);
 }