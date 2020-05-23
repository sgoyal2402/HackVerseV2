from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('fcfs.html/', views.fcfs, name='fcfs'),
    path('srtf.html/', views.srtf, name='srtf'),
    path('sjf.html/', views.sjf, name='sjf'),
    path('ljf.html/', views.ljf, name='ljf'),
    path('lrtf.html/', views.lrtf, name='lrtf'),
    path('priority.html/', views.priority, name='priority'),
    path('prioritynonpre.html/', views.prioritynonpre, name='prioritynonpre'),
    path('round-robin.html/', views.rr, name='rr'),
    path('hrrn.html/', views.hrrn, name='hrrn'),
]
