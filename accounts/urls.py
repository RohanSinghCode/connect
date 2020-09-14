from django.urls import path
from . import views


app_name='accounts'

urlpatterns = [
    path('home/',views.Home,name='Home'),
    path('',views.Login,name='Login'),
    path('signup/',views.SignUp,name='signup')
]