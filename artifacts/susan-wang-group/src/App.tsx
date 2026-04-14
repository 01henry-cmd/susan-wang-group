import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import BuyersPage from "@/pages/BuyersPage";
import SellersPage from "@/pages/SellersPage";
import InvestorsPage from "@/pages/InvestorsPage";
import CommunitiesPage from "@/pages/CommunitiesPage";
import ListingsPage from "@/pages/ListingsPage";
import VideosPage from "@/pages/VideosPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ContactPage from "@/pages/ContactPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/buyers" component={BuyersPage} />
      <Route path="/sellers" component={SellersPage} />
      <Route path="/investors" component={InvestorsPage} />
      <Route path="/communities" component={CommunitiesPage} />
      <Route path="/listings" component={ListingsPage} />
      <Route path="/videos" component={VideosPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
