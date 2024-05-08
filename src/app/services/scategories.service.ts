import { Injectable, Signal, inject, signal } from '@angular/core';
import { Scategorie } from '../classes/scategorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  scategories=signal<Scategorie[]>([])
  private http=inject(HttpClient)
  private url="http://localhost:3001/api/scategories"

  constructor() { }
  getScategories(){
    this.http.get<Scategorie[]>(this.url).subscribe(data=>{
      this.scategories.set(data)
    })
    return this.scategories;
  }
  createScategoirie(scategory:Scategorie){
    return this.http.post(this.url , scategory).subscribe(((data: Scategorie)=>{
    this.scategories.set([data,...this.scategories()]);
      }))
  }
  updateScatergorie(scategory:Scategorie){
    this.http.put(this.url+ '/' + scategory._id, scategory)
    .subscribe(() => {     
    return this.scategories.update(scategories => {
      const index = scategories.findIndex(sc => sc._id === scategory._id);
      scategories[index] = scategory;
      return scategories;
    });
  })
  }
  deleteScategorie(scategory:Scategorie){
  this.http.delete<Scategorie>(this.url + '/' + scategory._id)
  .subscribe(() => {
   return this.scategories.update(scategories => scategories.filter(sc => sc._id !== scategory._id));
  }
)}

findScategory(_id:object | undefined) {

  return this.http.get(this.url + '/' +  _id)
     }
}
