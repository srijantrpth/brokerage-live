import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAth from '../components/OAth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-background px-3'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-2'>
          <CardTitle className='text-3xl'>Create Account</CardTitle>
          <CardDescription>
            Sign up to start listing and exploring properties
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-6'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='username'>Username</Label>
              <Input
                type='text'
                placeholder='Choose a username'
                id='username'
                onChange={handleChange}
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                placeholder='your@email.com'
                id='email'
                onChange={handleChange}
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                placeholder='••••••••'
                id='password'
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type='submit'
              disabled={loading}
              className='w-full'
              size='lg'
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>

            {error && (
              <div className='bg-destructive/10 text-destructive text-sm p-3 rounded-md'>
                {error}
              </div>
            )}
          </form>

          <div className='relative my-4'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-border'></div>
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-card px-2 text-muted-foreground'>Or continue with</span>
            </div>
          </div>

          <OAth />

          <p className='text-center text-sm text-muted-foreground'>
            Already have an account?{' '}
            <Link to='/sign-in' className='text-primary font-semibold hover:underline'>
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}