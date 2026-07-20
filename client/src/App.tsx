import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Core pages
import Home from "./pages/Home";
import About from "./pages/About";
import AboutFrances from "./pages/AboutFrances";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// Service pages
import ServicePage from "./pages/ServicePage";

// Industry pages
import IndustryPage from "./pages/IndustryPage";

// Location pages
import LocationPage from "./pages/LocationPage";

// Pages that include their own Navigation + Footer
const STANDALONE_ROUTES = ["/privacy-policy", "/terms-of-service"];
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/frances-joseph" component={AboutFrances} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServicePage} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/:slug" component={IndustryPage} />
      <Route path="/locations" component={Locations} />
      <Route path="/locations/:slug" component={LocationPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={Terms} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppLayout() {
  const [location] = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(location);

  if (isStandalone) {
    // Legal pages manage their own Navigation + Footer
    return (
      <div className="min-h-screen flex flex-col">
        <Router />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppLayout />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
