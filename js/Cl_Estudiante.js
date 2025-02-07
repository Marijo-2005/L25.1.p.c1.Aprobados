export default class Cl_Estudiante {
    constructor(cedula, nota) {
        this._cedula = cedula;
        this._nota= nota
    }

    set cedula (c) {
        this._cedula = c;
    }

    get cedula() {
        return this.cedula;
    }

    set nota (n) {
        this._nota = +n

    }

    get nota() {
        return this._nota;
    }

}
