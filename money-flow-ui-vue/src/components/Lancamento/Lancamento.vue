<template>
    <div>
        <div class="options-container">
            <input type="radio" id="opt-credito" v-model="tipo" value="C" checked="checked" />
            <label for="opt-credito">Crédito</label>
            <input type="radio" id="opt-debito" v-model="tipo" value="D" />
            <label for="opt-debito">Débito</label>
        </div>
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
.options-container {
    display: flex;
	margin-bottom: 36px;
	overflow: hidden;
}

.options-container input {
	position: absolute !important;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	width: 1px;
	border: 0;
	overflow: hidden;
}

.options-container label {
	background-color: #e4e4e4;
	color: rgba(0, 0, 0, 0.6);
	font-size: 1.3em;
	line-height: 30px;
	text-align: center;
	padding: 8px 16px;
	margin-right: -1px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
	transition: all 0.1s ease-in-out;
    width: 50%;
    height: 30px;
    font-weight: bold;
}

.options-container label:hover {
	cursor: pointer;
}

.options-container input:checked + label {
	background-color: #a5dc86;
	box-shadow: none;
}

.options-container label:first-of-type {
	border-radius: 4px 0 0 4px;
}

.options-container label:last-of-type {
	border-radius: 0 4px 4px 0;
}
</style>