import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActionMode } from '../../shared/scm-shared-util';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng2-toastr';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  subTitle: string;
  actionMode: ActionMode;
  categoryForm: FormGroup;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private database: DataStoreService,
    private fb: FormBuilder,
    private toastr: ToastManager
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

}
