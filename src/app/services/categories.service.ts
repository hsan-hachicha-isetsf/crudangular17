import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Categorie } from '../classes/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
private url="http://localhost:3001/api/categories"
http=inject(HttpClient)
categories=signal<Categorie[]>([])
  constructor() {}
getcategories(){
  this.http.get<Categorie[]>(this.url).subscribe(data=>{
    this.categories.set(data)
  })
  return this.categories;
}
deleteCategory(category:Categorie) {
  this.http.delete<Categorie>(this.url + '/' + category._id)
  .subscribe(data => {
   
    return this.categories.update(categories => categories.filter(t => t._id !== category._id));
  })

  
}





createCategory(category: Categorie) {
  return this.http.post(this.url , category).subscribe(((data: Categorie)=>{
      
    this.categories.set([data,...this.categories()]);
    }))
  }
  updateCategory(category: Categorie) {
    this.http.put(this.url+ '/' + category._id, category)
    .subscribe(data => {
     
    return this.categories.update(categories => {
      const index = categories.findIndex(t => t._id === category._id);
      categories[index] = category;
      return categories;
    });
  })
 

  }


  findCategory(_id:object | undefined) {

    return this.http.get(this.url + '/' +  _id)
       }

}
