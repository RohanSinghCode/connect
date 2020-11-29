from django.shortcuts import render,get_object_or_404


from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes


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

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def add_like(request,pk):
    try:
        post = Post.objects.get(id=pk)
        if request.method == 'POST':
            post.votes.add(request.user)
            serializer = PostSerializer(post)
            return Response(serializer.data)
        elif request.method=='GET':
            count = post.votes.all().count()
            data = {
                'likes':count
            }
            return Response(data)
    except Post.DoesNotExist:
        error = {
                "error":"Post does not exist"
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