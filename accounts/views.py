from django.shortcuts import render,redirect

from django.contrib.auth import login,authenticate


from django.contrib.auth.models import User
from .models import Account

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated




from .serializer import UserSerializer,AccountSerializer







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




class AccountUpdate(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = AccountSerializer
     
    def get_object(self):
        return Account.objects.get(user = self.request.user)

    
   
class UserDetails(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,*args,**kwargs):
        acc = Account.objects.get(user=self.request.user)
        serializer = AccountSerializer(acc,many=False)
        return Response(serializer.data)
