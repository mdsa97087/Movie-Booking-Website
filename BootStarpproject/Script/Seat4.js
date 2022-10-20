
var set_67_88 = [
      { id: 7, no: 67, amount: 150 },
      { id: 8, no: 68, amount: 150 },
      { id: 9, no: 69, amount: 150 },
      { id: 0, no: 70, amount: 150 },
      { id: 1, no: 71, amount: 150 },
      { id: 2, no: 72, amount: 150 },
      { id: 3, no: 73, amount: 150 },
      { id: 4, no: 74, amount: 150 },
      { id: 5, no: 75, amount: 150 },
      { id: 6, no: 76, amount: 150 },
      { id: 7, no: 77, amount: 150 },
      { id: 8, no: 78, amount: 150 },
      { id: 9, no: 79, amount: 150 },
      { id: 0, no: 80, amount: 150 },
      { id: 1, no: 81, amount: 150 },
      { id: 2, no: 82, amount: 150 },
      { id: 3, no: 83, amount: 150 },
      { id: 4, no: 84, amount: 150 },
      { id: 5, no: 85, amount: 150 },
      { id: 6, no: 86, amount: 150 },
      { id: 7, no: 87, amount: 150 },
      { id: 8, no: 88, amount: 150 },
];


str = ``;
set_67_88.forEach(function (value, index) {
      str = str + `
                  <div class='col-xl-1' for='${value.id}#${value.no}#${value.amount}'
                  onclick='myfunc(this)'>${value.no}</div>`;
});
// console.log(str);

document.getElementById("seatputdiv4").innerHTML = str;
var arrr4
var arr1 = [];
var arr2 = [];
function myfunc(myvar) {
      let ans = myvar.attributes.for.value;
      // console.log(ans);

      let ans1 = ans.split("#");
      // console.log(ans1);

      let position = arrr4.indexOf(ans[0]);
      console.log(position);

      if (position == -1) {
            arrr4.push(ans1[0])
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














