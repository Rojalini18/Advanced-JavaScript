async function apiCall(url) {
  //add api call logic here

  try {
    let res = await fetch(url);
    let data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function appendArticles(articles, main) {
  //add append logic here
  main.innerHTML = null;

  articles.map((elem) => {
    let div = document.createElement("div");
    div.id = "blog";

    let title = document.createElement("p");
    title.innerText = elem.title;
    title.addEventListener("click", () => {
      localStorage.setItem("article", JSON.stringify(elem));
      window.location.href = "blog.html";
    });

    let desc = document.createElement("p");
    desc.innerText = elem.description;

    let img = document.createElement("img");
    img.src = elem.urlToImage;

    div.append(title, desc, img);

    main.append(div);
  });
}

export { apiCall, appendArticles };
