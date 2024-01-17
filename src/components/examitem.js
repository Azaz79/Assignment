import React from "react";


const ExamItem = (props) => {

  const { exam } = props;
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex ">
            <h3 className="card-title">{exam.tag}  </h3><br/>
          </div>
          <h5 className="card-title">{exam.title}</h5>
          <p className="card-text">{exam.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExamItem;
