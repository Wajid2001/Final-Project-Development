from django.http.response import  HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render


# This will import all Static files fro index function
from django.contrib.staticfiles.utils import get_files
from django.contrib.staticfiles.storage import StaticFilesStorage


# This will load a perticular script required to be render
def loadFile(request, filename = 'App'):
    files = list(get_files(StaticFilesStorage(), location='frontend/static/frontend'))
    files = {file.replace('frontend/','/') for file in files if filename in file and '.txt' not in file and 'runtime' not in file}
    return render(request, 'frontend/template.html', {"files": files})


def index(request):
    return HttpResponseRedirect(reverse("frontend:home"))  

def home(request):
    return loadFile(request, filename='Dashboard')  


def signInView(request):
    return loadFile(request, filename='signInView')


def dashboard(request):
    return loadFile(request, filename='Dashboard')