export function decodeJWT(token) {
  try {
    if (!token) return null;
    
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    const payload = parts[1];
    
    const decoded = atob(payload);
    
    return JSON.parse(decoded);
  } catch (error) {
    console.error("Erro ao decodificar JWT:", error);
    return null;
  }
}

export function getUserIdFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  const decoded = decodeJWT(token);
  if (!decoded) return null;
  
  return decoded.usuarioID || null;
}

export function getUserEmailFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  const decoded = decodeJWT(token);
  if (!decoded) return null;
  
  return decoded.email || null;
}

export function getUserNameFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  const decoded = decodeJWT(token);
  if (!decoded) return null;
  
  return decoded.nome || null;
}