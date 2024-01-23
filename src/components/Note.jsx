// Note.jsx
import React, { useEffect, useState } from "react";

function Note(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedContent, setHighlightedContent] = useState(props.content);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  const [editedTitle, setEditedTitle] = useState(props.title);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    highlightContent();
  }, [searchTerm, props.content, editedContent, isEditing]);

  const highlightContent = () => {
    const contentToHighlight = isEditing ? editedContent : props.content;

    if (searchTerm.trim() === "") {
      setHighlightedContent(contentToHighlight);
      return;
    }

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const updatedContent = contentToHighlight.replace(
      regex,
      (match) => `<mark>${match}</mark>`
    );
    setHighlightedContent(updatedContent);
  };

  const handleSearchIconClick = () => {
    highlightContent();
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedContent(props.content);
    setEditedTitle(props.title);
  };

  const handleSaveClick = () => {
    props.onEdit(props.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="note">
      <div className="top-bar">
        {!isEditing && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-icon" onClick={handleSearchIconClick}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        )}
        {!isEditing && (
          <button className="edit-button" onClick={handleEditClick}>
            <i className="fa-solid fa-edit"></i>
          </button>
        )}
      </div>
      {isEditing ? (
        <div>
          <input
            className="editedTitle"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button className="save-button" onClick={handleSaveClick}>
            <i className="fas fa-save"></i>
          </button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: highlightedContent }} />
          <div className="bottom-right">
            <button
              className="delete-button"
              onClick={() => props.onDelete(props.id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
