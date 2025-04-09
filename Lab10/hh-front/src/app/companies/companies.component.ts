import { Component } from '@angular/core';
import { CompaniesService } from '../services/companies.service';
import { Company } from '../models/company';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-companies',
  imports: [CommonModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  companyList: Company[] = [];

  constructor(
    private companiesService: CompaniesService,
    private router: Router
  ) {
    this.companiesService.getAll().subscribe((companyList: Company[]) => {
      this.companyList = companyList;
    });
  }

  goToVacanciesPage(companyId: number): void {
    this.router.navigate(['/companies', companyId, 'vacancies']); 
  }
}
