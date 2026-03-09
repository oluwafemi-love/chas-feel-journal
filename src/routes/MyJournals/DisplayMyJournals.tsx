import React from "react"
import Journal from '../../components/Journal/Journal'
import { useJournals } from "../../context/JournalContext";
import './DisplayMyJournals.css'


const currentUserId = "u-9f33x"; 

function DisplayMyJournals() {
  const { journals } = useJournals();
  const userJournals = journals.filter(j => j.userId === currentUserId);

  return (
    <div className='my-journals-wrapper'>
      {userJournals.map((journal) => (
        <Journal key={journal.id} journal={journal} />
      )
      )}
    </div>
  )
}

export default DisplayMyJournals