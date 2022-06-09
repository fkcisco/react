import jordanLowRojas from './../media/img/Jordan-Low-rojas.jpg'
import jordanLownegras from './../media/img/Jordan-Low-negras.jpg'
import pumarsx from './../media/img/Puma-RSX.jpg'
import diorLowGises from './../media/img/Dior-Low-grises.jpg'
import airForceMidBlancasynegras from './../media/img/Air-Force-Mid-Blancas-y-negras.jpg'


const objProductos = [    
        {
                id:"1", 
                stock:"5", 
                categoriaGenero:'Hombre', 
                marca:'Nike', 
                modelo: 'Jordan Low Rojas', 
                talles: ['37','38','39','40','41'] , 
                precio: '15.000',
                descripcion: 'breve descripcion 1', 
                urlMiniatura:jordanLowRojas,
                galeriaImagenes: [] 
        },
        {
                id:"2", stock:"3", 
                categoriaGenero:'Hombre', 
                marca:'Nike', 
                modelo: 'Jordan Low Negras', 
                talles: ['37','38','39','40','41'] , 
                precio: '15.000', 
                descripcion: 'breve descripcion 1', 
                urlMiniatura:jordanLownegras, 
                galeriaImagenes: [] 
        },
        {
                id:"3", stock:"8", 
                categoriaGenero:'Mujer', 
                marca:'Puma',
                modelo: 'Puma RSX', talles:  ['38','39','43',], 
                precio: '14.000', 
                descripcion: 'breve descripcion 4', 
                urlMiniatura:pumarsx,
                galeriaImagenes: [] 
        },                
        {
                id:"4", stock:"5", 
                categoriaGenero:'Hombre', 
                marca:'Nike', 
                modelo: 'Dior Low Grises', 
                talles:  ['38','39','43',], 
                precio: '14.000', 
                descripcion: 'breve descripcion 4',
                urlMiniatura:diorLowGises,
                galeriaImagenes: [] 
        },  
        {
                id:"5", stock:"0", 
                categoriaGenero:'Mujer',
                marca:'Nike',
                modelo: 'Air Force Mid Blancas y negras', 
                talles:  ['38','39','43',], 
                precio: '14.000', 
                descripcion: 'breve descripcion 4', 
                urlMiniatura:airForceMidBlancasynegras, 
                galeriaImagenes: [] 
        }  
]

export default objProductos
      
    

