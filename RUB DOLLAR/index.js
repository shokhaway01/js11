let rub  = document.getElementById('rub');
let usd  = document.getElementById('usd');

usd.addEventListener('input', ()=>{
    let request = new XMLHttpRequest();
    request.open("GET","current.json");
    request.setRequestHeader("Content-type","application/json; charset=utf-8");
    request.send();


    request.addEventListener("readystatechange", function(){
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            let price = usd.value * data.usd;
            rub.value = price.toFixed(3);
        }
        else{
            rub.value = "Что-то пошло не так";
        }
    })
})


rub.addEventListener('input', ()=>{
    let request = new XMLHttpRequest();

    // request.open(method,url, async, login, password);

    request.open('GET','current.json');
    request.setRequestHeader("Content-type", 'application/json; charset=utf-8')
    request.send();

    // status  || 404;0;202
    //statusText || ok; not found
    //responseText || текст ответа сервера
    //response тоже самое
    //readyState

    //Практика

    request.addEventListener('readystatechange', () =>{
        if ( request.readyState == 4 && request.status == 200){
            let data = JSON.parse(request.response);
            let price = rub.value / data.usd
            usd.value = price.toFixed(3);
        }else{
            usd.value = "Что-то не так!";
        }
    });
});