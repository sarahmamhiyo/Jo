from django.urls import path
from .views import *

urlpatterns=[
    path('login/', CustomAuthToken.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name="register"),
    path('allusers', AllUsersView.as_view(), name="allusers"),
    path('job/',JobView.as_view(), name="job" ),
    path('jobpost/', JobPost.as_view(), name="jobpost"),
    path('jobput/<pk>', JobPut.as_view(), name="jobput"),
    path('jobdelete/<pk>', JobDelete.as_view(), name="jobdelete"),

    path('task/',TaskView.as_view(), name="task" ),
    path('taskpost/<pk>', TaskPost.as_view(), name="taskpost"),
    path('taskput/<pk>', TaskPut.as_view(), name="taskput"),
    path('taskdelete/<pk>', TaskDelete.as_view(), name="taskdelete"),

    path('report/',ReportView.as_view(), name="report" ),
    path('reportpost/', ReportPost.as_view(), name="reportpost"),
    path('reportput/<pk>', ReportPut.as_view(), name="reportput"),
    path('reportdelete/<pk>', ReportDelete.as_view(), name="reportdelete"),
]