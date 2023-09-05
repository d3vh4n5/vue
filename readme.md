# Información

## Directivas

Las variables a las que se hace referencias sean las que estén contenidas dentro del objeto Vue en el atributo data.

* v-for="x in lista" -> Se coloca en un elemento a reproducir, que se genera a partir de la lista que se está iterando.
* v-show="variable" -> Muestra u oculta un elemento dependiendo del valor booleano de la variable
* v-if="Variable" -> Crea o elimina un elemento dependiendo del valor booleano de la variable. También puede ser una valiable+ una condicion: v-if="variable > 10"
* v-else -> Se coloca en el elemento inmediatamente siguiente al que contenga la directiva v-if, este elemento solo aparecerá si no se aprueba la condición del elemento anterior.
* v-on:click="metodo" -> Crea un evento on click sobre el elemento en cuestión, y ejecuta el método que le pasemos
* @click="metodo" -> es la forma moderna de la directiva anterior.
* v-model="variable" -> Asocia el contenido del elemento directamente a la variable del modelo que le pasemos. especialmente útil para capturar directamente el valor de inputs.
* v-bind:class="{nombreDeLaClaseCSS: variableOAtributoOCondicionParaQueSeApliqueLaClase}" -> linkea una clase css al elemento, que será aplicada si el valor de la variable a la que apunta es true.