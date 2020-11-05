from django.urls import path


from .views import PostCreateList,PostDelete,PostDetail



urlpatterns = [
    path('create-list',PostCreateList.as_view(),name='create-list'),
    path('delete/<int:pk>',PostDelete.as_view(),name='delete'),
    path('detail/<int:pk>',PostDetail.as_view(),name='detail')
]