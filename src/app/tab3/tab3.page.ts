import { Component } from '@angular/core';
import { ExecFileOptionsWithStringEncoding } from 'child_process';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private altura: string;
  private resAltura: number;
  private peso: string;
  private resultado: number;

  constructor() {}


  calcularImc(){
    this.resAltura = parseFloat(this.altura) * parseFloat(this.altura);
    this.resultado = parseFloat(this.peso) / this.resAltura;
  }

  exibeResult(): number{
    return this.resultado;
  }


}