const defaultUserInfo = {
  name: 'Demo User',
  image: 'https://seeklogo.com/images/U/uet-lahore-logo-5914237A23-seeklogo.com.png'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}