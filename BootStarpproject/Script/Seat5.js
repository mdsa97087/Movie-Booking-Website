var set_89_99 = [
      { id: 9, no: 89, amount: 200 },
      { id: 0, no: 90, amount: 200 },
      { id: 1, no: 91, amount: 200 },
      { id: 2, no: 92, amount: 200 },
      { id: 3, no: 93, amount: 200 },
      { id: 4, no: 94, amount: 200 },
      { id: 5, no: 95, amount: 200 },
      { id: 6, no: 96, amount: 200 },
      { id: 7, no: 97, amount: 200 },
      { id: 8, no: 98, amount: 200 },
      { id: 9, no: 99, amount: 200 },


];



str = ``;
set_89_99.forEach(function (value, index) {
      str = str + `
                  <div class='col-xl-1' for='${value.id}#${value.no}#${value.amount}'
                  onclick='myfunc(this)'>${value.no}</div>`;
});
// console.log(str);

document.getElementById("seatputdiv5").innerHTML = str;
var arrr = []
var arr1 = [];
var arr2 = [];
function myfunc(myvar) {
      let ans = myvar.attributes.for.value;
      // console.log(ans);

      let ans1 = ans.split("#");
      // console.log(ans1);

      let position = arrr.indexOf(ans[0]);
      console.log(position);

      if (position == -1) {
            arrr.push(ans1[0])
            arr1.push(ans1[1]);
            arr2.push(ans1[2]);
            msg = "Ticket Added";
            document.getElementById("msg").style.color = "green"

      } else {
            msg = "Ticket Already Exist";
            document.getElementById("msg").style.color = "red"


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
