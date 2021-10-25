import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../State/ThemeContext';
import { v4 as uuidv4 } from 'uuid';
import { AiTwotoneDelete } from 'react-icons/ai';

const NotesDoneList = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [data, setData] = useState('');
  const [data1, setData1] = useState(JSON.parse(localStorage.getItem('done') || '[]'));

  const clickHandler = () => {
    if (data !== '') {
      setData1(data1.concat({ data, id: uuidv4() }));
      localStorage.setItem('done', JSON.stringify(data1.concat({ data, id: uuidv4() })));
      setData('');
    }
  };

  const deletehandler = (id) => {
    let filteredData = JSON.parse(localStorage.getItem('done')).filter((el) => el.id !== id);
    localStorage.setItem('done', JSON.stringify(filteredData));
    setData1(filteredData);
  };

  return (
    <div className="NotesTodoList">
      <div className="NotesTodoList--in">
        <input
          type="text"
          value={data}
          className="NotesTodoList--input"
          placeholder="Add your Done list"
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

export default NotesDoneList;
