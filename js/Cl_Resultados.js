export default class Cl_Resultados{
    constructor(){
        this.cntAprovados  = 0;
        this.cntReprovados = 0;
        this.acNota= 0;
        this.cntEstudiantes = 0;
    
    }

    procesarEstudiante(estudiante){
        if(estudiante.nota >= 48){
            this.cntAprovados++;
        }else{
            this.cntReprovados++;
        }
        this.acNota += estudiante.nota;
        this.cntEstudiantes++;
    }
    aprovados(){
        return this.cntAprovados
    }
    reprovados (){
        return this.cntReprovados
    }
    notaPromedio(){
        return this.acNota / this.cntEstudiantes
    }
}