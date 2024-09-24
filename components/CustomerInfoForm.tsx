//Customer Info Form Component
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { FormState } from '../types/FormTypes';
import formStyles
    from '../styles/formStyles';

//Define a props interface, which is the shape of the props the compoents will expect -> specifices the structure of the data passed to the component.
//Using a props interface helps with type safety, auto-completion, and scalability
interface Props {
    form: FormState; //Form state that holds the customer info data
    onInputChange: (field: keyof FormState, value: string) => void; //Function to update form data
}

//React.FC defines the component as a functional component in typescript, tells typescript that the props passed to this componenet should
//match the props used in the interface, needs to be a functional component so we can use react hooks like useState and useEffect
const CustomerInfoForm: React.FC<Props> = ({ form, onInputChange }) => {
    return (
        <View>
            <Text style={formStyles.sectionHeader}> Customer Info</Text>
            {/* TextInput for customers first name */}
            <TextInput
                style={formStyles.input}
                placeholder="First Name"
                value={form.firstName}
                onChangeText={(text) => onInputChange('firstName', text)} //Update name in form state
            />
            {/* TextInput for customers last name */}
            <TextInput
                style={formStyles.input}
                placeholder="Last Name"
                value={form.lastName}
                onChangeText={(text) => onInputChange('lastName', text)} //Update name in form state
            />
            {/*TextInput for customers phone number */}
            <TextInput
                style={formStyles.input}
                placeholder="Phone Number"
                value={form.phoneNumber}
                keyboardType="phone-pad"
                onChangeText={(text) => onInputChange('phoneNumber', text)}
            />
            {/*TextInput for Customers email address */}
            <TextInput
                style={formStyles.input}
                placeholder="Email"
                value={form.email}
                keyboardType="email-address"
                onChangeText={(text) => onInputChange('email', text)}
            />
        </View>
    );
};

export default CustomerInfoForm;
