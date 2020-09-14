from django.urls import path
from .views import HomePage


app_name = 'HomePage'


urlpatterns = [
    path('',HomePage,name='homepage')
]