import { Injectable } from '@angular/core';

@Injectable()
export class EducationService {

  educations:Education[] = [
    {
      titulo:"Técnico Superior en Informatica (Analista de Sistemas)",
      institucion:"I.U.T.O Mariscal Sucre ",
      fechaInicio:"2007-07-01",
      fechaFin:"2012-07-01",
      certificacionUrl:"https://drive.google.com/file/d/1aVAQEdrSyUDqBezgjiTVBghq8tKDJha1/view?usp=sharing",
      duracion:0
    },
  ];

  constructor() { }

  getEducation(){
    return this.educations;
  }

}

export interface Education{
  titulo:string,
  institucion:string,
  fechaInicio:string,
  fechaFin:string,
  certificacionUrl:string,
  duracion:number
}
