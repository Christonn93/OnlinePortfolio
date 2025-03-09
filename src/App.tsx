import { About, Contact, Hero, Projects, Skills } from "@/components/sections";
import { Footer, Header, Main } from "@/components/layout";

function App() {
 return (
  <>
   <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
    <Header />
    <Main>
     <Hero />
     <About />
     <Projects />
     <Skills />
     <Contact />
    </Main>
    <Footer />
   </div>
  </>
 );
}

export default App;
