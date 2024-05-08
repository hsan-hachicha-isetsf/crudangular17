import { Component, inject, signal } from '@angular/core';
import { Article } from '../../../classes/article';
import { ArticlesService } from '../../../services/articles.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarticles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listarticles.component.html',
  styleUrl: './listarticles.component.css'
})
export class ListarticlesComponent {
articles=signal<Article[]>([])
private servart=inject(ArticlesService)

ngOnInit(){
  this.loadArticles()
}
loadArticles(){
  this.articles=this.servart.getarticles()
}

deletearticle(article:Article  ){
  this.servart.deletearticle(article)
}
}
