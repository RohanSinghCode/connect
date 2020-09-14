from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import login,authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse





from . import models
# Create your views here.


@login_required(login_url='/login/')
def Home(request):
    return HttpResponse("<h1>Home</h1>")

def Login(request):
    if request.method=="POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user  = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect('accounts:Home')
        else:
            error = "Username or Password is incorrect"

            return render(request,'Login.html',{'error':error})
    
    return render(request,'Login.html')

def SignUp(request):
    if request.method == "POST":
        fname= request.POST.get("fname")
        lname = request.POST.get("lname")
        username = request.POST.get("username")
        image = request.FILE.get("profileimg")
        dob = request.POST.get("dob")
        password1 = request.POST.get("password1")
        password2 = request.POST.get("password2")
        if password1 == password2:
            try:
                User.objects.get(username=username)
            except User.DoesNotExist:
                user = User.objects.create_user(username=username,password=password1)
                user.first_name = fname
                user.last_name = lname
                acc = models.Account(user=user)
                acc.profile_pic = image
                acc.dob = dob
                user.save()
                acc.save()
                login(request,user)
                return redirect('accounts:Home')
        else:
            error:"password or email is incorrect"
            return render(request,'SignUp.html',{'error':error})

    else:
        acc = models.Account()
        
      

    return render(request,'SignUp.html')



