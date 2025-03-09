import { ReactNode } from "react";
import { Helmet, HelmetProvider as Provider } from "react-helmet-async";

export const HelmetProvider = ({ children }: { children: ReactNode }) => {
 return (
  <Provider>
   <Helmet>
    <title>Christopher Tønnesland | Software Engineer</title>
    <meta name="description" content="Developer portfolio for Christopher Tønnesland, software engineer specializing in building exceptional digital experiences." />
   </Helmet>
   {children}
  </Provider>
 );
};
