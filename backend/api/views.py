from django.shortcuts import render

# api/views.py
from django.views.generic import TemplateView

# Create a view that serves your React app (index.html)
react_app = TemplateView.as_view(template_name='index.html')
