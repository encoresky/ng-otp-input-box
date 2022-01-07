import { NgModule } from '@angular/core';
import { OtpInputBoxComponent } from './otp-input-box.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [OtpInputBoxComponent],
  imports: [ CommonModule
  ],
  exports: [OtpInputBoxComponent]
})
export class OtpInputBoxModule { }
