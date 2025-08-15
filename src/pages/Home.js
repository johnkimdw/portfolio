import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import HighlightedText from '../components/ui/HighlightedText';
import headshot from '../assets/img/headshot.JPG';

export default function Home() {
  const { colors } = useTheme();
  const [audioPlaying, setAudioPlaying] = useState(false);

  const playPronunciation = () => {
    // Placeholder for audio file - replace '/pronunciation.mp3' with your audio file
    const audio = new Audio('/pronunciation.mp3');
    setAudioPlaying(true);
    audio.play().catch(() => {
      // Fallback if audio file doesn't exist yet
      console.log('Audio file not found - add your pronunciation file to public/pronunciation.mp3');
    });
    audio.onended = () => setAudioPlaying(false);
  };

  return (
    <div className="space-y-4 py-8">
      {/* Header Section - Name and Photo like zen's */}
      <section className="flex items-center space-x-6 pb-8">
        <div className="w-20 h-20 flex-shrink-0">
          <img 
            src={headshot} 
            alt="John Kim" 
            className="w-full h-full object-cover rounded-lg grayscale"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-light font-space" style={{ color: colors.text }}>
              dongwhi kim
            </h1>
            <span 
              className="text-2xl cursor-help relative group"
              style={{ color: colors.textMuted }}
              title="east star"
            >
              김동휘
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-xs"
                   style={{ backgroundColor: colors.textMuted, color: colors.bg }}>
                east star
              </div>
            </span>
            <button 
              onClick={playPronunciation}
              className={`transition-colors duration-200 ${audioPlaying ? '' : ''}`}
              style={{ color: audioPlaying ? colors.text : colors.textMuted }}
              onMouseEnter={(e) => e.target.style.color = colors.text}
              onMouseLeave={(e) => e.target.style.color = audioPlaying ? colors.text : colors.textMuted}
              title="Play pronunciation"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89 .86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </button>
          </div>
          
          {/* External Links - zen's style */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm font-sans">
            {[
              { name: 'git', url: 'https://github.com/johnkimdw' },
              { name: 'cv', url: '/cv.pdf' },
              { name: 'x', url: 'https://twitter.com/johnkimdw' },
              { name: '@', url: 'mailto:dkim37@nd.edu' },
              { name: 'scholar', url: 'https://scholar.google.com/citations?user=-dDEr-sAAAAJ&hl=en' }
            ].map((link, index, array) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:underline"
                  style={{ color: colors.link }}
                  onMouseEnter={(e) => e.target.style.color = colors.linkHover}
                  onMouseLeave={(e) => e.target.style.color = colors.link}
                >
                  {link.name}
                </a>
                {index < array.length - 1 && (
                  <span className="text-xs" style={{ color: colors.textMuted }}>✦</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Left aligned like zen's */}
      <section className="text-left">
        <div className="space-y-6">
          <p className="text-sm leading-relaxed font-sans" style={{ color: colors.textMuted }}>
            i go by{' '}
            <HighlightedText bold>john</HighlightedText>
            , a senior at the University of Notre Dame, double majoring in cs & applied math. broadly, i work on <strong>trustworthy NLP</strong>, focused on interpretability of language models. i research closely with {' '}
            <HighlightedText href="https://www.nunomoniz.co/">nuno moniz</HighlightedText>
            {' '}and{' '}
            <HighlightedText href="http://www.meng-jiang.com/">meng jiang</HighlightedText>
            
            .
          </p>
          <p className="text-sm leading-relaxed font-sans" style={{ color: colors.textMuted }}>
            previously, i was an ai/ml sde intern at <strong>AWS</strong> SageMaker Unifed Studio where i built, deployed, and scaled AI agents. i worked end-to-end, including infrastructure (IaC), to agentic workflows with memory/hitl, and MCP/A2A integrations.
          </p>
          {/* <p className="text-base leading-relaxed font-sans" style={{ color: colors.textMuted }}>
            In my free time, I like cooking and dancing. Feel free to reach out to discuss 
            anything related to tech, food, and shows!
          </p> */}
        </div>
      </section>

      {/* Research Section - zen's style */}
      <section>
        <h2 className="text-lg font-medium 4 font-space" style={{ color: colors.text }}>
          Selected works
        </h2>
        <div className="space-y-4">
          <div className="space-y-1">
            <a 
              href="https://link.springer.com/chapter/10.1007/978-3-031-91398-3_33" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm leading-relaxed transition-colors duration-200 hover:underline font-sans"
              style={{ color: colors.link }}
              onMouseEnter={(e) => e.target.style.color = colors.linkHover}
              onMouseLeave={(e) => e.target.style.color = colors.link}
            >
              Relevance Aware Algorithmic Recourse
            </a>
            <p className="text-xs font-sans" style={{ color: colors.textMuted }}>
              IDA, 2025

            </p>

            <p className="text-xs font-sans" style={{ color: colors.textMuted }}>
              <strong>Dongwhi Kim</strong>, Nuno Moniz.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section - academic style with images */}
      <section>
        <h2 className="text-lg font-medium mb-4 font-space" style={{ color: colors.text }}>
          Projects
        </h2>
        <div className="space-y-6">
          {/* PROJECT 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded flex-shrink-0 flex items-center justify-center" 
                 style={{ backgroundColor: colors.textMuted + '20', border: `1px solid ${colors.border}` }}>
              <span className="text-xs" style={{ color: colors.textMuted }}>OSS</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/ziems/arbor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:underline font-sans"
                  style={{ color: colors.link }}
                  onMouseEnter={(e) => e.target.style.color = colors.linkHover}
                  onMouseLeave={(e) => e.target.style.color = colors.link}
                >
                  DSPy
                </a>
              </div>
              <p className="text-xs font-san italic underline" style={{ color: colors.textMuted }}>
                Main open-source contributor for RL optimizations, Arbor
              </p>
              <p className="text-xs leading-relaxed font-sans" style={{ color: colors.textMuted }}>
                Built NVIDIA-GPU monitoring tools for training, JQlang query logging for debug, and used vLLM for reinforcement learning. Added CLI/Python module for config management, API startup, and example scripts.
              </p>
            </div>
          </div>
          
          {/* PROJECT 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded flex-shrink-0 flex items-center justify-center"
                 style={{ backgroundColor: colors.textMuted + '20', border: `1px solid ${colors.border}` }}>
              <span className="text-xs" style={{ color: colors.textMuted }}>ML</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/johnkimdw/handwritten-math-transcription" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:underline font-sans"
                  style={{ color: colors.link }}
                  onMouseEnter={(e) => e.target.style.color = colors.linkHover}
                  onMouseLeave={(e) => e.target.style.color = colors.link}
                >
                  Handwritten Math Equation Transcriber
                </a>
              </div>
              <p className="text-xs leading-relaxed font-sans" style={{ color: colors.textMuted }}>
                Built bidirectional LSTM encoder-decoder architecture with multi-head attention mechanism for seq2seq learning. 
                Pre-processed equations to LaTeX, then corrected with LLM using in-context learning with 92% validation accuracy.
              </p>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded flex-shrink-0 flex items-center justify-center" 
                 style={{ backgroundColor: colors.textMuted + '20', border: `1px solid ${colors.border}` }}>
              <span className="text-xs" style={{ color: colors.textMuted }}>WEB</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/johnkimdw/recepit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:underline font-sans"
                  style={{ color: colors.link }}
                  onMouseEnter={(e) => e.target.style.color = colors.linkHover}
                  onMouseLeave={(e) => e.target.style.color = colors.link}
                >
                  Recepit
                </a>
              </div>
              <p className="text-xs font-san italic underline" style={{ color: colors.textMuted }}>
               1st Place Advanced Databases Final Project ($1050)
              </p>
              <p className="text-xs leading-relaxed font-sans" style={{ color: colors.textMuted }}>
Architected React Native app with Expo/Redux, Python (FastAPI), Oracle database, AWS EC2 hosting and S3 
     buckets. Coded collaborative filtering recommendation system using PL/SQL procedures, indexes, views and job scheduler.              </p>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded flex-shrink-0 flex items-center justify-center"
                 style={{ backgroundColor: colors.textMuted + '20', border: `1px solid ${colors.border}` }}>
              <span className="text-xs" style={{ color: colors.textMuted }}>WEB</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/Leoreoreo/TravelItineraryManager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:underline font-sans"
                  style={{ color: colors.link }}
                  onMouseEnter={(e) => e.target.style.color = colors.linkHover}
                  onMouseLeave={(e) => e.target.style.color = colors.link}
                >
                  Travel Itinerary Manager
                </a>
              </div>
              <p className="text-xs leading-relaxed font-sans" style={{ color: colors.textMuted }}>
                Built entire backend with Flask, PostgreSQL (pgvector for embeddings), Redis/Celery for task scheduling, AWS hosted. 
                Generated 10k synthetic trips, automated clustering/vectorizer model updates, designed content-based recommender.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}