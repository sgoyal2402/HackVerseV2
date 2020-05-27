from django.urls import path
from . import views

app_name="memalloc"

urlpatterns = [
    path('', views.index, name='index'),
    path('mft', views.mftindex, name='mftindex'),
    path('mvt', views.mvtindex, name = 'mvtindex'),
    path('mvt/bf/bf.html',views.mvtbf, name = 'mvtbf'),
    path('mvt/ff/ff.html',views.mvtff, name='mvtff'),
    path('mvt/wf/wf.html',views.mvtwf, name='mvtwf')
]