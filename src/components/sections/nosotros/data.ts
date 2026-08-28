import photoCarlos from "../../../assets/images/Carlos6.png";
import photoMiguel from "../../../assets/images/Miguel2.png";
import photoVanessa from "../../../assets/images/Vanessa2.png";

/*
  `encuadre` es opcional y se traduce en el `object-position` de la foto.

  Las tres fotos son verticales (relación 0,73) y la tarjeta las recorta a un
  cuadrado, así que se pierde un 13,5% por arriba y otro tanto por abajo. Con el
  recorte centrado, que es el que se aplica si no se indica nada, eso funciona
  mientras la cabeza quede por debajo de ese 13,5%. En la de Miguel no: empieza
  al 7,5% del alto, bastante más arriba que en las otras dos (19,8% y 24,2%), y
  el recorte le cortaba la coronilla.

  El valor es el porcentaje vertical del encuadre: 50% centra, 0% pega el
  recorte al borde superior.
*/
export const nosotrosSection = {
  title: "Nosotros",
  subheading1_1: "Somos un equipo líder altamente especializado y con demostrada experiencia para satisfacer los requerimientos de la industria.",
  members: [
    {
      name: "Vanessa Pajares",
      role: "Servicios",
      email: "v.pajares@continentalandes.com",
      phone: "+56 9 6659 0216",
      photo: photoVanessa,
    },
    {
      name: "Carlos Suárez",
      role: "Ventas",
      email: "c.suarez@continentalandes.com",
      phone: "+56 9 9679 4151",
      photo: photoCarlos,
    },
    {
      name: "Miguel Urbina",
      role: "Repuestos",
      email: "m.urbina@continentalandes.com",
      phone: "+56 9 6645 0740",
      photo: photoMiguel,
      encuadre: "center 12%",
    },
  ],
};
