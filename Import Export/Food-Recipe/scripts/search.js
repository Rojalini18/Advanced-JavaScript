const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    let myData = data.meals;
    return myData;
  } catch (err) {
    console.log(err);
  }
};

const append = (data, container) => {
  container.innerHTML = null;
  data.map(({ strMealThumb, strMeal }) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = strMealThumb;

    let title = document.createElement("p");
    title.innerText = strMeal;

    div.append(img, title);
    container.append(div);
  });
};

export { getData, append };
