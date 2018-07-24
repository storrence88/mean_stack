import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PetsService } from '../../pets.service';
import { Pet } from '../../pet';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  thisPet: Pet;
  errors: string[];
  pet: any;
  
  constructor(
    private _petsService: PetsService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.thisPet = new Pet();
  }
  
  ngOnInit(){
    this.thisPet = this._petsService.pet
    console.log(this.thisPet)
    this.errors = [];
  }

  editPet(thisPet, e): void {
    e.preventDefault();
    // this._petsService.pet = thisPet;
    // console.log(this._petsService.pet)
    let observable = this._petsService.updatePet(this.thisPet);
    observable.subscribe(
      // Callback
      (pet) => {
        console.log(pet);
        this._router.navigate([''])
      },
      // Errorback
      (err) => {
        this.errors = err.error;
        console.log(this.errors);
      }
    )
  }
}
