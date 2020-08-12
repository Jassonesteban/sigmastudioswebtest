import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { contact } from '../Models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ServicesApiService {
  username: string;

  constructor( private http: HttpClient) { }

  getState(){
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json');
  }

  NewContact(contacto: contact){
    return this.http.put('http://localhost:2000/contacts', contacto);
  }
}
