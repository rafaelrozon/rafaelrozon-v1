import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import {
    Label,
    Input,
    Username,
    Row,
    Col,
    SubscribeTo,
    SubscribeWarning,
    Button,
    Message,
    EmailRow,
    InputErrorMessage,
    Container,
} from './styles';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

enum ErrorTypes {
    GENERIC = 'GENERIC',
}

interface NewsletterError {
    type: string;
    msg: string;
}

interface MailchimpResponse {
    result: string;
    msg: string;
}

interface Props {
    onSave: (
        email: string,
        fields: object,
        override: string
    ) => Promise<MailchimpResponse>;
}

interface State {
    result: MailchimpResponse | null;
    error: NewsletterError | null;
}

class Newsletter extends React.Component<Props, State> {
    state: State = {
        result: null,
        error: null,
    };

    signUpUser = async ({ firstName, lastName, email }) => {
        try {
            const { onSave } = this.props;
            const result = await onSave(
                email,
                {
                    FNAME: capitalizeFirstLetter(firstName),
                    LNAME: capitalizeFirstLetter(lastName),
                },
                null
            );

            this.setState({ result });
            return true;
        } catch (error) {
            this.setState({
                error: {
                    type: ErrorTypes.GENERIC,
                    msg: 'Sorry, some error happened.',
                },
            });
            return false;
        }
    };

    render() {
        const { result, error } = this.state;
        const newsletterError = result && result.result === 'error';
        const newsletterSuccess = result && result.result === 'success';
        const msg = result && result.msg;

        return (
            <Container data-testid="newsletter">
                <SubscribeTo>Subscribe to my Newsletter</SubscribeTo>
                <SubscribeWarning>
                    I won't send you spam. Unsubscribe at any time.
                </SubscribeWarning>

                {error && error.msg && (
                    <Message data-testid="generic-error" type="error">
                        {error.msg}
                    </Message>
                )}

                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    onSubmit={this.signUpUser}
                    validationSchema={SignupSchema}
                >
                    <FormikForm>
                        {newsletterError && (
                            <Message
                                data-testid="newsletter-error"
                                type="error"
                                dangerouslySetInnerHTML={{ __html: msg }}
                            />
                        )}
                        {newsletterSuccess && (
                            <Message
                                data-testid="newsletter-success"
                                type="success"
                            >
                                {msg}
                            </Message>
                        )}
                        <Row>
                            <Username>
                                <Col col={6}>
                                    <Label labelFor="firstName">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        data-testid="firstName"
                                        type="text"
                                        name="firstName"
                                    />
                                    <InputErrorMessage
                                        component="div"
                                        name="firstName"
                                    />
                                </Col>
                                <Col col={6}>
                                    <Label labelFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastNamee"
                                        data-testid="lastName"
                                        type="text"
                                        name="lastName"
                                    />
                                    <InputErrorMessage
                                        component="div"
                                        name="lastName"
                                    />
                                </Col>
                            </Username>
                        </Row>
                        <EmailRow>
                            <Label labelFor="email">Email</Label>
                            <Input
                                id="email"
                                data-testid="email"
                                type="email"
                                name="email"
                            />
                            <InputErrorMessage component="div" name="email" />
                        </EmailRow>
                        <Row>
                            <Col>
                                <Button
                                    data-testid="submit"
                                    type="submit"
                                    value="Subscribe"
                                />
                            </Col>
                        </Row>
                    </FormikForm>
                </Formik>
            </Container>
        );
    }
}

export default Newsletter;
