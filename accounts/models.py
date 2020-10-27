from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Account(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='profile_pic',null=True,default='/profile_pic/default.png')
    aboutme = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.user.username
    


