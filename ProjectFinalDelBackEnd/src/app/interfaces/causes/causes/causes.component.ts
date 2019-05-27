import { Component, OnInit } from '@angular/core';
import { CausesApiService } from '../../../shared/causes-api.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent implements OnInit {

  constructor(private api: CausesApiService) { }

  ngOnInit() {
  }

}
