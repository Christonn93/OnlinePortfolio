interface ImportMeta {
  env: {
    [key: string]: string | undefined;
    NODE_ENV: "development" | "production" | "test";
    VITE_API_URL?: string; // Add your custom environment variables here
  };
}