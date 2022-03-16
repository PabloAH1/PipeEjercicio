import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'letraNumero' })
export class LetraNumeroPipe implements PipeTransform{
//transform(texto: string,cifrado:number): string {
  transform(texto: string): string {
    //Separa las palabras
    let nombres = texto.split(' ');
    nombres = nombres.map((nombre) => {
      let palabraCod:string="";
      //Recorre las letras de cada palabra
      for (let i = 0; i < nombre.length; i++) {
        let letraCod=nombre.charCodeAt(i);
//let letra=String.fromCharCode(letraCod+cifrado);
        let letra=String.fromCharCode(letraCod+4);
        palabraCod=palabraCod+letra;
      }
      return palabraCod;
    });
    return nombres.join(' ');
  }
}
