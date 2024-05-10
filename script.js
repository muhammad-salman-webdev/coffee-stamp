"use strict";
const data = {
    mainColor: "#002060",
    secondaryColor: "#FFC000",
    mainFontColor: "black",
    secondaryFontCOlor: "white",
    isShowGiftBesideStamps: true,
    cards: [
        {
            id: "1",
            title: "InstaMorning Coffee Lovers InstaMorning Coffee Lovers InstaMorning Coffee Lovers",
            desc: "Dedicated for those who adores coffee. Complete a purchase of 10 cups of coffee and get a latte for free",
            img: "assets/stamp-img.png",
            status: "active",
            total: 7,
            completed: 5,
            remaining: 2,
            validFrom: "2023/01/01",
            validTo: "2023/03/01",
            stamps: [
                {
                    id: "1",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
                {
                    id: "2",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
                {
                    id: "1",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
                {
                    id: "2",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
                {
                    id: "3",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
            ],
        },
        {
            id: "1",
            title: "InstaMorning Coffee title",
            desc: "Dedicated for those who adores coffee. Complete a purchase of 10 cups of coffee and get a latte for free",
            img: "assets/stamp-img.png",
            status: "active",
            total: 10,
            completed: 1,
            remaining: 9,
            validFrom: "2021/02/12",
            validTo: "2023/03/29",
            stamps: [
                {
                    id: "1",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
            ],
        },
        {
            id: "2",
            title: "This is the title",
            desc: "Descrption free (This is the description)",
            img: "assets/stamp-img.png",
            status: "active",
            total: 4,
            completed: 3,
            remaining: 1,
            validFrom: "2023/01/01",
            validTo: "2023/03/01",
            stamps: [
                {
                    id: "1",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
                {
                    id: "2",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
                {
                    id: "3",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
                {
                    id: "1",
                    title: "Our speciality Latte",
                    desc: "Specially designed latte with our own way",
                    img: "assets/colored-glass.png",
                    status: "completed",
                    dateTaken: "2023/01/21",
                },
            ],
        },
    ],
};
// function to add classes in the element
const addClass = (elem, cls) => elem.classList.add(cls);

const stampsContainerEl = document.getElementById("stamps-container");

// Updating the CSS color variables
const CssRoot = document.querySelector(":root");
CssRoot.style.setProperty("--primary", data.mainColor);
CssRoot.style.setProperty("--secondary", data.secondaryColor);
CssRoot.style.setProperty("--font-primary", data.mainFontColor);
CssRoot.style.setProperty("--font-secondary", data.secondaryFontCOlor);

stampsContainerEl.innerHTML = "";

// Adding cards by loop
data.cards.forEach((card, index) => {
    // Creating an item
    const stamp = document.createElement("div");
    addClass(stamp, "stamp");
    stamp.setAttribute("dir", "ltr");

    // Creating Front element
    const front = document.createElement("div");
    addClass(front, "front");

    // Adding Gift Box on Boolean
    front.innerHTML += `
        <div class="icon-box" style="transfrom = ' rotate(calc(32.7272deg * 0))'">
           ${
               data.isShowGiftBesideStamps
                   ? `<div><img src="assets/gift.png" /></div>`
                   : ""
           }
        </div> 
        `;

    for (let i = 0; i < card.total; i++) {
        let isActive = i < card.stamps.length ? true : false;
        const stamp = card.stamps[i];

        let boxs = data.isShowGiftBesideStamps ? card.total + 1 : card.total;

        let deg = 360 / boxs;

        front.innerHTML += `
        <div class="icon-box ${
            isActive ? "" : "active"
        }" style="transform :rotate(calc(${deg}deg * ${
            i + (data.isShowGiftBesideStamps ? 1 : 0)
        }))">
            <div style="  transform: rotate(calc(${360 - deg}deg * ${
            i + (data.isShowGiftBesideStamps ? 1 : 0)
        }))" >
                <img src="${isActive ? stamp.img : "assets/dull-glass.png"}" />
                <span>
                    <i class="fas fa-${isActive ? "check" : "info"}"></i>
                </span>               
            </div>
        </div>
        `;
    }

    let info = `  ${card.completed} out of ${card.total} filled, ${card.remaining} more to go`;

    // Please comment the below line to change the language
    info = `  ${card.completed} لقد أتممت ${card.total} من أصل, ${card.remaining} تبقى لك`;

    let infoLength = (info.length / 100) * 111;
    let deg;
    if (info.includes("out of")) {
        deg = (360 / 100) * infoLength * 0.4;
    } else {
        deg = (360 / 100) * infoLength * 0.43;
    }

    front.innerHTML += `
    <div class="details-container"  >
        
        
        <div class="stamp-info curved-circle" 
        style="transform: rotate(-${deg}deg)" >
            <svg class="circle" viewBox="0 0 200 200">
                <path
                id="curve${index + 1}"
                d="M100,0 C159.067,0 200,40.933 200,100 C200,159.067 159.067,200 100,200 C40.933,200 0,159.067 0,100 C0,40.933 40.933,0 100,0 Z" />
                <text>
                    <textPath alignment-baseline="hanging" xlink:href="#curve${
                        index + 1
                    }">
                          ${info}
                    </textPath>
                </text>
           </svg>
         </div>


        <div class="stamp-details">
            <div class="stamp-img">
                <img src="${card.img}" />
            </div>
            <p class="stamp-title">
                ${card.title}
            </p>
            ${
                data.isShowGiftBesideStamps
                    ? `<button>
                <img src="assets/gift.png" alt="" />
                <span>Get your reward</span>
            </button>`
                    : ""
            }
        </div>

        <div class="back-btn" disabled='true' >
        <svg class="circle">
            <path
                id="details${index + 1}"
                d="M60,100 C80,160 160,160 180,100 C160,40 80,40 60,100 A80,60 0 0,1 60,100 Z" />

            <text>
                <textPath xlink:href="#details${index + 1}" startOffset="15%">
           التفاصيل    
                </textPath>
            </text>
        </svg>
    </div>
    </div>    
    `;

    // Creating back element
    const back = document.createElement("div");
    addClass(back, "back");

    back.innerHTML += `

        <div class="valid-from curved-circle">
            <svg class="circle" viewBox="0 0 200 200">
                <path
                    id="curve-valid-from${index + 1}"
                    d="M100,0 C159.067,0 200,40.933 200,100 C200,159.067 159.067,200 100,200 C40.933,200 0,159.067 0,100 C0,40.933 40.933,0 100,0 Z" />
                <text>
                    <textPath
                        alignment-baseline="hanging"
                        xlink:href="#curve-valid-from${index + 1}">
                        2020/09/14
                    </textPath>
                </text>
            </svg>
        </div>
        <div class="valid-to curved-circle">
            <svg class="circle" viewBox="0 0 200 200">
                <path
                    id="curve-valid-to${index + 1}"
                    d="M100,0 C159.067,0 200,40.933 200,100 C200,159.067 159.067,200 100,200 C40.933,200 0,159.067 0,100 C0,40.933 40.933,0 100,0 Z" />
                <text>
                    <textPath
                        alignment-baseline="hanging"
                        xlink:href="#curve-valid-to${index + 1}">
                        2020/09/14
                    </textPath>
                </text>
            </svg>
        </div>

        <div class="back-header">
            <div class="back-stamp-img">
                <img src="assets/stamp-img.png" alt="" />
            </div> 
        </div>

        <h2 class="back-title">${card.title}</h2>
        <div class="back-details">
            <div class="back-desc">
                    ${card.desc}
            </div>
            <div class="cups-info">
                <div class="cups-ratio">
                    <span>Completed</span>
                    <p>${card.completed}</p>
                </div>
                <div class="remaining-cups">
                    <h2>${card.remaining}</h2>
                    <p>More To Go</p>
                </div>
                <div class="cups-ratio">
                    <span>Total</span>
                    <p>${card.total}</p>
                </div>
            </div>
            <button class="goto-front-btn">Back</button>
        </div>

    `;

    stamp.append(front, back);
    stampsContainerEl.appendChild(stamp);
});

const allcards = document.querySelectorAll(".stamp");

allcards.forEach((card) => {
    const goToBackBtn = card.querySelector(".back-btn textPath");
    goToBackBtn.addEventListener("click", () =>
        card.classList.toggle("toggle")
    );
    const goToFrontBtn = card.querySelector(".goto-front-btn");
    goToFrontBtn.addEventListener("click", () => {
        card.classList.toggle("toggle");
    });
});
