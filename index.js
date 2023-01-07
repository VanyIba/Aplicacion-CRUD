function guardar() {
    let inputValue = document.getElementById("inputText").value
    let inputDate = document.getElementById("fecha").value
    let inputdescrp = document.getElementById("description").value
    
    
    
    let inputValues = ({
        "nombre" : inputValue,
        "fecha" : inputDate,
        "descrip" : inputdescrp,
    })

    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []

    console.log(inputValues)
    datos.push(inputValues)
    console.log(datos)
    console.log(JSON.stringify(datos))
    localStorage.setItem("usuarios",JSON.stringify(datos))

    document.getElementById("inputText").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("description").value = ""

    render()

}

function render () {
    console.log(localStorage.getItem("usuarios"));
    let lista = document.getElementById("lista")
    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
    console.log(datos)
    lista.innerHTML = ""
    datos.forEach((element, index) => {
        console.log(index)
        lista.innerHTML += `
        <p> ${element.nombre} </p>
        <p> ${element.descrip} </p>
        <p> ${element.fecha} </p>
        <button onclick="borrar(${index})">Borrar</button>
        <button onclick="editar()">Editar</button>
        `
    });

}

function borrar (position) {
    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
    
    datos.splice(position, 1)
    localStorage.setItem("usuarios", JSON.stringify(datos))
    render()

    console.log("borrado")

}

function editar () {

    document.getElementById(inputText)

}


render()