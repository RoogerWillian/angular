import {Restaurant} from './restaurant/restaurant.model';
import {Injectable} from '@angular/core';
import {MEAT_API} from '../app.api';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import {ErrorHandler} from '../app.error-handler';
import {Review} from '../restaurant-detail/reviews/reviews.model';
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) {
  }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<Review> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .catch(ErrorHandler.handleError);

  }
}
