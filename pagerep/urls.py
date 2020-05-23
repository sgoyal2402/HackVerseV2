from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('algo/', views.algo),
    path('page2/',views.demo2,name='demo2'),
    path('page2/algo/', views.algo2, name='algo2'),
]