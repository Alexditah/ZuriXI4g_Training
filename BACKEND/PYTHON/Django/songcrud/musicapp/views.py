from rest_framework import generics
from django.http import HttpResponse

from .models import Song, Artiste
from .serializers import SongSerializer, ArtisteSerializer


def index(request):
    return HttpResponse('<h1>Hello, This is my first web app.</h1>')


class SongList(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class SongDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class ArtisteList(generics.ListCreateAPIView):
    queryset = Artiste.objects.all()
    serializer_class = ArtisteSerializer


class ArtisteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artiste.objects.all()
    serializer_class = ArtisteSerializer

# return JsonResponse({serializer.data}, safe=false)
