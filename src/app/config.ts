const getConfig = () => {
  return {
    API_URL: import.meta.env.API_URL,
    IS_DEVELOPMENT: import.meta.env.DEV,
  };
};

export const config = getConfig();
