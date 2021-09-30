import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceService{
    private experience:Experience[] = [
        {
            empresa:"Password Technology",
            puesto: "Desarrollador Web",
            fechaIngreso: "2019-11-05",
            fechaEgreso: "2020-02-03",
            proyectos:[],
            resumenProyecto:"Verificar y mantener el óptimo funcionamiento de los sistemas instalados, evaluar tendencias de software, garantizar el mantenimiento preventivo de hardware y software.",
            tecnologias: ["Java", "SpringBoot", "Sql", "jQuery"],
            web:""
        },
        /*{
            empresa:"IT Resources S.A",
            puesto: "Programador Java",
            fechaIngreso: "2019-07-01",
            fechaEgreso: "2020-10-02",
            proyectos:[
                {
                    nombre:"I+D - Kaiso App",
                    resumenProyecto:"Desarrollo de aplicacion web de soporte para personas con deterioro cognitivo",
                    tecnologias: ["Microsoft Azure Cognitive Services Face service", "JavaEE", "JHipster", "SpringBoot", "MySql", "Bootstrap4", "Angular9", "Git"]
                },
                {
                    nombre:"Legal Security",
                    resumenProyecto:"Mantenimiento y desarrollo evolutivo de la aplicacion iSecurity para la Empresa Legal Security",
                    tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
                },
                {
                    nombre:"Banco Santander",
                    resumenProyecto:"Desarrollo y mantenimiento de la aplicacion Portal del Banco Santander",
                    tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
                }
            ],
            resumenProyecto:"",
            tecnologias: [],
            web:"https://www.itrsa.com.ar/"
        },*/
        /*{
            empresa:"Eglam Argentina S.A",
            puesto: "Programador Backend",
            fechaIngreso: "2019-02-01",
            fechaEgreso: "2019-07-01",
            proyectos:[],
            resumenProyecto:"Gestión y desarrollo de modulos para e-commerces basados en Magento",
            tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"],
            web:"https://www.glamit.com.ar/"
        },*/
        {
            empresa:"Hospital Cardiológico Infantil Latinoamericano Dr. Gilberto Rodríguez Ochoa",
            puesto: "Analista",
            fechaIngreso: "2012-09-06",
            fechaEgreso: "2019-10-29",
            proyectos:[],
            resumenProyecto:"Auditoría de sistemas de información, gestión de los sistemas internos, diseño y personalización de logos, sistemas operativos Windows, Linux, Ubuntu",
            tecnologias: ["PHP5", "Saint", "SIGESP", "RENAC"],
            web:""
        },
        {
            empresa:"Ministerio del Poder Popular para el Comercio",
            puesto: "Desarrollador Web",
            fechaIngreso: "2011-04-01",
            fechaEgreso: "2012-06-01",
            proyectos:[],
            resumenProyecto:"Gestión y desarrollo al sistema interno, administración de varios dbms",
            tecnologias: ["PHP5", "MySql", "PostgreSql", "jQuery"],
            web:""
        },
        
    ];

    getExperience():Experience[]{
        return this.experience;
    }
}

export interface Experience{
    empresa:string,
    puesto:string,
    fechaIngreso:string,
    fechaEgreso:string,
    proyectos:Proyects[],
    resumenProyecto:string,
    tecnologias:string[],
    web?:string
}

interface Proyects{
    nombre:string,
    resumenProyecto:string,
    tecnologias:string[]
}