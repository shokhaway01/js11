let login = document.getElementById("login");
let password = document.getElementById("password");
let button = document.getElementById("button");
let success = document.getElementById("success");
let not_success = document.getElementById("not-success");

button.addEventListener("click", ()=>{
    let request = new XMLHttpRequest;
    request.open("GET", "./state.json");
    request.setRequestHeader("Content-type","application/json; cahrset=utf-8");
    request.send();
    
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.response);
            console.log(data);
            if(login.value == data.username && password.value == data.password){
                alert("Успешно!");
                // success.style.display = 'block';
                // not_success.style.display = 'none';
                
            }else{
                // not_success.style.display = 'block';
                // success.style.display = 'none';
                alert("Неправильный логин или пароль. Попробуйте снова!")
            }
        }else{
            console.log("Запрос не сработал!");
        }
    })
})

