import { Component, inject, signal } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Article } from '../../../classes/article';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Scategorie } from '../../../classes/scategorie';
import { ScategoriesService } from '../../../services/scategories.service';

@Component({
  selector: 'app-ajoutarticle',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './ajoutarticle.component.html',
  styleUrl: './ajoutarticle.component.css'
})
export class AjoutarticleComponent {
  private servart=inject(ArticlesService)
  private scatserv=inject(ScategoriesService)
  newarticle=signal<Article>({})
  scategories=signal<Scategorie[]>([])
  private router=inject(Router)
ngOnInit(){
  this.loadscategories()
}
loadscategories(){
  this.scategories=this.scatserv.getScategories()
}

  ajoutarticle(){
 this.servart.createarticle(this.newarticle())
 this.router.navigate(['afficharticles'])
  }
 
}
