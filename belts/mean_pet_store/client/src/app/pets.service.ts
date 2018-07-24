import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  pet;

  constructor(private _http: HttpClient){}

  getPets() {
    return this._http.get('/pets');
  }

  createPets(pets) {
    return this._http.post('/pets', pets);
  }

  updatePet(thisPet) {
    return this._http.patch(`/pets/${thisPet._id}`, thisPet);
  }

  getThisPet(thisPet){
    return this._http.get(`/pets/${thisPet._id}`, thisPet);
  }

  removePet(pet){
    return this._http.delete(`/pets/${pet._id}`, pet);
  }

  like(pet){
    return this._http.get(`/pets/${pet._id}/like`, pet);
  }

}
