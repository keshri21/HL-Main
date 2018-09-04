import { Component, OnInit } from '@angular/core';
import { DO } from '../../model/do.model';
@Component({
  selector: 'app-builty-create',
  templateUrl: './builty-create.component.html',
  styleUrls: ['./builty-create.component.css']
})
export class BuiltyCreateComponent implements OnInit {

  doList = [];
  constructor() { }

  ngOnInit() {
    this.doList.push(new DO(133, 'bilaspur', 1200, 2345, 4563));
    this.doList.push(new DO(132, 'bhilai', 1000, 2345, 4563));
    this.doList.push(new DO(131, 'bijuri', 1100, 2345, 4563));
  }

}
