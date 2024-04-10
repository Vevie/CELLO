import { create } from 'zustand';


const usePetStore = create((set) => ({
    users: [],
    user: null,
    setUsers: (data) => set({ users: data }),
    setUser: (user) => set({ user: user }), 
}));

export default usePetStore;