//Function for open the menu on mobile//
function OpenMenu() {
    var burgermenu = document.getElementById('burger-menu');
    burgermenu.classList.toggle('active');
}


/////////////////////////////////////////////////////////////

    
const btns = document.querySelectorAll('#project-nav ul li a');
const project_items  = document.querySelectorAll(".project-item");


for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',function(){
        filterproject(btns[i]);
    });
    //btns[i].addEventListener('click',filterproject);
}

function setActiveBtn(buttonElem){
    btns.forEach(btn => {
        btn.classList.remove('active');
    });
    buttonElem.classList.add('active');
}

function filterproject(buttonElem){
    setActiveBtn(buttonElem);

    project_items.forEach(project_item =>{
        project_item.classList.add("inactive");

        const projectType = project_item.dataset.project;
        const btnType = buttonElem.dataset.btn;

        if(projectType == btnType){
            project_item.classList.remove("inactive");
        }

        if(btnType== "All"){
            project_item.classList.remove("inactive");
        }

    });

    

    
}


