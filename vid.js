var vids = document.querySelectorAll(".vid")

window.images = []

vids.forEach(function(vid) {

    var src = vid.attributes.src.value

    var image = document.createElement("img")
    var width = 300

    try {
        width = vid.attributes.width.value|0
    }
    catch(e) {

    }

    image.src = "https://img.youtube.com/vi/" + src + "/hqdefault.jpg"
    image.width = width
    image.height = width * 3/4///16


    images.push(image)
    vid.appendChild(image)
})


setTimeout(function() {
    var vids = document.querySelectorAll(".vid")


    

    vids.forEach(function(vid) {
        var src = vid.attributes.src.value

        vid.firstChild.onclick = function() {
            console.log(vid.firstChild)
            playVideo(src)
        }
    })

}, 500)



function playVideo(src) {
    // show overlay

    var overlay = document.getElementById("overlay")
    overlay.style.display = "block"

    overlay.innerHTML =  '<div class=bg></div><iframe id=iframe frameborder="0" autoplay="1" allowfullscreen></iframe>'

    var iframe = document.getElementById("iframe")
    // iframe.style.background = "https://img.youtube.com/vi/" + src + "/0.jpg"

    iframe.src ="https://www.youtube.com/embed/" + src + "?ecver=1&theme=dark&color=white&autoplay=1&autohide=1&cc_load_policy=1&modestbranding=1&showinfo=0&rel=0"

    var ratio = window.innerWidth < window.innerHeight ? 1 : 0.7
    
    var w = window.innerWidth * ratio
    var h = w * 315/560
    iframe.width = w
    iframe.height = h

    iframe.style.left = (window.innerWidth - w) /2
    iframe.style.top = (window.innerHeight - h) /2
    iframe.style.position = 'absolute'
    document.body.style.overflow = 'hidden'

    overlay.onclick = function() {
        overlay.innerHTML = ""
        overlay.style.display = "none"    
        document.body.style.overflow = 'scroll'
    }

}



var html = "<div id=overlay></div>"
html += "<style>"
html += "#overlay {top: 0; left: 0;  position: fixed; display: none; width: 100%; height: 100%}"
html += "#overlay .bg { opacity: 0.6; background: #383; top: 0; left: 0; position: absolute; width: 100%; height: 100%}"
html += "#overlay iframe { position: absolute; background: #020}"
html += ".vid img { background: #333; cursor: pointer}"
html += "</style>"

document.body.innerHTML += html