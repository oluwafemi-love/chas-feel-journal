import { Link } from '@tanstack/react-router'
import React from 'react'
import './Journal.css'
import { useJournals } from '../../context/JournalContext'
import icons from '../../constants/icons'

function Journal({ journal }) {
  const { toggleFavorite, deleteJournal } = useJournals();
  const dateUpdated = new Date(journal.updatedAt).toDateString()

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(journal.id);
  };

  
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to move this to trash?")) {
      deleteJournal(journal.id);
    }
  };

  return (
    <Link 
      to="/MyJournals/journal-in-detail/$journalId" 
      params={{ journalId: journal.id }}
      className="journal-link"
    >
      <div className='single-journal-wrapper'>
        <div className="journal-header">
          <p>{dateUpdated}</p>
          
          <div className="journal-actions">
            
            <button 
              onClick={handleLike} 
              className={`action-button ${journal.metadata.isFavorite ? 'is-favorite' : ''}`}
            >
              {icons.likeHeartIcon()}
            </button>

            <button 
              onClick={handleDelete} 
              className="action-button delete-button"
            >
              {icons.trashBinIcon()}
            </button>
          </div>
        </div>
        
        <h1>{journal.title}</h1>
        <p>{journal.content.text}</p>
      </div>
    </Link>
  )
}

export default Journal