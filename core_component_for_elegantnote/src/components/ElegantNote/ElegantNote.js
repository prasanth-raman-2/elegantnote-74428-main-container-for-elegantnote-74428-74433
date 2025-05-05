import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider, useTheme } from './ThemeContext';
import './ElegantNote.css';

// PUBLIC_INTERFACE
function ElegantNoteContent() {
  /**
   * Main content component for ElegantNote functionality.
   * Manages notes state and operations.
   */
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const { isDark } = useTheme();

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'New Note',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setNotes([...notes, newNote]);
    setSelectedNoteId(newNote.id);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, updatedAt: new Date().toISOString() } 
        : note
    ));
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNoteId === noteId) {
      setSelectedNoteId(notes.length > 1 ? notes[0].id : null);
    }
  };

  const selectedNote = notes.find(note => note.id === selectedNoteId);

  return (
    <div className={`elegant-note ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <div className="elegant-note__sidebar">
        <div style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
          <button className="btn elegant-note__new-button" onClick={createNote}>
            New Note
          </button>
          <ThemeToggle />
        </div>
        <NoteList
          notes={notes}
          selectedNoteId={selectedNoteId}
          onSelectNote={setSelectedNoteId}
          onDeleteNote={deleteNote}
        />
      </div>
      <div className="elegant-note__main">
        {selectedNote ? (
          <NoteEditor
            note={selectedNote}
            onUpdateNote={updateNote}
          />
        ) : (
          <div className="elegant-note__empty-state">
            <p>Select a note or create a new one to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function ElegantNote() {
  /**
   * Root component that provides theme context.
   */
  return (
    <ThemeProvider>
      <ElegantNoteContent />
    </ThemeProvider>
  );
}

export default ElegantNote;
