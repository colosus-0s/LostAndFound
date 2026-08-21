import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight, Loader2, Sparkles, ChevronLeft } from 'lucide-react';
import { reportService, INITIAL_REPORT_DATA, ReportFormData } from '../services/reportService';
import { ReportProgress } from '../components/report/ReportProgress';
import { ReportTypeStep } from '../components/report/ReportTypeStep';
import { ItemInformationStep } from '../components/report/ItemInformationStep';
import { PhotoUploadStep } from '../components/report/PhotoUploadStep';
import { LocationStep } from '../components/report/LocationStep';
import { DateTimeStep } from '../components/report/DateTimeStep';
import { DescriptionStep } from '../components/report/DescriptionStep';
import { ReviewStep } from '../components/report/ReviewStep';
import { ReportSuccess } from '../components/report/ReportSuccess';

const STEPS_LIST = ['Type', 'Item Info', 'Photos', 'Location', 'Date & Time', 'Description', 'Review'];

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ReportFormData>(INITIAL_REPORT_DATA);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const stepContentRef = useRef<HTMLDivElement>(null);

  // GSAP Step entrance animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!stepContentRef.current || prefersReducedMotion) return;

    gsap.fromTo(
      stepContentRef.current,
      { opacity: 0.85, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
    );
  }, [currentStep]);

  const updateFormField = (field: string, value: string | string[] | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleAddPhoto = (photoUrl: string) => {
    setFormData((prev) => ({ ...prev, photos: [...prev.photos, photoUrl] }));
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, idx) => idx !== index),
    }));
  };

  // Client-Side Step Validation
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.reportType) {
        newErrors.reportType = 'Please select whether you lost or found an item.';
      }
    } else if (step === 2) {
      if (!formData.itemName.trim()) {
        newErrors.itemName = 'Item name is required.';
      }
      if (!formData.category) {
        newErrors.category = 'Please select a category.';
      }
    } else if (step === 4) {
      if (!formData.locationArea) {
        newErrors.locationArea = 'Please select a campus location area.';
      }
    } else if (step === 5) {
      if (!formData.date) {
        newErrors.date = 'Date is required.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 7) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        handleSubmitReport();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  const handleSubmitReport = async () => {
    setIsSubmitting(true);
    try {
      const res = await reportService.submitReport(formData);
      if (res.success) {
        setSubmittedReportId(res.reportId);
      }
    } catch (err) {
      console.error('Submission failed', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePageBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/browse');
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#04060A] text-slate-100 py-10 md:py-16 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <main className="max-w-[1200px] mx-auto relative z-10 space-y-8">
        
        {/* Top Page Navigation Control (PROBLEM 1 FIX) */}
        {!submittedReportId && (
          <div className="flex items-center justify-between">
            <button
              onClick={handlePageBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-violet-400" />
              <span>Back to Browse</span>
            </button>
            
            <Link
              to="/browse"
              className="text-xs font-semibold text-slate-300 hover:underline"
            >
              Browse Directory
            </Link>
          </div>
        )}

        {/* Page Top Title */}
        {!submittedReportId && (
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/40 text-violet-300 text-[11px] font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>GUIDED REPORTING SYSTEM</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              Report an Item
            </h1>
          </div>
        )}

        {/* Success Screen OR Step Form */}
        {submittedReportId ? (
          <ReportSuccess reportId={submittedReportId} reportType={formData.reportType} />
        ) : (
          <div className="space-y-8">
            
            {/* Stepper Progress Bar */}
            <ReportProgress
              currentStep={currentStep}
              totalSteps={7}
              stepsList={STEPS_LIST}
              onStepClick={handleStepClick}
            />

            {/* Active Step Form View */}
            <div ref={stepContentRef}>
              {currentStep === 1 && (
                <ReportTypeStep
                  reportType={formData.reportType}
                  onSelectType={(type) => updateFormField('reportType', type)}
                  error={errors.reportType}
                />
              )}

              {currentStep === 2 && (
                <ItemInformationStep
                  itemName={formData.itemName}
                  category={formData.category}
                  brand={formData.brand}
                  color={formData.color}
                  onChange={updateFormField}
                  errors={errors}
                />
              )}

              {currentStep === 3 && (
                <PhotoUploadStep
                  photos={formData.photos}
                  onAddPhoto={handleAddPhoto}
                  onRemovePhoto={handleRemovePhoto}
                />
              )}

              {currentStep === 4 && (
                <LocationStep
                  locationArea={formData.locationArea}
                  specificPlace={formData.specificPlace}
                  onChange={updateFormField}
                  errors={errors}
                />
              )}

              {currentStep === 5 && (
                <DateTimeStep
                  date={formData.date}
                  approxTime={formData.approxTime}
                  onChange={updateFormField}
                  errors={errors}
                />
              )}

              {currentStep === 6 && (
                <DescriptionStep
                  description={formData.description}
                  onChange={(val) => updateFormField('description', val)}
                />
              )}

              {currentStep === 7 && (
                <ReviewStep data={formData} onEditStep={(step) => setCurrentStep(step)} />
              )}
            </div>

            {/* Form Step Navigation Bar */}
            <div className="max-w-2xl lg:max-w-3xl mx-auto flex items-center justify-between pt-6 border-t border-indigo-950/80">
              <button
                disabled={currentStep === 1 || isSubmitting}
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B0F1B] border border-indigo-900/60 text-slate-300 font-bold text-xs uppercase tracking-wider hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                disabled={isSubmitting || (currentStep === 1 && !formData.reportType)}
                onClick={handleNext}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-lg ${
                  formData.reportType === 'LOST'
                    ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-950/50'
                    : formData.reportType === 'FOUND'
                    ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-950/50'
                    : 'bg-violet-600 hover:bg-violet-500 shadow-violet-950/50'
                } disabled:opacity-40 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Report...</span>
                  </>
                ) : (
                  <>
                    <span>{currentStep === 7 ? (formData.reportType === 'LOST' ? 'Submit Lost Report' : 'Submit Found Report') : 'Continue'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </div>
        )}

      </main>
    </div>
  );
};
