
import { FaCloudUploadAlt, FaShareSquare, FaHome, FaStream, FaBullhorn, FaChartLine, FaBell } from 'react-icons/fa';


export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="button-row">
        <button className="btn unpublish-btn">Unpublish</button>
        <button className="btn publish-btn">Publish</button>
      </div>
      <div className="button-column">
        <button className="btn">
          <FaCloudUploadAlt className="icon" /> Import Existing Content
        </button>
        <button className="btn">
          <FaShareSquare className="icon" /> Import from Commons
        </button>
        <button className="btn">
          <FaHome className="icon" /> Choose Home Page
        </button>
        <button className="btn">
          <FaStream className="icon" /> View Course Stream
        </button>
        <button className="btn">
          <FaBullhorn className="icon" /> New Announcement
        </button>
        <button className="btn">
          <FaChartLine className="icon" /> New Analytics
        </button>
        <button className="btn">
          <FaBell className="icon" /> View Course Notifications
        </button>
      </div>
    </div>
  );
}