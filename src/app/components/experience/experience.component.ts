import { Component, OnInit } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience.service';
import { HabilitiesService, Hability } from '../../services/habilities.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  panelOpenState:boolean;

  experiences:Experience[] = [];
  habilities:Hability[] = [];

  constructor(
    private _experienceService:ExperienceService, 
    private _habilitiesService:HabilitiesService) { }

  ngOnInit() {
    this.experiences = this._experienceService.getExperience();
    this.habilities = this._habilitiesService.getHabilities();
  }

}
