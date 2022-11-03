
import { Component } from "@angular/core";

@Component({
        selector: `app-contador`,
        template: `
        <h1>{{titulo}}</h1>
<h3>La base es: <strong> {{this.base}} </strong></h3>

<button (click)="acumular(+this.base)"> + {{this.base}} </button>

<span>{{ numero }}</span>

<button (click)="acumular(-this.base);"> -  {{this.base}} </button>
    
        
        `
    })

export class ContadorComponent {

    titulo: string = 'Contador Module' ;
    numero: number = 10;
  
    base: number = 5;
  
    acumular(valor:number) {
      this.numero += valor;
    
    }
}