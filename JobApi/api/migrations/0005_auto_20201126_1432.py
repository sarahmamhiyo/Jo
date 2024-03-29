# Generated by Django 3.1.3 on 2020-11-26 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_jobs_client_contact'),
    ]

    operations = [
        migrations.RenameField(
            model_name='report',
            old_name='report_name',
            new_name='employee',
        ),
        migrations.RenameField(
            model_name='report',
            old_name='total_hr_spent',
            new_name='job_name',
        ),
        migrations.AddField(
            model_name='task',
            name='duedate',
            field=models.CharField(default='none', max_length=200),
        ),
        migrations.AddField(
            model_name='task',
            name='jobid',
            field=models.CharField(default='none', max_length=200),
        ),
        migrations.AddField(
            model_name='task',
            name='startingday',
            field=models.CharField(default='none', max_length=200),
        ),
    ]
