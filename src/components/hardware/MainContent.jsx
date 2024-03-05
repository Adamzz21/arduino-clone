import React from "react";
import "./mainContent.css";
import Marker from "../../assets/svg/marker.svg";
import ArduinoHardware from "./ArduinoHardware";
import ContentSections from "../constant/CONTANT_SECTION";
import HardwareTables from "./HardwareTables";

export default function MainContent() {
  const CheckForTags = (paragraphItem) => {
    if (paragraphItem.includes("<b>")) {
      const splitedParagraph = paragraphItem.split(/(<b>|<\/b>)/);
      var startskipIndex = -1;
      const mappedParagraph = splitedParagraph.map((part, index) => {
        if (part === "<b>") {
          startskipIndex = index + 1;
          return null;
        }
        if (part === "</b>") {
          return null;
        }
        if (index === startskipIndex) {
          return <b>{part}</b>;
        }
        return part;
      });
      return <p>{mappedParagraph}</p>;
    }
    if (paragraphItem.includes("<a>")) {
      const splitedParagraph = paragraphItem.split(/(<a>|<\/a>)/);
      var startskipIndex = -1;
      var url;
      const mappedParagraph = splitedParagraph.map((part, index) => {
        if (part === "<a>") {
          startskipIndex = index;
          return null;
        }
        if (index === startskipIndex + 1) {
          url = part;
          // return null;
        }
        if (index === startskipIndex + 2) {
          return <a href={url}>{part}</a>;
        }
        if (part === "</a>") {
          return "null";
        }
        return part;
      });
      return <p>{mappedParagraph}</p>;
    }
    // If no "<b>" or "<a>" tags are found, return the paragraph as is
    return <p>{paragraphItem}</p>;
  };
  return (
    <div className="main-contant-wrapper">
      <ArduinoHardware />
      <div className="hardware-elements">
        {Object.entries(ContentSections).map(([_, section], index) => (
          <div className="hardware-element" key={index}>
            <h1 id={section.id}>{section.header}</h1>
            {section.LinkAfterTitle && (
              <a
                className="special-link-wrapper link-after-title"
                href={section.LinkAfterTitle?.path}
              >
                <img src={Marker} alt="" />
                <p className="special-link">{section.LinkAfterTitle?.link}</p>
              </a>
            )}

            {section.paragraph.map((paragraphItem, index) => (
              <div className="paragraphItem" key={index}>
                <p>
                  {Array.isArray(paragraphItem) ? (
                    // If paragraphItem is an array, map over its elements
                    paragraphItem.map((part, partIndex) => (
                      <span key={partIndex}>
                        {part.bold ? <b>{part.text}</b> : null}
                        {part.link ? (
                          <a href={part.path} className="paragraph-link">
                            {part.text}
                          </a>
                        ) : null}
                        {!part.bold && !part.link ? part.text : null}
                      </span>
                    ))
                  ) : (
                    <span>{paragraphItem}</span>
                  )}
                </p>
              </div>
            ))}
            {section.LinkBeforeTable && (
              <a
                className="special-link-wrapper link-before-table"
                href={section.LinkBeforeTable?.path}
              >
                <img src={Marker} alt="" />
                <p className="special-link">{section.LinkBeforeTable?.link}</p>
              </a>
            )}
            {section.TableType === "Simple" && (
              <HardwareTables Tables={section.Tables} />
            )}
            {section.TableType === "Double" && (
              <div className="Boards-Shields">
                <h4 id={section.Tables[0].BoardsId}>Boards</h4>
                <HardwareTables Tables={section.Tables[0].Boards} />
                <h4 id={section.Tables[1].BoardsId}>Shields</h4>
                <HardwareTables Tables={section.Tables[1].Shields} />
              </div>
            )}
            {section.row_after && <hr />}
          </div>
        ))}
      </div>
      <div className="retired">
        <h1 id="Retired">Retired</h1>
        <p>
          To view all retired Arduino products, please visit our{" "}
          <a href="https://docs.arduino.cc/retired/?_gl=1*1kgh647*_ga*NTU5OTYyNDg5LjE3MDgxNTkzMTQ.*_ga_NEXN8H46L5*MTcwODk5MzAyMy40MC4wLjE3MDg5OTMwMjYuMC4wLjA.*_fplc*S2RUSERPdXl6OXBWdVFDTDU5YWdtbFhoZVNvRVgzakJxMGhTRlgzZGdEWEt6Rmh3VnUxdnU3RVhIQ0RUalJRZFFQZlRtNnhKZWY4UnRiZzA2RCUyRk5icXA3VFh0THlRZFRQc1M0OHRnJTJCbDZ3TW85aUFwZENBaEZhc1VuamJ5QSUzRCUzRA..">
            Retired Products & Legacy Documentation
          </a>{" "}
          page. This includes all legacy products, getting started guides and
          other documentation that is considered legacy.
        </p>
        <div className="last-revised">
          <p>Last revision April 11, 2022, at 11:16 PM</p>
        </div>
      </div>
    </div>
  );
}
