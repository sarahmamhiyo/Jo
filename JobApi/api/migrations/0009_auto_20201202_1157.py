# Generated by Django 3.1.3 on 2020-12-02 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20201202_1147'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='assignment_status',
            field=models.CharField(default='nameandid', max_length=200, unique=True),
        ),
    ]