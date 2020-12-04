from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


# Create your models here.
class MyAccountManager(BaseUserManager):
    def create_user(self, email, company_name, role, password=None):
        if not email:
            raise ValueError("Users must have email")

        if not company_name:
            raise ValueError("Users must have company_name")

        if not role:
            raise ValueError("Users must have role")

        user = self.model(
               email=self.normalize_email(email),
               company_name = company_name,
               role = role,

        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, company_name,role, password=None):
        user = self.create_user(
               email=self.normalize_email(email),
               password = password,
               company_name = company_name,
               role =role,

        )

        user.is_admin=True
        user.is_staff=True
        user.is_superuser=True
        user.save(using=self._db)

        return user


class Account(AbstractBaseUser):
    email =  models.EmailField(verbose_name="email", max_length=60, unique=True)
    is_admin = models.BooleanField(default=False)
    is_active =  models.BooleanField(default=True)
    is_staff =  models.BooleanField(default=False)
    is_superuser =  models.BooleanField(default=False)
    company_name = models.CharField(max_length=100, unique=True)
    role = models.CharField(max_length=100, default="role")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['company_name','role']

    objects = MyAccountManager()
    
    def __str__(self):
        return self.email

    def has_perm(self,perm,obj=None):
        return self.is_admin
        
    def has_module_perms(self, app_label):
        return True

# Create your models here.

class Jobs(models.Model):
    job_name=models.CharField(max_length=200)
    job_description=models.CharField(max_length=200)
    price_per_hr=models.CharField(max_length=200)
    company_origin =models.CharField(max_length=200)
    job_status =models.CharField(max_length=200, default="new")


class Task(models.Model):
    jobid=models.CharField(max_length=200, default="none")
    task_name=models.CharField(max_length=200)
    technicians_asigned=models.CharField(max_length=200)
    destination_company=models.CharField(max_length=200)
    startingday=models.CharField(max_length=200,default="none")
    duedate=models.CharField(max_length=200, default="none")
    assignment_status=models.CharField(max_length=200, unique=True, default="nameandid")
    

class Report(models.Model):
    employee = models.CharField(max_length=200)
    job_name=models.CharField(max_length=200)
    time_spent=models.CharField(max_length=200)
    arrival_time=models.CharField(max_length=200)
    departure_time = models.CharField(max_length=200)
    task_status=models.CharField(max_length=200)
   

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def created_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)