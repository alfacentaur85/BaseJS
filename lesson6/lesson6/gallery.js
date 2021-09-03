const previewImages = document.getElementsByClassName("preview");
const bigImageWrapper = document.querySelector(".central-slide");
const previewImagesWrapper = document.querySelector(".preview-slides");

const imagesBig = [
    "images\\image1_big.jpg",
    "images\\image2_big.jpg",
    "images\\image3_big.jpg",
    "images\\image4_big.jpg",
    "images\\image5_big.jpg"
];
const imagesSmall = [
    "images\\image1_small.jpg",
    "images\\image2_small.jpg",
    "images\\image3_small.jpg",
    "images\\image4_small.jpg",
    "images\\image5_small.jpg"
];

function changeImage(direction) {
    let parent = document.querySelector(".central-slide");
    let curImageIndex = parent.children.item(0).src[parent.children.item(0).src.indexOf("_big.jpg") - 1] - 1;

    parent = document.querySelector(".central-slide");
    const ImageIndex = getImageIndex(curImageIndex, direction);
    parent.children.item(0).src = imagesBig[ImageIndex];
    
}

let divLeftArrow = document.getElementsByClassName('left-arrow')[0];
divLeftArrow.addEventListener('click', function (event) {
    changeImage("left");
});
divLeftArrow.addEventListener('mousedown', function (event) {
    document.getElementById("la").src = "images/arrow_left_blue.png";
});
divLeftArrow.addEventListener('mouseup', function (event) {
    document.getElementById("la").src = "images/arrow_left_green.png";
});

let divRightArrow = document.getElementsByClassName('right-arrow')[0];
divRightArrow.addEventListener('click', function (event) {
    changeImage("right");
    
});
divRightArrow.addEventListener('mousedown', function (event) {
    document.getElementById("ra").src = "images/arrow_right_blue.png";
});
divRightArrow.addEventListener('mouseup', function (event) {
    document.getElementById("ra").src = "images/arrow_right_green.png";
});

function getImageIndex(curImageIndex, directon) {
    
    if (directon === "left") {
        if ((curImageIndex > 0) && (curImageIndex <= imagesBig.length - 1)) {
            curImageIndex = curImageIndex - 1;
            return curImageIndex;
        }
        if (curImageIndex === 0) {
            curImageIndex = imagesBig.length - 1;
            return curImageIndex;
        }
    }
    else {
        if ((curImageIndex >= 0) && (curImageIndex < imagesBig.length - 1)) {
            curImageIndex = curImageIndex + 1;
            return curImageIndex
        }
        if (curImageIndex === imagesBig.length - 1) {
            curImageIndex = 0;
            return curImageIndex;
        }
    }
}

const setUpNewBigImages = (smallImageSrc) => {
    const bigImageSrc = smallImageSrc.replace("_small.jpg", "_big.jpg");

     const newBigImage = document.createElement("img");
     newBigImage.src = bigImageSrc;

     bigImageWrapper.innerHTML = "";
     bigImageWrapper.appendChild(newBigImage);
    
};

const setUpNewActivePreviewImage = (event) => {
  const activePreviewImage = document.querySelector(".preview-slides .active");
  activePreviewImage.classList.remove("active");

  event.target.parentElement.classList.add("active");
};

const galleryHandler = (event) => {
  if (event.target === event.currentTarget) return;
  setUpNewBigImages(event.target.src);
  setUpNewActivePreviewImage(event);
};

previewImagesWrapper.addEventListener("click", galleryHandler);
