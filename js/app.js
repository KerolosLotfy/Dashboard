// Goblal variables
const lists = document.querySelectorAll('aside > ul > li');
const theme = document.querySelector('.theme');
const toggleBtn = document.querySelectorAll('.toggle');
const plans = document.querySelectorAll('#plans .plan');
const backupLocation = document.querySelectorAll('.location div');






// active page
window.onload = () => {
    lists.forEach((li) => {
        if (document.querySelector('section').id === li.dataset.display) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    })
};


// dark mood
theme.addEventListener('click', (e) => {
    theme.classList.toggle('active');
    if (theme.classList.contains('active')) {
        document.documentElement.style.setProperty('--main-color', '#131719');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--container-color', '#33505f');
        document.documentElement.style.setProperty('--light-gray', '#33505f ');
        document.documentElement.style.setProperty('--gray', '#bbb');
    } else {
        document.documentElement.style.setProperty('--main-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--container-color', '#f1f5f9');
        document.documentElement.style.setProperty('--light-gray', '#f6f6f6');
        document.documentElement.style.setProperty('--gray', '#eee');
    }

})


// toggle switch
toggleBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('on');
    })
})

// select plan 
plans.forEach((plan) => {
    plan.children[0].addEventListener('click', () => {
        plans.forEach((plan) => {
            plan.classList.remove('current-plan');
        })
        plan.classList.add('current-plan');
        // this.style.color = 'red';  don't working 
    })
})


// select Backup Location 
backupLocation.forEach((div) => {
    div.addEventListener('click', () => {
        backupLocation.forEach((div) => {
            div.classList.remove('active');
        })
        div.classList.add('active');
    })
})