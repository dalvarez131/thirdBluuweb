const app = new Vue({
    el: '#app',
    data: {
        mensaje: '',
        contador: 0
    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        addBackground() {
            return {
                'bg-success' : this.contador > 20 && this.contador <= 40,
                'bg-info' : this.contador > 40 && this.contador <= 60,
                'bg-warning' : this.contador > 60 && this.contador <= 80,
                'bg-danger' : this.contador > 80 && this.contador <= 100
            };
        }
    },
    methods: {
        lessContador() {
            if (this.contador > 0) {
                return this.contador--;
            }
            return this.contador;
        },
        plusContador() {
            if (this.contador < 100) {
                return this.contador++;
            }
            return this.contador;
        }
    }
});