export function handleLogout(navigate) {
  localStorage.removeItem('token');
  localStorage.removeItem('@HeMoLAB:userEmail');
  localStorage.removeItem('@HeMoLAB:userName');
  localStorage.removeItem('@HeMoLAB:historico');
  localStorage.removeItem('@HeMoLAB:user');
  
  navigate('/');
}