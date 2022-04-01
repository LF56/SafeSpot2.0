const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet elementum leo. Fusce eget elit dictum, cursus dolor eget, ornare ipsum. Nunc in neque euismod, volutpat magna eget, ultrices orci. Maecenas vitae eros id justo molestie pretium sed at dolor. Nulla at nisl eget nisi sollicitudin aliquet.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
