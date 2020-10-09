from rest_framework import authentication
from homejhgfjhg.models import JHGJHg
from .serializers import JHGJHgSerializer
from rest_framework import viewsets


class JHGJHgViewSet(viewsets.ModelViewSet):
    serializer_class = JHGJHgSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = JHGJHg.objects.all()
