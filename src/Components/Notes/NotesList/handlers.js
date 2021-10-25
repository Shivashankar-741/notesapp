import { v4 as uuidv4 } from 'uuid';

export const clickHandler = (data, setData, data1, setData1, task) => {
  if (data !== '') {
    setData1(data1.concat({ data, id: uuidv4() }));
    localStorage.setItem(task, JSON.stringify(data1.concat({ data, id: uuidv4() })));
    setData('');
  }
};

export const deleteHandler = (id, setData1, task) => {
  let filteredData = JSON.parse(localStorage.getItem(task)).filter((el) => el.id !== id);
  localStorage.setItem(task, JSON.stringify(filteredData));
  setData1(filteredData);
};
