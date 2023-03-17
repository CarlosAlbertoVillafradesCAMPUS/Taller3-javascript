let formularioCampus = document.querySelector("#formularioCampus");
let formularioCamper = document.querySelector("#formularioCamper");
let selectOption = document.querySelector("[name='selectOption']");

let campus = {};

formularioCampus.addEventListener("submit", (e) =>{
    e.preventDefault(); //preventDefault sirve para que no me redireccione la propiedad action de nuestro form
    let data = Object.fromEntries(new FormData(e.target)); //este codigo me obtiene todos los datos ingresados por el usuario en el formulario

    if(data.nombreSede != ""){
        if(Object.entries(campus).length != 0){
            for(let[val,id] of Object.entries(campus)){
                if(data.nombreSede == val){
                    alert(`La sede en ${data.nombreSede} ya ha sido agregado`)
                }else{
                    campus[`${data.nombreSede}`] = {Direccion: data.direccion, Telefono: data.telefono, Camper:[], Trainer:[]};
                    listSedes()
                    console.log(campus)
                    formularioCampus.reset()
                }
        }
            
        }else{
            campus[`${data.nombreSede}`] = {Direccion:data.direccion, Telefono:data.telefono, Camper:[], Trainer:[]};
            listSedes()
            console.log(campus)
            formularioCampus.reset()
        }
    }else{
        alert(`Ingrese alguna sede`)
    }
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
    <input type="email" name="email${event.target.value}" placeholder="${event.target.value}@example.com"> <br><br>
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
        <label for="Nivel">Nivel actual del camper</label>
        <select name="nivel">
            <option value="">Elegir</option>
            <option value="Avanzado">Avanzado</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Basico">Basico</option>
        </select> <br><br>
        <div class="contNivel" style="margin-left: 20px;""></div>
        <label for="direccion">Direccion:</label>
        <input type="text" name="direccion" placeholder="cra12 #34-56" > <br><br>
        <label for="transporte">Medio de transporte</label>
        <input type="text" name="transporte" placeholder="Medio de transporte"> <br><br>
        <input type="submit" value="Guardar">
        `)
        let nivel = document.querySelector("[name='nivel']");
        nivel.addEventListener('change', (event) => {
            let contNivel = document.querySelector(".contNivel")
            if(event.target.value != ""){
                contNivel.insertAdjacentHTML("beforeend", `
                    <label for="preRequisito">Pre-requisito:</label>
                    <input type="text" name="preRequisito" placeholder="Pre-Requisito"><br><br>
                    <label for="tecnologias">A que tecnologia pertenece:</label>
                    <input type="text" name="tecnologias" placeholder="Tecnologia"><br><br>
                    <select name="tipoTecnologia">
                        <option value="">Elegir</option>
                        <option value="electiva">Electiva</option>
                        <option value="obligatoria">Obligatoria</option>
                    </select><br><br>
                    `)
            }
            })
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