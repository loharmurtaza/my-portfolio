import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

const BULLETS_LIMIT = 2;

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const bullets = cardInfo.descBullets || [];
  const hasMore = bullets.length > BULLETS_LIMIT;
  const initialBullets = bullets.slice(0, BULLETS_LIMIT);
  const extraBullets = bullets.slice(BULLETS_LIMIT);

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          {initialBullets.map((item, i) => (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            >
              {item}
              {i === initialBullets.length - 1 && hasMore && !expanded && (
                <button
                  className="experience-show-more"
                  onClick={() => setExpanded(true)}
                >
                  ...Show more
                </button>
              )}
            </li>
          ))}
        </ul>
        {hasMore && (
          <div
            className={`experience-bullets-extra ${expanded ? "expanded" : ""}`}
          >
            <div className="experience-bullets-extra-inner">
              <ul className="experience-bullets-extra-list">
                {extraBullets.map((item, i) => (
                  <li
                    key={i}
                    className={isDark ? "subTitle dark-mode-text" : "subTitle"}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="experience-show-more experience-show-less"
                onClick={() => setExpanded(false)}
              >
                Show less
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
