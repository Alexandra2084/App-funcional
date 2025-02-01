import { collection, getDocs, doc, getDoc, setDoc, deleteDoc, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from './firebase'; 

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt?: { seconds: number }; 
  updatedAt?: { seconds: number }; 
};

export async function fetchNotes(): Promise<Note[]> {
  console.log('fetchNotes called');
  try {
    const querySnapshot = await getDocs(collection(db, 'notas'));
    const notes: Note[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      notes.push({ id: doc.id, ...doc.data() } as Note);
    });
    console.log('Notes successfully retrieved:', notes);
    return notes;
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw new Error(`Error al obtener las notas: ${error instanceof Error ? error.message : 'Desconocido'}`);
  }
}

export async function getNote(id: string): Promise<Note | null> {
  if (!id) {
    throw new Error('ID is required to fetch a note');
  }
  try {
    const docRef = doc(db, 'notas', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Note;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting note:', error);
    throw new Error(`Error al obtener la nota: ${error instanceof Error ? error.message : 'Desconocido'}`);
  }
}

export async function saveNote(note: Note): Promise<void> {
  console.log('saveNote called with note:', note);
  try {
    const docRef = doc(db, 'notas', note.id);
    const noteData = {
      ...note,
      createdAt: note.createdAt || { seconds: Date.now() / 1000 },
      updatedAt: { seconds: Date.now() / 1000 }
    };
    await setDoc(docRef, noteData);
    console.log('Note successfully saved');
  } catch (error) {
    console.error('Error saving note:', error);
    throw new Error(`Error al guardar la nota: ${error instanceof Error ? error.message : 'Desconocido'}`);
  }
}

export async function deleteNote(id: string): Promise<void> {
  if (!id) {
    throw new Error('ID is required to delete a note');
  }
  try {
    const docRef = doc(db, 'notas', id);
    await deleteDoc(docRef);
    console.log('Note successfully deleted');
  } catch (error) {
    console.error('Error deleting note:', error);
    throw new Error(`Error al eliminar la nota: ${error instanceof Error ? error.message : 'Desconocido'}`);
  }
}