const productos = [
    { id: '1', nombre: "Vaso de barro", precio: 15.99, categ: "Vasos", stock: 25, desc: "Vaso hecho a mano.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '2', nombre: "Plato hondo", precio: 25.50, categ: "Platos", stock: 15, desc: "Plato para sopas.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '3', nombre: "Taza de cerámica", precio: 12.75, categ: "Tazas", stock: 30, desc: "Taza decorativa.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '4', nombre: "Plato playo", precio: 22.00, categ: "Platos", stock: 20, desc: "Plato para comidas.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '5', nombre: "Jarra de agua", precio: 35.99, categ: "Vasos", stock: 10, desc: "Jarra grande.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '6', nombre: "Cuenco pequeño", precio: 10.00, categ: "Platos", stock: 40, desc: "Para salsas.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '7', nombre: "Taza con plato", precio: 18.50, categ: "Tazas", stock: 25, desc: "Conjunto de taza y plato.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '8', nombre: "Vaso alto", precio: 20.00, categ: "Vasos", stock: 15, desc: "Vaso para bebidas.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' }
  ];
export const getProducts= () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(productos)
        }, 500)
    })
}

export const getProductById= (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(productos.find(producto => producto.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCateg) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(productos.filter(producto => producto.categ === productCateg))
        }, 500)
    })
}