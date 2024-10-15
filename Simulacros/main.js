import Serie from "./serie.js";

const elementoDivSeries = document.getElementById("series");

async function obtenerDatosApi(api) {
    let respuesta = await fetch(api);
    let json = await respuesta.json();
    let serie = Serie.createFromJsonString(json);
    let nodoSerie = serie.createHtmlElement();
    elementoDivSeries.appendChild(nodoSerie);

}

window.onload = () => {
    for (let i = 0; i < 6; i++) {
        let url = `https://api.tvmaze.com/shows/${i + 1}`;
        obtenerDatosApi(url);
    }
}

function mostrarPaginaSiguiente(){
    for (let i = 0; i < 6; i++) {
        let url = `https://api.tvmaze.com/shows/${i + 1}`;
        obtenerDatosApi(url);
    }
}