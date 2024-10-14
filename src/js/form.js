const areaDigitada = document.querySelectorAll(".area");

const mensagemDeAviso = document.querySelectorAll(".aviso");

areaDigitada.forEach( (area, index) => {
    area.addEventListener('change', () => {
        if (area.value.trim() === "") {
            area.classList.remove("preenchido");
            area.classList.add("naoPreenchido");
            mensagemDeAviso[index].classList.add("ativo");
        } else {
            area.classList.add("preenchido");
            area.classList.remove("naoPreenchido");
            mensagemDeAviso[index].classList.remove("ativo");
        }
    })
})