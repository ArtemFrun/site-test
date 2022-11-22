new Swiper('.info-slider',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    //   },
    loop: true,
    speed: 500,
    slidesPerView: 1

})


Fancybox.bind("#gallery a", {
    groupAll : true,
    arrows: false
});

document.getElementById("price-tabs__btn1").click();

document.addEventListener('DOMContentLoaded', function(){
    
    const form = document.getElementById('form');
    const fulname = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');
    const chackbox = document.getElementById('consent');
    var validationForm = true;
    
    
    form.addEventListener('submit', async e => {
        e.preventDefault();
        
        checkInputs();
    
        if(validationForm){
            let formData = new FormData(form);
            console.log(form);
            formData.append('name', fulname.value);
            formData.append('email', email.value);
            formData.append('password', password.value);
            console.log(formData);
    
            let response = await fetch('',{
                method: 'POST',
                body: formData
            }
            );

            if(response.ok)
            {
                let result = await response.json();
                formPreview.innerHTML = '';
                form.reset();
                form.classList.add
            } else {

            }
        } else {
            console.log("not validation");
        }
    });
    
    function checkInputs() {
        const nameValue = fulname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmValue = confirm.value.trim();
        validationForm = true;
    
        if (nameValue === '') {
            setErrorFor(fulname, 'Поле пусте');
            validationForm = false;
        } else {
            setSuccessFor(fulname);
        }
    
        if (emailValue === '') {
            setErrorFor(email, 'Поле пусте');
            validationForm = false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Не вірний формат Email');
            validationForm = false;
        } else {
            setSuccessFor(email);
        }
    
        if (passwordValue === '') {
            setErrorFor(password, 'Поле пусте');
            validationForm = false;
        } else if (!isPassword(passwordValue)) {
            setErrorFor(password, 'Пароль повинен включати бути не менше 8 символів');
            validationForm = false;
        }else {
            setSuccessFor(password);
        }
    
        if (confirmValue === '') {
            setErrorFor(confirm, 'Поле пусте');
            validationForm = false;
        } else if (!isConfirm(confirmValue)) {
            setErrorFor(confirm, 'Недійсний пароль');
            validationForm = false;
        }else if (passwordValue !== confirmValue) {
            setErrorFor(confirm, 'Паролі не збігаються');
            validationForm = false;
        } else {
            setSuccessFor(confirm);
        }
    
        if (chackbox.checked){
            setSuccessFor(chackbox);
        }
        else{
            setErrorFor(chackbox, null);
            validationForm = false;
        }
    }
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'register__form-control error';
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'register__form-control success';
    }
    
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    
    function isPassword(password){  
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    }
    
    function isConfirm(confirm){  
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(confirm);
    }
})


