const getConfig = () => {
  return {
    API_URL: import.meta.env.API_URL,
    IS_DEVELOPMENT: process.env.NODE_ENV !== "development",
  };
};

export const config = getConfig();
