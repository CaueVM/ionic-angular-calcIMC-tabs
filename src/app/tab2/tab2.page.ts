import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private altura: string;
  private resultado: number;

  constructor() {}

  calculaPeso() {
    
    this.resultado = (parseFloat(this.altura) - 100) * 0.85;
  }

  exibeResult(): number{
    return this.resultado;
  }
 
}