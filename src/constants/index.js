
const items = [
    {
      id: 1,
      categoryId: 1,
      name: 'item1',
      price: 100,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac risus lorem. Duis convallis ligula a arcu volutpat, nec pharetra lacus tincidunt. Nulla facilisi. Aliquam tempus consequat augue ut tempus. Donec et leo velit. Sed porta pulvinar elementum. Aliquam eu neque mauris. Duis eget tincidunt tellus. Ut lacinia lobortis justo, eget lacinia ipsum gravida ac. Nunc sit amet lectus nulla. Praesent vitae pellentesque dui. Aliquam enim dui, faucibus quis sodales quis, aliquam eget velit. In aliquam velit libero, id varius metus dapibus et. Etiam eget enim dapibus, porta arcu eu, elementum nisl. Cras consectetur neque urna, vitae accumsan dolor sollicitudin eu. Suspendisse sit amet lorem lorem.'
    },
    {
      id: 2,
      categoryId: 1,
      name: 'item2',
      price: -10,
      details: 'In dictum vitae enim in varius. Curabitur iaculis velit ligula, ut mollis tellus bibendum quis. Morbi aliquam odio odio, in dignissim diam scelerisque sed. Sed vitae ex vel turpis laoreet ultricies. Cras ut elit at quam maximus vestibulum. Cras maximus justo varius ligula eleifend, sed tincidunt sem mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra enim sit amet vehicula rhoncus. Sed convallis iaculis orci at mollis. Nullam interdum ac lectus vitae ultricies.'
    },
    {
      id: 3,
      categoryId: 2,
      name: 'item3',
      price: 13,
      details: 'Nullam eget rutrum augue, non vulputate nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tempus elit vel arcu dapibus pellentesque. Vestibulum at diam nisi. Etiam sagittis turpis sed posuere blandit. Morbi posuere dignissim erat. Mauris velit arcu, fringilla at velit ac, congue imperdiet est. Duis ut ipsum ac nunc faucibus faucibus. Nunc tincidunt elementum imperdiet.'
    },
    {
      id: 4,
      categoryId: 2,
      name: 'item4',
      price: 23,
      details: 'Nulla consequat tempus tortor, et pretium nisl blandit eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce mattis justo nec arcu auctor, et maximus tortor commodo. Curabitur sagittis eu leo ac facilisis. Duis tincidunt malesuada diam, nec laoreet purus. Vestibulum in sem tempor, rhoncus dolor a, faucibus erat. Sed et suscipit urna, at imperdiet ligula. Etiam sit amet arcu rutrum, elementum tortor id, laoreet turpis. Suspendisse vehicula hendrerit lorem vel volutpat. Aliquam a risus posuere, porttitor risus id, blandit eros. Donec malesuada dui ut rhoncus molestie. Quisque urna sapien, scelerisque elementum cursus sit amet, molestie eget est. Etiam quis vestibulum libero, quis luctus arcu. Nulla convallis et velit et euismod. In hac habitasse platea dictumst.    '
    },
  ];
  
  
  const catgories = [
    {
        id: 1,
        name: 'Cremas'
    },{
        id: 2,
        name: 'Perfumes mujer'
    },{
        id: 3,
        name: 'Perfumes hombres'
    },
  ];
    


  const people = [
    {
      name: 'Crema Leslie',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      categoryId: 1,
      id: 1,
    },
    {
      name: 'Paloma',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      categoryId: 2,
      id:2
    },
    {
      name: 'Hugo Boss',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
      categoryId: 3,
      id:3
    },
    {
      name: 'Ponds',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      categoryId: 1,
      id:4
    },
    {
      name: 'Dove',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
      categoryId: 2,
      id:5
    },
    {
      name: 'Kevin',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
      categoryId: 3,
      id:6
    },
  ];

  export default people;