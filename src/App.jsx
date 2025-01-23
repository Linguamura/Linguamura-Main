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
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/profile" element={<RegisterProfile />} />
        <Route path="/register/landing" element={<RegisterLanding />} />
        <Route path="/register/verify-email" element={<RegisterVerifyEmail />} />
        <Route path="/register/setup-account" element={<RegisterSetupAccount />} />
        <Route path="/register/take-photo" element={<TakePhoto />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="language-grid" element={<LanguageGrid />} />
          <Route path="proficiency" element={<ProficiencyPage />} />
          <Route path="daily-target" element={<DailyTarget />} />
          <Route path="great-start" element={<GreatStart />} />
          <Route path="study-plan" element={<StudyPlan />} />
          <Route path="chapter-list" element={<ChapterList />} />
          <Route path="day-streak" element={<DayStreakCard />} />
          <Route path="coin-balance" element={<CoinBalance />} />
          <Route path="select-language" element={<SelectLanguage />} />
          <Route path="learning-card" element={<LearningCard />} />
          <Route path="expert-guidance" element={<ExpertGuidanceCard />} />
          <Route path="listen-carefully" element={<ListenCarefullyCard />} />
          <Route path="done-sentence" element={<DoneSentence />} />
          <Route path="brava" element={<Brava />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;