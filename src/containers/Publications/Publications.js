import React, {useContext} from "react";
import "./Publications.scss";
import {publicationsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!publicationsSection.display) {
    return null;
  }

  const items = publicationsSection.publications || [];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div>
          <h1 className="skills-heading">{publicationsSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode publication-subtitle"
                : "subTitle publication-subtitle"
            }
          >
            {publicationsSection.subtitle}
          </p>

          <div className="publications-container">
            {items.map((pub, i) => (
              <div
                key={i}
                className={`${
                  isDark
                    ? "dark-mode publication-card publication-card-dark"
                    : "publication-card publication-card-light"
                }${pub.image ? "" : " publication-card-no-image"}`}
              >
                {pub.image ? (
                  <div className="publication-image">
                    <img
                      src={pub.image}
                      alt={pub.projectName}
                      className="card-image-publications"
                    />
                  </div>
                ) : null}
                <div className="publication-detail">
                  <h5
                    className={
                      isDark
                        ? "dark-mode card-title-publications"
                        : "card-title-publications"
                    }
                  >
                    {pub.projectName}
                  </h5>
                  <p
                    className={
                      isDark
                        ? "dark-mode card-subtitle-publications"
                        : "card-subtitle-publications"
                    }
                  >
                    {pub.projectDesc}
                  </p>
                  {pub.footerLink && pub.footerLink.length > 0 ? (
                    <div className="publication-card-footer">
                      {pub.footerLink.map((link, j) => (
                        <span
                          key={j}
                          className={
                            isDark
                              ? "dark-mode publication-tag"
                              : "publication-tag"
                          }
                          onClick={() => openUrlInNewTab(link.url)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              openUrlInNewTab(link.url);
                          }}
                        >
                          {link.name}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
