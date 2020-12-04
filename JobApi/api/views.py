from django.shortcuts import render
from .models import *
from .serializers import *
from django.db.models import Q
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class RegisterView(APIView):
    def post(self, request, format=None):
        serializer =  RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            token = Token.objects.get(user=account).key
            data['token'] = token
            data['email'] = account.email
            data['company_name'] = account.company_name
            data['role'] = account.role

            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        Token.objects.filter(user=user).delete()
        token, created = Token.objects.get_or_create(user=user)

        data = {
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'role':user.role
        }

        
        return Response({"success":True, "message":"logged in successfully","data":data},status=status.HTTP_200_OK)

# transporters
class AllUsersView(APIView):
    # permission_classes = (IsAuntenticated,)

    def get(self, request):
        details = Account.objects.all()
        serializer = AccountSerializer(details, many=True)
        response = serializer.data
        return Response({"success":True, "message":"Data found","data":response}, status=status.HTTP_200_OK)


class JobView(APIView):
    def get(self, request, format=None):
        job = Jobs.objects.all()
        serializer = JobSerializer(job, many=True)
        return Response(serializer.data)

class JobPost(APIView):
    def post(self, request, format=None):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobPut(APIView):
    def get_object(self, pk):
        try:
            return Jobs.objects.get(pk=pk)
        except Jobs.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        jobs = self.get_object(pk)
        serializer = JobSerializer(jobs, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobDelete(APIView):

    def get_object(self, pk):
        try:
            return Job.objects.get(pk=pk)
        except Job.DoesNotExist:
            raise Http404

    def delete(self, request, pk, format=None):
        jobs = self.get_object(pk)
        jobs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ========================================================================================================================
#Tasks



class TaskView(APIView):
    def get(self, request, format=None):
        task = Task.objects.all()
        serializer = TaskSerializer(task, many=True)
        return Response(serializer.data)


# class TaskPost(APIView):

#     def post(self, request, format=None):
#         serializer = TaskSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskPost(APIView):
    def get_object(self, pk):
        try:
            assignee=Task.objects.get(pk=pk)
            if (assignee.exists()):
                return Response({"message":"Employee Already assigned to this job"})
        except:
            pass

    def post(self, request, pk, format=None):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskPut(APIView):
    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        tasks = self.get_object(pk)
        serializer = TaskSerializer(tasks, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskDelete(APIView):

    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except tasks.DoesNotExist:
            raise Http404

    def delete(self, request, pk, format=None):
        tasks = self.get_object(pk)
        tasks.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#=============================================================================================
#REPORT

class ReportView(APIView):
    def get(self, request, format=None):
        report = Report.objects.all()
        serializer = ReportSerializer(report, many=True)
        return Response(serializer.data)

class ReportPost(APIView):
    def post(self, request, format=None):
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReportPut(APIView):
    def get_object(self, pk):
        try:
            return Report.objects.get(pk=pk)
        except Report.DoesNotExist:
            raise Http404


    def put(self, request, pk, format=None):
        reports = self.get_object(pk)
        serializer = ReportSerializer(reports, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReportDelete(APIView):

    def get_object(self, pk):
        try:
            return Report.objects.get(pk=pk)
        except Report.DoesNotExist:
            raise Http404

    def delete(self, request, pk, format=None):
        reports = self.get_object(pk)
        reports.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)