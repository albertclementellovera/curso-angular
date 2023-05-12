import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators  } from '@angular/forms';


@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component{


  constructor(private fb: FormBuilder){

  }

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  /*formUser = new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });*/

  // variables correspondientes al mismo formulario
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  formUser = this.fb.group({
    'name':['', Validators.required],
    'email':['', [Validators.required,
      Validators.pattern(this.emailPattern)]]
});

  procesar(){
    console.log(this.formUser.value);
  }

  /*name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  */
}
