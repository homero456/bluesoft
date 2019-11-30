import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public result: any;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:5000/api';
   }
  public url : string;

  getCategory(): Observable<any> {

    return this.http.get(this.url+'/listCategories');
  }


  saveCategory(category: Category) {
  
    return this.http.post<any>(this.url+'/saveCategories', category);
  }

  editCategory(category: Category) {
  
    return this.http.put<any>(this.url+'/updateCategories/'+category.id, category);
  }

  deleteCategory(id: string) {
    
    return this.http.delete<any>(this.url+'/deleteCategories/'+id);
  }

}
