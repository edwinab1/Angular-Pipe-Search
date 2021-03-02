import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { users } from '../../data/users'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = []

  searchForm = new FormControl('');

  SearchValue: String;

  constructor() { }

  ngOnInit(): void {
    this.data = users;
    this.searchForm.valueChanges.subscribe(data => this.SearchValue = data);
  }
}
