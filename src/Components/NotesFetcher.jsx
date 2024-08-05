import React, { useState, useEffect } from 'react';
import './NotesFetcher.css'; // Import your CSS file

const NotesFetcher = () => {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [notesUrl, setNotesUrl] = useState('');

  // Sample data for branches, semesters, and subjects
  const branches = ['Computer', 'Electrical'];
  const semesters = ['1', '2'];
  const subjects = {
    'Computer Science': ['Data Structures', 'Algorithms'],
    Electrical: ['Circuits', 'Electromagnetism']
  };
  const GG= [
    {
        branch: 'Computer',
        semester: 1,
        subject: 'Data Structures',
        url: ""
    },
    {
        branch: 'Computer',
        semester: 2,
        subject: 'Data Structures',
        url: ""
    }
  ]
  console.log(branch,semester,subject)
  const handleClick = () =>{
    // const mappedData = GG.map((item)=>{
    //     if(item.branch == branches && item.branch == semesters && item.branch == subjects){
    //         return item
    //     }
    // })
    // console.log(mappedData)
  }

//   useEffect(() => {
//     if (branch && semester && subject) {
//       // Construct a URL for the Google Drive document
//       const url = `https://drive.google.com/file/d/1ITzyLZBSVsUy2CL-GxqFXaoGVsflVfaW//${branch}-${semester}-${subject}/view?usp=sharing`;
//       setNotesUrl(url);
//     }
//   }, [branch, semester, subject]);

  return (
    <div className="notes-fetcher-container">
      <div className="sidebar">
        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="semester">Semester</label>
          <select
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            {semesters.map((semester) => (
              <option key={semester} value={semester}>{semester}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={!branch}
          >
            <option value="">Select Subject</option>
            {branch && subjects[branch].map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        <button onClick={handleClick}>Get Notes</button>
      </div>
      <div className="content">
        {notesUrl ? (
          <iframe
            src={notesUrl}
            title="Notes"
            className="iframe"
            allowFullScreen
          />
        ) : (
          <div className="placeholder">Please select your branch, semester, and subject to view notes.</div>
        )}
      </div>
    </div>
  );
};

export default NotesFetcher;