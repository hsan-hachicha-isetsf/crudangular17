import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../../../classes/categorie';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifcateg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifcateg.component.html',
  styleUrl: './modifcateg.component.css'
})
export class ModifcategComponent {
  newcategory=signal<Categorie>({})
private catserv=inject(CategoriesService)
private router=inject(Router)
private route=inject(ActivatedRoute)
catId:Object;
ngOnInit(){
this.loadcategorie()
}
loadcategorie(){
  this.catId=this.route.snapshot.params['id']
this.catserv.findCategory(this.catId).subscribe(data=>{
  this.newcategory.set(data)
})
}
  annuler(){
    this.router.navigate(["affichcat"])
  }
  updateCategory(){
    this.catserv.updateCategory(this.newcategory())
    this.router.navigate(["affichcat"])
  }
}
