import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ComponentInteraction } from './component-interaction/component-interaction';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';

const routes: Routes = [
  { path: 'binding-property', component: BindingPropertyComponent },
  { path: 'binding-class', component: BindingClassComponent },
  {path: 'binding-style', component: BindingStyleComponent},
  {path: 'binding-event', component: BindingEventComponent},
  {path: 'binding-twoway', component: BindingTwoWayComponent},
  {path: 'danh-sach-san-pham', component: ProductListComponent},
  {path: 'product-dropdown-list', component: ProductDropdownListComponent}, 
  {path: 'product-list-call-service', component: ProductListCallServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
