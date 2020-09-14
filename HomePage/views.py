from django.shortcuts import render
from django.http import JsonResponse
from accounts.models import Account

from django.contrib.auth.models import User

from django.shortcuts import get_object_or_404

# Create your views here.


def HomePage(request):
    acc = Account.objects.get(user=request.user)
    userData = {
        'dob':acc.dob,
        'username':acc.user.username
    }

    return JsonResponse(userData)