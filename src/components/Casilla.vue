<template>
    <button class="casilla" @click="jugar">
        {{tokenJugado}}
    </button> 
</template>
<script>
export default {
    name: "Casilla",
    props:{
        tokenActual: String,
        fila: Number,
        col: Number
    },
    data:()=>{
        return{
            tokenJugado:""
        }
    },
    methods:{
        jugar(){
            if(!this.tokenJugado){
                this.tokenJugado = this.tokenActual
                this.$emit("jugado", this)
            }
        },
        reiniciar(){
            this.tokenJugado = ""
        }
    }
}
</script>

<style scoped>
.casilla{
    width: 50px;
    height: 50px;
    background-color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
}
</style>
