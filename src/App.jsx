import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, LoginPage, RegisterPage, TakePhoto, RegisterProfile, RegisterLanding, RegisterVerifyEmail, RegisterSetupAccount } from './pages';
import LandingPage from './pages/LandingPage';
import Education from './pages/Education';
import LanguageGrid from './pages/LanguageGrid';
import ProficiencyPage from './pages/ProficiencyPage';
import DailyTarget from './pages/DailyTarget';
import GreatStart from './pages/GreatStart';
import StudyPlan from './pages/StudyPlan';
import ChapterList from './pages/ChapterList';
import DayStreakCard from './pages/DayStreakCard';
import CoinBalance from './pages/CoinBalance';
import SelectLanguage from './pages/SelectLanguage';
import LearningCard from './pages/LearningCard';
import ExpertGuidanceCard from './pages/ExpertGuidanceCard';
import ListenCarefullyCard from './pages/ListenCarefullyCard';
import DoneSentence from './pages/DoneSentence';
import Brava from './pages/Brava';

const App = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Routes> 
        {/* Public Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Education' element={<Education />} />
          <Route path='LanguageGrid' element={<LanguageGrid />} />
          <Route path='ProficiencyPage' element={<ProficiencyPage />} />
          <Route path='DailyTarget' element={<DailyTarget />} />
          <Route path='GreatStart' element={<GreatStart />} />
          <Route path='StudyPlan' element={<StudyPlan />} />
          <Route path='ChapterList' element={<ChapterList />} />
          <Route path='DayStreakCard' element={<DayStreakCard />} />
          <Route path='CoinBalance' element={<CoinBalance />} />
          <Route path='SelectLanguage' element={<SelectLanguage />} />
          <Route path='LearningCard' element={<LearningCard />} />
          <Route path='ExpertGuidanceCard' element={<ExpertGuidanceCard />} />
          <Route path='ListenCarefullyCard' element={<ListenCarefullyCard />} />
          <Route path='DoneSentence' element={<DoneSentence />} />
          <Route path='Brava' element={<Brava />} />

        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/profile" element={<RegisterProfile />} />
        <Route path="/register/landing" element={<RegisterLanding />} />
        <Route path="/register/verify-email" element={<RegisterVerifyEmail />} />
        <Route path="/register/setup-account" element={<RegisterSetupAccount />} />
        <Route path="/register/take-photo" element={<TakePhoto />} />
      </Routes>
    </div>
  );
};

export default App;
