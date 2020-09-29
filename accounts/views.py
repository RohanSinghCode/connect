from django.shortcuts import render,redirect

from django.contrib.auth import login,authenticate


from django.contrib.auth.models import User
from .models import Account

from rest_framework.views import APIView
from rest_framework.response import Response


from .serializer import UserSerializer,AccountSerializer


# Create your views here.


class UserRegister(APIView):
    def get(self,request,*args,**kwargs):
        try:
            user = User.objects.get(username=request.user.username)
            serializer = UserSerializer(User,many=False)
            return Response(serializer.data)
        except:
            data = {
                'user':'annoy'
            }
            return Response(data)
    def post(self,request,*args,**kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error)







