import { Component, OnInit } from '@angular/core';

import { DODetails } from '../../model/do-details.model'
@Component({
  selector: 'app-do-create',
  templateUrl: './do-create.component.html',
  styleUrls: ['./do-create.component.css']
})
export class DoCreateComponent implements OnInit {

 doDetails: DODetails;
  constructor() { }

  ngOnInit() {
    this.doDetails = new DODetails();
  }

}
