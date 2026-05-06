import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';

// Main pages
import ProHome from './pages/ProHome';
import CollegiateHome from './pages/CollegiateHome';

// Product category pages
import BustsAndStatues from './pages/BustsAndStatues';
import PhotoImageCast from './pages/PhotoImageCast';
import ThreeDReliefPlaques from './pages/ThreeDReliefPlaques';
import HallOfFamePage from './pages/HallOfFamePage';
import DonorRecognition from './pages/DonorRecognition';
import DedicationPlaques from './pages/DedicationPlaques';
import BronzeMemorials from './pages/BronzeMemorials';
import AlumniMemorials from './pages/AlumniMemorials';

// Sport pages
import AllSports from './pages/AllSports';
import FootballPage from './pages/FootballPage';
import BasketballPage from './pages/BasketballPage';
import BaseballPage from './pages/BaseballPage';
import HockeyPage from './pages/HockeyPage';
import SoccerPage from './pages/SoccerPage';
import LacrossePage from './pages/LacrossePage';
import VolleyballPage from './pages/VolleyballPage';
import SwimmingPage from './pages/SwimmingPage';
import GolfPage from './pages/GolfPage';
import TrackFieldPage from './pages/TrackFieldPage';
import WrestlingPage from './pages/WrestlingPage';
import TennisPage from './pages/TennisPage';

// Global / utility pages
import RequestQuote from './pages/RequestQuote';
import Portfolio from './pages/Portfolio';
import ProductionProcess from './pages/ProductionProcess';
import MaterialsFinishes from './pages/MaterialsFinishes';

// Legacy redirected pages (keep for backward compatibility)
import BronzePlayerStatues from './pages/BronzePlayerStatues';
import ChampionshipBronzePlaques from './pages/ChampionshipBronzePlaques';
import StadiumDonorWalls from './pages/StadiumDonorWalls';
import AthleticDonorWalls from './pages/AthleticDonorWalls';
import CollegeHallOfFame from './pages/CollegeHallOfFame';
import RetiredJerseyDisplays from './pages/RetiredJerseyDisplays';
import CapitalCampaignRecognition from './pages/CapitalCampaignRecognition';
import CustomJerseyPlaques from './pages/CustomJerseyPlaques';
import ReliefJerseyPlaques from './pages/ReliefJerseyPlaques';
import BronzePaperweights from './pages/BronzePaperweights';
import HallOfFamePlaques from './pages/HallOfFamePlaques';

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
        {/* Homepages */}
        <Route path="/" element={<ProHome />} />
        <Route path="/collegiate" element={<CollegiateHome />} />

        {/* New main product pages */}
        <Route path="/busts-and-statues" element={<BustsAndStatues />} />
        <Route path="/photo-imagecast-plaques" element={<PhotoImageCast />} />
        <Route path="/3d-relief-plaques" element={<ThreeDReliefPlaques />} />
        <Route path="/hall-of-fame" element={<HallOfFamePage />} />
        <Route path="/donor-recognition" element={<DonorRecognition />} />
        <Route path="/dedication-plaques" element={<DedicationPlaques />} />
        <Route path="/bronze-memorials" element={<BronzeMemorials />} />
        <Route path="/alumni-memorials" element={<AlumniMemorials />} />

        {/* Sport pages */}
        <Route path="/all-sports" element={<AllSports />} />
        <Route path="/football" element={<FootballPage />} />
        <Route path="/basketball" element={<BasketballPage />} />
        <Route path="/baseball" element={<BaseballPage />} />
        <Route path="/hockey" element={<HockeyPage />} />
        <Route path="/soccer" element={<SoccerPage />} />
        <Route path="/lacrosse" element={<LacrossePage />} />
        <Route path="/volleyball" element={<VolleyballPage />} />
        <Route path="/swimming" element={<SwimmingPage />} />
        <Route path="/golf" element={<GolfPage />} />
        <Route path="/track-field" element={<TrackFieldPage />} />
        <Route path="/wrestling" element={<WrestlingPage />} />
        <Route path="/tennis" element={<TennisPage />} />

        {/* Global pages */}
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<ProductionProcess />} />
        <Route path="/materials" element={<MaterialsFinishes />} />

        {/* Legacy routes — preserved for SEO / backward compat */}
        <Route path="/bronze-player-statues" element={<BronzePlayerStatues />} />
        <Route path="/championship-bronze-plaques" element={<ChampionshipBronzePlaques />} />
        <Route path="/hall-of-fame-plaques" element={<HallOfFamePlaques />} />
        <Route path="/stadium-donor-walls" element={<StadiumDonorWalls />} />
        <Route path="/athletic-donor-walls" element={<AthleticDonorWalls />} />
        <Route path="/college-hall-of-fame-plaques" element={<CollegeHallOfFame />} />
        <Route path="/retired-jersey-displays" element={<RetiredJerseyDisplays />} />
        <Route path="/capital-campaign-recognition" element={<CapitalCampaignRecognition />} />
        <Route path="/custom-jersey-plaques" element={<CustomJerseyPlaques />} />
        <Route path="/3d-relief-jersey-plaques" element={<ReliefJerseyPlaques />} />
        <Route path="/bronze-paperweights" element={<BronzePaperweights />} />
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