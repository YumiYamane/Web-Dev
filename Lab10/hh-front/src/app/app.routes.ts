import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

export const routes: Routes = [
    {path: '', component: CompaniesComponent},
    {path: 'companies/:companyId/vacancies', component: VacanciesComponent}
];
