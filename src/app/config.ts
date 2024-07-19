const getConfig = () => {
  return {
    API_URL: import.meta.env.API_URL,
  };
};

export const config = getConfig();
