import Age from './Age';

export default function Details(props) {
    return (
      <div>
        {props.name} - {props.number}
        <Age />
        <p></p>
      </div>
    );
  }