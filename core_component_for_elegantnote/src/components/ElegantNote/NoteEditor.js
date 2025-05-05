import React, { useState, useEffect } from 'react';

// PUBLIC_INTERFACE
function NoteEditor({ note, onUpdateNote }) {
  /**
   * Component for editing note content.
   * Handles title and content updates.
   */
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onUpdateNote({
      ...note,
      title: e.target.value
    });
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    onUpdateNote({
      ...note,
      content: e.target.value
    });
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        className="note-editor__title"
        value={title}
        onChange={handleTitleChange}
        placeholder="Note title"
      />
      <textarea
        className="note-editor__content"
        value={content}
        onChange={handleContentChange}
        placeholder="Start writing your note..."
      />
    </div>
  );
}

export default NoteEditor;
