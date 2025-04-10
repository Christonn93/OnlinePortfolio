import { Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Hero, Projects, Skills } from "@/components/sections";
import { Footer, Header, Main } from "@/components/layout";
import ClientQuestionForm from "./components/form/ClientQuestionForm";
import { ClientFormHeader } from "./components/layout/ClientFormHeader";


function App() {
 const location = useLocation();
 const isClientFormRoute = location.pathname === "/contact/client/clientQuestionForm";


 return (
  <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
  {!isClientFormRoute ? <Header /> : <ClientFormHeader />}
   <Routes>
    <Route
     path="/"
     element={
      <Main>
       <Hero />
       <About />
       <Projects />
       <Skills />
       <Contact />
      </Main>
     }
    />
    <Route path="/contact/client/clientQuestionForm" element={<ClientQuestionForm />} />
   </Routes>
   <Footer />
  </div>
 );
}

export default App;
