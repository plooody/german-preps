import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


 
  constructor( private _wordsService: WordsService ) {
  }
 
  AnAnswer:string
  word = ""
  
  quizAnswers=[
    {
      ans:"der",
      id:1,
      isWrong:false,
      clicked:false
    },

    {
      ans:"die",
      id:2,
      isWrong:true,
      clicked:false
    },

    {
      ans:"das",
      id:3,
      isWrong:true,      
      clicked:false
    }
  ]

  filled=true

  question="What is the preposition for Auto?"

  ngOnInit(): void {
    this.newQuestion()
  }

  newQuestion():void{
    const word = this._wordsService.getRandom()
    if(word===undefined){
      this.filled=false
      return
    }
    this.word = word.word 
    this.quizAnswers.forEach(element => {
      element.clicked=false;
      if( element.ans == word.preposition ){
        element.isWrong=false;
      }else{
        element.isWrong=true;
      }
    });
    
  }

  chooseQuestion(id:number):void{
    const answer = this.quizAnswers.filter((quizAnswer) => id == quizAnswer.id )
    answer[0].clicked = true
  }

  setClass(id:number){
    let classes=["answer col-lg-12 center-block text-center"]
    const answer = this.quizAnswers.filter((quizAnswer) => id == quizAnswer.id )
    if(answer[0].isWrong && answer[0].clicked){
      classes.push("wrong")
    }else if (answer[0].clicked ){
      classes.push("right")
    }else{
      classes.push("neutral")
    }
    return classes
  }

}
