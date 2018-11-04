export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore_db = getFirestore();
    firestore_db
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Stan',
        authorLastName: 'Ninja',
        authorId: 12345,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: CREATE_PROJECT, project });
      })
      .catch(err => {
        dispatch({ type: CREATE_PROJECT_ERROR, err });
      });
  };
};
