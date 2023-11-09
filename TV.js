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





// banner logic
let TVbanner = [
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-127/cover/1920x770b5d6eeb799c841749bd193a4b226edd8.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130241/cover/1920x7701016d83494ad4b2db9d4e7960b533612.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3510/cover/1920x7707108ee66d22c4e8395a96ed843ac62dc.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5383506/cover/1920x7700eb9ef6341e24828bdbc81d1c26815de.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5247981/cover/1920x770e174171aa5ad44f495b256aa5e09e85e.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x77097a8aab5547c42148de43d418feb3555.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x770d23736a4930a419387d3a9fee10da7ce.jpg",
];

let image = document.querySelector("#banner");
let prevButton = document.querySelector("#prevBtn");
let nextButton = document.querySelector("#nextBtn");
let currentIndex = 0;

function updateImage() {
    image.setAttribute("src", TVbanner[currentIndex]);
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= TVbanner.length) {
        currentIndex = 0;
    }
    updateImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = TVbanner.length - 1;
    }
    updateImage();
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

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


// card in the TV section
let cardData = [
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3392/portrait/1920x770d23736a4930a419387d3a9fee10da7ce.jpg',
        name:'Bhagya Lakshmi',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-366/portrait/1920x77097a8aab5547c42148de43d418feb3555.jpg',
        name:'Kundali Bhagya',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130241/portrait/1920x7701016d83494ad4b2db9d4e7960b533612.jpg',
        name:'Radha Mohan',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-127/portrait/1920x770b5d6eeb799c841749bd193a4b226edd8.jpg',
        name:'Kumkum Bhagya',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5247981/portrait/1920x770e174171aa5ad44f495b256aa5e09e85e.jpg',
        name:'Rab Se Hai Dua',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5423205/portrait/1920x770422547ec9cf748a78a29c4d99530818c.jpg',
        name:'Kyuki Saas Maa Bahu Beti Hoti Hai',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5383506/portrait/1920x7700eb9ef6341e24828bdbc81d1c26815de.jpg',
        name:'Shiv Shakti',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3510/portrait/1920x7707108ee66d22c4e8395a96ed843ac62dc.jpg',
        name:'Meet',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5266104/portrait/1920x7705826f5c7603a45b6b94d856e224ab8f9.jpg',
        name:'Maitree',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5416889/portrait/1920x7703270f90bdea84b71b195bb789a97f4e8.jpg',
        name:'Sa Re Ga Ma Pa',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5214664/portrait/1920x770a7ed40fc35ff494696941ed8788562eb.jpg',
        name:'Main hun Aparajita',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5304958/portrait/1920x7706233324748e1417b86bde31299826fee.jpg',
        name:'Lag Ja Gale',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5319038/portrait/1920x77026c21ad336e141dfb67eb529e069314c.jpg',
        name:'Z cine Awards',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5185799/portrait/1920x770c1ee4b160aee4d6293ce925e3be6693e.jpg',
        name:'Sanjog',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5101301/portrait/1920x770910a9ef38ddd4048b010e71666000049f46baafce9f64b74b19f0e9804a0911e.jpg',
        name:'Mithai',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z525220/portrait/1920x770787ca3eff34e46dc8591e6af985e6722.jpg',
        name:'Tere Bina Jiya Jaye Na',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5194280/portrait/1920x770cbd1a5e703ce451e8ed35af78aec9da0.jpg',
        name:'Sa Re Ga Ma Pa Lil Champs',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z520450/portrait/1920x7707be825d8e0b149478aaa493d90ecf34f.jpg',
        name:'Kaashibai Bajirao Ballal',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5318988/portrait/1920x770cec74f31178a44b1aa03e7a8339f8944.jpg',
        name:'Chef VS Fridge',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z560749/portrait/1920x77050a0afd8b2b341bd91d2ad4c0d7231b0.jpg',
        name:'Swarna Swar Bharat',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5210788/portrait/1920x770bc99ee7ff53a443fbf8dda1c9682c9a8.jpg',
        name:'Zee Rishtey Awards',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5155964/portrait/1920x7705ffee16e17234f2f99e7afc5547cebaf.jpg',
        name:'D.I.D. Super Moms',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3497/portrait/1920x7705c2503a61641427e8e4f2a4c54609f8c.jpg',
        name:'Sa Re Ga Ma Pa',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z587441/portrait/1920x7707d249a2952d6465994cb840d13d71863.jpg',
        name:'D.I.D. LiL Champs',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3137/portrait/1920x770afffb51b6ec248b4b86b9a0c7d256266.jpg',
        name:'Teri Meri Ek Jindri',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z546884/portrait/1920x7704010358abd4c48de908901a3ebe56d4d.jpg',
        name:'Is Mod Se Jaate Hai',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z52149/portrait/1920x770d24b109e2013429f8fda99ecffe8d86e.jpg',
        name:'Agar Tum Na Hote',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3522/portrait/1920x7708e597115cbe34523a60336c0eb541c57.jpg',
        name:'Rishton Ka Manjha',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2583/portrait/1920x7700db22d566c7d48eab2e03259ea1caf00.jpg',
        name:'Kyun Rishton Me Katti Batti',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3420/portrait/1920x7709259cf57f20e47ca9263153826a5c857.jpg',
        name:'Zee Comedy Show',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3008/portrait/1920x7709428d99d4cc14aa18d12bc98b92adbb0.jpg',
        name:'Apna Time Bhi Aayega',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3008/portrait/1920x7709428d99d4cc14aa18d12bc98b92adbb0.jpg',
        name:'Kurbaan Hua',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3007/portrait/063007incover1685064375.jpg',
        name:'Good News',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_385599855/portrait/1920x770278178d05ca445dc8f8acd6398da66d7.jpg',
        name:'Tujhse Hai Raabta',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3359/portrait/063359cover.jpg',
        name:'The Happy Hour',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3126/portrait/1920x770806848579.jpg',
        name:'Indian Pro Music Ligue',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3277/portrait/1920x7708e6261d811ee479b8781e6e0c5381dc4.jpg',
        name:'Chef VS Fridge',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3006/portrait/1920x77040118dc938c745a0864cba325d8da7f9.jpg',
        name:'Bhramarakshas',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_1603815665/portrait/1920x77051139f10f7894807b542e0099c131485.jpg',
        name:'Guddan Tumse Na Ho Payega',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-446/portrait/06446cover574026322.jpg',
        name:'Jamai Raja',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_691077998/portrait/1920x770976698187.jpg',
        name:'Ishq Subhanallah',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-311/portrait/piyaalbela1920x7927545172.jpg',
        name:'Piya Albela',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1171_1688491931/portrait/1920x7701528717409.jpg',
        name:'Manmohini',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2116/portrait/mmwmp1920x770193541311.jpg',
        name:'Movie Masti With Manish Paul',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-271/portrait/1920x7701861fb5fd507424eb91bf097bb49e0c4.jpg',
        name:'Jindagi Ki Mehek',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-137/portrait/1920x77078c2679d6c6d42a680f783f670277a36.jpg',
        name:'Saat Phere',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-133/portrait/1920x770d1d34a3367e7441ababdbb64e307fb12.jpg',
        name:'Pavitra Rishta',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-637/portrait/jeetgayitopiyam1334579165.jpg',
        name:'Jeet Gayi To Piya Mere',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-135/portrait/1920x7708b572ba26c2b45969a993ccb59e197b9.jpg',
        name:'Qubool Hai',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_1591012925/portrait/1920x7701096821372.jpg',
        name:'Aapke aa Jaane Se',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-447/portrait/1920x770086b8e66e4e041e998bb1c0656bfc9f5.jpg',
        name:'Jodha Akbar',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-224/portrait/jeenaisikanaamh1521949960.jpg',
        name:'Jeena issi Ka Naam Hai',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1917/portrait/haiwaan1920x770153769546.jpg',
        name:'Haiwaan',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-457/portrait/06457cover1424449120.jpg',
        name:'Tashan E Ishq',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-33/portrait/1920x7702012363030.jpg',
        name:'Banegi Apni Baat',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-117/portrait/06117cover1654644659.jpg',
        name:'Doli Armaano KI',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-440/portrait/1920x770643509247.jpg',
        name:'Ek Tha Raja EK Thi Raani',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-143/portrait/06143cover.jpg',
        name:'Yaahan Main Ghar Ghar Kheli',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1789/portrait/did11920x770.jpg',
        name:'DID Battle Of Champions',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2526/portrait/1920x7701135326516.jpg',
        name:'Sa Re Ga Ma Pa Little Champs',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-277/portrait/06277cover0.jpg',
        name:'Yaaro Ki Baarat',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-3219/portrait/063219incover.jpg',
        name:'Punar Vivah',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-131/portrait/06131cover.jpg',
        name:'Naagin',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1964/portrait/lagaoboli1920x7700ac9e0999a984ad3acc1375f2a76196d.jpg',
        name:'Lagao Boli',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-300/portrait/1920x7701558563901558563909e660834d6014e26bb303fb89dc5b3aa.jpg',
        name:'Ek Vivah Aisa Bhi',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-126/portrait/1920x7701769314032.jpg',
        name:'Kaala Teeka',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_1658698319/portrait/juzzbaatt11920x770.jpg',
        name:'Juzz Baat',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-134/portrait/1920x770a94de153d05c4b7e80520b3f04e629d8.jpg',
        name:'Punar Vivah',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-124/portrait/1920x7702fb26e7faf494a9da37ac5474b8e6e217c7a66620b3748a1af07d0a72f8a0389.jpg',
        name:'Jhasi Ki Raani',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-205/portrait/06205cover.jpg',
        name:'Indias Best DRamebaaz',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-122/portrait/06122cover.jpg',
        name:'I Can Do That',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-250/portrait/1920x7701df99345a4b04dd98f410b22961c97a1.jpg',
        name:'Hum Paach',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-121/portrait/06121cover.jpg',
        name:'Hitler Didi',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-120/portrait/1920x7701812983412.jpg',
        name:'Hip Hip Hurre!',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-372/portrait/1920x770123d6450005644159d6768a7d3e22f569df3efdc40bc41afae3e615452ca17ff.jpg',
        name:'BeguSarai',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-319/portrait/1920x7701501891863.jpg',
        name:'Betiyaan',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-621/portrait/06621cover2086485210.jpg',
        name:'Fear Files',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-118/portrait/06118cover724173622.jpg',
        name:'Fear Files',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-600/portrait/06600_cover_4613075.jpg',
        name:'Fear Files',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-539/portrait/06539cover459691629.jpg',
        name:'Fear Files',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-2987/portrait/1920x770417895676.jpg',
        name:'Sa Re Ga Ma Pa Little Champs',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-355/portrait/zeehorrorshow1920x770.jpg',
        name:'The Zee Horror Show',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-212/portrait/06212cover0.jpg',
        name:'The Dramebazz Company',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-1948/portrait/03102019creativ135007196.jpg',
        name:'Delhi Darlings',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_2022210918/portrait/kaleerein1920x770.jpg',
        name:'Kaleerain',
        info1:'Serial',
    },
    {
        imageSrc: 'https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-107/portrait/06107cover2134346779.jpg',
        name:'Banu Main Teri Dulhan',
        info1:'Serial',
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

    // let duration = document.createElement('li');
    // duration.textContent = `Duration: ${data.duration}`;
    // card.appendChild(duration);

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


