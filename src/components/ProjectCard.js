import { Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // If using React Router

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ backgroundColor: "white" }}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <a
            style={{ fontSize: 40, fontWeight: "bold" }}
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </Col>
  );
};
