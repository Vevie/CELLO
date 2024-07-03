import { create } from 'zustand';


const usePetStore = create((set) => ({
    petList: [],
    setPetList: (data) => set({ petList: data }),
    pet: null,
    setPet: (pet) => set({ pet: pet }), 
    applicant: null,
    setApplicant: (applicant) => set({applicant: applicant}),
    applicantsList: [],
    setApplicantsList: (data) => set({applicantsList: data}),
    
    
    
}));

export default usePetStore;