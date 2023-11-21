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
    alert("Performing search... Implement your search logic here.");
}




// banner on the web series screen
let SeriesBanner = [
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5458039/cover/1920x77018c96acc078e45cbad02f9ee086e7c58.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5379682/cover/1920x7706d9791044dc641c8afeafd0d7430796b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/cover/1920x770ac7c2520eccc4058985879c5589cfa4b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5448741/cover/1920x7706322e11ea5774e35ae81ab96f1b69ad0.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-movie_1460826290/cover/1920x77091eb9d424c304da2b7a9905774711855.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5419208/cover/1920x7705efec6aea2564e93964b6322ee6de7d8.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5351501/cover/1920x7709e07d3163e0f41328bc9ecb3e0ad54e6.jpg",
];

let image = document.querySelector("#banner");
let prevButton = document.querySelector("#prevBtn");
let nextButton = document.querySelector("#nextBtn");
let currentIndex = 0;

function updateImage() {
    image.setAttribute("src", SeriesBanner[currentIndex]);
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= SeriesBanner.length) {
        currentIndex = 0;
    }
    updateImage();
    updateButtonBackgrounds()
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = SeriesBanner.length - 1;
    }
    updateImage();
    updateButtonBackgrounds()
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

function updateButtonBackgrounds() {
    prevButton.style.backgroundImage = `url('${SeriesBanner[currentIndex - 1 < 0 ? SeriesBanner.length - 1 : currentIndex - 1]}')`;
    nextButton.style.backgroundImage = `url('${SeriesBanner[currentIndex + 1 >= SeriesBanner.length ? 0 : currentIndex + 1]}')`;
}

// Add autoplay functionality
let autoplayInterval;

function startAutoplay() {
    updateImage(); 
    autoplayInterval = setInterval(nextImage, 3000); 
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay();

nextButton.addEventListener("click", stopAutoplay);
prevButton.addEventListener("click", stopAutoplay);



let cardData =[
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/portrait/1920x770d218f6e5916340bb8f9aadc8d552ce9c.jpg',
        name: 'Dauranga',
        duration: '2 Seasons',
        info1: 'Drama, Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5399186/portrait/1920x7708d6504e472c942088cf1e60f69c2c3da.jpg',
        name: 'The Kashmiri Files- Unvield',
        duration: 'Series',
        info1: 'Documentary',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg',
        name: 'SUNFLOWER',
        duration: 'Series',
        info1: 'Thriller, Comedy',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3346/portrait/1920x7701896315326.jpg',
        name: 'Permanent Roommates',
        duration: 'Series',
        info1: 'Comedy, Romance',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5434214/portrait/1920x7708a4bc5046b404eb68d237186abba493d.jpg",
        name:'The Golden Horde',
        duration:'Series',
        info1:'Horror, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3029/portrait/063029incover83682024583685789567ca29344c3afa58ccd14134d56.jpg",
        name:'Black Widows',
        duration:'Series',
        info1:'Comedy, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1558/portrait/061558incover.jpg",
        name:'Poison-2',
        duration:'Series',
        info1:'Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1298/portrait/1920x770965ee5a2fa074700a518bc88706bdcfa.jpg",
        name:'Abhay 3',
        duration:'Series',
        info1:'Action, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1741/portrait/061741incover9a65bb98716248368395a454cb72e1de.jpg",
        name:'Kaafir',
        duration:'Series',
        info1:'Based on True Events',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3064/portrait/1920x770f6f1d5315e9145808275b6b69e6572f7.jpg",
        name:'Bicchoo Ka Khel',
        duration:'Series',
        info1:'Mistery, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2955/portrait/1920x7702bde888e01a54a1688ff0a84809a657aaa246c9cee2a4b6998af92d00756f03e.jpg",
        name:'Jeet ki Zid',
        duration:'Series',
        info1:'Action, Drama',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172356/portrait/1920x7709584469c57ec4547935b629b11da8504.jpg",
        name:'Saaf Bahu Aachar Pvt. Ltd',
        duration:'Series',
        info1:'Biography, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5281686/portrait/1920x770da1dbae2451c4680b5aa059877f1b782.jpg",
        name:'Jaanbaaz Hindustaan Ke',
        duration:'Series',
        info1:'Action, Drama',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3189/portrait/1920x77030d81c3db86943e5adb59da1ca942498.jpg",
        name:'The Married Women',
        duration:'Series',
        info1:'Drama',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1290/portrait/061290incover.jpg",
        name:'The Final call',
        duration:'Series',
        info1:'Suspense, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2161/portrait/1920x770c38e244fc1bf477e9ef974a0cc387586.jpg",
        name:'Fitrat',
        duration:'Series',
        info1:'Horror, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5387648/portrait/1920x770613515b26d014df9b30b62690a630f5a.jpg",
        name:'Abor Proloy',
        duration:'Series',
        info1:'Action, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5343441/portrait/1920x770aaa73df91db748eda2817d440678d2ee.jpg",
        name:'Fire Flies',
        duration:'Series',
        info1:'Drama, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/portrait/1920x77006b6b4833c93416c95323393bc2ad7f0.jpg",
        name:'The Broken News',
        duration:'Series',
        info1:'Drama, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5375822/portrait/1920x7701fdc3dba97f54a55896d058ed8828263.jpg",
        name:'Koi Baat Chale',
        duration:'Series',
        info1:'Drama, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2395/portrait/1920x770a47cac58ced24990bc1cb4dec19c704a.jpg",
        name:'Code-M',
        duration:'Series',
        info1:'Action, Drama',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3051/portrait/1920x770837f37b3987a4e2399c32ddb15851b31.jpg",
        name:'Mum Bhai',
        duration:'Series',
        info1:'Action, Drama',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5173774/portrait/1920x770919a12b29bd348be9530d102187606d6.jpg",
        name:'RangBaaz',
        duration:'Series',
        info1:'',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5289752/portrait/1920x770f4a79ac080934598b49c976987ec4dbd.jpg",
        name:'Ayali',
        duration:'Series',
        info1:'Drama, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2923/portrait/1920x77088034308288034308265e8c0753ce34a6ebedc2dbf823a90ed.jpg",
        name:'NAXALbadi',
        duration:'Series',
        info1:'Action, Drama',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2022/portrait/1920x770ea90cc642cbd46b3a96250991d6da91f.jpg",
        name:'Coldd Lassi Aur Chicken Masala',
        duration:'Series',
        info1:'Comedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2006/portrait/1920x77018412675431841267543bb374306dc794aa29f1ea0c46cc491de.jpg',
        name: 'Mission Over Mars',
        duration: 'sreies',
        info1: 'Sience, Biopic',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-369273/portrait/1920x7706dbcd377e0ba4e40b8b4533066e64b791b570aed8b7047a6b8593ffac10e0ce9.jpg',
        name: 'Silence',
        duration: 'sreies',
        info1: 'Mistery,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3348/portrait/1920x7703325e4c318794a4a9e4d3eee0f6f19a9.jpg',
        name: 'TVF PITCHERS',
        duration: 'Seiers',
        info1: 'Codedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/portrait/1920x77065f24a99cf4047bda7cad6d7cf07566d857123e23d8448e4a8b85cfcd12c2531.jpg',
        name: 'MUKHBIR',
        duration: 'Series',
        info1: 'Story of a Spy',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3350/portrait/1920x7708cc3721005b54277a9a6a0851d255cfb.jpg',
        name: 'TRIPLING',
        duration: 'Series',
        info1: 'Love triangle,Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5441375/portrait/1920x770258110f3ddda49868bb50acd26463a81.jpg',
        name: 'Sherlock-The Russian Chronical',
        duration: 'Series',
        info1: 'Suspesne',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5311140/portrait/1920x770b6b0889bc58e48ebbcea1c702a830032de446bf7b699497a9ea3ace93ef51451.jpg',
        name: 'Taj',
        duration: 'Series',
        info1: 'Historical Drama',
        info2: 'Period',
    },
]

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

let trayContentWrap = document.querySelector('.trayContentWrap');

for (let i = 0; i < cardData.length; i++) {
    let card = createCard(cardData[i]);
    trayContentWrap.appendChild(card);
}

