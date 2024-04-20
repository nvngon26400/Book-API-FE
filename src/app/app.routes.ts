import { RouterModule, Routes } from '@angular/router';
import { BookComponentComponent } from './book-component/book-component.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'book', component: BookComponentComponent } //path to the book component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class BookComponent { }

