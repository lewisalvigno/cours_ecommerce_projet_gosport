from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import NewUserForm
from django.contrib.auth import login as auth_login, authenticate
from django.contrib import messages
from django.contrib.auth.models import User 


def index(request):
    return render(request,'index.html')

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

def bucket(request):
    return render(request,'bucket.html')

# Create your views here.


def register_request(request):

    if request.method == "POST":
        username = request.POST.get("username", "")
        email = request.POST.get('email', '')
        password = request.POST.get("password", "")
        # password2 = request.POST.get("password2")
        form = User(username = username, email = email, password = password)
        form.save()
        auth_login(request, form)
        return redirect("/")
    return render (request, 'register.html') 


def login_request(request):

    if request.method == "POST":
        username = request.POST.get("username","")
        password = request.POST.get("password","")
        user = authenticate(username=username, password=password)
        if user is not None:
            messages.info(request, f"you are now logged in as {username}.")
            return redirect('/')
        else:
            messages.error(request, "Invali username or password")
    
    return render (request, 'login.html') 
    


        









        
        

	