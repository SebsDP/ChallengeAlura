// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
listaDeAmigos = [];


const validarEntrada = (entradaUsuario) => {
    if(entradaUsuario == null || !entradaUsuario){
        alert("La entrada es invalida");
            return false;        
    }else{
        return true;
    }

}

const visualizarVista = (Amigo) => {
    const etiquetaClonada = document.createElement("ul")
    etiquetaClonada.innerHTML = Amigo;

    const padre = document.getElementById("listaAmigos");
    padre.appendChild(etiquetaClonada);
}

const agregarAmigo = () => {
    amigoAAgregar = document.getElementById("amigo").value;
    if(validarEntrada(amigoAAgregar)){
        listaDeAmigos.push(amigoAAgregar);
        console.log("Se agrego a " + amigoAAgregar);
        visualizarVista(amigoAAgregar);
    }else{
        alert("Vuelve a intentarlo");
    }  
}


const sortearAmigo = () => {
    const etiquetaModificada = document.getElementById("resultado")
    if(listaDeAmigos){

        const random = Math.random() * listaDeAmigos.length;
        const indice = Math.floor(random);
        const amigoElegido = listaDeAmigos[indice];

        etiquetaModificada.innerText = "Su amigo secreto es: "+ amigoElegido;

    }else{

        etiquetaModificada.innerText = "No hay amigos de donde solucionar";
        
    }
}