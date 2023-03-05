# Documentación

## Retos
1. [Crear los componentes del proyecto](https://github.com/platzimaster/frontend/issues/1) ✔️
2. [Añadir estilos](https://github.com/platzimaster/frontend/issues/2) ✔️
3. [Crear función getData.js](https://github.com/platzimaster/frontend/issues/3) ✔️
4. [Integrar API](https://github.com/platzimaster/frontend/issues/4) ✔️
5. [Personalizar API](https://github.com/platzimaster/frontend/issues/5) ✔️
6. [Documentar](https://github.com/platzimaster/frontend/issues/6) ✔️


## Solución

El primer paso que realicé fue instalar las dependencias necesarias para poder integrar Bootstrap. Luego de hacer esto procedí a colocar el link del css y los scripts en el body para que funcionara correctamente.

Luego instalé emotion ya que me gusta usar styled components y ademas tambien suelo usar global y css para los estilos.

Al tener intaladas las dependencias necesarias para aplicar el css como suelo hacerlo procedí a crear un componente llamado Layout donde usé global para aplicar los estilos base.

Despues comencé a crear los componentes, realmente no estoy 100% seguro de si tenia que seguir la estructura que estaba en la imagen o podia crear una, pero al final decidí en crear una nueva y espero que no afecte en la decisión de elegirme. Mientras iba haciendo cada uno de los componentes iba aplicando los estilos con los styled components y tambien aplicando algunos estilos lineales con la función css de @emotion/react. Cabe destacar que tambien me gusta ir dejando los componentes listos para que reciban la data de la API que proximamente iba a estructurar y lo que hacia era crear una variable con la estructura individual de cada componente.

Luego de tener los componentes listos comencé a crear la función getData que no me llevó mucho tiempo.

Teniendo la función getData lista lo que hice fue usar el useEffect en el componente App para poder pasar la data a sus hijos, pude haberlo llamado en cada uno de los componentes, pero creo que como lo hice es la mejor opción.

Para finalizar estructuré la API y terminé de pasar la data que necesitan cada uno de los componentes para mostrar la información correctamente.

## NOTAS

Para los key usé el paquete uuid ya que me pareció la mejor opción, pensé en colocar los textos como keys, pero no lo vi muy correcto así que al final me fuí por uuid.

Tuve el siguiente error de eslint al hacer commit "error  'React' is defined but never used  no-unused-vars". En las nuevas versiones React no necesita esta importación, pero tuve que importarla ya que los test no me pasaban si no lo hacia. Lo solucioné desactivando la regla "no-unused-vars" de eslint.

