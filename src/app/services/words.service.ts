import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WordsService {

  constructor() { }
  words = [
    {word:"Auto",   preposition:"das"},
    {word:"Mantel", preposition:"die"},
    {word:"Bär",    preposition:"der"}
  ]

  public getWords(){
    return this.words;
  }

  public getRandom(){
    const words = this.getWords()
    return words[Math.floor(Math.random() * words.length)]
  }

  public push(preposition:string ,word:string ){
    this.words.push( {word:word, preposition:preposition} );
  }

}
