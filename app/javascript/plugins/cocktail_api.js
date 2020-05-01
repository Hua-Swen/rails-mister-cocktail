const cocktailApi = () => {
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
        const retrievedInfo = data["drinks"][0]["strInstructions"];
        console.log(retrievedInfo);
        const preparation = document.getElementById('preparation-info');
        preparation.placeholder = retrievedInfo;
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

export { cocktailApi, placeholderConfirm };
