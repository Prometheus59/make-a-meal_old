const axios = require("axios");

const APP_ID = "a97b643c";
const APP_KEY = "0db0cebe43e807c65d019bcab85d8984";

const req_url = `https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=${APP_ID}&app_key=${APP_KEY}`;

//   TODO: - Use the edamam API to get the recipes
//         - Filter recipes by ingredients listed
//         - Return recipes (Ranked by most ingredients matched) -> Just return url for now

const queryRecipes = async () => {
  let recipes = [];
  console.log(`Collecting Data...`);

  axios
    .get(req_url)
    .then((res) => {
      console.log(`Data Collected!`);
    })
    .then((res) => {
      console.log(`Parsing Data...`);
      for (let i = 0; i < res.data.hits.length; i++) {
        recipes.push(res.data.hits[i].recipe);
      }
      console.log(`Data Parsed!`);
    })
    .then((res) => {
      for (let i = 0; i < recipes.length; i++) {
        console.log(recipes[i].label);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

queryRecipes();
