import React, { useEffect, useState } from "react";
import FacultyCss from "../facultyReg/FacultyReg.module.css";
import Card from "./quizCard";

const InActiveQuiz = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/inactive", {
          method: "get",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  console.log("InActiveQuiz rendered"); // add this line

  return (
    <>
      <div className={FacultyCss.container}>
        <div className={FacultyCss.nav}>
          <span>Quiz</span>
        </div>
        <div>
          {data.map((quiz) => (
            <Card
              key={quiz._id}
              id={quiz._id}
              title={quiz.title}
              faculty="Mohit"
              year={quiz.year}
              branch={quiz.branch}
              duration={quiz.duration}
              marks={quiz.marks}
            />
          ))}
          
        </div>
      </div>
    </>
  );
};

export default InActiveQuiz;
