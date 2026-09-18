import { Service } from '@angular/core';
import {Injectable} from '@angular/core';
import {Product } from '../classes/IProducts';
import {catchError, Observable, throwError, retry} from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductHttpHandleErrorService {
    private _url:string = "/dataset/product.json";
    constructor(private _http:HttpClient) { }
    getProductList():Observable<Product[]>{
        return this._http.get<Product[]>(this._url).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    handleError(error: HttpErrorResponse) {
        return throwError(()=> new Error(error.message));
}
}