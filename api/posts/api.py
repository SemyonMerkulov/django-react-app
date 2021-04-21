from rest_framework import generics
from rest_framework.response import Response
from .serializers import PostSerializer
from .models import Post

class PostApi(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer    

class PostCreateApi(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer    

class PostDeleteApi(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer        