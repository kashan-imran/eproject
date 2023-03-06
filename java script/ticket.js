// Date Time JS

btn.addEventListener("click", () => {
  let timepicker = document.getElementsByClassName("timepicker")[0].value;
  
  let datepicker = document.getElementById("datepicker").value;
  let wrong = document.getElementById("w2");
  if (timepicker == "" && datepicker == "") {
    // alert("Select Date and Time")
    wrong.style.display = "block";
  } else {
    wrong.style.display = "none";
  }
  localStorage.setItem("Date", datepicker);
  localStorage.setItem("Time", timepicker);

  date.innerHTML = datepicker;
  time.innerHTML = timepicker;
  // console.log(timesave, datepicker)
});

// Pricing JS

// let plus = document.getElementsByClassName('btnplus')[0]
// let minus = document.getElementsByClassName('btnminus')[0]
// let number = document.querySelectorAll('.number')[0]
// let increasenumber = 0

// // 2nd
// let plus1 = document.getElementsByClassName('btnplus')[1]
// let minus1 = document.getElementsByClassName('btnminus')[1]
// let number1 = document.querySelectorAll('.number')[1]
// let increasenumber1 = 0
// // 3rd
// let plus2 = document.getElementsByClassName('btnplus')[2]
// let minus2 = document.getElementsByClassName('btnminus')[2]
// let number2 = document.querySelectorAll('.number')[2]
// let increasenumber2 = 0
// // 4rd
// let plus3 = document.getElementsByClassName('btnplus')[3]
// let minus3 = document.getElementsByClassName('btnminus')[3]
// let number3 = document.querySelectorAll('.number')[3]
// let increasenumber3 = 0
// // 1st
// plus.addEventListener('click',()=>{
//     increasenumber +=1

// number.innerHTML = increasenumber

// })
// minus.addEventListener('click',()=>{
//     increasenumber -=1

//     if(increasenumber <= 0 ){
//         increasenumber =0
//     }

// number.innerHTML = increasenumber

// })

// // 2nd
// plus1.addEventListener('click',()=>{
//     increasenumber1 +=1

// number1.innerHTML = increasenumber1

// })
// minus1.addEventListener('click',()=>{
//     increasenumber1 -=1

//     if(increasenumber1 <= 0 ){
//         increasenumber1 =0
//     }

// number1.innerHTML = increasenumber1

// })

// // 3rd
// plus2.addEventListener('click',()=>{
//     increasenumber2 +=1

// number2.innerHTML = increasenumber2

// })
// minus2.addEventListener('click',()=>{
//     increasenumber2 -=1

//     if(increasenumber2 <= 0 ){
//         increasenumber2 =0
//     }

// number2.innerHTML = increasenumber2

// })
// // 4rth
// plus3.addEventListener('click',()=>{
//     increasenumber3 +=1

// number3.innerHTML = increasenumber3

// })
// minus3.addEventListener('click',()=>{
//     increasenumber3 -=1

//     if(increasenumber3 <= 0 ){
//         increasenumber3 =0
//     }

// number3.innerHTML = increasenumber3

// })

// Price Add

// Price 1

let peopleSub = document.querySelectorAll(".btnminus")[0];
let peopleAdd = document.querySelectorAll(".btnplus")[0];
let quantityNumber = document.querySelectorAll(".item-quantity")[0];
let currentValue = 1;

peopleSub.addEventListener("click", function () {
  currentValue -= 1;

  if (currentValue <= 0) {
    currentValue = 0;
  }

  quantityNumber.value = currentValue;

  localStorage.setItem("People1", currentValue);
});

peopleAdd.addEventListener("click", function () {
  currentValue += 1;
  if (currentValue <= 0) {
    currentValue = 0;
  }
  quantityNumber.value = currentValue;

  localStorage.setItem("People1", currentValue);
});

// Price 2

let peopleSub1 = document.querySelectorAll(".btnminus")[1];
let peopleAdd1 = document.querySelectorAll(".btnplus")[1];
let quantityNumber1 = document.querySelectorAll(".item-quantity")[1];
let currentValue1 = 1;

peopleSub1.addEventListener("click", function () {
  currentValue1 -= 1;

  if (currentValue1 <= 0) {
    currentValue1 = 0;
  }

  quantityNumber1.value = currentValue1;

  localStorage.setItem("People2", currentValue1);
});

peopleAdd1.addEventListener("click", function () {
  currentValue1 += 1;
  if (currentValue1 <= 0) {
    currentValue1 = 0;
  }
  quantityNumber1.value = currentValue1;

  localStorage.setItem("People2", currentValue1);
});

// Price 3

let peopleSub2 = document.querySelectorAll(".btnminus")[2];
let peopleAdd2 = document.querySelectorAll(".btnplus")[2];
let quantityNumber2 = document.querySelectorAll(".item-quantity")[2];
let currentValue2 = 0;

peopleSub2.addEventListener("click", function () {
  currentValue2 -= 1;

  if (currentValue2 <= 0) {
    currentValue2 = 0;
  }

  quantityNumber2.value = currentValue2;

  localStorage.setItem("People3", currentValue2);
});

peopleAdd2.addEventListener("click", function () {
  currentValue2 += 1;
  if (currentValue2 <= 0) {
    currentValue2 = 0;
  }
  quantityNumber2.value = currentValue2;

  localStorage.setItem("People3", currentValue2);
});

// Price 4

let peopleSub3 = document.querySelectorAll(".btnminus")[3];
let peopleAdd3 = document.querySelectorAll(".btnplus")[3];
let quantityNumber3 = document.querySelectorAll(".item-quantity")[3];
let currentValue3 = 1;

peopleSub3.addEventListener("click", function () {
  currentValue3 -= 1;

  if (currentValue3 <= 0) {
    currentValue3 = 0;
  }

  quantityNumber3.value = currentValue3;

  localStorage.setItem("People4", currentValue3);
});

peopleAdd3.addEventListener("click", function () {
  currentValue3 += 1;
  if (currentValue3 <= 0) {
    currentValue3 = 0;
  }
  quantityNumber3.value = currentValue3;

  localStorage.setItem("People4", currentValue3);
});

// Ticket People Quantity 

let addToCart = document.getElementById("addtocart");

let setPeople1 = document.getElementsByClassName("people")[0];
let setPeople2 = document.getElementsByClassName("people")[1];
let setPeople3 = document.getElementsByClassName("people")[2];
let setPeople4 = document.getElementsByClassName("people")[3];
addToCart.addEventListener("click", () => {
  let getPeople1 = localStorage.getItem("People1");
  let getPeople2 = localStorage.getItem("People2");
  let getPeople3 = localStorage.getItem("People3");
  let getPeople4 = localStorage.getItem("People4");
  console.log(getPeople1);
  setPeople1.innerHTML = getPeople1;
  setPeople2.innerHTML = getPeople2;
  setPeople3.innerHTML = getPeople3;
  setPeople4.innerHTML = getPeople4;
  console.log(getPeople1);

//   Price Multiplication 

  let total1 = document.getElementsByClassName("total")[0];
  let total2 = document.getElementsByClassName("total")[1];
  let total3 = document.getElementsByClassName("total")[2];
  let total4 = document.getElementsByClassName("total")[3];

  let price1 = document.getElementsByClassName('price')[0].innerHTML
  let price2 = document.getElementsByClassName('price')[1].innerHTML
  let price3 = document.getElementsByClassName('price')[2].innerHTML
  let price4 = document.getElementsByClassName('price')[3].innerHTML
//   console.log(price1*getPeople1)
  total1.innerHTML = (price1 * getPeople1)
  total2.innerHTML = (price2 * getPeople2)
  total3.innerHTML = (price3 * getPeople3)
  total4.innerHTML = (price4 * getPeople4)

  let totalPrice1 = price1*getPeople1
  let totalPrice2 = price2*getPeople2
  let totalPrice3 = price3*getPeople3
  let totalPrice4 = price4*getPeople4
  localStorage.setItem("totalPrice1",totalPrice1)
  localStorage.setItem("totalPrice2",totalPrice2)
  localStorage.setItem("totalPrice3",totalPrice3)
  localStorage.setItem("totalPrice4",totalPrice4)
});

