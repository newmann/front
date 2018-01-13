import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'byl-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  navLinks:any;

  constructor() {
    this.navLinks = [
      {
        path: "recent",
        label: "最近文档"
      },
      {
        path: "list",
        label: "查询"
      },
      {
        path: "add",
        label: "提交"
      }
    ]
  }

  ngOnInit() {
  }

}
