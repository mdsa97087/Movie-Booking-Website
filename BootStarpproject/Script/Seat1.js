var set_1_22 = [
      { id: '`', no: 1, amount: 100 },
      { id: 2, no: 2, amount: 100 },
      { id: 3, no: 3, amount: 100 },
      { id: 4, no: 4, amount: 100 },
      { id: 5, no: 5, amount: 100 },
      { id: 6, no: 6, amount: 100 },
      { id: 7, no: 7, amount: 100 },
      { id: 8, no: 8, amount: 100 },
      { id: 9, no: 9, amount: 100 },
      { id: 0, no: 10, amount: 100 },
      { id: 1, no: 11, amount: 100 },
      { id: 2, no: 12, amount: 100 },
      { id: 3, no: 13, amount: 100 },
      { id: 4, no: 14, amount: 100 },
      { id: 5, no: 15, amount: 100 },
      { id: 6, no: 16, amount: 100 },
      { id: 7, no: 17, amount: 100 },
      { id: 8, no: 18, amount: 100 },
      { id: 9, no: 19, amount: 100 },
      { id: 0, no: 20, amount: 100 },
      { id: 1, no: 21, amount: 100 },
      { id: 2, no: 22, amount: 100 },
];

str = ``;
set_1_22.forEach(function (value, index) {
      str =
            str +
            `
            <div class='col-xl-1' for='${value.id}#${value.no}#${value.amount}'
            onclick='myfunc(this)'>${value.no}</div>`;
});
// console.log(str);

document.getElementById("seatputdiv1").innerHTML = str;

var arr = [];
var arr1 = [];
var arr2 = [];


function myfunc(myvar) {
      
      let ans = myvar.attributes.for.value;
      // console.log(ans[0]);

      let ans1 = ans.split("#");
      // console.log(ans1[0]);
      // console.log(ans1[2])

      let position = arr.indexOf(ans[0]);
      console.log("position", position);
      console.log("arr1", arr1);

      if (position == -1) {
            arr.push(ans1[0]);            //    for Id
            arr1.push(ans1[1]);            //  for ticket
            arr2.push(ans1[2]);           //  for Amount
            msg = "Ticket Added";
            document.getElementById("msg").style.color="green"
      } else {
            msg = "Ticket Already Exist";
            document.getElementById("msg").style.color="#f00"
      }
      
     
      document.getElementById("msg").innerHTML = msg;

      final_no = arr1.join(",");
      document.getElementById("no").innerHTML = final_no;

      final_amount = arr2.join("+");
      // console.log(final_amount);
      let total_amount =eval(final_amount); //   for add all amount (eval)
      // console.log(total_amount);

      document.getElementById("amount").innerHTML =total_amount;
      myvar.style.background = "#f00";

      localStorage.setItem("totalseatamout", total_amount);

     
}
