"use client";

import { useEffect, useState } from 'react';
import MainLayout from './components/MainLayout';
import { NoteCard } from './components/NoteCard';
import { fetchNotes, deleteNote } from './lib/db';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import SearchButton from './components/SearchButton'; 

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<any[]>([]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const data = await fetchNotes();
        setNotes(data);
        setFilteredNotes(data);
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    };
    loadNotes();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note.id !== id));
    setFilteredNotes(filteredNotes.filter(note => note.id !== id));
  };

  const handleSearch = (query: string) => {
    if (query === '') {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(notes.filter(note => note.title.includes(query) || note.content.includes(query)));
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Tus Notas</h1>
        <div className="flex items-center gap-4">
          <SearchButton onSearch={handleSearch} /> 
          <Link 
            href="/note/new" 
            className="bg-[#b2b6f2] text-white px-4 py-2 rounded-lg hover:bg-[#9fa3e0] flex items-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredNotes.map(note => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NoteCard
                note={note}
                onDelete={() => handleDelete(note.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
}