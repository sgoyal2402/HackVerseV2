from django.urls import path
from . import views

app_name = "deadlock"


urlpatterns = [
    path('', views.index, name='index'),
]