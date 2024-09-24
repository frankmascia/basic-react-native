import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import CustomerInfoForm from '../components/CustomerInfoForm';
import VehicleInfoForm from '../components/VehicleInfoForm';
import TimeSlotForm from '../components/TimeSlotForm';
import SubmitButton from '../components/SubmitButton';
import { FormState } from '../types/FormTypes';
import screenStyles from '../styles/screenStyles';

const ServiceReservationScreen: React.FC = () => {
    //Initialize form state with empty values

    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName:'',
        phoneNumber: '',
        email: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        timeSlot: '',
    });

    //Function to handle form input changes for any field
    //Dynamically updates the form state based on the field name and value provided

    const handleInputChange = (field: keyof FormState, value: string) => { //keyOF used here for typesafety in the forms
        setForm({
            ...form, //spread operator -> copy all exisiting form values into new object
            [field]: value, //only update the field that was changed, computed property name -> allows dynamically setting the key in the object based on the value of the field variable
        });
    };

    //This function checks if all form fieldsa are filled out
    //Returns true if all fields have values -> form is ready to be submitted

    const isFormValid = (): boolean => {
        return (
            form.firstName !== '' && //checking each form field is not an empty string by comparing the value to an empty string, allowing typescript to return a boolean
            form.lastName !== '' &&
            form.phoneNumber !== '' &&
            form.email !== '' &&
            form.vehicleMake !== '' &&
            form.vehicleModel !== '' &&
            form.vehicleYear !== '' &&
            form.timeSlot !== ''
        );
    };

    //Function to handle the form submission when the user clicks submit
    //Checks if the form is valid, then either submits the form or shows error alert

    const handleSubmit = () => {
        if (isFormValid()) {
            Alert.alert('Reservation Success', 'Customer and Vehicle Details captured successfully');
            console.log(form); //some logging for the form data just incase we need to debug

            // Reset form fields to empty after successfully submitting
            setForm({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                vehicleMake: '',
                vehicleModel: '',
                vehicleYear: '',
                timeSlot: '',
            });
        } else {
            //Error - missing fields
            Alert.alert('Error', 'Please fill out all fields.');
        }
    };

    return (
        <SafeAreaView style={screenStyles.container}>
            {/*Scrollview incase the user has a smaller screen and needs to scroll to see the entire form*/}
            <ScrollView>
                {/*Render the form sections */}
                <CustomerInfoForm form={form} onInputChange={handleInputChange} />
                <VehicleInfoForm form={form} onInputChange={handleInputChange} />
                <TimeSlotForm form={form} onInputChange={handleInputChange} />

                {/*Submit button for form submission */}
                <SubmitButton onSubmit={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ServiceReservationScreen;
