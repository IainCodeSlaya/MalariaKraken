import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CausesApiService } from '../../services/causes-api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-causes-add',
  templateUrl: './causes-add.component.html',
  styleUrls: ['./causes-add.component.sass']
})
export class CausesAddComponent implements OnInit {

  causeForm: FormGroup;
  causeName = '';
  malariaId = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: CausesApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.causeForm = this.formBuilder.group({
      'causeName': [null, Validators.required],
      'malariaId': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCause(form)
      .subscribe((res: { [x: string]: any; }) => {
        const cause = res['causeResponse'];
        const id = cause['causeID'];
        this.isLoadingResults = false;
        this.router.navigate(['/causes-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}

//error control
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
