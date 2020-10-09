from rest_framework import serializers
from homejhgfjhg.models import JHGJHg


class JHGJHgSerializer(serializers.ModelSerializer):
    class Meta:
        model = JHGJHg
        fields = "__all__"
