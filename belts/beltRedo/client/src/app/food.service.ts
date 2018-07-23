import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  food;
  reviews;

  constructor(private _http: HttpClient) {}

  getFoods() {
    return this._http.get('/foods');
  }

  createFood(foods) {
    return this._http.post('/foods', foods);
  }

  updateFood(thisFood) {
    return this._http.patch(`/foods/${thisFood._id}`, thisFood);
  }

  removeFood(food) {
    return this._http.delete(`/foods/${food._id}`, food);
  }

  createReview(food){
    return this._http.patch(`/foods/${food._id}/review`, food);
  }

}
