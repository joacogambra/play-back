// Ejemplo con JS puro
// Identifico el HTML que me esta llamando
if(document.querySelector('#list')){
    let url = 'users'
    let contenedor = 'list'
    let propiedad = 'name'
    fetchearData(url, contenedor, propiedad)
} else {
    let url = 'todos'
    let contenedor = 'todoList'
    let propiedad = 'title'
    fetchearData(url, contenedor, propiedad)
}

function fetchearData(url, contenedor, propiedad){
    fetch(`https://jsonplaceholder.typicode.com/${url}`)
        .then(res => res.json())
        .then(data =>{
            miPrograma(data, contenedor, propiedad)
        })
}

function miPrograma(data, contenedor, propiedad){
    let lista = document.querySelector(`#${contenedor}`)
    for(let i=0; i<data.length; i++){
        const item = document.createElement('li')
        item.innerHTML = data[i][propiedad]
        lista.appendChild(item)
    }
}