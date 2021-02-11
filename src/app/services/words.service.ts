import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
    const regexp = new RegExp('^(der|die|das)+$')

    if(  preposition == undefined || !regexp.test(preposition) || word == undefined || word.trim() == "" ){
      return 
    }

    this.words.push( {word:word, preposition:preposition} );
  }

}
