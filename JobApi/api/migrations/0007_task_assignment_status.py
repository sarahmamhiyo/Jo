# Generated by Django 3.1.3 on 2020-12-02 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_report_client_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='assignment_status',
            field=models.CharField(default='nameandid', max_length=200, unique=True),
        ),
    ]
