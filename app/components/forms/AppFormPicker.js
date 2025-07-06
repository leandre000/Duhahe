import React from 'react';
import { useFormikContext } from 'formik';
import AppFormPicker from '../AppFormPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ items, name, placeholder, width, PickerItemComponent, numberOfColumns }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>

      <AppFormPicker
        items={items}
        
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
