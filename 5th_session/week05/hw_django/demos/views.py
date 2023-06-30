from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def cuteBabyLion(request):
    return HttpResponse('멋사 5주차 HW')

def lionStudy(request):
    return render(request, 'hwDjango.html')