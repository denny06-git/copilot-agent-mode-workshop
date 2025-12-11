from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelSmokeTest(TestCase):
    def test_team_create(self):
        t = Team.objects.create(name='Test Team', universe='Marvel')
        self.assertEqual(str(t), 'Test Team')
    def test_user_create(self):
        t = Team.objects.create(name='Test Team2', universe='DC')
        u = User.objects.create(name='Bruce', email='bruce@wayne.com', team=t)
        self.assertEqual(str(u), 'Bruce')
    def test_activity_create(self):
        t = Team.objects.create(name='Test Team3', universe='Marvel')
        u = User.objects.create(name='Clark', email='clark@kent.com', team=t)
        a = Activity.objects.create(user=u, type='run', duration=30, date='2025-12-11')
        self.assertIn('Clark', str(a))
    def test_workout_create(self):
        w = Workout.objects.create(name='Pushups', description='Do pushups', suggested_for='strength')
        self.assertEqual(str(w), 'Pushups')
    def test_leaderboard_create(self):
        t = Team.objects.create(name='Test Team4', universe='DC')
        l = Leaderboard.objects.create(team=t, total_points=100, week=1)
        self.assertIn('Test Team4', str(l))
