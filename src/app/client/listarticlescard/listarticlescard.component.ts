import { Component, inject, signal } from '@angular/core';
import { Article } from '../../classes/article';
import { ArticlesService } from '../../services/articles.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarticlescard',
  standalone: true,
  imports: [],
  templateUrl: './listarticlescard.component.html',
  styleUrl: './listarticlescard.component.css'
})
export class ListarticlescardComponent {
articles=signal<Article[]>([])
private servart=inject(ArticlesService)
private cartserv=inject(CartService)
//private router=inject(Router)

ngOnInit(){
  this.loadArticles()
}
loadArticles(){
  this.articles=this.servart.getarticles()
}
addTocard(article:Article){
  this.cartserv.addToCart(article)
  //this.router.navigate(["/cartart"])
}
}
