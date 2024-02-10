let rub  = document.getElementById('rub');
let usd  = document.getElementById('usd');

rub.addEventListener('input', ()=>{
    let request = new XMLHttpRequest();

    // request.open(method,url, async, login, password);

    request.open('GET','current.son');
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

            usd.value = rub.value / data.usd
        }
    });
});