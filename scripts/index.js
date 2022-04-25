// Store the wallet amount to your local storage with key "amount"

//const api = "https://www.omdbapi.com/?i=tt3896198&apikey=a10f20b1";

function value(id){
    return document.getElementById(id).value;
  }
  var amount = localStorage.getItem("amount")||0;
      let wallet = document.getElementById("wallet");
      wallet.innerText = amount;
      
  function addMoney(){
      let inp = value("amount");
      amount = Number(amount) + Number(inp)
      //console.log(amount)
      wallet.innerText = amount;
      localStorage.setItem("amount",amount)
  }
  
  