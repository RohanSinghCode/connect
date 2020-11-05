from django.shortcuts import render



from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .serializers import PostSerializer,PostCommentSerializer
from .models import Post,PostComment
# Create your views here.


class PostCreateList(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    permissions_class = [IsAuthenticated]


class PostDelete(APIView):
    permissions_class = [IsAuthenticated]
    def delete(self,request,pk):
        user = self.request.user
        try:
            post = Post.objects.get(id=pk)
            if user == post.user:
                post.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            else:
                error = {
                    'error':"User does not match"
                }
                return Response(error)
        except Post.DoesNotExist:
            error = {
                'error':"Post does not exits"
            }
            return Response(error)


class PostDetail(APIView):
    def get(self,request,pk):
        try:
            post= Post.objects.get(id=pk)
            serializer = PostSerializer(post,many=False)
            return Response(serializer.data)
        except Post.DoesNotExist:
            error = {
                "error":"Post does not exist"
            }
            return Response(error)