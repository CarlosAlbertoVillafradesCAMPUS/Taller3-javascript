let formularioCampus = document.querySelector("#formularioCampus");
let formularioCamper = document.querySelector("#formularioCamper");
let selectOption = document.querySelector("[name='selectOption']");

let campus = {};

formularioCampus.addEventListener("submit", (e) => {
  e.preventDefault(); //preventDefault sirve para que no me redireccione la propiedad action de nuestro form
  let data = Object.fromEntries(new FormData(e.target)); //este codigo me obtiene todos los datos ingresados por el usuario en el formulario
   data.nombreSede = data.nombreSede.toUpperCase()
  if (data.nombreSede != "") {
    if (Object.entries(campus).length != 0) {
        console.log(Object.entries(campus))
      for (let [val, id] of Object.entries(campus)) {
        if(data.nombreSede === val) {
          alert(`Error!!!!! La sede en ${data.nombreSede} ya ha sido agregado`);
          break
        } else {
          campus[`${data.nombreSede}`] = {
            Direccion: data.direccion,
            Telefono: data.telefono,
            Camper: [],
            Trainer: [],
          };
          listSedes();
          console.log(campus);
          formularioCampus.reset();
        }
      }
    } else {
      campus[`${data.nombreSede}`] = {
        Direccion: data.direccion,
        Telefono: data.telefono,
        Camper: [],
        Trainer: [],
      };
      listSedes();
      console.log(campus);
      formularioCampus.reset();
    }
  } else {
    alert(`Ingrese alguna sede`);
  }
});

let listSedes = () => {
  selectSede = document.querySelector("[name='selectSede']");
  selectSede.innerHTML = null;

  for (let [val, id] of Object.entries(campus)) {
    selectSede.insertAdjacentHTML(
      "beforeend",
      `
        <option value="${val}">${val}</option>`
    );
  }
  if (Object.entries(campus).length != 0) {
    selectOption.removeAttribute("disabled");
  }
};

selectOption.addEventListener("change", (event) => {
  let cont_form = document.querySelector("#cont_form");

  cont_form.innerHTML = "";

  if (event.target.value != "") {
    cont_form.insertAdjacentHTML(
      "beforeend",
      `
        <div id="cont_formulario_camper" class="row gy-4 fs-5 animate__animated animate__slideInUp">
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-75 d-flex flex-column text-center">
                    <label class="mb-1" for="nombre${event.target.value}">Nombre del ${event.target.value}:</label>
                    <input class="ps-2 form-control text-center" type="text" name="nombre${event.target.value}" placeholder="Nombre ${event.target.value}">
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-75 d-flex flex-column text-center">
                    <label class="mb-1" for="telefono${event.target.value}">Telefono del ${event.target.value}:</label>
                    <input class="ps-2 form-control text-center" type="tel" name="telefono${event.target.value}" placeholder="1234567890">
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-75 d-flex flex-column text-center">
                    <label class="mb-1" for="email${event.target.value}">Email del ${event.target.value}:</label>
                    <input class="ps-2 form-control text-center" type="email" name="email${event.target.value}" placeholder="${event.target.value}@example.com">
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-75 d-flex flex-column text-center">
                    <label class="mb-1" for="direccion">Direccion:</label>
                    <input class="ps-2 form-control text-center" type="text" name="direccion" placeholder="cra12 #34-56" > 
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-75 d-flex flex-column text-center">
                    <label class="mb-1" for="team${event.target.value}">Team del ${event.target.value}:</label>
                    <input class="ps-2 form-control text-center" type="number" name="team${event.target.value}" placeholder="Team ${event.target.value}">
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-75 d-flex flex-column text-center">
                    <label class="mb-1" for="salon${event.target.value}">Salon del ${event.target.value}:</label>
                    <select class="ps-2 form-select text-center" name="salon${event.target.value}">
                        <option value="Sputnik">Sputnik</option>
                        <option value="Artemis">Artemis</option>
                        <option value="Apolo">Apolo</option>
                    </select>
                </div>
            </div>
        </div>
        `
    );

    if (event.target.value != "Trainer") {
      let cont_formulario_camper = document.querySelector(
        "#cont_formulario_camper"
      );

      cont_formulario_camper.insertAdjacentHTML(
        "beforeend",
        `
            <div class="col-12 col-lg-4 d-flex justify-content-center ">
                <div class="cont-input w-100 d-flex flex-column text-center">
                    <label class="mb-1" for="horarioClaseCamper">Horario clase del Camper:</label>
                    <input class="ps-2 form-control text-center" type="time" name="horarioClaseCamper" placeholder=""> 
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex justify-content-center ">
                <div class="cont-input w-100 d-flex flex-column text-center">
                    <label class="mb-1" for="horarioInglesCamper">Horario clase Ingles:</label>
                    <input class="ps-2 form-control text-center" type="time" name="horarioInglesCamper" placeholder=""></div>
                </div>
            <div class="col-12 col-lg-4 d-flex justify-content-center ">
                <div class="cont-input w-100 d-flex flex-column text-center">
                    <label class="mb-1" for="horarioSerCamper">Horario clase Ser:</label>
                    <input class="ps-2 form-control text-center" type="time" name="horarioSerCamper" placeholder="">
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-100 d-flex flex-column text-center">
                    <label class="mb-1" for="Nivel">Nivel actual del camper</label>
                    <select class="ps-2 form-select" name="nivel">
                        <option value="">Elegir</option>
                        <option value="Avanzado">Avanzado</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Basico">Basico</option>
                    </select>
                    <div class="contNivel"></div>
                </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center ">
                <div class="cont-input w-100 d-flex flex-column text-center">
                    <label class="mb-1" for="transporte">Medio de transporte</label>
                    <input class="ps-2 form-control text-center" type="text" name="transporte" placeholder="Medio de transporte">
                </div>
            </div>
            <div class="col-12 mt-4 mt-lg-4 pb-4">
                <input class="btn px-5 py-1 fs-5" type="submit" value="Guardar">
            </div>
            `
      );
      let nivel = document.querySelector("[name='nivel']");
      nivel.addEventListener("change", (event) => {
        let contNivel = document.querySelector(".contNivel");
        if (event.target.value != "") {
          contNivel.insertAdjacentHTML(
            "beforeend",
            `
                    <div class="container animate__animated animate__fadeInLeft">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center ">
                                <div class="cont-input w-100 d-flex flex-column text-center">
                                    <label class="mb-1" for="preRequisito">Pre-requisito:</label>
                                    <textarea class="ps-2 form-control" name="preRequisito" cols="30" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center ">
                                <div class="cont-input w-100 d-flex flex-column text-center">
                                    <label class="mb-1" for="tecnologias">A que tecnologia pertenece:</label>
                                    <input class="ps-2 form-control text-center" type="text" name="tecnologias" placeholder="Tecnologia">
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center ">
                                <div class="cont-input w-100 d-flex flex-column text-center">
                                    <label class="mb-1" for="tipoTecnologia">Tipo Tecnologia</label>
                                    <select class="ps-2 form-select" name="tipoTecnologia">
                                        <option value="">Elegir</option>
                                        <option value="Electiva">Electiva</option>
                                        <option value="Obligatoria">Obligatoria</option>
                                    </select>
                                </div>
                            </div>  
                        </div> 
                    </div>
                        `
          );
        }
      });
    } else {
      let cont_formulario_camper = document.querySelector(
        "#cont_formulario_camper"
      );
      cont_formulario_camper.insertAdjacentHTML(
        "beforeend",
        `
            <div class="col-12 d-flex justify-content-center ">
                <div class="cont-input w-50 d-flex flex-column text-center">
                    <label class="mb-1" for="horarioClase${event.target.value}">Horario clase del ${event.target.value}:</label>
                    <input class="ps-2 form-control text-center" type="time" name="horarioClase${event.target.value}" placeholder=""> 
                </div>
            </div>
            <div class="col-12 mt-4 mt-lg-4 pb-4">
                <input class="btn px-5 py-1 fs-5" type="submit" value="Guardar">
            </div>`
      );
    }
  }
});

formularioCamper.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  let sede = data.selectSede;
  let option = data.selectOption;

  if (data.nivel) {
    data.nivel={name: data.nivel, preRequisito:data.preRequisito, tecnologia:data.tecnologias, tipoTecnologia:data.tipoTecnologia};
    delete data.preRequisito
    delete data.tecnologias
    delete data.tipoTecnologia
  }

  delete data.selectSede;
  delete data.selectOption;

  campus[`${sede}`][`${option}`].unshift(data);
  alert(`${option.toUpperCase()} Agregado con exito`)
  console.log(campus);
  formularioCamper.reset();
});
