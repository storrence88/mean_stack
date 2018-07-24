import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PetsService } from '../../pets.service';
import { Pet } from '../../pet';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  thisPet: Pet;
  errors: string[];
  pet: any = [];
  likes: boolean;

  constructor(
    private _petsService: PetsService,
    private _route: ActivatedRoute,
    private _router: Router
  ){ 
    this.thisPet = new Pet();
  }
  

  ngOnInit() {
    this.thisPet = this._petsService.pet
    console.log(this.thisPet)
    this.errors;
    this.getOnePet(this.thisPet);
    // this._route.params.subscribe((params: Params) => console.log(params['id']));
  }

  goHome() {
    this._router.navigate(['']);
    console.log('going home')
  }

  getOnePet(thisPet) {
    let observable = this._petsService.getThisPet(this.thisPet);
    console.log(observable);
    observable.subscribe((pet) => {
      this.pet = pet;
      console.log(`Here is your request pet! ${this.pet.name}`);
    });
  }

  delete(pet){
    let observable = this._petsService.removePet(pet);
    observable.subscribe((pet) => {
      this.pet = pet;
      console.log(`Successfully deleted pet! ${this.pet}`);
    });
  }

  like(pet){
    let observable = this._petsService.like(pet);
    observable.subscribe((pet) => {
      this.pet = pet;
      this.likes = true;
      
      console.log(`Successfully liked this pet! ${this.pet}`)
    });
  }
}
