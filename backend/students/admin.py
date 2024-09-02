from django.contrib import admin
from .models import Student 
# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display = ('studentId', 'FirstName', 'LastName', 'RegisterationNO', 'Email', 'Course')

admin.site.register(Student, StudentAdmin)