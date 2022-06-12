import avatarUser from '../../../assets/avatar-user.png';
import './Main-students.css';

const MainStudents = () => {
  return (
    <div className='student_card'>
      <div className='card_title'>
        <h2>Fulana Sicrana Beltrana</h2>
      </div>
      <div className='card_info'>
        <div className='user_img'>
          <img src={avatarUser} alt='avatar-user' />
        </div>
        <div className='user_profile'>
          <div>
            <p>Age: 36</p>
            <p>Height: 1.76m</p>
            <p>Weight: 65kg</p>
          </div>
          <div>
            <p>Plan: gold</p>
            <p>Goal: Gain weight</p>
            <p>Trains per week: 5</p>
            <p>Train method: hypertrophy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStudents;