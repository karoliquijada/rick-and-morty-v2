import { React } from "react";

const Pagination = ({onPrev, onNext}) => {
  
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();  
  };

  return (
    <div className="pagination">
      <button className="block" onClick={handlePrev}>
        Prev
      </button>
      <button className="block" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
