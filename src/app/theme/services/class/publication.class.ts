import { Category } from './category.class';
import { Company } from './company.class';
import { Brand } from './brand.class';

export class Publication {
  id: string;
  ctName: string;
  ctLastName: string;
  ctEmail: string;
  ctPhone01: string;
  ctPhone02: string;
  description: string;
  ctHorario: string;
  uDepartamento: string;
  uProvincia: string;
  uDistrito: string;
  uDireccion: string;
  uReferencia: string;
  age: number;
  prConsultar: boolean;
  prTipoAlquiler: string;
  prMoneda: string;
  prPrecio: number;
  prPrecioOferta: number;
  condicion: string;
  modelo: string;
  horasMaquina: number;
  operacion: string;
  urlImages: string[];
  location: any;
  plan: string;
  banner: string;
  dateCreated: Date;
  dateStart: Date;
  dateTerminated: Date;
  dateUpdate: Date;
  historyCreated: Date[];
  status: number;
  brandId: string;
  countryId: string;
  companyId: string;
  usuarioId: string;
  categoryId: string;
  rkStarTotal: number;
  company: Company;
  brand: Brand;
  category: Category;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.ctName = obj && obj.ctName || null;
    this.ctLastName = obj && obj.ctLastName || null;
    this.ctEmail = obj && obj.ctEmail || null;
    this.ctPhone01 = obj && obj.ctPhone01 || null;
    this.ctPhone02 = obj && obj.ctPhone02 || null;
    this.description = obj && obj.description || null;
    this.ctHorario = obj && obj.ctHorario || null;
    this.uDepartamento = obj && obj.uDepartamento || null;
    this.uProvincia = obj && obj.uProvincia || null;
    this.uDistrito = obj && obj.uDistrito || null;
    this.uDireccion = obj && obj.uDireccion || null;
    this.uReferencia = obj && obj.uReferencia || null;
    this.age = obj && obj.age || null;
    this.prConsultar = obj && obj.prConsultar || null;
    this.prTipoAlquiler = obj && obj.prTipoAlquiler || null;
    this.prMoneda = obj && obj.prMoneda || null;
    this.prPrecio = obj && obj.prPrecio || null;
    this.prPrecioOferta = obj && obj.prPrecioOferta || null;
    this.condicion = obj && obj.condicion || null;
    this.modelo = obj && obj.modelo || '';
    this.horasMaquina = obj && obj.horasMaquina || null;
    this.operacion = obj && obj.operacion || null;
    this.urlImages = obj && obj.urlImages || null;
    this.location = obj && obj.location || null;
    this.plan = obj && obj.plan || null;
    this.banner = obj && obj.banner || null;
    this.dateCreated = obj && obj.dateCreated || null;
    this.dateStart = obj && obj.dateStart || null;
    this.dateTerminated = obj && obj.dateTerminated || null;
    this.dateUpdate = obj && obj.dateUpdate || null;
    this.historyCreated = obj && obj.historyCreated || null;
    this.status = obj && obj.status || null;
    this.brandId = obj && obj.brandId || null;
    this.countryId = obj && obj.countryId || null;
    this.companyId = obj && obj.companyId || null;
    this.usuarioId = obj && obj.usuarioId || null;
    this.categoryId = obj && obj.categoryId || null;
    this.company = obj && obj.company || null;
    this.brand = obj && obj.brand || null;
    this.category = obj && obj.category || null;
    this.rkStarTotal = obj && obj.rkStarTotal || 0;
  }
}
