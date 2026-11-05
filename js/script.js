
let data = [];


const title = document.getElementById("title");
const description = document.getElementById("description");
const Content = document.getElementById("coureses-contant");
const form = document.getElementById("course-form");
const searchInput = document.getElementById("search");
const addcource = document.getElementById("submit");
const titleError = document.getElementById("title-error");
const descriptionError = document.getElementById("description-error");


let nextId = data.length + 1 ;
let updatedid = null ;


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


  const btnupdate = document.createElement('button');
  btnupdate.type='button',
  btnupdate.classList.add('update-btn');
  btnupdate.textContent = "Update"

  btnDelete.addEventListener("click", () => {
    deleteCourse(course.id);
    renderCourses();
  });

  btnupdate.addEventListener('click' , ()=>{
    updateonCource(course)
 
  })

  card.append(heading, paragraph, btnDelete ,btnupdate);

  return card;
}


function renderCourses( cource = data) {
  Content.replaceChildren();

  if (cource.length === 0) {
    const message = document.createElement("p");
    message.classList.add("empty-message");
    message.textContent = "No Courses Found";

    Content.appendChild(message);
    return;
  }
  
  cource.forEach((course) => {
    const card = createCourseCard(course);
    Content.appendChild(card);
  });
}



function validateCourse(courseTitle, courseDescription) {

    setError(title);
  setError(description);

  if (courseTitle.trim().length < 3) {
    setError(title, "Title must be at least 3 characters");
    return false;
  }

  if (courseTitle.trim().length > 50) {
    setError(title, "Title must not exceed 50 characters");
    return false;
  }

  if (courseDescription.trim().length < 10) {
    setError(description, "Description must be at least 10 characters");
    return false;
  }

  if (isDuplicatedItem(courseTitle, updatedid)) {
    setError(title, "Course already exists");
    return false;
  }

  return true;
}


function addCourse(courseTitle, courseDescription) {

  if (isDuplicatedItem(courseTitle ) ) {
    alert("Cources already is exist ")
    return;
  }
  const newCourse = {
    id: nextId,
    title: courseTitle.trim(),
    description: courseDescription.trim(),
  };
  
  

  data.push(newCourse);

  saveCourses()

  nextId++;

  return newCourse;
}


function deleteCourse(id) {
  data = data.filter((course) => course.id !== id);
  if (updatedid === id ) {
    updatedid = null
    form.reset()
  }
  saveCourses();
}

function updateonCource(cource)
{
  updatedid = cource.id
  console.log(updatedid);
  
  title.value = cource.title;
  description.value = cource.description;
  addcource.textContent = "Update";

}

function updatedcource(id , newTitle , newDescription)
{
  const course = data.find((course) => course.id === id);

  if (!course) {
    return;
  }

  course.title = newTitle;
  course.description = newDescription;
  addcource.textContent = "add cource";

  saveCourses()
}


function searshcourse(searchtext)
{

  const datafilter = data.filter((c)=>{
   return c.title
      .toLowerCase()
      .includes(searchtext.toLowerCase());
  });    

  renderCourses(datafilter)
  
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const courseTitle = title.value;
  const courseDescription = description.value;


  if (!validateCourse(courseTitle, courseDescription)) {
    return;
  }

  if(updatedid !== null)
  {
  updatedcource(updatedid , courseTitle , courseDescription)
  updatedid = null;
  }else{
     addCourse(courseTitle, courseDescription);
  }


  // Update UI
  renderCourses();

  // Clear form
  form.reset();

  

  
});



// localStorage 

function saveCourses()
{
  localStorage.setItem( "cource" , JSON.stringify(data) )
}

function loadcource()
{
  const loadlocalstorage = localStorage.getItem("cource")
  if( loadlocalstorage !== null)
  {
    data = JSON.parse(loadlocalstorage)
  }

}

loadcource()


searchInput.addEventListener("input", (event) => {

  searshcourse(event.target.value)
});

renderCourses();


function isDuplicatedItem(coursetitle , editingId = null){
return(
    data.some((check)=>{
   return  check.title.trim().toLowerCase() ===  coursetitle.trim().toLowerCase()  &&
      check.id !== editingId
  } )
  )


}

function setError(input, message = "") {
  const errorElement = input.nextElementSibling;

  input.classList.toggle("input-error", Boolean(message));
  errorElement.textContent = message;
}