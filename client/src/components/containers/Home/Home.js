import contactInputs from '../../../contactInputs';

import Content from '../../presentationals/Content/Content';
import Form from '../../presentationals/UI/Form/Form';
import Background from '../../presentationals/UI/Background/Background';

import classes from './Home.module.css';

const Home = () => {

    const onSubmit = ({ formData: contactInfo}) => {
        console.log('contact info: ', contactInfo);
    }

    return (
        <div className={classes.Home}>
            <Background />
            <Content />
            <Form
                title={'Want to get the full version?'}
                subTitle="Fill in the form below"
                inputs={contactInputs}
                submitText="Download now >>"
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default Home;