const cocktailApi = () => {
  const search = document.getElementById('cocktail-search');
  if(search) {
    search.addEventListener('click', (event) => {
      let cocktailSearch = document.getElementById('cocktail-name');
      // console.log(cocktailSearch.value);
      const searchValue = cocktailSearch.value.replace(' ', '%20');
      // getting url api with subbed in cocktail name
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;
      console.log(url);
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        const retrievedInfo = data["drinks"][0]["strInstructions"];
        const preparation = document.getElementById('preparation-info');
        preparation.placeholder = retrievedInfo;
      });
    });
  };
};

const ingredientApi = () => {
  const search = document.getElementById('cocktail-search');
  if(search) {
    search.addEventListener('click', (event) => {
      let cocktailSearch = document.getElementById('cocktail-name');
      // console.log(cocktailSearch.value);
      const searchValue = cocktailSearch.value.replace(' ', '%20');
      console.log(searchValue);
      // getting url api with subbed in cocktail name
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;
      console.log(url);
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        var number = 1;
        var ingredientKey = "strIngredient";
        var ingredientKeyNumber = `strIngredient${number}`;
        var descriptionKeyNumber = `strMeasure${number}`;
        console.log(ingredientKeyNumber);
        while (data["drinks"][0][ingredientKeyNumber] !== null) {
          var ingredientsDiv = document.getElementById('ingredients-js');
          const retrievedIngredient = data["drinks"][0][ingredientKeyNumber];
          console.log(retrievedIngredient);
          const retrievedDescription = data["drinks"][0][descriptionKeyNumber];
          console.log(retrievedDescription);
          if (retrievedDescription == null) {
            ingredientsDiv.insertAdjacentHTML('beforeend', `<li>${retrievedIngredient}</li>`);
            ingredientsDiv.insertAdjacentHTML('beforeend', `<input id='test' name='${ingredientKeyNumber}' type="hidden" value='${retrievedIngredient}' />`);
            ingredientsDiv.insertAdjacentHTML('beforeend', `<input id='test' name='${descriptionKeyNumber}' type="hidden" value='${retrievedDescription}' />`);
          } else {
            ingredientsDiv.insertAdjacentHTML('beforeend', `<li>${retrievedDescription} of ${retrievedIngredient}</li>`);
            ingredientsDiv.insertAdjacentHTML('beforeend', `<input id='test' name='${ingredientKeyNumber}' type="hidden" value='${retrievedIngredient}' />`);
            ingredientsDiv.insertAdjacentHTML('beforeend', `<input id='test' name='${descriptionKeyNumber}' type="hidden" value='${retrievedDescription}' />`);
          }
          number += 1;
          ingredientKeyNumber = `strIngredient${number}`;
          descriptionKeyNumber = `strMeasure${number}`;
        };
        ingredientsDiv.insertAdjacentHTML('beforeend', `<input id='test' name='cycles' type="hidden" value='${number - 1}' />`);
      });
    });
  };
};

const placeholderConfirm = () => {
  const search = document.querySelector(".text-checkbox");
  if (search) {
    search.addEventListener('change', (event) => {
      if(search.checked) {
        let text = document.getElementById('preparation-info');
        // console.log(text)
        text.value = text.placeholder;
      } else {
        let text = document.getElementById('preparation-info');
        // console.log(text)
        text.value = null;
      }
    });
  }
}

export { cocktailApi, ingredientApi, placeholderConfirm };
