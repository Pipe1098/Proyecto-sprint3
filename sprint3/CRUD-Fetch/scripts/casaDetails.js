import getDataFetch from "../helpers/getData.js";

//Obtener el id del Casa guardado en el sessionStorage
const idCasaStr = sessionStorage.getItem("CasaDetails")
  ? JSON.parse(sessionStorage.getItem("CasaDetails"))
  : null;

const idCasa = idCasaStr ? parseInt(idCasaStr) : null;

console.log(idCasa);

//Obtener la información de este Casa realizando una petición GET

const urlHouse = `http://localhost:3000/Casas/${idCasa}`;
const title = document.querySelector(".title");
const container = document.querySelector(".main");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const Casa = await getDataFetch(urlHouse);

    title.innerText = `Página de detalles de ${Casa.name}`;
    //2. Insertar la información
    container.innerHTML = `
        <figure class="main__figure">
            <img src="${Casa.image}" alt="${Casa.name}">
        </figure>
        <figure class="main__figures">
        <img src="${Casa.images[0]}" alt="${Casa.images}">
        <img src="${Casa.images[1]}" alt="${Casa.images}">
        <img src="${Casa.images[2]}" alt="${Casa.images}">
        </figure>
        <ol class="main__list">              
            <li>Nombre:  ${Casa.name}</li>
            <li>Precio:  ${Casa.height} </li>
            <li>Nombre:  ${Casa.precio}</li>
            <li>Precio:  ${Casa.comodidades} </li>
            <li>Nombre:  ${Casa.descripcion}</li>
            <li>Precio:  ${Casa.modalidad} </li>
            <li>Nombre:  ${Casa.contacto}</li>
            <li>Precio:  ${Casa.tipo} </li>
            <li>Nombre:  ${Casa.ubicacion}</li>
        </ol>
`;
  } catch (error) {
    console.log(error);
    alert(error);
  }
});