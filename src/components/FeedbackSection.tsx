import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { FEEDBACK_EMAIL } from "../data/contact";

const RATINGS = Array.from({ length: 10 }, (_, i) => i + 1);

export function FeedbackSection() {
  const { language } = useLanguage();
  const t = UI[language];
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === null) {
      setError(true);
      return;
    }
    setError(false);
    const subject = `Pueblito Viejo — Calificación ${rating}/10`;
    const body = [`Calificación: ${rating}/10`, "", comment || "(sin comentarios)"].join("\n");
    window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="feedback" className="scroll-mt-20 bg-cream-100 px-4 py-14">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-terracotta-600">{t.feedbackEyebrow}</p>
        <h2 className="font-display mt-2 text-3xl text-terracotta-800">{t.feedbackHeading}</h2>
        <p className="mt-3 font-body text-terracotta-700/80">{t.feedbackBody}</p>

        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl bg-white/90 p-6 text-left shadow-sm ring-1 ring-terracotta-100">
          <label className="font-body text-sm font-medium text-terracotta-800">{t.feedbackRatingLabel}</label>
          <div className="mt-3 flex flex-wrap gap-2">
            {RATINGS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setRating(n);
                  setError(false);
                }}
                aria-pressed={rating === n}
                className={`flex h-10 w-10 items-center justify-center rounded-full font-body text-sm font-semibold transition-colors ${
                  rating === n
                    ? "bg-brand-pink text-cream-50"
                    : "bg-cream-100 text-terracotta-700 hover:bg-terracotta-100"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          {error && <p className="mt-2 font-body text-sm text-red-600">{t.feedbackRatingRequired}</p>}

          <label className="mt-6 block font-body text-sm font-medium text-terracotta-800" htmlFor="feedback-comment">
            {t.feedbackCommentLabel}
          </label>
          <textarea
            id="feedback-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={t.feedbackCommentPlaceholder}
            rows={4}
            className="mt-2 w-full rounded-xl border border-terracotta-100 bg-cream-50 p-3 font-body text-sm text-terracotta-900 outline-none focus:border-brand-pink"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-brand-pink px-6 py-3 font-body font-semibold text-cream-50 shadow-lg transition-transform hover:scale-[1.02]"
          >
            {t.feedbackSubmit}
          </button>
          <p className="mt-3 text-center font-body text-xs text-terracotta-600/80">{t.feedbackHint}</p>
        </form>
      </div>
    </section>
  );
}
