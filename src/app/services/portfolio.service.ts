import { Injectable } from '@angular/core';
import { Language, Frameworks } from "./habilities.service";

@Injectable()
export class PortfolioService {

  proyects : Proyects[] = [
    {
      name:"Topdetodo",
      description: "Página de recomendaciones y análisis sobre los mejores móviles, para que el usuario tenga la mejor decisión de compra.",
      imageUrl:"https://topdetodo.com/wp-content/uploads/2021/09/image.pagina.png",
      repoUrl:"",
      url:"https://topdetodo.com/",
      lenguajes:[
        {name:"PHP", version:"8", icon:""},
        {name:"TypeScript", version:"3.8", icon:""}
      ],
      frameworks:[ 
        {name:"Angular", version:9, percent:0, icon:"" },
        {name:"Bootstrap", version: 4, percent:0, icon:""}
      ]
    }
  ] 

  constructor() { }

  getPortfolio():Proyects[]{
    return this.proyects;
  }
}

export interface Proyects{
  name:string;
  description:string;
  imageUrl:string,
  repoUrl:string,
  url:string;
  lenguajes: Language[];
  frameworks: Frameworks[]
}
