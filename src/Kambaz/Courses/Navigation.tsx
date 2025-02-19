import { courses } from "../Database";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export default function CourseNavigation() { 
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const { pathname } = useLocation();

  if (!course) {
    return <p className="text-danger">Course not found!</p>;
  }

  const links = [
    { label: "Home", path: `/Kambaz/Courses/${course._id}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${course._id}/Modules` },
    { label: "Piazza", path: `/Kambaz/Courses/${course._id}/Piazza` },
    { label: "Zoom", path: `/Kambaz/Courses/${course._id}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${course._id}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${course._id}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${course._id}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${course._id}/People` }
  ];

  return ( 
    <div>
      
      <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0"> 
        {links.map((link) => (
          <ListGroup.Item 
            key={link.path} 
            as={Link} 
            to={link.path} 
            className={`list-group-item border border-0 
              ${pathname.includes(link.label) ? "active border border-0" : "text-danger border border-0"}`}
          >
            {link.label}
          </ListGroup.Item>
        ))}
      </ListGroup> 
    </div>
  ); 
}