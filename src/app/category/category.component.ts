import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Category List";
  categories: Category[]=[
    {id:1, name:"Electronics"},
    {id:1, name:"Computers"},
    {id:1, name:"Headphones"},
    {id:1, name:"Mouse"},
    {id:1, name:"Speakers"}
  ]

  ngOnInit(): void {
  }

}
