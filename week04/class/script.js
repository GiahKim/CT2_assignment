let trgBTN = document.getElementById("triggerBtn")
        let docBody = document.getElementById("body")
        let clrInfo = document.getElementById("colorInfo")
        
        let toggleBtn = document.getElementById("toggleBtn")
        let quokkaImg = document.getElementById("quokkaImg")

        function QuokkaToggler(){
            console.info(quokkaImg)
            if(quokkaImg.alt == "quokka"){
                quokkaImg.src = "./Sun.png"
                quokkaImg.alt = "sun"
            }
            else{
                quokkaImg.src = "./qu.jpeg"
                quokkaImg.alt = "quokka"
            }
            
        }
        toggleBtn.addEventListener("click", QuokkaToggler)


        trgBTN.addEventListener("click", function(){
            console.info(docBody)
            let redComp = Math.round(Math.random()*255)
            let greenComp = Math.round(Math.random()*255)
            let blueComp = Math.round(Math.random()*255)
            let colorString = "rgb(" + redComp + " , " + greenComp + ", " + blueComp + ")"
            
             console.info(colorString)

            docBody.style.backgroundColor = colorString
            clrInfo.innerText = colorString
            
        })