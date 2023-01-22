import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const { i18n } = useTranslation('global');
  const { t } = useTranslation('global');
  return (
    <Navbar
      className="divNav"
      /* sticky="top" */
      expand="lg"
      style={{ display: 'flex', justifyContent: 'end', backgroundColor: 'white' }}
      expanded={expanded}
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        align="end"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ width: '100%' }}>
          <Link to="about" className="nav-link" onClick={() => setExpanded(false)}>
            {t('header.btnAbout')}
          </Link>
          <Link to="projects" className="nav-link" onClick={() => setExpanded(false)}>
            {t('header.btnMyPractice')}
          </Link>
          <Link to="ACT" className="nav-link" onClick={() => setExpanded(false)}>
            {t('header.btnACT')}
          </Link>
          <Link to="contact" className="nav-link" onClick={() => setExpanded(false)}>
            {t('header.btnContact')}
          </Link>
        </Nav>
        <Nav.Link style={{ widt: '100%' }}>
          <nav style={{ display: 'inline-flex' }}>
            <span className="btnLenguage">
              <button type="button" onClick={() => i18n.changeLanguage('en')} className="btnNav">
                EN
              </button>
            </span>
            <span className="btnLenguage">
              <button type="button" onClick={() => i18n.changeLanguage('es')} className="btnNav">
                ES
              </button>
            </span>
          </nav>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
