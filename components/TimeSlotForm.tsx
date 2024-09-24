import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { FormState } from '../types/FormTypes';
import formStyles from '../styles/formStyles'

interface Props {
    form: FormState;
    onInputChange: (field: keyof FormState, value: string) => void
}

const TimeSlotForm: React.FC<Props> = ({ form, onInputChange }) => {
    return (
        <View>
            <Text style={formStyles.sectionHeader}>Preferred Time Slot</Text>
            {/*Text input for time slot */}
            <TextInput
                style={formStyles.input}
                placeholder="e.g, Tuesday 10:00AM"
                value={form.timeSlot}
                onChangeText={(text) => onInputChange('timeSlot', text)}
            />
        </View>
    );
};

export default TimeSlotForm;