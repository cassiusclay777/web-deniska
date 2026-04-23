import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  // TODO: Implement proper authentication
  // For now, use simple hardcoded credentials
  if (username === 'admin' && password === 'admin123') {
    // Set session cookie
    cookies.set('admin_session', 'authenticated', {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 day
    });
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/admin/dashboard',
      },
    });
  }

  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/admin/login?error=invalid_credentials',
    },
  });
};