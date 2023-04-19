import React from "react";
import "./text.css";
import {useTranslation } from 'react-i18next';

function Text() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="text">
        <div className="para1">
          <p>
            <span>Raj Vidya Kender</span> 

            {t('greeting')}
          </p>
        </div>
        <hr className="line"/>
        <div className="para2">
        {t('text2')}
        </div>
      </div>
    </div>
  );
}

export default Text;
