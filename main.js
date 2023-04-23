import data from "./source.json"

const groupedByGroup = data.reduce((groups, item) => {
  const groupName = item.group;
  const assistant = item.assistant;

  
  if (!groups[groupName]) {
    groups[groupName] = {
      assistant: null,
      students: []
    };
  }

  if (assistant) {
   
      groups[groupName].assistant = item;
    
  } else {
    
    groups[groupName].students.push(item);
  }

  return groups;
}, {});

console.log(data)
const json = JSON.stringify(groupedByGroup)
console.log(groupedByGroup)

const container = document.querySelector('.container');


Object.entries(groupedByGroup).forEach(([group, { assistant, students }], index) => {
  const box = container.children[index];
  const assistantParagraph = box.querySelector(`#${box.id}-assistant`);
  const studentsList = box.querySelector(`#${box.id}-students`);

  box.style.backgroundColor = group;

  if (assistant) {
    assistantParagraph.textContent = assistant.name;
  }

  const listItems = students.map(student => {
    const listItem = document.createElement('li');
    listItem.textContent = student.name;
    return listItem;
  });
  
  studentsList.append(...listItems);

});



