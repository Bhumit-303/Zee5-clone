// java sctipt for home page slider number 1
let imgBanner = [
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/cover/1920x770e3d785a94a8f4055903a344d242b0515c4e946cdcbbf4746bf0aef9e05a9b0c0.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/cover/1920x770ac7c2520eccc4058985879c5589cfa4b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5379692/cover/1920x7702258faa42539473682e3515399b0d37173697b003b284ddca66881e4c870c11b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-movie_2077184162/cover/1920x77082520fa063fe4bac869bb231a2fa6c22.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5458039/cover/1920x770a86abd375cdd4221a06fc0a13296f283.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/cover/bandaapfp20in1920x7701610202341e80d46cd55490997c3084c355a47df.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/cover/1920x77021fa9ef3d2d14bde8f7e08099b0c2e29.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-296370/cover/1920x7706238eaea35d541ce9d89a5ba7e88652a.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5416889/cover/1920x7703270f90bdea84b71b195bb789a97f4e8.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x770d23736a4930a419387d3a9fee10da7ce.jpg"
];

let image = document.querySelector("#banner");
let prevButton = document.querySelector("#prevBtn");
let nextButton = document.querySelector("#nextBtn");
let currentIndex = 0;
let autoplayInterval;

image.setAttribute("src", imgBanner[currentIndex]);

function nextImage() {
    currentIndex++;
    if (currentIndex >= imgBanner.length) {
        currentIndex = 0;
    }
    image.setAttribute("src", imgBanner[currentIndex]);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgBanner.length - 1;
    }
    image.setAttribute("src", imgBanner[currentIndex]);
}

function startAutoplay() {
    autoplayInterval = setInterval(nextImage, 3000); //(here 1000 mili seconts are equal to 1 seconds)
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

nextButton.addEventListener("click", function () {
    nextImage();
    stopAutoplay();
});

prevButton.addEventListener("click", function () {
    prevImage();
    stopAutoplay();
});

// Start autoplay when the page loads
startAutoplay();


    
  //for sreach function
    function performSearch() {
        let searchQuery = document.getElementById("searchInput").value;
        let resultsDiv = document.getElementById("results");
        
        resultsDiv.innerHTML = "Search results for: " + searchQuery;
    }




// JavaScript code for movies section
    const topPic = [
        {
            imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2211/portrait/062211incover.jpg",
            name:'Broken but Beautiful',
            duration:'Series',
            info1:'Romance',
        },
        {
            imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5453886/portrait/1920x770e79cb81008114d9b8e6c08ba26dac2eb.jpg",
            name:'Jurassic World',
            duration:'2hr',
            info1:'Actrion, Adventure',
        },
        {
            imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-33204/portrait/1920x7705aeb7ed5a533442fab008ab345b5a14202b286eed4844ed0ba3ce37efaefd242.jpg",
            name:'URI',
            duration:'2hr 18min',
            info1:'Action, Drama',
        },
        {
            imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-330581/portrait/00330581incov141987730314193f409686ac0a4c9da4e1c613411353c0.jpg",
            name:'The Power',
            duration:'2hr, 10min',
            info1:'Crime, Action',
        },
        {
            imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-105985/portrait/rockstarhi1920x770.jpg",
            name:'Rockstar',
            duration:'3hr',
            info1:'Romance, Musical',
        },
    ];
    
    // Function to create a card element
    function createCard(data) {
        let card = document.createElement('div');
        card.className = 'card';
    
        let image = document.createElement('img');
        image.src = data.imageSrc;
        card.appendChild(image);
    
        let name = document.createElement('H4');
        name.textContent = data.name;
        card.appendChild(name);
    
        let duration = document.createElement('li');
        duration.textContent = `Duration: ${data.duration}`;
        card.appendChild(duration);
    
        let info1 = document.createElement('li');
        info1.textContent = data.info1;
        card.appendChild(info1);
    
        return card;
    }
    
    let trayfeatureWrap = document.querySelector('.trayfeatureWrap');
    
    
    topPic.forEach(data => {
        const card = createCard(data);
        trayfeatureWrap.appendChild(card);
    });





    // java script for silder 2 on home page for movies section
    const cardData = [
        {
            imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/portrait/1920x770e3d785a94a8f4055903a344d242b0515c4e946cdcbbf4746bf0aef9e05a9b0c0.jpg',
            name: 'Hadii',
            duration: '2h 14min',
            info1: 'crime',
            info2: 'deama',
        },
        {
            imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/portrait/1920x770d218f6e5916340bb8f9aadc8d552ce9c.jpg',
            name: 'Dauranga',
            duration: '__hours',
            info1: '2 Seasons',
            info2: '17 episodes',
        },
        {
            imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5454041/portrait/1920x770e4fc008822554ed9b6ff62c469d5879ddc293e62ef1d4c72bc013c2bafb792b6.jpg',
            name: 'Ghoomar',
            duration: '2h 30min',
            info1: 'sports',
            info2: 'Drama',
        },
        {
            imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/portrait/bandaapfp20in1920x7701610202341e80d46cd55490997c3084c355a47df.jpg',
            name: 'Sirf Ek Banda Kaafi H',
            duration: '2hr 07min',
            info1: 'Drama',
            info2: 'Thriller',
        },
        {
            imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5334341/portrait/1920x7703f62f1e28948480fb8b1a13dab03dba2.jpg',
            name: 'Mrs Undercover',
            duration: '1hr 47min',
            info1: 'comedy',
            info2: 'Thriller',
        },
        {
            imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5448694/portrait/1920x77056da7bdca3dd41dcb1f9e2f1c10f06d5.jpg',
            name: 'Fifty Shades Of Grey',
            duration: '2hr',
            info1: 'Romance, Drama',
        },
    ];
    
    // Function to create a card element
    function createCard(data) {
        let card = document.createElement('div');
        card.className = 'card';
    
        let image = document.createElement('img');
        image.src = data.imageSrc;
        card.appendChild(image);
    
        let name = document.createElement('H4');
        name.textContent = data.name;
        card.appendChild(name);
    
        let duration = document.createElement('li');
        duration.textContent = `Duration: ${data.duration}`;
        card.appendChild(duration);
    
        let info1 = document.createElement('li');
        info1.textContent = data.info1;
        card.appendChild(info1);
    
        let info2 = document.createElement('li');
        info2.textContent = data.info2;
        card.appendChild(info2);
    
        return card;
    }
    
    let trayContentWrap = document.querySelector('.trayContentWrap');
    
    
    cardData.forEach(data => {
        const card = createCard(data);
        trayContentWrap.appendChild(card);
    });

 

// Additional data for web series section
const webSeriesData = [
    {
        imageSrc: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5289752/portrait/1920x770f4a79ac080934598b49c976987ec4dbd.jpg",
        name: 'Ayali',
        duration: 'Series',
        info1: 'Drama, Comedy',
    },
    {
        imageSrc: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2923/portrait/1920x77088034308288034308265e8c0753ce34a6ebedc2dbf823a90ed.jpg",
        name: 'NAXALbadi',
        duration: 'Series',
        info1: 'Action, Drama',
    },
    {
        imageSrc: "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2022/portrait/1920x770ea90cc642cbd46b3a96250991d6da91f.jpg",
        name: 'Coldd Lassi Aur Chicken Masala',
        duration: 'Series',
        info1: 'Comedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2006/portrait/1920x77018412675431841267543bb374306dc794aa29f1ea0c46cc491de.jpg',
        name: 'Mission Over Mars',
        duration: 'Series',
        info1: 'Science, Biopic',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-369273/portrait/1920x7706dbcd377e0ba4e40b8b4533066e64b791b570aed8b7047a6b8593ffac10e0ce9.jpg',
        name: 'Silence',
        duration: 'Series',
        info1: 'Mystery, Thriller',
    },
];

// Function to create a card tray
function createCard(data) {
    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.src = data.imageSrc;
    card.appendChild(image);

    let name = document.createElement('H4');
    name.textContent = data.name;
    card.appendChild(name);

    let duration = document.createElement('li');
    duration.textContent = `Duration: ${data.duration}`;
    card.appendChild(duration);

    let info1 = document.createElement('li');
    info1.textContent = data.info1;
    card.appendChild(info1);

    return card;
}

let trayseriesWrap = document.querySelector('.trayseriesWrap');


webSeriesData.forEach(data => {
    const card = createCard(data);
    trayseriesWrap.appendChild(card);
});


const TvData = [
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3392/portrait/1920x770d23736a4930a419387d3a9fee10da7ce.jpg',
        name:'Bhagya Lakshmi',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3510/portrait/1920x7707108ee66d22c4e8395a96ed843ac62dc.jpg',
        name:'Meet',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-366/portrait/1920x77097a8aab5547c42148de43d418feb3555.jpg',
        name:'Kundali Bhagya',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-127/portrait/1920x770b5d6eeb799c841749bd193a4b226edd8.jpg',
        name:'Kumkum Bhagya',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-107/portrait/06107cover2134346779.jpg',
        name:'Banu Main Teri Dulhan',
        info1:'Serial',
    },
];

// Function to create a card tray
function createCard(data) {
    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.src = data.imageSrc;
    card.appendChild(image);

    let name = document.createElement('H4');
    name.textContent = data.name;
    card.appendChild(name);

    let info1 = document.createElement('li');
    info1.textContent = data.info1;
    card.appendChild(info1);

    return card;
}

let TvWrap = document.querySelector('.trayTVWrap');


TvData.forEach(data => {
    const card = createCard(data);
    TvWrap.appendChild(card);
});


// adding new gem movies section
const gemData =[
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z513117/portrait/1920x770d017c9472db54bab993186146dac23f6.jpg',
        name:'Rashmi Rocket',
        info1:'Sports, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z595840/portrait/1920x7705d9c7a86295d4f268cd4c7deb387d9b8.jpg',
        name:'Love Hostel',
        info1:'Crime, Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246147/portrait/1920x7705633a18bbec8460ab816a2a3fd64ecb7.jpg',
        name:'Tadka',
        info1:'Comedy, Romance',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-27132/portrait/1920x770d1edc80582d845ffadbb89aa802c967b5ee1a2f6dd514d9bb193c3c269165cc3.jpg',
        name:'Kedarnath',
        info1:'Romance, Based on true Story',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250530/portrait/1920x770879131b79a644196a6b33bc8507d7d1e.jpg',
        name:'Bimbisara',
        info1:'Fantasy, Action',
    },
];
// Function to create a card tray
function createCard(data) {
    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.src = data.imageSrc;
    card.appendChild(image);

    let name = document.createElement('H4');
    name.textContent = data.name;
    card.appendChild(name);

    let info1 = document.createElement('li');
    info1.textContent = data.info1;
    card.appendChild(info1);

    return card;
}

let gemWrap = document.querySelector('.trayGemWrap');


gemData.forEach(data => {
    const card = createCard(data);
    gemWrap.appendChild(card);
});


// language section
let langData = [
    {
        imageSrc : "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-8-7867/list/hindiplatformlanguage21170x6586720271ae3ad97a68f4adb9428bc32a84d7c68.jpg",
    },
    {
        imageSrc : "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258171/list/tamilplatformlanguage21170x658672027d3e73936dd574ef7acb36f835cdb3f6c.jpg",
    },
    {
        imageSrc : "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258169/list/teluguplatformlanguage21170x6586720276e6d5fe5806b4c2194af1d5abc7ba3b9.jpg",
    },
    {
        imageSrc : "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-8-3z5258242/list/platformlanguageenglish1170x65859202340309a61169b42709a678c85845c14c0.jpg",
    },
    {
        imageSrc : "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-8-7888/list/punjabiplatformlanguage21170x65867202726f9170ad4aa4a979be88d60b04f16bd.jpg",
    },
    {
        imageSrc :"https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-8-7868/list/marathiplatformlanguage21170x658672027b522689ba341448592e0ed83a4fc4fbc.jpg",
    }
];
function createCard(data) {
    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.src = data.imageSrc;
    card.appendChild(image);
    return card;
}

let LangWrap = document.querySelector('.trayLangWrap');


langData.forEach(data => {
    const card = createCard(data);
    LangWrap.appendChild(card);
});



// box bof bollywood block busters
const BlockbusterData = [
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-35166/portrait/1920x770a6695f542cf3419291a6bc299aa894f36beecab5698747888534bbbac6185936.jpg",
        name:'Simba',
        info1:'Action, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-movie_1175948338/portrait/1920x770362568034.jpg",
        name:'Rustom',
        info1:'Romance, Suspense',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5206274/portrait/1920x770485283887ce04c66a91f3e5dc0e207479c31de38467e45e38e8be4ce6035ff05.jpg",
        name:'Khuda Hafiz',
        info1:'Romance, Action',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-371253/portrait/1920x770805007927.jpg",
        name:'Vivah',
        info1:'Romance,Musical',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-7655/portrait/007655incover2092819401.jpg",
        name:'Batti Gul Meter Chalu',
        info1:'Comedy, Romance',
    }
];
function createCard(data) {
    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.src = data.imageSrc;
    card.appendChild(image);

    let name = document.createElement('H4');
    name.textContent = data.name;
    card.appendChild(name);

    let info1 = document.createElement('li');
    info1.textContent = data.info1;
    card.appendChild(info1);

    return card;
}

let bollywood= document.querySelector('.trayBollyWrap');


BlockbusterData.forEach(data => {
    const card = createCard(data);
    bollywood.appendChild(card);
});




let IntData = [
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5444844/portrait/1920x7707880fb0c269743fab16f3d04f0aa965e.jpg",
        name:'Coma',
        info1:'SciFi, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418588/portrait/1920x770d539d93af4b5454abe4dd73466f7bfcc.jpg",
        name:'No Surrender',
        info1:'Action,Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5445228/portrait/1920x77050acb9f8615349ef8a7f82e7b3af231d.jpg",
        name:'My Better Half',
        info1:'Romance, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5426648/portrait/1920x770ec46c09bc48d4ee4b5e3c49dc843de2d.jpg",
        name:'Legacy',
        info1:'Action,Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5430393/portrait/1920x7700258e98b84cc4546b79c09e8a21a450e.jpg",
        name:'Street Fighter',
        info1:'Action,Thriller',
    },
];
function createCard(data) {
    let card = document.createElement('div');
    card.className = 'card';

    let image = document.createElement('img');
    image.src = data.imageSrc;
    card.appendChild(image);

    let name = document.createElement('H4');
    name.textContent = data.name;
    card.appendChild(name);

    let info1 = document.createElement('li');
    info1.textContent = data.info1;
    card.appendChild(info1);

    return card;
}

let IntWrap= document.querySelector('.trayIntWrap');


IntData.forEach(data => {
    const card = createCard(data);
    IntWrap.appendChild(card);
});




// 
// 
// 
// 
// sighup and login logic
let users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

// Function for SignUp button click
function signUp() {
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    if (username && password) {
        // for Checking if the username is already taken
        let userExists = users.some(function (user) {
            return user.username === username;
        });

        if (!userExists) {
            users.push({ username: username, password: password });

            alert("SignUp successful! Welcome, " + username + "!");
        } else {
            alert("Username already exists. Please choose a different one.");
        }
    } else {
        alert("SignUp failed. Please enter both username and password.");
    }
}

// Function for LOGIN button click
function login() {
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    //for Checking if the provided username and password match any user
    let user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert("Login successful! Welcome back, " + username + "!");
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

// Function to perform search
function performSearch() {
    alert("Performing search....");
}
