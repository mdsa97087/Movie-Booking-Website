let data = JSON.parse(localStorage.getItem("movie"));
appendMoves(data);
console.log(data);
// console.log(data.Poster)

function appendMoves(el) {
      let img = document.createElement("img");
      img.src = el.Poster;
      img.setAttribute("id", "posterimg");
      document.querySelector("#movie").append(img);
      // ----------           SECEND SECTION          ----------

      let p1 = document.createElement("h1");
      p1.innerText = `Name :- ${el.Title}`;

      let divimg = document.createElement("div");
      divimg.setAttribute("id", "imgdivdil");

      let himg = document.getElementById("h2img");

      let p2 = document.createElement("h2");
      p2.innerText = `  ${el.imdbRating}`;

      divimg.append(himg, p2);

      let p31 = document.createElement("h2");
      p31.innerText = `Language :- ${el.Language}`;
      let p41 = document.createElement("h2");
      p41.innerText = `Released :- ${el.Released}`;
      let p51 = document.createElement("h2");
      p51.innerText = `Runtime :- ${el.Runtime}`;

      let btn = document.createElement("button");
      btn.innerText = "Book Tickets";
      btn.setAttribute("id", "conform_btn");
      btn.addEventListener("click", function () {
            window.location.href = "Booking.html";
      });

      document.querySelector("#titlediv").append(p1, divimg, p31, p41, p51, btn);

      //    ---------------        BACKGROUND IMG CHANGE BY API        --

      document.getElementById("backimg")
      .style.backgroundImage = `url(${data.Poster})`;

      // --------------             DETAILS DIV---------------

      let h1 = document.createElement("h2");
      h1.innerText = `Name :- ${el.Title}`;

      let h5 = document.createElement("h5");
      h5.innerText = `Language :- ${el.Language}`;
      let p3 = document.createElement("p");
      p3.innerText = `Votes :- ${el.imdbVotes}`;

      let p4 = document.createElement("h5");
      p4.innerText = `BoxOffice :- ${el.BoxOffice}`;
      let p5 = document.createElement("p");
      p5.innerText = `Awards :- ${el.Awards}`;
      let p6 = document.createElement("h5");
      p6.innerText = `Released :- ${el.Released}`;
      let p7 = document.createElement("p");
      p7.innerText = `Runtime :- ${el.Runtime}`;

      let p8 = document.createElement("p");
      p8.innerText = `Country :- ${el.Country}`;
      let p9 = document.createElement("p");
      p9.innerText = `Actors :- ${el.Actors}`;
      let p10 = document.createElement("p");
      p10.innerText = `Director :- ${el.Director}`;
      let p11 = document.createElement("p");
      p11.innerText = `Genre :- ${el.Genre}`;

      let p12 = document.createElement("p");
      p12.innerText = `Writer :- ${el.Writer}`;
      let p13 = document.createElement("p");
      p13.innerText = `Plot :- ${el.Plot}`;
      let p14 = document.createElement("p");
      p14.innerText = `Type :- ${el.Type}`;

      document.querySelector("#movie2").append(h1, p7, p14, p3, p4, p5, p6);
      document.querySelector("#movie3").append(h5,p8, p9, p10, p11, p12, p13);
}
