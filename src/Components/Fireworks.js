import React from 'react'
import '../fireworks.css'

const Fireworks = () => {
    const v = 0.3
    const brd = document.createElement("DIV");
    document.body.insertBefore(brd, document.getElementById("board"))
    let particles = []
    const fwkPtcIniV = 0.5;
    const fwkPtcIniT = 2500;
    const fwkSedIniV = 0.5;
    const fwkSedIniT = 1000;
    const a = 0.0005;
    let seeds
    const g = 0.0005;
    const newFireworkParticle = (x, y, angle) => {
        var fwkPtc = document.createElement("DIV");
        fwkPtc.setAttribute('class', 'fireWorkParticle');
        brd.appendChild(fwkPtc);
        fwkPtc.time = fwkPtcIniT;
        while (angle > 360)
            angle -= 360;
        while (angle < 0)
            angle += 360;
        fwkPtc.velocity = [];
        if (angle > 270) {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        else if (angle > 180) {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        else if (angle > 90) {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        else {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        fwkPtc.position = [];
        fwkPtc.position.x = x;
        fwkPtc.position.y = y;
        fwkPtc.style.left = fwkPtc.position.x + 'px';
        fwkPtc.style.top = fwkPtc.position.y + 'px';
        if (particles == null) particles = [];
        particles.push(fwkPtc);
        return fwkPtc;
    }


    const frame = () => {
        var current = Date.now();
        var deltaTime = current - before;
        before = current;
        for (let i in seeds) {
            var fwkSed = seeds[i];
            fwkSed.time -= deltaTime;
            if (fwkSed.time > 0) {
                fwkSed.velocity.x -= fwkSed.velocity.x * a * deltaTime;
                fwkSed.velocity.y -= g * deltaTime + fwkSed.velocity.y * a * deltaTime;
                fwkSed.position.x += fwkSed.velocity.x * deltaTime;
                fwkSed.position.y -= fwkSed.velocity.y * deltaTime;
                fwkSed.style.left = fwkSed.position.x + 'px';
                fwkSed.style.top = fwkSed.position.y + 'px';
            }
            else {
                newFireWorkStar(fwkSed.position.x, fwkSed.position.y);
                fwkSed.parentNode.removeChild(fwkSed);
                seeds.splice(i, 1);
            }
        }
        for (let i in particles) {
            var fwkPtc = particles[i];
            fwkPtc.time -= deltaTime;
            if (fwkPtc.time > 0) {
                fwkPtc.velocity.x -= fwkPtc.velocity.x * a * deltaTime;
                fwkPtc.velocity.y -= g * deltaTime + fwkPtc.velocity.y * a * deltaTime;
                fwkPtc.position.x += fwkPtc.velocity.x * deltaTime;
                fwkPtc.position.y -= fwkPtc.velocity.y * deltaTime;
                fwkPtc.style.left = fwkPtc.position.x + 'px';
                fwkPtc.style.top = fwkPtc.position.y + 'px';
            }
            else {
                fwkPtc.parentNode.removeChild(fwkPtc);
                particles.splice(i, 1);
            }
        }
    }
    
    let before = Date.now()
    setInterval(frame, 50)
    
    const newFireWorkStar = (x, y) => {
        let a = 0
        while (a < 360) {
            newFireworkParticle(x, y, a)
            a += 10
        }
    }

    seeds = []
    
    const newFireworkSeed = (x, y) => {
        var fwkSed = document.createElement("DIV");
        fwkSed.setAttribute('class', 'fireWorkSeed');
        brd.appendChild(fwkSed);
        fwkSed.time = fwkSedIniT;
        fwkSed.velocity = [];
        fwkSed.velocity.x = 0;
        fwkSed.velocity.y = fwkSedIniV;
        fwkSed.position = [];
        fwkSed.position.x = x;
        fwkSed.position.y = y;
        fwkSed.style.left = fwkSed.position.x + 'px';
        fwkSed.style.top = fwkSed.position.y + 'px';
        if (seeds == null)
            seeds = [];
        seeds.push(fwkSed);
        return fwkSed;
    }
    for (let i = 0; i < 15; i++) newFireworkSeed(100 + i * Math.random() * window.innerWidth / 10, window.innerHeight - 400)
    return (
        <div className="board">
            <div id="board" >

                <div className="levelUp">
                    <h1>
                    <span>L</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l&nbsp;&nbsp;</span>
                    <span>U</span>
                    <span>p</span>
                    <span>!</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Fireworks