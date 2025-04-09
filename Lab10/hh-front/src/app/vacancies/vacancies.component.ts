import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../services/vacancies.service';
import { Vacancy } from '../models/vacancy';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompaniesService } from '../services/companies.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-vacancies',
  imports: [CommonModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  company: Company | undefined;

  constructor(
    private route: ActivatedRoute, 
    private vacanciesService: VacanciesService,
    private companiesService: CompaniesService,
  ) {}

  ngOnInit(): void {
    const companyId = +this.route.snapshot.paramMap.get('companyId')!;

    this.companiesService.getCompanyById(companyId).subscribe((company: Company) => {
      this.company = company;
    });

    this.vacanciesService.getVacanciesByCompany(companyId).subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }
}
