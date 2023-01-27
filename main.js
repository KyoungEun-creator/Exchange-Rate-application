// two boxes
// drop-down list for each boxes
// bring currency ratio information
// make it change depend on the item from drop-down list
// show output depend on the input number
// show output depend on the item from drop-down list
// show easy way to read number in Korean
// make it doesn't depend on the input-output box

let currencyRatio = {           //객체타입으로 정의
    KRW:{
        KRW:1,
        EUR:0.00075,
        USD:0.00081,
        unit: "원"
    },
    EUR:{
        KRW:1341.09,
        EUR:1,
        USD:1.09,
        unit: "유로"
    },
    USD:{
        KRW:1234.26,
        EUR:0.92,
        USD:1,
        unit: "달러"
    }
}

// console.log(currencyRatio.KRW.unit);
// console.log(currencyRatio['EUR']['unit']);

// if (document.querySelector('.dropdown-content').display=='block') {
//     document.querySelector('.krw').addEventListener('click', function(){
//         document.querySelector('.dropbtn').innerHTML = 'KRW'
//     });
// }

let fromCurrency="Dropdown"

document.querySelectorAll('#from-currency-list a').forEach(
    (menu)=>menu.addEventListener('click', function(){
    document.getElementById('from-button').textContent = this.textContent;
    fromCurrency = this.textContent;
}));