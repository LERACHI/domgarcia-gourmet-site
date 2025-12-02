import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Fidelity from "./pages/Fidelity";
import SaboresDoOeste from "./pages/SaboresDoOeste";
import SuaChance from "./pages/SuaChance";
import Clickfoz from "./pages/Clickfoz";
import Harmonizacao from "./pages/Harmonizacao";
import MassaPerfeita from "./pages/MassaPerfeita";
import Historia from "./pages/Historia";
import Ingredientes from "./pages/Ingredientes";
import SaboresPrimavera from "./pages/SaboresPrimavera";
import MolhoItaliano from "./pages/MolhoItaliano";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Use basename so routes work under GitHub Pages subpath */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/fidelidade" element={<Fidelity />} />
          <Route path="/reportagem-sabores-do-oeste" element={<SaboresDoOeste />} />
          <Route path="/reportagem-sua-chance" element={<SuaChance />} />
          <Route path="/reportagem-clickfoz" element={<Clickfoz />} />
          <Route path="/harmonizacao-vinhos" element={<Harmonizacao />} />
          <Route path="/massa-artesanal" element={<MassaPerfeita />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/ingredientes-premium" element={<Ingredientes />} />
          <Route path="/sabores-primavera" element={<SaboresPrimavera />} />
          <Route path="/molho-italiano" element={<MolhoItaliano />} />
          <Route path="/contato" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
