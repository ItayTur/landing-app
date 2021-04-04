import contactInputs from '../../../contactInputs';
import contactAxios from '../../../contactAxios';

import Content from '../../presentationals/Content/Content';
import Form from '../../presentationals/UI/Form/Form';
import Background from '../../presentationals/UI/Background/Background';

import classes from './Home.module.css';

const Home = () => {

    const onSubmit = async ({ formData: contactInfo }) => {
        try {
            const { data: newContact } = await contactAxios.post("/data", contactInfo);
            const { data: urlInfo } = await contactAxios.get("/file", {
                params: {
                    id: newContact.id
                }
            });
            const link = document.createElement('a');
            link.href = urlInfo.link;
            link.download = "joonkofile";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.log(error);
        }
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