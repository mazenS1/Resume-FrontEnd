import { FileText, Globe, Sparkles, Shield, WifiOff, Lock } from "lucide-react";
import { useAppModeStore } from "@/store/appModeStore";
import { useResumeStore } from "@/store/resumeStore";
import { sampleResume } from "@/data/sampleResume";
import { sampleResumeAr } from "@/data/sampleResumeAr";
import { nanoid } from "nanoid";
import type { Resume } from "@resume/shared";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export const WelcomeScreen = () => {
  const language = useAppModeStore((state) => state.language);
  const setLanguage = useAppModeStore((state) => state.setLanguage);
  const setHasCompletedOnboarding = useAppModeStore(
    (state) => state.setHasCompletedOnboarding
  );
  const saveResume = useAppModeStore((state) => state.saveResume);
  const setActiveResumeId = useAppModeStore((state) => state.setActiveResumeId);
  const setResume = useResumeStore((state) => state.setResume);

  const createBlankResume = (): Resume => {
    const id = nanoid();
    return {
      id,
      userId: "local-user",
      title: language === "ar" ? "سيرتي الذاتية" : "My Resume",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      basicInfo: {
        name: "",
        email: "",
        phone: null,
        location: null,
        headline: null,
        links: [],
      },
      metadata: {
        locale: language === "ar" ? "ar-SA" : "en-US",
        theme: "light",
        fontFamily: language === "ar" ? "IBM Plex Sans Arabic" : "EB Garamond",
        lineHeight: 1.4,
        accentColor: "#0F172A",
        primaryColor: "#0F172A",
      },
      sections: [
        {
          id: nanoid(),
          resumeId: id,
          type: "SUMMARY",
          titleOverride: language === "ar" ? "الملخص" : "Summary",
          position: 0,
          collapsed: false,
          entries: [
            {
              id: nanoid(),
              sectionId: "",
              position: 0,
              title: language === "ar" ? "الملخص" : "Summary",
              bullets: [],
              subtitle: null,
              companyOrOrg: null,
              location: null,
              startDate: null,
              endDate: null,
              isCurrent: false,
              description: "",
              projectUrl: null,
              techStack: [],
            },
          ],
        },
        {
          id: nanoid(),
          resumeId: id,
          type: "WORK_EXPERIENCE",
          titleOverride: language === "ar" ? "الخبرات" : "Experience",
          position: 1,
          collapsed: false,
          entries: [],
        },
        {
          id: nanoid(),
          resumeId: id,
          type: "EDUCATION",
          titleOverride: language === "ar" ? "التعليم" : "Education",
          position: 2,
          collapsed: false,
          entries: [],
        },
        {
          id: nanoid(),
          resumeId: id,
          type: "SKILL",
          titleOverride: language === "ar" ? "المهارات" : "Skills",
          position: 3,
          collapsed: false,
          entries: [],
        },
      ],
    };
  };

  const handleStartFresh = () => {
    const newResume = createBlankResume();
    saveResume(newResume);
    setActiveResumeId(newResume.id);
    setResume(newResume);
    setHasCompletedOnboarding(true);
  };

  const handleLoadSample = () => {
    const sample = structuredClone(
      language === "ar" ? sampleResumeAr : sampleResume
    );
    sample.id = nanoid();
    sample.createdAt = new Date().toISOString();
    sample.updatedAt = new Date().toISOString();
    saveResume(sample);
    setActiveResumeId(sample.id);
    setResume(sample);
    setHasCompletedOnboarding(true);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground flex flex-col"
      dir="rtl"
    >
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-6 border-b border-border">
        <Logo size="small" />
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-lg space-y-8">
          {/* Hero */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 text-accent text-xs sm:text-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>جاهز لأنظمة التوظيف الذكية</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight"
              style={{ fontFamily: "'Amiri', serif" }}
            >
              يلا نبني{" "}
              <span className="italic text-accent">سيرتك الذاتية</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              سوّي سيرة ذاتية احترافية في دقايق معدودة، بدون تعقيد وبشكل يناسب
              سوق العمل
            </p>
          </div>

          {/* Language Selection */}
          <div className="space-y-4 border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-accent" />
              <span>اختر لغة السيرة الذاتية</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              هذا الخيار يحدد لغة محتوى سيرتك الذاتية فقط
            </p>
            <div className="flex gap-3 justify-center">
              <div className="relative">
                <span className="absolute -top-3 -right-3 z-10 bg-[#22c55e] text-white text-[9px] px-1.5 py-0.5 font-medium rotate-12 shadow-sm">
                  موصى به
                </span>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "relative min-w-[130px] sm:min-w-[140px] h-12 text-sm tracking-wide overflow-hidden transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    language === "en"
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-foreground hover:border-accent"
                  )}
                >
                  English Resume
                </button>
              </div>
              <button
                onClick={() => setLanguage("ar")}
                className={cn(
                  "relative min-w-[130px] sm:min-w-[140px] h-12 text-sm tracking-wide overflow-hidden transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  language === "ar"
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-foreground hover:border-accent"
                )}
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                سيرة بالعربي
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleStartFresh}
              className="group relative w-full h-14 bg-primary text-accent-foreground text-base sm:text-lg font-semibold tracking-wide overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">ابدأ من الصفر</span>
            </button>
            <button
              onClick={handleLoadSample}
              className="group relative w-full h-14 border border-border text-foreground text-base sm:text-lg tracking-wide overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-accent-foreground transition-colors duration-300">
                شوف مثال جاهز
              </span>
            </button>
          </div>

          {/* Security Features */}
          <div className="border border-border bg-card p-5">
            <div className="flex items-center justify-center gap-2 text-accent font-medium mb-4">
              <Shield className="w-5 h-5" />
              <span>خصوصيتك أولويتنا</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center gap-2 p-2">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <Lock className="w-4 h-4 text-accent" />
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  بياناتك على جهازك فقط
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 p-2">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <WifiOff className="w-4 h-4 text-accent" />
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  يشتغل بدون نت
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 p-2">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  ما نشارك بياناتك
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-2 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto border border-border flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground">تصميم احترافي</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto border border-border flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground">متوافق مع ATS</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto border border-border flex items-center justify-center">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground">عربي وإنجليزي</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center border-t border-border">
        <p className="text-xs text-muted-foreground">
          صُنع بـ <span className="text-accent">♥</span> للباحثين عن عمل في
          الوطن العربي
        </p>
      </footer>
    </div>
  );
};
