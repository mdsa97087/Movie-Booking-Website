
var set_45_66 = [
      { id: 5, no: 45, amount: 150 },
      { id: 6, no: 46, amount: 150 },
      { id: 7, no: 47, amount: 150 },
      { id: 8, no: 48, amount: 150 },
      { id: 9, no: 49, amount: 150 },
      { id: 0, no: 50, amount: 150 },
      { id: 1, no: 51, amount: 150 },
      { id: 2, no: 52, amount: 150 },
      { id: 3, no: 53, amount: 150 },
      { id: 4, no: 54, amount: 150 },
      { id: 5, no: 55, amount: 150 },
      { id: 6, no: 56, amount: 150 },
      { id: 7, no: 57, amount: 150 },
      { id: 8, no: 58, amount: 150 },
      { id: 9, no: 59, amount: 150 },
      { id: 0, no: 60, amount: 150 },
      { id: 1, no: 61, amount: 150 },
      { id: 2, no: 62, amount: 150 },
      { id: 3, no: 63, amount: 150 },
      { id: 4, no: 64, amount: 150 },
      { id: 5, no: 65, amount: 150 },
      { id: 6, no: 66, amount: 150 },
];


str = ``;
set_45_66.forEach(function (value, index) {
      str = str + `
                  <div class='col-xl-1' for='${value.id}#${value.no}#${value.amount}'
                  onclick='myfunc(this)'>${value.no}</div>`;
});
// console.log(str);

document.getElementById("seatputdiv3").innerHTML = str;
var arrr2 = []
var arr1 = [];
var arr2 = [];
function myfunc(myvar) {
      let ans = myvar.attributes.for.value;
      // console.log(ans);

      let ans1 = ans.split("#");
      // console.log(ans1);

      let position = arrr2.indexOf(ans[0]);
      console.log(position);

      if (position == -1) {
            arrr2.push(ans1[0])
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
