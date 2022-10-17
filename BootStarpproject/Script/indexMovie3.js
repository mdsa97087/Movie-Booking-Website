
// https://api.themoviedb.org/3/trending/all/day?api_key=a088cabe364bf83bd966dc97c3933566

async function GetData103() {
      try {
            // let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=a088cabe364bf83bd966dc97c3933566`);
            let res = await fetch(`https://www.omdbapi.com/?apikey=babf55&t=Bullet Train`);
            let data = await res.json();
            console.log("data:", data);
            appendMoves103(data);
      } catch (err) {
            console.log(err);
      }
}
GetData103()

function appendMoves103(data) {
      let movies103 = document.getElementById("apidiv1003");
      movies103.innerHTML = null;
      let p103 = document.createElement("h4");
      p103.innerText =`${data.Title}`;
      p103.setAttribute("id", "h4titlecart")
      let img103 = document.createElement("img");
      img103.src = data.Poster;
      let btn3 = document.createElement("button");
      btn3.setAttribute("class","book_now");
      btn3.innerText = "Book Tickets";
      btn3.addEventListener("click", function () {
            localStorage.setItem("movie", JSON.stringify(data));
            window.location.href = "Cart.html";
      });
      movies103.append(img103, p103,btn3);
}
