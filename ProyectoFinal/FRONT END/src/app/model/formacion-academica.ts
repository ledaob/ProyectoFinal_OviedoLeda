export class FormacionAcademica {
    id: number;
    nombreFA: string;
    descripcionFA: string;

    constructor(nombreFA: string, descripcionFA: string){
        this.nombreFA= nombreFA;
        this.descripcionFA = descripcionFA;
    }
}
