import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona'

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit{

  personas:Persona[] = [
    { nombre: 'Juan', edad: 20},
    { nombre: 'Pedro', edad: 30},
    { nombre: 'Ana', edad: 26},
    { nombre: 'Juan Jose', edad: 38}
  ];

  constructor(){}

  ngOnInit(): void {
  }
}
