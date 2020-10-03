import React from "react";

const exp = () => {
  return (
    <ul className="text-left" style={{ listStyle: "none" }}>
      <li>
        <h4 className="text-danger">E-Bursum</h4>
        <h5>8/2020 - present</h5>
        <p>
          Junior Developer Intern
          <br />
          Re-built the front-end side of the company’s website using PHP for
          front-end, Sass, and Java Script without frameworks.
          <br />
          The pages I built have been integrated, sent to production, and are
          fully working now. and received positive reactions from the clients
        </p>
      </li>
      <hr/>
      <li>
        <h4 className="text-danger">Re:Coded Labs</h4>
        <h5>12/2019 - 5/2020</h5>
        <p>
          {" "}
          Junior Developer Intern
          <br />
          Worked with teams, and in pairs to build the front-end side of various
          projects.
          <br />
          Contributed to the teams with my knowledge of Algorithms and general
          programming.
        </p>
      </li>
      <hr />
      <li>
        <h4 className="text-danger">Üsküdar University - Teaching assistant</h4>
        <h5>2020 - 2/2020 – 4/2020</h5>
        <p>
          Works as a teaching assistant in my university to help explain
          algorithms for younger students.
        </p>
        <ul>
          <h4 className="text-primary">Courses:</h4>
          <li>
            <h5 className="text-secondary">Software Constructions:</h5>
            <p>
              {" "}
              (Writing Java codes of the data structures –Heaps, Trees, Linked
              Lists, Stacks, etc...)
            </p>
          </li>
          <li>
            <h5 className="text-secondary">Object Oriented Programming 2:</h5>
            <p> (OOP in C++)</p>
          </li>
          <li>
            <h5 className="text-secondary">Java I for 1st year students:</h5>
            <p> (java basics)</p>
          </li>
        </ul>
      </li>
      <hr />
      <li>
        <h4 className="text-danger">
          Al Wafa Rehabilitation Center - Helper Volunteer
        </h4>
        <h5>2016 – Riyadh</h5>
        <p>Helped disabled and Autistic students.</p>
      </li>
    </ul>
  );
};

export default exp;
