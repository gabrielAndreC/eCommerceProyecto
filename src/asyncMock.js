const productos = [
    { id: '1', nombre: "Vaso de barro", precio: 15.99, categ: "Vasos", stock: 25, desc: "Vaso hecho a mano.", img:'https://media.istockphoto.com/id/1449841191/es/foto/primer-plano-de-un-solo-vidrio-de-tierra-aislado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=V4JVuRHg719vr_B_BKyY9Isw-jGS9FmlUUGicmZF59o= ' },
    { id: '2', nombre: "Plato hondo", precio: 25.50, categ: "Platos", stock: 15, desc: "Plato para sopas.", img:'https://media.istockphoto.com/id/674139374/es/foto/r%C3%BAstico-cuenco-ocre-aislado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=MX5i1lidbRNYP2IbMN9-_5Hffa6t_A7RSotfxUjuJE0=' },
    { id: '3', nombre: "Taza de cerámica", precio: 12.75, categ: "Tazas", stock: 30, desc: "Taza decorativa.", img:'https://media.istockphoto.com/id/1132922890/es/foto/taza-marr%C3%B3n-de-tierra.jpg?s=1024x1024&w=is&k=20&c=X9GspDVLexbYQUrYezvxPNxy73bBfLH2qH0_I7nsYrU=' },
    { id: '4', nombre: "Plato playo", precio: 22.00, categ: "Platos", stock: 20, desc: "Plato para comidas.", img:'https://media.istockphoto.com/id/1088384644/es/foto/platos-de-barro-cer%C3%A1mica-alfarer%C3%ADa.jpg?s=1024x1024&w=is&k=20&c=o3Xf1H2zfCaamOWKNh4tiNHGXS7sUmwVmZ1z-jA0lLk=' },
    { id: '5', nombre: "Jarra de agua", precio: 35.99, categ: "Vasos", stock: 10, desc: "Jarra grande.", img:'https://media.istockphoto.com/id/926700666/es/foto/tradicional-jarra-de-cer%C3%A1mica-marr%C3%B3n-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=9T4aDyeEhz9gzVeV46Qbq5ULqRb3Q0kdDBoPdxUm1oQ=' },
    { id: '6', nombre: "Cuenco grande", precio: 10.00, categ: "Platos", stock: 40, desc: "Para sopas.", img:'https://media.istockphoto.com/id/1444990181/es/foto/clay-bowl.jpg?s=1024x1024&w=is&k=20&c=8ebm38TZ43Tim-JTV9PbMMNqewJWlVoHAwYjf-cA6F4=' },
    { id: '7', nombre: "Taza con plato", precio: 18.50, categ: "Tazas", stock: 25, desc: "Conjunto de taza y plato.", img:'https://media.istockphoto.com/id/500217256/es/foto/marr%C3%B3n-caf%C3%A9-espresso-taza-y-platillo.jpg?s=1024x1024&w=is&k=20&c=HyFolQvcm390jfC0BORdoEwIKiwWlSLkPnUpuqwKCmg=' },
    { id: '8', nombre: "Vaso de Cerámica", precio: 20.00, categ: "Vasos", stock: 15, desc: "Vaso para bebidas.", img:'https://media.istockphoto.com/id/658343448/es/foto/taza-de-t%C3%A9-antigua-aislada-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=sldpdiO723N6EQn0ZX0EYem0bISj11igxIbsBRVBoVY=' }
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