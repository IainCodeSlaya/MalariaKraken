import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CausesApiService } from '../../services/causes-api.service';
import { Cause } from '../../causes/causes/cause';

@Component({
  selector: 'app-causes-detail',
  templateUrl: './causes-detail.component.html',
  styleUrls: ['./causes-detail.component.sass']
})
export class CausesDetailComponent implements OnInit {

  cause: Cause = {
    causeId: null,
    causeName: '',
    malariaId: null
  }
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: CausesApiService, private router: Router) { }

  getCauseDetails(id) {
    this.api.getCause(id)
      .subscribe(data => {
        this.cause = data;
        console.log(this.cause);
        this.isLoadingResults = false;
      });
  }

  ngOnInit() {
    this.getCauseDetails(this.route.snapshot.params['id'])
  }

  deleteCause(id: number) {
    this.isLoadingResults = true;
    this.api.deleteCause(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/causes']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }
}
