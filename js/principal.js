/**
 * Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente:
Cantidad de aprobados: 6
Cantidad de reprobados: 2
Nota promedio de la sección: 57.25
 */

import Cl_Resultados from "./Cl_Resultados.js";
import Cl_Estudiante from "./Cl_Estudiante.js";

let estudiantes1 = new Cl_Estudiante( "888", 60 );
let estudiantes2 = new Cl_Estudiante( "777", 50 );
let estudiantes3 = new Cl_Estudiante( "999", 40 );
let estudiantes4 = new Cl_Estudiante( "333", 80 );
let estudiantes5 = new Cl_Estudiante( "111", 30 );
let estudiantes6 = new Cl_Estudiante( "666", 90 );
let estudiantes7 = new Cl_Estudiante( "444", 48 );
let estudiantes8 = new Cl_Estudiante( "222", 60 );

let resultados = new Cl_Resultados ();

resultados.procesarEstudiante(estudiantes1);
resultados.procesarEstudiante(estudiantes2);
resultados.procesarEstudiante(estudiantes3);
resultados.procesarEstudiante(estudiantes4);
resultados.procesarEstudiante(estudiantes5);
resultados.procesarEstudiante(estudiantes6);
resultados.procesarEstudiante(estudiantes7);
resultados.procesarEstudiante(estudiantes8);

let salida = document.getElementById("salida");
 salida.innerHTML = `
Cantidad de aprobados: ${resultados.aprovados()} <br>
Cantidad de reprobados: ${resultados.reprovados()} <br>
Nota promedio de la seccion: ${resultados.notaPromedio()}
`;