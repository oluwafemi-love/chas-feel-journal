import { createFileRoute } from '@tanstack/react-router'
import { useJournals } from '../../../context/JournalContext'
import EditJournal from '../../../components/EditJournal/EditJournal'

export const Route = createFileRoute('/MyJournals/$journal-in-detail/$journalId')({
  component: JournalInDetail,
})

function JournalInDetail() {
  const { journalId } = Route.useParams()
  const { journals } = useJournals();
  const journal = journals.find(theJournal => theJournal.id === journalId)


  if (!journal) return <div>Journal not found</div>
  const journalCreatedOn = new Date(journal.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const journalEditedOn = new Date(journal.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="journal-in-detail">
      <div className="date-info flex justify-between">
        <p>Date Created: <span>{journalCreatedOn}</span></p>
        <p>Last Edited: <span>{journalEditedOn}</span></p>
      </div>

      <h1 className='font-semibold text-2xl leading-6 tracking-[0.1px] mt-[38px] mb-[18px]'>{journal.title}</h1>

      <p className="mb-4">{journal.content.text}</p>

      <EditJournal />

    </div>
  )
}
