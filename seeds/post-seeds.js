const { Post } = require('../models');

const postdata = [
  {
    title: 'Career change ',
    content: 'I want to change careers but Im afarid of what will come after? behind fear is the person you want to be!! So im willing to go through with the career change.',
    user_id: 10
  },
  {
    title: ' The day I saw Will Smith slap Chris Rock ',
    content: ' Gas prices are up & Will smith slapping Chris Rock in March, I wanna how he will feel in august... Either way that man is going through a deeper menatl issue that steem from two years of being the back end of everyones jokes, & he finally SNAPPED.',
    user_id: 8
  },
  {
    title: 'The day they stormed the Nations capital.',
    content: 'A terrible day in US history & no one was held accountable, Am I Surprised? No .',
    user_id: 1
  },
  {
    title: 'Thoughts of living in a broken home.',
    content: 'I feel like I never got the love I deserved from my parents. They alwasy left me home alone or never showed up to any of my sporting events. That lack of love could affect me from loving my kids the right way & I dont want that to be the case!! I will do everythign in my power to make sure I dont repeat the cycle.',
    user_id: 4
  },
  {
    title: 'Day 1 of my remote job hits different... here is why.',
    content: 'I get to stay home!! the end.',
    user_id: 7
  },
  {
    title: 'Challenges of going through a Bootcamp.',
    content: 'Working a full time job & taking care of kids is already alot to deal with, Now addign a Bootcamp to the mix and im overwhelmed. I have had thoughts of quitting but I never do because I always finish what i started. But damn this boot camp stressful!! not enough hours in the day.',
    user_id: 4
  },
  {
    title: ' The day in the life of a Fullstack Developer.',
    content: 'Code , code, & more code and using Stack Overflow, W3schools & Indian Youtuber.',
    user_id: 1
  },
  {
    title: ' A reminder that we dont all start in the same place.',
    content: ' If you woke uptoday be thankful, You conquered the night!! you have an Angel watching over you.',
    user_id: 1
  },
  {
    title: ' I conquered today.',
    content: 'I survived another 8hr shift with my nagging superviors and annoying coworkers. I really cant wait till the day Im able to put my 2 weeks in and start my career as a developer.',
    user_id: 9
  },
  {
    title: 'is Chivalry dead? or we in a new Generation.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 5
  },
  {
    title: 'Childhood trauma that haunt adults.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title: ' Wish my parents showed me affection when I was little.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 10
  },
  {
    title: 'Russia attack on Ukraine.',
    content: 'I hope this doesnt start WW3, I just got mu life together and I dont want it to end already.',
    user_id: 8
  },
  {
    title: 'My trip to italy .',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title: ' What does it mean to channel Mamba Mentality.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title:
      ' Dear diary, today they created birth control for men... The game will never be the same again.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 7
  },
  {
    title: ' Software developer vs Cuber security.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 6
  },
  {
    title: ' Did the titanic really sink or its just floating under water.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 4
  },
  {
    title: ' A good title is the title of a successful book.',
    content: 'Harry Potter.',
    user_id: 6
  },
  {
    title: ' Last of a dying breed.',
    content: 'The fact that we even finsihed this project is a feat in itself!!.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
