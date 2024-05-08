import { Component, inject, signal } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ScategoriesService } from '../../../services/scategories.service';
import { Article } from '../../../classes/article';
import { Scategorie } from '../../../classes/scategorie';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifarticle',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './modifarticle.component.html',
  styleUrl: './modifarticle.component.css'
})
export class ModifarticleComponent {
  private servart=inject(ArticlesService)
  private scatserv=inject(ScategoriesService)
  newarticle=signal<Article>({})
  scategories=signal<Scategorie[]>([])
  private route=inject(ActivatedRoute)
  private router=inject(Router)
  artID:object
ngOnInit(){

  this.loadscategories()
  this.loadarticle()
}
loadarticle(){
  this.artID=this.route.snapshot.params['id']
  this.servart.findArticle(this.artID).subscribe(data=>{
    this.newarticle.set(data)
  })
}


loadscategories(){
  this.scategories=this.scatserv.getScategories()
}
modifarticle(){
  this.servart.updatearticle(this.newarticle())
  this.router.navigate(['afficharticles'])
}
}
