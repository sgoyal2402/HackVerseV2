from django.urls import path
from . import views

urlpatterns = [
    path('banker', views.banker, name='banker'),
    path('cpusch', views.cpusch, name='cpusch'),
    path('deadlock', views.deadlock, name='deadlock'),
    path('discsch', views.discsch, name='discsch'),
    path('filealloc', views.filealloc, name='filealloc'),
    path('pagerep', views.pagerep, name='pagerep'),
    path('syscall', views.syscall, name='syscall'),
    path('memalloc', views.banker, name='memalloc'),
]