import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const { i18n } = useTranslation('global');
  const { t } = useTranslation('global');
  return (
    <Navbar className="divNav" expand="lg" style={{ display: 'flex', justifyContent: 'end' }}>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ backgroundImage: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)' }}
        align="end"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ width: '100%' }}>
          <Nav.Link>
            <Link to="about" smooth duration={1000}>
              `{t('header.btnAbout')}`
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="projects" smooth duration={1000}>
              {t('header.btnMyPractice')}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="ACT" smooth duration={1000}>
              {t('header.btnACT')}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact" smooth duration={1000}>
              {t('header.btnContact')}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <nav style={{ display: 'inline-flex' }}>
              <button
                type="button"
                onClick={() => i18n.changeLanguage('en')}
                className="cta-btn cta-btn--resume"
                style={{ backgroundImage: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)' }}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => i18n.changeLanguage('es')}
                className="cta-btn cta-btn--resume"
                style={{ backgroundImage: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)' }}
              >
                ES
              </button>
            </nav>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
