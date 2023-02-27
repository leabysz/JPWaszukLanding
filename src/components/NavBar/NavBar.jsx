/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      /* sticky="top" */
      expand="lg"
      style={{ display: 'flex', justifyContent: 'end', backgroundColor: 'white' }}
      expanded={expanded}
      id="navbar"
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        align="end"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ width: '100%' }}>
          <Link
            to="about"
            smooth
            duration={1000}
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            {t('header.btnAbout')}
          </Link>
          <Link
            to="projects"
            smooth
            duration={1000}
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            {t('header.btnMyPractice')}
          </Link>
          <Link
            to="ACT"
            smooth
            duration={1000}
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            {t('header.btnACT')}
          </Link>
          <Link
            to="contact"
            smooth
            duration={1000}
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            {t('header.btnContact')}
          </Link>
        </Nav>
        <Nav.Link style={{ widt: '100%' }}>
          <nav style={{ display: 'inline-flex' }}>
            <span className="btnLenguage" role="button" onClick={() => i18n.changeLanguage('en')}>
              <button type="button" className="btnNav">
                EN
              </button>
            </span>
            <span className="btnLenguage" role="button" onClick={() => i18n.changeLanguage('es')}>
              <button type="button" className="btnNav">
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
