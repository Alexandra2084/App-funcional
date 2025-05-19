// src/app/note/[id]/page.tsx

import MainLayout from '@/app/components/MainLayout';
import { NoteForm } from '@/app/components/NoteForm';
import { getNote, saveNote } from '@/app/lib/db';
import { Note } from '@/app/lib/db';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default async function NotePage({ params }: Props) {
  const { id } = params;

  const note = await getNote(id);

  if (!note) {
    redirect('/');
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="prose lg:prose-xl mb-8">
          <h1 className="text-3xl font-bold mb-6">{note.title}</h1>
          <p className="text-gray-600 whitespace-pre-wrap">{note.content}</p>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Creada:{' '}
            {note.createdAt
              ? new Date(note.createdAt.seconds * 1000).toLocaleDateString()
              : 'Desconocida'}
          </p>
          {note.updatedAt && (
            <p>
              Actualizada:{' '}
              {new Date(note.updatedAt.seconds * 1000).toLocaleDateString()}
            </p>
          )}
        </div>
        <NoteForm
          initialData={note}
          onSave={async (updatedNote: Note) => {
            'use server'; // Requiere configuración extra si vas a usar acciones del lado del servidor
            await saveNote(updatedNote);
            redirect('/');
          }}
          onCancel={() => {
            redirect('/');
          }}
        />
      </div>
    </MainLayout>
  );
}
