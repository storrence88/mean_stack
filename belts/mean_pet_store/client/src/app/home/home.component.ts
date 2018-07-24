import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any = [];
  pet: any = [];
  thisPet: any;
  
  constructor(private _petsService: PetsService){}

  ngOnInit(){
    this.getPets();
  }

  getPets(){
    let observable = this._petsService.getPets();
    observable.subscribe((pets) => {
      this.pets = pets;
      console.log(`Here are all of the pets ${pets}`);
    });
  }

  editPet(pet, e) {
    this._petsService.pet = pet;
    console.log(this._petsService.pet);
  }

  getOnePet(pet){
    this._petsService.pet = pet;
    console.log(this._petsService.pet);
  }

}
