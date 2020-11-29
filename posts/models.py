from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post_image = models.ImageField(upload_to='post_image', null=False)
    post_caption = models.TextField(max_length=100,null=True)
    votes = models.ManyToManyField(User,related_name='vote',blank=True)
    def __str__(self):
        return self.post_caption

class PostComment(models.Model):
    post = models.ForeignKey('posts.Post',on_delete=models.CASCADE)
    comment = models.TextField(max_length=100)
    user = models.CharField(max_length=10)

    def __str__(self):
        return self.comment
    
