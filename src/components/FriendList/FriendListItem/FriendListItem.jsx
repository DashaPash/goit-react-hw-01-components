import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`} />
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
