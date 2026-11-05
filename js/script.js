
let data = [
  {
    id: 1,
    title: "Java Script",
    description: "This a Programming language is good",
  },
  {
    id: 2,
    title: "HTML",
    description: "HTML Markup Language",
  },
  {
    id: 3,
    title: "CSS",
    description: "CSS Styling Language",
  },
];


const title = document.getElementById("title");
const description = document.getElementById("description");
const Content = document.getElementById("coureses-contant");
const form = document.getElementById("course-form");


let nextId = data.length + 1 ;


function createCourseCard(course) {
  const card = document.createElement("div");
  card.classList.add("course-card");

  const heading = document.createElement("h2");
  heading.textContent = course.title;

  const paragraph = document.createElement("p");
  paragraph.textContent = course.description;

  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.classList.add("btn-delet");
  btnDelete.textContent = "Delete";

  btnDelete.addEventListener("click", () => {
    deleteCourse(course.id);
    renderCourses();
  });

  card.append(heading, paragraph, btnDelete);

  return card;
}


function renderCourses() {
  Content.replaceChildren();

  if (data.length === 0) {
    const message = document.createElement("p");
    message.classList.add("empty-message");
    message.textContent = "No Courses Found";

    Content.appendChild(message);
    return;
  }

  data.forEach((course) => {
    const card = createCourseCard(course);
    Content.appendChild(card);
  });
}



function validateCourse(courseTitle, courseDescription) {
  if (courseTitle.trim() === "") {
    alert("Title is required");
    return false;
  }

  if (courseDescription.trim() === "") {
    alert("Description is required");
    return false;
  }

  return true;
}


function addCourse(courseTitle, courseDescription) {
  const newCourse = {
    id: nextId,
    title: courseTitle.trim(),
    description: courseDescription.trim(),
  };

  data.push(newCourse);

  nextId++;

  return newCourse;
}


function deleteCourse(id) {
  data = data.filter((course) => course.id !== id);
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const courseTitle = title.value;
  const courseDescription = description.value;


  if (!validateCourse(courseTitle, courseDescription)) {
    return;
  }

  // Add course to array
  addCourse(courseTitle, courseDescription);

  // Update UI
  renderCourses();

  // Clear form
  form.reset();
});

renderCourses();
