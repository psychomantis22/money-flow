<template>
    <div>
		<md-radio v-model="tipo" value="C">Crédito</md-radio>
		<md-radio v-model="tipo" value="D">Débito</md-radio>
        <h1>{{tipo}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tipo: 'C'
            }
        }
    }
</script>

<style scoped>
</style>