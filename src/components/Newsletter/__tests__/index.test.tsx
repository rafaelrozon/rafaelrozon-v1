import { render, fireEvent, screen, waitFor } from '../../../utils/testUtils';
import * as React from 'react';
import Newsletter from '..';

const fireChange = (element, value) => {
    fireEvent.change(element, { target: { value } });
}

describe('Newsletter', () => {
    it('should sign user to newsletter', async () => {
        const onSaveMock = jest.fn();
        const firstName = 'bob';
        const lastName = 'john';
        const email = 'bob@gmail.com';
        const { container, getByTestId } = render(
            <Newsletter onSave={onSaveMock} />
        );
        const firstNameInput = getByTestId('firstName');
        const lastNameInput = getByTestId('lastName');
        const emailInput = getByTestId('email');
        const btn = getByTestId('submit');

        await waitFor(() => {
            fireChange(firstNameInput, firstName);
            fireChange(lastNameInput, lastName);
            fireChange(emailInput, email);

            btn.click();
        })

        const payload = {
            FNAME: 'Bob',
            LNAME: 'John',
        };
        expect(onSaveMock).toBeCalledWith(email, payload, null);
        expect(container).toMatchSnapshot();
        expect(firstNameInput).toBeTruthy();
        expect(lastNameInput).toBeTruthy();
        expect(emailInput).toBeTruthy();
        expect(btn).toBeTruthy();
    });

    it('should display error message if api fails', async () => {
        const onSaveMock = jest.fn(async () => ({
            result: 'error',
            msg: 'api failed',
        }));
        const firstName = 'bob';
        const lastName = 'john';
        const email = 'bob@gmail.com';
        const { container, getByTestId } = render(
            <Newsletter onSave={onSaveMock} />
        );

        const firstNameInput = getByTestId('firstName');
        const lastNameInput = getByTestId('lastName');
        const emailInput = getByTestId('email');
        const btn = getByTestId('submit');

        fireChange(firstNameInput, firstName);
        fireChange(lastNameInput, lastName);
        fireChange(emailInput, email);

        getByTestId('submit').click();

        await waitFor(() => {
            expect(getByTestId('newsletter-error')).toBeTruthy();
            expect(container).toMatchSnapshot();
            expect(firstNameInput).toBeTruthy();
            expect(lastNameInput).toBeTruthy();
            expect(emailInput).toBeTruthy();
            expect(btn).toBeTruthy();
        });
    });

    it('should display success message if api is ok', async () => {
        const onSaveMock = jest.fn(async () => ({
            result: 'success',
            msg: 'email saved',
        }));
        const firstName = 'bob';
        const lastName = 'john';
        const email = 'bob@gmail.com';
        const { container, getByTestId } = render(
            <Newsletter onSave={onSaveMock} />
        );

        const firstNameInput = getByTestId('firstName');
        const lastNameInput = getByTestId('lastName');
        const emailInput = getByTestId('email');
        const btn = getByTestId('submit');

        fireChange(firstNameInput, firstName);
        fireChange(lastNameInput, lastName);
        fireChange(emailInput, email);

        getByTestId('submit').click();

        await waitFor(() => {
            expect(getByTestId('newsletter-success')).toBeTruthy();
            expect(container).toMatchSnapshot();
            expect(firstNameInput).toBeTruthy();
            expect(lastNameInput).toBeTruthy();
            expect(emailInput).toBeTruthy();
            expect(btn).toBeTruthy();
        });
    });

    it('should display generic error message', async () => {
        const onSaveMock = jest.fn(() => {throw new Error('it should fail')});
        const firstName = 'bob';
        const lastName = 'john';
        const email = 'bob@gmail.com';
        const { container, getByTestId } = render(
            <Newsletter onSave={onSaveMock} />
        );

        const firstNameInput = getByTestId('firstName');
        const lastNameInput = getByTestId('lastName');
        const emailInput = getByTestId('email');
        const btn = getByTestId('submit');

        fireChange(firstNameInput, firstName);
        fireChange(lastNameInput, lastName);
        fireChange(emailInput, email);

        getByTestId('submit').click();

        await waitFor(() => {
            expect(getByTestId('generic-error')).toBeTruthy();
            expect(container).toMatchSnapshot();
            expect(firstNameInput).toBeTruthy();
            expect(lastNameInput).toBeTruthy();
            expect(emailInput).toBeTruthy();
            expect(btn).toBeTruthy();
        });
    });
});
