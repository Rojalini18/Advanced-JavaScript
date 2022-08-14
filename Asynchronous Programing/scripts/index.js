let images = [
  "https://i.pinimg.com/originals/ed/0b/58/ed0b58eeb6225b4ecee5d476e228a28c.jpg",
  "https://i.pinimg.com/originals/b9/4e/9d/b94e9db53640fcf31f3da4063827272d.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ginZG0ZmAWQ9FAnEFqwvCtPViFPILHixAg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxhHxBfixKXf2_ttrqWC_jvmJHrnYlL_iKA&usqp=CAU",
];

let i = 1;
let container = document.getElementById("slideshow");

container.innerHTML = null;
let img = document.createElement("img");
img.src = images[0];
container.append(img);

let id = setInterval(function () {
  if (i == images.length) {
    i = 0;
  }
  let image = images[i];
  container.innerHTML = null;
  let img = document.createElement("img");
  img.src = image;
  container.append(img);
  i++;
}, 2000);

let movieData = [];
function movie(name, date, poster, rating) {
  this.name = name;
  this.releaseDate = date;
  this.poster = poster;
  this.rating = rating;
}

let m1 = new movie(
  "Bhauri",
  "02/01/2021",
  "https://qqcdnpictest.mxplay.com/pic/546a54c073655eb781ed71025fc56464/en/2x3/320x480/test_pic1627981885965.webp",
  8.3
);
movieData.push(m1);

let m2 = new movie(
  "Pushpa",
  "15/10/2021",
  "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00129538-erzxjxflat-portrait.jpg",
  7.2
);
movieData.push(m2);

let m3 = new movie(
  "Talash",
  "12/02/2022",
  "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/74637379.jpg",
  8.1
);
movieData.push(m3);

let m4 = new movie(
  "One Night Stand",
  "23/01/2022",
  "https://qqcdnpictest.mxplay.com/pic/1ff35200a6cbc0a6f4d6b4498fc105a8/en/2x3/320x480/1e11782ae2d92912ba1ce2b0f00eb009_1280x1920.webp",
  7.5
);
movieData.push(m4);

let m5 = new movie(
  "Gangubai",
  "20/07/2018",
  "https://assets.gadgets360cdn.com/pricee/assets/product/202001/Gangubai_Kathiawadi_Movie_Trailer_Release_Date_Cast_Songs_Reviews_Ratings_Ticket_Offers_Online_Booking-250x358_1579263554.jpg",
  8.8
);
movieData.push(m5);

let m6 = new movie(
  "Game of Thrones",
  "13/04/2015",
  "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UY562_CR17,0,380,562_.jpg",
  9.3
);
movieData.push(m6);

let m7 = new movie(
  "Gangubai",
  "25/02/2022",
  "https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_QL75_UY562_CR35,0,380,562_.jpg",
  7.0
);
movieData.push(m7);

let m8 = new movie(
  "Baaghi3",
  "05/03/2022",
  "https://cdn.bollywoodmdb.com/cover/250x267/16444_baaghi-3_cover.jpg",
  9.2
);
movieData.push(m8);

let m9 = new movie(
  "Hasheen",
  "25/12/2021",
  "https://assets.gadgets360cdn.com/pricee/assets/product/202106/Haseen-Dillruba-250_1623669821.jpg",
  8.0
);
movieData.push(m9);

localStorage.setItem("movies", JSON.stringify(movieData));

function showMovies(movieData) {
  document.getElementById("movies").innerHTML = null;
  movieData.map(function (elem) {
    let mainDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.poster;

    let name = document.createElement("h3");
    name.innerText = elem.name;

    let date = document.createElement("p");
    date.innerText = elem.releaseDate;

    let rating = document.createElement("p");
    rating.innerText = elem.rating + "⭐";

    let imgDiv = document.createElement("div");
    imgDiv.append(img);

    let dataDiv = document.createElement("div");
    dataDiv.append(name, date, rating);

    mainDiv.append(imgDiv, dataDiv);
    document.getElementById("movies").append(mainDiv);
  });
}

showMovies(movieData);

document.getElementById("sort-lh").addEventListener("click", function () {
  movieData.sort((a, b) => a.rating - b.rating);
  showMovies(movieData);
});

document.getElementById("sort-hl").addEventListener("click", function () {
  movieData.sort((a, b) => b.rating - a.rating);
  showMovies(movieData);
});
