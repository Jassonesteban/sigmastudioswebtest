import { Component, OnInit } from '@angular/core';
import { ServicesApiService } from '../../Service/services-api.service';
import { contact } from '../../Models/contacts';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private state: string;
  stated: any = [];

  contacto: contact = {
    name: '',
    email: '',
    state: '',
    city: '',
  };
mensajeWarning = '';
mensaje = '';
mensajeExito = '';

  constructor(private service: ServicesApiService) { }

  ngOnInit(): void {
    this.service.getState().subscribe(
      res => {
        this.stated = res;
      },
      err => console.log(err)
    );
  }

  NewContact(name, email, state, city){
    console.log('Name: ' + name.value );
    console.log('Email: ' + email.value );
    console.log('state: ' + state.value );
    console.log('city: ' + city.value );
    // tslint:disable-next-line: max-line-length
    if (name.value === '' || email.value === '' || state.value === '' || city.value === ''){

      this.mensajeWarning = 'Atención, tienes campos vacios';
    } else {
        this.mensaje = 'Estamos enviando tus datos, por favor espera';
        this.service.NewContact(this.contacto).subscribe(
          res => {
            this.mensajeExito = 'Tu información ha sido recibida satisfactoriamente';
          },
          err => console.log(err)
        );
      }
    }

 /*loadStates(){
      fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
      .then(respuesta => respuesta.json())
      .then(city => {
        // tslint:disable-next-line: no-shadowed-variable
        city.forEach(city => {
          console.log(city);
        });
      // tslint:disable-next-line: semicolon
      })
    }*/
}
