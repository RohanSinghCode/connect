from django.urls import path
from . import views


app_name='accounts'

urlpatterns = [
    path('',views.UserRegister.as_view(),name='userapi'),
    path('acc',views.AccountRegister.as_view(),name='accountapi')

]