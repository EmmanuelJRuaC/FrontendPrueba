export interface Cliente {
    id: number | null;
    tipo_documento: string;
    documento: number | null;
    nombre_1: string;
    nombre_2: string;
    apellido_1: string;
    apellido_2: string;
    prefijo: string;
    telefono: string;
}