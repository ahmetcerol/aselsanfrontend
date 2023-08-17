// Kullanıcı bilgisini saklayan bir context oluşturun
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [tcKimlikNo, setTcKimlikNo] = useState('');

  return (
    <UserContext.Provider value={{ tcKimlikNo, setTcKimlikNo }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
