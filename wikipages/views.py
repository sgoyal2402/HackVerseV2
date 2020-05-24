from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def banker(request):
    return render(request, 'wikipages/bankerman.html');

def cpusch(request):
    return render(request, 'wikipages/cpuschman.html');

def deadlock(request):
    return render(request, 'wikipages/deadlockman.html');

def discsch(request):
    return render(request, 'wikipages/discschman.html');

def filealloc(request):
    return render(request, 'wikipages/fileallocman.html');

def pagerep(request):
    return render(request, 'wikipages/pagerepman.html');

def syscall(request):
    return render(request, 'wikipages/syscallman.html');