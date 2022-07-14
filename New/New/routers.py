from rest_framework import routers
from App1.models import Prerecharge

from App1.viewsets import NewViewSet, NewViewSet2, NewViewSet3, NewViewSet4, NewViewSet5, NewViewSet6, NewViewSet7, \
    NewViewSet8, NewViewSet9, NewViewSet10

router = routers.DefaultRouter()
router.register('prerecharge',NewViewSet)

router.register('postrecharge',NewViewSet2)

router.register('donglerecharge',NewViewSet3)

router.register('buypre',NewViewSet4)
router.register('buypost',NewViewSet5)
router.register('buyd',NewViewSet6)
router.register('rechargepre',NewViewSet7)
router.register('rechargepost',NewViewSet8)
router.register('rechargedongle',NewViewSet9)
router.register('helpcust',NewViewSet10)