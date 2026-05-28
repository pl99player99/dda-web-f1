import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Contact from "./pages/Contact";
import Garantias from "./pages/Garantias";
import Termos from "./pages/Termos";
import Casos from "./pages/Casos";
import FAQ from "./pages/FAQ";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services"} component={Services} />
        <Route path={"/portfolio"} component={Portfolio} />
        <Route path={"/about"} component={About} />
        <Route path={"/quote"} component={Quote} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/blog/:id"} component={BlogArticle} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/garantias"} component={Garantias} />
        <Route path={"/termos"} component={Termos} />
        <Route path={"/casos"} component={Casos} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
          <Analytics />
          <SpeedInsights />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
