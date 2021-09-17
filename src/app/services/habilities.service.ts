import { Injectable } from '@angular/core';

@Injectable()
export class HabilitiesService {
  java:Language={name:"Java", version:8, icon:'../assets/img/pro-icon/icons8-java-50.png'}
  javaScript:Language={name:"JavaScript", version:"ES6", icon:'../assets/img/pro-icon/icons8-javascript-50.png'}
  php:Language={name:"PHP", version:7, icon:'../assets/img/pro-icon/icons8-php-logo-50.png'}
  sql:Language={name:"SQL", version:0, icon:'../assets/img/pro-icon/icons8-database-50.png'}
  html:Language={name:"Html", version:5, icon:'../assets/img/pro-icon/icons8-html-5-50.png'}
  css:Language={name:"Css", version:3, icon:'../assets/img/pro-icon/icons8-css3-50.png'}
  versionado:Language={name:"Versionado", version:0, icon:'../assets/img/pro-icon/icons8-code-fork-50.png'}

  habilities:Hability[] = [
    {
      language:this.java,
      frameworks:[
        {
          name:"Java",
          icon:'../assets/img/pro-icon/icons8-java-50.png',
          version:8,
          percent:30
        },
        {
          name:"SpringMVC",
          icon:'../assets/img/pro-icon/icons8-spring-logo-50.png',
          version:5,
          percent:35
        },
        {
          name:"SpringBoot",
          icon:'../assets/img/pro-icon/icons8-spring-logo-50.png',
          version:2,
          percent:35
        },
        /*{
          name:"JPA/Hibernate",
          icon:'../assets/img/pro-icon/hibernate.png',
          version:0,
          percent:40
        },*/
      ]
    },
    {
      language:this.sql,
      frameworks:[
        {
          name:"MySql",
          icon:'../assets/img/pro-icon/mysql.png',
          version:0,
          percent:60
        },
        {
          name:"MS SQL",
          icon:'../assets/img/pro-icon/ms_sql_icon.png',
          version:0,
          percent:38
        },
        {
          name:"PL/SQL",
          icon:'../assets/img/pro-icon/icons8-oracle-logo-50.png',
          version:0,
          percent:26
        }
      ]
    },
    {
      language:this.javaScript,
      frameworks:[
        {
          name:"Javascript",
          icon:'../assets/img/pro-icon/icons8-javascript-50.png',
          version:6, 
          percent:15
        },
        {
          name:"jQuery",
          icon:'../assets/img/pro-icon/jquery.png',
          version:3,
          percent:40
        },
        {
          name:"Angular",
          icon:'../assets/img/pro-icon/angular.png',
          version:11,
          percent:35
        },
        {
          name:"Typescript",
          icon:'../assets/img/pro-icon/typescript.svg',
          version:3,
          percent:45
        }
      ]
    },
    {
      language:this.php,
      frameworks:[
        {
          name:"Laravel",
          icon:'../assets/img/pro-icon/laravel.png',
          version:7,
          percent:35
        }
      ]
    },
    {
      language:this.css,
      frameworks:[
        {
          name:"CSS",
          icon:'../assets/img/pro-icon/icons8-css3-50.png',
          version:3,
          percent:70
        },
        {
          name:"Bootstrap",
          icon:'../assets/img/pro-icon/icons8-bootstrap-50.png',
          version:4,
          percent:65
        }
      ]
    },
    {
      language:this.versionado,
      frameworks:[
        {
          name: "GIT",
          icon:'../assets/img/pro-icon/icons8-git-50.png',
          version:0,
          percent: 75
        },
      ]
    }
  ];

  constructor() { }

  getHabilities():Hability[]{
    return this.habilities;
  }

}

export interface Hability{
  language:Language,
  frameworks:Frameworks[]
}
export interface Language{
  name:string,
  version:any,
  icon:string
}
export interface Frameworks{
  name:string,
  icon:string,
  version:number,
  percent:number,
}