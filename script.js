const form = document.querySelector(".form");
const button = document.querySelector('#button');
const clear = document.querySelector('#clear');
const userName = document.querySelector('#name');
const userSecondName = document.querySelector('#secondName');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const userAgree = document.querySelector('#agree');



form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: aaarinaklevzhits'
            },
            body: JSON.stringify({
                name: `${userName.value}`,
                secondName: `${userSecondName.value}`,
                phone: `${userPhone.value}`,
                email: `${userEmail.value}`,
                agree: `${userAgree.value}`,
            }),
        })
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            console.log(data);
            let div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = `${userName.value}, Вы успешно прошли регистрацию!`;
            document.body.append(div);
            form.reset();
        })
        .catch((error) => {
            let div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = `${userName.value}, кажется, что-то пошло не так!`;
            document.body.append(div);
        })

});