from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('accounts/',include('accounts.urls')),
    path('login/',obtain_auth_token,name='login')
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
