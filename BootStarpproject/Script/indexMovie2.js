
// https://api.themoviedb.org/3/trending/all/day?api_key=a088cabe364bf83bd966dc97c3933566

async function GetData102() {
      try {
            // let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=a088cabe364bf83bd966dc97c3933566`);
            let res = await fetch(`https://www.omdbapi.com/?apikey=babf55&t=The Good Doctor`);
            let data = await res.json();
            console.log("data:", data);
            appendMoves102(data);
      } catch (err) {
            console.log(err);
      }
}
GetData102()

function appendMoves102(data) {
      let movies102 = document.getElementById("apidiv1002");
      movies102.innerHTML = null;
      let p102 = document.createElement("h4");
      p102.innerText =`${data.Title}`;
      p102.setAttribute("id", "h4titlecart")
      let img102 = document.createElement("img");
      img102.src = data.Poster;
      let btn2 = document.createElement("button");
      btn2.setAttribute("class","book_now");
      btn2.innerText = "Book Tickets";
      btn2.addEventListener("click", function () {
            localStorage.setItem("movie", JSON.stringify(data));
            window.location.href = "Cart.html";
      });
      movies102.append(img102, p102,btn2);
}
