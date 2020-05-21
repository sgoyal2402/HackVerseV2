from django.urls import path
from django.conf.urls import include,url
from . import views
app_name='pagerep'
urlpatterns = [
    path('', views.index, name='index'),
    path('page2/',views.index2,name='index2'),
    path('page2/algo/', views.algo2, name='algo2'),
    path('algo/',views.algo),

]