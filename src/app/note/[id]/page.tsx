'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/app/components/MainLayout';
import { NoteForm } from '@/app/components/NoteForm';
import { getNote, saveNote } from '@/app/lib/db';
import { Note } from '@/app/lib/db';

export default function NotePage({ params }: { params: { id: string } }) {
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNote(params.id);
        if (!data) {
          router.push('/');
          return;
        }
        setNote(data);
      } catch (error) {
        console.error('Error loading note:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [params.id, router]);

  const handleSave = async (updatedNote: Note) => {
    try {
      await saveNote(updatedNote);
      router.push('/');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  if (loading) return <div className="text-center p-8">Cargando nota...</div>;

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="prose lg:prose-xl mb-8">
          <h1 className="text-3xl font-bold mb-6">{note?.title}</h1>
          <p className="text-gray-600 whitespace-pre-wrap">{note?.content}</p>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>Creada: {note?.createdAt ? new Date(note.createdAt.seconds * 1000).toLocaleDateString() : 'Desconocida'}</p>
          {note?.updatedAt && (
            <p>Actualizada: {new Date(note.updatedAt.seconds * 1000).toLocaleDateString()}</p>
          )}
        </div>
        <NoteForm 
          initialData={note} 
          onSave={handleSave}
          onCancel={() => router.back()}
        />
      </div>
    </MainLayout>
  );
}