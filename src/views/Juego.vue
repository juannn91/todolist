<template>
    <div class="juego">
        <turno turnoActual="turnoActual"></turno>
        <tablero @cambio-turno="cambioTurno" 
        @ganado="ganado" 
        @empatado="empatado"
        ref="tablero">
        </tablero>
    </div>
</template>

<script>

import Tablero from '../components/Tablero.vue'
import Turno from "../components/Turno.vue"

export default {
    name:"Juego",
    components:{Tablero,Turno},
    data:function(){
        return{
        turnoActual:"x",
        }
    },
    methods:{
        ganado(e){
            alert("Ganan las " + e.tokenActual)
        },
        empatado(){
            alert("Empate")
        },
        cambioTurno(e){
            this.turnoActual = e.tokenActual
        },
        nuevoJuego(){
            this.$ref.tablero.nuevoJuego()
        }
    }
}
</script>

<style scoped>
.juego{
    width: 350px;
    margin: auto;
    padding: 10px;
    background-color: #fafafa;
    box-shadow: 0px 0px 5px #4e4e4e;
}
</style>