import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/dbms.jpeg" width={200} />
            <div>
              <h5> CS4560 Dbms</h5>
              <p className="wd-dashboard-course-title">
              Database Management System  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algorithm.jpg" width={200} />
            <div>
              <h5> CS5800 Algorithms </h5>
              <p className="wd-dashboard-course-title">
              Algorithms  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/pdp.jpg" width={200} />
            <div>
              <h5> CS5010 PDP </h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/toc.jpg" width={200} />
            <div>
              <h5> CS3600 Toc </h5>
              <p className="wd-dashboard-course-title">
                Theory of Computation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/oopj.jpg" width={200} />
            <div>
              <h5> CS6700 Oopj </h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Programming in Java  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/nlp.jpg" width={200} />
            <div>
              <h5> CS5690 Nlp </h5>
              <p className="wd-dashboard-course-title">
                Natural Language processing  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reading.jpg" width={200} />
            <div>
              <h5> CS8090 Reading </h5>
              <p className="wd-dashboard-course-title">
                Reading </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ml.jpeg" width={200} />
            <div>
              <h5> CS5790 Ml </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5> CS1234 AI </h5>
              <p className="wd-dashboard-course-title">
                Artificial Intelligence  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
