import LikeButton from './like-button';

function Header({ title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
     
      <h1 style={{
        fontFamily: 'Comic Sans MS, cursive',
        color: '#dc2626'
      }}>
        {title ? title : 'Default title'}
      </h1>
     
    </div>
  );
}
 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton', 'Siddhu Dhumale'];
 
  return (
    <div >
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
 
      <LikeButton />
      
    </div>
  );
}