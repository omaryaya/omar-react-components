import React from "react";
import "./Accordion.css";

const Accordion = ({ data }) => {
  const [selected, setSelected] = React.useState(null);
  return (
    <div className="accordion-container">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div
              className="accordion-item"
              key={item.id}
              onClick={() => {
                selected === index ? setSelected(null) : setSelected(index);
              }}
            >
              <h2>
                {selected === index ? <> – </> : <> + </>}
                {item.question}
              </h2>

              {selected === index ? <p>{item.answer}</p> : null}
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Accordion;
