import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../State/ThemeContext';
import { AiTwotoneDelete } from 'react-icons/ai';
import { clickHandler, deleteHandler } from './handlers';

const NotesTodoList = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [data, setData] = useState('');
  const [data1, setData1] = useState(JSON.parse(localStorage.getItem('todos') || '[]'));

  return (
    <div className="NotesTodoList">
      <div className="NotesTodoList--in">
        <input
          type="text"
          value={data}
          className="NotesTodoList--input"
          placeholder="Add your todo"
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="NotesTodoList--btn"
          onClick={() => clickHandler(data, setData, data1, setData1, 'todos')}
          style={{ backgroundColor: theme }}
        >
          Add task
        </button>
      </div>
      <ul className="NotesTodoList--lists">
        {data1.map((el) => (
          <li className="NotesTodoList--listsIn" key={el.id} style={{ backgroundColor: theme }}>
            <div>{el.data}</div>
            <span>
              <AiTwotoneDelete
                className="NotesTodoList--listsDelete"
                onClick={() => deleteHandler(el.id, setData1, 'todos')}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesTodoList;
