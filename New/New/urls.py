"""New URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from django.urls import path
from App1 import views
from django.contrib import admin
from New.routers import router
from django.urls import include, path
from rest_framework import routers

from App1.views import Prerechargelist
from App1.viewsets import NewViewSet, NewViewSet2, NewViewSet3, NewViewSet4, NewViewSet5, NewViewSet6, NewViewSet7, \
    NewViewSet8, NewViewSet9, NewViewSet10

router = routers.DefaultRouter()
router.register(
    'list', NewViewSet, basename='list'
)
router.register(
    'list2', NewViewSet2, basename='list'
)
router.register(
    'list3', NewViewSet3, basename='list'
)

router.register(
    'list4', NewViewSet4, basename='list'
)
router.register(
    'list5', NewViewSet5, basename='list'
)
router.register(
    'list6', NewViewSet6, basename='list'
)
router.register(
    'list7', NewViewSet7, basename='list'
)
router.register(
    'list8', NewViewSet8, basename='list'
)
router.register(
    'list9', NewViewSet9, basename='list'
)

router.register(
    'list10', NewViewSet10, basename='list'
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', views.index, name="index"),
    path('register/', views.register, name="register"),
	path('login/', views.login, name="login"),
	path('logout/', views.logout, name="logout"),
	path('home', views.home, name="home"),
    path('homead', views.homead, name="homead"),
    path('invoi', views.invoi, name="invoi")
]

