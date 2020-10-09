from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JHGJHgViewSet

router = DefaultRouter()
router.register("jhgjhg", JHGJHgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
