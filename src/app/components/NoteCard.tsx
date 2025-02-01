import { Note } from '@/app/lib/db';
import { format } from 'date-fns';
import Link from 'next/link';
import { Button } from './Button';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

type NoteCardProps = {
  note: Note;
  onDelete: (id: string) => void;
};

export const NoteCard = ({ note, onDelete }: NoteCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{note.title}</h2>
    <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
    <div className="flex justify-between items-center text-sm text-gray-500">
      <div>
        {note.createdAt && (
          <p>Creada: {format(new Date(note.createdAt.seconds * 1000), 'dd/MM/yy HH:mm')}</p>
        )}
        {note.updatedAt && (
          <p>Actualizada: {format(new Date(note.updatedAt.seconds * 1000), 'dd/MM/yy HH:mm')}</p>
        )}
      </div>
      <div className="flex gap-2">
        <Link href={`/note/edit/${note.id}`}>
          <Button type="button" variant="secondary" className="p-2 transition-transform duration-300 hover:scale-110">
            <PencilIcon className="w-5 h-5" />
          </Button>
        </Link>
        <Button type="button" variant="danger" className="p-2 transition-transform duration-300 hover:scale-110" onClick={() => note.id && onDelete(note.id)}>
          <TrashIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
);