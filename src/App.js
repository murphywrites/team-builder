import './App.css';
import React, {useState} from 'react'
import MemberForm from './components/MemberForm'

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  // const edit = (evt) => {

  // }
  
  return (
    <div className="App">
      <MemberForm teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
       <h1>Team Members</h1>
         {
           teamMembers.map((member,idx) =>
        <div key={idx} className = "member-card">   
         <h3>{member.memberFname} {member.memberLname}</h3>
         <h4>Email: {member.email}</h4>
         <h4>Role: {member.role}</h4>
         <h4>Strengths: {member.strengths}</h4>
         <h4>Weaknesses: {member.weaknesses}</h4>
         {/* <button onClick={edit}>edit team member</button> */}
        </div> 
           )
         }
         
    </div>
  );
}

export default App;
