// Sample crop data with photos
const crops = [
    // Rainy season
    { name: "Sugarcane", soil: "Red", season: "Rainy", photo: "img/sugarcane.jpg" },
    { name: "Rice", soil: "Red", season: "Rainy", photo: "img/rice.jpg" },
    { name: "Turmeric", soil: "Red", season: "Rainy", photo: "img/turmeric.jpg" },
    { name: "Ginger", soil: "Red", season: "Rainy", photo: "img/ginger.jpg" },

    { name: "Cotton", soil: "Black", season: "Rainy", photo: "img/cotton.jpg" },
    { name: "Toor Dal", soil: "Black", season: "Rainy", photo: "img/toor.jpg" },
    { name: "Moong Dal", soil: "Black", season: "Rainy", photo: "img/moong.jpg" },
    { name: "Urad Dal", soil: "Black", season: "Rainy", photo: "img/urad.jpg" },

    { name: "Coffee", soil: "Laterite", season: "Rainy", photo: "img/coffee.jpg" },
    { name: "Coconut", soil: "Laterite", season: "Rainy", photo: "img/coconut.jpg" },
    { name: "JackFruit", soil: "Laterite", season: "Rainy", photo: "img/jackFruit.jpg" },
    { name: "Cashew", soil: "Laterite", season: "Rainy", photo: "img/cashew.jpg" },

    { name: "Beetroot", soil: "Alluvial", season: "Rainy", photo: "img/beetroot.jpg" },
    { name: "Ginger", soil: "Alluvial", season: "Rainy", photo: "img/ginger.jpg" },
    { name: "Cauliflower", soil: "Alluvial", season: "Rainy", photo: "img/cauliflower.jpg" },
    { name: "Cowpea", soil: "Alluvial", season: "Rainy", photo: "img/cowpea.jpg" },
    
// --------------------------------------------------------------------------------------------------
//Summer season

    { name: "Soybean", soil: "Red", season: "Summer", photo: "img/soybean.jpg" },
    { name: "Maize", soil: "Red", season: "Summer", photo: "img/maize.jpg" },
    { name: "Cotton", soil: "Red", season: "Summer", photo: "img/cotton.jpg" },
    { name: "Groundnut", soil: "Red", season: "Summer", photo: "img/groundnut.jpg" },

    { name: "Cotton", soil: "Black", season: "Summer", photo: "img/cotton.jpg" },
    { name: "Soybean", soil: "Black", season: "Summer", photo: "img/soybean.jpg" },
    { name: "Jowar", soil: "Black", season: "Summer", photo: "img/jowar.jpg" },
    { name: "Castor", soil: "Black", season: "Summer", photo: "img/castor.jpg" },

    { name: "Ragi", soil: "Laterite", season: "Summer", photo: "img/ragi.jpg" },
    { name: "Groundnut", soil: "Laterite", season: "Summer", photo: "img/groundnut.jpg" },
    { name: "Bajra", soil: "Laterite", season: "Summer", photo: "img/bajra.jpg" },
    { name: "Jowar", soil: "Laterite", season: "Summer", photo: "img/jowar.jpg" },

    { name: "Rice", soil: "Alluvial", season: "Summer", photo: "img/rice.jpg" },
    { name: "Banana", soil: "Alluvial", season: "Summer", photo: "img/banana.jpg" },
    { name: "Cotton", soil: "Alluvial", season: "Summer", photo: "img/cotton.jpg" },
    { name: "Pulp", soil: "Alluvial", season: "Summer", photo: "img/pulp.jpg" },

    // --------------------------------------------------------------------------------------------------
    // Spring season

    { name: "Tomato", soil: "Red", season: "Spring", photo: "img/tomato.jpg" },
    { name: "Mustard", soil: "Red", season: "Spring", photo: "img/mustard.jpg" },
    { name: "Potato", soil: "Red", season: "Spring", photo: "img/potato.webp" },
    { name: "Beans", soil: "Red", season: "Spring", photo: "img/beans.jpg" },

    { name: "Cotton", soil: "Black", season: "Spring", photo: "img/cotton.jpg" },
    { name: "Jowar", soil: "Black", season: "Spring", photo: "img/jowar.jpg" },
    { name: "Soybean", soil: "Black", season: "Spring", photo: "img/soybean.jpg" },
    { name: "Toor Dal", soil: "Black", season: "Spring", photo: "img/toor.jpg" },

    { name: "Pineapple", soil: "Laterite", season: "Spring", photo: "img/pineapple.jpg" },
    { name: "JackFruit", soil: "Laterite", season: "Spring", photo: "img/jackFruit.jpg" },
    { name: "Capsicum", soil: "Laterite", season: "Spring", photo: "img/capsicum.jpg" },
    { name: "Radish", soil: "Laterite", season: "Spring", photo: "img/radish.jpg" },

    { name: "Sugarcane", soil: "Alluvial", season: "Spring", photo: "img/sugarcane.jpg" },
    { name: "Banana", soil: "Alluvial", season: "Spring", photo: "img/banana.jpg" },
    { name: "Rice", soil: "Alluvial", season: "Spring", photo: "img/rice.jpg" },
    { name: "Watermelon", soil: "Alluvial", season: "Spring", photo: "img/watermelon.jpg" },

    // --------------------------------------------------------------------------------------------------
    // Winter season

    { name: "Wheat", soil: "Red", season: "Winter", photo: "img/wheat.jpg" },
    { name: "Onion", soil: "Red", season: "Winter", photo: "img/onion.jpg" },
    { name: "Garlic", soil: "Red", season: "Winter", photo: "img/garlic.jpg" },
    { name: "Potato", soil: "Red", season: "Winter", photo: "img/potato.webp" },

    { name: "Pulses", soil: "Black", season: "Winter", photo: "img/pulses.jpg" },
    { name: "Wheat", soil: "Black", season: "Winter", photo: "img/wheat.jpg" },
    { name: "Sunflower", soil: "Black", season: "Winter", photo: "img/sunflower.jpg" },
    { name: "Mustard", soil: "Black", season: "Winter", photo: "img/mustard.jpg" },

    { name: "Barley", soil: "Laterite", season: "Winter", photo: "img/barley.jpg" },
    { name: "Green gram", soil: "Laterite", season: "Winter", photo: "img/green.jpg" },
    { name: "Jowar", soil: "Laterite", season: "Winter", photo: "img/jowar.jpg" },
    { name: "Rubber", soil: "Laterite", season: "Winter", photo: "img/rubber.avif" },

    { name: "Rice", soil: "Alluvial", season: "Winter", photo: "img/rice.jpg" },
    { name: "Wheat", soil: "Alluvial", season: "Winter", photo: "img/wheat.jpg" },
    { name: "Barley", soil: "Alluvial", season: "Winter", photo: "img/barley.jpg" },
    { name: "Sunflower", soil: "Alluvial", season: "Winter", photo: "img/sunflower.jpg" },

];

// Function to filter crops based on soil type and season
function filterCrops(soilType, season, cropName) {
    let filteredCrops = crops;
    if (soilType && season) {
        filteredCrops = filteredCrops.filter(crop => crop.soil === soilType && crop.season === season);
    }
    if (cropName) {
        filteredCrops = filteredCrops.filter(crop => crop.name.toLowerCase().includes(cropName.toLowerCase()));
    }
    return filteredCrops;
}

// Function to display filtered crops
function displayCrops(crops) {
    const cropGallery = document.querySelector('.crop-gallery');
    cropGallery.innerHTML = '';
    crops.forEach(crop => {
        const cropDiv = document.createElement('div');
        cropDiv.classList.add('crop-item');
        cropDiv.innerHTML = `
            <img src="${crop.photo}" alt="${crop.name}">
        `;
        cropDiv.addEventListener('click', () => {
            // Redirect to another page when crop photo is clicked
            window.location.href = `crop-details.html?crop=${crop.name}`;
        });
        cropGallery.appendChild(cropDiv);
    });
}

// Event listener for search button click
document.getElementById('search-btn').addEventListener('click', () => {
    const soilType = document.getElementById('soil-select').value;
    const season = document.getElementById('season-select').value;
    const cropName = document.getElementById('search-bar').value.trim();

    const filteredCrops = filterCrops(soilType, season, cropName);
    displayCrops(filteredCrops);
});
