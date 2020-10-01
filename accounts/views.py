from django.shortcuts import render,redirect

from django.contrib.auth import login,authenticate


from django.contrib.auth.models import User
from .models import Account

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import mixins



from .serializer import UserSerializer,AccountSerializer


# Create your views here.



    



class UserRegister(APIView):
    def get(self,request,*args,**kwargs):
        user = User.objects.get(username=request.user.username)
        serializer = UserSerializer(user,many=False)
        return Response(serializer.data)

    def post(self,request,*args,**kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)



class AccountRegister(APIView):

    def get(self,request,*args,**kwargs):
        user = User.objects.get(username=request.user.username)
        acc = Account.objects.get(user=user)
        serializer = AccountSerializer(acc,many=False)
        return Response(serializer.data)
    
    def post(self,request,*args,**kwargs):
        serializer = AccountSerializer(data=request.data)
        serializer.set_the_user(request.user)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        
        return Response(serializer.errors)



