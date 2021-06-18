from django.urls import re_path, path
from . import views

# For favicon
from django.views.generic.base import RedirectView
favicon_view = RedirectView.as_view(url='/static/frontend/img/favicon.ico', permanent=True)


app_name = "frontend"


urlpatterns = [
    # For favicon
    re_path(r'^favicon\.ico$', favicon_view),

    path('', views.index, name='index'),
    path('home',views.home, name='home'),
    path('signin', views.signInView, name='signInView'),
    path('dashboard', views.dashboard, name='dashboard')
]