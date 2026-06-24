import "./style.css";
let todos = [
  {
    title: "Buy groceries",
    description: "Get milk, eggs, bread, and vegetables from the supermarket.",
    dueDate: "2026-06-25",
    priority: "High",
    notes: "Check for discounts on dairy products.",
    checklist: "Milk, Eggs, Bread, Vegetables",
    projectsTodos: { project: "Home", status: "Pending" },
  },
  {
    title: "Finish Webpack setup",
    description: "Complete initial Webpack configuration for the new project.",
    dueDate: "2026-06-24",
    priority: "Medium",
    notes: "Include Babel loader for ES6+ support.",
    checklist: "Install Webpack, Configure entry/output, Add dev server",
    projectsTodos: { project: "Frontend App", status: "In Progress" },
  },
  {
    title: "Workout session",
    description: "Attend the evening gym session focusing on cardio and abs.",
    dueDate: "2026-06-23",
    priority: "Low",
    notes: "Bring water bottle and towel.",
    checklist: "Warm-up, Cardio, Abs workout, Stretching",
    projectsTodos: { project: "Health", status: "Pending" },
  },
  {
    title: "Team meeting",
    description:
      "Weekly sync-up with the development team to discuss progress.",
    dueDate: "2026-06-26",
    priority: "High",
    notes: "Prepare slides for the sprint review.",
    checklist: "Prepare slides, Share agenda, Take meeting notes",
    projectsTodos: { project: "Work", status: "Scheduled" },
  },
  {
    title: "Read JavaScript book",
    description: "Read chapters 5 and 6 of 'You Don’t Know JS'.",
    dueDate: "2026-06-28",
    priority: "Low",
    notes: "Focus on closures and async programming.",
    checklist: "Chapter 5, Chapter 6",
    projectsTodos: { project: "Learning", status: "Pending" },
  },
];

function selectFormElement() {
  const btnForm = document.querySelector(".btn");
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const dueDateInput = document.getElementById("dueDate");
  const priorityInput = document.getElementById("priority");
  const notesInput = document.getElementById("notes");
  const checkListInput = document.getElementById("checkList");
  const projectInput = document.getElementById("project");
  const statusInput = document.getElementById("statusSpan");
  const content = document.querySelector(".content");
  const form = document.querySelector(".form-block");
  return {
    btnForm,
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput,
    notesInput,
    checkListInput,
    projectInput,
    statusInput,
    content,
    form,
  };
}

console.log(selectFormElement());

function returnElement(type) {
  const elem = document.createElement(type);
  return elem;
}

function populateTodos() {
  todos.forEach((elem) => {
    const divTodo = returnElement("ul");
    divTodo.classList.add("todoClass");
    const title = returnElement("li");
    const description = returnElement("li");
    const dueDate = returnElement("li");
    const priority = returnElement("li");
    const notes = returnElement("li");
    const checkList = returnElement("li");
    const projects = returnElement("li");
    const statusSpan = returnElement("li");

    divTodo.append(title);
    divTodo.append(description);
    divTodo.append(dueDate);
    divTodo.append(priority);
    divTodo.append(notes);
    divTodo.append(checkList);
    divTodo.append(projects);
    divTodo.append(statusSpan);
    selectFormElement().content.append(divTodo);

    title.textContent = `${elem.title}`;
    description.textContent = `${elem.description}`;
    dueDate.textContent = `${elem.dueDate}`;
    priority.textContent = `${elem.priority}`;
    notes.textContent = `${elem.notes}`;
    checkList.textContent = `${elem.checklist}`;
    projects.textContent = `${elem.projectsTodos.project}`;
    statusSpan.textContent = `${elem.projectsTodos.status}`;
  });
}

function todo() {
  selectFormElement().btnForm.addEventListener("click", function (e) {
    const divTodo = returnElement("div");
    divTodo.classList.add("todoClass");
    e.preventDefault();
    const objectInput = selectFormElement();
    const {
      titleInput,
      descriptionInput,
      dueDateInput,
      priorityInput,
      checkListInput,
      projectInput,
      statusInput,
      content,
      form,
    } = { ...objectInput };
    let titleInputValue = titleInput.value;
    let descriptionInputValue = descriptionInput.value;
    let dueDateInputValue = dueDateInput.value;
    let priorityInputValue = priorityInput.value;
    let notesInputValue = priorityInput.value;
    let checkListInputValue = checkListInput.value;
    let projectInputValue = projectInput.value;
    let statusInputValue = statusInput.value;
    const liTitle = returnElement("li");
    const liDescription = returnElement("li");
    const liDueDate = returnElement("li");
    const liPriority = returnElement("li");
    const liNotes = returnElement("li");
    const liCheckList = returnElement("li");
    const liProjects = returnElement("li");
    const liStatusSpan = returnElement("li");

    liTitle.textContent = titleInputValue;
    liDescription.textContent = descriptionInputValue;
    liDueDate.textContent = dueDateInputValue;
    liPriority.textContent = priorityInputValue;
    liNotes.textContent = notesInputValue;
    liCheckList.textContent = checkListInputValue;
    liProjects.textContent = projectInputValue;
    liStatusSpan.textContent = statusInputValue;
    divTodo.append(liTitle);
    divTodo.append(liDescription);
    divTodo.append(liDueDate);
    divTodo.append(liPriority);
    divTodo.append(liNotes);
    divTodo.append(liCheckList);
    divTodo.append(liProjects);
    divTodo.append(liStatusSpan);

    content.append(divTodo);
    content.classList.add("content");
  });
}

populateTodos();
todo();
