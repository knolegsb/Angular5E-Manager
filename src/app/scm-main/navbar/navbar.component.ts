import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataStoreService } from '../../shared/data-store.service';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/take';
import { Product } from '../../product/product.model';

@Component({
  selector: 'scm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = '상품관리 시스템';
  searchValue = "";
  session$: Observable<boolean>;
  sessionBtnName = '로그인';

  constructor(
    private dataStoreService: DataStoreService,
    private toastr: ToastsManager,
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.session$ = this.afAuth.authState.map(user => !!user);
    this.session$.subscribe(auth => this.sessionBtnName = auth ? '로그아웃' : '로그인');
  }

  searchProduct(no: number) {
    // console.log(`search: ${no}`);
    // this.searchValue = null;
    this.dataStoreService.findObject$<Product>('product', no).valueChanges()
      .subscribe(obj => {
        debugger;
        if (obj) {
          this.router.navigate(['product-list', 'product', no], {queryParams: { 'action' : 'edit' }});
        }
        else {
          this.toastr.warning('상품 정보가 없습니다.');
        }
      });
  }

  checkSession() {
    this.session$.take(1).subscribe(s => s ? this.afAuth.auth.signOut() : 
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()));
  }
}
