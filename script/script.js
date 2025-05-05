window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(window.scrollY === 0) {
        header.classList.remove('scrolled'); 
    } else if(!header.classList.contains('scrolled')) {
        header.classList.add('scrolled'); 
    }
});

const projects = {
    all: [
        {
            title: 'Thirukkural',
            img: './images/projects/thiruvalluvar.jpg'
        }
    ],
    upcoming: [
        {
            title: 'Thirukkural',
            img: './images/projects/thiruvalluvar.jpg'
        }
    ]
}

function renderProject(items) {
    const tabContent = document.getElementById('tabContent');
    tabContent.innerHTML = '';
    items.forEach(item => {
        tabContent.innerHTML += `
            <div class="projectCard">
                <div class="projectImgCont">
                    <img src="${item.img}" alt="" class="projectImg">
                    <div class="overlayer dflex alignBoth">
                        <i class="fa-solid fa-arrow-up-right-from-square newTabIcon"></i>
                    </div>
                </div>
                <p class="projectText">${item.title}</p>
            </div>
        `
    });
}

let currentTab;

function handleProjectTab(id) {
    const tab = document.getElementById(id);
    tab.classList.add('active');
    if(currentTab) {
        document.getElementById(currentTab).classList.remove('active');
    }
    currentTab = id;
    if(projects[id]) {
        renderProject(projects[id])
    } else {
        const tabContent = document.getElementById('tabContent');
        tabContent.innerHTML = 'No data available';
    }
}

handleProjectTab('all');