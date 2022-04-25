// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


var allow = localStorage.getItem("amount")||0;

document.querySelector("#wallet").innerText=allow;

const getmovie = JSON.parse(localStorage.getItem('movie')) || [];
console.log(getmovie)
const box=document.createElement("div");
const name=document.createElement("h2");
name.innerText=getmovie.title;
const img= document.createElement('img');
img.src=url;
box.append(name.img);
document.querySelector('#movie').append(box);