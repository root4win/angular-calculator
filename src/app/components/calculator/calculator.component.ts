import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  total: number = 0;
  displayedNumber: string = '';
  storedNumber: string = '';
  operator = ''


  displayNumber( number: string ){
    this.displayedNumber += number;
  }

  squareRoot(){
    this.displayedNumber = (Math.sqrt(parseFloat(this.displayedNumber))).toString();

  }

  backspace(){
    let len = this.displayedNumber.length;
    this.displayedNumber = this.displayedNumber.slice(0,len-1);
  }

  clearAll( ) {
    this.displayedNumber = '0';
    this.operator = '';
    this.storedNumber = '';
  }

  clearDisplayedNumber(){
    this.displayedNumber = '0';
  }

  setOperator( operator: string ) {
    this.operator = operator;
    this.storedNumber = this.displayedNumber;
    this.displayedNumber = '';
  }

  absoulute(){
    this.displayedNumber = (parseFloat(this.displayedNumber) * -1).toString();
  }

  addDot(){
    this.displayedNumber += '.';
  }

  calculateSquare(){
    this.displayedNumber = (parseFloat(this.displayedNumber)**2).toString();
  }

  calculatePercentage() {
    if (!this.displayedNumber) return;

    if (this.storedNumber && this.operator) {
      const num1 = parseFloat(this.storedNumber);
      const percent = parseFloat(this.displayedNumber) / 100;

      let result = 0;
      switch (this.operator) {
        case '+':
        case '-':
          result = num1 * percent;
          break;
        case '*':
        case '/':
          result = percent;
          break;
      }

      this.displayedNumber = result.toString();
    } else {
      const num = parseFloat(this.displayedNumber) / 100;
      this.displayedNumber = num.toString();
    }
  }

  calculateReciprocal() {
    if (!this.displayedNumber || parseFloat(this.displayedNumber) === 0) return;

    const num = parseFloat(this.displayedNumber);
    const result = 1 / num;
    this.displayedNumber = result.toString();
  }

  operations(){
    const num1 = parseFloat(this.storedNumber);
    const num2 = parseFloat(this.displayedNumber);
    let result = 0;

    switch ( this.operator ){
      case '+':
        result  = num1 + num2;
        break;

      case '-':
        result = num1 - num2;
        break;

      case '*':
        result = num1 * num2;
        break;

      case '/':
        result = num1 / num2;
        break;
      }

      this.displayedNumber = result.toString();

      this.storedNumber = '';
      this.operator = '';

  }


}
