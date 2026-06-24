// function todo() {
//   selectFormElement().btnForm.addEventListener("click", function (e) {
//     saveToLocalStorage();
//     let data = getDataFromLocalStorage();
//     const divTodo = returnElement("div");
//     divTodo.classList.add("todoClass");
//     e.preventDefault();

//     let titleInputValue = titleInput.value;
//     let descriptionInputValue = descriptionInput.value;
//     let dueDateInputValue = dueDateInput.value;
//     let priorityInputValue = priorityInput.value;
//     let notesInputValue = notesInput.value;
//     let checkListInputValue = checkListInput.value;
//     let projectInputValue = projectInput.value;
//     let statusInputValue = statusInput.value;
//     const liTitle = returnElement("li");
//     const liDescription = returnElement("li");
//     const liDueDate = returnElement("li");
//     const liPriority = returnElement("li");
//     const liNotes = returnElement("li");
//     const liCheckList = returnElement("li");
//     const liProjects = returnElement("li");
//     const liStatusSpan = returnElement("li");
//     liTitle.textContent = data.titleTodo;
//     liDescription.textContent = data.descriptionTodo;
//     liDueDate.textContent = data.dueDate;
//     liPriority.textContent = data.priority;
//     liNotes.textContent = data.notes;
//     liCheckList.textContent = data.checkList;
//     liProjects.textContent = data.projects;
//     liStatusSpan.textContent = data.status;
//     divTodo.append(liTitle);
//     divTodo.append(liDescription);
//     divTodo.append(liDueDate);
//     divTodo.append(liPriority);
//     divTodo.append(liNotes);
//     divTodo.append(liCheckList);
//     divTodo.append(liProjects);
//     divTodo.append(liStatusSpan);

//     content.append(divTodo);
//     content.classList.add("content");
//   });
// }

// function saveToLocalStorage() {
//   localStorage.setItem("titleTodo", titleInput.value);
//   localStorage.setItem("descriptionTodo", descriptionInput.value);
//   localStorage.setItem("dueDate", dueDateInput.value);
//   localStorage.setItem("priority", descriptionInput.value);
//   localStorage.setItem("checkList", checkListInput.value);
//   localStorage.setItem("notes", notesInput.value);
//   localStorage.setItem("projects", projectInput.value);
//   localStorage.setItem("status", statusInput.value);
// }

// export { todo, saveToLocalStorage };
