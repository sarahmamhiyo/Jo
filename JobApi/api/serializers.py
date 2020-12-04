from rest_framework import serializers
from .models import *

class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account 
        fields = ['email', 'company_name','role', 'password']
        extra_kwargs = {
            'password':{'write_only':True}
        }

    def save(self):
        account = Account(
            email=self.validated_data['email'],
            company_name=self.validated_data['company_name'],
            role=self.validated_data['role'],
        )
        password = self.validated_data['password']

        account.set_password(password)
        account.save()
        return account

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["company_name"]
        
class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model=Jobs
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields = '__all__'

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model=Report
        fields = '__all__'