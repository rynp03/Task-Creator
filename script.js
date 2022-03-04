const push = document.getElementById("push");
const titleVal = document.getElementById("title");
const cont2 = document.querySelector(".container2");
const deleteButton = document.getElementsByClassName("delete");
const desc = document.getElementById("desc");

push.onclick = function(){

     if(titleVal.value == ""){
          alert("Please Enter a value");
     }

     else{
   const taskList = document.createElement("div");
   //task list
   taskList.classList.add("task-list");
   //heading
   const heading = document.createElement('h3');
   heading.innerText = `${titleVal.value}` + ': ' + `${desc.value}`;
   taskList.appendChild(heading);

   //buttondiv
   const buttonDiv = document.createElement('div');

   //completed button
   const completed = document.createElement('button');
   completed.innerText = "Complete";
   completed.classList.add("completed");

   const deleted = document.createElement('button');
   deleted.innerText = "Delete";
   deleted.classList.add("delete");

   buttonDiv.appendChild(completed);
   buttonDiv.appendChild(deleted);

   taskList.appendChild(heading);
   taskList.appendChild(buttonDiv);
   
   cont2.appendChild(taskList);
   titleVal.value = "";
   desc.value = "";

   deleted.onclick = function(){
        taskList.remove();
   }

   completed.onclick = function(){
        taskList.classList.add("completeSuccess");
        heading.classList.add("completeDone");
        completed.remove();
   }
     }
}


          

