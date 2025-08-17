const getUserFromToken = (token) => {
  if (!token) {
    return null;
  }
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return {
      id: payload.id,
      email: payload.email,
      roles: payload.roles || [],
    };
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

module.exports = {
  getUserFromToken,
};
