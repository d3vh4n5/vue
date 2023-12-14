<template>
    <hr>
    <h3>Componente Slot</h3>
    <div style="color: red">
        Hola desde del componente
        <slot>
            <p style="color:yellow">
                Contenido del slot por default (si no recibe contenido)
            </p>
        </slot>
        ******************
        <slot name="slotdos"></slot>
        ******************
        <br>
    </div>
    <hr>
</template>