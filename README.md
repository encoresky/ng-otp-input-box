## Installation
```
npm install --save @encoreskytech/ng-otp-input-box
```

## Usage
Add NgOtpInputBoxModule to imports `app.module.ts` something like

    import { AppComponent } from  './app.component';
    import { OtpInputBoxModule } from  '@encoreskytech/ng-otp-input-box';
    
        @NgModule({
        declarations: [AppComponent],
        imports: [OtpInputBoxModule]
        })

Add component to your page:
  

    <ng-otp-input-box [otpLength]="6" [onlyNumber]="false" [upperCase]="true" [mask]="false" (onInputChange)="fetchOTPvalue($event)" ></ng-otp-input-box>


## API

<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>default</th>
<th>Description</th>
</tr>
<tr>
<td>otpLength</td>
<td>Boolean</td>
<td>false</td>
<td>6</td>
<td>Length of the otp</td>
</tr>
<tr>
<td>onlyNumber</td>
<td>Boolean</td>
<td>false</td>
<td>--</td>
<td>To allow only integer values</td>
</tr>
<tr>
<td>upperCase</td>
<td>Boolean</td>
<td>false</td>
<td>--</td>
<td>To make input field capitalize</td>
</tr>
<tr>
<td>mask</td>
<td>Boolean</td>
<td>false</td>
<td>--</td>
<td>To make input field as password</td>
</tr>
<tr>
<td>onInputChange</td>
<td>function</td>
<td>true</td>
<td>--</td>
<td>Function that will receive the otp</td>
</tr>

</table>

</table>


## Contributor
[Mahesh Soni](https://github.com/maheshsoniest)