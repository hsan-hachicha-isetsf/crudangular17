import { Routes } from '@angular/router';
import { ListarticlesComponent } from './components/articles/listarticles/listarticles.component';
import { ListcategoriesComponent } from './components/categories/listcategories/listcategories.component';
import { AjoutcategComponent } from './components/categories/ajoutcateg/ajoutcateg.component';
import { ModifcategComponent } from './components/categories/modifcateg/modifcateg.component';
import { ListscategoriesComponent } from './components/scategories/listscategories/listscategories.component';
import { AjoutscategComponent } from './components/scategories/ajoutscateg/ajoutscateg.component';
import { ModifscategComponent } from './components/scategories/modifscateg/modifscateg.component';
import { AjoutarticleComponent } from './components/articles/ajoutarticle/ajoutarticle.component';
import { ModifarticleComponent } from './components/articles/modifarticle/modifarticle.component';
import { ListarticlescardComponent } from './client/listarticlescard/listarticlescard.component';
import { CartComponent } from './client/cart/cart.component';

export const routes: Routes = [
    { path: 'affichcat', component: ListcategoriesComponent },
    { path: 'ajoutcat', component: AjoutcategComponent },
    { path: 'updatecat/:id', component: ModifcategComponent },
    
    { path: 'listscat', component: ListscategoriesComponent } ,
    { path: 'addscat', component: AjoutscategComponent } ,
    { path: 'updatescat/:id', component: ModifscategComponent } ,
  
    { path: 'afficharticles', component: ListarticlesComponent } ,
    { path: 'addarticle', component: AjoutarticleComponent } ,
    { path: 'updatearticle/:id', component: ModifarticleComponent } ,
    {path:'articlescard',component:ListarticlescardComponent},
    {path:"cartart",component:CartComponent}

];
