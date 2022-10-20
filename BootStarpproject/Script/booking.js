let data = JSON.parse(localStorage.getItem("movie"));
appendMoves(data);
// console.log(data);

function appendMoves(el) {
      let img = document.createElement("img");
      img.src = el.Poster;
      img.setAttribute("id", "posterimg");

      img.addEventListener("click", function () {
            window.location.href = "Cart.html";
      });

      let p1 = document.createElement("h2");
      p1.innerText = `${el.Title}`;

      let p2 = document.createElement("h3");
      p2.innerText = `${el.imdbRating}`;

      let p3 = document.createElement("h3");
      p3.innerText = `${el.Language}`;
      let p4 = document.createElement("h3");
      p4.innerText = `${el.Released}`;
      let p5 = document.createElement("h3");
      p5.innerText = `${el.Runtime}`;

      document.querySelector("#bookingdiv").append(img, p1, p2, p3, p4, p5);

      //    ------------      ANOTHER SECTION ------------------

      let p31 = document.createElement("p");
      p31.innerText = `Votes :- ${el.imdbVotes}`;

      let p41 = document.createElement("h5");
      p41.innerText = `BoxOffice :- ${el.BoxOffice}`;
      let p9 = document.createElement("h4");
      p9.innerText = `Actors :- ${el.Director}`;
      let p12 = document.createElement("h4");
      p12.innerText = `Awards  :- ${el.Awards}`;

      document.querySelector("#bookingdiv2").append(p31, p41, p9, p12);

      //    -------------           DAY DATE YEAR NAME            ---------

      // var today = new Date();
      // var day = today.toLocaleString('default', { weekday: 'long' });
      // day = day.slice(0, 3)
      // // document.write(day);

      // var date = today.getUTCDate();
      // // document.write(date);

      // var month = today.toLocaleString('default', { month: 'long' });
      // month = month.slice(0, 3)
      // // document.write(month);

      //    -------------           DATE DAY & MONTH        -----------------

      var dayNames = ["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "];
      var nextWorkingDay1 = [0, 1, 2, 3, 4, 5, 6];
      var nextWorkingDay2 = [1, 2, 3, 4, 5, 6, 0];
      var nextWorkingDay3 = [2, 3, 4, 5, 6, 0, 1];
      var nextWorkingDay4 = [3, 4, 5, 6, 0, 1, 2];
      var nextWorkingDay5 = [4, 5, 6, 0, 1, 2, 3];
      var nextWorkingDay6 = [5, 6, 0, 1, 2, 3, 4];
      var nextWorkingDay7 = [6, 0, 1, 2, 3, 4, 5];

      var today = new Date();

      var now1 = new Date();
      var day1 = dayNames[nextWorkingDay1[now1.getDay()]];
      var date = today.getUTCDate() + " ";
      var month = today.toLocaleString("default", { month: "long" });
      month = month.slice(0, 3);
      document.querySelector("#dateDay1").append(day1, date, month);

      // ------------USE LOCAL STORAGE--------------

      let day11 = document.getElementById("dateDay1")
      let data11 = [day1, date, month]
      day11.addEventListener("click", function () {
            localStorage.setItem("day1", JSON.stringify(data11))
            day11.style.background = "green"
            day11.style.color = "white"

            console.log(data11)
      })

      var now2 = new Date();
      var day2 = dayNames[nextWorkingDay2[now2.getDay()]];
      var date = today.getUTCDate() + 1 + " ";
      var month = today.toLocaleString("default", { month: "long" });
      month = month.slice(0, 3);
      document.querySelector("#dateDay2").append(day2, date, month);

      // ------------USE LOCAL STORAGE--------------

      let day12 = document.getElementById("dateDay2")
      let data12 = [day2, date, month]
      day12.addEventListener("click", function () {
            localStorage.setItem("day1", JSON.stringify(data12))
            console.log(data12)
            day12.style.background = "green"
            day12.style.color = "white"
      })



      var now3 = new Date();
      var day3 = dayNames[nextWorkingDay3[now3.getDay()]];
      var date = today.getUTCDate() + 2 + " ";
      var month = today.toLocaleString("default", { month: "long" });
      month = month.slice(0, 3);
      document.querySelector("#dateDay3").append(day3, date, month);

      // ------------USE LOCAL STORAGE--------------

      let day13 = document.getElementById("dateDay3")
      let data13 = [day3, date, month]
      day13.addEventListener("click", function () {
            localStorage.setItem("day1", JSON.stringify(data13))
            console.log(data13)
            day13.style.background = "green"
            day13.style.color = "white"
      })

      var now4 = new Date();
      var day4 = dayNames[nextWorkingDay4[now4.getDay()]];
      var date = today.getUTCDate() + 3 + " ";
      var month = today.toLocaleString("default", { month: "long" });
      month = month.slice(0, 3);
      document.querySelector("#dateDay4").append(day4, date, month);

      // ------------USE LOCAL STORAGE--------------

      let day14 = document.getElementById("dateDay4")
      let data14 = [day4, date, month]
      day14.addEventListener("click", function () {
            localStorage.setItem("day1", JSON.stringify(data14))
            console.log(data14)
            day14.style.background = "green"
            day14.style.color = "white"
      })


      var now5 = new Date();
      var day5 = dayNames[nextWorkingDay5[now5.getDay()]];
      var date = today.getUTCDate() + 4 + " ";
      var month = today.toLocaleString("default", { month: "long" });
      month = month.slice(0, 3);
      document.querySelector("#dateDay5").append(day5, date, month);

      // ------------USE LOCAL STORAGE--------------

      let day15 = document.getElementById("dateDay5")
      let data15 = [day5, date, month]
      day15.addEventListener("click", function () {
            localStorage.setItem("day1", JSON.stringify(data15))
            console.log(data15)
            day15.style.background = "green"
            day15.style.color = "white"
      })

      var now6 = new Date();
      var day6 = dayNames[nextWorkingDay6[now6.getDay()]];
      var date = today.getUTCDate() + 5 + " ";
      var month = today.toLocaleString("default", { month: "long" });
      month = month.slice(0, 3);
      document.querySelector("#dateDay6").append(day6, date, month);

      // ------------USE LOCAL STORAGE--------------

      let day16 = document.getElementById("dateDay6")
      let data16 = [day6, date, month]
      day16.addEventListener("click", function () {
            localStorage.setItem("day1", JSON.stringify(data16))
            console.log(data16)
            day16.style.background = "green"
            day16.style.color = "white"
      })



      var now7 = new Date();
      var day7 = dayNames[nextWorkingDay7[now7.getDay()]];
      var date = today.getUTCDate() + 6 + " ";
      var month = today.toLocaleString("default", { month: "long" });
      month = month.slice(0, 3);
      document.querySelector("#dateDay7").append(day7, date, month);

      // ------------USE LOCAL STORAGE--------------

      let day17 = document.getElementById("dateDay7")
      let data17 = [day7, date, month]
      day17.addEventListener("click", function () {
            localStorage.setItem("day1", JSON.stringify(data17))
            console.log(data17)
            day17.style.background = "green"
            day17.style.color = "white"
      })
}



// document.getElementsByClassName("bookbtnonclick")
// .addEventListener("click" , function(){
//       window.location.href="FinalBook.html"
// })
// movies.addEventListener("click", function () {
//       // GoToCart(el,i)
//       localStorage.setItem("movie", JSON.stringify(data));
//       window.location.href = "Cart.html";
// });


let d1 = document.getElementById("d1").innerText;
function clickdata1() {
      console.log(d1)
      localStorage.setItem("d", JSON.stringify(d1))
      let d=document.getElementById("d1")
      d.style.background = "#FBC5C5"
      d.style.color = "red"

}
let d2 = document.getElementById("d2").innerText;
function clickdata2() {
      console.log(d2)
      localStorage.setItem("d", JSON.stringify(d2))
      let d=document.getElementById("d2")
      d.style.background = "#FBC5C5"
      d.style.color = "red"

}
let d3 = document.getElementById("d3").innerText;
function clickdata3() {
      console.log(d3)
      localStorage.setItem("d", JSON.stringify(d3))
      let d=document.getElementById("d3")
      d.style.background = "#FBC5C5"
      d.style.color = "red"

}
let d4 = document.getElementById("d4").innerText;
function clickdata4() {
      console.log(d4)
      localStorage.setItem("d", JSON.stringify(d4))
      let d=document.getElementById("d4")
      d.style.background = "#FBC5C5"
      d.style.color = "red"

}
let d5 = document.getElementById("d5").innerText;
function clickdata5() {
      console.log(d5)
      localStorage.setItem("d", JSON.stringify(d5))
      let d=document.getElementById("d5")
      d.style.background = "#FBC5C5"
      d.style.color = "red"

}
let d6 = document.getElementById("d6").innerText;
function clickdata6() {
      console.log(d6)
      localStorage.setItem("d", JSON.stringify(d6))
      let d=document.getElementById("d6")
      d.style.background = "#FBC5C5"
      d.style.color = "red"

}