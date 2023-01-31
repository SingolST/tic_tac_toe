import classes from './Square.module.css';

const Square= ({value, onClick}) => {
    return (
      <button className={classes.square} onClick={onClick}>
        {value}
      </button>
    )
  }

export default Square