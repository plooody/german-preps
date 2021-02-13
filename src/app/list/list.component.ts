import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:any;

  constructor(private _wordsService: WordsService) { }

  ngOnInit(): void {
    this.list=this._wordsService.getWords()
  }

  delete(id:number){
    this._wordsService.delete(id);
    document.getElementById("word"+id.toString()).remove();
  }

}
