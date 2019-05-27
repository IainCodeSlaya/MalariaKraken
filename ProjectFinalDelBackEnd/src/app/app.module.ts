import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CausesComponent } from './interfaces/causes/causes/causes.component';
import { RiskComponent } from './interfaces/risk/risk.component';
import { HealthAdminComponent } from './interfaces/health-admin/health-admin.component';
import { InfectionCycleComponent } from './interfaces/infection-cycle/infection-cycle.component';
import { MalariaTypeComponent } from './interfaces/malaria-type/malaria-type.component';
import { CountryComponent } from './interfaces/country/country.component';
import { QuickFactComponent } from './interfaces/quick-fact/quick-fact.component';
import { VaccinationComponent } from './interfaces/vaccination/vaccination.component';
import { SymptomComponent } from './interfaces/symptom/symptom.component';
import { PreventativeMeasureComponent } from './interfaces/preventative-measure/preventative-measure.component';
import { RegionComponent } from './components/region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    CausesComponent,
    RiskComponent,
    HealthAdminComponent,
    InfectionCycleComponent,
    MalariaTypeComponent,
    CountryComponent,
    QuickFactComponent,
    VaccinationComponent,
    SymptomComponent,
    PreventativeMeasureComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
