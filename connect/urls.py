from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token



urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('accounts/',include('accounts.urls')),
    path('login/',obtain_auth_token,name='login')
]
