from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return render(request, template_name='memalloc/select.html')

def mftindex(request):
    return render(request,
    				template_name = 'memalloc/MFT.html')
def mvtindex(request):
	return render(request,
					template_name = 'memalloc/mvt.html')
def mvtbf(request):
	return render(request,
					template_name = 'memalloc/mvt/bf/bf.html')

def mvtff(request):
	return render(request,
					template_name = 'memalloc/mvt/ff/ff.html')

def mvtwf(request):
	return render(request,
					template_name = 'memalloc/mvt/wf/wf.html')
	
	