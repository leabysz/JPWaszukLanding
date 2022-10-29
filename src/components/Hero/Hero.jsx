import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation('global');

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {t('header.myName')} <span className="text-color-main"> {t('header.name')}</span>
            <br />
            {t('header.profesion')}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div style={{ display: 'flex', 'flex-direction': 'row' }}>
            <p className="hero-cta" style={{ paddingRight: '1rem' }}>
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {t('header.btnAbout')}
                </Link>
              </span>
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
