
var set_23_44 = [
      { id: 3, no: 23, amount: 100 },
      { id: 4, no: 24, amount: 100 },
      { id: 5, no: 25, amount: 100 },
      { id: 6, no: 26, amount: 100 },
      { id: 7, no: 27, amount: 100 },
      { id: 8, no: 28, amount: 100 },
      { id: 9, no: 29, amount: 100 },
      { id: 0, no: 30, amount: 100 },
      { id: 1, no: 31, amount: 100 },
      { id: 2, no: 32, amount: 100 },
      { id: 3, no: 33, amount: 100 },
      { id: 4, no: 34, amount: 100 },
      { id: 5, no: 35, amount: 100 },
      { id: 6, no: 36, amount: 100 },
      { id: 7, no: 37, amount: 100 },
      { id: 8, no: 38, amount: 100 },
      { id: 9, no: 39, amount: 100 },
      { id: 0, no: 40, amount: 100 },
      { id: 1, no: 41, amount: 100 },
      { id: 2, no: 42, amount: 100 },
      { id: 3, no: 43, amount: 100 },
      { id: 4, no: 44, amount: 100 },
];


str = ``;
set_23_44.forEach(function (value, index) {
      str = str + `
                  <div class='col-xl-1' for='${value.id}#${value.no}#${value.amount}'
                  onclick='myfunc(this)'>${value.no}</div>`;
});
// console.log(str);

document.getElementById("seatputdiv2").innerHTML = str;
var arrr1 = []
var arr1 = [];
var arr2 = [];
function myfunc(myvar) {
      let ans = myvar.attributes.for.value;
      // console.log(ans);

      let ans1 = ans.split("#");
      // console.log(ans1);

      let position = arrr1.indexOf(ans[0]);
      // console.log(position);

      if (position == -1) {
            arrr1.push(ans1[0])
            arr1.push(ans1[1]);
            arr2.push(ans1[2]);
            msg = "Ticket Added";
            document.getElementById("msg").style.color="green"

      } else {
            msg = "Ticket Already Exist";
            document.getElementById("msg").style.color="red"


      }
      //     console.log(arr2);

      document.getElementById("msg").innerHTML = msg;

      final_no = arr1.join(",");
      document.getElementById("no").innerHTML = final_no;

      final_amount = arr2.join("+");
      console.log(final_amount);
      let total_amount = eval(final_amount); //   for add all amount (eval)
      console.log(total_amount);

      document.getElementById("amount").innerHTML = total_amount;
      myvar.style.background = "#f00";
      localStorage.setItem("totalseatamout", total_amount);

}
