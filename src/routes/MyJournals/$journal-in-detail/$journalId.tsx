import { createFileRoute } from '@tanstack/react-router'
import { useJournals } from '../../../context/JournalContext'

export const Route = createFileRoute('/MyJournals/$journal-in-detail/$journalId')({
  component: JournalInDetail,
})

function JournalInDetail() {
 const {journalId} = Route.useParams()
 const {journals} = useJournals();
 const journal = journals.find(theJournal => theJournal.id === journalId)


 if(!journal) return <div>Journal not found</div>

 return(
  <div>
    <div className="date-info">
      <p>Date Created: <span></span></p>
      <p>Last Edited: <span></span></p>
    </div>

    <h1>{journal.title}</h1>
    <p>{journal.content.text}</p>

    <EditJournal />

  </div>
 )
}
