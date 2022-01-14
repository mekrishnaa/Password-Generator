import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  includeLetter = false;
  includeNumber = false;
  includeSymbol = false;
  passwordLength = 0;
  password = '';


  onChangeUseLetter(){
    this.includeLetter = !this.includeLetter;
  }

  onChangeUseNumber(){
    this.includeNumber = !this.includeNumber;
  }

  onChangeUseSymbol(){
    this.includeSymbol = !this.includeSymbol;
  }

  onLengthChange(event:any){
    this.passwordLength = +event?.target.value;
    if((isNaN(this.passwordLength))){
      alert("Please provide only number in InputBox");
    }
  }

  onGeneratePassword(){
    const nums = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbol = '!@#$%^&*()';
    let validChars = '';
      if(this.includeSymbol)
        validChars +=symbol;
      if(this.includeLetter)
        validChars +=letters;
      if(this.includeNumber)
        validChars +=nums;
    let generatedPassword='';
    for(let i=0;i<this.passwordLength;i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password = generatedPassword;
  }
}


