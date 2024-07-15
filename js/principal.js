/**
 * Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y reporte al final el porcentaje
 *  de personas que son mayores de edad.
 *  Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), María (17), Luz (19), 
 *  Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida presenta el siguiente formato:
*  Cantidad de personas: 10
Cantidad de personas mayor de edad: 7
Porcentaje de personas mayor de edad: 70%
 */

import Cl_programa from "./Cl_programa.js";
import Cl_persona from "./Cl_persona.js";

let persona1=new Cl_persona("Luis", 15);
let persona2=new Cl_persona("Ana", 19);
let persona3=new Cl_persona("Jose", 21);
let persona4=new Cl_persona("Carmen", 17);
let persona5=new Cl_persona("Rosa", 18);
let persona6=new Cl_persona("Jose", 22);
let persona7=new Cl_persona("Maria", 17);
let persona8=new Cl_persona("Luz", 19);
let persona9=new Cl_persona("Rafael", 23);
let persona10=new Cl_persona("liz", 15);
let persona11=new Cl_persona("Marcos", 20);
let persona12=new Cl_persona("Leo", 16);


let programa = new Cl_programa();
programa.procesarPersona(persona1);
programa.procesarPersona(persona2);
programa.procesarPersona(persona3);
programa.procesarPersona(persona4);
programa.procesarPersona(persona5);
programa.procesarPersona(persona6);
programa.procesarPersona(persona7);
programa.procesarPersona(persona8);
programa.procesarPersona(persona9);
programa.procesarPersona(persona10);
programa.procesarPersona(persona11);
programa.procesarPersona(persona12);

let salida=document.getElementById("Salida");

salida.innerHTML+="Cantidad de personas:" +programa.contPersona()+"<br>";
salida.innerHTML+="Cantidad de personas mayores de edad:" +programa.cantPersoMayorEdad()+ "<br>";
salida.innerHTML+="Porcentaje de personas Mayores de edad:" +programa.porcentajeMayorEdad()+"%";
