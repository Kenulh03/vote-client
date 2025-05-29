import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { APP_NAME, APP_DESCRIPTION } from '../config/constants';

const LandingPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty('--mouse-x', x);
      heroRef.current.style.setProperty('--mouse-y', y);
    };

    const hero = heroRef.current;
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const appNameParts = APP_NAME.split(' ');

  return (
    <div className={styles.landingPage}>
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroPattern}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              {appNameParts.map((part, index) => (
                <span key={index} className={styles.heroTitleLine}>{part}</span>
              ))}
            </h1>
            <p className={styles.heroSubtitle}>{APP_DESCRIPTION}</p>
            <div className={styles.heroCta}>
              <Link to="/register" className={styles.primaryButton}>
                <span>Register to Vote</span>
              </Link>
              <Link to="/login" className={styles.secondaryButton}>
                <span>Sign In to Vote</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Secure</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Access</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>Global</span>
              <span className={styles.statLabel}>Coverage</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose Our Overseas Voting System?</h2>
            <p className={styles.sectionSubtitle}>Empowering Sri Lankan citizens abroad to participate in democracy</p>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <h3>Advanced Biometric Security</h3>
              <p>State-of-the-art facial recognition technology ensures only registered voters can cast ballots, eliminating fraud and ensuring election integrity.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3>Real-time Verification</h3>
              <p>Instant facial recognition verification ensures each vote is cast by the rightful voter, with comprehensive audit logs for transparency.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                </svg>
              </div>
              <h3>Accessible Anywhere</h3>
              <p>Vote securely from anywhere in the world with our user-friendly interface, designed for Sri Lankans of all technical abilities.</p>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>How It Works</h2>
            <p className={styles.sectionSubtitle}>Three simple steps to cast your vote from abroad</p>
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Register</h3>
              <p>Create your secure account and provide your facial biometrics for future verification.</p>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Verify</h3>
              <p>Login using facial recognition to securely verify your identity before accessing the ballot.</p>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Vote</h3>
              <p>Cast your vote in the Presidential election and receive instant confirmation of your ballot submission.</p>
              <div className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" className={styles.icon}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Cast Your Vote?</h2>
            <p>Join fellow Sri Lankans abroad in shaping the future of our nation</p>
            <div className={styles.ctaButtons}>
              <Link to="/register" className={styles.primaryButton}>
                <span>Register Now</span>
              </Link>
              <Link to="/login" className={styles.secondaryButton}>
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;