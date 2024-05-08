import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Categorie } from '../../../classes/categorie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css'
})
export class ListcategoriesComponent {
  catserv=inject(CategoriesService)
  categ=signal<Categorie[]>([])
ngOnInit(){
  this.loadcategories()
  //console.log(this.categ)
}
  loadcategories(){
    this.categ=this.catserv.getcategories()
  }
  deletecategorie(categorie:Categorie  ){
    this.catserv.deleteCategory(categorie)
  }

}
