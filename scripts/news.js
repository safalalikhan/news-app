// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


let news = JSON.parse(localStorage.getItem("news"));
// console.log(news);
let input = document.getElementById("search_input");
document.getElementById("search").addEventListener("click", (event) => {
  let q = input.value;
  // console.log(q);
  localStorage.setItem("q", JSON.stringify(q));
  window.location.href = "search.html";
//   getData(q);
});

let details = document.getElementById("detailed_news");
details.innerHTML = null;

let box = document.createElement("div");
box.class = "news";
let image = document.createElement("img");
let title = document.createElement("h3");
let desc = document.createElement("p");
image.src = news.urlToImage;
title.innerText = news.title;
desc.innerText = news.description;
box.append(image, title, desc);
details.append(box);

// console.log(el.title,el.description);
