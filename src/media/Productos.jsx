import jordanLowRojas from './../media/img/Jordan-Low-rojas.jpg'
import jordanLownegras from './../media/img/Jordan-Low-negras.jpg'
import pumarsx from './../media/img/Puma-RSX.jpg'
import diorLowGises from './../media/img/Dior-Low-grises.jpg'
import airForceMidBlancasynegras from './../media/img/Air-Force-Mid-Blancas-y-negras.jpg'


const objProductos = [    
        {
                id:"1",
                tipoProducto: "zapatillas",
                material: "Cuero Natural",
                materialSuela: "Goma",
                descuento: ".05",
                stock:"5",
                genero:'hombre', 
                marca:'nike', 
                modelo: 'Jordan Low Rojas', 
                talles: ['37','38','39','40','41'] , 
                precio: '15000',
                descripcion: 'breve descripcion 1', 
                urlMiniatura:jordanLowRojas,
                galeriaImagenes: [] 
        },
        {
                id:"2",
                tipoProducto: "zapatillas",
                material: "Cuero Natural",
                materialSuela: "Goma",
                descuento: "0", 
                stock:"3",
                genero:'hombre', 
                marca:'nike', 
                modelo: 'Jordan Low Negras', 
                talles: ['37','38','39','40','41'] , 
                precio: '12000',
                descripcion: 'breve descripcion 1', 
                urlMiniatura:jordanLownegras, 
                galeriaImagenes: [] 
        },
        {
                id:"3",
                tipoProducto: "zapatillas",
                material: "Cuero Natural",
                materialSuela: "Goma",
                descuento: ".02",
                stock:"8", 
                genero:'mujer', 
                marca:'puma',
                modelo: 'Puma RSX', 
                talles:  ['38','39','43',], 
                precio: '18000',
                descripcion: 'breve descripcion 4', 
                urlMiniatura:pumarsx,
                galeriaImagenes: [] 
        },                
        {
                id:"4",
                tipoProducto: "zapatillas",
                material: "Cuero Natural",
                materialSuela: "Goma",
                descuento: ".10",
                stock:"5", 
                genero:'hombre', 
                marca:'nike', 
                modelo: 'Dior Low Grises', 
                talles:  ['38','39','43',], 
                precio: '10000',
                descripcion: 'breve descripcion 4',
                urlMiniatura:diorLowGises,
                galeriaImagenes: [] 
        },  
        {
                id:"5",
                tipoProducto: "zapatillas",
                material: "Cuero Natural",
                materialSuela: "Goma",
                descuento: ".03",
                stock:"0", 
                genero:'mujer',
                marca:'nike',
                modelo: 'Air Force Mid Blancas y negras', 
                talles:  ['38','39','43',], 
                precio: '15000',
                descripcion: 'breve descripcion 4', 
                urlMiniatura:airForceMidBlancasynegras, 
                galeriaImagenes: [] 
        }  
]

export default objProductos
      
    

