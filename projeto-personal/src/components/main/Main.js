import MainStudents from './main-students/Main-students';
import './Main.css';

const Main = () => {
  return (
    <main>
      <div className='main__container'>
        <div className='main__title'>
          <div className='main_greeting'>
            <h1>Hello Pedro</h1>
            <p>Browse into your students</p>
          </div>
        </div>
        <div className='cards'>
          <MainStudents />
          <MainStudents />
          <MainStudents />
        </div>
      </div>
    </main>
  );
};

export default Main;