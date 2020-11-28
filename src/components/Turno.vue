<template>
    <div>
        Turno <span class="token">{{turnoActual}}</span>
    </div>
</template>

<script>
export default {
    name: "turno",
    props:{
        turnoActual: String
    },
}
</script>
<style scoped>
.token{
    font-size: 20px;
    background-color: #889bff;
    padding: 5px;
    border-radius: 20px;
}
</style>