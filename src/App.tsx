import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Biografia from "./pages/Biografia";
import Projetos from "./pages/Projetos";
import Noticias from "./pages/Noticias";
import NewsDetail from "./pages/NewsDetail";
import PrestacaoContas from "./pages/PrestacaoContas";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/biografia" element={<Biografia />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/noticias/:slug" element={<NewsDetail />} />
              <Route path="/prestacao-contas" element={<PrestacaoContas />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
