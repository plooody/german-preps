import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WordsService {

  constructor() { }

  words = [
    {word:"Auto",   preposition:"das" , id:0},
    {word:"Mantel", preposition:"die" , id:1},
    {word:"Bär",    preposition:"der" , id:2}
  ]

  counter=this.words.length
  
  public getWords(){
    return this.words;
  }

  public getRandom(){
    const words = this.getWords()
    return words[Math.floor(Math.random() * words.length)]
  }

  public push(preposition:string ,word:string ){
    const regexp = new RegExp('^(der|die|das)+$')

    if(  preposition == undefined || !regexp.test(preposition) || word == undefined || word.trim() == "" ){
      return 
    }
    this.counter++
    this.words.push( {word:word, preposition:preposition, id:this.counter} );
  }

  public delete(id:number){

    this.words = this.words.filter(function( word ) {
      return word.id != id;
    });

  }

}
