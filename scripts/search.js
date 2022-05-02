// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


import append from "../components/append.js";

let q = JSON.parse(localStorage.getItem("q"));

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

  getData(q);

  

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
  


  