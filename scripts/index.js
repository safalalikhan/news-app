// Use Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import sidebar from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();

import append from "../components/append.js";


let input = document.getElementById("search_input");
document.getElementById("search").addEventListener("click", (event) => {
  let q = input.value;
  // console.log(q);
  localStorage.setItem("q", JSON.stringify(q));
  window.location.href = "search.html";
//   getData(q);
});

let getData = async (q) => {
  try {
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`);
    let data = await res.json();
    // console.log(data.articles);
    append(data.articles);
  } catch (error) {
    console.log("Error Found:", error);
  }
};
// https://masai-mock-api.herokuapp.com/news/top-headlines?country=${c}
// https://masai-mock-api.herokuapp.com/news?q=${q}



let getData2 = async (q) => {
  console.log(q);
  try {
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`
    );
    let data = await res.json();
    // console.log(data.articles);
    append(data.articles);
  } catch (error) {
    console.log("Error Found:", error);
  }
};

getData2("in");
document.getElementById("in").addEventListener("click", () => {
  getData2("in");
});
document.getElementById("us").addEventListener("click", () => {
  getData2("us");
});
document.getElementById("ch").addEventListener("click", () => {
  getData2("ch");
});
document.getElementById("uk").addEventListener("click", () => {
  getData2("uk");
});
document.getElementById("nz").addEventListener("click", () => {
  getData2("nz");
});
