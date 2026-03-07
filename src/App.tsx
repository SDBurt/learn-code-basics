import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { TopicPage } from "./pages/topic-page";
import { TerminologyPage } from "./pages/terminology";
import { QuizPage } from "./pages/quiz";
import { CodingHumorPage } from "./pages/coding-humor";
import { SparkleCursor } from "./components/shared/sparkle-cursor";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
      <SparkleCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:slug" element={<TopicPage />} />
        <Route path="/terminology" element={<TerminologyPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/coding-humor" element={<CodingHumorPage />} />
      </Routes>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
