let formularioCampus = document.querySelector("#formularioCampus");
let formularioCamper = document.querySelector("#formularioCamper");
let selectOption = document.querySelector("[name='selectOption']");
let campus = {};

formularioCampus.addEventListener("submit", (e) =>{
    e.preventDefault(); //preventDefault sirve para que no me redireccione la propiedad action de nuestro form
    let data = Object.fromEntries(new FormData(e.target)); //este codigo me obtiene todos los datos ingresados por el usuario en el formulario
    campus[`${data.nombreSede}`] = {Camper:[], Trainer:[]};
    listSedes()
    formularioCampus.reset()
} )

let listSedes = () => {
    selectSede = document.querySelector("[name='selectSede']");
    selectSede.innerHTML = null;

    for (let [val, id] of Object.entries(campus)){
        selectSede.insertAdjacentHTML("beforeend", `
        <option value="${val}">${val}</option>`)
    }
    if(Object.entries(campus).length != 0){
        selectOption.removeAttribute("disabled")
    }
}

selectOption.addEventListener('change', (event) => {
    let cont_form = document.querySelector("#cont_form")

    cont_form.innerHTML = "";
    cont_form.insertAdjacentHTML("beforeend", `
    <label for="nombre${event.target.value}">Nombre del ${event.target.value}:</label>
    <input type="text" name="nombre${event.target.value}" placeholder="Nombre ${event.target.value}"> <br><br>
    <label for="telefono${event.target.value}">Telefono del ${event.target.value}:</label>
    <input type="tel" name="telefono${event.target.value}" placeholder="1234567890"> <br><br>
    <label for="email${event.target.value}">Email del ${event.target.value}:</label>
    <input type="email" name="email${event.target.value}" placeholder="Email${event.target.value}@****.com"> <br><br>
    <label for="team${event.target.value}">Team del ${event.target.value}:</label>
    <input type="number" name="team${event.target.value}" placeholder="Team ${event.target.value}"> <br><br>
    <label for="salon${event.target.value}">Salon del ${event.target.value}:</label>
    <select name="salon${event.target.value}">
        <option value="Sputnik">Sputnik</option>
        <option value="Artemis">Artemis</option>
        <option value="Apolo">Apolo</option>
    </select><br><br>
    <label for="horarioClase${event.target.value}">Horario clase del ${event.target.value}:</label>
    <input type="time" name="horarioClase${event.target.value}" placeholder=""> <br><br>
    `)

    if(event.target.value === "Camper"){
        cont_form.insertAdjacentHTML("beforeend", `
        <label for="horarioIngles${event.target.value}">Horario clase ingles del ${event.target.value}:</label>
        <input type="time" name="horarioIngles${event.target.value}" placeholder=""> <br><br>
        <label for="horarioSer${event.target.value}">Horario clase ser del ${event.target.value}:</label>
        <input type="time" name="horarioSer${event.target.value}" placeholder=""> <br><br>
        <input type="submit" value="Guardar">
        `)
    }else{
        cont_form.insertAdjacentHTML("beforeend", `
        <input type="submit" value="Guardar">`)
    }
});

formularioCamper.addEventListener("submit", (e) =>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.selectSede;
    let option = data.selectOption
    delete data.selectSede;
    delete data.selectOption;
    campus[`${sede}`][`${option}`].unshift(data);
    console.log(campus);
    formularioCamper.reset()
    });