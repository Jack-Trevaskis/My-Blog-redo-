const blogDropButton = document.getElementById("blogDropButton")
const blogDrop = document.getElementById("blogsDrop")

const personalDropButton = document.getElementById("personalDropButton")
const personalDrop = document.getElementById("personalDrop")

const DADropButton = document.getElementById("DADropButton")
const DADrop = document.getElementById("DADrop")


blogDropButton.addEventListener("click", blogDropper)
personalDropButton.addEventListener("click", personalDropper)
DADropButton.addEventListener("click", DADropper)

let dropActive = ""

function blogDropper () {

    if (dropActive === "blog") {
        dropActive = ""
        blogDrop.classList.remove("dropDown")
        blogDrop.classList.add("dropUp")

    }

    else {

        dropActive = "blog"
        blogDrop.classList.remove("dropUp")
        blogDrop.classList.add("dropDown")

        personalDrop.classList.remove("dropDown")
        personalDrop.classList.add("dropUp")

        DADrop.classList.remove("dropDown")
        DADrop.classList.add("dropUp")
        
        
    }

}

function personalDropper () {

    if (dropActive === "personal") {
        dropActive = ""
        personalDrop.classList.remove("dropDown")
        personalDrop.classList.add("dropUp")

    }

    else {

        dropActive = "personal"
        personalDrop.classList.remove("dropUp")
        personalDrop.classList.add("dropDown")

        blogDrop.classList.remove("dropDown")
        blogDrop.classList.add("dropUp")

        DADrop.classList.remove("dropDown")
        DADrop.classList.add("dropUp")
        
        
    }

}

function DADropper () {

    if (dropActive === "DA") {
        dropActive = ""
        DADrop.classList.remove("dropDown")
        DADrop.classList.add("dropUp")

    }

    else {

        dropActive = "DA"
        DADrop.classList.remove("dropUp")
        DADrop.classList.add("dropDown")

        personalDrop.classList.remove("dropDown")
        personalDrop.classList.add("dropUp")

        blogDrop.classList.remove("dropDown")
        blogDrop.classList.add("dropUp")
        
        
    }

}






// ------ change background --------

const changeBackgroundButton = document.getElementById("changeBackground")
changeBackgroundButton.addEventListener("click", changeBackground)

const backGround = document.getElementById("body")

let currentBackground = "powderSki"

function changeBackground () {

    if (currentBackground === "powderSki") {

        backGround.classList.remove("powderSki")
        backGround.classList.add("waterTowerGap")
        currentBackground = "waterTowerGap"

    }

    else if (currentBackground === "waterTowerGap") {

        backGround.classList.remove("waterTowerGap")
        backGround.classList.add("jimi")
        currentBackground = "jimi"
    }

    else if (currentBackground === "jimi") {

        backGround.classList.remove("jimi")
        backGround.classList.add("powderSki")
        currentBackground = "powderSki"
    }

}