from django.db import models

# Create your models here.
class Prerecharge(models.Model):
    pre_id=models.IntegerField()
    pre_plan=models.CharField(max_length=40)
    pre_validity=models.CharField(max_length=50)
    pre_price=models.IntegerField()
    def __str__(self):
        return self.pre_id
        # return str(self)

#class Postrecharge(models.Model)

class Postrecharge(models.Model):
    post_id=models.IntegerField()
    post_plan=models.CharField(max_length=40)
    post_validity=models.CharField(max_length=50)
    post_price=models.IntegerField()
    def __str__(self):
        return self.post_id

class Donglerecharge(models.Model):
    d_id=models.IntegerField()
    d_plan=models.CharField(max_length=40)
    d_validity=models.CharField(max_length=50)
    d_price=models.IntegerField()
    def __str__(self):
        return self.d_id

class Buypre(models.Model):
    name_pre=models.CharField(max_length=30)
    phone_pre=models.IntegerField()
    location_pre=models.CharField(max_length=30)
    email_pre = models.CharField(max_length=50)
    cidnew_pre = models.IntegerField()
    def __str__(self):
        return self.name_pre

class Buypost(models.Model):
    name_post = models.CharField(max_length=30)
    phone_post = models.IntegerField()
    location_post = models.CharField(max_length=30)
    email_post = models.CharField(max_length=50)
    cidnew_post=models.IntegerField()
    def __str__(self):
        return self.name_post

class Buyd(models.Model):
    name_d = models.CharField(max_length=30)
    phone_d = models.IntegerField()
    location_d = models.CharField(max_length=30)
    email_d = models.CharField(max_length=50)
    cidnew_d = models.IntegerField()
    def __str__(self):
        return self.name_d

class Rechargepre(models.Model):
    mob_pre=models.IntegerField()
    cid_pre=models.IntegerField()
    cname_pre=models.CharField(max_length=50)
    amount_pre=models.IntegerField()
    def __str__(self):
        return self.mob_pre

class Rechargepost(models.Model):
    mob_post=models.IntegerField()
    cid_post = models.IntegerField()
    cname_post=models.CharField(max_length=50)
    amount_post=models.IntegerField()
    def __str__(self):
        return self.mob_post

class Rechargedongle(models.Model):
    mob_d=models.IntegerField()
    cid_d = models.IntegerField()
    cname_d=models.CharField(max_length=50)
    amount_d=models.IntegerField()
    def __str__(self):
        return self.mob_d

class Helpcust(models.Model):
    cust_name=models.CharField(max_length=50)
    cust_mobile=models.IntegerField()
    cust_mail=models.CharField(max_length=20)
    cquery=models.CharField(max_length=500)
    def __str__(self):
        return self.cust_name


#
# class Customerdetails(models.Model):
#     cust_id=models.IntegerField()
#     cust_username=models.CharField(max_length=50)
#     cust_plan = models.CharField(max_length=40)
#     post_price=models.IntegerField()
