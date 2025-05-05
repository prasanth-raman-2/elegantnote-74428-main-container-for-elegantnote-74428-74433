import React from 'react';

// PUBLIC_INTERFACE
function NoteList({ notes, selectedNoteId, onSelectNote, onDeleteNote }) {
  /**
   * Component for displaying the list of notes.
   * Handles note selection and deletion.
   */
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="note-list">
      {notes.map(note => (
        <div
          key={note.id}
          className={`note-list__item ${note.id === selectedNoteId ? 'note-list__item--selected' : ''}`}
          onClick={() => onSelectNote(note.id)}
        >
          <div className="note-list__item-content">
            <h3 className="note-list__item-title">{note.title}</h3>
            <p className="note-list__item-date">
              {formatDate(note.updatedAt)}
            </p>
          </div>
          <button
            className="note-list__delete-button"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteNote(note.id);
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
