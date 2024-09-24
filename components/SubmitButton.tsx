import React from 'react';
import { Button, View } from 'react-native';
import buttonStyles from '../styles/buttonStyles';

interface Props {
    onSubmit: () => void;
}

const SubmitButton: React.FC<Props> = ({ onSubmit }) => {
    return (
        <View style={buttonStyles.buttonContainer}>
            {/* Button to submit the form */}
            <Button title="Submit Reservation" onPress={onSubmit} />
        </View>
    );
};

export default SubmitButton;
