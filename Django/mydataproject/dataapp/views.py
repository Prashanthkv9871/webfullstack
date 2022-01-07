from django.shortcuts import render

# Create your views here.

def display(request):
    data = {'name':'Prashanth','id':101}
    return render(request,"index.html",context=data)
