import React, { useState } from "react";
import jsonData from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null); // Track the open accordion section

  // Toggle the accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if the same section is clicked, otherwise open the new one
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4 text-primary">BSL Board Game Sign Library</h1>
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-50 shadow-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className="accordion" id="accordionExample">
        {Object.entries(jsonData)
          .sort(([wordA], [wordB]) => wordA.localeCompare(wordB)) // Sort words alphabetically
          .filter(([word]) => word.includes(search))
          .map(([word, details], index) => (
            <div key={word} className="accordion-item">
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded={openIndex === index ? "true" : "false"}
                  aria-controls={`collapse-${index}`}
                  onClick={() => toggleAccordion(index)} // Handle the toggle click
                >
                  {word}
                </button>
              </h2>
              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {details.video && (
                    <video controls className="w-50 rounded border border-secondary p-2 mb-3">
                      <source src={details.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {details.subwords && (
                    <div className="mt-3">
                      <p className="fw-bold">Subwords:</p>
                      <div className="d-flex flex-wrap gap-2">
                        {details.subwords.map((subword) => (
                          jsonData[subword]?.video ? (
                            <div key={subword} className="text-center">
                              <p className="small mb-1">{subword}</p>
                              <video
                                controls
                                className="w-50 rounded border border-secondary"
                              >
                                <source
                                  src={jsonData[subword].video}
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          ) : (
                            <span key={subword} className="badge bg-info text-dark">
                              {subword}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
