let Amount = localStorage.getItem("amount");
document.getElementById("wallet").innerText =
      `Wallet Amount: ₹ ${+Amount}`;

let Ticket = localStorage.getItem("totalseatamout");
document.getElementById("TicketAmount").innerText =
      `Ticket Amount: ₹ ${+Ticket}`;

//  ----------------    date come from localStorage   -----------
let date = JSON.parse(localStorage.getItem("day1"));
date = date.join("")
console.log(date)
document.getElementById("date").innerText = date





let hallname = localStorage.getItem("d");
hallname = hallname.split("\\n")

// ['"Batra Reels Cinemas: New Colony', '11:55 PM', '📱 M-Ticket', '🍿 Food & Beverage"']

remove = [1, 3];
for (var i = remove.length - 1; i >= 0; i--)
      hallname.splice(remove[i], 1);
console.log(hallname)

document.getElementById("hallname").innerText = hallname




function CheckAmount() {
      Ticket = Number(Ticket)
      Amount = Number(Amount)

      if (Ticket <= Amount) {
            console.log("Book")
            window.location.href = "OtpPage.html"

      } else {
            console.log("Amount is less")
            alert("amount is less")
            window.location.href = "wallet.html"
      }
}
