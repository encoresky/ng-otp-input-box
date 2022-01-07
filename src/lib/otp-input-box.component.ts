import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter, } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'ng-otp-input-box',
  template: `
<div method="get" class="digit-group" data-group-name="digits" autocomplete="off">
  <input class="otp-input-digit" *ngFor="let i of numbers" [attr.type]="mask ? 'password' : 'text'" id="digit-{{i}}" name="digit-{{i}}" data-next="digit-{{i+1}}"  data-previous="digit-{{i-1}}" (keydown)="validateInput($event)" (keyup)="handleInputEvent($event)"/>
</div>
  `,
  styles :[`.digit-group .splitter {
		padding: 0 5px;
		color: black;
		font-size: 24px;
	}

.digit-group input {
	width: 30px;
	height: 50px;
	background-color: white;
	border: 1px dotted gray;
	line-height: 50px;
	text-align: center;
	font-size: 24px;
	font-family: Raleway, sans-serif;
	font-weight: 200;
	color: black;
	margin: 0 2px;
}`],
  
  encapsulation : ViewEncapsulation.None
})
export class OtpInputBoxComponent implements OnInit {
  @Input() otpLength : number = 6;
  @Input() mask : boolean = false;
  @Input() upperCase : boolean = false;
  @Input() onlyNumber : boolean = false;
  @Output() onInputChange : EventEmitter <string> = new EventEmitter<string>();
  validInput = true;
  numbers : number[];
  constructor() { 
  }

  ngOnInit(): void {
    this.numbers = Array(this.otpLength).fill(1).map((x, i) => i + 1);
    console.log(this.mask);
  }
  validateInput(event){
    if(this.onlyNumber && !this.isValidNumber(event.keyCode)){
      this.validInput = false;
      event.preventDefault();
      return;
    }
  }
  handleInputEvent(event)
  {
    if(!this.isValidKey(event.keyCode))
      return;

      let curElement = event.target;
      let prevElement = event.target.previousElementSibling;
      let nextElement = event.target.nextElementSibling;
      if(this.upperCase && !this.onlyNumber)
        event.target.value = String.fromCharCode(event.keyCode);
      else if(curElement.value.length >1)
        curElement.value = String.fromCharCode(event.keyCode).toLowerCase();
        
      if((event.keyCode == 8 || event.keyCode == 127)) { 
        curElement.value='' ; if (prevElement !== null) prevElement.focus(); 
      }
      else if(event.target.value.length ==0) 
          event.preventDefault();
      else { 
        if (nextElement == null && curElement.value !=='' ) {
          this.sendRecord();
        }
        else { 
          if (nextElement != null) nextElement.focus(); event.preventDefault(); 
        }
      }
      this.sendRecord();
  }

  public sendRecord() {  
    var elements = document.getElementsByClassName("otp-input-digit");
    var OTPvalue :string = "";
    for (var i = 0; i < elements.length; i++) {
          OTPvalue += (<HTMLInputElement>elements[i]).value
    }
    this.onInputChange.emit(OTPvalue);
  }

  //Test the entered key is valid input
  isValidKey(keycode){
    var valid = 
        (keycode > 47 && keycode < 58)   || // number keys
        keycode == 32 || keycode == 13   || // spacebar & return key(s) (if you want to allow carriage returns)
        (keycode > 64 && keycode < 91)   || // letter keys
        (keycode > 95 && keycode < 112)  || // numpad keys
        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223) || (keycode == 8) || (keycode == 127);   
    return valid;
  }

  //If user want only integer input values
  isValidNumber(keycode){
    var valid = 
        (keycode > 47 && keycode < 58)   || // number keys
        (keycode > 95 && keycode < 112)  || // numpad keys
        (keycode > 218 && keycode < 223) || (keycode == 8) || (keycode == 127);   
    return valid;
  }

}
