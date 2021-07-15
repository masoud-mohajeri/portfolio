import { Component, OnInit } from '@angular/core';
import skills from '../../../assets/Data/skills.json';
import refrences from '../../../assets/Data/refrences.json';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  // TheTrueOne = true;
  refrences: any = refrences.refrences;
  skills: any = skills.skills;
  constructor() {}

  ngOnInit() {}
}
