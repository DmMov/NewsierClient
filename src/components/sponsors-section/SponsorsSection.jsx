import React from 'react';

// * Components
import { ResponsiveImage } from 'components';

// * Images
import ritmLogo from 'assets/images/ritm-logo';

// * Sass
import './SponsorsSection.scss';

export const SponsorsSection = () =>
  <section className="sponsorsSection">
    <div className="sponsorsSection__container">
      <h2 className="sectionTitle">спонсори</h2>
      <p className="sponsorsSection__subTitle">Рівненська медіа-група «РИТМ»</p>
      <ResponsiveImage
        src={ritmLogo}
        classes={['sponsorsSection__imageContainer']}
      />
      <p className="sponsorsSection__about">Медіа-група «РИТМ» – це телебачення + радіомовлення + інформаційне агентство. В одному місці ви отримаєте повний пакет послуг для реклами бізнесу, поширення ідеї, оголошення про захід.</p>
      <p className="sponsorsSection__subTitle little">Складові Рівненської медіа-групи «РИТМ»</p>
      <ul className="sponsorsSection__list">
        <li className="listItem">Телеканал «РИТМ»</li>
        <li className="listItem">Радіостанція «РИТМ-ФМ»</li>
        <li className="listItem">
          Інформаційний інтернет-портал <a href="https://ritm.tv/" target="_blank" rel="noopener noreferrer" className="listItem__link">www.ritm.tv</a>
        </li>
        <li className="listItem">
          Інформаційно-пізнавальний портал <a href="http://retrorivne.com.ua/?fbclid=IwAR0dNhTK4UHubn9CUmQUntB7RIquF5CHeB2d_a-wFWaEW9FTqq6oZvnZCj0" target="_blank" rel="noopener noreferrer" className="listItem__link">“РівнеРетроРитм”</a>
        </li>
        <li className="listItem">
          <a href="https://www.youtube.com/c/%D0%A2%D0%A0%D0%9A%D0%A0%D0%B8%D1%82%D0%BC?fbclid=IwAR2dzfRhMiaXUL7Bf6Qxv7KccAVz0_CMPls9-FsZJ_52sNn33unf0M1koxg" target="_blank" rel="noopener noreferrer" className="listItem__link">YouTube-канал “ТРК РИТМ</a>
        </li>
        <li className="listItem">
          <a href="https://www.instagram.com/trkritm/?fbclid=IwAR3XI_6kMc3pKwjD0y5zSKZR_b0ATIvCdepSZzYJnuET7kduux2QJFN9fyw" target="_blank" rel="noopener noreferrer" className="listItem__link">INSTAGRAM ТРК РИТМ</a>
        </li>
      </ul>
    </div>
  </section>;
