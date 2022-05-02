let append = (data) => {
    let results = document.getElementById("results");
    results.innerHTML = null;
    data.forEach((el) => {
      let box = document.createElement("div");
      box.class = "news";
      let image = document.createElement("img");
      let title = document.createElement("h3");
      let desc = document.createElement("p");
      box.addEventListener("click", function () {
        localStorage.setItem("news", JSON.stringify(el));
        window.location.href = "news.html";
      });
      image.src = el.urlToImage;
      title.innerText = el.title;
      desc.innerText = el.description;
      box.append(image, title, desc);
      results.append(box);
      // console.log(el.title,el.description);
    });
  };

  export default append;