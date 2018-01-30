import { Component, OnInit, Inject } from '@angular/core';
import { Categories, Category } from '../category.model';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from '../../shared/data-store.service';
import { CAT_LIST_PAGE_SIZE } from '../category.tokens';

@Component({
  selector: 'scm-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  categories: Categories;
  totalItemCnt: number = 0;
  pageSize: number;
  pageNo: number = 1;
  constructor( private route: ActivatedRoute,
    private database: DataStoreService,
    @Inject(CAT_LIST_PAGE_SIZE) pageSize: number 
  ) { }

  ngOnInit() {
    this.database.count('category').subscribe(cnt => this.totalItemCnt = cnt);
    this.fetchResolvedData();
  }

  getPagedList() {
    this.database.findList$ByPage<Category>('category', this.pageNo, this.pageSize, this.totalItemCnt)
      .map(action => action.map(action => action.payload.val()))
      .do((list: Categories) => list.sort((p1, p2) => p2.no - p1.no))
      .subscribe(cats => this.categories = cats);
  }

  private fetchResolvedData() {
    const resolvedData = <{ list: Categories }>this.route.snapshot.data;
    this.categories = resolvedData.list;
  }
}
