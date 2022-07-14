from rest_framework import serializers
from App1.models import Prerecharge, Postrecharge, Donglerecharge, Buypre, Buypost, Buyd, Rechargepre, Rechargepost, \
    Rechargedongle, Helpcust


class NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prerecharge
        fields = '__all__'

class NewSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Postrecharge
        fields = '__all__'

class NewSerializer3(serializers.ModelSerializer):
    class Meta:
        model = Donglerecharge
        fields = '__all__'

class NewSerializer4(serializers.ModelSerializer):
    class Meta:
        model = Buypre
        fields = '__all__'

class NewSerializer5(serializers.ModelSerializer):
    class Meta:
        model = Buypost
        fields = '__all__'

class NewSerializer6(serializers.ModelSerializer):
    class Meta:
        model = Buyd
        fields = '__all__'

class NewSerializer7(serializers.ModelSerializer):
    class Meta:
        model = Rechargepre
        fields = '__all__'

class NewSerializer8(serializers.ModelSerializer):
    class Meta:
        model = Rechargepost
        fields = '__all__'

class NewSerializer9(serializers.ModelSerializer):
    class Meta:
        model = Rechargedongle
        fields = '__all__'

class NewSerializer10(serializers.ModelSerializer):
    class Meta:
        model = Helpcust
        fields = '__all__'