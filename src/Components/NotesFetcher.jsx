import React, { useState} from 'react';
import './NotesFetcher.css'; // Import your CSS file

const NotesFetcher = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [notesUrl, setNotesUrl] = useState('');

  // Sample data for branchesOptionsArr, semestersOptionsArr, and subjectsOptionsArr
  const branchesOptionsArr = ['Computer', 'Electrical'];
  const semestersOptionsArr = ['1', '2'];
  const subjectsOptionsArr = {
    Computer: ['Data Structures', 'Algorithms'],
    Electrical: ['Circuits', 'Electromagnetism']
  };
  const assetJSON = [
    {
        branch: 'Computer',
        semester: [
          {1: {url: 'https://drive.google.com/file/d/11m0tGZceOJt13Ud5vYJ7rn0CwQXbezDA/view?usp=drive_link'},
          2: {url: 'https://drive.google.com/file/d/1n2YBAM_wtvOYZk-EQxnt8zNHOt8YDHPj/view?usp=drive_link'}}
        ],
        subject: 'Data Structures',
    },
    {
      branch: 'Computer',
      semester: [
        {1: {url: 'https://drive.google.com/file/d/1YvPKbMkLE6a2EQrOOhTeOPPHNfe651gm/view?usp=drive_link'},
        2: {url: 'https://drive.google.com/file/d/1c3puY9QslohHt_SESwl5N6nNNgpfjoYG/view?usp=drive_link'}}
      ],
      subject: 'Algorithms',
    },
    {
        branch: 'Electrical',
        semester: [
          {1: {url: 'https://drive.google.com/file/d/1rzXwYdygYlJl-gFY_xwYMq452lprqlnU/view?usp=drive_link'},
          2: {url: 'https://drive.google.com/file/d/1wMDnoiMupOSMFqhKH11F3-Fyp0SdKgFK/view?usp=drive_link'}}
        ],
        subject: 'Circuits',
    },
    {
        branch: 'Electrical',
        semester: [
          {1: {url: 'https://drive.google.com/file/d/15_QndAh-4VNJIk1qhQs-_Ry-Ric7MrFK/view?usp=drive_link'},
          2: {url: 'https://drive.google.com/file/d/1qE9g_cCmIMZcWv5-rEnblWa3HWJCv2Lo/view?usp=drive_link'}}
        ],
        subject: 'Electromagnetism',
    }
  ]

  const renderPreview = () =>{
    if(selectedBranch === '' || selectedSemester === '' ||  selectedSubject ===''){
      alert('please fill all details')
    } else{
      let url = ''
      const mappedData = assetJSON.map((item)=>{
          if(item.branch === selectedBranch && item.subject === selectedSubject){
            return url += item.semester[0][selectedSemester].url
          }
      })
      setNotesUrl(url)
    }
  }

  return (
    <div className="notes-fetcher-container">
      <div className="sidebar">
        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <select
            id="branch"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">Select Branch</option>
            {branchesOptionsArr.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="semester">Semester</label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={(e) => setSSelectedSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            {semestersOptionsArr.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {selectedBranch && subjectsOptionsArr[selectedBranch].map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <button onClick={renderPreview}>Get Notes</button>
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