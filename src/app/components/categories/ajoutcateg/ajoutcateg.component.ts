import { Component, inject, signal } from '@angular/core';
import { Categorie } from '../../../classes/categorie';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ajoutcateg',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './ajoutcateg.component.html',
  styleUrl: './ajoutcateg.component.css'
})
export class AjoutcategComponent {
  newcategory=signal<Categorie>({})
private catserv=inject(CategoriesService)
private router=inject(Router)

  createCategory(){
 this.catserv.createCategory(this.newcategory())
 this.router.navigate(["affichcat"])
  }
  
}
