"""OSSimulator URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('terminal/', views.terminal),
    path('team/',views.team ),
    path('systemcalls/', include('systemcalls.urls')),
    path('cpusch/', include('cpusch.urls')),
    path('discsch/', include('discsch.urls')),
    path('memalloc/', include('memalloc.urls')),
    path('filealloc/', include('filealloc.urls')),
    path('pagerep/', include('pagerep.urls')),
    path('bankers/', include('bankers.urls')),
    path('deadlock/', include('deadlock.urls')),
    path('wikipages/', include('wikipages.urls')),
]
