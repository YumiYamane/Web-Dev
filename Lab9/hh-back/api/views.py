from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import CompanySerializer, VacancySerializer
from .models import Company, Vacancy

import json

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save() 
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def company_detail(request, company_id=None):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, status=200)
    
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        serializer = CompanySerializer(instance=company,
                                        data=new_data)
        if serializer.is_valid():
            serializer.save() 
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'company deleted'})
    

def company_vacancies(request, company_id=None):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save() 
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def vacancy_detail(request, vacancy_id=None):
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, status=200)

    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy, data=new_data)
        if serializer.is_valid():
            serializer.save() 
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'vacancy deleted'})
    

def top_ten_vacancies(request):
    if request.method == 'GET':
        top_vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(top_vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)