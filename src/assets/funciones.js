// la consulta empieza en public porque empieza de forma asincrona


const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}


export default consultarBDD