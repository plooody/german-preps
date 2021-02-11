import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  preposition:string;
  word:string;
  
  constructor(private _wordsService: WordsService) { }

  ngOnInit(): void {
  }

  add(){
    this._wordsService.push( this.preposition, this.word );
    console.log(this.preposition)
  }

}
