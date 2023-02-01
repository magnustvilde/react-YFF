import {useState} from 'react';

export default function Age() {
    const [age, setAge] = useState(0);
    const incrementCount = () => {
        setAge(age + 1)
    }
    
    return (
      <div>
        <button onClick={() => {setAge(age - 1)}}>Decrease</button>
        Age component: {age}
        <button onClick={incrementCount}>Increase</button>
      </div>
    );
  }