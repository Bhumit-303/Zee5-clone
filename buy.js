var bgDiv = document.getElementById("BGimg");

var imageUrls = [
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-1z5145092/portrait/630x945withlogodb49d696dc1748919877508432bb41ec.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/thekashmirfilespf18in630x94525082023f616c1e20fe744f485e1663f59767ad2.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-1z544916/portrait/630x945withlogo52d7da008d084a69812a24700b4d4ac6.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-1z5117562/portrait/630x945withlogo01dead12ea3041b08625e419bb67840f4b741f8a1c5748c8817cc15b9194e0cc.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-1z529263/portrait/qismat2630x945withlogod6af694e223b4fadad420ce38652c9567aa6060d34b148d9b6c7c0b4dfcd2e3a.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-1z592425/portrait/630x945withlogo1588dcad648934df5a2a1c012a619e66b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-33204/portrait/630x945withlogo58b60013d1dc4b50b8a4fe584c2563d7853f2e08dd52472bb7fcf50ee9737beb.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_205,h_308,c_scale,f_webp,q_auto:eco/resources/0-0-1z562203/portrait/630x945withlogoeac9f808760e4e46aff0b3dd818d7059.jpg" 
];

imageUrls.forEach(function(url) {
    var img = document.createElement("img");
    img.src = url;
    bgDiv.appendChild(img);
});

