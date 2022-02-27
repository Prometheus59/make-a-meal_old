const nodeFetch = require("node-fetch");

//   TODO: - Scrape web for recipes with listed ingredients
//         - Filter recipes by ingredients listed
//         - Return recipes (Ranked by most ingredients matched) -> Just return url for now

class fetchData {
    constructor(count, url) {
        // Make count between 1 & 10
        this.count = count < 1 || count > 10 ? 5 : count;
        this.url = url;
        this.result = [];
    }

    // Get popular posts, return results in array
    // First element is title, remainder are posts
    async default(count) {
        try {
            let posts = [];
            const response = await nodeFetch(this.url);
            const json = await response.json();
            posts.push(title);

            for (let x = 0; x < count; x++) {
                // Will need to change this
                posts.push(json.data.children[x].data.title + "\n");
            }
            return posts;
        } catch (error) {
            console.log(error);
        }
    }
}

const queryRecipes = async () => {
    console.log(`Collecting Data...`);

    let recipes = await fetchData("https://www.google.com/search?q=recipes+garlic+lemon+water&oq=recipes+garlic+lemon+water");

    
}