// import { Search, } from 'lucide-react';
// import { IoEllipsisVertical } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";
// import  LessonControlButtons from "./LessonControlButtons";
// import { IoNewspaperOutline } from "react-icons/io5";
// import { BsGripVertical } from "react-icons/bs";
// export default function Assignments() {
//     return (
//         <div id="wd-assignments">
//             <div className="wd-assignments-header">
//                 <div className="wd-search-container">
//                     <Search className="wd-search-icon" size={20} />
//                     <input 
//                         placeholder="Search..." 
//                         id="wd-search-assignment"
//                     />
//                 </div>
//                 <button id="wd-add-assignment-group">+ Group</button> 
//                 <button id="wd-add-assignment">+ Assignment</button>
//             </div>
            
//             <div className="wd-assignments-section">
//                 <div className="wd-assignments-header-section">
//                     <div className="wd-header-left">
//                     <BsGripVertical className="me-2 fs-3" />
//                         <h3 id="wd-assignments-title">
//                             ASSIGNMENTS 
//                             <span className="wd-percentage">40% of Total</span>
//                         </h3>
//                     </div>
//                     <div className="wd-header-right">
//                         <FaPlus/>
//                         <IoEllipsisVertical/>
//                     </div>
//                 </div>
                
//                 <ul id="wd-assignment-list">
//                     <li className="wd-assignment-list-item">
//                     <BsGripVertical className="me-2 fs-3" />
//                     <IoNewspaperOutline className="fs-4 text-success" /> 
//                         <div className="wd-assignment-content">
//                             <div className="wd-assignment-header">
//                                 <div className="wd-assignment-title">
                                
                                
//                                     <a href="#/Kambaz/Courses/1234/Assignments/123">A1</a>
//                                 </div>
//                                 <div className="wd-assignment-status">
//                                 <LessonControlButtons/>
//                                     <IoEllipsisVertical/>
//                                 </div>
//                             </div>
//                             <div className="wd-assignment-details">
//                                 <div className="wd-modules">Multiple Modules | Not available until May 6 at 12:00am |</div>
//                                 <div className="wd-due-date">Due May 13 at 11:59pm | 100 pts</div>
//                             </div>
//                         </div>
//                     </li>
                    
//                     <li className="wd-assignment-list-item">
//                     <BsGripVertical className="me-2 fs-3" />
//                     <IoNewspaperOutline className="fs-4 text-success" /> 
//                         <div className="wd-assignment-content">
//                             <div className="wd-assignment-header">
//                                 <div className="wd-assignment-title">
                               
//                                     <a href="#/Kambaz/Courses/1234/Assignments/124">A2</a> 
//                                 </div>
//                                 <div className="wd-assignment-status">
                                  
//                                 <LessonControlButtons/>
//                                     <IoEllipsisVertical/>
//                                 </div>
//                             </div>
//                             <div className="wd-assignment-details">
//                                 <div className="wd-modules">Multiple Modules | Not available until May 13 at 12:00am |</div>
//                                 <div className="wd-due-date">Due May 20 at 11:59pm | 100 pts</div>
//                             </div>
//                         </div>
//                     </li>
                    
//                     <li className="wd-assignment-list-item">
//                     <BsGripVertical className="me-2 fs-3" />
//                     <IoNewspaperOutline className="fs-4 text-success" /> 
//                         <div className="wd-assignment-content">
//                             <div className="wd-assignment-header">
//                                 <div className="wd-assignment-title">
                               
//                                     <a href="#/Kambaz/Courses/1234/Assignments/125">A3</a>
//                                 </div>
//                                 <div className="wd-assignment-status">
//                                 <LessonControlButtons/>
//                                     <IoEllipsisVertical/>
//                                 </div>
//                             </div>
//                             <div className="wd-assignment-details">
//                                 <div className="wd-modules">Multiple Modules | Not available until May 20 at 12:00am |</div>
//                                 <div className="wd-due-date">Due May 27 at 11:59pm | 100 pts</div>
//                             </div>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

import { Button, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import AssignmentControll from "./AssignmentControlRight";
import AssignmentControll1 from "./AssignmentControlLeft";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="row justify-content-between">
          <div className="position-relative col-md-8">
            <HiMagnifyingGlass className="position-absolute ms-2" style={{margin:"0 auto", height:"100%", left:"12px"}}/>
            <input
                type="text"
                placeholder="Search..."
                className="form-control wd-search-bar"
                style={{paddingLeft:"30px", height:"48px"}}
            />
          </div>
          <div className="col-md-4">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
          </div>
        </div>

      <div id="wd-asignment-main-section" className="wd-title p-3 ps-2 ">
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-center">
              <div className="ms-3">
                <BsGripVertical className="me-2 fs-3" /><FaCaretDown/> ASSIGNMENTS
              </div>
              <div className="ms-3 align-items-center">
                <button className="rounded-pill me-3 bg-secondary border-opacity-50">
                  40% of total
                </button>
                <button className="border-0 bg-secondary">
                  <IoAddSharp></IoAddSharp>
                </button>
                <IoEllipsisVerticalOutline></IoEllipsisVerticalOutline>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="wd-assignment-multiple d-flex justify-content-between align-items-center p-3">
            <div className="d-flex align-items-center">
              <AssignmentControll1 />
              <div className="ms-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-black text-decoration-none"
                >
                  A1
                </a>
                <p className="wd-assignment-details mb-0">
                  <span className="text-danger"> Multiple Modules</span> |{" "}
                  <b>Not Available until</b> May 6 at 12:00 am |
                  <br />
                  <b>Due </b>May 13 at 11:59 pm | 100 pts
                </p>
              </div>
            </div>
            <AssignmentControll />
          </ListGroup.Item>

          <ListGroup.Item className="wd-assignment-multiple d-flex justify-content-between align-items-center p-3">
            <div className="d-flex align-items-center">
              <AssignmentControll1 />
              <div className="ms-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-black text-decoration-none"
                >
                  A2
                </a>
                <p className="wd-assignmet-details">
                  <span className="text-danger"> Multiple Modules</span> |{" "}
                  <b>Not Available unitl</b> May 13 at 12:00 am|
                  <br />
                  <b>Due </b>May 20 at 11:59 pm| 100 pts
                </p>
              </div>
            </div>
            <AssignmentControll />
          </ListGroup.Item>

          <ListGroup.Item className="wd-assignment-multiple d-flex justify-content-between align-items-center p-3">
            <div className="d-flex align-items-center">
              <AssignmentControll1 />
              <div className="ms-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-black text-decoration-none"
                >
                  A3
                </a>
                <p className="wd-assignmet-details">
                  <span className="text-danger"> Multiple Modules</span> |{" "}
                  <b>Not Available unitl</b> May 20 at 12:00 am|
                  <br />
                  <b>Due </b>May 27 at 11:59 pm| 100 pts
                </p>
              </div>
            </div>
            <AssignmentControll />
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}