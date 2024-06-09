import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export function AuthChecker(){
  const navigate = useNavigate();
  
  useEffect(() => {
    const userID = localStorage.getItem('userID');
    
    if (!userID) {
      navigate('/login');
    }
  }, [navigate]);
};

export const checkEmailVerification = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    await user.reload();
    if (user.emailVerified) {
      console.log('Email is verified');
    } else {
      console.log('Email is not verified');
    }
  }
};
