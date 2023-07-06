import { Component,  OnChanges, OnDestroy, OnInit, SimpleChanges,Output, EventEmitter  } from '@angular/core';
import { Input } from "@angular/core";



@Component({
  selector: 'app-hijo-menor',
  templateUrl: './hijo-menor.component.html',
  styleUrls: ['./hijo-menor.component.css']
})
export default class HijoMenorComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item = '';
  @Input() objectCero!: string;



  selection!: string
  cities: any [] =[
    'Barcelona',
    'India',
    'Guatemala'
  ]
  
  //1.Es el primero metodo que se ejecuta si no existe input o Ouput
  ngOnInit(): void {
    console.log('OnInit ->');
  }

  //2.Objeto que traera los cambios anteriores y los nuevos 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->',changes);
  }

  //3.Este se ejecuta siempre que se destruye el componente 
  ngOnDestroy(): void {
    console.log('Destroy');
  }

  @Output() botonEmitido = new EventEmitter();

  emitirBoton() {
    this.botonEmitido.emit();
  }

  botones = [
    { texto: 'Botón 1', id: 1 },
    { texto: 'Botón 2', id: 2 },
    { texto: 'Botón 3', id: 3 }
  ];

  botonClic(boton: any) {
    // Lógica del botón clicado
  }

}
