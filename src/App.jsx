import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';

// Pages
import ProHome from './pages/ProHome';
import CollegiateHome from './pages/CollegiateHome';
import ShopHome from './pages/ShopHome';
import BronzePlayerStatues from './pages/BronzePlayerStatues';
import ChampionshipBronzePlaques from './pages/ChampionshipBronzePlaques';
import HallOfFamePlaques from './pages/HallOfFamePlaques';
import StadiumDonorWalls from './pages/StadiumDonorWalls';
import DimensionalMetalLetters from './pages/DimensionalMetalLetters';
import AthleticDonorWalls from './pages/AthleticDonorWalls';
import CollegeHallOfFame from './pages/CollegeHallOfFame';
import RetiredJerseyDisplays from './pages/RetiredJerseyDisplays';
import CapitalCampaignRecognition from './pages/CapitalCampaignRecognition';
import CustomJerseyPlaques from './pages/CustomJerseyPlaques';
import ReliefJerseyPlaques from './pages/ReliefJerseyPlaques';
import BronzePaperweights from './pages/BronzePaperweights';
import RequestQuote from './pages/RequestQuote';
import Portfolio from './pages/Portfolio';
import ProductionProcess from './pages/ProductionProcess';
import MaterialsFinishes from './pages/MaterialsFinishes';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-obsidian">
        <div className="w-8 h-8 border-4 border-bronze/30 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Main homepages */}
        <Route path="/" element={<ProHome />} />
        <Route path="/collegiate" element={<CollegiateHome />} />
        <Route path="/shop" element={<ShopHome />} />

        {/* Professional products */}
        <Route path="/bronze-player-statues" element={<BronzePlayerStatues />} />
        <Route path="/championship-bronze-plaques" element={<ChampionshipBronzePlaques />} />
        <Route path="/hall-of-fame-plaques" element={<HallOfFamePlaques />} />
        <Route path="/stadium-donor-walls" element={<StadiumDonorWalls />} />
        <Route path="/dimensional-metal-letters" element={<DimensionalMetalLetters />} />

        {/* Collegiate products */}
        <Route path="/athletic-donor-walls" element={<AthleticDonorWalls />} />
        <Route path="/college-hall-of-fame-plaques" element={<CollegeHallOfFame />} />
        <Route path="/retired-jersey-displays" element={<RetiredJerseyDisplays />} />
        <Route path="/capital-campaign-recognition" element={<CapitalCampaignRecognition />} />

        {/* Shop products */}
        <Route path="/custom-jersey-plaques" element={<CustomJerseyPlaques />} />
        <Route path="/3d-relief-jersey-plaques" element={<ReliefJerseyPlaques />} />
        <Route path="/bronze-paperweights" element={<BronzePaperweights />} />

        {/* Global pages */}
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<ProductionProcess />} />
        <Route path="/materials" element={<MaterialsFinishes />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;