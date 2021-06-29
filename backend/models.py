from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.fields.related import ForeignKey


# Admin block the account is represented by block


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    userImage = models.ImageField(upload_to='userImage/',default='../static/frontend/svg/user.svg')
    # DESIGNATIONS = (
    #     ("A", "Admin"),
    #     ("P","Principal"),
    #     ("T","Teacher"),
    #     ("S","Student"),
    #     ("St","Staff"),
    #     ("V","Visitor"),
    #     ("O","Other")
    # )
    # designation = models.CharField(max_length=3, choices=DESIGNATIONS, default="O")
    block = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.username} {self.designation}"


class Classroom(models.Model):
    id = models.AutoField(primary_key=True)
    number = models.IntegerField(default=0)
    section = models.SmallIntegerField(default=1)
    block = models.BooleanField(default=False)

class Teacher(User):
    classTeacherOf = models.ForeignKey(Classroom, on_delete=models.CASCADE, name="ClassTeachers")


class Student(User):
    className = models.ForeignKey(Classroom, on_delete=models.CASCADE, name="ClassStudents")


# class Subjects(models.Model):
#     subject = models.CharField(max_length=64, blank=False)

#     def __str__(self):
#         return self.subject


# class ClassRoom(models.Model):
#     number = models.IntegerField(blank=False, default=0)
#     subjects = models.ManyToManyField(Subjects)
#     students = models.ForeignKey(User, on_delete=models.CASCADE, related_name="className")

#     def __str__(self):
#         return f"Class: {self.number}"


# class ClassTeachers(models.Model):
#     teacherName = models.ForeignKey(User, on_delete=models.CASCADE)
#     className = models.ForeignKey(ClassRoom, on_delete=models.CASCADE)

#     def __str__(self):
#         return f"{self.teacherName.username} class Teacher of Class {self.className.number}"


# class Periods(models.Model):
#     period = models.IntegerField(default=1, blank=False)
#     time = models.TimeField(blank=True)
#     subject = models.ForeignKey(Subjects, on_delete=models.CASCADE)
#     teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name="teachers_periods")
#     onClassName = models.ForeignKey(ClassRoom, on_delete=models.CASCADE, related_name="class_periods")

#     def __str__(self):
#         return f"{self.period} period: {self.teacher.username} on Class {self.onClassName.number}"