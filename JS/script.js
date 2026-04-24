let image_cards = document.querySelectorAll(".image-container");//Click
let modal_container = document.querySelectorAll(".modal-container");//Opacity:1
let modal = document.querySelectorAll(".box");//Adicionar uma classe
let iconeEncerrar = document.querySelectorAll(".close");//Encerrar o modal
let closeButton = document.querySelectorAll(".closeModal");//Encerrar o modal pelo botão
let inputs = document.querySelectorAll(".input");//Inputs do formulário
let inputErrorMessage = document.querySelectorAll(".errorMessage");//Mensagens de erro dos inputs
let emailErrorMessage = document.querySelector(".errorEmail");//Verificação do email
let errorIcones = document.querySelectorAll(".errorIcons");//Icones de erro de validação
let submitButton = document.querySelector("#submitButton");//Botão de envio dos dados do formulário
let burgerMenu = document.querySelector(".burgerMenu");//Menu hambúrguer
let navbar = document.querySelector(".navbar-sections");//link container que abre ao clicar do burgerMenu
let navbar_links = document.querySelectorAll(".navbar-sections li a");//Links do navbar
let sections = document.querySelectorAll("section");//Secções
let hero = document.querySelector("#hero");//Secção hero

//Efeito de mudança de cor do header
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header")
    header.classList.toggle("scrolling", scrollY > 0)
})
//Efeito de acionamento do modal
function activeButton(index) {
    modal_container[index].style.opacity = "1";
    modal_container[index].classList.add("activeModal")
    modal[index].classList.add("modal");
}
image_cards.forEach(img => {
    img.addEventListener("click", function () {
        document.body.style.overflow = "hidden";
    })
})
//Efeito de encerrar o modal
for (let i = 0; i < iconeEncerrar.length; i++) {
    iconeEncerrar[i].addEventListener("click", function () {
        modal_container[i].classList.remove("activeModal")
        modal[i].classList.remove("modal");
        document.body.style.overflow = "scroll";
        modal_container[i].style.opacity = "0";
    })
}
//Encerrar o modal pelo botão
for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function () {
        modal_container[i].classList.remove("activeModal");
        modal[i].classList.remove("modal");
        document.body.style.overflow = "scroll";
        modal_container[i].style.opacity = "0";
    })
}
//Fechar pelo modal-container
for (let i = 0; i < modal_container.length; i++) {
    modal_container[i].addEventListener("click", function () {
        modal_container[i].classList.remove("activeModal");
        modal[i].classList.remove("modal");
        document.body.style.overflow = "scroll";
        modal_container[i].style.opacity = "0";
    })
}

// FAZENDO A VALIDAÇÃO DO FORMULÁRIO
function checkEmail(email) {
    let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailRegex.test(email);
}
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function validate() {
        if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value && checkEmail(inputs[1])) {
            document.querySelector(".errorEmail").style.display = "none";
            console.log("sem erro no email");
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.remove("error-color");
                inputErrorMessage[i].style.display = "none";
                errorIcones[i].style.opacity = 0;
            }
            submitButton.disabled = false;
        } else {
            if (i == 1) {
                if (checkEmail(inputs[1])) {
                    document.querySelector(".errorEmail").style.display = "block";
                    console.log("erro email");
                } else {
                    document.querySelector(".errorEmail").style.display = "none";
                    console.log("sem erro no email");
                }
            }
            submitButton.disabled = true;
            if (!inputs[i].value) {
                inputs[i].classList.add("error-color");
                inputErrorMessage[i].style.display = "block";
                errorIcones[i].style.opacity = 1;
            } else {
                inputs[i].classList.remove("error-color");
                inputErrorMessage[i].style.display = "none";
                errorIcones[i].style.opacity = 0;
            }
        }

    });

};
submitButton.addEventListener("click", function () {
    submitButton.style.display = "none";
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
        document.querySelector(".answerSubmit").style.display = "grid";
    }
});
// MENU HAMBÚRGUER
burgerMenu.addEventListener("click", function () {
    navbar.classList.toggle("open-navbar");
});
navbar_links.forEach(link => {
    link.addEventListener("click", function () {
        navbar.classList.remove("open-navbar")
    })
})

// EFEITO SCROLL-SPY
window.addEventListener("scroll", function () {
    sections.forEach(section => {
        let id = section.getAttribute("id");
        let top = section.offsetTop - 60;
        let height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            navbar_links.forEach(link => {
                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("activo");
                } else {
                    link.classList.remove("activo");
                }
            })
        } else if (window.scrollY >= hero.offsetTop && window.scrollY < hero.offsetTop + (hero.offsetHeight - 60)) {
            navbar_links.forEach(link => {
                link.classList.remove("activo");
            })
        }
    })
})