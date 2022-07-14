from rest_framework import viewsets

from App1 import serializers
from App1.models import Prerecharge, Postrecharge, Donglerecharge, Buypre, Buypost, Buyd, Rechargepre, Rechargepost, \
    Rechargedongle, Helpcust


class NewViewSet(viewsets.ModelViewSet):
    queryset = Prerecharge.objects.all()
    serializer_class=serializers.NewSerializer

class NewViewSet2(viewsets.ModelViewSet):
    queryset = Postrecharge.objects.all()
    serializer_class=serializers.NewSerializer2

class NewViewSet3(viewsets.ModelViewSet):
    queryset = Donglerecharge.objects.all()
    serializer_class=serializers.NewSerializer3

class NewViewSet4(viewsets.ModelViewSet):
    queryset = Buypre.objects.all()
    serializer_class=serializers.NewSerializer4

class NewViewSet5(viewsets.ModelViewSet):
    queryset = Buypost.objects.all()
    serializer_class=serializers.NewSerializer5

class NewViewSet6(viewsets.ModelViewSet):
    queryset = Buyd.objects.all()
    serializer_class=serializers.NewSerializer6

class NewViewSet7(viewsets.ModelViewSet):
    queryset = Rechargepre.objects.all()
    serializer_class=serializers.NewSerializer7

class NewViewSet8(viewsets.ModelViewSet):
    queryset = Rechargepost.objects.all()
    serializer_class=serializers.NewSerializer8

class NewViewSet9(viewsets.ModelViewSet):
    queryset = Rechargedongle.objects.all()
    serializer_class=serializers.NewSerializer9

class NewViewSet10(viewsets.ModelViewSet):
    queryset = Helpcust.objects.all()
    serializer_class=serializers.NewSerializer10
