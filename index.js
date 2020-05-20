
console.clear();

const cards = [
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/kirkjufell.jpg',
        'imgAlt': 'Kirkjufell',
        'header': 'Kirkjufell',
        'description': 'Park up in the little seaside town of Grundarfj�r�ur and follow the hour-and-a-half hiking trail to Kirkjufell�s summit.'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/table-mountain-1170x731.jpg',
        'imgAlt': 'Table Mountain',
        'header': 'Table Mountain',
        'description': 'One of the world�s most famous pinnacles, Table Mountain watches over the South African city of Cape Town from 1,085 metres at its highest point.'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-huangshan-1170x780.jpg',
        'imgAlt': 'Mount Huangshan (Yellow Mountain)',
        'header': 'Mount Huangshan',
        'description': 'The mountain resembles a turreted fortress, perched ominously above the spruce and fir trees in the Canadian Rockies.'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/matterhorn-1170x780.jpg',
        'imgAlt': 'Matterhorn',
        'header': 'Matterhorn',
        'description': 'This Alpine peak spans the border between Switzerland and Italy. At 4,478 metres it�s smaller than the famed Mont Blanc (4,810 metres).'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-fuji-1170x780.jpg',
        'imgAlt': 'Mount Fuji',
        'header': 'Mount Fuji',
        'description': 'If you�re down for the hike, choose between one of the four trails that lace the mountain. The Yoshida trail is most popular choice and buses whisk you right from Tokyo to the trailhead.'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-cook-1170x778.jpg',
        'imgAlt': 'Aoraki/Mount Cook',
        'header': 'Aoraki/Mount Cook',
        'description': 'The name Mount Cook was given to the peak by European settlers. But native peoples had always known it as Aoraki.'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/mount-everest-1170x780.jpg',
        'imgAlt': 'Mount Everest',
        'header': 'Mount Everest',
        'description': 'The mother of all mountains, she rises to more than 8,848 metres, jutting out of the Himalayas, on the Nepal-Tibet border.'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/kilimanjaro-1170x783.jpg',
        'imgAlt': 'Kilimanjaro',
        'header': 'Kilimanjaro',
        'description': 'Kilimanjaro is actually a volcano made up of a trio of peaks. Though if you�re planning a trip, you�ll be glad to hear it�s dormant � the last eruption happened some 360,000 years ago.'
    },
    {
        'imgUrl': 'https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2019/01/cradle-1170x720.jpg',
        'imgAlt': 'Cradle Mountain',
        'header': 'Cradle Mountain',
        'description': 'It�s one of Tasmania�s most popular tourist attractions and is around an hour-and-a-half drive from the busy city of Devonport.'
    }
]


for(var i  = 0; i<cards.length;i++){
// get the main-container by id
  var mainDiv = document.getElementById('grid');

  var firstDiv = document.createElement('div');
  firstDiv.classList.add('gridItem');
  mainDiv.appendChild(firstDiv);

var secDiv = document.createElement('div');
 secDiv.classList.add('card');

var image = document.createElement('img');
image.classList.add('cardImg');
  image.src = cards[i].imgUrl;
  image.alt = cards[i].imgAlt;
secDiv.appendChild(image);
firstDiv.appendChild(secDiv);

var thirdDiv = document.createElement('div');
thirdDiv.classList.add('cardContent')

var heading = document.createElement('h1');
heading.classList.add('cardHeader');
heading.innerText = cards[i].header;
var para = document.createElement('p');
para.classList.add('cardText');
para.innerText = cards[i].description;
thirdDiv.appendChild(heading);
thirdDiv.appendChild(para);
secDiv.appendChild(thirdDiv);

}










