from django.urls import path
from .api import PostApi, PostCreateApi, PostDeleteApi, PostUpdateApi

urlpatterns = [
    path('',PostApi.as_view()),
    path('create',PostCreateApi.as_view()),
    path('<int:pk>/delete',PostDeleteApi.as_view()),
    path('<int:pk>',PostUpdateApi.as_view())
]