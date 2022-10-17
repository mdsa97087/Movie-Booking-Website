
// https://api.themoviedb.org/3/trending/all/day?api_key=a088cabe364bf83bd966dc97c3933566

async function GetData101() {
      try {
            // let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=a088cabe364bf83bd966dc97c3933566`);
            let res = await fetch(`https://www.omdbapi.com/?apikey=babf55&t=Lightyear`);
            let data = await res.json();
            console.log("data:", data);
            appendMoves101(data);
      } catch (err) {
            console.log(err);
      }
}
GetData101()

function appendMoves101(data) {
      let movies101 = document.getElementById("apidiv1001");
      movies101.innerHTML = null;
      let p101 = document.createElement("h4");
      p101.innerText =`${data.Title}`;
      p101.setAttribute("id", "h4titlecart")
      let img101 = document.createElement("img");
      img101.src = data.Poster;
      let btn = document.createElement("button");
      btn.setAttribute("class","book_now");
      btn.innerText = "Book Tickets";
      btn.addEventListener("click", function () {
            localStorage.setItem("movie", JSON.stringify(data));
            window.location.href = "Cart.html";
      });
      movies101.append(img101, p101,btn);
}
