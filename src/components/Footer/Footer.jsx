import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('global');
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a
            href={t('footer.networkURL1') || '/404'}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={t('footer.networkName1')}
          >
            <i className={`fa fa-${t('footer.networkName1') || 'refresh'} fa-inverse`} />
          </a>
          <a
            href={t('footer.networkURL2') || '/404'}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={t('footer.networkName2')}
          >
            <i className={`fa fa-${t('footer.networkName2') || 'refresh'} fa-inverse`} />
          </a>
        </div>
        <hr />
        <p className="footer__text">© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
