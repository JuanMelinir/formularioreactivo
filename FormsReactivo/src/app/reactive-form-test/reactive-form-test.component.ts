import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {
   formularioLogin!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioLogin=this.fb.group({
      usuario:['',Validators.required,Validators.email],
      contrasena:['',Validators.required,Validators.minLength(3),Validators.maxLength(8)]
    })
  }
  submit(){
    console.log(this.formularioLogin.value);
  }

}
