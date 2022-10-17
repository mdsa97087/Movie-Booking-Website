let Amount = localStorage.getItem("amount");
document.getElementById("wallet").innerText = +Amount;

async function GetData() {
      try {
            let search = document.getElementById("searchData").value;

            // let res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=a088cabe364bf83bd966dc97c3933566&s=${search}`);

            let res = await fetch(`https://www.omdbapi.com/?apikey=babf55&t=${search}`);
            let data = await res.json();
            console.log("data:", data);
            console.log(data.Poster)
            console.log(typeof (data.Poster))
            // let result = data;
            // localStorage.setItem("movie", JSON.stringify(data));

            // if (result !== undefined)
            appendMoves(data);

            // }
      } catch (err) {
            console.log(err);
      }
}

function appendMoves(data) {
      let movies = document.getElementById("moviecart");
      movies.innerHTML = null;
      // data.forEach(function (el, i) {
      let div = document.createElement("div");
      div.setAttribute("class", "movie_tab");
      let p = document.createElement("h1");
      p.innerText = data.Title;
      p.setAttribute("id", "h1titlecart")
      let img = document.createElement("img");
      img.src = data.Poster;
      // let btn = document.createElement("button");
      // btn.class = "book_now";
      // btn.innerText = "Book now";
      movies.addEventListener("click", function () {
            // GoToCart(el,i)
            localStorage.setItem("movie", JSON.stringify(data));
            window.location.href = "Cart.html";
      });

      div.append(img, p,);
      movies.append(div);
      // console.log(movies)
      // document.querySelector("#movies").append(div)
      // });
}


















