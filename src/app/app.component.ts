import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Bully Maguire';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ["Batman", "Superman", "Wolverine", ""]
  PI: number = Math.PI;
}
