'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const sendForm = (id,input,out) => {
        const form = document.getElementById(id),
        inputVal = document.getElementById(input),
        outVal = document.getElementById(out);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            getUSD();

        });
            //Функция запроса на сервер
        const  getUSD = async() => {
            const responce= await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
            const data=await responce.json();
            const result=await data;
         
          let dolar =(result.Valute.USD.Value);     
          if(id=='form2'){
            outVal.value=(inputVal.value/dolar).toFixed(2);
        }else{     
          outVal.value=inputVal.value*dolar;
        }
    }

};
    sendForm('form1','textDolar','textRub');
    sendForm('form2','textRub2','textDolar2');
});








    /*
        select.addEventListener('change', () => {
            const getData = () => {
                return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                    request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
                    request.setRequestHeader('Content-type', 'application/json');
    
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState !== 4) {
                            return;
                        }
                        if (request.status === 200) {
                            const response = JSON.parse(request.responseText);
                            resolve(response);
                        } else {
                            reject();
                        }
                    });
                    request.send();
                });
    
            };
    
    
            const outputData = (data) => {
                data.cars.forEach(item => {
                    if (item.brand === select.value) {
                        const { brand, model, price } = item;
                        output.innerHTML = `Тачка ${brand} ${model} <br>
                    Цена: ${price}$`;
                    }
                });
            }
    
    
            getData()
                .then(outputData)
                .catch(() => output.innerHTML = 'Произошла ошибка');
        });
    */


