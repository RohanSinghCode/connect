from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Account



class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'username',
            'password'
        )
    def create(self,validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class AccountSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Account
        fields = ('user','profile_pic')
    

 
        
        
        
    

