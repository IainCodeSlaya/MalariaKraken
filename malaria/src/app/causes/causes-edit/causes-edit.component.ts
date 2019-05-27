import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CausesApiService } from '../../services/causes-api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-causes-edit',
  templateUrl: './causes-edit.component.html',
  styleUrls: ['./causes-edit.component.sass']
})
export class CausesEditComponent implements OnInit {

  causeForm: FormGroup;
  causeId = null;
  causeName = '';
  malariaId: null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: CausesApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCause(this.route.snapshot.params['id']);
    this.causeForm = this.formBuilder.group({
      'causeName': [null, Validators.required],
      'malariaID': [null, Validators.required]
    });
  }

  getCause(id: number) {
    this.api.getCause(id).subscribe(data => {
      this.causeId = data.causeId;
      this.causeForm.setValue({
        causeName: data.causeName,
        malariaId: data.malariaId
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateCause(this.causeId, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/causes']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

  causeDetails() {
    this.router.navigate(['/causes-details', this.causeId]);
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
