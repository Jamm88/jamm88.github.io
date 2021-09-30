import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  certifications:Certification[]=[
    {
      titulo:"Responsive Web Desing",
      institucion:"FreeCodeCamp.org",
      fechaInicio:"2018-01-01",
      fechaFin:"2021-09-30",
      certificacionUrl:"https://www.freecodecamp.org/certification/joseamartinez/responsive-web-design",
      duracion:300,
      thumbnails:'/assets/img/certs/thumbnails/certification-responsive_web_design.jpg'
    },
    /*{
      titulo:"Liquibase Fundamentals Certification",
      institucion:"Liquibase University",
      fechaInicio:"2020-12-18",
      fechaFin:"2021-02-12",
      certificacionUrl:"https://www.credential.net/28060f9f-ebd1-4eea-a916-c5aaf81b67ef#gs.ta2u98",
      duracion:0,
      thumbnails:'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/28715111'
      
    },
    {
      titulo:"Programación Reactiva con Spring Boot 2 y Spring WebFlux",
      institucion:"Udemy",
      fechaInicio:"2020-12-18",
      fechaFin:"2021-01-01",
      certificacionUrl:"https://www.udemy.com/certificate/UC-e70f78d5-6756-4af2-8473-d80d15b668ba/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/kafka-java-spring-aws_tn.jpg'
      
    },
    {
      titulo:"Apache Kafka con Java, Spring framework y AWS",
      institucion:"Udemy",
      fechaInicio:"2020-10-18",
      fechaFin:"2020-10-24",
      certificacionUrl:"https://www.udemy.com/certificate/UC-a78a1a84-0acc-47c9-8ae7-a458c1e67a95/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/kafka-java-spring-aws_tn.jpg'
      
    },
    {
      titulo:"Angular (Basic) ",
      institucion:"HackerRank",
      fechaInicio:"2020-06-01",
      fechaFin:"2020-06-01",
      certificacionUrl:"https://www.hackerrank.com/certificates/bddba66b1683",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/hackerrank-angular(basic)_tn.jpg'
      
    },
    {
      titulo:"React (Basic) ",
      institucion:"HackerRank",
      fechaInicio:"2020-06-01",
      fechaFin:"2020-06-01",
      certificacionUrl:"https://www.hackerrank.com/certificates/86772c3ab8a4",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/hackerrank-react(basic)_tn.jpg'
      
    },
    {
      titulo:"JavaScript Algorithms and Data Structures",
      institucion:"FreeCodeCamp.org",
      fechaInicio:"2020-05-01",
      fechaFin:"2020-05-01",
      certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/javascript-algorithms-and-data-structures",
      duracion:300,
      thumbnails:'/assets/img/certs/thumbnails/fcc-javascript_algorithms_tn.jpg'
    },
    {
      titulo:"ReactJS",
      institucion:"Educacion IT",
      fechaInicio:"2018-07-25",
      fechaFin:"2018-08-25",
      certificacionUrl:"https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
      duracion:15,
      thumbnails:'/assets/img/certs/thumbnails/educacionit-reactjs_tn.jpg'
    }*/
  ]

  constructor() { }

  getCertifications(){
    return this.certifications;
  }
}


export interface Certification{
  titulo:string,
  institucion:string,
  fechaInicio:string,
  fechaFin:string,
  certificacionUrl:string,
  duracion:number,
  thumbnails:string
}
