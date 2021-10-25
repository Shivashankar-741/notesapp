import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../State/ThemeContext';
import { v4 as uuidv4 } from 'uuid';
import { AiTwotoneDelete } from 'react-icons/ai';

const NotesTodoList = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [data, setData] = useState('');
  const [data1, setData1] = useState(JSON.parse(localStorage.getItem('todos') || '[]'));

  const clickHandler = () => {
    if (data !== '') {
      setData1(data1.concat({ data, id: uuidv4() }));
      localStorage.setItem('todos', JSON.stringify(data1.concat({ data, id: uuidv4() })));
      setData('');
    }
  };

  const deletehandler = (id) => {
    let filteredData = JSON.parse(localStorage.getItem('todos')).filter((el) => el.id !== id);
    localStorage.setItem('todos', JSON.stringify(filteredData));
    setData1(filteredData);
  };

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
          onClick={clickHandler}
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
                onClick={() => deletehandler(el.id)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesTodoList;
