from django.urls import path
from . import views


app_name='accounts'

urlpatterns = [
    path('',views.UserRegister.as_view(),name='userapi'),
    path('<int:pk>/update',views.AccountUpdate.as_view(),name='accountapi'),
    path('userdetails',views.UserDetails.as_view(),name='userdetails')

]