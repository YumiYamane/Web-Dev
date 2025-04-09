from django.urls import include, path
from rest_framework import routers
from .views import CompanyViewSet, VacancyViewSet
from api import views

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api/companies/', views.companies_list),
    path('api/companies/<int:company_id>/', views.company_detail),
    path('api/companies/<int:company_id>/vacancies/', views.company_vacancies),
    path('api/vacancies/', views.vacancies_list),
    path('api/vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('api/vacancies/top_ten/', views.top_ten_vacancies),
]