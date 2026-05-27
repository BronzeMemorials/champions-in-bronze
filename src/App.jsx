import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import { QuoteModalProvider } from './lib/QuoteModalContext';

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
import AluminumPlaques from './pages/AluminumPlaques';

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
import RetiredJerseyDisplays from './pages/RetiredJerseyDisplays';
import CapitalCampaignRecognition from './pages/CapitalCampaignRecognition';
import CustomJerseyPlaques from './pages/CustomJerseyPlaques';
import ReliefJerseyPlaques from './pages/ReliefJerseyPlaques';
import BronzePaperweights from './pages/BronzePaperweights';
import ModelViewer from './pages/ModelViewer';
import CustomBronzeStatues from './pages/CustomBronzeStatues';
import BronzeAthleteBusts from './pages/BronzeAthleteBusts';
import { Navigate } from 'react-router-dom';
import StadiumBronzeStatues from './pages/StadiumBronzeStatues';
import CollegeAthleticRecognition from './pages/CollegeAthleticRecognition';
import BronzePricingGuide from './pages/BronzePricingGuide';
import RequestConceptDesign from './pages/RequestConceptDesign';
import CommemorateGreatness from './pages/CommemorateGreatness';
import HowItWorks from './pages/HowItWorks';
import ReliefModelAdmin from './pages/ReliefModelAdmin';
import Reviews from './pages/Reviews';
import ABTestDashboard from './pages/ABTestDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import PhotoGalleryAdmin from './pages/PhotoGalleryAdmin';
import AdminLayout from './components/AdminLayout';
import ArtworkProofAdmin from './pages/ArtworkProofAdmin';
import ArtworkApprovalDashboard from './pages/ArtworkApprovalDashboard';
import GLBVideoAdmin from './pages/GLBVideoAdmin';
import ArtworkApprovalPage from './pages/ArtworkApprovalPage';

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
        <Route path="/aluminum-plaques" element={<AluminumPlaques />} />

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
        <Route path="/hall-of-fame-plaques" element={<Navigate to="/hall-of-fame" replace />} />
        <Route path="/stadium-donor-walls" element={<StadiumDonorWalls />} />
        <Route path="/athletic-donor-walls" element={<AthleticDonorWalls />} />
        <Route path="/college-hall-of-fame-plaques" element={<Navigate to="/hall-of-fame" replace />} />
        <Route path="/retired-jersey-displays" element={<RetiredJerseyDisplays />} />
        <Route path="/capital-campaign-recognition" element={<CapitalCampaignRecognition />} />
        <Route path="/custom-jersey-plaques" element={<CustomJerseyPlaques />} />
        <Route path="/3d-relief-jersey-plaques" element={<ReliefJerseyPlaques />} />
        <Route path="/bronze-paperweights" element={<BronzePaperweights />} />
        <Route path="/model-viewer" element={<ModelViewer />} />

        {/* New repositioned pages */}
        <Route path="/custom-bronze-athlete-statues" element={<CustomBronzeStatues />} />
        <Route path="/bronze-athlete-busts" element={<BronzeAthleteBusts />} />
        <Route path="/hall-of-fame-bronze-displays" element={<Navigate to="/hall-of-fame" replace />} />
        <Route path="/stadium-bronze-statues" element={<StadiumBronzeStatues />} />
        <Route path="/college-athletic-recognition" element={<CollegeAthleticRecognition />} />
        <Route path="/bronze-statue-pricing" element={<BronzePricingGuide />} />
        <Route path="/request-concept-design" element={<RequestConceptDesign />} />
        <Route path="/commemorate-greatness" element={<CommemorateGreatness />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* Alias routes for new URL structure */}
        <Route path="/3d-bas-relief-plaques" element={<ThreeDReliefPlaques />} />
        <Route path="/photo-image-casting-plaques" element={<PhotoImageCast />} />
        <Route path="/materials-finishes" element={<MaterialsFinishes />} />
        <Route path="/glb-video-admin" element={<GLBVideoAdmin />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Public artwork approval page — no nav/footer */}
      <Route path="/approval/:token" element={<ArtworkApprovalPage />} />

      {/* Admin routes — auth-gated, no public navbar/footer */}
      <Route element={<AdminLayout />}>
        <Route path="/photo-gallery-admin" element={<PhotoGalleryAdmin />} />
        <Route path="/relief-model-admin" element={<ReliefModelAdmin />} />
        <Route path="/ab-test-dashboard" element={<ABTestDashboard />} />
        <Route path="/artwork-proof-admin" element={<ArtworkProofAdmin />} />
        <Route path="/artwork-approval-dashboard" element={<ArtworkApprovalDashboard />} />
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
          <QuoteModalProvider>
            <ErrorBoundary>
              <AuthenticatedApp />
            </ErrorBoundary>
          </QuoteModalProvider>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;