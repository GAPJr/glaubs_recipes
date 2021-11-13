import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeComponent } from './recipe/recipe.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeItemDetailComponent } from './recipe-list/recipe-item/recipe-item-detail/recipe-item-detail.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopListEditComponent } from './shop-list-edit/shop-list-edit.component';

@NgModule({
  declarations: [RecipeComponent, RootComponent, HeaderComponent, RecipeListComponent, RecipeItemComponent, RecipeItemDetailComponent, ShopListComponent, ShopListEditComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
