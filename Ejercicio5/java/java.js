 
class ResiduoRPBI {
    constructor(area, tipo, peso) {
        this.area = area;
        this.tipo = tipo;
        this.peso = peso;
    }
}
 
// Recuperar residuos guardados
let residuos = JSON.parse(localStorage.getItem("residuos")) || [];
 
// Mostrar residuos
function mostrar() {
    let lista = document.getElementById("listaResiduos");
    lista.innerHTML = "";
 
    let punzo = 0;
    let pato = 0;
 
    residuos.forEach(function(r) {
        let li = document.createElement("li");
        li.textContent = r.area + " - " + r.tipo + " - " + r.peso + " kg";
        lista.appendChild(li);
 
        if (r.tipo === "punzocortante") {
            punzo += r.peso;
        } else {
            pato += r.peso;
        }
    });
 
    document.getElementById("totPunzo").textContent = punzo;
    document.getElementById("totPato").textContent = pato;
}
 
// Botón para agregar
document.getElementById("btnAgregarResiduo").onclick = function() {
    let area = document.getElementById("areaHosp").value.trim();
    let tipo = document.getElementById("tipoRPBI").value;
    let peso = Number(document.getElementById("pesoKg").value);
 
    if (area === "" || peso <= 0 || !Number.isFinite(peso)) {
        alert("Ingresa un área y un peso válido");
        return;
    }
 
    residuos.push(new ResiduoRPBI(area, tipo, peso));
    //convierte nuesto arreglo a textoo  para guardarlo eso hace el json string
    localStorage.setItem("residuos", JSON.stringify(residuos));

 
    mostrar();
};
 
mostrar();
 