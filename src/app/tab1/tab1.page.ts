import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private altura: string;
  private resultado: number;

  constructor() {}

  calculaPeso() {
    
    this.resultado = (parseFloat(this.altura) - 100) * 0.9;
  }

  exibeResult(): number{
    return this.resultado;
  }


}