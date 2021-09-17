import { Component, OnInit, Input } from '@angular/core';
import { Hability } from 'src/app/services/habilities.service';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() hability:Hability;
  tooltipPosition: TooltipPosition = 'above';

  constructor() { }

  ngOnInit() {
  }

}
