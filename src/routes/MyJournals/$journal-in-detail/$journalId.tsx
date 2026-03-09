import { createFileRoute } from '@tanstack/react-router'
import ALL_JOURNALS from '../../../data/AllJournals'
import { useJournals } from '../../../context/JournalContext'

export const Route = createFileRoute('/MyJournals/$journal-in-detail/$journalId')({
  component: JournalInDetail,
})

function JournalInDetail() {
 const {journalId} = Route.useParams()
//  const journal = ALL_JOURNALS.find(theJournal => theJournal.id === journalId)
 const {journals} = useJournals();
 const journal = journals.find(theJournal => theJournal.id === journalId)


 if(!journal) return <div>Journal not found</div>

 return(
  <div>
    <h1>{journal.title}</h1>
    <p>{journal.content.text}</p>
  </div>
 )
}
