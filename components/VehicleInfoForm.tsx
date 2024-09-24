import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { FormState } from '../types/FormTypes';
import formStyles from '../styles/formStyles';

interface Props {
    form: FormState;
    onInputChange: (field: keyof FormState, value: string) => void;
}

const VehicleInfoForm: React.FC<Props> = ({ form, onInputChange }) => {
    return (
        <View>
            <Text style={formStyles.sectionHeader}>Vehicle Information</Text>
            {/*Text input for vehicle make */}
            <TextInput
                style={formStyles.input}
                placeholder="Make"
                value={form.vehicleMake}
                onChangeText={(text) => onInputChange('vehicleMake', text)}
            />
            {/*Text input for vehicle model */}
            <TextInput
                style={formStyles.input}
                placeholder="Model"
                value={form.vehicleModel}
                onChangeText={(text) => onInputChange('vehicleModel', text)}
            />
            {/*Text input for vehicle year */}
            <TextInput
                style={formStyles.input}
                placeholder="Year"
                value={form.vehicleYear}
                keyboardType="numeric"
                onChangeText={(text) => onInputChange('vehicleYear', text)}
            />
        </View>
    );
};

export default VehicleInfoForm;
