from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from App1.models import Prerecharge, Buypre, Buypost, Buyd, Rechargepre, Rechargepost, Rechargedongle, Helpcust
from App1.models import Postrecharge
from App1.models import Donglerecharge




class CreateUserForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']



class PrerechargeForm(forms.ModelForm):
    class Meta:
        model=Prerecharge
        fields="__all__"


class PostrechargeForm(forms.ModelForm):
    class Meta:
        model=Postrecharge
        fields="__all__"

class DonglerechargeForm(forms.ModelForm):
    class Meta:
        model=Donglerecharge
        fields="__all__"

class BuypreForm(forms.ModelForm):
    class Meta:
        model=Buypre
        fields="__all__"

class BuypostForm(forms.ModelForm):
    class Meta:
        model=Buypost
        fields="__all__"

class BuydForm(forms.ModelForm):
    class Meta:
        model=Buyd
        fields="__all__"

class RechargepreForm(forms.ModelForm):
    class Meta:
        model=Rechargepre
        fields="__all__"

class RechargepostForm(forms.ModelForm):
    class Meta:
        model=Rechargepost
        fields="__all__"

class RechargedongleForm(forms.ModelForm):
    class Meta:
        model=Rechargedongle
        fields="__all__"




class HelpcustForm(forms.ModelForm):
    class Meta:
        model=Helpcust
        fields="__all__"
