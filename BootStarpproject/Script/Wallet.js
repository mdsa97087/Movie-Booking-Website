let Amount = localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText = Amount;

function GetMoney() {
  let mon = document.getElementById("amount").value;
  // let Amount=localStorage.getItem("amount")||0;
  let total = Number(Amount) + Number(mon);

  localStorage.setItem("amount", total);
  window.location.reload();
}
