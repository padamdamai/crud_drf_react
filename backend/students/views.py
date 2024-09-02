from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StudentSerializer
from django.http.response import JsonResponse
from .models import Student
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
# Create your views here.

class StudentView(APIView):
    def post(self,request):
        data = request.data
        serializer = StudentSerializer(data = data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student created successfully",safe=False)
        else:
            return JsonResponse("Failed to add student")
        
    def get_student(self,pk):
        try:
            student = Student.objects.get(studentId = pk)
            return student
        except Student.DoesNotExist():
            raise NotFound('Students not found')

    def get(self,request,pk=None):
        
        if pk:
            data = self.get_student(pk)
            serializer = StudentSerializer(data)
        else:
            students = Student.objects.all()
            serializer = StudentSerializer(students,many=True)
        return Response(serializer.data)
    
    def put(self,request,pk=None):
        update_student = Student.objects.get(studentId=pk)
        serializer = StudentSerializer(instance=update_student,data=request.data,partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Record updates successfully",safe=False)
        return JsonResponse("Failed to update record ")