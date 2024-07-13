new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        restaurantes: [
            {
                nombre: 'Hermanos don chifle',
                tipo: 'Asiatica',
                imagen: 'resta.jpg'
            }
            // Puedes agregar más restaurantes aquí
        ]
    },
    methods: {
        agregarRestaurante() {
            // Lógica para agregar un nuevo restaurante
            const nuevoRestaurante = {
                nombre: 'Nuevo Restaurante',
                tipo: 'Tipo de comida',
                imagen: 'nueva_imagen.jpg'
            };
            this.restaurantes.push(nuevoRestaurante);
        },
        eliminarRestaurante(index) {
            this.restaurantes.splice(index, 1);
        }
    }
});
