import { useState, useEffect} from 'react';
import axios from 'axios';
import User from '../types/types';

export const useGetUsers = (URL: string) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setUsers(response.data.users);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
    };
  }, [URL]); 

  return { users, loading, error };
};
