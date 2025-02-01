'use client';
import { useRouter } from 'next/navigation';
import MainLayout from '@/app/components/MainLayout';
import { NoteForm } from '@/app/components/NoteForm';
import { saveNote } from '@/app/lib/db';
import { Note } from '@/app/lib/db';

export default function NewNotePage() {
  const router = useRouter();

  const handleSave = async (newNote: Note) => {
    try {
      await saveNote(newNote);
      router.push('/'); 
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Crear Nueva Nota</h1>
        <NoteForm
          initialData={null} 
          onSave={handleSave}
          onCancel={() => router.push('/')} 
        />
      </div>
    </MainLayout>
  );
}