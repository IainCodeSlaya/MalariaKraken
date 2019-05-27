import { Component, OnInit } from '@angular/core';

import { CausesApiService } from '../../services/causes-api.service';
import { Cause } from '../../causes/causes/cause';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.sass']
})
export class CausesComponent implements OnInit {

  displayedColumns: string[] = ['causeId', 'causeName', 'malariaId'];
  data: Cause[] = [];
  isLoadingResults = true;

  constructor(private api: CausesApiService) { }

  ngOnInit() {
    this.api.getAllCause()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
