from django.urls import path
from .views import VenueViewset

urlpatterns = [
    path('venue/', VenueViewset.as_view()),
    path('venue/<int:pk>/', VenueViewset.as_view()),
]