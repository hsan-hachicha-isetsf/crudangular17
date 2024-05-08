import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Article } from '../classes/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
private url="http://localhost:3001/api/articles"
http=inject( HttpClient)
articles=signal<Article[]>([])
  constructor() { }
//sélectionner la liste des articles
getarticles(){
  this.http.get<Article[]>(this.url).subscribe(data=>{
    this.articles.set(data)
  })
return this.articles
}

//créer un article
createarticle(article:Article){
  return this.http.post<Article>(this.url , article).subscribe(((data: Article)=>{
  this.articles.set([data,...this.articles()]);
    }))
}

//modifier un article
updatearticle(article:Article){
  this.http.put(this.url+ '/' + article._id, article)
    .subscribe(data => {
     
    return this.articles.update(articles => {
      const index = articles.findIndex(a => a._id === article._id);
      articles[index] = article;
      return articles;
    });
  })
}


//supprimer un article
deletearticle(article:Article){
  this.http.delete<Article>(this.url + '/' + article._id)
  .subscribe(() => {
   return this.articles.update(articles => articles.filter(a => a._id !== article._id));
})
}

findArticle(_id:object | undefined) {

  return this.http.get(this.url + '/' +  _id)
     }

}
