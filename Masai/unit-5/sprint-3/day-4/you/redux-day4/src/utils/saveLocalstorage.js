export const saveAuthValue = (auth) => {
  //Sit the auth value to local storage.
  try {
    localStorage.setItem("auth", JSON.stringify(auth));
  } catch (error) {
    // Handle localStorage errors, e.g., quota exceeded
    console.error("Error saving auth value to localStorage:", error);
  }
};

export const getAuthValue = () => {
  //Get the auth value from local storage.
  try {
    const auth = localStorage.getItem("auth");
    return auth ? JSON.parse(auth) : null;
  } catch (error) {
    // Handle localStorage errors, e.g., blocked by browser settings
    console.error("Error getting auth value from localStorage:", error);
    return null;
  }
};
