'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/app/components/MainLayout';
import { NoteForm } from '@/app/components/NoteForm';
import { getNote, saveNote } from '@/app/lib/db'; // Añadir saveNote a la importación
import { Note } from '@/app/lib/db';

export default function EditNotePage({ params }: { params: Promise<{ id: string }> }) {
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { id } = await params;
        const data = await getNote(id);
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
  }, [params, router]);

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
        <h1 className="text-3xl font-bold mb-6">Editar Nota</h1>
        <NoteForm 
          initialData={note} 
          onSave={handleSave}
          onCancel={() => router.push('/')}
        />
      </div>
    </MainLayout>
  );
}