import { Ciudades } from './Ciudades';
import { Categorias } from './Categorias';
import { SubCategoria } from './SubCategorias';

export class Negocios {
    id: number;
    nombreNegocio: string;
    direccionNegocio: string;
    emailNegocio: string;
    ciudadNegocio: Ciudades;
    cedula: string;
    nombrePropietario: string;
    apellidoPropietario: string;
    emailPropietario:string;
    categoria: Categorias;
    subCategoria: SubCategoria;
    descripcion: string;

}