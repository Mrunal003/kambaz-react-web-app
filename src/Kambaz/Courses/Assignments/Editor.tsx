export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        
        <textarea id="wd-description" rows={8} cols={50}>
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" value={100} />
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option>ASSIGNMENTS</option>
                  <option>QUIZZES</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option>Percentage</option>
                  <option>Grade</option>
                  <option>Points</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td align="right">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option>Online</option>
                  <option>Ofline</option>
                </select>
              </td>
            </tr>
            
            <tr>
              <td></td>
              <td>
                <h4>Online Entry Options</h4>
                <div>
                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" />
                  <label htmlFor="wd-website-url">Website URL</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-file-uploads" />
                  <label htmlFor="wd-file-uploads">File Uploads</label>
                </div>
              </td>
            </tr>
            
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>Assign To</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
            <tr>
              <td></td>
              <td>
                <label htmlFor="wd-due-date">Due</label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="date" id="wd-due-date" value="2024-05-13" />
              </td>
            </tr>
            
            <tr>
            <td></td>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td></td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="date" id="wd-available-from" />
            </td>
            <td></td>
            <td>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>

          </tbody>
        </table>
        <hr />
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button>Cancel</button>
          <button style={{ marginLeft: "10px" }}>Save</button>
        </div>
      </div>
    );
}