import css from './Profile.module.css'
import PropTypes from 'prop-types'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className={css.avatar}/>
    <p className={css.name}>Petra Marica</p>
    <p className={css.tag}>@pmarica</p>
    <p className={css.location}>Salvador, Brasil</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>1000</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>2000</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>3000</span>
    </li>
  </ul>
</div>
    )
}

Profile.propType = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
     location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
              stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
}