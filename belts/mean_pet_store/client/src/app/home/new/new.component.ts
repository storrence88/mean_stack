import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PetsService } from '../../pets.service';
import { Pet } from '../../pet';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet: Pet;
  errors: string[];

  constructor(
    private _petsService: PetsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.pet = new Pet();
    this.errors = [];
    // this._route.params.subscribe((params: Params) => console.log(params['id']));
  }

  goHome() {
    this._router.navigate(['']);
    console.log('going home')
  }

  createPet(e): void {
    e.preventDefault();
    let observable = this._petsService.createPets(this.pet);
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
