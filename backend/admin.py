from django.contrib import admin
from .models import User

class UserAdminView(admin.ModelAdmin):
    list_display= ('id','first_name', 'last_name', 'username',)

admin.site.register(User, UserAdminView)
# admin.site.register(Subjects)
# admin.site.register(ClassRoom)
# admin.site.register(ClassTeachers)
# admin.site.register(Periods)