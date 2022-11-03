import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = [`Spiderman`,`Superman`,`Batman`, `Thor`,`Capitan America`];
  heroeBorrado: string = ``;
  borrarHeroe() {
    console.log(`borrando...`);
    const heroeBorrado = this.heroes.pop();
    //console.log(heroeBorrado);
    this.heroeBorrado = heroeBorrado || "";
  }
}
