import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  
  // Verifica se existe token no localStorage
  const token = localStorage.getItem('token');
  
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  
  // Valida o token com a API
  try {
    const response = await fetch('http://localhost:8080/movieflix/auth/validate', {
      method: 'HEAD',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (response.ok) {
      return true;
    } else {
      // Token inválido ou expirado
      localStorage.removeItem('token');
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    // Erro na validação (servidor offline, etc)
    console.error('Erro ao validar token:', error);
    localStorage.removeItem('token');
    router.navigate(['/login']);
    return false;
  }
};
