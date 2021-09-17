import { Component, OnInit } from '@angular/core';
import { EducationService, Education } from '../../services/education.service';
import { CertificationsService, Certification } from '../../services/certifications.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  panelOpenState:boolean;
  education:Education[] = [];
  certifications:Certification[]=[];

  constructor(
    private _educationService:EducationService, 
    private _certificationService:CertificationsService
    ) { }

  ngOnInit(): void {
    this.education = this._educationService.getEducation();
    this.certifications = this._certificationService.getCertifications();
  }

}
