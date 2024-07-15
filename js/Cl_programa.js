export default class Cl_programa {
    contructor(){
        this.contPersona = 0;
        this.contPersonaMayorEdad = 0;
    }
    procesarPersona(p){
        if (p.edad >= 18){
            this.contPersonaMayorEdad++;
        }
         this.contPersona++;
    }
    cantPersona(){
        return this.contPersona;
    }
    cantPersoMayorEdad(){
        return this.contPersonaMayorEdad;
    }
    porcentajeMayorEdad(){
       return (this.cantPersoMayorEdad / this.contPersona * 100).toFixed(2);
    }
}