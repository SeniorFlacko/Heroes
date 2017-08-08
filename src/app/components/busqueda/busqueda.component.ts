import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  los_heroes:Heroe[];  
  termino:string
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,private router:Router) {
    
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['termino'])
      this.termino = params['termino']
      this.los_heroes =this._heroesService.buscarHeroes(params['termino'])
      console.log(this.los_heroes)
    })

   }
  ngOnInit() {
  }
   verHeroe(idx:number){
    console.log(idx)
    this.router.navigate(['/heroe',idx])
  }
}
