from django.urls import path
from . import views
from django.conf.urls import url,include
from django.contrib import admin


app_name = 'discsch'
urlpatterns = [
     url(r'^$', views.home, name='index'),
    url(r'^(?P<pk>[0-9]+)/$', views.detail, name='detail'),
    url(r'^demo/$', views.demo, name='demo'),
    url(r'^gateway/$', views.gateway, name='gateway'),
]