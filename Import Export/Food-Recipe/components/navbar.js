const navbar = () => {
  return `<div id="navbar">
    <h1><a href="index.html">TheMealDB</a></h1>

    <div id="options">
      <input type="text" id="search" placeholder="Search recipe">
      <button id="searchbtn">Search recipe</button>
      <h3><a href="recipeDay.html">Recipe of the day</a></h3>
      <h3><a href="random.html">Random</a></h3>
    </div>
  </div>`;
};

export default navbar;
