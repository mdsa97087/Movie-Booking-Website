let data = JSON.parse(localStorage.getItem("movie"));
appendMoves(data);
console.log(data);

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

      document.querySelector("#bookingdiv")
            .append(img, p1, p2, p3, p4, p5);

      //    ------------      ANOTHER SECTION ------------------

      let p31 = document.createElement("p");
      p31.innerText = `Votes :- ${el.imdbVotes}`;

      let p41 = document.createElement("h5");
      p41.innerText = `BoxOffice :- ${el.BoxOffice}`;
      let p9 = document.createElement("h4");
      p9.innerText = `Actors :- ${el.Director}`;
      let p12 = document.createElement("h4");
      p12.innerText = `Awards  :- ${el.Awards}`;

      document.querySelector("#bookingdiv2")
            .append(p31, p41, p9, p12,);


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


      var dayNames = ["Sun", "Mon", "Tue", "Wed",
            "Thu", "Fri", "Sat"];
      var nextWorkingDay1 = [0, 1, 2, 3, 4, 5, 6];
      var nextWorkingDay2 = [1, 2, 3, 4, 5, 6, 0];
      var nextWorkingDay3 = [2, 3, 4, 5, 6, 0, 1];
      var nextWorkingDay4 = [3, 4, 5, 6, 0, 1, 2];
      var nextWorkingDay5 = [4, 5, 6, 0, 1, 2, 3];
      var nextWorkingDay6 = [5, 6, 0, 1, 2, 3, 4];
      var nextWorkingDay7 = [6, 0, 1, 2, 3, 4, 5];

      var today = new Date();


      var now1 = new Date();
      var day1 = (dayNames[nextWorkingDay1[now1.getDay()]]);
      var date = today.getUTCDate() + 1;
      var month = today.toLocaleString('default', { month: 'long' });
      month = month.slice(0, 3)
      document.querySelector("#dateDay1")
            .append(day1, date, month);


      var now2 = new Date();
      var day2 = (dayNames[nextWorkingDay2[now2.getDay()]]);
      var date = today.getUTCDate() + 2;
      var month = today.toLocaleString('default', { month: 'long' });
      month = month.slice(0, 3)
      document.querySelector("#dateDay2")
            .append(day2, date, month);

      var now3 = new Date();
      var day3 = (dayNames[nextWorkingDay3[now3.getDay()]]);
      var date = today.getUTCDate() + 3;
      var month = today.toLocaleString('default', { month: 'long' });
      month = month.slice(0, 3)
      document.querySelector("#dateDay3")
            .append(day3, date, month);

      var now4 = new Date();
      var day4 = (dayNames[nextWorkingDay4[now4.getDay()]]);
      var date = today.getUTCDate() + 4;
      var month = today.toLocaleString('default', { month: 'long' });
      month = month.slice(0, 3)
      document.querySelector("#dateDay4")
            .append(day4, date, month);

      var now5 = new Date();
      var day5 = (dayNames[nextWorkingDay5[now5.getDay()]]);
      var date = today.getUTCDate() + 5;
      var month = today.toLocaleString('default', { month: 'long' });
      month = month.slice(0, 3)
      document.querySelector("#dateDay5")
            .append(day5, date, month);

      var now6 = new Date();
      var day6 = (dayNames[nextWorkingDay6[now6.getDay()]]);
      var date = today.getUTCDate() + 6;
      var month = today.toLocaleString('default', { month: 'long' });
      month = month.slice(0, 3)
      document.querySelector("#dateDay6")
            .append(day6, date, month);

// var pp=document.createElement("p")
// pp.setAttribute("id","pp")

      var now7 = new Date();
      var day7 = (dayNames[nextWorkingDay7[now7.getDay()]]);
      var date = today.getUTCDate() + 7;
      var month = today.toLocaleString('default', { month: 'long' });
      month = month.slice(0, 3)
      document.querySelector("#dateDay7")
      .append(day7, date, month);






}


