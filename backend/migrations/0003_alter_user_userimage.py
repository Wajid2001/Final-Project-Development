# Generated by Django 3.2.4 on 2021-06-08 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_user_userimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='userImage',
            field=models.ImageField(default='./static/frontend/svg/user.svg', upload_to='uploads/'),
        ),
    ]
