from rest_framework.serializers import ModelSerializer
from posts.models import Post,PostComment
from rest_framework import serializers

from accounts.serializer import UserSerializer

class PostSerializer(ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(default=serializers.CurrentUserDefault(),read_only=True)
    class Meta:
        model = Post
        fields = '__all__'


class PostCommentSerializer(ModelSerializer):
    class Meta:
        model = PostComment
        fields = '__all__'