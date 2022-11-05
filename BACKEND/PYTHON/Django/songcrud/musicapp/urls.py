from django.urls import path
from django.contrib import admin
from . import views


from .views import SongList, SongDetail, ArtisteList, ArtisteDetail


urlpatterns = [
    path('admin/', admin.site.urls),
    path("song/<int:pk>/", SongDetail.as_view(), name="song_detail"),
    path("song/", SongList.as_view(), name="song_list"),
    path("artiste/<int:pk>/", ArtisteDetail.as_view(), name="artiste_detail"),
    path("artiste/", ArtisteList.as_view(), name="artiste_list"),
]
