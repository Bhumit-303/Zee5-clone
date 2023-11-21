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




//java script for slider 
let Moviebanner = [
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-296370/cover/1920x7709cfed81f937949f082ad398af20d0807.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/cover/1920x770ac7c2520eccc4058985879c5589cfa4b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/cover/1920x770e3d785a94a8f4055903a344d242b0515c4e946cdcbbf4746bf0aef9e05a9b0c0.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/cover/bandaapfp20in1920x7701610202341e80d46cd55490997c3084c355a47df.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5444833/cover/1920x7708a283571fff54e799e7c388477eca142.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5379692/cover/1920x7702258faa42539473682e3515399b0d37173697b003b284ddca66881e4c870c11b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5334341/cover/1920x7703f62f1e28948480fb8b1a13dab03dba2.jpg",
];

let image = document.querySelector("#banner");
let prevButton = document.querySelector("#prevBtn");
let nextButton = document.querySelector("#nextBtn");
let currentIndex = 0;

function updateImage() {
    image.setAttribute("src", Moviebanner[currentIndex]);
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= Moviebanner.length) {
        currentIndex = 0;
    }
    updateImage();
    updateButtonBackgrounds()
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = Moviebanner.length - 1;
    }
    updateImage();
    updateButtonBackgrounds()
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

function updateButtonBackgrounds() {
    prevButton.style.backgroundImage = `url('${Moviebanner[currentIndex - 1 < 0 ? Moviebanner.length - 1 : currentIndex - 1]}')`;
    nextButton.style.backgroundImage = `url('${Moviebanner[currentIndex + 1 >= Moviebanner.length ? 0 : currentIndex + 1]}')`;
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



// javascript for the card tray in the movies page

let cardData = [
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/portrait/1920x770e3d785a94a8f4055903a344d242b0515c4e946cdcbbf4746bf0aef9e05a9b0c0.jpg',
        name: 'Hadii',
        duration: '2h 14min',
        info1: 'Crime, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/portrait/1920x770d218f6e5916340bb8f9aadc8d552ce9c.jpg',
        name: 'Dauranga',
        duration: '2 Seasons',
        info1: 'Drama, Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5454041/portrait/1920x770e4fc008822554ed9b6ff62c469d5879ddc293e62ef1d4c72bc013c2bafb792b6.jpg',
        name: 'Ghoomar',
        duration: '2h 30min',
        info1: 'sports, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/portrait/bandaapfp20in1920x7701610202341e80d46cd55490997c3084c355a47df.jpg',
        name: 'Sirf Ek Banda Kaafi H',
        duration: '2hr 07min',
        info1: 'Drama, Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5334341/portrait/1920x7703f62f1e28948480fb8b1a13dab03dba2.jpg',
        name: 'Mrs Undercover',
        duration: '1hr 47min',
        info1: 'comedy, Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5399186/portrait/1920x7708d6504e472c942088cf1e60f69c2c3da.jpg',
        name: 'The Kashmiri Files',
        duration: 'Series',
        info1: 'Documentary',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5448694/portrait/1920x77056da7bdca3dd41dcb1f9e2f1c10f06d5.jpg',
        name: 'Fifty Shades Of Grey',
        duration: '2hr',
        info1: 'Romance, Drama',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-35166/portrait/1920x770a6695f542cf3419291a6bc299aa894f36beecab5698747888534bbbac6185936.jpg",
        name:'Simba',
        duration: '2hr 30min',
        info1:'Action, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-movie_1175948338/portrait/1920x770362568034.jpg",
        name:'Rustom',
        duration: '2hr 30min',
        info1:'Romance, Suspense',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5206274/portrait/1920x770485283887ce04c66a91f3e5dc0e207479c31de38467e45e38e8be4ce6035ff05.jpg",
        name:'Khuda Hafiz',
        duration: '2hr 30min',
        info1:'Romance, Action',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-371253/portrait/1920x770805007927.jpg",
        name:'Vivah',
        duration: '2hr 30min',
        info1:'Romance,Musical',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-7655/portrait/007655incover2092819401.jpg",
        name:'Batti Gul Meter Chalu',
        duration: '2hr 30min',
        info1:'Comedy, Romance',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-73415/portrait/1920x770546cc83b519e4088b6f0bec6cdd6e7d275cce518f27e420ea676dda625c6b0d3.jpg",
        name:'Tashkan Files',
        duration:'1hr 30min',
        info1:'Based On True Events',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-movie_1968889812/portrait/parmanu1920x77132997463813291746a732bde44c25bae46d463960abcf9e9fbe02317e4a86a0fd70f8386ab05a.jpg",
        name:'Parmanu',
        duration:'2hr 6min',
        info1:'Based On True Events',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-122732/portrait/00122732incov1352570625135206b263bad3d24003b87bb2a93915fe9f.jpg",
        name:'Hotel Mumbai',
        duration:'1hr 56min',
        info1:'Based On True Events',
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
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5301299/portrait/1920x770f5c57d4759124df5bbf870a68dfc6fb5.jpg',
        name: 'Salaam Venky',
        duration: '2hr 2min',
        info1: 'Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg',
        name: 'SUNFLOWER',
        duration: 'Series',
        info1: 'Thriller, Comedy',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5281750/portrait/1920x7706f558df1e83d4fce8223a1881f7d923c.jpg',
        name: 'CHATRIWALI',
        duration: '1hr 56min',
        info1: 'Comedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/portrait/1920x7703f10e3de834340c386676518a960be4b.jpg',
        name: 'CHUP',
        duration: '2hr 10min',
        info1: 'Thriller, Crime',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5311140/portrait/1920x770b6b0889bc58e48ebbcea1c702a830032de446bf7b699497a9ea3ace93ef51451.jpg',
        name: 'Taj',
        duration: 'Series',
        info1: 'Historical Drama',
        info2: 'Period',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5416889/portrait/1920x7703270f90bdea84b71b195bb789a97f4e8.jpg',
        name: 'Sa Re Ga Ma Pa',
        duration: 'weekly',
        info1: 'Reality Show, Dance',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-gadarekpremkatha/portrait/1920x77006598f0b803c496f99a90ba31b96cff1.jpg',
        name: 'Gadar Ek Prem Katha',
        duration: '3hr 2min',
        info1: 'Action, Romance',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5453981/portrait/1920x7702117b355a0c24b22850b31021a12b3db.jpg',
        name: 'Bad Boy',
        duration: '1hr 47min',
        info1: 'Comedy, Romance',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133622/portrait/1920x770feafd237d59941949fdbaf632632ac49.jpg',
        name: 'Jhund',
        duration: '2hr 49min',
        info1: 'Biopic, Sports',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-96839/portrait/1920x7707c4220749d764d0fbbf4dc8b263d261b.jpg',
        name: 'Dream Girl',
        duration: '2hr 5min',
        info1: 'Comedy, Romance',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-movie_2077184162/portrait/padman121920x7362330232362c7734018f2ae4eae861e74633b7c7670.jpg',
        name: 'Pad Man',
        duration: '2hr 10min',
        info1: 'Biopic',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5379692/portrait/1920x7702258faa42539473682e3515399b0d37173697b003b284ddca66881e4c870c11b.jpg',
        name: 'Kisi Ka Bhai Kisi Ki Jaan',
        duration: '2hr 18min',
        info1: 'Action, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/portrait/1920x770ac7c2520eccc4058985879c5589cfa4b.jpg',
        name: 'Gadar 2',
        duration: '2hr 45min',
        info1: 'Action, Period Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5444833/portrait/1920x7708a283571fff54e799e7c388477eca142.jpg',
        name: 'The Equilizer',
        duration: '1hr 44min',
        info1: 'Action, Crime',
     },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5215371/portrait/1920x770557be1aeec874c838dbf7a66204e3a67.jpg',
        name: 'Vikram',
        duration: '2hr51min',
        info1: 'Action, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x770ee070807403048a7a76f9fab0a1ca2ff654a074cfa1148039ae741170d7df583.jpg',
        name: 'The Kashmiri Files',
        duration: '2hr 43min',
        info1: 'Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5441258/portrait/1920x7704bdd1f9987fc47278c04668027921df1.jpg',
        name: 'Asteriod City',
        duration: '1hr 40min',
        info1: 'Comedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-33204/portrait/1920x7705aeb7ed5a533442fab008ab345b5a14202b286eed4844ed0ba3ce37efaefd242.jpg',
        name: 'Uri',
        duration: '2hr 12min',
        info1: 'Drama, Action',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5368704/portrait/1920x770b7ccea88a1b048a0a8b916ea6428f5b0.jpg',
        name: 'Tarla',
        duration: '2hr 7min',
        info1: 'Biopic, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3346/portrait/1920x7701896315326.jpg',
        name: 'Permanent Roommates',
        duration: 'Series',
        info1: 'Comedy, Romance',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227557/portrait/1920x77075ff67f78d6c422582b996d7674784ac.jpg',
        name: 'Karthikeya',
        duration: '2hr17min',
        info1: 'Action, Adventure',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/portrait/1920x7702e2ba8da340346f9b2256075cd4a39f2b5cfca6efee94d588364979320f3fef2.jpg',
        name: 'India Lockdown',
        duration: '1hr 52min',
        info1: 'Drama, Adventure',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5383546/portrait/1920x77081b67de15ac241d9b2d7a8fdd1cf8718.jpg',
        name: 'Fast And Furious x',
        duration: '2hr 15min',
        info1: 'Action, Adventure',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/portrait/1920x770e10444b260b14b4da532489864cf2bac.jpg',
        name: 'Raksha Bamdhan',
        duration: '1hr 45min',
        info1: 'Comedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2006/portrait/1920x77018412675431841267543bb374306dc794aa29f1ea0c46cc491de.jpg',
        name: 'Mission Over Mars',
        duration: 'sreies',
        info1: 'Sience, Biopic',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z562203/portrait/1920x770602c19148c3a4276a779e81c0470efe6.jpg',
        name: 'Antim',
        duration: '2hr 15min',
        info1: 'Action, Crime',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437576/portrait/1920x7702d67c0ceb56847559bdafc21b45fbab9.jpg',
        name: 'I Killed Bapu',
        duration: '1hr 21min',
        info1: 'Drama, Biography',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5441225/portrait/1920x7707bbc508d62834c19aa6af237a942f928.jpg',
        name: 'The Bourne Legacy',
        duration: '2hr 9min',
        info1: 'Action, History',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5444844/portrait/1920x7707880fb0c269743fab16f3d04f0aa965e.jpg",
        name:'Coma',
        duration: '1hr 49min',
        info1:'SciFi, Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418588/portrait/1920x770d539d93af4b5454abe4dd73466f7bfcc.jpg",
        name:'No Surrender',
        duration: '2hr 1min',
        info1:'Action,Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5445228/portrait/1920x77050acb9f8615349ef8a7f82e7b3af231d.jpg",
        name:'My Better Half',
        duration: '2hr 9min',
        info1:'Romance, Comedy',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5426648/portrait/1920x770ec46c09bc48d4ee4b5e3c49dc843de2d.jpg",
        name:'Legacy',
        duration: '2hr 19min',
        info1:'Action,Thriller',
    },
    {
        imageSrc:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5430393/portrait/1920x7700258e98b84cc4546b79c09e8a21a450e.jpg",
        name:'Street Fighter',
        duration: '2hr 9min',
        info1:'Action,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5395713/portrait/1920x7704afb83c4bf5e45488508160f7d309c1a.jpg',
        name: 'Raagni',
        duration: '1hr 53min',
        info1: 'Action,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437494/portrait/1920x770a3c85d3da3b244898ea1597bd25cc0a8.jpg',
        name: 'American Gangster',
        duration: '2hr 30min',
        info1: 'Biography, Crime',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5277822/portrait/1920x7709fd04f29a5d146238694dd3214a2f483d0c24476523a43d48e4e29c563413471.jpg',
        name: 'Uunchai',
        duration: '2hr 43min',
        info1: 'Drama, Adventure',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5414567/portrait/1920x7708f152d81b8a146499d6cd67052c5fef0.jpg',
        name: 'Insifious',
        duration: '1hr 43min',
        info1: 'Horror, Mistery',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/portrait/1920x770dfab228dee41476aae2433aa279962d4.jpg',
        name: 'Janhit Mein Jaari',
        duration: '2hr 21min',
        info1: 'Comedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5281686/portrait/1920x770da1dbae2451c4680b5aa059877f1b782.jpg',
        name: 'Jaanbaaz Hindustaan Ke',
        duration: 'Series',
        info1: 'Action, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z51248/portrait/1920x770f0e2f2c39874449d8cbf3b6f6f3dee7c656afb373ab3413bbd63e9a7d52e2c9a.jpg',
        name: 'Dial 100',
        duration: '1hr 44min',
        info2: '',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z51134/portrait/1920x7708303441ec4eb408ab985713c2a0b658ce7ca790a35e04a04af97626a1718317c.jpg',
        name: 'State of Siege',
        duration: '1hr 44min',
        info1: 'Action, Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5407501/portrait/1920x770330622a2da8e47d4bb15fe5c877958b6.jpg',
        name: 'Spiderman Across the Spider-verse',
        duration: '2hr 14min',
        info1: 'Animation, Action',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z51198/portrait/1920x770a02410f0ba6b487cb2b2309deaff5751.jpg',
        name: '14phere',
        duration: '1hr 51min',
        info1: 'Romance, Comedy',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5383601/portrait/1920x7700df2d956db60468ead35bf14006b52b0.jpg',
        name: 'Love again',
        duration: '1hr 40min',
        info1: 'Comedy, Romance',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/portrait/1920x770f4e0abd987a84c3c87879a34a4ade37310c74fc6562946e68b431a6f756883be.jpg',
        name: 'Attack',
        duration: '1hr 57min',
        info1: 'Action,Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-27132/portrait/1920x770d1edc80582d845ffadbb89aa802c967b5ee1a2f6dd514d9bb193c3c269165cc3.jpg',
        name: 'Kedarnath',
        duration: '1hr 53min',
        info1: 'Romance,Based on true events',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/portrait/1920x770172a8130a0494149952c83cd51f2c783.jpg',
        name: 'Blur',
        duration: '2hr 6min',
        info1: 'Crime,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-399328/portrait/1920x7706e39146f92044090bf4663ba25a59d51.jpg',
        name: 'Radhe',
        duration: '1hr 49min',
        info1: 'Crime, Action',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-8-4434/portrait/1920x770ab206f073c2041758b85deea9f498e64.jpg',
        name: 'K Drama Universe',
        duration: 'Series',
        info1: 'Crime,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/portrait/1920x770372cd1cd2aea4df08015d4644c18e50f.jpg',
        name: 'FORENSIC',
        duration: '2hr 8min',
        info1: 'Crime,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-369273/portrait/1920x7706dbcd377e0ba4e40b8b4533066e64b791b570aed8b7047a6b8593ffac10e0ce9.jpg',
        name: 'Silence',
        duration: '',
        info1: 'Mistery,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3348/portrait/1920x7703325e4c318794a4a9e4d3eee0f6f19a9.jpg',
        name: 'TVF PITCHERS',
        duration: 'Seiers',
        info1: 'Codedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5343289/portrait/1920x770f86b129d5b1a414d862894aa463de86a.jpg',
        name: 'U-TUNR',
        duration: '1hr 41min',
        info1: 'Horror,Thriller',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5326731/portrait/1920x7703b976f331fba40fcb7ac27f47d35230c.jpg',
        name: 'KANJOOS MAKKHICHOOS',
        duration: '1hr 56min',
        info1: 'Comedy, Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299828/portrait/1920x77055a7763b32fd406987ad1bb9b8603b53622ed924e8c348099b22a16ec6ff1a0a.jpg',
        name: 'SARVAM SHAKTHIMAYAM',
        duration: 'Show',
        info1: 'Mythology',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299828/portrait/1920x77055a7763b32fd406987ad1bb9b8603b53622ed924e8c348099b22a16ec6ff1a0a.jpg',
        name: 'LOST',
        duration: '2hr 4min',
        info1: 'Thriller,Drama',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-movie_1511761297/portrait/1920x770580834ad70b34512ba4250d277e68313.jpg',
        name: 'SHAADI MAIN ZAROOR AANA',
        duration: '2hr 1omin',
        info1: 'Drama, Comedy',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5299828/portrait/1920x77055a7763b32fd406987ad1bb9b8603b53622ed924e8c348099b22a16ec6ff1a0a.jpg',
        name: 'UNITED KACCHE',
        duration: 'Series',
        info1: 'Comedy',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-144231/portrait/00144231incove515829865.jpg',
        name: 'HACKED',
        duration: '1hr 43min',
        info1: 'Suspense. Thriller',
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

let trayContentWrap = document.querySelector('.trayContentWrap');

for (let i = 0; i < cardData.length; i++) {
    let card = createCard(cardData[i]);
    trayContentWrap.appendChild(card);
}
