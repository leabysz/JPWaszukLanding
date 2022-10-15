import React from 'react';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { i18n } = useTranslation('global');
  return (
    <div className="divNav">
      <nav style={{ width: '100%', padding: '2rem 0', display: 'flex', justifyContent: 'end' }}>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="cta-btn cta-btn--resume"
          style={{ backgroundImage: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)' }}
        >
          EN
        </button>
        <button
          onClick={() => i18n.changeLanguage('es')}
          className="cta-btn cta-btn--resume"
          style={{ backgroundImage: 'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)' }}
        >
          ES
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
