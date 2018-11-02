const initState = {
  projects: [
    { id: '1', title: 'Master Javascript', content: 'blah blah blah' },
    { id: '2', title: 'Conquer React', content: 'blah blah blah' },
    { id: '3', title: 'GraphQL Ninja', content: 'blah blah blah' }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
