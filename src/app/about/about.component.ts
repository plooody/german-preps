import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  @Input() backgroundColor: string;
  
  display=true;

  constructor() { }

  ngOnInit(): void {
  }

}
