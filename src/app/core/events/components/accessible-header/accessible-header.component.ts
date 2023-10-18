import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-accessible-header',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './accessible-header.component.html',
  styleUrls: ['./accessible-header.component.scss']
})
export class AccessibleHeaderComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  onSearch(): void {
    if (!this.searchForm.controls['search'].value) {
      return;
    }
    this.search.emit(this.searchForm.controls['search'].value);
  }
}
