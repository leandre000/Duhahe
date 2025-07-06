import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryPicker from '../components/CategoryPicker';

const categories = [
  { label: 'Furniture', value: 1,backgroundColor:"red", icon: "apps" },
  { label: 'Clothing', value: 2, backgroundColor:"green", icon:"email" },
  { label: 'Camera', value: 3, backgroundColor:"blue", icon:"lock"},
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required("Category is required"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="price"
          maxLength={8}
          placeholder="Price"
          width={120}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;