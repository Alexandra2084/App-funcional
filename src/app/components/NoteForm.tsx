"use client";
import React, { useState } from 'react';
import { InputField } from './InputField';
import { Note } from '@/app/lib/db';
import { saveNote } from '@/app/lib/db';

interface NoteFormProps {
  initialData: Note | null;
  onSave: (note: Note) => void;
  onCancel: () => void;
}

export const NoteForm = ({ initialData, onSave, onCancel }: NoteFormProps) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const noteData: Note = {
      id: initialData?.id || Date.now().toString(),
      title,
      content,
      createdAt: initialData?.createdAt,
      updatedAt: { seconds: Math.floor(Date.now() / 1000) }
    };
    onSave(noteData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
      <InputField
        label="Título"
        value={title}
        onChange={setTitle}
        required
      />
      <InputField
        label="Contenido"
        value={content}
        onChange={setContent}
        type="textarea"
        required
      />
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};