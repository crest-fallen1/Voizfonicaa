from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
# from django.contrib.auth.decorators import login_required
# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .forms import CreateUserForm
from .serializers import NewSerializer, NewSerializer2, NewSerializer3, NewSerializer4, NewSerializer5, NewSerializer6, \
    NewSerializer7, NewSerializer8, NewSerializer9, NewSerializer10


def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'Account was created for ' + user)

                return redirect('login')

        context = {'form': form}
        return render(request, 'accounts/register.html', context)


def login(request):
    if request.user.is_authenticated:
        return redirect('http://localhost:4200/')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)
            if username=="admin" and password=="2468":
                return redirect('homead')
            if user is not None:
                # login(request)
                return redirect('http://localhost:4200/')
            else:
                messages.info(request, 'Username OR password is incorrect')

        context = {}
        return render(request, 'accounts/login.html', context)


def logout(request):
    # logout(request)
    return redirect('/')

class Prerechargelist(APIView):
    def get(self,request):
        queryset=Prerecharge.objects.all()
        obj=NewSerializer(queryset,many=True)
        return Response(obj.data)

class Postrechargelist(APIView):
    def get(self,request):
        queryset=Postrecharge.objects.all()
        obj=NewSerializer2(queryset,many=True)
        return Response(obj.data)

class Donglerechargelist(APIView):
    def get(self,request):
        queryset=Donglerecharge.objects.all()
        obj=NewSerializer3(queryset,many=True)
        return Response(obj.data)

class Buyprelist(APIView):
    def get(self,request):
        queryset=Buypre.objects.all()
        obj=NewSerializer4(queryset,many=True)
        return Response(obj.data)

class Buypostlist(APIView):
    def get(self,request):
        queryset=Buypost.objects.all()
        obj=NewSerializer5(queryset,many=True)
        return Response(obj.data)
class Buydlist(APIView):
    def get(self,request):
        queryset=Buyd.objects.all()
        obj=NewSerializer6(queryset,many=True)
        return Response(obj.data)

class Rechargeprelist(APIView):
    def get(self,request):
        queryset=Rechargepre.objects.all()
        obj=NewSerializer7(queryset,many=True)
        return Response(obj.data)

class Rechargepostlist(APIView):
    def get(self,request):
        queryset=Rechargepost.objects.all()
        obj=NewSerializer8(queryset,many=True)
        return Response(obj.data)

class Rechargedonglelist(APIView):
    def get(self,request):
        queryset=Rechargedongle.objects.all()
        obj=NewSerializer9(queryset,many=True)
        return Response(obj.data)

class Helpcustlist(APIView):
    def get(self,request):
        queryset=Rechargedongle.objects.all()
        obj=NewSerializer10(queryset,many=True)
        return Response(obj.data)



def index(request):
    return render(request, 'index.html')
def home(request):
    return render(request, 'home.html')

def homead(request):
    return render(request, 'homead.html')


def invoi(request):
    if 'cid_pre' in request.GET:
        cid_pre=request.Get['cid_pre']

    # return render(request, 'invoi.html')