import classes from './Background.module.css';

const Background = () => {
    return (
        <div className={classes.Background}>
            <div className={classes.LeftSqure} />
            <div className={classes.TopSqure} />
            <div className={classes.BottomSqure} />
            <div className={classes.BottomX} />
            <div className={classes.Circle} />
            <div className={classes.RightX} />
        </div>
    );
};

export default Background;