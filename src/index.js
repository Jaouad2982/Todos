import "./style.css";
// import connectDB from "./connect";
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

function formValidation(element) {
  if (!element || element == null || element.length == 0)
    document.body.innerHTML = `<div class="formDiv"> Error submitting the form, ${element}</div>`;
  return element;
}

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
const objectInput = selectFormElement();
const {
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
} = { ...objectInput };

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
    const deleteTodo = returnElement("button");
    const modifyTodo = returnElement("button");
    deleteTodo.classList.add("deleteTodo");
    modifyTodo.classList.add("modifyTodo");
    divTodo.append(title);
    divTodo.append(description);
    divTodo.append(dueDate);
    divTodo.append(priority);
    divTodo.append(notes);
    divTodo.append(checkList);
    divTodo.append(projects);
    divTodo.append(statusSpan);
    divTodo.append(deleteTodo);
    divTodo.append(modifyTodo);
    selectFormElement().content.append(divTodo);
    deleteTodo.textContent = "Delete";
    modifyTodo.textContent = "Modify";
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
    saveToLocalStorage();
    let data = getDataFromLocalStorage();
    const divTodo = returnElement("div");
    divTodo.classList.add("todoClass");
    e.preventDefault();

    let titleInputValue = titleInput.value;
    let descriptionInputValue = descriptionInput.value;
    let dueDateInputValue = dueDateInput.value;
    let priorityInputValue = priorityInput.value;
    let notesInputValue = notesInput.value;
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
    liTitle.textContent = formValidation(data.titleTodo);
    liDescription.textContent = formValidation(data.descriptionTodo);
    liDueDate.textContent = formValidation(data.dueDate);
    liPriority.textContent = formValidation(data.priority);
    liNotes.textContent = formValidation(data.notes);
    liCheckList.textContent = formValidation(data.checkList);
    liProjects.textContent = formValidation(data.projects);
    liStatusSpan.textContent = formValidation(data.status);
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

function saveToLocalStorage() {
  localStorage.setItem("titleTodo", titleInput.value);
  localStorage.setItem("descriptionTodo", descriptionInput.value);
  localStorage.setItem("dueDate", dueDateInput.value);
  localStorage.setItem("priority", descriptionInput.value);
  localStorage.setItem("checkList", checkListInput.value);
  localStorage.setItem("notes", notesInput.value);
  localStorage.setItem("projects", projectInput.value);
  localStorage.setItem("status", statusInput.value);
}

function getDataFromLocalStorage() {
  // Build an object with all the stored values
  let data = null;
  try {
    data = {
      titleTodo: localStorage.getItem("titleTodo"),
      descriptionTodo: localStorage.getItem("descriptionTodo"),
      dueDate: localStorage.getItem("dueDate"),
      priority: localStorage.getItem("priority"),
      checkList: localStorage.getItem("checkList"),
      notes: localStorage.getItem("notes"),
      projects: localStorage.getItem("projects"),
      status: localStorage.getItem("status"),
    };
  } catch (error) {
    console.log("data not available ", error.message);
  }

  return data; // Return the object
}

populateTodos();
todo();
