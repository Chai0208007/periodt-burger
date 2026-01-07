export const useToast = () => ({
    toast: ({ title, description }) => alert(`${title}: ${description}`)
});