from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def login(request):
    return HttpResponse("<h1>Login Successfull</h1>")

def getIndex(request):
    return render(request,'index.html')
