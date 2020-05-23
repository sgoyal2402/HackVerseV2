from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return render(request = request, template_name = 'cpusch/index.html' )

def fcfs(request):
    return render(request = request, template_name = 'cpusch/fcfs.html' )

def srtf(request):
    return render(request = request, template_name = 'cpusch/srtf.html' )

def sjf(request):
    return render(request = request, template_name = 'cpusch/sjf.html' )

def ljf(request):
    return render(request = request, template_name = 'cpusch/ljf.html' )

def lrtf(request):
    return render(request = request, template_name = 'cpusch/lrtf.html' )

def priority(request):
    return render(request = request, template_name = 'cpusch/priority.html' )

def prioritynonpre(request):
    return render(request = request, template_name = 'cpusch/prioritynonpre.html' )

def rr(request):
    return render(request = request, template_name = 'cpusch/round-robin.html' )

def hrrn(request):
    return render(request = request, template_name = 'cpusch/hrrn.html' )

