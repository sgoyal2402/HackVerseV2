from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from . utils import fifo as ff
from . utils import lru,opt,lfu,sc

# Create your views here.

def index(request):
    return render(request = request,
                  template_name = 'pagerep/index.html' )




@csrf_exempt
def algo(request):

    if request.method == 'POST':
        data = request.POST.get('requests')
        requests = json.loads(data)
        data = request.POST.get('size')
        size = json.loads(data)

        data = {'requests': requests, 'size':size}

        result_ff = ff(data)
        result_lru = lru(data)
        result_opt = opt(data)
        result_lfu=lfu(data)
        result_sc=sc(data)
        result = {'fifo': result_ff, 'lru':result_lru, 'opt':result_opt,'lfu':result_lfu,'sc':result_sc}
    return JsonResponse(result)


def demo2(request):
    return render(request = request,
                  template_name = 'pagerep/beladyanmly.html' )


@csrf_exempt
def algo2(request):

    if request.method == 'POST':
        data = request.POST.get('requests')
        requests = json.loads(data)
        data = request.POST.get('size')
        size = json.loads(data)

        data = {'requests': requests, 'size':size}

        result_ff = ff(data)
        result_lru = lru(data)

        result = {'fifo': result_ff, 'lru':result_lru}
    return JsonResponse(result)