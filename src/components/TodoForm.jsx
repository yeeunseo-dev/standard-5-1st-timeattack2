import { useState } from "react";

export default function TodoForm(onSubmit) {
  const initial = [
    {
      id: 0,
      title,
      content,
      isDone: false,
    },
  ];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.title.trim() || !todo.content.trim()) {
      alert("제목과 컨텐츠를 입력해주세요");
      return;
    }

    onSubmit({
      title,
      content,
    });
  };

  setTitle("");
  setContent("");

  return (
    <>
      <div>TodoForm</div>;
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          제목
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <label htmlFor="">
          내용
          <input
            type="text"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={handleContentChange}
          />
        </label>
        <button type="submit"></button>
      </form>
    </>
  );
}
