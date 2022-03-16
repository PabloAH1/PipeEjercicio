import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizar' })
export class CapitalizarPipe implements PipeTransform{
  transform(texto: string): string {
    //Pasamos todo a minúsculas
    texto = texto.toLocaleLowerCase();
    // Separa la cadena en array de strings
    let palabras = texto.split(' ');
    //Crea un nuevo array, primera letra a mayúscula y el resto a minúscula
    palabras = palabras.map((palabras) => {
      return palabras[0].toUpperCase() + palabras.substring(1);
    });
    return palabras.join(' ');
  }
}
