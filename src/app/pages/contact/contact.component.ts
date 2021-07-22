import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  data = {
    name: '',
    subject: '',
    text: '',
  };
  reLargo =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public http: HttpClient) {}

  sendMessage() {
    try {
      if (
        this.reLargo.test(this.data.subject) &&
        this.data.name.length > 0 &&
        this.data.text.length > 0
      ) {
        // console.log("correcto");
        this.http
          .post('https://richardevserver.herokuapp.com/message', this.data)
          .subscribe(
            (res) => {
              // console.log("mensaje enviado", res);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mensaje enviado',
                showConfirmButton: false,
                timer: 1500,
              });
              this.data.name = '';
              this.data.subject = '';
              this.data.text = '';
            },
            (error) => {
              console.log(error);
              Swal.fire({
                title: 'Mensaje no enviado, Vuelva a Intentarlo',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp',
                },
              });
            }
          );
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Datos Ingresados Incorrectos',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
