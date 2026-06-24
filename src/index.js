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

const content = document.querySelector(".content");
const form = document.querySelector(".form-block");

function populateTodos() {
  todos.forEach((elem) => {
    const divTodo = document.createElement("div");
    divTodo.classList.add("todoClass");
    const title = document.createElement("span");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    const notes = document.createElement("p");
    const checkList = document.createElement("p");
    const projects = document.createElement("p");
    const statusSpan = document.createElement("p");
    divTodo.append(title);
    divTodo.append(description);
    divTodo.append(dueDate);
    divTodo.append(priority);
    divTodo.append(notes);
    divTodo.append(checkList);
    divTodo.append(projects);
    divTodo.append(statusSpan);
    content.append(divTodo);

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
const btnForm = document.querySelector(".btn");

function todo() {
  btnForm.addEventListener("click", function (e) {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const dueDateInput = document.getElementById("dueDate");
    const priorityInput = document.getElementById("priority");
    const notesInput = document.getElementById("notes");
    const checkListInput = document.getElementById("checkList");
    const projectInput = document.getElementById("project");
    const statusInput = document.getElementById("statusSpan");
    let titleInputValue = titleInput.value;
    let descriptionInputValue = descriptionInput.value;
    let dueDateInputValue = dueDateInput.value;
    let priorityInputValue = priorityInput.value;
    let notesInputValue = priorityInput.value;
    let checkListInputValue = checkListInput.value;
    let projectInputValue = projectInput.value;
    let statusInputValue = statusInput.value;

    console.log(
      "btn Clicked",
      titleInputValue,
      projectInputValue,
      dueDateInputValue,
      priorityInputValue,
      notesInputValue,
      checkListInputValue,
      projectInputValue,
      statusInputValue,
    );

    title.textContent = titleInputValue;
    description.textContent = descriptionInputValue;
    dueDate.textContent = dueDateInputValue;
    priority.textContent = priorityInputValue;
    notes.textContent = notesInputValue;
    checkList.textContent = checkListInputValue;
    project.textContent = projectInputValue;
    statusSpan.textContent = statusInputValue;
    divTodo.append(title.textContent);
    divTodo.append(description.textContent);
    divTodo.append(dueDate.textContent);
    divTodo.append(priority.textContent);
    divTodo.append(notes.textContent);
    divTodo.append(checkList.textContent);
    divTodo.append(project.textContent);
    divTodo.append(statusSpan.textContent);
    content.append(divTodo);
    content.classList.add("content");
  });
}

populateTodos();
todo();
