from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Jobs)
admin.site.register(Task)
admin.site.register(Report)
admin.site.register(Account)