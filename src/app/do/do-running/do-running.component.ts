import { Component, OnInit } from '@angular/core';

import { DO } from '../../model/do.model';
@Component({
  selector: 'app-do-running',
  templateUrl: './do-running.component.html',
  styleUrls: ['./do-running.component.css']
})
export class DoRunningComponent implements OnInit {
  activeDoList: [DO] = [new DO(1, 'bijuri', 100, 1234, 37272),
                        new DO(2, 'kotma', 300, 2343, 37622),
                        new DO(3, 'beohari', 4000, 3262, 374733)];
  selectAll: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSelectAll(){
    this.selectAll = !this.selectAll;
    this.activeDoList.forEach(activeDo => {
        activeDo.selected = !activeDo.selected;
    });
  }

  onProceed(){
    this.activeDoList.forEach(activeDo => {
        console.log(activeDo.doDisplay + " " + activeDo.selected);
    });
  }

}
